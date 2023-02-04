class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar (){
        let produto = this.lerDados()

        if (this.validaCampos(produto)){
            this.adicionar(produto);
        }

        console.log(this.arrayProdutos)
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;

    }

    lerDados(){
        let produto = {}


        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.precoProduto = document.getElementById('preco').value;

       return produto;

    }

    cancelar(){


    }

    validaCampos(produto){

        let mensagem = '';


        if(produto.nomeProduto == ''){
            mensagem += '- Informe o nome do produto \n';
        }

        if(produto.precoProduto == ''){
            mensagem += '- Informe o preço do produto \n';
        }

        if (mensagem != ''){
            alert (mensagem)
            return false
        }

        return true;
    }


}

var produto = new Produto();
