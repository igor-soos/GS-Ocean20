function voltar() { // pegar a página anterior do historico e volta
    if (window.history.length > 1) {
        window.history.back();
    }
}