 
<script>
    import { Button, Divider } from 'attractions';
    import MaskInput from 'svelte-input-mask/MaskInput.svelte';
    import  {handleChange} from "../../components/include/mask/Cpf.svelte"
    let mask = '000.000.000-00';
     
    </script>
    <svelte:head>
      <title>Formulários Disponíveis | Portal Previdenciário do Servidor</title>
      
    </svelte:head>
    
    <div
      id="head"
      class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
    >
      <h1 class="text-2xl">
        <i class="fa fa-file-invoice" /> Formulários Disponíveis
      </h1>
    </div>
    <div
    class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-5 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
  >
   
 
     
 
        <table class="border-collapse w-full mt-2 ">
          <thead class="">
            <tr>
              <th
                class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
                >Documento</th>
              
             <th
                class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
                >Baixar</th>
            </tr>
          </thead>
         
          <tbody>
         
            <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td
                class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
                <span
                  class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                  >Documento</span>
                  Requerimento de Concessão do Abono de Permanencia
              </td>
               
                       
           
          <td
            class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Baixar</span>
                <i class="fa fa-check fa-lg text-green-500"></i>
          </td>

          <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td
              class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
              <span
                class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                >Documento</span>
                Requerimento de Concessão para Aposentadoria
            </td>
             
                     
         
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Baixar</span>
              <i class="fa fa-check fa-lg text-green-500"></i>
        </td>

        <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td
            class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Documento</span>
              Requerimento Averbação Licença Prêmio e/ou Tempo de Serviço
          </td>
           
                   
       
      <td
        class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
      >
        <span
          class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
          >Baixar</span>
            <i class="fa fa-check fa-lg text-green-500"></i>
      </td>

      <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Documento</span>
            Requerimento Desaverbação Licença Prêmio e/ou Tempo de Servico
        </td>
         
                 
     
    <td
      class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Baixar</span>
          <i class="fa fa-check fa-lg text-green-500"></i>
    </td>

    <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td
        class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
        <span
          class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
          >Documento</span>
          Requerimento de Certidao de Tempo de Serviço
      </td>
       
               
   
  <td
    class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
  >
    <span
      class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
      >Baixar</span>
        <i class="fa fa-check fa-lg text-green-500"></i>
  </td>
          
          
          </tbody>
        </table>

    
      
    </div>
    