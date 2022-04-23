<script>
  import MaskInput from 'svelte-input-mask/MaskInput.svelte';
  import { handleChange } from '../../components/include/mask/Cpf.svelte';
  let mask = '000.000.000-00';
</script>

<svelte:head>
  <title>Relatório Gerencial | Portal Previdenciário do Servidor</title>
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-chart-pie" /> Relatório Gerencial
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center"
  >
    <div class="w-full mb-3 md:w-40 ">
      <label class="font-bold" for="Servidor">Mês *:</label>
      <p />
      <select class="select w-full">
        <option value="1">Janeiro</option>
        <option selected="selected" value="2">Fevereiro</option>
        <option value="3">Março</option>
        <option value="4">Abril</option>
        <option value="5">Maio</option>
        <option value="6">Junho</option>
        <option value="7">Julho</option>
        <option value="8">Agosto</option>
        <option value="9">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>
    </div>

    <div class="w-full mb-3 md:w-40 ">
      <label class="font-bold" for="Servidor">Ano *:</label>
      <p />
      <select class="select w-full">
        <option selected="selected" value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>

    <div class="w-full mb-3 md:w-56">
      <label class="font-bold" for="Servidor">Tipo Processamento:</label>
      <p />
      <select class="select w-full">
        <option value="A3">ADIANTAMENTO DE 13. SALARIO</option>
        <option value="E3">FOLHA DE 13. SALARIO</option>
        <option value="S8">FOLHA DOS EXONERADOS</option>
        <option selected="selected" value="EM">FOLHA FECHAMENTO MENSAL</option>
        <option value="EF">FOLHA FERIAS</option>
        <option value="S1">FOLHA SUPLEMENTAR 1</option>
        <option value="S10">FOLHA SUPLEMENTAR 10</option>
        <option value="S11">FOLHA SUPLEMENTAR 11</option>
        <option value="S12">FOLHA SUPLEMENTAR 12</option>
        <option value="S13">FOLHA SUPLEMENTAR 13 SALARIO</option>
        <option value="S14">FOLHA SUPLEMENTAR 14</option>
        <option value="S15">FOLHA SUPLEMENTAR 15</option>
        <option value="S2">FOLHA SUPLEMENTAR 2</option>
        <option value="S3">FOLHA SUPLEMENTAR 3</option>
        <option value="S4">FOLHA SUPLEMENTAR 4</option>
        <option value="S5">FOLHA SUPLEMENTAR 5</option>
        <option value="S6">FOLHA SUPLEMENTAR 6</option>
        <option value="S7">FOLHA SUPLEMENTAR 7</option>
        <option value="S9">FOLHA SUPLEMENTAR 9</option>
        <option value="IRD">INFORMACOES PARA IR E DIRF</option>
        <option value="RPS">REPROCESSAR FOLHA MENSAL</option>
        <option value="RS">RESCISAO</option>
      </select>
    </div>

    <div class="w-full md:w-44 max-w-full md:mt-3">
      <button class="btn-green w-full h-12 ">
        <i class="fas fa-search" /> Filtrar</button
      >
    </div>
  </div>
</div>
