'use strict';

const oneSecond = () => 1000
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);


// date 객체를 받아서 시, 분, 초가 들어있는 24시간제 시각을 반환하자.
const abstractClockTime = date => ({
  hours: date.getHours(),
  minute: date.getMinutes(),
  seconds: date.getSeconds()
});

// 24시간제를 받아서 상용시 시각으로 변환하자.
const civilianHours = clockTime => ({
  ...clockTime,
  hours: (clockTime.hours > 12) ?
    clockTime.hours - 12 :
    clockTime.hours
});

// 24시간제 시각을 받아서 am pm을 붙여주자.
const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

const display = target => time => target(time);

const formatClock = format =>
  time =>
    format.replace("hh", time.hours)
      .replace("mm", time.minute)
      .replace("ss", time.seconds)
      .replace("tt", time.ampm)

const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: (clockTime[key < 10]) ?
    "0" + clockTime[key] :
    clockTime[key]

});

const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )

const convertToCivilianTime = clockTime =>
  compose(
    appendAMPM,
    civilianHours
  )(clockTime)

const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds"),
  )(civilianTime)


const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      abstractClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  )

startTicking();