import { Component } from 'solid-js';
import { createPercentageTimer } from '../utils/createPercentageTimer';
import { Input } from './Input';

type Props = {
  interval: number;
};

export const Timer: Component<Props> = (props: Props) => {
  const { percentage, diffString } = createPercentageTimer(props.interval);

  return <>
    <div class='w-9/12 h-4 relative drop-shadow-xl'>
      <div class='z-0 bg-dblack dark:bg-dwhite w-full h-full absolute rounded'></div>
      <div class='z-10 bg-primary-600 h-full absolute rounded transition-all'
        style={{ width: percentage() * 100 + '%' }}></div>
    </div>
    <div class='text-primary-600 text-center'>
      {diffString()}
    </div>
    <Input />
  </>;
};
