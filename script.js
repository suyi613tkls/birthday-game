let errores = 0;

document.addEventListener("DOMContentLoaded", () => {

    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const codeInput = document.getElementById("codeInput");
    const message = document.getElementById("message");

    submitBtn.addEventListener("click", () => {
        const code = codeInput.value.trim();

        if (code === "Melocotón") {
            message.innerHTML = "MUY BIEEEN JAJAJAJ.<br>Dale, a por el siguiente.";
        } else {
            errores++;

            if (errores === 1) {
                message.innerHTML = "No ese no, otro...";
            } else if (errores === 2) {
                message.innerHTML = "Ummmmm ese tampoco eh jsjsj";
            } else {
                message.innerHTML = "Solo tienes 4 gatos, piensa...";
            }
        }
    });
            
    resetBtn.addEventListener("click", () => {
        codeInput.value = "";
        message.textContent = "";
    });

});
