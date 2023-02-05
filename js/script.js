class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editID = null;
    }

    salvar (){
        let produto = this.lerDados()

        if (this.validaCampos(produto)){
            if(this.editID == null){
            this.adicionar(produto);
        } else {
            this.atualizar(this.editID, produto);
        }
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
            imgEdit.setAttribute("onclick", "produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/icon-delete-black.png'
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +" )");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto){
        produto.precoProduto = parseFloat(produto.precoProduto)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
           if(this.arrayProdutos[i].id == id ) {
            this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
            this.arrayProdutos[i].precoProduto = produto.precoProduto;
           } 
        }
    }

    preparaEdicao(dados){
        this.editID = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.precoProduto;
        
        document.getElementById('btn1').innerText = 'atualizar';
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

        document.getElementById('btn1').innerText = 'Salvar';
        this.editID = null;
    }

    deletar(id){

        if(confirm('Deseja realmente deletar o produto do ID ' + id)){
            let tbody = document.getElementById('tbody')

            for (let i = 0; i <this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i);
                }
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
