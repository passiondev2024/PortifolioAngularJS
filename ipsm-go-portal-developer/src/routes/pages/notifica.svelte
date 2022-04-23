 
<script>
import MaskInput from 'svelte-input-mask/MaskInput.svelte';
let mask = '000.000.000-00';
const handleChange = ({ detail }) => {
    console.log(detail.inputState.maskedValue); // stores the value of input

    if (detail.inputState.maskedValue.indexOf('34') === 0 || detail.inputState.maskedValue.indexOf('37') === 0) {
      mask = '000.000.000-00';
      return;
    }

    mask = '000.000.000-00';
  };
 
 
</script>
<svelte:head>
  <title>Notificações | Portal Previdenciário do Servidor</title>
  
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-bell" /> Notificações
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center"
  >
     

     
  </div>

  <table class="border-collapse w-full mt-10 ">
    <thead class="">
      <tr>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Data</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Hora</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Ação</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Status</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Acessar</th>
 
      </tr>
    </thead>
   
    <tbody>
      <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data</span>
          30/03/2020
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Hora</span>
          08:20 pm
        </td>
      
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold"
            >Wait</span
          >
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold"
            >inactive</span
          >
        </td>

        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Actions</span
          >
          <a href="#" class="text-blue-400 hover:text-blue-600 underline"
            ><i class="fa fa-edit fa-lg" /></a
          >
          <a href="#" class="text-gray-400 hover:text-gray-600 underline pl-6"
            ><i class="fa fa-trash fa-lg" /></a
          >
        </td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data</span>
          30/03/2020
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Hora</span>
          08:20 pm
        </td>
      
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold"
            >Wait</span
          >
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold"
            >inactive</span
          >
        </td>

        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Actions</span
          >
          <a href="#" class="text-blue-400 hover:text-blue-600 underline"
            ><i class="fa fa-edit fa-lg" /></a
          >
          <a href="#" class="text-gray-400 hover:text-gray-600 underline pl-6"
            ><i class="fa fa-trash fa-lg" /></a
          >
        </td>
      </tr>

      <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data</span>
          30/03/2020
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Hora</span>
          08:20 pm
        </td>
      
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold"
            >Wait</span
          >
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold"
            >inactive</span
          >
        </td>

        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Actions</span
          >
          <a href="#" class="text-blue-400 hover:text-blue-600 underline"
            ><i class="fa fa-edit fa-lg" /></a
          >
          <a href="#" class="text-gray-400 hover:text-gray-600 underline pl-6"
            ><i class="fa fa-trash fa-lg" /></a
          >
        </td>
      </tr>
    </tbody>
  </table>
</div>
