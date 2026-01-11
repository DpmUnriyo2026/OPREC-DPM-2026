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
  const isVisible = window.getComputedStyle(container).display === "flex" || window.getComputedStyle(container).display === "block";

  if (isVisible) {
    container.style.display = "none";
    container.querySelectorAll(".timeline-item").forEach(item => item.classList.remove("show"));
    // rotate icon ke bawah lagi
    const icon = container.previousElementSibling.querySelector("i");
    if(icon) icon.style.transform = "rotate(0deg)";
  } else {
    container.style.display = "flex"; // flex agar horizontal di desktop
    const items = container.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 200);
    });
    // rotate icon panah
    const icon = container.previousElementSibling.querySelector("i");
    if(icon) icon.style.transform = "rotate(180deg)";
  }
}

