 
<script>
import MaskInput from 'svelte-input-mask/MaskInput.svelte';
let mask = '00/0000';
const handleChange = ({ detail }) => {
    console.log(detail.inputState.maskedValue); // stores the value of input

    if (detail.inputState.maskedValue.indexOf('34') === 0 || detail.inputState.maskedValue.indexOf('37') === 0) {
      mask = '00/0000';
      return;
    }

    mask = '00/0000';
  };
 
</script>

<svelte:head>

  <title>Upload de Arquivo | Portal Previdenciário do Servidor</title>
  
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-file-upload" /> Envio de Arquivo
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col md:space-x-3 md:flex-row flex-wrap items-center"
  >
    <div class="w-full mb-3 md:w-1/4">
      <label class="font-bold" for="Competência">Competência:</label>
      <p />
      
      <MaskInput
        class="py-3 px-4 bg-white placeholder-gray-400  text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 focus:ring focus:ring-green-200 focus:ring-opacity-70"
        type="text"
        alwaysShowMask maskChar="_" {mask} on:change={handleChange}
        
        placeholder="Competência"
      />
    </div>
    <div class="w-full mb-3  md:w-1/4">
      <label class="font-bold" for="Servidor">Selecionar Arquivo:</label>
      <p />
      <input
        class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
        type="file"
        placeholder="Nome do servidor"
      />
    </div>

    <div class="w-full md:w-52 max-w-full md:mt-3">
      <input class="h-5 w-5 text-green-600" type="checkbox">  Salvar como leitura (Não permitir excluir o arquivo)
    </div>
  </div>

  <div class="w-full md:w-full max-w-full md:mt-3">
     Filiais do Portal Previdenciário do Servidor <input class="h-5 w-5 text-green-600"  type="checkbox"> 
     <p></p>
     <ul class="flex flex-row space-x-5 p-5 flex-wrap items-center">
     <li>
      <input  class="h-5 w-5 text-green-600" type="checkbox"> <label for="">100400 - Camara Municipal - Funfin </label>
     </li>
     <input class="h-5 w-5 text-green-600" type="checkbox"> <label for="">100500 - Camara Municipal - Funprev </label>
     </ul>
     <p></p>
     <button class="btn-green w-40 mt-3">
       Enviar Arquivos
     </button>
  </div>
  
</div>
