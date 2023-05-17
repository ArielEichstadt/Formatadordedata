function bemvindo(){
    let nome = window.prompt("digite seu nome")
    document.getElementById('IDLABEL').innerHTML = nome   
}

function data(){
    let date = new Date();
    let options = { 

        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    }
       

    let formatedDate = date.toLocaleDateString('pt-BR', options);
    document.getElementById('IDDATA').textContent = formatedDate;
}