const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', debounce(clickOrder, 2000));
}

const clickOrder = () => console.log('Order');

document.addEventListener('DOMContentLoaded', initApp);

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


