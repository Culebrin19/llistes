
        function afegir() {
            let textToDisplay = document.getElementById("afegir").value;

            let llista = document.getElementById("llista");
            let nouElementLlista = document.createElement("li");
            nouElementLlista.innerHTML = textToDisplay;
            llista.append(nouElementLlista);
        }


        function esborrarLlista() {
            let posicio = document.getElementById("eliminar").value;
            let llista = document.getElementById("llista");

            if (llista.children[posicio]){
                llista.children[posicio].remove();
            } else{
                console.log("No existeix");
            }
            
        }

        function functiomodificar() {
            let posicio = document.getElementById("posicio").value;
            let text = document.getElementById("nouText").value;
            let llista = document.getElementById("llista");

            if (llista.children[posicio]){
                llista.children[posicio].innerHTML= text;
            } else{
                console.log("No existeix la posicio");
            }
        }