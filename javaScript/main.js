const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', throttle(clickOrder, 5000));
}

const clickOrder = () => console.log('Order', new Date().getTime());

document.addEventListener('DOMContentLoaded', initApp);

const throttle = (fn, delay) => {
    delay = delay || 0;
    let last = 0;
    return () => {
        const now = new Date().getTime();
        let a = now - last;
        if (now - last < delay) {
            return;
        }
        last = now;
        fn();
    }
}

const debounce = (fn, delay) => {
    delay = delay || 0;
    let timerId;
    console.log('timeid load:::', timerId);
    return () => {
        console.log(`timerId previous at::: ${timerId}`);
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        }

        timerId = setTimeout(() => {
            fn();
        }, delay);
    }
}


