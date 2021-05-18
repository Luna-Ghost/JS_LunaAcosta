const columnas = Math.floor(Math.random() * 10) + 1;
const filas = Math.floor(Math.random() * 10) + 1;
console.log("Alto: " + columnas);
console.log("Ancho: " + filas);

let inicio = 1;
let num=1;
let fibonacci=1;
let sucesion = [];

for(let i = 0; i < columnas; i++)
{
    sucesion[i] = new Array();
    for(let j = 0; j < filas; j++)
    {
        if(i==0 && j==0)
        {
            sucesion[i][j]=inicio;
        }else{
            fibonacci = num + fibonacci;
            num = fibonacci - num;
            sucesion[i][j]=num;
        } 
    }
    if(i % 2 == 1)
    {
        sucesion[i].reverse();
    }
}

console.log(sucesion);
