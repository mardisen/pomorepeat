import { Component, JSX } from "solid-js";

type InputProps = {
    onClick?: JSX.EventHandler<HTMLInputElement, MouseEvent>;
    onKeyPress?: JSX.EventHandler<HTMLInputElement, KeyboardEvent>;
    onChange?: JSX.EventHandler<HTMLInputElement, InputEvent>;
};

export const Input: Component<InputProps> = (props: InputProps) =>
(<input
    type="text"
    onClick={props.onClick}
    onKeyPress={props.onKeyPress}
    onChange={props.onChange}
    class='bg-transparent text-primary-600 outline-none focus:border-b-primary-700 border-b-2 my-4 w-10 px-2 py-1 transition-colors' />
);