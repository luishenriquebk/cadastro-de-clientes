// VARIÁVEIS
let inputNomeCliente = document.querySelector('#inputNomeCliente');
let inputCpfCliente = document.querySelector('#inputCpfCliente');
let inputTelefoneCliente = document.querySelector('#inputTelefoneCliente');
let inputCidadeCliente = document.querySelector('#inputCidadeCliente');
let tbodyClientes = document.querySelector('#tbodyClientes');
let bancoDeDadosClientes = [];

// ADICIONAR
const salvarCliente = () => {
    let cliente = {
        nome: inputNomeCliente.value,
        cpf: inputCpfCliente.value,
        telefone: inputTelefoneCliente.value,
        cidade: inputCidadeCliente.value
    }
    bancoDeDadosClientes.push(cliente);
    limparFormulario();
    criarCliente(cliente);
    closeModalSaveClient();
    console.log(bancoDeDadosClientes);
}

const criarCliente = (cliente) => {
    let clienteTabela = document.createElement('tr');
    clienteTabela.innerHTML = 
    `
        <td> ${cliente.nome} </td>
        <td> ${cliente.cpf} </td>
        <td> ${cliente.telefone} </td>
        <td> ${cliente.cidade} </td>
        <td>
            <button id="btnEditarCliente" onclick="openModalSaveClient()">Editar</button>
            <button id="btnExcluirCliente" onclick="openModalDeleteClient()">Excluir</button>
        </td>
    `
    tbodyClientes.appendChild(clienteTabela);
}

// LIMPAR FORMULÁRIO
const limparFormulario = () => {
    inputNomeCliente.value = '';
    inputCpfCliente.value = '';
    inputTelefoneCliente.value = '';
    inputCidadeCliente.value = '';
}

// MODALS
let modalSaveClient = document.querySelector('#modalSaveClient');
let modalDeleteClient = document.querySelector('#modalDeleteClient');
const openModalSaveClient = () => document.querySelector('#modalSaveClient').classList.add('active');
const closeModalSaveClient = () => document.querySelector('#modalSaveClient').classList.remove('active');
const openModalDeleteClient = () => document.querySelector('#modalDeleteClient').classList.add('active');
const closeModalDeleteClient = () => document.querySelector('#modalDeleteClient').classList.remove('active');
