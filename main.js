

  function myGenera() {

    qualcosa.classList.remove("d-none");

    let nomeUtente = document.getElementById("nome").value

    let chilometriUtente = document.getElementById("kmNumber").value;
    
    let etaUtente = document.getElementById("eta").value;

    let prezzoBase = chilometriUtente * 0.21;

    let prezzoUnder = prezzoBase - (prezzoBase * 0.2); 

    console.log(prezzoUnder)
   
    let prezzoOver = prezzoBase - (prezzoBase * 0.4);
   
     if ( etaUtente == "minorenne" ) {
         console.log(prezzoUnder.toFixed(2))
         document.getElementById("costo_finale").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoUnder}€</h2>`;
         document.getElementById("tipo_biglietto").innerHTML = `<h2>Biglietto Sconto Minorenne</h2>`;
       } else if ( etaUtente == "over" ) {
         console.log(prezzoOver.toFixed(2))
         document.getElementById("costo_finale").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoOver}€</h2>`;
         document.getElementById("tipo_biglietto").innerHTML = `<h2>Biglietto Sconto Over 65</h2>`;
       } else {
        console.log(prezzoBase.toFixed(2))
        document.getElementById("costo_finale").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoBase}€</h2>`;
        document.getElementById("tipo_biglietto").innerHTML = `<h2>Biglietto Standard</h2>`;
      }

    console.log(nomeUtente + chilometriUtente + etaUtente)

    document.getElementById("nome_passeggero").innerHTML =  `<h2> ${nomeUtente}</h2>`;

    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;

    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 9000) + 1111;

  }



//al click sul bottone compare un testo
//selezionare l'elemento del DOM
let annulla = document.getElementById("bottoneHide");
let qualcosa = document.getElementById("annullatodo");

//creare l'evento al click
annulla.addEventListener("click",

  //istruzioni che succedono dopo il click sull'elemento
  function() {
    qualcosa.classList.add("d-none");
  }
);