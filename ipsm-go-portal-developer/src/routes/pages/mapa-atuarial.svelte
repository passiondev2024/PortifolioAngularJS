<script>
  import { Button, Divider } from 'attractions';
  import MaskInput from 'svelte-input-mask/MaskInput.svelte';
  import { handleChange } from '../../components/include/mask/Cpf.svelte';
  let mask = '000.000.000-00';
</script>

<svelte:head>
  <title>Mapa Atuarial | Portal Previdenciário do Servidor</title>
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-file-invoice" /> Mapa Atuarial
  </h1>
</div>

<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center"
  >
    <div class="w-full mb-3 md:w-40 ">
      <label class="font-bold" for="Servidor">Período:</label>
      <p />
      <select class="select w-full">
        <option value="situacao">2020</option>
        <option value="situacao">2019</option>
        <option value="situacao">2018</option>
        <option value="situacao">2017</option>
        <option value="situacao">2016</option>
      </select>
    </div>

    <div class="w-full md:w-52 max-w-full md:mt-3">
      <button class="btn-green h-12 ">
        <i class="fas fa-cog mx-1" />Gerar Mapa</button
      >
    </div>
  </div>

  <table class="border-collapse w-full mt-2 ">
    <thead>
      <tr>
        <th
          colspan="14"
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Mapa Atuarial</th
        >
      </tr>
      <tr class="border">
        <td class="border" rowspan="4" align="center">Estado</td>
        <td class="border" rowspan="4" align="center">Categoria</td>
        <td class="border" colspan="4" align="center">Servidores Ativos *6</td>
        <td class="border" colspan="8" align="center">Previdência *7</td>
      </tr>
      <tr>
        <td class="border" rowspan="3" align="center">QTDE *5</td>
        <td class="border" rowspan="3" align="center">%</td>
        <td class="border" rowspan="3" align="center">R$</td>
        <td class="border" rowspan="3" align="center">%</td>
      </tr>
      <tr class="border">
        <td class="border" colspan="2" align="center">QTDE</td>
        <td class="border" rowspan="2" align="center">%</td>
        <td class="border" rowspan="2" align="center">%</td>
        <td class="border" colspan="2" align="center">R$</td>
        <td class="border" rowspan="2" align="center">%</td>
        <td class="border" rowspan="2" align="center">%</td>
      </tr>
      <tr class="border">
        <td align="center">Aposentado (a)</td>
        <td align="center">Pensão (b)</td>
        <td align="center">Aposentado (a)</td>
        <td align="center">Pensão (b)</td>
      </tr>
    </thead>

    <tr
      class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
    >
      <td
        class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        colspan="14"
        align="center"><h4>Aguardando informar Período</h4></td
      >
    </tr>
  </table>
</div>
