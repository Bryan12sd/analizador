import React, { useState } from "react";

function LexicalAnalyzer() {
  // Definición de estados utilizando el hook useState
  const [inputText, setInputText] = useState(""); // Estado para almacenar el texto de entrada
  const [wordList, setWordList] = useState([]); // Estado para almacenar la lista de palabras analizadas

  // Función para analizar el texto de entrada y dividirlo en palabras
  const analyzeInput = () => {
    // Divide el texto de entrada en palabras utilizando expresiones regulares
    const words = inputText.split(/\s+/);

    // Crea una lista de objetos con cada palabra y su tipo
    const analyzedWords = words.map((word, index) => ({
      id: index,
      lexeme: word,
      type: getWordType(word), // Llama a la función getWordType para obtener el tipo de cada palabra
    }));

    // Actualiza el estado con la lista de palabras analizadas
    setWordList(analyzedWords);
  };

  // Función para obtener el tipo de una palabra (Identificador, Número u Otro)
  const getWordType = (word) => {
    // Expresiones regulares para identificar palabras y números
    const identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    const numberRegex = /^[0-9]+$/;

    // Comprueba si la palabra coincide con las expresiones regulares y determina su tipo
    if (identifierRegex.test(word)) {
      return "Identificador"; // Si la palabra es un identificador (comienza con letra o _ y luego letras, números o _)
    } else if (numberRegex.test(word)) {
      return "Número"; // Si la palabra es un número (solo contiene dígitos del 0 al 9)
    } else {
      return "Otro"; // Si la palabra no coincide con ninguno de los patrones anteriores, se considera "Otro"
    }
  };

  // Componente de React que devuelve la interfaz de usuario
  return (
    <div className="container">
      <div className="subContainer">
        <h1 className="textH1">Analizador Léxico</h1>
        {/* Textarea para que el usuario ingrese el texto */}
        <textarea
          className="textArea"
          rows={1}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Actualiza el estado inputText cuando el usuario escribe en el textarea
          placeholder="Coloque su carácter"
        />
        {/* Botón para iniciar el análisis del texto */}
        <button onClick={analyzeInput}>Analizar</button>
        <div>
          <h2 className="textH1">Palabras ingresadas:</h2>
          {/* Lista que muestra las palabras ingresadas y sus tipos */}
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

// Exporta el componente LexicalAnalyzer para que pueda ser utilizado en otros archivos
export default LexicalAnalyzer;
