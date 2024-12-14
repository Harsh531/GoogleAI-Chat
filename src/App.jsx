import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading...");

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAdxE2fvcFMFje8NBajx2GlBnPtggpNDYE",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      },
    });

    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  return (
    <div className="container">
      <h1>Chat AI</h1>
      <textarea
        cols={28}
        rows={10}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre style={{wordWrap : "pre-line"}}>{answer}</pre>
    </div>
  );
}

export default App;
