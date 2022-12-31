const second = document.querySelector('.s')
const minute = document.querySelector('.m')
const soat = document.querySelector('.h')
const tabsItem = document.querySelectorAll('.tabsItem');
const hours = document.querySelector('.hours'); 
const minutes = document.querySelector('.minutes'); 
const tabsContentItem = document.querySelectorAll('.tabsContentItem')
const stopWatchBtn = document.querySelector('.stopwatch__btn')
const stopwatchSeconds = document.querySelector('.stopwatch__seconds')
const stopwatchMinutes = document.querySelector('.stopwatch__minutes')
const stopwatchHours = document.querySelector('.stopwatch__hours')
let stopTimeOut = null
const data = new Date
let sec = data.getSeconds() * (360 / 60)
second.style.transform = `rotate(${sec}deg)`
second.style.transition = '1s linear'
let secs = data.getSeconds() * (360 / 60)

function watch() {
  const data = new Date
  secs += (360/60)
  let min = data.getMinutes() * (360 / 60)
  let hour = data.getHours() * (360 / 24)
  
  second.style.transform = `rotate(${secs}deg)`
  second.style.transition = '1s linear'
  minute.style.transform = `rotate(${min}deg)`
  soat.style.transform = `rotate(${hour}deg)`
  
  minutes.innerHTML = data.getSeconds() < 9 ? '0' + data.getSeconds() : data.getSeconds()
  hours.innerHTML = data.getMinutes() < 9 ? "0" + data.getMinutes() : data.getMinutes()
  
  setTimeout(() => watch(), 1000);
}
watch()

tabsItem.forEach((el,i)=>{
  el.addEventListener('click', function(e){
    tabsItem.forEach((el,i)=>{
      el.classList.remove('active')
      tabsContentItem[i].classList.remove('active')
    })
    el.classList.add('active')
    tabsContentItem[i].classList.add('active')
  })
})

stopWatchBtn.addEventListener('click', (e)=>{
  if (stopWatchBtn.innerHTML == 'start') {
    secondamer()
    stopWatchBtn.innerHTML = 'stop'
  } else if(stopWatchBtn.innerHTML === 'stop'){
    clearTimeout(stopTimeOut)
    stopWatchBtn.innerHTML = 'clear'
  } else if(stopWatchBtn.innerHTML === 'clear'){
    stopwatchSeconds.innerHTML = 0
    stopwatchMinutes.innerHTML = 0
    stopwatchHours.innerHTML = 0
    stopWatchBtn.innerHTML = 'start'
  }
})

function secondamer(){
  if (stopwatchSeconds.innerHTML < 59) {
    stopwatchSeconds.innerHTML++
  } else{
    stopwatchSeconds.innerHTML = 0
    if (stopwatchMinutes.innerHTML < 59) {
      stopwatchMinutes.innerHTML++
    }else {
      stopwatchMinutes.innerHTML = 0
      if (stopwatchHours.innerHTML<23) {
        stopwatchHours.innerHTML++
      }else{
        stopwatchHours.innerHTML=0
      }
    }
  }
  
  
  stopTimeOut = setTimeout(() => {
    secondamer()
  }, 1000);
}