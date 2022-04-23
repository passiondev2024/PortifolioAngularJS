<script>
  import MaskInput from 'svelte-input-mask/MaskInput.svelte';

  let mask = '000.000.000-00';
  const handleChange = ({ detail }) => {
    console.log(detail.inputState.maskedValue); // stores the value of input

    if (
      detail.inputState.maskedValue.indexOf('34') === 0 ||
      detail.inputState.maskedValue.indexOf('37') === 0
    ) {
      mask = '000.000.000-00';
      return;
    }

    mask = '000.000.000-00';
  };
</script>

<svelte:head>
  <title>Listagem de Usuário | Portal Previdenciário do Servidor</title>
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-address-book" /> Listagem de Usuário
  </h1>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <div
    class="form flex flex-col  md:flex-row flex-wrap items-center justify-start"
  >
    <div class="w-full mb-3  md:w-1/6 p-2">
      <label class="font-bold" for="Servidor">Nome:</label>
      <p />
      <input class="input" type="text" placeholder="Nome" />
    </div>

    <div class="w-full mb-3 md:w-1/6 p-2">
      <label class="font-bold" for="CPF">CPF:</label>
      <p />

      <MaskInput
        class="input"
        type="text"
        alwaysShowMask
        maskChar="_"
        {mask}
        on:change={handleChange}
        placeholder="Informe um CPF"
      />
    </div>

    <div class="w-full mb-3  md:w-1/6 px-2">
      <label class="font-bold" for="Login">Login:</label>
      <p />
      <input class="input" type="text" placeholder="Login" />
    </div>
    <div class="w-full mb-3 md:w-40 ">
      <label class="font-bold" for="Servidor">Situação:</label>
      <p />
      <select class="select">
        <option value="situacao">-- Situação -- </option>
      </select>
    </div>
    <div class="w-full mb-3 md:w-40 px-2">
      <label class="font-bold" for="Servidor">Tipo:</label>
      <p />
      <select class="select">
        <option value="Tipo">-- Tipo --</option>
      </select>
    </div>

    <div class=" mt-3 md:w-14 text-green-500">
      <a href="/"> <i class="fas fa-plus fa-2x" /> </a>
    </div>
    <div class="mt-3  md:w-14 text-red-500">
      <a href="/"> <i class="fas fa-file-pdf fa-2x" /> </a>
    </div>
  </div>

  <table class="border-collapse w-full mt-10 ">
    <thead class="">
      <tr>
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Nome</th
        >
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >CPF</th
        >
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Login</th
        >
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Tipo de Usuário</th
        >
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Situação</th
        >
        <th
          class="p-3 dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Ações</th
        >
      </tr>
    </thead>

    <tbody>
      <tr
        class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Nome</span
          >
          Maria dos Santos
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >CPF</span
          >
          921.432.769-85
        </td>

        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Login</span
          >
          maria_dos_santos
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Tipo de Usuário</span
          >
          SGP
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Situação</span
          >
          Inativo
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Ações</span
          >
          <div class="flex flex-row items-center justify-center space-x-2">
            <a href="/"><i class="fa fa-search" /></a>
            <a href="/"><i class="fa fa-pencil" /></a>
            <a href="/"><i class="fa fa-key" /></a>
            <a href="/"><i class="fa fa-redo" /></a>
            <a href="/"><i class="fa fa-trash" /></a>
          </div>
        </td>
      </tr><tr
        class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Nome</span
          >
          Fulando Santos
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >CPF</span
          >
          921.432.769-85
        </td>

        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Login</span
          >
          fa_santos
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Tipo de Usuário</span
          >
          Portal
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Situação</span
          >
          Ativo
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 dark:text-white text-center border border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
            >Ações</span
          >
          <div class="flex flex-row items-center justify-center space-x-2">
            <a href="/"><i class="fa fa-search" /></a>
            <a href="/"><i class="fa fa-pencil" /></a>
            <a href="/"><i class="fa fa-key" /></a>
            <a href="/"><i class="fa fa-redo" /></a>
            <a href="/"><i class="fa fa-trash" /></a>
          </div>
        </td>
      </tr></tbody
    >
  </table>
</div>
