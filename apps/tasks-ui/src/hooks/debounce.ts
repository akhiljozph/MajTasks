export function useDebounce<TThis, TArgs extends unknown[]>(
    func: (this: TThis, ...args: TArgs) => void,
    delay: number,
): (this: TThis, ...args: TArgs) => void {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return function (this: TThis, ...args: TArgs): void {
        if (timer !== undefined) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}