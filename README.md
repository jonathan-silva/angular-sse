# Angular com integração SSE

* Angular v13.1.2.
* NodeJS 16.13.1

## Instalação das dependências
`npm install --verbose`

## Rodar servidor localmente

Rode `npm run start` e acesse `http://localhost:4200/`.

## Endpoint do SSE
Altere:

```
enviroment.ts
export const environment = {
  production: false,
  urlSse: 'http://localhost:6330/emitter'
};
```