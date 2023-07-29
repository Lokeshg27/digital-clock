function Clock() {

    function timeWatch() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let second = date.getSeconds();
        let watchID = document.getElementById('watch');
        let clockBg = document.querySelector('.clock');
        let amPm;

        if (hours === 12) {
            amPm = "PM";
        }

        if (hours === 0) {
            hours = 12;
            amPm = "AM";
        }

        if (hours >= 19) {
            clockBg.style.background = 'gray';
        }

        if (hours > 12) {
            hours = hours - 12;
            amPm = "PM";
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        else {
            hours
        }

        if (mins < 10) {
            mins = '0' + mins;
        }

        else {
            mins
        }

        if (second < 10) {
            second = '0' + second;
        }

        else {
            second
        }

        let time = `${hours} : ${mins} : ${second} ${amPm}`;
        watchID.innerHTML = time;
        setTimeout(() => { timeWatch() }, 1000);
    }
    timeWatch()
}

const clock = new Clock();