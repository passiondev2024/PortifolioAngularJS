<script>
  import Logo from "../../assets/images/logo.svg";
  import Menu from "./menu/Default.svelte";
  import Level from "./menu/Level.svelte";

  export let open = false;
  let menu = true;

  export let segment;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
    crossorigin="anonymous" />
</svelte:head>

<nav class:open
  class=" -left-96 md:left-0  w-64 trasition duration-500  border-r-2 top-16 border-gray-200 z-30 fixed bg-white min-h-full dark:bg-gray-800 ">
  <div class="users  bg-green-500 shadow-inner shadow-xl block h-20 p-5">
    <img class="w-11 h-11 mx-3 border-2 p-1 border-white rounded-full float-left"
      src="https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40"
      alt="" />
    <a href="dashboard" class="hover:underline text-white">
      <p class="text-white font-bold text-base -mb-1">Marvio Rocha</p>
      <p class="uppercase text-white  text-sm">Manager sistem</p>
    </a>
  </div>

  <!-- <h1
    class="font-bold text-base py-2 dark:text-gray-200 text-gray-400 uppercase text-sm  px-5 max-w-full"
  >
    Usuário
  </h1> -->
  <ul class="overflow-y-scroll menu_hight ">
    <Menu {segment} current={undefined} icon="home" url="./dashboard" name="Home" />

    <!-- Usuários -->

    <Level LevelName="Usuários" open={true}>
      <Menu {segment} current="user" icon="user-edit" url="./pages/alteracao-cadastral" name="Alteração Cadastral" />
      <Menu {segment} current="alteracao-senha" icon="lock" url="./pages/alteracao-senha" name="Alteração de Senha" />
      <Menu {segment} current="ficha-funcional" icon="id-card" url="./pages/ficha-funcional" name="Ficha Funcional" />
      <Menu {segment} current="listagem-usuario" icon="address-book" url="./pages/listagem-usuario"
        name="Listagem de Usuários" />
      <Menu {segment} current="notifica" icon="bell" url="./pages/notifica" name="Notificações" />
      <Menu {segment} current="uploadar" icon="file-upload" url="./pages/uploadar" name="Upload de Arquivos" />
      <Menu {segment} current="reiniciar-senha" icon="redo" url="./pages/reiniciar-senha"
        name="Reiniciar Senha" />
      <Menu {segment} current="download-arquivo" icon="file-download" url="./pages/download-arquivo"
        name="Download de Arquivos" />
        <Menu {segment} current="info-rendimento" icon="file-invoice" url="./pages/info-rendimento"
        name="Informe de rendimento" />
        <Menu {segment} current="outro-info-rendimento" icon="file-invoice" url="./pages/outro-info-rendimento"
        name="Outros Info. R." />
    </Level>

    <!-- Folha -->

    <Level LevelName="Folha" open={true}>
      <Menu {segment} current="conf-gerencial-folha" icon="sticky-note" url="./pages/conf-gerencial-folha"
        name="Conf. G. de Folha" />
      <Menu {segment} current="gerenciar-comunicao-folha" icon="copy" url="./pages/gerenciar-comunicao-folha"
        name="Gerenciar C. de Folha" />
      <Menu {segment} current="liberacao-comunicao-folha" icon="paper-plane" url="./pages/liberacao-comunicao-folha"
        name="Liberação de C. de Folha" />
      <Menu {segment} current="validacao-folha-pagamento" icon="copy" url="./pages/validacao-folha-pagamento"
        name="V. da Folha de Pagamento" />
      <Menu {segment} current="consulta-liberacao-folha" icon="sticky-note" url="./pages/consulta-liberacao-folha"
        name="C. Liberação de Folha" />
      <Menu {segment} current="consigna" icon="comment" url="./pages/consigna" name="Consignação" />
    </Level>

    <!-- Contracheque -->

    <Level LevelName="Contracheque" open={true}>
      <Menu {segment} current="contra-cheque" icon="money-check" url="./pages/contra-cheque" name="Contracheque" />
      <Menu {segment} current="contra-cheque-pencionista" icon="money-check-alt" url="./pages/contra-cheque-pencionista"
        name="C. Pensionista" />
      <Menu {segment} current="contribuicao-previdenciaria" icon="donate" url="./pages/contribuicao-previdenciaria"
        name="Contrib. Previdenciárias" />
      <Menu {segment} current="pre-contra-cheque" icon="donate" url="./pages/pre-contra-cheque"
        name="Pré-Contracheque" />
    </Level>

    <Level LevelName="Previdenciário">
      <Menu {segment} current="contribuicao-previdenciaria" icon="donate" url="./pages/contribuicao-previdenciaria"
        name="Contrib. Previdenciárias" />
      <Menu {segment} current="cadastro-previdenciario" icon="file-alt" url="./pages/cadastro-previdenciario"
        name="Cadastro Previdenciário" />
      <Menu {segment} current="cancelamento-pagamento" icon="minus-circle" url="./pages/cancelamento-pagamento"
        name="Canc. de Pagamento" />
      <Menu {segment} current="ficha-cadastral" icon="file-word" url="./pages/ficha-cadastral" name="Ficha Cadastral" />
      <Menu {segment} current="ficha-financeira" icon="id-badge" url="./pages/ficha-financeira"
        name="Ficha Financeira" />
      <Menu {segment} current="formulario-disponivel" icon="file-contract" url="./pages/formulario-disponivel"
        name="Formulários Disponíveis" />
      <Menu {segment} current="dados-pagamento" icon="money-check-alt" url="./pages/dados-pagamento"
        name="Dados de Pagamento" />
 
    
    </Level>

    <!-- Outros -->

    <Level LevelName="Outros">
      <Menu {segment} current="manual-cartilha" icon="file-alt" url="./pages/manual-cartilha"
        name="Manuais e Cartilhas" />
      <Menu {segment} current="mapa-atuarial" icon="map" url="./pages/mapa-atuarial" name="Mapa do Atuarial" />
      <Menu {segment} current="publicao-doe" icon="bullhorn" url="./pages/publicao-doe" name="Publicações no D.O" />
      <Menu {segment} current="relatorio-dipr" icon="chart-line" url="./pages/relatorio-dipr"
        name="Relatório do DIPR" />
      <Menu {segment} current="relatorio-gerancial" icon="chart-pie" url="./pages/relatorio-gerancial"
        name="Relatório Gerencial" />
      <Menu {segment} current="servico-smartphone" icon="mobile-alt" url="./pages/servico-smartphone"
        name="Serviços Smartphones" />
      <Menu {segment} current="atualizar-info-apps" icon="redo" url="./pages/atualizar-info-apps"
        name="Atualizar Info. de Apps" />
      <Menu {segment} current="arquivos-para-consignacao" icon="archive" url="./pages/arquivos-para-consignacao"
        name="Arq. Consignação" />
      <Menu {segment} current="auditoria" icon="bookmark" url="./dashboard" name="Auditoria da R.N." />
      <Menu {segment} current="declaracoes" icon="newspaper" url="./pages/declaracoes" name="Declarações" />
      <Menu {segment} current="documentacao-disponivel" icon="file-alt" url="./pages/documentacao-disponivel"
        name="Doc. Disponível" />
      <Menu {segment} current="gestao-rn" icon="folder-open" url="./pages/gestao-rn" name="Gestão da R.N." />
    </Level>
  </ul>
</nav>

<style>
  .open {
    transform: translate(23rem);
    transition: 0.3s;
  }

  .menu {
    display: none;
  }

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #4b5563 gray;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: gray;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #4b5563;
    border-radius: 20px;
    border: 3px solid gray;
  }

  .menu_hight {
    height: 36em;
  }
</style>