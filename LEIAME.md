# Adega do Boi — site

Landing page da churrascaria **Adega do Boi** (Av. Jóquei Clube, 2042 – Jóquei, Teresina – PI).
HTML, CSS e JavaScript puros: sem framework, sem build, sem dependências. Abre direto no navegador.

```
index.html                    página principal (textos, preços, horários)
politica-de-privacidade.html  política de privacidade (LGPD)
assets/css/style.css          visual
assets/js/config.js           ← o que mais muda: WhatsApp, Instagram, analytics, domínio
assets/js/main.js             comportamento (status aberto/fechado, "Hoje", menu, medição)
assets/img/                   fotos e logo (veja assets/img/LEIAME.txt)
robots.txt, sitemap.xml       para o Google
```

---

## 1. Itens marcados para CONFIRMAR

Procure por `CONFIRMAR` nos arquivos para achar cada um.

| O quê | Onde |
|---|---|
| Domínio final do site (hoje: `https://www.adegadoboi.com.br`) | `index.html` (canonical, og:url, og:image, JSON-LD), `config.js`, `sitemap.xml`, `robots.txt`, `politica-de-privacidade.html` |
| Preço do rodízio infantil (veio de um story de ~2 anos) | `index.html`, seção Valores |
| Se o buffet está incluso no valor do rodízio (o site **não** afirma isso) | `index.html`, card "Buffet" |
| Horários em feriados | `index.html`, tabela de horários |
| Link do perfil no Google Maps (hoje é uma busca pelo nome + endereço) | `index.html`, selo do Google no topo e "Ver avaliações no Google" |
| Se o número (86) 3303-7419 tem WhatsApp Business ativo (os botões Reservar já abrem o WhatsApp nele) | `config.js` → `WHATSAPP_NUMBER` |
| @ do Instagram | `config.js` → `INSTAGRAM` |
| IDs do Google Analytics 4 / Meta Pixel | `config.js` → `GA4_ID`, `META_PIXEL_ID` |
| Nome do desenvolvedor no rodapé | `config.js` → `DESENVOLVEDOR_NOME` (e `DESENVOLVEDOR_URL`) |
| Razão social / CNPJ e e-mail de privacidade (opcionais) | `politica-de-privacidade.html` |
| Logo oficial | `assets/img/logo-placeholder.svg` |
| Se há música ao vivo (o site **não** afirma; o couvert artístico aparece só como cobrança) | `index.html`, acima da nota de couvert |

---

## 2. Fotos que precisam ser feitas

Lista completa, com tamanho e proporção, em [assets/img/LEIAME.txt](assets/img/LEIAME.txt). Resumo:

1. **hero.jpg** — espeto de picanha sendo servido na mesa (vertical 4:5)
2. **destaque-rodizio.jpg** — cortes de carne no espeto
3. **destaque-buffet.jpg** — buffet de saladas e pratos quentes
4. **destaque-familia.jpg** — família reunida à mesa
5. **destaque-bebidas.jpg** — chopp e caipirissima
6. **galeria-1 a 6.jpg** — salão, mesa posta, passador servindo, buffet, chopp no balcão, fachada
7. **og-image.jpg** — imagem de compartilhamento (1200 × 630)
8. **Logo oficial** em SVG (ou PNG transparente)

---

## 3. Como trocar…

### …uma foto
Salve a foto nova com **o mesmo nome** dentro de `assets/img/` e substitua o arquivo antigo. Pronto.
Se o assunto mudar, atualize o `alt` dessa imagem no `index.html` (busque pelo nome do arquivo).

### …um preço
No `index.html`, seção `<!-- 5. Valores do rodízio -->`. Cada preço aparece assim:

```html
<data class="price" value="62.90"><span class="price__cur">R$</span><span class="price__int">62</span><span class="price__cents">,90</span></data>
```

Mude **os três lugares**: `value="62.90"` (com ponto), o inteiro `62` e os centavos `,90`.
O destaque "Hoje" no topo da página lê o `value` automaticamente: não precisa mudar em outro lugar.

### …um horário
No `index.html`, tabela da seção `<!-- 9. Horários e como chegar -->`. Em cada célula, mude o texto **e** os atributos:

```html
<td data-refeicao="jantar" data-abre="18:30" data-fecha="23:00">18:30 – 23:00</td>
```

A barra "Aberto agora / Fechado", o destaque "Hoje" e o resumo do rodapé leem essa tabela sozinhos.
Atualize também o bloco `openingHoursSpecification` no `<head>` (é o que o Google lê).

### …o número do WhatsApp
Em `assets/js/config.js`:

```js
WHATSAPP_NUMBER: '558633037419',   // 55 + DDD + número, só dígitos (atual)
```

Todos os botões "Reservar" passam a abrir o WhatsApp com a mensagem pronta
("Olá! Gostaria de reservar uma mesa na Adega do Boi. Data: __ Horário: __ Pessoas: __").
Hoje está configurado com (86) 3303-7419. Ao trocar o número, troque também o link `https://wa.me/558633037419?text=...` que aparece nos botões Reservar do `index.html` (é o link usado antes do JavaScript carregar).
Se apagar o número, os botões usam `RESERVA_URL` (se houver) ou ligam para (86) 3303-7419.

---

## 4. Medição: de onde vêm os cliques

Os botões disparam estes eventos (quando GA4 ou Meta Pixel estiverem configurados e o visitante aceitar os cookies):

| Evento | Quando |
|---|---|
| `reservar_whatsapp` | toque em Reservar quando o WhatsApp está configurado (`origem`: hero, header, valores, cta_final, barra_inferior) |
| `reservar_link` | toque em Reservar quando só a `RESERVA_URL` está configurada |
| `ligar` | toque em Ligar, ou em Reservar enquanto não há WhatsApp nem link (aí o botão liga para o fixo; `metodo`: telefone) |
| `rota` | toque em Como chegar / Rota |
| `instagram` | toque no link do Instagram |
| `ver_valores` | a seção de valores apareceu na tela |
| `ver_avaliacoes` | toque no selo/link do Google |

Sem IDs no `config.js`, **nenhum script de terceiros é carregado** e não aparece aviso de cookies. Eventos que acontecem antes do aceite ficam guardados na página e só são enviados se a pessoa aceitar; se recusar, são descartados.

### Links para usar (troque o domínio pelo final)

| Onde colar | Link |
|---|---|
| Bio do Instagram | `https://www.adegadoboi.com.br/?utm_source=instagram&utm_medium=bio` |
| Stories / posts com link | `https://www.adegadoboi.com.br/?utm_source=instagram&utm_medium=stories` |
| Perfil do Google (campo "Site") | `https://www.adegadoboi.com.br/?utm_source=google_maps&utm_medium=perfil` |
| Botão de reserva no Google (se usar) | `https://www.adegadoboi.com.br/?utm_source=google_maps&utm_medium=reserva` |
| WhatsApp (status, lista de transmissão) | `https://www.adegadoboi.com.br/?utm_source=whatsapp&utm_medium=status` |

No GA4, veja em **Relatórios → Aquisição → Aquisição de tráfego**, filtrando por "Origem/mídia da sessão".

---

## 5. Publicar no Netlify

**Jeito mais rápido (arrastar e soltar):**
1. Crie uma conta grátis em [app.netlify.com](https://app.netlify.com).
2. Em **Sites**, arraste a pasta inteira do projeto (a que tem o `index.html`) para a área "Drag and drop your site folder here".
3. Em segundos o site fica no ar num endereço `algo.netlify.app`. Em **Site configuration → Change site name** dá para escolher, por exemplo, `adegadoboi.netlify.app`.
4. Para atualizar depois: **Deploys → arraste a pasta de novo**.

**Domínio próprio (ex.: adegadoboi.com.br):**
1. Registre o domínio (registro.br para `.com.br`).
2. No Netlify: **Domain management → Add a domain** e siga as instruções de DNS (ou use os nameservers do Netlify).
3. O HTTPS é ativado automaticamente.
4. Troque `https://www.adegadoboi.com.br` pelo domínio final nos arquivos listados na seção 1 e publique de novo.

**Depois de publicar:**
- Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie o `sitemap.xml`.
- Coloque o link do site no perfil do Google e na bio do Instagram (com os UTMs acima).
- Teste no celular: [PageSpeed Insights](https://pagespeed.web.dev) deve dar 90+ nas quatro notas.

---

## 6. Testar no computador

Abra o `index.html` com dois cliques. Para testar como no servidor (recomendado), na pasta do projeto rode
`npx serve .` (precisa do Node.js) e abra o endereço que aparecer.
