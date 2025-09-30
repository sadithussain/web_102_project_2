import "./App.css";
import Flashcard from "./components/Flashcard";
import { useState } from "react";

const flashcards = [
  { front: "Start!", back: "Press the next arrow to start the flashcards :)" },
  { front: `console.log("Hello World");`, back: "JavaScript" },
  { front: `print("Hello World")`, back: "Python" },
  { front: `System.out.println("Hello World");`, back: "Java" },
  { front: `echo "Hello World";`, back: "PHP" },
  { front: `puts "Hello World"`, back: "Ruby" },
  { front: `printf("Hello World\\n");`, back: "C" },
  { front: `Console.WriteLine("Hello World");`, back: "C#" },
  { front: `fmt.Println("Hello World")`, back: "Go" },
  { front: `std::cout << "Hello World" << std::endl;`, back: "C++" },
  { front: `println!("Hello World");`, back: "Rust" },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextFlashcard = () => {
    let randomIndex = Math.floor(Math.random() * (flashcards.length - 1)) + 1;
    setIndex(randomIndex);
    setFlipped(false);
  };

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="content-container">
      <h1>Guess the Language</h1>
      <h3>
        How many coding languages do you know? Invite your friends and see who
        gets the most right!
      </h3>
      <p>Number of Cards: {flashcards.length - 1}</p>
      <Flashcard
        front={flashcards[index].front}
        back={flashcards[index].back}
        flipped={flipped}
        flipFunction={flip}
      />
      <button className="flashcard-button" onClick={nextFlashcard}>
        →
      </button>
    </div>
  );
};

export default App;
