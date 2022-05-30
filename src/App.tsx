import { Component } from 'solid-js';

import { Switch } from './components/Switch';
import { Timer } from './components/Timer';
import { createDarkMode } from './utils/createDarkMode';

const App: Component = () => {
  const { isDark, setDark } = createDarkMode();

  return (<div class='dark:bg-zinc-800 bg-zinc-200 h-screen transition-colors flex flex-col items-center'>
    <Timer interval={1}></Timer>
    <Switch checked={isDark()} callback={setDark} text='Toggle dark mode'></Switch>
  </div>

  );
};

export default App;
