import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [input, setInput] = useState('');
  const allColors = [
    'blue',
    'green',
    'red',
    'yellow',
    'purple',
    'gray',
    'pink',
    'violet',
  ];

  return (
    <div>
      <h1 className="heading">🚀 Color Searcher</h1>
      <input
        className="input_box"
        type="text"
        placeholder="Search any color"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1 className="heading">{input}</h1>

      <div className="colors">
        {allColors
          .filter((color) => color.includes(input.toLowerCase()))
          .map((color) => {
            return (
              <>
                <div
                  className="each_color"
                  style={{ backgroundColor: color }}
                  key={Math.random()}
                >
                  <h1>{color}</h1>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
