 
<script>
   import MaskInput from 'svelte-input-mask/MaskInput.svelte';
    import  {handleChange} from "../../components/include/mask/Cpf.svelte"
    let mask = '000.000.000-00';
</script>
<svelte:head>
  <title>Download de Arquivos| Portal Previdenciário do Servidor</title>
  
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-file-download" /> Download de Arquivos
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center"
  >
 
    <div class="w-full mb-3  md:w-56">
      <label class="font-bold" for="Servidor">Data de competência:</label>
    
      <select class="select w-56">
        <option value="">10/2018</option>
        <option value="">03/2015</option>
        <option value="">Base Antiga (Atenção Consulta Lenta)</option>
      </select>
    </div>

    
  </div>

  <table class="border-collapse w-full mt-10 ">
    <thead class="">
      <tr>
        <th
        class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >Usuário</th>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Matrícula</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Lotação</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Data Admissão</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Situação</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Condição</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Reiniciar</th>
      </tr>
    </thead>
   
    <tbody>
   
      <td colspan="7" align="center"><h4 class="text-xl p-3 font-bold"> <i class="fa fa-redo"></i> Aguardando informar CPF</h4></td>
				
    
    </tbody>
  </table>
</div>
