document.addEventListener("DOMContentLoaded", () => {

    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const codeInput = document.getElementById("codeInput");
    const message = document.getElementById("message");

    submitBtn.addEventListener("click", () => {
        const code = codeInput.value.trim();

        if (code === "Melocotón") {
            message.textContent = "MUY BIEEEN JAJAJAJ.<br>Dale, a por el siguiente.";
        } else {
            message.textContent = "Ese gato no era";
        }
    });

    resetBtn.addEventListener("click", () => {
        codeInput.value = "";
        message.textContent = "";
    });

});
