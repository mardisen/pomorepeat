import type { Component, JSX } from 'solid-js';

interface Props {
  callback?(checked: boolean): void,
  checked: boolean,
  text?: string;
}

export const Switch: Component<Props> = (props: Props) => {
  const onChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    if (props.callback) props.callback(e.currentTarget.checked);
  };

  return <div class='flex flex-row items-center gap-3'>
    <label class='relative inline-block h-5 w-9 '>
      <div
        class='bg-white rounded-full h-5 w-9 flex flex-row items-center cursor-pointer absolute transition-colors'
        classList={{ ['bg-primary-700']: props.checked }}
      >
        <div
          class='bg-zinc-200 rounded-full h-4 w-4 m-1 transition-all'
          classList={{ ['translate-x-3']: props.checked }}></div>
      </div>
      <input
        type='checkbox'
        onChange={onChange}
        checked={props.checked}
        class='w-0 h-0 opacity-0'></input>
    </label>
    <div class='text-primary-700 text-center'>{props.text}</div>
  </div>;
};
