const modal = document.getElementById('modal');
const pics = document.getElementsByClassName('pic');
const playBtn = document.getElementById('play');
const playSpan = document.getElementById('play-span');
const forms = document.getElementsByClassName('form');
const video = document.getElementById('video');

window.FontAwesomeConfig = {
  searchPseudoElements: true,
};
window.addEventListener('scroll', function() {
  parallaxId('hero', 0.5, '-80px', '- 1px');
  parallaxId('team', 0.3, '0px', '- 1px');
});

function parallaxId(targetID, koeficent, x, y) {
  const target = document.getElementById(targetID);

  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
    },
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };

  if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
    target.style.backgroundPosition = `${x} calc(${0 -
      (windowPosition.bottom - targetPosition.top) * koeficent}px ${y})`;
  }
}

modal.onclick = function() {
  modal.style.transform = 'scale(0)';
};
for (let i = 0; i < pics.length; i++) {
  pics[i].onclick = function() {
    modal.lastElementChild.src = pics[i].lastElementChild.src;
    modal.style.transform = 'scale(1)';
  };
}

playBtn.onclick = function() {
  video.style.transform = 'scale(1)';
};
playSpan.onclick = function() {
  video.style.transform = 'scale(1)';
};
video.firstElementChild.onclick = function(){
  video.style.transform = 'scale(0)';
  video.lastElementChild.pause();
}

for (let i = 0; i < forms.length; i++) {
  let inputs = forms[i].getElementsByTagName('input');
  for (let j = 0; j < inputs.length; j++) {
    addEventListener('focusin' && 'focusout', () => {
      if (inputs[j].value !== '') {
        inputs[j].className = 'filled';
      } else inputs[j].className = '';
    });
  }
}
