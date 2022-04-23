<script>
    import MaskInput from 'svelte-input-mask/MaskInput.svelte';
    import  {handleChange} from "../../components/include/mask/Cpf.svelte"
    let mask = '000.000.000-00';
</script>

<svelte:head>
    <title>Ficha Cadastral | Portal Previdenciário do Servidor</title>
</svelte:head>
  
  <div
    id="head"
    class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
  >
    <h1 class="text-2xl">
      <i class="fa fa-file-word" /> Ficha Cadastral
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
        <button class="btn-green h-12 ">
          <i class="fas fa-search mx-1" />Pesquisar</button
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
            >Data de Admissão</th>
          <th
            class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >Situação</th>
          <th
            class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >Condições</th>
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
            13223465 - Cedidos
          </td>
          <td
            class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Data de Admissão</span
            >
            20/08/1976
          </td>
          <td
            class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Situação</span
            >
             
             Ex-Empregado
           
          </td>

          <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Condição</span
          >
           
          Afastado em 02/07/10
         
        </td>

          <td
            class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Seleciona</span
            >
             <div class="flex flex-row space-x-5 justify-center items-center">
              <a href="/"> <i class="fa fa-check fa-lg text-green-500"></i> </a>
              
             </div>
            
          </td>
         
         
      </tbody>
    </table>
  </div>