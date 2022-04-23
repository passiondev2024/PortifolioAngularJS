 
<script>
    import { Button, Divider } from 'attractions';
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
      <title>Gestao R.N. | Portal Previdenciário do Servidor</title>
      
    </svelte:head>
    
    <div
      id="head"
      class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
    >
      <h1 class="text-2xl">
        <i class="fa fa-folder-open" /> Gestão da R.N.
      </h1>
    </div>
    <div
      class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
    >
      <div
        class="form flex flex-col  md:flex-row flex-wrap items-center justify-start"
      >
    
      <div class="w-full mb-3  md:w-1/3 p-2">
        <label class="font-bold" for="Servidor">Nome ou Login:</label>
        <p />
        <input
          class="input"
          type="text"
          placeholder="Use parte do nome ou login"
        />
      </div>
    
     
        <div class="w-full mb-3 md:w-36">
          <label class="font-bold" for="Servidor">Acesso:</label>
          <p />
           <select   class="select">
            <option value="situacao">Permitido</option>
            <option value="situacao">Negado</option>
            <option value="situacao">Ambos</option>
    
           </select>
        </div>
         
        
     
         
        <div class="mt-3  md:w-32">
          
           <button class="btn-green w-full h-12" > <i class="fas fa-search px-2"></i> Buscar </button>
          
        </div>
      </div>
    
      <table class="border-collapse w-full mt-10 ">
        <thead class="">
          <tr>
            <th
              class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
              >Login</th>
            <th
              class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
              >Nome</th>
            <th
              class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
              >CPF</th>
            <th
              class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
              >Permitido</th>
            <th
              class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
              >Negado</th>
         
          </tr>
        </thead>
       
        <tbody>
       
          <tr class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td
              class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static">
              <span
                class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                >Login</span>
           Admin
            </td>
            <td
              class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                >Nome</span>
                ADMINISTRADOR GERAL
            </td>
          
            <td
              class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                >CPF</span
              >
              000.000.000-00
    
            </td>
            <td
            class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
          >
            <span
              class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
              >Permitido</span>
            <input value="permitido" type="radio">
          </td>
          <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Negado</span>
            <input value="negado" type="radio">
        </td>
         
    
        
        
        </tbody>
      </table>
    </div>
    