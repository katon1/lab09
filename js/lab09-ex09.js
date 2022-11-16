/* code goes here */

document.addEventListener("DOMContentLoaded", function() { 
    // when key is pressed play a sound if correct key
    document.addEventListener('keydown', playSound); 
    
    function playSound(e) { 
        // first determine the key that was pressed from event
    const keyPressed = e.key; 
    // select the <audio> element for the pressed key 
    const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
    // if key doesn't have <audio> element then exit
    if (!audio) return; 
        // select the <div> element corresponding to the pressed key 
    const div = document.querySelector( `div.key[data-key="${keyPressed}"]`);

    // add glowing box class to it
    div.classList.add('playing');

    // initially let's just play the sound for data-key=g
    // const audio = document.querySelector( 
    // `audio[data-key="g"]`); 
    // since audio sound takes some time to play, we can reset 
    // the current time to zero so that it is more responsive to 
    // multiple fast key presses
    audio.currentTime = 0; 
    // now play sound at beginning
    audio.play(); 
    window.addEventListener("DOMContentLoaded", function() { 
    // when key is pressed play a sound if correct key
    document.addEventListener('keydown', playSound);
    
    // to remove the box around the div for the key, we will listen 
    // for any transition-end event (in this case, used by the .key 
    // class elements) 
    const keys = document.querySelectorAll('.key'); 
    for (let key of keys) { 
    key.addEventListener('transitionend', removeTransition) 
    } 
    
    function removeTransition(e) { 
    // skip if not a transform transition
    if (e.propertyName !== 'transform') return; 
    // right transition so remove the .playing class from .key
    this.classList.remove('playing'); 
    }});
    } 
   }); 

   