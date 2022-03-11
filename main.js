

  function myGenera() {

    qualcosa.classList.remove("d-none");

    let nomeUtente = document.getElementById("nome").value

    let chilometriUtente = document.getElementById("kmNumber").value;
    
    let etaUtente = document.getElementById("eta").value;

    let prezzoBase = chilometriUtente * 0.21;

    let prezzoUnder = prezzoBase - (prezzoBase * 0.2); 
   
    let prezzoOver = prezzoBase - (prezzoBase * 0.4);
   
    // if ( etaUtente == "minorenne" ) {
    //     //istruzioni se condizione è vera
    //     console.log(prezzoUnder.toFixed(2))
    //     document.getElementById("costo_finale").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoUnder}€</h2>`;
    //   } else if ( etaUtente == "over" ) {
    //     //istruzioni se condizione 2 è vera
    //     console.log(prezzoOver.toFixed(2))
    //     document.getElementById("costo_finale").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoOver}€</h2>`;
    //   } else {
    //     //istruzioni nessuna condizione precedente è vera
    //    console.log(prezzoBase.toFixed(2))
    //    document.getElementById("costo_finale").innerHTML = `<h2>Il prezzo del suo biglietto è  ${prezzoBase}€</h2>`;
    //  }

    console.log(nomeUtente + chilometriUtente + etaUtente)

    document.getElementById("nome_passeggero").innerHTML = nomeUtente;

    document.getElementById("carrozza").innerHTML = km;
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