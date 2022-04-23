 
<script>
 import MaskInput from 'svelte-input-mask/MaskInput.svelte';
 import  {handleChange} from "../../components/include/mask/Cpf.svelte"
 let mask = '000.000.000-00';
</script>
<svelte:head>
  <title>Consignação | Portal Previdenciário do Servidor</title>
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-user-edit" /> Consignação
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center"
  >
    <div class="w-full mb-3 md:w-1/4">
      <label class="font-bold" for="CPF">Informe um CPF:</label>
      <p />
      
      <MaskInput
        class="py-3 px-4 bg-white placeholder-gray-400  text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 focus:ring focus:ring-green-200 focus:ring-opacity-70"
        type="text"
        alwaysShowMask maskChar="_" {mask} on:change={handleChange}
        
        placeholder="Informe um CPF"
      />
    </div>
    <div class="w-full mb-3  md:w-1/4">
      <label class="font-bold" for="Servidor">Nome do servidor:</label>
      <p />
      <input
        class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
        type="text"
        placeholder="Nome do servidor"
      />
    </div>

    <div class="w-full md:w-44 max-w-full md:mt-3">
      <button class="btn-green w-full h-12 ">
        <i class="fas fa-search" /> Buscar Servidor</button
      >
    </div>
  </div>

  <table class="border-collapse w-full mt-10 ">
    <thead class="">
      <tr>
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
          >Seleciona</th>
      </tr>
    </thead>
   
    <tbody>
      <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Matricula</span>
          123456
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Lotação</span>
          Wait
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          20/20/2020
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
            >Matricula</span>
          123456
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Lotação</span>
          Wait
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          20/20/2020
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
            >Matricula</span>
          123456
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Lotação</span>
          Wait
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          20/20/2020
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
            >Matricula</span>
          123456
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Lotação</span>
          Wait
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          20/20/2020
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
            >Matricula</span>
          123456
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Lotação</span>
          Wait
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          20/20/2020
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
