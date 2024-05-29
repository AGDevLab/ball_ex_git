'use strict'
var ballSize = 100

function onBallClick() {
  var elBall = document.querySelector('.ball')
  ballSize < 400 ? (ballSize += 50) : (ballSize = 100)
  elBall.style.width = ballSize + 'px'
  elBall.style.height = ballSize + 'px'
  elBall.style.transition = '1s'
  elBall.innerText = ballSize
  //   if (ballSize < 400) {
  //     ballSize += 50
  //     elBall.style.width = ballSize + 'px'
  //     elBall.style.height = ballSize + 'px'
  //     elBall.innerText = ballSize
  //   } else {
  //     ballSize = 100
  //     elBall.style.width = ballSize + 'px'
  //     elBall.style.height = ballSize + 'px'
  //     elBall.innerText = ballSize
  //   }
}
