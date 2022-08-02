//EXERCÍCIO DE FIXAÇÃO
console.log("EXERCÍCIO DE FIXAÇÃO")

const carrinho = {
    nomeComprador: "Manuela",
    formaPagamento: "PIX",
    endereco: "florianópolis",
}

console.log("\nCarrinho sem compras:", carrinho)

carrinho.compras = [
    {produto: "Tomate", precoKg:4.50, quantidade: 3},
    {produto: "Banana", precoKg:2.99, quantidade: 5},
    {produto: "Cebola", precoKg:3.49, quantidade: 4}
]

console.log("\nCarrinho com compras:", carrinho)

console.log("\nQuantidade de itens diferentes no carrinho:", carrinho.compras.length)

const carrinhoPresente = {... carrinho}
carrinhoPresente.nomeComprador = "Julia"
carrinhoPresente.formaPagamento = "Cartão Presente"
console.log("\nCarrinho presente",carrinhoPresente);