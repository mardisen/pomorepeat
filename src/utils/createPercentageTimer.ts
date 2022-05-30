import { createDate, createTimeDifferenceFromNow } from "@solid-primitives/date";
import { Accessor, createEffect, createSignal } from "solid-js";

export const createPercentageTimer = (interval: number): [Accessor<number>] => {
    const intervalMilliseconds = interval * 60 * 1000;
    const [to] = createDate(Date.now() + intervalMilliseconds);
    const [diff] = createTimeDifferenceFromNow(to, 1000);
    const [percentage, setPercentage] = createSignal(0);

    createEffect(() => {
        setPercentage((intervalMilliseconds - diff()) / intervalMilliseconds);
    });

    return [percentage];
};