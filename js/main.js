'use strict'
var ballSize = 100

function onBallClick(elBtnBall, maxDiameter) {
  var maxDiameter = 0
  console.log(elBtnBall.getAttribute('data-id'))

  elBtnBall.getAttribute('data-id') === 'ball1'
    ? (maxDiameter = 300)
    : (maxDiameter = 400)
  var randSizeBall = getRandomInt(20, 61)
  var randBallColor = getRandomColor()

  ballSize < maxDiameter ? (ballSize += randSizeBall) : (ballSize = 100)
  elBtnBall.style.width = ballSize + 'px'
  elBtnBall.style.height = ballSize + 'px'
  elBtnBall.style.transition = '1s'
  elBtnBall.style.backgroundColor = randBallColor
  elBtnBall.innerText = ballSize
}
