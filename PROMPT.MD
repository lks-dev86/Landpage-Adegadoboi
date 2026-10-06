Você é um desenvolvedor front-end sênior e designer de interface especializado em sites de restaurantes que convertem no celular. Crie uma landing page completa, em português do Brasil, para a churrascaria **Adega do Boi** (Teresina–PI).

## OBJETIVO
Esta página é um demo que vou mostrar ao dono para vender o serviço; se aprovada, vira o site oficial. A página tem um único trabalho: levar o visitante (quase sempre no celular, vindo do Google Maps ou do Instagram) a **reservar mesa pelo WhatsApp, ligar ou traçar a rota**. Valores do rodízio, horários e como chegar são o que as pessoas mais procuram: devem ser achados em até 2 toques.

## STACK E REGRAS TÉCNICAS
- HTML, CSS e JavaScript puros. Sem framework, sem build, sem dependências. Deve abrir direto no navegador e publicar como site estático no Netlify.
- Estrutura: index.html, assets/css/style.css, assets/js/config.js, assets/js/main.js, assets/img/ (placeholders), politica-de-privacidade.html, robots.txt, sitemap.xml, LEIAME.md
- Mobile-first (comece em 390px), depois tablet e desktop.
- config.js concentra o que muda: número do WhatsApp, link de reserva, @ do Instagram, IDs de analytics (GA4/Meta Pixel), URL do site e crédito do desenvolvedor. Preços, textos e horários ficam direto no HTML (melhor para SEO), com comentário <!-- CONFIRMAR --> onde houver dúvida.
- Lighthouse mobile >= 90 em Performance, Acessibilidade, Boas práticas e SEO. Imagens com width/height e loading="lazy" (exceto o hero), CSS enxuto, no máximo 3 famílias de fontes (Google Fonts, display=swap).
- Acessibilidade: HTML semântico, contraste AA (cuidado com laranja sobre vinho), foco visível, alvos de toque >= 44px, alt nas imagens, respeitar prefers-reduced-motion, menu mobile navegável por teclado.
- Animações discretas (fade/slide ao rolar com IntersectionObserver). Nada que atrapalhe a leitura.

## IDENTIDADE VISUAL (baseada nos materiais do Instagram do restaurante)
- Cores aproximadas, como variáveis CSS: vinho/bordô ~#8B1030 (dominante), vinho escuro ~#5E0B20 (fundos e gradientes), laranja ~#F28A2E (botões e destaques), âmbar claro ~#FDBA6B (detalhes), creme ~#FFF3E2 (fundos claros e texto sobre vinho). Se eu colocar o logo em assets/img/, extraia as cores reais dele e ajuste.
- Tipografia: títulos em slab serif pesada em caixa alta (sugestão: Alfa Slab One); uma palavra manuscrita estilo pincel (sugestão: Kaushan Script) em destaque nos títulos, com moderação, como "Rodízio" + "Infantil" nos posts deles; texto corrido em sans legível (Nunito ou Poppins).
- Linguagem visual: cards de cantos arredondados com borda laranja fina sobre fundo vinho (como nos posts de valores), gradientes em vinho, fotografia quente de carne com fundo escuro, o boi estilizado como elemento de marca. Clima acolhedor, familiar e apetitoso. Nada de visual corporativo frio nem cara de template genérico.
- Logo: emblema de cabeça de boi + "ADEGA DO BOI — CHURRASCARIA". Não tenho o arquivo: crie um wordmark provisório em SVG (assets/img/logo-placeholder.svg), fácil de trocar.

## FOTOS
NÃO baixe, copie nem faça hotlink de imagens do Instagram ou do Google. Crie placeholders (gradiente vinho + rótulo do que deve entrar, ex.: "FOTO: espeto de picanha") para: hero, 6 da galeria, 4 dos cards de destaque e og-image. Gere assets/img/LEIAME.txt com nome do arquivo, proporção e o que fotografar. O layout precisa ficar bonito com os placeholders e funcionar ao trocar só o arquivo.

## DADOS REAIS (use exatamente; não invente nada além disso)
- Nome: Adega do Boi (churrascaria, rodízio)
- Endereço: Av. Jóquei Clube, 2042 – Jóquei, Teresina – PI, 64049-240 (Plus Code W6G9+CF)
- Telefone fixo: (86) 3303-7419
- Google: 4,3 estrelas, 2.676 avaliações (dados de 03/10/2026); faixa de preço informada: R$ 40–120 por pessoa
- Serviços (como aparecem no Google): refeição no local, para viagem, entrega sem contato
- Horários: Almoço todos os dias 11:30–15:30. Jantar: seg–qui 18:30–23:00; sex–sáb 18:30–23:30; dom 18:30–22:30
- Valores do rodízio (por pessoa):
  Seg–qui: almoço R$ 62,90 | jantar R$ 45,90
  Sex–sáb: almoço R$ 69,90 | jantar R$ 54,90
  Domingo: almoço R$ 75,90 | jantar R$ 49,90
  Nota: couvert artístico de R$ 8,00 e taxa de serviço cobrados à parte; valores válidos exceto feriados.
- Rodízio infantil: até 4 anos não paga o rodízio; 5 a 9 anos R$ 32,90 por criança; a partir de 10 anos, valor normal. <!-- CONFIRMAR: preço veio de um story com ~2 anos -->
- Destaques do cardápio. Mais pedidos: Picanha Suína, Rodízio de Carne, Petit Gateau. Também: Fraldinha, Buffet de Saladas, Queijo Coalho com Melaço de Cana, Chopp, Caipirissima, Margarita, Coquetel de Morango sem álcool, Cerveja super gelada.
- O que os clientes mais elogiam (parafraseie, sem citar avaliações de pessoas): variedade de carnes incluindo picanha, buffet com saladas e pratos quentes, ambiente agradável e familiar, equipe atenciosa, bom custo-benefício.

## REGRAS DE CONTEÚDO
- Não invente depoimentos, nomes de clientes, prêmios, ano de fundação, quantidade de cortes, promoções, descrições de preparo, preços de itens do cardápio nem superlativos como "o melhor de Teresina". Se faltar dado, omita ou deixe <!-- CONFIRMAR -->. Nunca preencha com algo plausível.
- Não afirme que o buffet está incluso no valor do rodízio, nem que há música ao vivo. Deixe <!-- CONFIRMAR -->.
- Tom: português brasileiro natural, caloroso, frases curtas e diretas. Sem clichês de texto gerado por IA ("experiência gastronômica inesquecível", "sabores que encantam").

## ESTRUTURA DA PÁGINA (nesta ordem)
1. Barra fina no topo com status dinâmico calculado em JS no fuso America/Fortaleza ("Aberto agora · fecha às 23:00" / "Fechado · abre hoje às 18:30"). A fonte única dos horários é a tabela de horários do HTML (use atributos data-*), sem duplicar.
2. Header fixo: logo, âncoras (Valores, Cardápio, Horários, Como chegar) e botão "Reservar". Menu hambúrguer no mobile.
3. Hero: título forte (ex.: "Rodízio de carnes, buffet completo e mesa para a família toda"), subtítulo "No Jóquei, em Teresina. Almoço e jantar todos os dias.", botões "Reservar mesa" (primário, WhatsApp) e "Ver valores" (secundário), e selo "4,3 ★ no Google · +2.600 avaliações" linkando para o perfil no Maps.
4. O que você encontra: 4 cards (Rodízio de carnes, Buffet, Para a família, Bebidas) usando só os dados acima.
5. Valores do rodízio: a seção mais importante. Cards em vinho com borda laranja, preços grandes e legíveis, nota de couvert/taxa/feriados, bloco destacado do rodízio infantil e botão "Reservar".
6. Destaques do cardápio: grid com os itens listados, selo "Mais pedido" nos 3 primeiros.
7. Ambiente: galeria com 6 placeholders (grid responsivo, sem lightbox pesado).
8. Prova social: selo do Google + 3 temas elogiados (parafraseados) + link "Ver avaliações no Google". Sem depoimentos.
9. Horários e como chegar: tabela de horários, endereço, Plus Code, mapa (iframe do Google Maps por endereço, sem API key, loading="lazy"), botões "Como chegar" (link de rota do Maps) e "Ligar" (tel:+558633037419), serviços disponíveis.
10. Faixa final de CTA em vinho: "Reserve sua mesa", com texto "Vai em grupo ou comemorar uma data? Chame no WhatsApp".
11. Rodapé: endereço, horários resumidos, Instagram, link da política de privacidade, aviso "Couvert artístico e taxa de serviço cobrados à parte" e crédito discreto "Site por [NOME_DESENVOLVEDOR]" vindo do config.js.
12. Barra fixa inferior só no mobile com 3 botões: Reservar, Ligar, Rota.

## CONVERSÃO E MEDIÇÃO
- Botão de WhatsApp: https://wa.me/55NUMERO?text=... com mensagem pré-preenchida e URL-encoded ("Olá! Gostaria de reservar uma mesa na Adega do Boi. Data: __ Horário: __ Pessoas: __"). WHATSAPP_NUMBER ainda é desconhecido e fica vazio no config.js; enquanto vazio, os botões de reserva usam RESERVA_URL (se existir) ou tel:+558633037419.
- Função track(evento, params) que envia ao gtag/dataLayer se existirem e NÃO carrega nenhum script de terceiros enquanto os IDs estiverem vazios. Eventos: reservar_whatsapp, ligar, rota, instagram, ver_valores (IntersectionObserver). Mapeie os cliques via atributos data-track.
- Crie uma política de privacidade (LGPD) simples, linkada no rodapé. Se algum ID de analytics for preenchido, mostre um aviso de cookies discreto (aceitar/recusar) e só carregue o tracking após aceitar.
- No LEIAME.md, documente quais links usar na bio do Instagram e no perfil do Google (ex.: ?utm_source=instagram&utm_medium=bio e ?utm_source=google_maps&utm_medium=perfil) para eu medir de onde vêm os cliques.

## SEO
- title: "Adega do Boi | Churrascaria e Rodízio em Teresina – PI"
- meta description: "Rodízio de carnes e buffet no Jóquei, Teresina. Veja valores, horários e reserve sua mesa."
- lang="pt-BR", canonical, Open Graph e Twitter Card (imagem placeholder), favicon.
- JSON-LD tipo Restaurant com name, address, telephone, servesCuisine, priceRange, openingHoursSpecification e url. NÃO inclua aggregateRating.
- sitemap.xml e robots.txt com domínio placeholder.

## ENTREGA
1. Não me faça perguntas antes de começar: use as suposições acima.
2. Ao terminar, rode um servidor local, confira a página em 390px e 1280px, cheque erros de console, links quebrados e contraste, e corrija o que encontrar.
3. Me entregue: (a) lista de tudo que ficou marcado como CONFIRMAR, (b) lista das fotos que preciso conseguir, (c) como trocar foto, preço e número de WhatsApp, (d) como publicar no Netlify.