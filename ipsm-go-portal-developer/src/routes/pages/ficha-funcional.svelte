 
<script>
 
    
    let selectedTab = 'Selec. Matrícula';
    
    import Matricula from '../../components/include/ficha/Matricula.svelte'
    import Principal from '../../components/include/ficha/Principal.svelte'
    import Ferias from '../../components/include/ficha/Ferias.svelte'
    
    import { Tabs } from 'attractions';

    
    </script>
 
    <svelte:head>
      <title>Ficha Funcional | Portal Previdenciário do Servidor</title>
      
    </svelte:head>
     
    <div
      id="head"
      class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
    >
      <h1 class="text-2xl">
        <i class="fa fa-id-card" /> Ficha Funcional
      </h1>
    </div>

    <div
      class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
    >
    
    <div class="flex align-center m-3">
     
      <Tabs
      name="menu"
      items={['Selec. Matrícula', 'Ficha Principal', 'Férias']}
      bind:value={selectedTab}
      />

    </div>
          
          {#if selectedTab === "Selec. Matrícula"}
          
          <Matricula />      
         
          {/if}
          {#if selectedTab === "Ficha Principal"}
          <Principal />
         {/if}
         {#if selectedTab === "Férias"}
         <Ferias />      
         {/if}
    </div>
    