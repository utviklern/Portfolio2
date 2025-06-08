// Felles funksjonalitet for å kopiere artikkellink

document.addEventListener('DOMContentLoaded', function() {
  const copyBtn = document.getElementById('copyLinkBtn');
  const copyMsg = document.getElementById('copyMsg');
  if (copyBtn && copyMsg) {
    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(window.location.href).then(function() {
        copyMsg.classList.remove('hidden');
        setTimeout(() => {
          copyMsg.classList.add('hidden');
        }, 2000);
      });
    });
  }
});

// Parallax effect for header image
document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxImage = document.querySelector('.parallax-image');
    if (parallaxImage) {
        parallaxImage.style.transform = `translateZ(-1px) scale(2) translateY(${scrolled * 0.5}px)`;
    }
});
