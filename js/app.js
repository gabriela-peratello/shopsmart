
const input0 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');


function calcularTotal() {
    const v1 = parseFloat(input0.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <h2>Total da compra:</h2> 
        <ul>   
            <li>Você está adquirindo ${v1} unidade(s) de R$ ${v2}. </li> 
            <li>Valor total da compra: R$ ${v1 * v2}. </li>
        </ul>
        `
    }
}

function desconto() {
    const v1 = parseFloat(input0.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let desc = v1 * v2 / 100;
        let total = v1 - desc
        resultado.style.display = 'flex'
        resultado.innerHTML = `

        <h2>Desconto aplicado:</h2>
        <ul>
            <li>Foi aplicado um desconto de ${v2}% sobre o valor de R$ ${v1}. </li> 
            <li>O valor final com desonto é: R$ ${total}. </li>
        </ul>
        `
    }

}

function juros() {
    const v1 = parseFloat(input0.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let acres = v1 * v2 / 100;
        let total = v1 + acres
        resultado.style.display = 'flex'
        resultado.innerHTML = `

        <h2>Acréscimo aplicado:</h2>
        <ul>
            <li>Foi aplicado um acréscimo de ${v2}% sobre o valor de R$${v1}. </li>   
            <li>O valor final com juros: R$ ${total}. </li>
        </ul>
        `
    }
}

function comissao() {
    const v1 = parseFloat(input0.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let acres = v2 / 100;
        let total = v1 * acres
        resultado.style.display = 'flex'
        resultado.innerHTML = `

        <h2>Comissão calculada:</h2>
        <ul> 
            <li>Comissão de ${v2}% sobre a venda de R$ ${v1}. </li>   
            <li>O valor da comissão é de: R$ ${total}. </li>
        </ul>
        `
    }
}

function lucro() {
    const v1 = parseFloat(input0.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        resultado.style.display = 'flex'
        resultado.innerHTML = `

         <h2>Lucro obtido:</h2>
        <ul>
            <li>Preço de venda R$ ${v1} | Custo: R$ ${v2}. </li>   
            <li>O lucro ganho é de: R$ ${v1 - v2}.</span> </li>
        </ul>
        `
    }
}

function limpar() {
    resultado.style.display = 'none', input0.value = '', input02.value = '', input0.focus();
}
