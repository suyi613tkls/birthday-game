document.addEventListener("DOMContentLoaded", () => {

    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const codeInput = document.getElementById("codeInput");
    const message = document.getElementById("message");

    submitBtn.addEventListener("click", () => {
        const code = codeInput.value.trim();

        if (code === "Melocotón") {
            message.textContent = "Correct!";
        } else {
            message.textContent = "Wrong code.";
        }
    });

    resetBtn.addEventListener("click", () => {
        codeInput.value = "";
        message.textContent = "";
    });

});
