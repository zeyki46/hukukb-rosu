// Scroll Reveal
const revealItems = document.querySelectorAll(".section, .vision, .team-section, .contact");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  })
},{threshold:0.15});

revealItems.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s ease";
  observer.observe(el);
});

// Mobile slider drag
const track = document.querySelector(".services-track");
if(track && window.innerWidth < 768){
  let isDown = false, startX, scrollLeft;

  track.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("mouseleave", ()=> isDown=false);
  track.addEventListener("mouseup", ()=> isDown=false);

  track.addEventListener("mousemove", e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
}
