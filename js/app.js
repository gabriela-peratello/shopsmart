
const input0 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');







function calcularTotal() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input0.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <ul>   
            <h2>Total da compra.</h2> 
            <li>Valor total: <span>${v1 * v2}</span> </li>
        </ul>
        `
    }
}

function desconto() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input0.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let desc = v1 * v2 / 100;
        let total = v1 - desc
        resultado.style.display = 'flex'
        resultado.innerHTML = `
   
        <ul>
            <h2>Desconto aplicado!</h2>
            <li>Foi aplicado um desconto de ${v2}</li>
            <li>O valor final resulta em: <span>${total}</span> </li>
        </ul>
        `
    }

}

function juros() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input0.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let acres = v1 * v2 / 100;
        let total = v1 + acres
        resultado.style.display = 'flex'
        resultado.innerHTML = `
    
        <ul>
         <h2>Acréscimo aplicado</h2>
            <li>Foi aplicado um acréscimo de ${v2} sobre R$${v2}. </li>   
            <li>O valor final com juros: <span>${total}%</span> </li>
        </ul>
        `
    }
}

function comissao() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input0.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let acres = v2 / 100;
        let total = v1 * acres
        resultado.style.display = 'flex'
        resultado.innerHTML = `
       
        <ul> <h2>Comissão calculada</h2>
            <li>Comissão de ${v2}% sobre a venda de R$ ${v1}. </li>   
            <li>O valor da comissão é de: <span>${total}.</span> </li>
        </ul>
        `
    }
}

function lucro() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input0.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        resultado.style.display = 'flex'
        resultado.innerHTML = `

        <ul>
         <h2>Lucro obtido</h2>
            <li>Preço de venda R$ ${v1}| Custo: R$ ${v2} </li>   
            <li>O lucro ganho é de = <span>${v1 - v2}.</span> </li>
        </ul>
        `
    }
}

function limpar() {
    resultado.style.display = 'none', input0.value = '', input02.value = '', input0.focus();
}
