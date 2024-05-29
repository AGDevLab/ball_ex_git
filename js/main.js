'use strict'
var ballSize = 100

function onBallClick(elBtnBall) {
  var elBall = elBtnBall
  // var elBall = elBtnBall.querySelector('.ball1')
  // var elBall = document.querySelector('.ball')
  var randSizeBall = getRandomInt(20, 61)
  var randBallColor = getRandomColor()

  ballSize < 400 ? (ballSize += randSizeBall) : (ballSize = 100)
  elBall.style.width = ballSize + 'px'
  elBall.style.height = ballSize + 'px'
  elBall.style.transition = '1s'
  elBall.style.backgroundColor = randBallColor
  elBall.innerText = ballSize
}
