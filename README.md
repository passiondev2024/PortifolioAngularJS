<h1 align="center">
  <img alt="SIGGOContratações" title="#SIGGOContratações" src="https://user-images.githubusercontent.com/69858181/169584090-d5c33c24-b4f8-41e5-b8e5-9e78e20da7a9.png" />
</h1>

Tabela de conteúdos
=================
<!--ts-->
   *  [Sobre](#Sobre)
   *  [Instalação](#instalacao)
      *  [NPM](#NPM)
      *  [YARN](#YARN)
      *  [Servidor](#Servidor)
   *  [Tecnologias](#tecnologias)
   *  [Como usar](#como-usar)
   *  [Telas]
      *  [Status](#Status)
      *  [Fornecedores](#Fornecedores)
      *  [Regime Contratação](#Regime Contratação:)
      *  [Contratações](#Contratações)
      *  [Relatório](#Relatório)
<!--te-->



# Sobre
Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 13.2.0, utilizando como template o [AdminLTE](https://adminlte.io/themes/v3/index3.html) versão 3.2.0, com ele foi desenvolvido um sistema de contratações de serviços.

# Instalacao
  Para a instalação desta aplicação é necessário que já tenha o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/downloads) já instalados. 
  
<h3>Clone este repositório</h3>
$ git clone https://gitlab.tre-ma.jus.br/gitlab/sismatech/siggo-contratacao-frontend.git

<h3>Acesse a pasta do projeto no terminal/cmd</h3>
$ cd siggo-contratacao-frontend 

<h3>Checkout na Branch</h3>
$ git checkout feature/MM_version_01

## NPM
  `npm install` para instalar todas as dependencias que estão no package.json.
  
  `npm run start` ou `ng serve` para rodar aplicação no localhost:4200.

  `npm run build` ou `ng build` para gerar a pasta da dist.
 
## YARN
  ` yarn add . ` para instalar todas as dependencias que estão no package.json.

  `yarn start` ou `ng serve` para rodar aplicação no localhost:4200.

  `yarn build` ou `ng build` para gerar a pasta da dist.

## Servidor
   Para atualizar a 'backendUrl', basta ir na pasta environments/environments.ts do sistema e colar na variável 'backendUrl' o link que estiver rodando o seu Servidor, conforme imagem:
  ![image](https://user-images.githubusercontent.com/69858181/169563106-531f1d48-724d-48f3-93ed-2544fa055d49.png)

# Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
* [Angular](https://github.com/angular/angular-cli)

* [AdminLTE](https://adminlte.io/themes/v3/index3.html)

* [TypeScript](https://www.typescriptlang.org/)

* [Node.js](https://nodejs.org/en/)

# Como usar 

  Após clonar o repositório e entrar na pasta do projeto, seguir instalação das bibliotecas com `npm install` e rodar comando `npm run start`, após isso a aplicação estará disponível no http://localhost:4200, ao abrir a tela no menu irá visualizar a opção de Administração e ao clicar no menu aparecerá as opções Status, Fornecedores, Regime Contratação, Contratações e Relatório
  
# Telas
# Status:
Nesta tela possui um Botão para criar "Novo Status" e a listagem dos Status com as opções de "Visualizar" e "Excluir".
![image](https://user-images.githubusercontent.com/69858181/169588683-a9cbb43e-b916-4156-b7c2-6bc1a5299c53.png)


# Fornecedores: 
Nesta tela possui um Botão para criar "Novo Fornecedor", listagem dos Fornecedores com possibilidade de filtrage e com as opções de "Editar",  "Visualizar" e "Excluir".
![image](https://user-images.githubusercontent.com/69858181/169588617-9a76d4da-848a-4aca-8e46-56962b049d54.png)
![image](https://user-images.githubusercontent.com/69858181/169588757-b3382a91-cd24-4231-9175-ea34e75f5361.png)


# Regime Contratação: 
Nesta tela possui um Botão para criar "Novo Regime Contratação" e a listagem dos Regimes com as opções de "Visualizar" e "Excluir".
![image](https://user-images.githubusercontent.com/69858181/169588808-ba63c6fc-b3b8-4152-ad1d-5629681241a2.png)

# Contratações: 
Nesta tela possui um Botão para criar "Nova Contratação", listagem das Contratações com possibilidade de filtrage e com as opções de "Editar", "Visualizar" e "Excluir". Dentro da tela que possui as informações da contratação escolhida, tem a listagem de Prorrogações do contrato e a possibilidade de adicionar uma nova prorrogação.
  ![image](https://user-images.githubusercontent.com/69858181/169589306-74d8cb3b-1c62-4fc9-9bff-cddcb3a624c0.png)
![image](https://user-images.githubusercontent.com/69858181/169589383-eeeb4c34-de03-4c3c-8649-015811ff6960.png)
![image](https://user-images.githubusercontent.com/69858181/169589421-92ff95bb-10fe-4ef2-bf88-0a592f690e6d.png)
![image](https://user-images.githubusercontent.com/69858181/169589472-e2405a50-e9f2-455c-9b28-808caf08f4fd.png)

  
# Relatório: 
Na tela de relatório é possível gerar um relatório conforme ano e unidade selecionada, sendo ele em PDF ou docx.
![image](https://user-images.githubusercontent.com/69858181/169589077-10acb103-9ef6-4a82-9058-641af939a884.png)
