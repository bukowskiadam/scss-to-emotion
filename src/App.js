import { useState } from 'react';
import themes from './theme-scss';

function App() {
  const [theme, setTheme] = useState(themes.red);

  return (
    <div className={theme.app}>
      Select theme:
      <button onClick={() => setTheme(themes.basic)}>Basic</button>
      <button onClick={() => setTheme(themes.red)}>Red</button>
    </div>
  );
}

export default App;
