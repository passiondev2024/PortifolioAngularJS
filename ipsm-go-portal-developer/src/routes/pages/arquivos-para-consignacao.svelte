<script>
  import MaskInput from 'svelte-input-mask/MaskInput.svelte';
  import {
    handleChange
  } from '../../components/include/mask/Cpf.svelte';
  let mask = '000.000.000-00';
</script>

<svelte:head>
  <title>Documentação Disponivel | Portal Previdenciário do Servidor</title>
</svelte:head>

<div id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200">
  <h1 class="text-2xl">
    <i class="fa fa-bullhorn" /> Documentação Disponivel
  </h1>


</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6">

  <table class="border-collapse w-full mt-10" cellpadding="3" border="0">
    <thead>
      <tr>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          width="70">Selecionar</th>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
          Nome do Layout</th>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          width="70">Selecionar</th>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
          Nome do Layout</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="1" checked="checked">
        </td>
        <td class="border">Cadastro de Servidores <span class="filial"
            style="color: rgb(153, 153, 153); font-style: italic;">(Secretaria 100500)</span></td>
        <td class="border" align="center"><input type="radio" name="layout" value="2"></td>
        <td class="border">Cadastro de Secretarias</td>
      </tr>
      <tr>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="3"></td>
        <td class="border">Cadastro de Vínculo</td>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="4"></td>
        <td class="border">Cadastro de Afastamento (Situação)</td>
      </tr>
      <tr>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="5"></td>
        <td class="border">Cadastro de Consignatárias</td>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="6"></td>
        <td>Cadastro de Verbas (Vantagens e Descontos)</td>
      </tr>
      <tr>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="7"></td>
        <td class="border">Financeiro <span class="filial"
            style="color: rgb(153, 153, 153); font-style: italic;">(Secretaria 100500)</span></td>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="8"></td>
        <td class="border">Arquivo Retorno</td>
      </tr>
      <tr>
        <td class="border" align="center"><input type="radio" class="opcao" name="layout" value="9"></td>
        <td class="border">Empréstimos Consignados</td>
        <td class="border"></td>
        <td class="border"></td>
      </tr>
    </tbody>
  </table>


  <div class="border  border rounded-lg p-2 mt-5">
    <h3 class="text-lg uppercase my-5 ">
      Gerar arquivo
    </h3>

    <div class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center">

      <div class="w-full mb-3 md:w-64">
        <label class="font-bold " for="CPF">Secretaria (Qtd Registros):</label>
        <p />
        <select class="select w-full" name="" id="">
          <option value="">100500 - CAMARA MUNICIPAL - FUNPREV (173)</option>
          <option value="">100400 - CAMARA MUNICIPAL - FUNFIN (65)</option>
        </select>

      </div>

      <div class="w-full mb-3 md:w-40">
        <label class="font-bold" for="CPF">Tipo de Lançamento:</label>
        <p />
        <select class="select" name="" id="">
          <option value="">Vantagem</option>
          <option value="">Desvantagem</option>
        </select>

      </div>

      <div class="w-full mb-3 md:w-28">
        <label class="font-bold" for="CPF">Competência:</label>
        <p />
        <select class="select" name="" id="">
          <option value="">02/2021</option>

        </select>

      </div>

      <div class="w-full md:w-44 max-w-full md:mt-3">
        <button class="btn-green w-full h-12 ">
          <i class="fas fa-cog" /> Gerar Arquivo</button>
      </div>

    </div>



  </div>



  <div class="border  border rounded-lg p-2 mt-5">
    <h3 class="text-lg uppercase my-5 ">
      Verificação do Layout
    </h3>

    <div class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center">

      <div class="w-full mb-3 md:w-64">
        <label class="font-bold " for="CPF">Verificação de layout</label>
        <p />
       <input  class="input" type="file">

      </div>
 

      <div class="w-full md:w-44 max-w-full md:mt-3">
        <button class="btn-green w-full h-12 ">
          <i class="fas fa-search" /> Visualizar o arquivo</button>
      </div>

    </div>



  </div>




</div>