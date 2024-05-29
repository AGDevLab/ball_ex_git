'use strict'
var ballSize = 100

function onBallClick() {
  var elBall = document.querySelector('.ball')
  var randSizeBall = getRandomInt(20, 61)
  var randBallColor = getRandomColor()
  // console.log(randSizeBall)

  ballSize < 400 ? (ballSize += randSizeBall) : (ballSize = 100)
  elBall.style.width = ballSize + 'px'
  elBall.style.height = ballSize + 'px'
  elBall.style.transition = '1s'
  elBall.style.backgroundColor = randBallColor
  elBall.innerText = ballSize
}
