
// Initialize from server when HTML is ready
let currentQuestions = []; 
async function initQuizFromServer(count = 10) {
  // make sure all HTML elements exist
  const quizForm = document.getElementById("quizForm");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const timer = document.getElementById("timer");
  
  if (!quizForm || !submitBtn || !resetBtn || !timer) {
    console.error('Required DOM elements missing:', { quizForm, submitBtn, resetBtn, timer });
    return;
  }

  try {
    const resp = await fetch(`/api/quiz?count=${count}`);
    if (!resp.ok) {
      console.error('Failed to fetch quiz from server. Status:', resp.status);
      return;
    }
    const data = await resp.json();
    currentQuestions = data.questions;
    console.log('Loaded questions:', currentQuestions.length);
    renderQuiz(currentQuestions); 
  } catch (err) {
    console.error('Error fetching quiz:', err);
  }
}

// Wait for HTML to be ready 
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready, initializing quiz');
    initQuizFromServer(10);
  });
} else {
  console.log('DOM already loaded, initializing quiz');
  initQuizFromServer(10);
}


// load quiz to the form
function renderQuiz(questions) {
  const form = document.getElementById("quizForm");
  if (!form) {
    console.error('quizForm element not found in DOM');
    return;
  }
  form.innerHTML = ""; // clear


  questions.forEach((q, idx) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.dataset.qid = q.id;


    const title = document.createElement("div");
    title.className = "q-title";
    title.textContent = `${idx + 1}. ${q.text}`;
    qDiv.appendChild(title);


    const choicesDiv = document.createElement("div");
    choicesDiv.className = "choices";


    q.choices.forEach((choice, cIdx) => {
      const id = `${q.id}_c${cIdx}`;
      const label = document.createElement("label");


      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;           
      input.value = cIdx;
      input.id = id;


      const text = document.createTextNode(` ${choice}`);
      label.htmlFor = id;
      label.appendChild(input);
      label.appendChild(text);


      choicesDiv.appendChild(label);
    });


    qDiv.appendChild(choicesDiv);


    const hintBtn = document.createElement("button");
    hintBtn.type = "button";
    hintBtn.className = "hint-btn";
    hintBtn.textContent = "Show hint";
    const hintBox = document.createElement("div");
    hintBox.className = "hint";
    hintBox.textContent = q.hint;


    hintBtn.addEventListener("click", () => {
      const shown = hintBox.style.display === "block";
      hintBox.style.display = shown ? "none" : "block";
      hintBtn.textContent = shown ? "Show hint" : "Hide hint";
    });


    qDiv.appendChild(hintBtn);
    qDiv.appendChild(hintBox);


    form.appendChild(qDiv);
  });
}



//Timer:
//get current date and time
var now = new Date().getTime();

// set the date we're counting down to
var countDownDate = now + (5 * 60 * 1000);

//update the count down every 1 second
var x = setInterval(function() {
  //for comparison get current time
  var currentTime = new Date().getTime();
    
  //find the distance between now and the count down date
  var distance = countDownDate - currentTime;
    
  //calculations for minutes and seconds
  var totalSeconds = Math.floor(distance / 1000);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
    
  //if the count down is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    location.replace(`resultsPage.html?score=0&total=${currentQuestions.length}`);
  }

  //output the result in an element
  document.getElementById("timer").innerHTML = minutes + "m " + (seconds < 10 ? '0' : '') + seconds + "s ";
}, 1000);

// submit button: collect answers and send to server for scoring
document.getElementById("submitBtn").addEventListener("click", async () => {
  document.getElementById("score").textContent = ""; 
  const answers = {};
  currentQuestions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (selected) {
      answers[q.id] = parseInt(selected.value);
    }
  });

  // send to server
  const resp = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers })
  });
  if (!resp.ok) {
    console.error('Submit failed');
    return;
  }
  const result = await resp.json();
  const score = result.score || 0;
  const total = currentQuestions.length || result.total || 10;
  // go to results page 
  location.replace(`resultsPage.html?score=${score}&total=${total}`);
});

//reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  // Reload quiz from server
  initQuizFromServer(10);
});

//retry button
document.getElementById("retryBtn").addEventListener("click", () => {
  // Return to the main questions page
  location.replace("mainQuestionsPage.html");
});


