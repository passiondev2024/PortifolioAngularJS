<script>
  import MaskInput from 'svelte-input-mask/MaskInput.svelte';
  import { handleChange } from '../../components/include/mask/Cpf.svelte';
  let mask = '000.000.000-00';
</script>

<svelte:head>
  <title>Relatório do DIPR | Portal Previdenciário do Servidor</title>
</svelte:head>

<div
  id="head"
  class="flex flex-row justify-between mt-10 min-w-full text-gray-700 p-5 border-gray-500 border-1 shadow-md rounded-b-lg bg-gray-200"
>
  <h1 class="text-2xl">
    <i class="fa fa-bullhorn" /> Relatório do DIPR
  </h1>

  <h2 class="text-xl">
    Demonstrativo de Informações Previdenciárias e Repasses - DIPR
  </h2>
</div>
<div
  class="bg-white container dark:bg-gray-800 dark:text-gray-50 mt-10 border-2  box-border box-content rounded-lg dark:border-gray-500 border-gray-100 shadow-sm p-6"
>
  <table class="border-collapse w-full mt-2">
    <thead>
      <tr
        class="bg-white dark:bg-gray-800 lg:dark:hover:bg-gray-700  lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <th
          colspan="2"
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Selecione as etapas conforme a necessidade do relatório</th
        >
        <th
          class="p-3  dark:bg-gray-600 dark:text-white font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >Informe a competência</th
        >
      </tr>
    </thead>
    <tbody>
      <tr class="">
        <td class="">
          <input
            type="checkbox"
            name="etapa[]"
            value="ente"
            checked="checked"
            id="opt-ente"
          />
        </td>
        <td>Ente e Unidade Gestora</td>
        <td rowspan="10" valign="top">
          <label>
            <span>Competência 1 *</span>
            <input
              type="text"
              id="dtcomp1"
              name="dtcomp1"
              placeholder="mes/ano"
              size="8"
              required=""
              autofocus=""
              class="input"
            />
          </label>
          <label>
            <span>Competência 2 *</span>
            <input
              type="text"
              id="dtcomp2"
              name="dtcomp2"
              placeholder="mes/ano"
              size="8"
              required=""
              class="input"
            />
          </label>
          <label>
            <span>CNPJ (opcional)</span>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              placeholder="CNPJ do Órgão"
              class="input"
            />
          </label>
          <label>
            <span>&nbsp;</span>
            <button class="btn-green">Gerar PDF</button>
          </label>
        </td>
      </tr>
      <tr>
        <td align="center">
          <input
            type="checkbox"
            name="etapa[]"
            value="etapa_1"
            checked="checked"
          />
        </td>
        <td>ETAPA I - Dados dos Órgãos / Entidades</td>
      </tr>
      <tr>
        <td align="center">
          <input
            type="checkbox"
            name="etapa[]"
            value="etapa_2"
            checked="checked"
          />
        </td>
        <td>ETAPA II - Remunerações e Bases de Cálculo</td>
      </tr>
      <tr>
        <td align="center">
          <input
            type="checkbox"
            name="etapa[]"
            value="etapa_3"
            checked="checked"
          />
        </td>
        <td>ETAPA III - Contribuições, Aportes e Outros Valores</td>
      </tr>
      <tr>
        <td align="center">
          <input
            type="checkbox"
            name="etapa[]"
            value="etapa_5"
            checked="checked"
          />
        </td>
        <td>ETAPA V - Utilização de Recursos do RPPS</td>
        <td rowspan="2" id="resultado" align="center" />
      </tr>
      <tr>
        <td align="center">
          <input
            type="checkbox"
            name="etapa[]"
            value="regra"
            checked="checked"
          />
        </td>
        <td>Regras da extrfação dos dados</td>
        <td rowspan="2" id="resultado" align="center" />
      </tr>
    </tbody>
  </table>
</div>
