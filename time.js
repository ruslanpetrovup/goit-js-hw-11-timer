const dayEL = document.querySelector('span[data-value="days"]');
const hourEL = document.querySelector('span[data-value="hours"]');
const minEL = document.querySelector('span[data-value="mins"]');
const secEL = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector,
            this.targetDate = targetDate
    }
}

const timer = new CountdownTimer('#timer-1', new Date('Jul 17, 2022'));

setInterval(() => {
    const time = Number(timer.targetDate) - new Date;
    // День
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    // Часов
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Минут
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    // Секунд
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    dayEL.textContent = days;
    hourEL.textContent = hours;
    minEL.textContent = mins;
    secEL.textContent = secs;
}, 1000)