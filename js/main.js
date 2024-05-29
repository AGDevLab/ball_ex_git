'use strict'
var ballSize = 100
var switchSelector

function onBallClick(elBtnBall, maxDiameter) {
  var maxDiameter = 0
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
      console.log('ball3')
      break
  }

  // elBtnBall.getAttribute('data-id') === 'ball1'
  //   ? (maxDiameter = 300)
  //   : (maxDiameter = 400)
  var randSizeBall = getRandomInt(20, 61)
  var randBallColor = getRandomColor()

  ballSize < maxDiameter ? (ballSize += randSizeBall) : (ballSize = 100)
  elBtnBall.style.width = ballSize + 'px'
  elBtnBall.style.height = ballSize + 'px'
  elBtnBall.style.transition = '1s'
  elBtnBall.style.backgroundColor = randBallColor
  elBtnBall.innerText = ballSize
}
