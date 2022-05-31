import { createDate, createDateNow, createTimeDifferenceFromNow } from '@solid-primitives/date';
import { Component, createSignal } from 'solid-js';
import { createPercentageTimer } from '../utils/createPercentageTimer';

type Props = {
  interval: number;
};

export const Timer: Component<Props> = (props: Props) => {
  const [percentage] = createPercentageTimer(props.interval);

  return <>
    <div class='w-9/12 h-4 relative'>
      <div class='z-0 bg-dblack dark:bg-dwhite w-full h-full absolute rounded'></div>
      <div class='z-10 bg-primary-600 h-full absolute rounded transition-all'
        style={{ width: percentage() * 100 + '%' }}></div>
    </div>
    <div>
      
    </div>
  </>;
};
