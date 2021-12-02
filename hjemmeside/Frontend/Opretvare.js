document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form_vare").addEventListener("submit", (event) => {
      event.preventDefault();
    

      const kategori = document.getElementById("Kategori").value;
      const Pris= document.getElementById("Pris").value;
      const billede= document.getElementById("billede").value;

  
      const vare = {
        kategori: kategori,
        Pris: Pris,
        billede: billede
    };           
    
    fetch("http://localhost:5555/vare/opret_vare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vare),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/home.html";
          }
        })
        .catch(() => {
          window.alert("Der opstod en fejl");
        });
    });
  });