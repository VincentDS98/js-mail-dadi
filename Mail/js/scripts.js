
const mailUtente = prompt('inserisci la tua email');
const mail = mailUtente;
console.log('mailUtente', mailUtente,typeof mailUtente);
console.log('mail', mail,typeof mail);
let controllo = false;


const listaMail = [
    'pippo',
    'pluto',
    'paperino'

];



for(let i=0;i<listaMail.length;i++){

    if(listaMail[i]==mailUtente){

        controllo = true;
       
        i=listaMail.length;
    }

    
}

 if(controllo == true){
        console.log('puoi entrare');
    }
    else {
        console.log('non puoi entrare');
    }


