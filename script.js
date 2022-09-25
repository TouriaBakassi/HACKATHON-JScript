// Vous distinguez des pièces de : 1, 2, 5, 10, 20 dollars. On vous demande de créer une fonction
// optimale qui prend en paramètres un montant et nous renvoie le nombre de pièces minimales
// pour former ce montant.
// Ex : console.log(minCoins(43)) => result[1,1,0,0,2]

let Piece1, Piece2, Piece3, Piece4, Piece5;
let result=[];
let montant=115;
function Montant() {

    Piece5=Math.floor(montant/20) ;
    Piece4=Math.floor((montant%20)/10);
    Piece3=Math.floor(((montant%20)%10)/5);
    Piece2=Math.floor((((montant%20)%10)%5)/2);
    Piece1=Math.floor(((((montant%20)%10)%5)%2)/1);

    result[0]=Piece1;
    result[1]=Piece2;
    result[2]=Piece3;
    result[3]=Piece4;
    result[4]=Piece5; 
}
Montant();
console.log(result);