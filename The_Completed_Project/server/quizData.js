// The `answerIndex` says which option is the answer and the options start counting at 0.
// So the first option is labeled 0, then 1 and so on. Example: for the 
// first question the `answerIndex` is 1, so the answer is "1984".
//This is being stored in the server.
module.exports = {
  QUESTION_BANK: [
    { id: "q1", text: "Which novel warns about surveillance and propaganda?", choices: ["Brave New World", "1984", "Animal Farm", "Fahrenheit 451"], answerIndex: 1, hint: "Look for telescreens and Newspeak." },
    { id: "q2", text: "Who wrote The Hobbit?", choices: ["C.S. Lewis", "J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin"], answerIndex: 2, hint: "He also wrote The Lord of the Rings." },
    { id: "q3", text: "In Pride and Prejudice, who is the protagonist?", choices: ["Emma Woodhouse", "Elizabeth Bennet", "Jane Fairfax", "Anne Elliot"], answerIndex: 1, hint: "Second eldest Bennet daughter." },
    { id: "q4", text: "Which novel takes place during the Roaring Twenties?", choices: ["The Great Gatsby", "Moby Dick", "On the Road", "Beloved"], answerIndex: 0, hint: "This story follows a mysterious millionaire." },
    { id: "q5", text: "In this novel the writer's young son has a powerful psychic ability.", choices: ["Frankenstein", "IT", "The Conjuring", "The Shining"], answerIndex: 3, hint: "Written by Stephen King." },
    { id: "q6", text: "In this novel science has brought extinct animals back to life.", choices: ["The Lost Kingdom", "Jurassic World", "Jurassic Park", "Extinction"], answerIndex: 2, hint: "Don't move — its vision is based on movement." },
    { id: "q7", text: "In The Cat in the Hat who is the voice of responsibility?", choices: ["The Fish", "The Dog", "Sally", "The Cat"], answerIndex: 0, hint: "Wisdom over might." },
    { id: "q8", text: "Which dystopia relies on conditioning over fear?", choices: ["1984", "Brave New World", "The Handmaid's Tale", "We"], answerIndex: 1, hint: "Happiness engineered as policy." },
    { id: "q9", text: "Scout's perspective is central to:", choices: ["Wuthering Heights", "The Da Vinci Code", "And There Were None", "Gone Girl"], answerIndex: 2, hint: "The setting of the story is known as either Soldier Island or, based on the original nursery rhyme, Indian Island." },
    { id: "q10", text: "Who killed Romeo?", choices: ["The Capulets", "His father", "Juliet", "Himself"], answerIndex: 3, hint: "It wasn't The Capulets." },
    { id: "q11", text: "What does Newspeak aim to do?", choices: ["Expand thought", "Limit thought", "Improve literacy", "Promote art"], answerIndex: 1, hint: "Fewer words, fewer ideas." },
    { id: "q12", text: "Bilbo's growth is marked by:", choices: ["Inherited power", "External rescue", "Courageous choices", "Divine fate"], answerIndex: 2, hint: "Small acts, big effects." },
    { id: "q13", text: "The first Goosebumps book:", choices: ["The Mask", "Say Cheese and Die!", "Night of the Living Dummy", "Welcome to Dead House"], answerIndex: 3, hint: "Amanda and Josh Benson move with their parents to Dark Falls." },
    { id: "q14", text: "Frankenstein's creature longs for:", choices: ["Power", "Wealth", "Acceptance", "Revenge only"], answerIndex: 2, hint: "Loneliness drives the plot." },
    { id: "q15", text: "Hospitality is a recurring motif in:", choices: ["The Odyssey", "Beowulf", "Inferno", "Hamlet"], answerIndex: 0, hint: "Guest-friend rules matter." },
    { id: "q16", text: "Which novel features a group of boys stranded on an island?", choices: ["The Odyssey", "Island of the Blue Dolphins", "The Coral Island", "Lord of the Flies"], answerIndex: 3, hint: "In this one a simple seashell becomes the last, fragile symbol of authority." },
    { id: "q17", text: "A young boy discovers he's a wizard on his 11th birthday.", choices: ["Percy Jackson and the Lightning Thief", "Harry Potter and the Sorcerer's Stone", "The Hobbit", "Artemis Fowl: The Atlantis Complex"], answerIndex: 1, hint: "Written by J. K. Rowling." },
    { id: "q18", text: "Teenagers are forced to fight to the death in a televised competition.", choices: ["The Hunger Games", "Divergent", "The Maze Runner", "Legend"], answerIndex: 0, hint: "Katniss Everdeen is the heroine." },
    { id: "q19", text: "\"It is a truth universally acknowledged…\" opens this classic.", choices: ["Jane Eyre", "Sense and Sensibility", "Pride and Prejudice", "Wuthering Heights"], answerIndex: 2, hint: "Written by Jane Austen." },
    { id: "q20", text: "A teenage girl with cancer falls in love with Augustus Waters.", choices: ["Looking for Alaska", "Five Feet Apart", "Me Before You", "The Fault in Our Stars"], answerIndex: 3, hint: "The main characters support group meets in the literal heart of Jesus." },
    { id: "q21", text: "A boy raised by wolves in the jungle befriends Baloo and Bagheera.", choices: ["The Jungle Book", "Tarzan", "White Fang", "Call of the Wild"], answerIndex: 0, hint: "The main antagonist is a tiger." },
    { id: "q22", text: "A wardrobe leads children into a magical land.", choices: ["Peter Pan", "The Lion, the Witch and the Wardrobe", "Alice's Adventures in Wonderland", "The Wizard of Oz"], answerIndex: 1, hint: "The land they enter is ruled by a White Witch who makes it \"always winter, never Christmas.\"" },
    { id: "q23", text: "A captain is obsessed with hunting a white whale.", choices: ["Treasure Island", "The Old Man and the Sea", "Moby-Dick", "Twenty Thousand Leagues Under the Sea"], answerIndex: 2, hint: "The narrator famously begins with \"Call me Ishmael.\"" },
    { id: "q24", text: "In this society, people are divided into factions based on virtues.", choices: ["Legend", "Amulet: The Stonekeeper", "The Maze Runner", "Divergent"], answerIndex: 3, hint: "The main character is a woman." },
    { id: "q25", text: "A brilliant girl uses telekinesis to fight her cruel headmistress.", choices: ["Coraline", "Matilda", "James and the Giant Peach", "The Witches"], answerIndex: 1, hint: "This book also got a movie." },
    { id: "q26", text: "Four sisters—Meg, Jo, Beth, and Amy—grow up during the Civil War.", choices: ["A Tree Grows in Brooklyn", "Anne of Green Gables", "James and the Giant Peach", "Little Women"], answerIndex: 3, hint: "Jo dreams of being a writer and struggles with society's expectations." },
    { id: "q27", text: "A boy enters a virtual reality contest to win control of a tech empire.", choices: ["Ender's Game", "Minecraft", "Ready Player One", "Ready Player Two"], answerIndex: 2, hint: "The contest is based on 1980s pop culture." },
    { id: "q28", text: "A pig named Wilbur is saved by a clever spider.", choices: ["Charlotte's Web", "Stuart Little", "The Wind in the Willows", "Madam Web"], answerIndex: 0, hint: "The spider writes words in her web." },
    { id: "q29", text: "A boy wins a golden ticket to visit a magical chocolate factory.", choices: ["The BFG", "Charlie and the Chocolate Factory", "Charlie Brown and the Chocolate Factory", "The Lorax"], answerIndex: 1, hint: "This book has a movie too." },
    { id: "q30", text: "The most popular book of all time is: ", choices: ["The Lord of the Rings", "The Little Red Book", "The Qur'an", "The Bible"], answerIndex: 3, hint: "It has many authors." },
    { id: "q31", text: "Which one of these franchises started as a book? ", choices: ["Resident Evil", "Tomb Raider", "Halo", "The Witcher"], answerIndex: 3, hint: "The hero is more likely to consult a bestiary than a computer." },
    { id: "q32", text: "Which one of these is not a real book? ", choices: ["Cooking with Poo", "Training Unicorns to Tap Dance", "Do Penguins Have Knees?", "How to Traumatize Your Children"], answerIndex: 1, hint: "Cooking With Poo is a real book and it was written by Bangkok chef Saiyuud Diwong, whose nickname is Poo (Thai for 'crab')" },
    { id: "q33", text: "Which  book is about a boy who was born with facial differences and the challenges he faces after switching from being homeschooled to going to public school? ", choices: ["Franklin Goes to School", "Diary of a Wimpy Kid", "Wonder", "Thirteen Reasons Why"], answerIndex: 2, hint: "The main character isn't an animal." }
  ]
};
