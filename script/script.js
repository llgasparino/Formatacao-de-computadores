document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Todos os campos são obrigatórios.");
                event.preventDefault();
            }
        });
    }

    const params = new URLSearchParams(window.location.search);
    const receivedDataElement = document.getElementById("receivedData");

    if (receivedDataElement) {
        let receivedData = "Dados recebidos:<br>";
        params.forEach((value, key) => {
            receivedData += `<strong>${key}:</strong> ${value}<br>`;
        });
        receivedDataElement.innerHTML = receivedData;
    }
});
