<script>
    import { DatePicker } from 'attractions';
</script>


<div class="flex flex-wrap  items-center">

    <div class="w-full mb-3  md:w-1/3 px-2">
        <label class="font-bold" for="">Nome completo:</label>
        <p />
        <input
          class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
          type="text"
          placeholder="Nome Completo"
        />
      </div>
</div>
<div class="flex flex-wrap  items-center">

    <div class="w-full mb-3  md:w-1/3 px-2">
        <label class="font-bold" for="">Poder:</label>
        <p />
        <input
          class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
          type="text"
          placeholder="Poder"
        />
      </div>

      <div class="w-full mb-3  md:w-1/4 px-2">
        <label class="font-bold" for="">Orgão:</label>
        <p />
        <input
          class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
          type="text"
          placeholder="Orgão"
        />
      </div>
    </div>

    <div class="flex flex-wrap  items-center">

    <div class="w-full mb-3  md:w-1/6 px-2">
        <label class="font-bold" for="">Matrícula:</label>
        <p />
        <input
          class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
          type="text"
          placeholder="Matrícula"
        />
      </div>

      <div class="w-full mb-3  md:w-1/6 px-2">
        <label class="font-bold" for="">Número de Ordem:</label>
        <p />
        <input
          class="py-3 px-4 bg-white placeholder-gray-400 text-gray-800 rounded-md w-full border-gray-300 shadow-sm pl-2 focus:border-green-200 transition duration-400 border-1 focus:ring focus:ring-green-200 focus:ring-opacity-70"
          type="text"
          placeholder="Número de Ordem"
        />
      </div>

      <div class="w-full mb-3  md:w-1/5 px-2">
        <label class="font-bold" for="">Período Aquisitivo em Aberto:</label>
        <p />
        
        <DatePicker range top />
      </div>
     
</div>




	 	 	 	 	 

<table class="border-collapse w-full mt-10 ">
    <thead class="">
      <tr>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Período Aquisitivo </th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Dt Inicial</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Dt Final</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Dias</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Faltas</th>
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Situação</th>
          <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >C/ Anexo</th>
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
            >Dt Inicial</span>
            20/20/2020
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Dt Final</span
          >
          20/20/2021
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Dias</span
          >

           15
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Data Admissão</span
          >
          <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold"
            >5</span
          >
        </td>
        <td
        class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
      >
      <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold"
      >Completo</span>
      </td>

      <td
      class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >C/Anexo</span
      >

       OK
    </td>
     
      </tr>
       
      
    </tbody>
  </table>







 