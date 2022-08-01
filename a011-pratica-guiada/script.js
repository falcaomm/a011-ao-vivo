//CRIANDO UM OBJETO
console.log("\nCRIANDO UM OBJETO");

const estudante = {
    nome: "Manuela",
    sobrenome: "Falcão",
    matricula : 000013,
    notasSemestre: [8,10,7]
}
console.log(`Objeto estudante:`, estudante);

//ADICIONANDO NOVAS PROPRIEDADES
console.log("\nADICIONANDO NOVAS PROPRIEDADES");

estudante.modulo = "Módulo 1 - JS"
console.log(`Objeto estudante alterado:`, estudante);

//IMPRIMINDO INFORMAÇÕES
console.log("\nIMPRIMINDO INFORMAÇÕES");

console.log(`Nome do estudante:`,estudante.nome);
console.log(`Segunda nota do estudante:`, estudante.notasSemestre[1]);
console.log(`Módulo atual:`, estudante.modulo);

//FAZENDO CÓPIA
console.log("\nFAZENDO CÓPIA");

const copiaEstudante = {
    ...estudante
}
console.log(`Cópia do objeto estudante:`, copiaEstudante);

//ALTERANDO CÓPIA
console.log("\nALTERANDO CÓPIA");

copiaEstudante.nome = "AstroDev"
console.log(`Cópia com nome alterado:`,copiaEstudante);

copiaEstudante.modulo = "Módulo 2 - JS, HTML e CSS"
console.log(`Cópia com módulo alterado:`,copiaEstudante);

//ADICIONANDO ALGO NA CÓPIA
console.log("\nADICIONANDO ALGO NA CÓPIA");

// copiaEstudante.notasSemestre.push(9) 
copiaEstudante.notasSemestre = [... copiaEstudante.notasSemestre, 9]
console.log(`Cópia com nota adicionada:`,copiaEstudante);

//CRIANDO UM ARRAY COM OBJETOS DENTRO 
console.log("\nCRIANDO UM ARRAY COM OBJETOS DENTRO");

const estudantesLabenu = []
estudantesLabenu.push(estudante)
estudantesLabenu.push(copiaEstudante)
console.log(`Estudantes Labenu:`, estudantesLabenu);