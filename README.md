# Rocha Pedras — Marmoraria

Site completo em HTML, CSS e JavaScript, com imagens locais. Não exige instalação de dependências nem compilação.

## Abrir

Abra `index.html` no navegador. Para usar um servidor local, execute na pasta do projeto:

```sh
python -m http.server 8080
```

Acesse http://localhost:8080.

## Trabalhar no Claude Code

Extraia o ZIP, abra a pasta `rocha-pedras` no Claude Code e use:

> Leia CLAUDE.md e analise este projeto. Execute uma prévia local e mantenha o layout atual como base. Aguarde meu próximo comando antes de alterar o design.

Se já existir um projeto em outro framework, use:

> Importe o site da pasta rocha-pedras para este projeto. Preserve com fidelidade a tipografia, as cores, os espaçamentos, a ordem das seções, as imagens e as interações. Adapte os arquivos à estrutura e ao framework existentes, sem refazer o design. Preserve as imagens locais e valide as versões desktop e mobile.

## Arquivos

- `index.html`: conteúdo e estrutura.
- `styles.css`: visual e layout responsivo.
- `app.js`: menu, detalhes dos produtos, galeria e formulário.
- `assets/`: imagens utilizadas.
- `CLAUDE.md`: contexto para continuar o trabalho.

## Contatos

- WhatsApp: +55 31 97576-5827
- Instagram: https://www.instagram.com/rochapedras/

O formulário abre o WhatsApp com os dados preenchidos; o visitante confirma o envio no WhatsApp. Não existe backend, banco de dados ou painel administrativo.

## Imagens e conteúdo

As fotos dos projetos foram obtidas no perfil público @rochapedras. A foto da hero é ilustrativa, do Unsplash; as texturas de materiais são ilustrativas, com créditos no rodapé. Google Fonts fornece a família Poppins e exige conexão com a internet.

A marca tipográfica é provisória. Depoimentos, marcas parceiras, endereço, horários e números comerciais não confirmados não foram inventados.

## Publicar em hospedagem estática

Envie `index.html`, `styles.css`, `app.js`, `og-image.jpg`, os ícones (`favicon.svg`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`) e a pasta `assets/` para a raiz pública da hospedagem, mantendo essa estrutura. Este pacote não inclui vínculos com a plataforma de publicação anterior, credenciais nem histórico Git.

Depois de publicar, troque `og-image.jpg` nas tags og:image e no JSON-LD pelo endereço completo (https://seudominio/og-image.jpg) para a prévia aparecer no WhatsApp.
