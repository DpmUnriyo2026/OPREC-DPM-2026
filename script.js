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
function toggleTimeline(id) {
  const container = document.getElementById(id);
  if(container.style.display === "block") {
    container.style.display = "none";
    // reset animation
    container.querySelectorAll(".timeline-item").forEach(item => item.classList.remove("show"));
  } else {
    container.style.display = "block";
    // animasi muncul satu persatu
    const items = container.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 200);
    });
  }
}
