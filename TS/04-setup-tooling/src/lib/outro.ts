//teste de remover comentarios.
console.log("test 123");
//const nome: string = 'gui';

function somar (n1: number, n2: number, n3:number): number {
   // let nome: string = "gui"; como isso e local, e n esta sendo utilizado e deixei o noUnusedLocals: true, ira dar erro
    return n1 + n2 + n3;
    //o mesmo serve para o n3, se eu ncolocar no return vai avisar q tem um erro por n estar sendo utilizado, deixando o noUnusedParameters: true, mesmo q o n3 fosse opcionao.
}
somar(1,2,3);//6