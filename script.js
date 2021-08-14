const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 10000;
const breatheTime = (totalTime / 10) * 3;
const holdTime = (totalTime) / 15;

function breathAnimation(){
   text.innerText = 'Breathe In!';
   container.className = 'container grow';

   setTimeout(() => {
      text.innerText = 'Hold';

      setTimeout(() => {
          text.innerText = 'Breathe Out!';
          container.className = 'container shrink';
          
      },holdTime);
   },breatheTime);
}

breathAnimation();

setInterval(() => {
    breathAnimation();
}, totalTime);