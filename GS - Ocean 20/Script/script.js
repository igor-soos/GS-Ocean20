function openC1(){
    const modal = document.querySelector("#C1") 
    modal.style.display="block";
}

function openC2(){
    const modal = document.querySelector("#C2") 
    modal.style.display="block";
}

function openC3(){
    const modal = document.querySelector("#C3") 
    modal.style.display="block";
}

function openC4(){
    const modal = document.querySelector("#C4") 
    modal.style.display="block";
}

function openC5(){
    const modal = document.querySelector("#C5") 
    modal.style.display="block";
}

function openC6(){
    const modal = document.querySelector("#C6") 
    modal.style.display="block";
}

function openC7(){
    const modal = document.querySelector("#C7") 
    modal.style.display="block";
}

function openC8(){
    const modal = document.querySelector("#C8") 
    modal.style.display="block";
}

function openC9(){
    const modal = document.querySelector("#C9") 
    modal.style.display="block";
}

function openC10(){
    const modal = document.querySelector("#C10") 
    modal.style.display="block";
}

// Função de fechar todos os modals
function closeAllModals(){
    const modals = document.querySelectorAll(".modal-class");
    modals.forEach(modal => {
        modal.style.display = "none";
    });
}

function voltar() { // referente ao botão, pega a página anterior do histórico e volta
    if (window.history.length > 1) {
        window.history.back();
    }
}