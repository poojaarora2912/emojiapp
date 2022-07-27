import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "😊": "Happy",
  "😭": "Sad",
  "😠": "Angry",
  "😱": "Scared",
  "🤢": "Disgust",
  "😉": "Wink",
  "😋": "Hungry",
  "😏": "Smirk",
  "😌": "Relieved",
  "🤧": "Sneeze"
};

var emojisKnown = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoji meaning not available";
    }

    setMeaning(meaning);
  }
  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={inputHandler} />
      <div> {meaning} </div>
      <div>
        {emojisKnown.map(function (emoji) {
          return (
            <span
              onClick={() => emojiclickHandler(emoji)}
              style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
