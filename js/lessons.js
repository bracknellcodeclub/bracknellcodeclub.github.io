var steps = document.querySelectorAll(".activity-checklist > li");

for (var x = 0; x < steps.length; x++) {
  steps[x].addEventListener('click', function(e) {
    if(e.target && e.target.nodeName == "LI") {
      e.target.classList.toggle('activity-done');
    }
  }, false);
}
