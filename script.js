let name = 0;
let desc = 0;
function loadHeader() {
  if (name >= 1 && desc >= 1) {
    stopAnimation();
  }
  if (name >= 1) {
    desc += 0.075;
    document.getElementById("mainDesc").style.opacity = desc;
  } else {
    name += 0.1;
    document.getElementById("mainName").style.opacity = name;
  }
}

let x;

function stopAnimation() {
  clearInterval(x);
}

x = setInterval("loadHeader()", 85);