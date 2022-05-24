import { Component } from 'solid-js';

import { Switch } from './components/Switch';
import { useDarkMode } from './utils/useDarkMode';

const App: Component = () => {
  const { isDark, setDark } = useDarkMode();

  return (<div class='dark:bg-zinc-800 bg-zinc-200 h-screen transition-colors'>
    <p class='text-4xl text-primary-700 text-center py-20'>Hello tailwind!</p>
    <Switch checked={isDark()} callback={setDark} text='Toggle dark mode'></Switch>
  </div>

  );
};

export default App;
