const numbers = document.querySelectorAll('.stats .number')
const statsSection = document.getElementById("stats")
let started = false

const startCount = (ele) => {
    const goal = ele.dataset.goal
    
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}

// filling the width while scrolling
const skillsSection = document.getElementById('our-skills')
const widthSpans = document.querySelectorAll('.skills .the-progress span')

window.onscroll = () => {
    if (window.scrollY >= skillsSection.offsetTop - 50) {
        widthSpans.forEach(span => span.style.width = span.dataset.width)
    }
    if (window.scrollY >= statsSection.offsetTop - 100) {
        if (!started) {
            numbers.forEach((ele) =>  startCount(ele))
        }
        started = true
    }
}

// countdown timer
let countDownDate = new Date("Dec 31 2022 23:59:59").getTime()

const counter = setInterval(() => {
    const currentDate = new Date().getTime();
    let dateDifference = countDownDate - currentDate
    let days = Math.floor(dateDifference / (1000 * 60 *60 *24))
    document.querySelector('.unit .days').textContent = days > 9 ? days : `0${days}`

    let hours = Math.floor(dateDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    document.querySelector(".unit .hours").textContent = hours > 9 ? hours : `0${hours}`

    let minutes = Math.floor(dateDifference % (1000 * 60 * 60) / (1000 * 60))
    document.querySelector(".unit .minutes").textContent = minutes > 9 ? minutes : `0${minutes}`

    let seconds = Math.floor(dateDifference % (1000 * 60) / (1000))
    document.querySelector(".unit .seconds").textContent = seconds > 9 ? seconds : `0${seconds}`

    if(dateDifference < 0) {
        clearInterval(counter)
    }
}, 1000) 