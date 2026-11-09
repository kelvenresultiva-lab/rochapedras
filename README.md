# Rocha Pedras — Marmoraria

Site da Rocha Pedras, marmoraria em Contagem/MG. Feito em HTML, CSS e JavaScript, com imagens locais. Não exige instalação de dependências nem compilação.

## Abrir

Abra `index.html` no navegador. Para usar um servidor local, execute na pasta do projeto:

```sh
python -m http.server 8080
```

Acesse http://localhost:8080.

## Arquivos

- `index.html`: conteúdo e estrutura.
- `styles.css`: visual e layout responsivo.
- `app.js`: menu, efeitos ao rolar e botão flutuante do WhatsApp.
- `assets/`: imagens utilizadas.
- `og-image.jpg`: imagem da prévia ao compartilhar o link.

## Contatos

- WhatsApp: +55 31 97576-5827
- Instagram: https://www.instagram.com/rochapedras/

Os pedidos de orçamento são feitos pelos botões que abrem o WhatsApp. Não existe formulário, backend, banco de dados ou painel administrativo.

## Imagens e conteúdo

As fotos dos projetos foram obtidas no perfil público @rochapedras. As imagens da abertura e da mesa de jantar são ilustrativas, do Unsplash, e as texturas de materiais também são ilustrativas, com créditos no rodapé. O Google Fonts fornece as famílias Poppins e Cormorant Garamond e exige conexão com a internet.

A logo é provisória. Depoimentos, marcas parceiras, endereço, horários e números comerciais não confirmados não foram inventados.

## Publicar em hospedagem estática

Envie `index.html`, `styles.css`, `app.js`, `og-image.jpg`, os ícones (`favicon.svg`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`) e a pasta `assets/` para a raiz pública da hospedagem, mantendo essa estrutura.

O site está em https://rochapedras.vercel.app. A prévia do WhatsApp usa esse endereço completo em `og:url`, `og:image`, no link canonical e no JSON-LD: se o domínio mudar, troque nesses pontos. Ao trocar `og-image.jpg`, aumente o número em `?v=` para o WhatsApp buscar a imagem nova.
