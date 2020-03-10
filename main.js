window.addEventListener('scroll', function() {
  parallaxId('hero', 0.5, '-80px', '- 48vh');
});

function parallaxId(el, koeficent, x, y) {
  if (!!document.getElementById(el)) {
    let scrolled = window.pageYOffset;
    document.getElementById(el).style.backgroundPosition = `${x} calc(${0 -
      scrolled * koeficent}px ${y})`;
  }
}
const modals = document.getElementsByClassName('modal');
const pics = document.getElementsByClassName('pic');

for (let i = 0; i < pics.length; i++) {
  let t = 0;
  pics[i].onclick = function() {
    t++;

    // t % 2 === 1
    //   ? (modals[i].style.transform = 'scale(1)' )
    //   : (modals[i].style.transform = 'scale(0)');
  };
}