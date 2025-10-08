import "./App.css";
import Flashcard from "./components/Flashcard";
import { useState } from "react";

const initialFlashcards = [
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
  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [guess, setGuess] = useState("");
  const [guessStatus, setGuessStatus] = useState(null);

  const nextFlashcard = () => {
    setIndex(index + 1);
    setFlipped(false);
    setGuess("");
    setGuessStatus(null);
  };

  const previousFlashcard = () => {
    setIndex(index - 1);
    setFlipped(false);
    setGuess("");
    setGuessStatus(null);
  };

  const flip = () => {
    setFlipped(!flipped);
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === flashcards[index].back.toLowerCase()) {
      setCurrentStreak((previousStreak) => {
        if (previousStreak + 1 > longestStreak) {
          setLongestStreak(previousStreak + 1);
        }
        return previousStreak + 1;
      });
      setGuessStatus("correct");
    } else {
      setCurrentStreak(0);
      setGuessStatus("incorrect");
    }
  };

  const shuffleFlashCards = () => {
    const firstCard = flashcards[0];
    const shuffledCards = flashcards.slice(1);
    let currentIndex = shuffledCards.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
        shuffledCards[randomIndex],
        shuffledCards[currentIndex],
      ];
    }
    setFlashcards([firstCard, ...shuffledCards]);
  };

  return (
    <div className="content-container">
      <h1>Guess the Language</h1>
      <h3>
        How many coding languages do you know? Invite your friends and see who
        gets the most right!
      </h3>
      <p>Number of Cards: {flashcards.length - 1}</p>
      <p>
        Current Streak: {currentStreak}, Longest Streak: {longestStreak}
      </p>
      <Flashcard
        front={flashcards[index].front}
        back={flashcards[index].back}
        flipped={flipped}
        flipFunction={flip}
      />
      <div className="guess-section">
        <p>Guess the answer here:</p>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Place your answer here..."
          className={guessStatus ? `guess-input ${guessStatus}` : "guess-input"}
        />
        <button onClick={checkGuess}>Submit Guess</button>
      </div>
      <div>
        <button
          className="flashcard-button"
          onClick={previousFlashcard}
          disabled={index === 0}
        >
          ←
        </button>
        <button
          className="flashcard-button"
          onClick={nextFlashcard}
          disabled={index === flashcards.length - 1}
        >
          →
        </button>
        <button
          className="flashcard-button shuffle-button"
          onClick={shuffleFlashCards}
        >
          Shuffle Cards
        </button>
      </div>
    </div>
  );
};

export default App;
