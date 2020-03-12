window.addEventListener('scroll', function() {
  parallaxId('hero', 0.5, '-80px', '- 48vh');
});

window.FontAwesomeConfig = {
  searchPseudoElements: true
}

function parallaxId(el, koeficent, x, y) {
  if (!!document.getElementById(el)) {
    let scrolled = window.pageYOffset;
    document.getElementById(el).style.backgroundPosition = `${x} calc(${0 -
      scrolled * koeficent}px ${y})`;
  }
}
const modal = document.getElementById('modal');
const pics = document.getElementsByClassName('pic');

modal.onclick = function() {
  modal.style.transform = 'scale(0)';
};

for (let i = 0; i < pics.length; i++) {
  pics[i].onclick = function() {
    modal.lastElementChild.src = pics[i].lastElementChild.src;
    modal.style.transform = 'scale(1)';
  };
}

