/*
 * Adega do Boi — comportamento da página
 * Sem dependências. Lê tudo do HTML (tabela de horários e de valores) e do config.js.
 */
(function () {
  'use strict';

  window.__adbReady = true;

  const C = window.SITE_CONFIG || {};
  const doc = document;
  const root = doc.documentElement;
  const TZ = 'America/Fortaleza';
  const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const REFEICAO = { almoco: 'Almoço', jantar: 'Jantar' };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

  const $ = (s, c) => (c || doc).querySelector(s);
  const $$ = (s, c) => Array.from((c || doc).querySelectorAll(s));

  /* ------------------------------------------------------------------
   * Tempo em Teresina (America/Fortaleza, sem horário de verão)
   * ------------------------------------------------------------------ */
  const fmtTZ = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  });
  function agoraTeresina() {
    const p = {};
    fmtTZ.formatToParts(new Date()).forEach((x) => { p[x.type] = x.value; });
    return {
      dia: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday),
      min: (parseInt(p.hour, 10) % 24) * 60 + parseInt(p.minute, 10)
    };
  }
  const paraMin = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  const hhmm = (min) => {
    const m = ((min % 1440) + 1440) % 1440;
    return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  };
  const diasDe = (el) => el.dataset.dias.trim().split(/\s+/).map(Number);

  /* ------------------------------------------------------------------
   * Horários — fonte única: a tabela [data-hours]
   * ------------------------------------------------------------------ */
  function lerHorarios() {
    const semana = [[], [], [], [], [], [], []];
    $$('[data-hours] tbody tr[data-dias]').forEach((tr) => {
      const dias = diasDe(tr);
      $$('td[data-abre][data-fecha]', tr).forEach((td) => {
        const turno = {
          refeicao: td.dataset.refeicao,
          abre: paraMin(td.dataset.abre),
          fecha: paraMin(td.dataset.fecha),
          linha: tr
        };
        if (turno.fecha <= turno.abre) turno.fecha += 1440; // turno que passa da meia-noite
        dias.forEach((d) => semana[d].push(turno));
      });
    });
    semana.forEach((t) => t.sort((a, b) => a.abre - b.abre));
    return semana;
  }

  function situacao(semana, agora) {
    const ontem = (agora.dia + 6) % 7;
    for (const t of semana[ontem]) {
      if (t.fecha > 1440 && agora.min < t.fecha - 1440) {
        return { aberto: true, turno: t, dia: ontem, fecha: t.fecha };
      }
    }
    for (const t of semana[agora.dia]) {
      if (agora.min >= t.abre && agora.min < t.fecha) {
        return { aberto: true, turno: t, dia: agora.dia, fecha: t.fecha };
      }
    }
    for (let k = 0; k < 8; k++) {
      const d = (agora.dia + k) % 7;
      for (const t of semana[d]) {
        if (k > 0 || t.abre > agora.min) return { aberto: false, turno: t, dia: d, emDias: k, abre: t.abre };
      }
    }
    return null;
  }

  function quando(emDias, dia) {
    if (emDias === 0) return 'hoje';
    if (emDias === 1) return 'amanhã';
    return dia === 0 || dia === 6 ? 'no ' + DIAS[dia] : 'na ' + DIAS[dia];
  }

  /* Barra de status: uma janela fixa; a troca de estado sobe uma linha inteira */
  const statusBox = $('[data-status]');
  const statusText = $('[data-status-text]');
  function pintarStatus(s) {
    if (!statusBox || !statusText || !s) return;
    let html, estado;
    if (s.aberto) {
      estado = 'aberto';
      html = '<strong>Aberto agora</strong> · fecha às ' + hhmm(s.fecha);
    } else {
      estado = 'fechado';
      html = '<strong>Fechado</strong> · abre ' + quando(s.emDias, s.dia) + ' às ' + hhmm(s.abre);
    }
    if (statusText.innerHTML === html) return;
    statusBox.dataset.estado = estado;
    statusText.innerHTML = html;
    if (!reduceMotion && statusText.animate) {
      statusText.animate(
        [{ transform: 'translateY(100%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
        { duration: 420, easing: EASE_OUT }
      );
    }
  }

  /* ------------------------------------------------------------------
   * Valores — fonte única: os cards .price-card
   * ------------------------------------------------------------------ */
  const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  function precoDe(dia, refeicao) {
    const card = $$('.price-card[data-dias]').find((c) => diasDe(c).includes(dia));
    if (!card) return null;
    const row = $('.price-row[data-refeicao="' + refeicao + '"]', card);
    const data = row && $('data.price', row);
    if (!data) return null;
    return { card, row, texto: brl.format(Number(data.value)) };
  }

  /* Marcador "Hoje": chip do hero, card de valores e linha da tabela */
  function pintarHoje(semana, agora, s) {
    // Card de valores de hoje
    $$('.price-card').forEach((card) => {
      const ehHoje = diasDe(card).includes(agora.dia);
      card.classList.toggle('is-today', ehHoje);
      const tag = $('[data-hoje-tag]', card);
      if (tag) tag.hidden = !ehHoje;
    });
    $$('.price-row.is-now').forEach((r) => r.classList.remove('is-now'));

    // Linha da tabela de horários
    $$('[data-hours] tbody tr').forEach((tr) => {
      const ehHoje = diasDe(tr).includes(agora.dia);
      tr.classList.toggle('is-today', ehHoje);
      let tag = $('.hours__hoje', tr);
      if (ehHoje && !tag) {
        tag = doc.createElement('span');
        tag.className = 'hours__hoje';
        tag.textContent = 'Hoje';
        tr.querySelector('th').appendChild(tag);
      } else if (!ehHoje && tag) {
        tag.remove();
      }
    });

    // Chip do hero: o turno aberto agora, ou o próximo
    const chip = $('[data-today]');
    if (!chip || !s) return;
    const preco = precoDe(s.dia, s.turno.refeicao);
    if (!preco) { chip.hidden = true; return; }
    if (s.dia === agora.dia) preco.row.classList.add('is-now');

    let tag;
    if (s.aberto) tag = 'Agora';
    else if (s.emDias === 0) tag = 'Hoje';
    else if (s.emDias === 1) tag = 'Amanhã';
    else tag = DIAS[s.dia].charAt(0).toUpperCase() + DIAS[s.dia].slice(1);

    $('[data-today-tag]', chip).textContent = tag;
    $('[data-today-label]', chip).textContent = REFEICAO[s.turno.refeicao] + ' de ' + DIAS[s.dia];
    $('[data-today-price]', chip).textContent = preco.texto;
    chip.setAttribute('aria-label', tag + ': ' + REFEICAO[s.turno.refeicao].toLowerCase() + ' de ' + DIAS[s.dia] +
      ', ' + preco.texto + ' por pessoa. Ver todos os valores');
    chip.hidden = false;
  }

  /* Resumo de horários do rodapé, gerado da mesma tabela */
  function pintarResumo(semana) {
    const alvo = $('[data-hours-summary]');
    if (!alvo) return;
    const partes = ['almoco', 'jantar'].map((ref) => {
      const turnos = semana.map((dia) => dia.find((t) => t.refeicao === ref)).filter(Boolean);
      if (!turnos.length) return null;
      const abre = new Set(turnos.map((t) => t.abre));
      const fecha = new Set(turnos.map((t) => t.fecha));
      const todos = turnos.length === 7 ? 'todos os dias, ' : '';
      if (abre.size === 1 && fecha.size === 1) {
        return REFEICAO[ref] + ': ' + todos + hhmm(turnos[0].abre) + '–' + hhmm(turnos[0].fecha);
      }
      if (abre.size === 1) {
        return REFEICAO[ref] + ': ' + todos + 'a partir das ' + hhmm(turnos[0].abre);
      }
      return null;
    }).filter(Boolean);
    if (partes.length) alvo.textContent = partes.join('. ') + '.';
  }

  function atualizarTempo() {
    const semana = lerHorarios();
    const agora = agoraTeresina();
    const s = situacao(semana, agora);
    pintarStatus(s);
    pintarHoje(semana, agora, s);
    return semana;
  }

  /* ------------------------------------------------------------------
   * Links de reserva: WhatsApp → RESERVA_URL → telefone fixo
   * ------------------------------------------------------------------ */
  function configurarReserva() {
    const tel = 'tel:' + (C.TELEFONE || '+558633037419');
    let wa = String(C.WHATSAPP_NUMBER || '').replace(/\D/g, '');
    if (wa && !(wa.startsWith('55') && wa.length >= 12)) wa = '55' + wa;

    let href = tel;
    let metodo = 'telefone';
    if (wa) {
      const msg = C.WHATSAPP_MENSAGEM ||
        'Olá! Gostaria de reservar uma mesa na Adega do Boi. Data: __ Horário: __ Pessoas: __';
      href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(msg);
      metodo = 'whatsapp';
    } else if (C.RESERVA_URL) {
      href = C.RESERVA_URL;
      metodo = 'link';
    }

    // O nome do evento segue o que o botão realmente faz
    const evento = { whatsapp: 'reservar_whatsapp', link: 'reservar_link', telefone: 'ligar' }[metodo];
    $$('[data-reserva]').forEach((a) => {
      a.href = href;
      a.dataset.metodo = metodo;
      a.dataset.track = evento;
      if (metodo !== 'telefone') { a.target = '_blank'; a.rel = 'noopener'; }
    });

    if (metodo !== 'whatsapp') {
      const p = $('[data-cta-text]');
      if (p && p.dataset.semWhatsapp) p.textContent = p.dataset.semWhatsapp;
    }
  }

  /* ------------------------------------------------------------------
   * Instagram, crédito e ano
   * ------------------------------------------------------------------ */
  function configurarExtras() {
    const ig = String(C.INSTAGRAM || '').replace(/^@/, '').trim();
    if (ig) {
      $$('[data-instagram]').forEach((el) => { el.hidden = false; });
      $$('[data-instagram-link]').forEach((a) => { a.href = 'https://www.instagram.com/' + encodeURIComponent(ig) + '/'; });
      $$('[data-instagram-handle]').forEach((s) => { s.textContent = '@' + ig; });
    }

    const credito = $('[data-dev-credit]');
    const nome = String(C.DESENVOLVEDOR_NOME || '').trim();
    if (credito && nome) {
      credito.textContent = 'Site por ';
      if (C.DESENVOLVEDOR_URL) {
        const a = doc.createElement('a');
        a.href = C.DESENVOLVEDOR_URL;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = nome;
        credito.appendChild(a);
      } else {
        credito.append(nome);
      }
    }

    const ano = $('[data-ano]');
    if (ano) ano.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------
   * Medição — track(evento, params)
   * Só envia se gtag/dataLayer/fbq existirem (ou seja, após o aceite).
   * ------------------------------------------------------------------ */
  const temAnalytics = Boolean(C.GA4_ID || C.META_PIXEL_ID);
  const fila = []; // eventos guardados até o visitante aceitar os cookies

  function track(evento, params) {
    params = params || {};
    if (temAnalytics && !window.__adbAnalytics) {
      if (fila.length < 30) fila.push([evento, params]);
      return;
    }
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', evento, params);
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(Object.assign({ event: evento }, params));
      }
      if (typeof window.fbq === 'function') {
        const padrao = { reservar_whatsapp: 'Contact', ligar: 'Contact', rota: 'FindLocation' };
        if (padrao[evento]) window.fbq('track', padrao[evento], params);
        else window.fbq('trackCustom', evento, params);
      }
    } catch (e) { /* medição nunca pode quebrar a página */ }
  }
  window.track = track;

  function configurarTracking() {
    doc.addEventListener('click', (e) => {
      const el = e.target.closest('[data-track]');
      if (!el) return;
      const params = { origem: el.dataset.origem || '' };
      if (el.dataset.metodo) params.metodo = el.dataset.metodo;
      track(el.dataset.track, params);
    });

    const valores = $('#valores');
    if (valores && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((en) => en.isIntersecting)) {
          track('ver_valores', {});
          io.disconnect();
        }
      }, { rootMargin: '0px 0px -45% 0px' });
      io.observe(valores);
    }
  }

  /* ------------------------------------------------------------------
   * Consentimento (LGPD) — só existe se houver ID de analytics
   * ------------------------------------------------------------------ */
  const CHAVE = 'adb_consentimento_v1';
  const lerConsent = () => { try { return localStorage.getItem(CHAVE); } catch (e) { return null; } };
  const salvarConsent = (v) => { try { localStorage.setItem(CHAVE, v); } catch (e) { /* modo privado */ } };

  function carregarAnalytics() {
    if (window.__adbAnalytics) return;
    window.__adbAnalytics = true;

    if (C.GA4_ID) {
      const s = doc.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(C.GA4_ID);
      doc.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', C.GA4_ID);
    }

    if (C.META_PIXEL_ID) {
      /* eslint-disable */
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, doc, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
      window.fbq('init', C.META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }

    fila.splice(0).forEach(([evento, params]) => track(evento, params));
  }

  function mostrarConsent() {
    if ($('.consent')) return;
    const box = doc.createElement('div');
    box.className = 'consent';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Aviso de cookies');
    box.innerHTML =
      '<p>Usamos cookies de medição para saber de onde vêm as visitas e melhorar o site. Você escolhe. ' +
      '<a href="politica-de-privacidade.html">Saiba mais</a></p>' +
      '<div class="consent__actions">' +
      '<button type="button" class="btn btn--primary" data-consent="aceito">Aceitar</button>' +
      '<button type="button" class="btn btn--outline" data-consent="recusado">Recusar</button>' +
      '</div>';
    doc.body.appendChild(box);
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add('is-in')));

    box.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-consent]');
      if (!btn) return;
      const antes = lerConsent();
      const escolha = btn.dataset.consent;
      salvarConsent(escolha);
      box.classList.remove('is-in');
      setTimeout(() => box.remove(), reduceMotion ? 0 : 240);
      if (escolha === 'aceito') carregarAnalytics();
      else {
        fila.length = 0; // recusou: descarta o que estava guardado
        if (antes === 'aceito') window.location.reload(); // descarrega scripts já carregados
      }
    });
  }

  function configurarConsent() {
    if (!temAnalytics) return; // nenhum script de terceiros, nenhum aviso
    $$('[data-cookie-prefs]').forEach((el) => { el.hidden = false; });
    const abrir = $('[data-cookie-open]');
    if (abrir) abrir.addEventListener('click', mostrarConsent);
    const atual = lerConsent();
    if (atual === 'aceito') carregarAnalytics();
    else if (atual !== 'recusado') mostrarConsent();
  }

  /* ------------------------------------------------------------------
   * Menu mobile
   * ------------------------------------------------------------------ */
  function configurarMenu() {
    const toggle = $('[data-menu-toggle]');
    const menu = $('[data-menu]');
    if (!toggle || !menu) return;
    const rotulo = $('.sr-only', toggle);

    const onKey = (e) => { if (e.key === 'Escape') fechar(true); };
    const onFora = (e) => { if (!menu.contains(e.target) && !toggle.contains(e.target)) fechar(false); };

    function abrir() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      if (rotulo) rotulo.textContent = 'Fechar menu';
      doc.addEventListener('keydown', onKey);
      doc.addEventListener('pointerdown', onFora);
      const primeiro = $('a', menu);
      if (primeiro) primeiro.focus({ preventScroll: true });
    }
    function fechar(devolverFoco) {
      if (!menu.classList.contains('is-open')) return;
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (rotulo) rotulo.textContent = 'Menu';
      doc.removeEventListener('keydown', onKey);
      doc.removeEventListener('pointerdown', onFora);
      if (devolverFoco) toggle.focus();
    }

    toggle.addEventListener('click', () => {
      if (menu.classList.contains('is-open')) fechar(false);
      else abrir();
    });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) fechar(false); });
    menu.addEventListener('focusout', (e) => {
      if (e.relatedTarget && !menu.contains(e.relatedTarget) && e.relatedTarget !== toggle) fechar(false);
    });
  }

  /* ------------------------------------------------------------------
   * Header com sombra quando a barra de status sai da tela
   * ------------------------------------------------------------------ */
  function configurarHeader() {
    const header = $('[data-header]');
    if (!header || !statusBox || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(([en]) => {
      header.classList.toggle('is-scrolled', !en.isIntersecting);
    }).observe(statusBox);
  }

  /* ------------------------------------------------------------------
   * Uma ação laranja por vez: enquanto o botão do hero aparece,
   * o Reservar do header e da barra inferior ficam em contorno
   * ------------------------------------------------------------------ */
  function configurarAcaoPrincipal() {
    const ctas = $('.hero__ctas');
    if (!ctas || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(([en]) => {
      root.classList.toggle('cta-hero-visivel', en.isIntersecting);
    }, { rootMargin: '-64px 0px -72px 0px' }).observe(ctas);
  }

  /* ------------------------------------------------------------------
   * Aparição ao rolar (a classe .js-motion é posta no <head>)
   * ------------------------------------------------------------------ */
  function configurarReveal() {
    if (!root.classList.contains('js-motion')) return;
    const alvos = $$('.reveal, .reveal-clip');
    const porGrupo = new Map();
    alvos.forEach((el) => {
      const i = porGrupo.get(el.parentElement) || 0;
      el.style.setProperty('--i', String(Math.min(i, 6)));
      porGrupo.set(el.parentElement, i + 1);
    });
    // Dois observadores com limiares diferentes, e a diferença importa.
    //
    // As placas da galeria (.reveal-clip) começam com clip-path: inset(0 0 100%),
    // ou seja, área pintada zero. O Chrome calcula o intersectionRatio DEPOIS de
    // aplicar o clip-path do próprio alvo, então essas placas reportam ratio 0,00
    // mesmo ocupando a tela inteira — e um limiar de 0,12 nunca é alcançado.
    // O clip só abriria com .is-in, que só viria se o limiar fosse alcançado:
    // impasse circular, e a seção Ambiente ficava invisível para sempre.
    // Com threshold 0 o callback dispara por isIntersecting, que continua true.
    // Não eleve este limiar sem antes medir o ratio de um elemento clipado.
    const revelar = (io) => (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    };
    const margem = '0px 0px -8% 0px';
    let ioFade, ioClip;
    ioFade = new IntersectionObserver((e) => revelar(ioFade)(e), { rootMargin: margem, threshold: 0.12 });
    ioClip = new IntersectionObserver((e) => revelar(ioClip)(e), { rootMargin: margem, threshold: 0 });
    alvos.forEach((el) => (el.classList.contains('reveal-clip') ? ioClip : ioFade).observe(el));
  }

  /* ------------------------------------------------------------------
   * Início
   * ------------------------------------------------------------------ */
  configurarReveal();
  configurarReserva();
  configurarExtras();
  configurarTracking();
  configurarConsent();
  configurarMenu();
  configurarHeader();
  configurarAcaoPrincipal();

  const semana = atualizarTempo();
  pintarResumo(semana);
  setInterval(atualizarTempo, 30 * 1000);
  doc.addEventListener('visibilitychange', () => { if (!doc.hidden) atualizarTempo(); });
})();
