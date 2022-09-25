// sum(1,2,3) // => 6 | sum(8,2) // => 10 | sum(1,2,3, 4, 5) // => 15

let sum=[2,4,5,8,22];
let somme=0;

function SommeNmbr() {
    for (let i = 0; i < sum.length; i++) {
        somme= somme+sum[i];  
    } 
    console.log(somme);
}
SommeNmbr();