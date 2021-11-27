const jumpy = document.querySelector(".character");
const obstacle = document.querySelector(".obstacle");

let bottom = 0
let gravity = 0.9
let isJumping = false

// function jump 
function jump() {
  if (isJumping) return
  let timerUpId = setInterval(function () {

    if (bottom > 100) {
      clearInterval(timerUpId)
      let timerDownId = setInterval(function () {
        // jump down

        if (bottom < 0) {
          clearInterval(timerDownId)
          isJumping = false
          jumpy.classList.remove('character-jumping')
          jumpy.classList.add('character')
        } 

        bottom -= 5
        bottom = bottom * gravity
        jumpy.style.bottom = bottom + 'px'
      }, 25)

    }

    // jump up

    isJumping = true
    bottom += 20
    bottom = bottom * gravity
    console.log(bottom)
    jumpy.style.bottom = bottom + 'px'
  }, 25)
}

// let isAlive = setInterval(function () {
//   // get current jumpy Y position
//   let jumpyTop = parseInt(window.getComputedStyle(jumpy).getPropertyValue("top"));
//   // get current obstacle X position 
//   let obstacleLeft = parseInt(
//     window.getComputedStyle(obstacle).getPropertyValue("left")
//   );
 
//   // detect collision
//   if (obstacleLeft < 1000 && obstacleLeft > 0 && jumpyTop >= 2000) {
//     // collision
//     alert("Game Over!")
//   } 
// }, 10);


// jump when press spacebar

function control(event) {
  if (event.keyCode === 32) {
    jump()

    jumpy.classList.remove('character')
    jumpy.classList.add('character-jumping')


    // setTimeout(function () {
    //   jumpy.classList.remove('character-jumping')
    //   jumpy.classList.add('character')
    // }, 450);

  }
}

document.addEventListener('keydown', control)


// prova git 
// prova git_2

