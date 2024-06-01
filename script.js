let myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7"); //caracter x
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function excluiLista() {
    let lista = document.getElementById("itemLista");
    while (lista.hasChildNodes()) { 
        lista.removeChild(lista.firstChild);
    }
}

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let dataSelecionada = document.getElementById("dataTarefa").value;

    if (dataSelecionada) {
        let data = new Date(dataSelecionada);
        dataFormatada = (data.getDate() + 1) + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    } else {
        let dataAtual = new Date();
        dataFormatada = dataAtual.getDate() + '/' + (dataAtual.getMonth() + 1) + '/' + dataAtual.getFullYear();
    }

    let t = document.createTextNode(dataFormatada + ' | ' + inputValue.toUpperCase());
    li.appendChild(t);

    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
