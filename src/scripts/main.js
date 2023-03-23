AOS.init();

const birthday = new Date("nov 23, 2023 06:00:00");
const timeStempBirthday = birthday.getTime();

const timeHours = setInterval(function () {
    const currentTime = new Date();
    const timeStempCurrent = currentTime.getTime();

    const timeBirthday = timeStempBirthday - timeStempCurrent;

    const dayMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;
    const secMs = 1000;

    const daysToEvent = Math.floor(timeBirthday / dayMs);
    const hoursToEvent = Math.floor((timeBirthday % dayMs) / hoursMs);
    const minToEvent = Math.floor((timeBirthday % hoursMs) / minMs);
    const secToEvent = Math.floor((timeBirthday % minMs) / secMs);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minToEvent}m ${secToEvent}s`;
    if (timeBirthday < 0) {
        clearInterval(timeHours);
        document.getElementById("congratulations").innerHTML = `Chegou o grande dia ...Te espero hoje para comemorar com você por mais um ano de vida. Abraços e até lá!`;
    }
}, 1000);