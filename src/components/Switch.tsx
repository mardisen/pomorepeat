import type { Component, JSX } from 'solid-js';

interface Props {
  callback?(checked: boolean): void,
  checked: boolean;
}

export const Switch: Component<Props> = (props: Props) => {
  const onChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    console.info(e.currentTarget.checked);

    if (props.callback) props.callback(e.currentTarget.checked);
  };
  
  return <input type='checkbox' onChange={onChange} checked={props.checked}></input>;
};
