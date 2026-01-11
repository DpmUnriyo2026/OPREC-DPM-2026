function toggleMenu(){
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function closeMenu(){
  document.getElementById('navLinks').style.display = 'none';
}

function toggleDesc(card){
  const desc = card.querySelector('.komisi-desc');
  desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
}
// Scroll reveal untuk timeline
const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
  const windowHeight = window.innerHeight;
  timelineItems.forEach((item, index) => {
    const top = item.getBoundingClientRect().top;
    if(top < windowHeight - 100){
      setTimeout(() => {
        item.classList.add("show");
      }, index * 200); // muncul bertahap 200ms per item
    }
  });
}

window.addEventListener("scroll", revealTimeline);
revealTimeline();
