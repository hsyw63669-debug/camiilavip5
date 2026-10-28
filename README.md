# Michelle Oficial — deploy na Vercel

Projeto em Vite/TanStack Start. Para executar localmente, use `npm install` e `npm run dev`.

## Integração TichuPay

O backend cria cobranças Pix em `POST https://nexuspag.com/api/pix/create`, autenticando com o header `x-api-key`. O status é consultado em `GET https://nexuspag.com/api/pix/{id}`. O código Pix copia-e-cola e o QR Code são lidos da resposta da transação.

Configure em **Vercel → Project → Settings → Environment Variables**:

- `TICHUPAY_API_KEY`: chave de API do painel TichuPay → Integrações → API Keys.
- `TICHUPAY_WEBHOOK_SECRET`: segredo de webhook, se tiver configurado no painel (opcional para o polling de status).
- `APP_BASE_URL`: URL HTTPS pública deste projeto, por exemplo `https://seu-projeto.vercel.app`.

Cadastre credenciais reais diretamente na Vercel. Não as coloque no GitHub, no frontend ou em variáveis com prefixo `VITE_`. Remova as variáveis antigas `SIGILOPAY_PUBLIC_KEY` e `SIGILOPAY_SECRET_KEY` quando confirmar que o deploy novo está funcionando.

O checkout Pix não pede nome, e-mail, CPF ou telefone porque o endpoint documentado de criação de cobrança da TichuPay não exige esses campos. O sistema consulta o status periodicamente; valide com uma cobrança de teste de baixo valor antes de liberar vendas reais e confirme que o acesso só é liberado após status `paid`.
