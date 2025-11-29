document.addEventListener("DOMContentLoaded", () => {
  // Get username from welcomeUser
  const usernameDisplayElement = document.getElementById("usernameDisplay");
  const savedUsername = localStorage.getItem('usernameInput')

  if (usernameDisplayElement && savedUsername) {
    usernameDisplayElement.textContent = savedUsername;
  }
})

addEventListener("DOMContentLoaded", () => {
    // Get score from mainQuestionsPage
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get('score')) || 0;
    const total = parseInt(urlParams.get('total')) || 10;
    const percentage = (score / total) * 100;

    // Display the score
    const scoreDisplay = document.getElementById("scoreDisplay");
    const gradeMessage = document.getElementById("gradeMessage");
    const resultText = document.getElementById("titleText");

    if (scoreDisplay) {
        scoreDisplay.textContent = ` You got ${score} out of ${total} correct.`;
    }

    // Decide title based on score
  let title = "";
  if (score === total) {
    title = "You are a Bookworm 📚";
  } else if (score >= 7) {
    title = "You are a Casual Reader 🙂";  
  }
    else if (score >= 5) {
    title = " You are a Page Skimmer 👀";
  } else {
    title = "You are a Poser 😅";
  }

  // show the title
  if (gradeMessage) {
    gradeMessage.textContent = title;
  }

});

document.addEventListener("DOMContentLoaded", () => {
  const retryBtn = document.getElementById("retryBtn");
  if (!retryBtn) return; 

  

//take you back to mainQuestionaPage
  retryBtn.addEventListener("click", () => {
    window.location.href = "mainQuestionsPage.html";
  });
});


localStorage.getItem('usernameInput')


