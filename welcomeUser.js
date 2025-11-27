document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("usernameInput");
    const startButton = document.getElementById("startButton");
    const submitUsername = document.getElementById("submitUsername");

    //saves the username inputted
    submitUsername.addEventListener("click", () => {
        const name = username.value.trim();
        if (name === "") {
            alert("Enter your name before submitting!");
            return;
        }
        localStorage.setItem('usernameInput', name);
        alert(`Username "${name}" saved! The quiz is now open.`);
    })

    startButton.addEventListener("click", () => {
        const savedName = localStorage.getItem('usernameInput')

    if (!savedName) {
        alert("Enter your name before you start the quiz!");
        return;
    }
    window.location.href = "mainQuestionsPage.html";
});
});
