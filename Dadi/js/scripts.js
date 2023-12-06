let giocatore = 0;

giocatore = Math.floor(Math.random() * 6 )+ 1;

let computer = 0;

computer = Math.floor(Math.random() * 6  ) + 1;

console.log('giocatore', giocatore, typeof giocatore);
console.log('computer', computer, typeof computer);


if(giocatore > computer){
    console.log('vince il giocatore');
}
else if(giocatore < computer){
    console.log('vince computer');
}
else if(giocatore == computer){

    console.log("E' un pareggio");
}