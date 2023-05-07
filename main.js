// pilha
let array = [];

function adicionar() {
    document.getElementById('lista').innerHTML = '';
    if (array.length == 10) {
        let aviso = document.getElementById('erro');
        aviso.classList.add('mostrar');
        setTimeout(() => {
            aviso.classList.remove('mostrar');
        }, 1000);
    } else {
        array.push(document.getElementById('add').value);
    }
    for (let index = 0; index < array.length; index++) {
        document.getElementById('lista').innerHTML += `${array[index]} <br>`;
    }
    document.getElementById('top').innerHTML = `Topo da pilha: ${array[array.length - 1]}`
    i++;
}

function remover() {
    document.getElementById('lista').innerHTML = '';
    array.pop();
    for (let index = 0; index < array.length; index++) {
        document.getElementById('lista').innerHTML += `${array[index]} <br>`;
    }
}

// Fila

let arrayFila = [];

function add() {
    if (arrayFila.length == 10) {
        let aviso = document.getElementById('erroFila');
        aviso.classList.add('mostrar');
        setTimeout(() => {
            aviso.classList.remove('mostrar');
        }, 1000);
    } else {
        document.getElementById('fila').innerHTML = '';
        arrayFila.push(document.getElementById('filaValue').value)
        for (let index = 0; index < arrayFila.length; index++) {
            document.getElementById('fila').innerHTML += `${arrayFila[index]} <br>`;
        }
    }
}

function remove() {
    document.getElementById('fila').innerHTML = '';
    arrayFila.shift();
    for (let index = 0; index < arrayFila.length; index++) {
        document.getElementById('fila').innerHTML += `${arrayFila[index]} <br>`;
    }
}