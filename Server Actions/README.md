# Next.js Project Starter

Este é um projeto Next.js inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Como Começar

### 1. Instalar Pacotes

Execute o seguinte comando para instalar as dependências do projeto:

```bash
yarn
```

### 2. Iniciar Servidor

#### a. Iniciar o servidor JSON

Para simular uma API REST, execute o seguinte comando:

```bash
yarn json-server server.json -p 3333 --watch
```

#### b. Iniciar o aplicativo Next.js

Para iniciar o servidor de desenvolvimento do Next.js, execute:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.
