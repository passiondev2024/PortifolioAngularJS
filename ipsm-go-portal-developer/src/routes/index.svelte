<script>
  
   
    import Logo from '../assets/images/logo.svg'
    const date = new Date();
    let full_year = date.getFullYear();
 
 
 

</script>

<style>
 
</style>


<svelte:head>
	<title>Autenticação | Portal Previdenciário do Servidor</title>
</svelte:head>
 
 <div  class="max-w-full min-h-screen bg-gray-100  mx-auto p-2">
    <div class="max-w-sm mx-auto mt-10  md:mt-28  bg-white px-5 py-10 rounded-lg shadow-lg">

        <div class="text-center mb-8">
            <h1 class="text-xl font-bold">Portal Previdenciário do Servidor</h1>
            <img class="h-28 mx-auto" src="{Logo}" alt="Portal - Logo" >
        </div>

        <form action="./dashboard">
       
          
    
            <div class="relative text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                </div>
                <input id="usuario" type="text" class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-11 focus:border-green-200 transition duration-400 focus:ring focus:ring-green-200 focus:ring-opacity-70" placeholder="Usuário (Número de ordem)">
            </div>

            <div class="relative py-3 text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                </div>
                <input id="senha" type="password" class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-11 focus:border-green-200 focus:ring focus:ring-green-200 transition duration-400 focus:ring-opacity-70" placeholder="Senha">
            </div>
 
                <button class="btn-green w-full">Login</button>
            
            
        </form>
        <div class="text-blue-700 mt-6 text-center">
            <a href="./dashboard">Cadastre sua senha</a> | <a href="dashboard">Esqueceu sua senha?</a>
        </div>
    </div>
    <div class="max-w-sm mx-auto mt-10  text-sm text-black text-center">
          Copyright Portal Previdenciário do Servidor {full_year} © Instituto de Previdência dos Servidores do Município de Goiânia (GOIANIAPREV) - Todos os Direitos Reservados.
    </div>

</div>