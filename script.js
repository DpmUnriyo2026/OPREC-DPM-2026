function toggleTimeline(id) {
  const container = document.getElementById(id);
  if(!container) return;

  const isVisible = window.getComputedStyle(container).display !== "none";

  const icon = container.previousElementSibling.querySelector("i");

  if(isVisible){
    container.style.display = "none";
    container.querySelectorAll(".timeline-item").forEach(item => item.classList.remove("show"));
    if(icon) icon.style.transform = "rotate(0deg)";
  } else {
    container.style.display = "flex"; // atau 'block', sesuaikan CSS
    const items = container.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      setTimeout(() => item.classList.add("show"), index*200);
    });
    if(icon) icon.style.transform = "rotate(180deg)";
  }
}
function toggleDesc(card) {
  const desc = card.querySelector('.komisi-desc');
  const isVisible = window.getComputedStyle(desc).display !== 'none';
  desc.style.display = isVisible ? 'none' : 'block';
}

function toggleDesc(card) {
  const desc = card.querySelector('.komisi-desc');
  desc.classList.toggle('show');
}



