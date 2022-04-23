 
<script>
 
 
</script>
<svelte:head>
  <title>Alteração Cadastral | Portal Previdenciário do Servidor</title>
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-user-edit" /> Alteração Cadastral
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
   

  <div class="flex flex-col">
    <div class="w-full md:w-1/2 p-2">
      <label  class="font-bold" for="Senha">Senha atual:</label> <p></p>
      <input class="input" type="password" placeholder="Senha Atual">
    </div>
    <div class="w-full md:w-1/2 p-2">
      <label class="font-bold" for="Senha">Sua nova senha:</label> <p></p>
      <input class="input" type="password" placeholder="Sua nova senha">
    </div>
    <div class="w-full md:w-1/2 p-2">
      <label class="font-bold text-red-500" for="Senha">Confirme sua nova senha *</label> <p></p>
      <input class="input" type="password" placeholder="Confirme sua nova senha">
    </div>
    <div class="w-full md:w-1/2 p-2">
      <label class="font-bold" for="Senha">E-mail:</label> <p></p>
      <input class="input" type="text" placeholder="contato@sistematech.com">
    </div>
    <div class="w-full md:w-1/2 p-2">
     
       <button class="btn-green w-full block">Alterar Senha</button>
    </div>
  </div>


  </div>
 
 