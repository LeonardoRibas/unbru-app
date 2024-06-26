<p align="center">
    <img src="./assets/logo.svg" height="150" width="175" alt="UnBRU" />
</p>

<h1 align="center">UnBRU</h1>

<p align="center">Aplicativo que disponibiliza o cardápio do Restaurante Universitário da Universidade de Brasília</p>

<div align="center">
    <img src="https://img.shields.io/github/license/LeonardoRibas/unb-ru-app" />
    <img src="https://img.shields.io/static/v1?label=Typescript&message=~4.6.3&color=4179C6&logo=typescript"/>
    <img src="https://img.shields.io/static/v1?label=Expo&message=~48.0.0&color=000020&logo=expo"/> 
</div>

## Objetivo

O app visa facilitar o acesso dos estudantes da Universidade de Brasília ao cardápio semanal do Restaurante Universitário.

## Telas do MVP

Projeto no Figma: https://www.figma.com/file/QkCUoGgvilRIOWC9C5ckyd/UnB-RU?node-id=121%3A1060

<img src="./assets/demo.svg" />

## Instalação

-   Pré-requisitos:
    <a href="https://nodejs.org/en/">Nodejs</a>, <a href="https://docs.expo.dev/get-started/installation/">Expo</a>, <a href="https://developer.android.com/studio?hl=pt-br">Android Studio</a>(Android) ou <a href="https://developer.apple.com/xcode/">Xcode</a>(IOS)

1. Instale as dependêcias do projeto

```bash
npm install
```

2. Crie sua primeira <a href="https://docs.expo.dev/build/setup/">build do app com EAS build</a>

3. Antes de criar sua build de desenvolvimento, vá no arquivo app.json e substitua o "package:" com o usuário da sua conta criada na <a href="https://expo.dev/">EXPO</a>

```json
"android": {
    "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#49B660"
    },
        "package": "com.leonardoribas.unbrufront"
},

```

4. Além de substituir o "package", apague o "projectId" atual, e só após faça a build de desenvolvimento do projeto que o id do projeto será gerado automaticamente.

```json
"extra": {
    "eas": {
        "projectId": "seu-projeto-id",
    }
},
```

5. Crie uma <a href="https://docs.expo.dev/develop/development-builds/create-a-build/">development build </a>

6. Incie o projeto

```bash
yarn start --dev-client
```

## Contribuição

Interessado em contribuir com o projeto? Leia nosso

-   [Código de Conduta do Contribuidor](https://github.com/LeonardoRibas/unb-ru-app/blob/main/.github/CODE_OF_CONDUCT.md)
-   [Guia de Contribuição ao UnBRU](https://github.com/LeonardoRibas/unb-ru-app/blob/main/.github/CONTRIBUTING.md)
