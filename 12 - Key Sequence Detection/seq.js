const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!')
  }
})


//Starts at the end - goes -7

//Pressed
//["w", "e", "s", "b", "o", "s", "i"]

//Spliced Press
//["e", "s", "b", "o", "s", "i"]