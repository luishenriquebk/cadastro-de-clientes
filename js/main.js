// VARIÁVEIS
let inputsFormulario = document.querySelectorAll('.modal-field')
let inputNomeCliente = document.querySelector('#inputNomeCliente');
let inputCpfCliente = document.querySelector('#inputCpfCliente');
let inputTelefoneCliente = document.querySelector('#inputTelefoneCliente');
let inputCidadeCliente = document.querySelector('#inputCidadeCliente');
let tbodyClientes = document.querySelector('#tbodyClientes');
let bancoDeDadosClientes = [];

// CARREGAR TABELA
const carregarTabela = () => {
    tbodyClientes.textContent = '';
    bancoDeDadosClientes.forEach((cliente, index) => {
        exibirCliente(cliente, index);
    })
}

// INPUTS
// CPF
const caracteresCpf = () => {
    if(inputCpfCliente.value.length == 3 || inputCpfCliente.value.length == 7) {
        inputCpfCliente.value += '.';
        console.log('Teste 1')
    } else if (inputCpfCliente.value.length == 11) {
        inputCpfCliente.value += '-';
    }
}

// TELEFONE
const caracteresTelefone = () => {
    if (inputTelefoneCliente.value.length == 2) {
        inputTelefoneCliente.value += ' ';
    } else if (inputTelefoneCliente.value.length == 8) {
        inputTelefoneCliente.value += '-';
    }
}

// ADICIONAR CLIENTE
const salvarCliente = () => {
    if((inputNomeCliente.value && inputCpfCliente.value
        && inputTelefoneCliente.value && inputCidadeCliente.value) == '') {
        alert('Preencha os campos.');
    } else {
        let cliente = {
            nome: inputNomeCliente.value,
            cpf: inputCpfCliente.value,
            telefone: inputTelefoneCliente.value,
            cidade: inputCidadeCliente.value
        }
        bancoDeDadosClientes.push(cliente);
        limparFormulario();
        carregarTabela();
        closeModalSaveClient();
        console.log(bancoDeDadosClientes);    
    }     
}

// EXIBIR CLIENTE
const exibirCliente = (cliente, index) => {
    let clienteTabela = document.createElement('tr');
    clienteTabela.innerHTML = 
    `
        <td> ${cliente.nome.toUpperCase()} </td>
        <td> ${cliente.cpf} </td>
        <td> ${cliente.telefone} </td>
        <td> ${cliente.cidade.toUpperCase()} </td>
        <td>
            <button id="btnEditarCliente" onclick="openModalSaveClient(${index})" index=${index}>Editar</button>
            <button id="btnExcluirCliente" onclick="deletarCliente(${index})" index=${index}>Excluir</button>
        </td>
    `
    tbodyClientes.appendChild(clienteTabela);
}

// EDITAR CLIENTE
// const editarCliente = (index) => {
    
// }

// DELETAR CLIENTE
const deletarCliente = (index) => {
    let decisaoUsuario = confirm('Deseja excluir cliente?');
    if(decisaoUsuario) {
        bancoDeDadosClientes.splice(index, 1);
        carregarTabela();
    }
    console.log(bancoDeDadosClientes);
}

// LIMPAR FORMULÁRIO
const limparFormulario = () => {
    inputsFormulario.forEach(input => {
        input.value = ''
    });
}

// MODALS
let modalSaveClient = document.querySelector('#modalSaveClient');
let modalDeleteClient = document.querySelector('#modalDeleteClient');
const openModalSaveClient = () => document.querySelector('#modalSaveClient').classList.add('active');
const closeModalSaveClient = () => {
    document.querySelector('#modalSaveClient').classList.remove('active');
    limparFormulario();
}
const openModalDeleteClient = () => document.querySelector('#modalDeleteClient').classList.add('active');
const closeModalDeleteClient = () => document.querySelector('#modalDeleteClient').classList.remove('active');
