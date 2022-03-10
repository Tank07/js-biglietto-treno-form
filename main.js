let chilometriUtente = Number(prompt ("Quanti chilometri dovrà percorrere ?"));

let etaUtente = Number(prompt ("Quanti anni ha ?"));

console.log(chilometriUtente + etaUtente);

let prezzoBase = chilometriUtente * 0.21;

console.log(prezzoBase);

let prezzoUnder = prezzoBase - (prezzoBase/100 * 20); 

let prezzoOver = prezzoBase - (prezzoBase/100 * 40);

if ( etaUtente < 18 ) {
    //istruzioni se condizione è vera
    console.log(prezzoUnder.toFixed(2))
    document.getElementById("contenitore_prezzo").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoUnder}€</h2>`;
  } else if ( etaUtente > 65) {
    //istruzioni se condizione 2 è vera
    console.log(prezzoOver.toFixed(2))
    document.getElementById("contenitore_prezzo").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoOver}€</h2>`;
  } else {
    //istruzioni nessuna condizione precedente è vera
    console.log(prezzoBase.toFixed(2))
    document.getElementById("contenitore_prezzo").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoBase}€</h2>`;
  }
