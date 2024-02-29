let livros= [];
const  endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPointApi);
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}

