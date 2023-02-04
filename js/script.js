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

        this.listaTabela();
        this.cancelar()
    }

    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for (let i = 0; i <this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;

            td_id.classList.add('center')

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/icon-edit-black.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/icon-delete-black.png'
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +" )");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
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
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }

    deletar(id){

        let tbody = document.getElementById('tbody')

        for (let i = 0; i <this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i);
            }
        }
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
