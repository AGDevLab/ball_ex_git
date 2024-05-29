'use strict'
var ballSize = 100
var switchSelector
var elBall1 = document.querySelector('.ball1')
var elBall2 = document.querySelector('.ball2')

function onBallClick(elBtnBall, maxDiameter) {
  var maxDiameter = 0
  var minDiamater = 100
  var randSizeBall = getRandomInt(20, 61)
  var randBallColor = getRandomColor()

  switchSelector = elBtnBall.getAttribute('data-id')

  switch (switchSelector) {
    case 'ball1':
      console.log('ball1')
      maxDiameter = 300
      break
    case 'ball2':
      console.log('ball2')
      maxDiameter = 400
      break
    case 'ball3':
      elBall1.style.backgroundColor = getRandomColor()
      elBall1.style.width = ballSize + getRandomInt(20, 61) + 'px'
      elBall1.style.height = ballSize + getRandomInt(20, 61) + 'px'
      elBall1.style.transition = '1s'
      elBall2.style.backgroundColor = getRandomColor()
      elBall2.style.width = ballSize + getRandomInt(20, 61) + 'px'
      elBall2.style.height = ballSize + getRandomInt(20, 61) + 'px'
      elBall2.style.transition = '1s'
      break
    case 'ball4':
      console.log('ball4')

      elBall1.style.width = ballSize - getRandomInt(20, 61) + 'px'
      elBall1.style.height = ballSize - getRandomInt(20, 61) + 'px'
      elBall1.innerText = ballSize
      elBall1.style.transition = '1s'

      elBall2.style.width = ballSize - getRandomInt(20, 61) + 'px'
      elBall2.style.height = ballSize - getRandomInt(20, 61) + 'px'
      elBall2.innerText = ballSize
      elBall2.style.transition = '1s'
      break
    case 'ball5':
      var elBody = document.querySelector('body')
      elBody.style.backgroundColor = getRandomColor()
      break
  }

  ballSize < maxDiameter ? (ballSize += randSizeBall) : (ballSize = 100)
  elBtnBall.style.width = ballSize + 'px'
  elBtnBall.style.height = ballSize + 'px'
  elBtnBall.style.transition = '1s'
  elBtnBall.style.backgroundColor = randBallColor
  elBtnBall.innerText = ballSize
}
