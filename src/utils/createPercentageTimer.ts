import { createDate, createTimeDifferenceFromNow } from "@solid-primitives/date";
import moment from "moment";
import { Accessor, createEffect, createSignal } from "solid-js";

type TimerData = {
    percentage: Accessor<number>;
    diff: Accessor<number>;
    diffString: Accessor<string>;
};

const addZeroIfLessThanTen = (num: number) => num < 10 ? "0" + num : num;

export const createPercentageTimer = (interval: number): TimerData => {
    const intervalMilliseconds = interval * 60 * 1000;
    const [to] = createDate(Date.now() + intervalMilliseconds);
    const [diff] = createTimeDifferenceFromNow(to, 1000);
    const [percentage, setPercentage] = createSignal(0);
    const [diffString, setDiffString] = createSignal<string>();

    createEffect(() => {
        const diffNow = diff();
        const duration = moment.duration(diffNow);

        const minutes = Math.trunc(duration.asMinutes());
        const seconds = duration.seconds();

        setDiffString(`${addZeroIfLessThanTen(minutes)}:${addZeroIfLessThanTen(seconds)}`);

        setPercentage((intervalMilliseconds - diffNow) / intervalMilliseconds);
    });

    return { percentage, diff, diffString };
};