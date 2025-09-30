import "../App.css";

const Flashcard = (props) => {
  return (
    <div
      className={`flashcard ${props.flipped ? "flipped" : ""}`}
      onClick={props.flipFunction}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">{props.front}</div>
        <div className="flashcard-back">{props.back}</div>
      </div>
    </div>
  );
};

export default Flashcard;
