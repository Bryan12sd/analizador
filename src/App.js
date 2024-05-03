import React, { useState } from "react";

function LexicalAnalyzer() {
  const [inputText, setInputText] = useState("");
  const [wordList, setWordList] = useState([]);

  const analyzeInput = () => {
    // Divide el texto de entrada en palabras
    const words = inputText.split(/\s+/);

    // Crea una lista de palabras y sus tipos
    const analyzedWords = words.map((word, index) => ({
      id: index,
      lexeme: word,
      type: getWordType(word),
    }));

    // Actualiza el estado con la lista de palabras analizadas
    setWordList(analyzedWords);
  };

  // Función para obtener el tipo de una palabra
  const getWordType = (word) => {
    // Expresiones regulares para identificar palabras y números
    const identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    const numberRegex = /^[0-9]+$/;

    if (identifierRegex.test(word)) {
      return "Identificador";
    } else if (numberRegex.test(word)) {
      return "Número";
    } else {
      return "Otro";
    }
  };

  return (
    <div className="container">
      <div className="subContainer">
        <h1 className="textH1">Analizador Léxico</h1>
        <textarea
          className="textArea"
          rows={1}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Coloque su carácter"
        />
        <button onClick={analyzeInput}>Analizar</button>
        <div>
          <h2 className="textH1">Palabras ingresadas:</h2>
          <ul>
            {wordList.map((word) => (
              <li key={word.id}>
                {word.lexeme} - Tipo: {word.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LexicalAnalyzer;
