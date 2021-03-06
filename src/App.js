import { useState } from 'react';
import themesScss from './theme-scss';
import themesEmotion from './theme-emotion';

const themes = [
    ['Basic SCSS', themesScss.basic],
    ['Red SCSS', themesScss.red],
    ['Basic Emotion', themesEmotion.basic],
    ['Red Emotion Broken', themesEmotion.red],
    ['Red Emotion Tricked', themesEmotion.redTrick],
];

function App() {
  const [selectedTheme, setTheme] = useState(themesScss.basic);

  return (
    <div className={selectedTheme.app}>
      <p>Select theme:</p>
      {
        themes.map(([name, theme]) => (
          <button
            key={name}
            onClick={() => setTheme(theme)}
            className={selectedTheme === theme ? selectedTheme.buttonSelected : selectedTheme.button}
          >
            {name}
          </button>
        ))
      }
      <p>Red Emotion style does not override background color when screen > 768px</p>
      <p><a href="https://github.com/bukowskiadam/scss-to-emotion">github</a></p>
    </div>
  );
}

export default App;
