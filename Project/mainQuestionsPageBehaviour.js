
// The answerIndex says which option is the answer and the options start counting at 0
// so the first option is labeld 0 then 1 and so on. example: for the first question the anserIndex is 1, so the answr is "1984"
const QUESTION_BANK = [
  { id: "q1", text: "Which novel warns about surveillance and propaganda?", choices: ["Brave New World", "1984", "Animal Farm", "Fahrenheit 451"], answerIndex: 1, hint: "Look for telescreens and Newspeak." },
  { id: "q2", text: "Who wrote The Hobbit?", choices: ["C.S. Lewis", "J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin"], answerIndex: 2, hint: "He also wrote The Lord of the Rings." },
  { id: "q3", text: "In Pride and Prejudice, who is the protagonist?", choices: ["Emma Woodhouse", "Elizabeth Bennet", "Jane Fairfax", "Anne Elliot"], answerIndex: 1, hint: "Second eldest Bennet daughter." },
  { id: "q4", text: "Which novel takes place during the Roaring Twenties?", choices: ["The Great Gatsby", "Moby Dick", "On the Road", "Beloved"], answerIndex: 0, hint: "This story follows a mysterious millionaire." },
  { id: "q5", text: "In this novel the writer's young son has a powerful psychic ability.", choices: ["Frankenstein", "IT", "The Conjuring", "The Shining"], answerIndex: 3, hint: "Written by Stephen King." },
  { id: "q6", text: "In this novel science has brought extinct animals back to life.", choices: ["The Lost Kingdom", "Jurrasic World", "Jurrasic Park", "Extinction"], answerIndex: 2, hint: "'Don't Move! It's vision is based on movement.'" },
  { id: "q7", text: "In The Cat in the Hat who is the voice of repsonsibility?", choices: ["The Fish", "The Dog", "Sally", "The Cat"], answerIndex: 0, hint: "Metis over might." },
  { id: "q8", text: "Which dystopia relies on conditioning over fear?", choices: ["1984", "Brave New World", "The Handmaid's Tale", "We"], answerIndex: 1, hint: "Happiness engineered as policy." },
  { id: "q9", text: "Scout’s perspective is central to:", choices: ["Wuthering Heights", "The Da Vinci Code", "And There Were None", "Gone Girl"], answerIndex: 2, hint: "The setting of the story if known as either Soldier Island or, based on the original nursery rhyme, Indian Island." },
  { id: "q10", text: "Who killed Romeo?", choices: ["The Capulets", "His father", "Juliet", "Himself"], answerIndex: 3, hint: "It wasn't The Capulets." },
  { id: "q11", text: "What does Newspeak aim to do?", choices: ["Expand thought", "Limit thought", "Improve literacy", "Promote art"], answerIndex: 1, hint: "Fewer words, fewer ideas." },
  { id: "q12", text: "Bilbo’s growth is marked by:", choices: ["Inherited power", "External rescue", "Courageous choices", "Divine fate"], answerIndex: 2, hint: "Small acts, big effects." },
  { id: "q13", text: "The first Goosebumps book:", choices: ["The Mask", "Say Cheese and Die!", "Night of the Living Dummy", "Welcome to Dead House"], answerIndex: 3, hint: "Amanda and Josh Benson move with their parents to Dark Falls." },
  { id: "q14", text: "Frankenstein’s creature longs for:", choices: ["Power", "Wealth", "Acceptance", "Revenge only"], answerIndex: 2, hint: "Loneliness drives the plot." },
  { id: "q15", text: "Hospitality is a recurring motif in:", choices: ["The Odyssey", "Beowulf", "Inferno", "Hamlet"], answerIndex: 0, hint: "Guest-friend rules matter." },
  { id: "q16", text: "Which novel features a group of boys stranded on an island?", choices: ["The Odyssey", "Island of the Blue Dolphins", "The Coral Island", "Lord of the Flies"], answerIndex: 3, hint: "In this one a simple seashell becomes the last, fragile symbol of authority." },
  { id: "q17", text: "A young boy discovers he’s a wizard on his 11th birthday.", choices: ["Percy Jackson and the Lightning Thief", "Harry Potter and the Sorcerer’s Stone", "The Hobbit", "Artemis Fowl: The Atlantis Complex"], answerIndex: 1, hint: "Written by J. K. Rowling." },
  { id: "q18", text: "Teenagers are forced to fight to the death in a televised competition.", choices: ["The Hunger Games", "Divergent", "The Maze Runner", "Legend"], answerIndex: 0, hint: "Katniss Everdeen is the heroine." },
  { id: "q19", text: "“It is a truth universally acknowledged…” opens this classic.", choices: ["Jane Eyre", "Sense and Sensibility", "Pride and Prejudice", "Wuthering Heights"], answerIndex: 2, hint: " Written by Jane Austen." },
  { id: "q20", text: "A teenage girl with cancer falls in love with Augustus Waters.", choices: ["Looking for Alaska", "Five Feet Apart", "Me Before You", "The Fault in Our Stars"], answerIndex: 3, hint: " Written by Jane Austen." },
  { id: "q21", text: "A boy raised by wolves in the jungle befriends Baloo and Bagheera.", choices: [" The Jungle Book", "Tarzan", "White Fang", "Call of the Wild"], answerIndex: 0, hint: "The main antagonist is a tiger." },
  { id: "q22", text: "A wardrobe leads children into a magical land.", choices: ["Peter Pan", "The Lion, the Witch and the Wardrobe", "Alice’s Adventures in Wonderland", "The Wizard of Oz"], answerIndex: 1, hint: "The land they enter is ruled by a White Witch who makes it “always winter, never Christmas.”" },
  { id: "q23", text: "A captain is obsessed with hunting a white whale.", choices: ["Treasure Island", "The Old Man and the Sea", " Moby-Dick", "Twenty Thousand Leagues Under the Sea"], answerIndex: 2, hint: "The narrator famously begins with “Call me Ishmael.”" },
  { id: "q24", text: "In this society, people are divided into factions based on virtues.", choices: ["Legend", "Amulet: The Stonekeeper", " The Maze Runner", "Divergent"], answerIndex: 3, hint: "The main character is a woman." },
  { id: "q25", text: "A brilliant girl uses telekinesis to fight her cruel headmistress.", choices: ["Coraline", "Matilda", "James and the Giant Peach", " The Witches"], answerIndex: 1, hint: "This book also got a movie." },
  { id: "q26", text: "Four sisters—Meg, Jo, Beth, and Amy—grow up during the Civil War.", choices: ["A Tree Grows in Brooklyn", "Anne of Green Gables", "James and the Giant Peach", "Little Women"], answerIndex: 3, hint: "Jo dreams of being a writer and struggles with society’s expectations." },
  { id: "q27", text: "A boy enters a virtual reality contest to win control of a tech empire.", choices: ["Ender’s Game", "Minecraft", "Ready Player One", "Ready Player Two"], answerIndex: 2, hint: "The contest is based on 1980s pop culture." },
  { id: "q28", text: "A pig named Wilbur is saved by a clever spider.", choices: ["Charlotte’s Web", "Stuart Little", " The Wind in the Willows", "Madam Web"], answerIndex: 0, hint: "The spider writes words in her web." },
  { id: "q29", text: "A boy wins a golden ticket to visit a magical chocolate factory.", choices: ["The BFG", "Charlie and the Chocolate Factory", "Charlie Brown and the Chocolate Factory", "The Lorax"], answerIndex: 1, hint: "This book has a movie too." },
  { id: "q30", text: "The most popular book of all time is: ", choices: ["The Lord of the Rings", "The Little Red Book", "The Qur'an", "The Bible"], answerIndex: 3, hint: "It has many authors." },
  { id: "q31", text: "Which one of these franchises started as a book? ", choices: ["Resident Evil", "Tomb Raider", "Halo", "The Witcher"], answerIndex: 3, hint: "The hero is more likely to consult a bestiary than a computer." },
  { id: "q32", text: "Which one of these is not a real book? ", choices: ["Cooking with Poo", "Training Unicorns to Tap Dance", "Do Penguins Have Knees?", "How to Traumatize Your Children"], answerIndex: 1, hint: "Cooking With Poo is a real book and it was written by Bangkok chef Saiyuud Diwong, whose nickname is Poo (Thai for 'crab')" },
  { id: "q33", text: "Which  book is about a boy who was born with facial differences and the challenges he faces after switching from being homeschooled to going to public school? ", choices: ["Franklin Goes to School", "Diary of a Wimpy Kid", "Wonder", "Thirteen Reasons Why"], answerIndex: 2, hint: "The main character isn't an animal." },
  


];
 
 


//  shuffle the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// Select random questions 
function pickRandomQuestions(bank, count = 10) {
  const copy = bank.slice();
  shuffle(copy);
  return copy.slice(0, count);
}


// Render quiz to the form
function renderQuiz(questions) {
  const form = document.getElementById("quizForm");
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

// Load the questions
let currentQuestions = pickRandomQuestions(QUESTION_BANK, 10);
renderQuiz(currentQuestions);

//Timer:
//get current date and time
var now = new Date().getTime();

//set the date were counting down to
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
    location.replace("home.html");
  }

  //output the result in an element
  document.getElementById("timer").innerHTML = minutes + "m " + (seconds < 10 ? '0' : '') + seconds + "s ";
}, 1000);

//submit button
document.getElementById("submitBtn").addEventListener("click", () => {
  //reset the score and then calculate the score
document.getElementById("score").textContent = ""; 
  let score = 0;
  currentQuestions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (selected && parseInt(selected.value) === q.answerIndex) {
      score++;
    }  
  });
  location.replace(`resultPage.html?score=${score}&total=${currentQuestions.length}`);
});


