const express = require('express');
const path = require('path');
const { QUESTION_BANK } = require('./server/quizData');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// make home.html  the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//  pickRandomQuestions in the server
function pickRandomQuestions(bank, count = 10) {
  const copy = bank.slice();
  shuffle(copy);
  return copy.slice(0, count);
}

// get quiz
app.get('/api/quiz', (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const picked = pickRandomQuestions(QUESTION_BANK, count);
  
  const payload = picked.map(q => ({
    id: q.id,
    text: q.text,
    choices: q.choices,
    hint: q.hint
  }));
  res.json({ total: payload.length, questions: payload });
});

// submit answers and calculate score in the server
app.post('/api/submit', (req, res) => {
  const answers = req.body.answers || {};
  
  let score = 0;
  Object.entries(answers).forEach(([qid, selectedIndex]) => {
    const q = QUESTION_BANK.find(x => x.id === qid);
    if (q && parseInt(selectedIndex) === q.answerIndex) score++;
  });
  
  res.json({ score, total: Object.keys(answers).length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

// Comment this to run the page without tests. Uncomment to run tests.
/*
module.exports = {
  shuffle,
  pickRandomQuestions,
  QUESTION_BANK
};
*/