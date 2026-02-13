
const input0 = document.getElementById('Valor01');
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
            <li>O valor total calculado é = <span>${v1 * v2}</span> </li>
        </ul>
        `
    }
}

function desconto() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input01.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let desc = v1 * v2 / 100;
        let total = v1 - desc
        resultado.style.display = 'flex'
        resultado.innerHTML = `
   
        <ul>
            <li>O desconto que deve ser aplicado é de = <span>${total}</span> </li>
        </ul>
        `
    }

}

function juros() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input01.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let acres = v1 * v2 / 100;
        let total = v1 + acres
        resultado.style.display = 'flex'
        resultado.innerHTML = `
    
        <ul>
            <li>O juros é de = <span>${total}%</span> </li>
        </ul>
        `
    }
}

function comissao() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input01.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        let acres = v1 * v2 / 100;
        let total = v1 + acres
        resultado.style.display = 'flex'
        resultado.innerHTML = `
       
        <ul>
            <li>A comissão ganha é de = <span>${total}</span> </li>
        </ul>
        `
    }
}

function lucro() {
    const v1 = parseFloat(input02.value);
    const v2 = parseFloat(input01.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valores inválidos. Digite um número.')
    } else {
        resultado.style.display = 'flex'
        resultado.innerHTML = `

        <ul>
            <li>O lucro ganho é de = <span>${v1 - v2}</span> </li>
        </ul>
        `
    }
}

function limpar() {
    resultado.style.display = 'none', input01.value = '', input02.value = '', input01.focus();
}
