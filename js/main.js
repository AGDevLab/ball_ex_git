'use strict'
var ballSize = 100
var switchSelector

function onBallClick(elBtnBall, maxDiameter) {
  var maxDiameter = 0
  var randSizeBall = getRandomInt(20, 61)
  var randBallColor = getRandomColor()
  // console.log(elBtnBall.getAttribute('data-id'))
  switchSelector = elBtnBall.getAttribute('data-id')
  // console.log(switchSelector)

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
      var elBall1 = document.querySelector('.ball1')
      elBall1.style.backgroundColor = getRandomColor()
      elBall1.style.width = ballSize + getRandomInt(20, 61) + 'px'
      elBall1.style.height = ballSize + getRandomInt(20, 61) + 'px'
      var elBall2 = document.querySelector('.ball2')
      elBall2.style.backgroundColor = getRandomColor()
      elBall2.style.width = ballSize + getRandomInt(20, 61) + 'px'
      elBall2.style.height = ballSize + getRandomInt(20, 61) + 'px'
      break
    case 'ball4':
      console.log('ball4')
      break
  }

  ballSize < maxDiameter ? (ballSize += randSizeBall) : (ballSize = 100)
  elBtnBall.style.width = ballSize + 'px'
  elBtnBall.style.height = ballSize + 'px'
  elBtnBall.style.transition = '1s'
  elBtnBall.style.backgroundColor = randBallColor
  elBtnBall.innerText = ballSize
}
