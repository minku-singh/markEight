import "./styles.css";
import { useState } from "react";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState("");

  // object
  const emojis = {
    "🍋": "lemon",
    "🍕": "Pizza",
    "🍔": "Burger",
    "🥪": "Sandwich",
    "🍨": "Ice-cream",
    "🍩": "Dough-nut",
    "🥭": "Mango",
    "🥕": "Carrot",
    "🍟": "French Fries",
    "🌭": "Hot Dog",
    "🍣": "Sushi",
  };

  // array
  const emojisArr = Object.keys(emojis);

  function handleChange(e) {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);
    const newEmojiMeaning = emojis[inputEmoji];
    if (newEmojiMeaning === undefined) {
      setEmojiMeaning("Failure to recognize this emoji!!");
    } else {
      setEmojiMeaning(newEmojiMeaning);
    }
  }

  function handleClick(emoji) {
    setEmoji(emoji);
    const newEmojiMeaning = emojis[emoji];
    setEmojiMeaning(newEmojiMeaning);
  }

  return (
    <div className="App">
      <h2>Emoji Interpreter</h2>
      <section>
        <input
          type="text"
          placeholder="Search Your Emoji..."
          onChange={(e) => handleChange(e)}
          style={{ width: "70vw", padding: "10px" }}
        />
        <p style={{ fontSize: "3rem" }}>{emoji}</p>
        <h2>{emojiMeaning}</h2>
      </section>

      <section>
        {emojisArr.map((emoji) => (
          <span
            onClick={() => handleClick(emoji)}
            key={emoji}
            style={{ margin: "0.5rem", fontSize: "3rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        ))}
      </section>
    </div>
  );
}
