/*
 * Adega do Boi — configurações do site
 * ------------------------------------
 * Tudo o que muda com frequência e não é conteúdo de texto fica aqui.
 * Preços, horários e textos ficam direto no index.html (melhor para o Google).
 *
 * Depois de editar, salve o arquivo e publique de novo. Não precisa mexer em mais nada.
 */
window.SITE_CONFIG = {
  // Número do WhatsApp com DDD, só números. Ex.: "86999998888"
  // Enquanto estiver vazio, os botões "Reservar" usam RESERVA_URL ou, se ela também
  // estiver vazia, ligam para o telefone fixo abaixo.
  WHATSAPP_NUMBER: '558633037419',

  // Mensagem que já vem escrita quando a pessoa abre o WhatsApp.
  WHATSAPP_MENSAGEM:
    'Olá! Gostaria de reservar uma mesa na Adega do Boi.\nData: __\nHorário: __\nPessoas: __',

  // Link de reserva alternativo (ex.: sistema de reservas, formulário). Opcional.
  RESERVA_URL: '',

  // Telefone fixo no formato internacional, só números (usado como último recurso).
  TELEFONE: '+558633037419',

  // @ do Instagram, sem o "@". Ex.: "adegadoboi". Vazio = os links do Instagram ficam ocultos.
  INSTAGRAM: '',

  // Analytics. Vazios = nenhum script de terceiros é carregado e não aparece aviso de cookies.
  // Ao preencher qualquer um, o site mostra o aviso de cookies e só carrega após "Aceitar".
  GA4_ID: '',         // Ex.: "G-XXXXXXXXXX"
  META_PIXEL_ID: '',  // Ex.: "123456789012345"

  // Endereço final do site, sem barra no fim. Troque também no index.html, sitemap.xml e robots.txt.
  SITE_URL: 'https://www.adegadoboi.com.br',

  // Crédito discreto no rodapé.
  DESENVOLVEDOR_NOME: '[NOME_DESENVOLVEDOR]',
  DESENVOLVEDOR_URL: ''
};
