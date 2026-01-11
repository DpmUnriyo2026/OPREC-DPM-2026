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
function toggleTimeline(id) {
  const container = document.getElementById(id);
  const isVisible = window.getComputedStyle(container).display !== "none";

  if(isVisible) {
    container.style.display = "none";
    container.querySelectorAll(".timeline-item").forEach(item => item.classList.remove("show"));
    const icon = container.previousElementSibling.querySelector("i");
    if(icon) icon.style.transform = "rotate(0deg)");
  } else {
    container.style.display = "flex";
    const items = container.querySelectorAll(".timeline-item");
    items.forEach((item,index)=>{
      setTimeout(()=>item.classList.add("show"), index*200);
    });
    const icon = container.previousElementSibling.querySelector("i");
    if(icon) icon.style.transform = "rotate(180deg)";
  }
}
