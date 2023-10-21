// Previous script
document.addEventListener("DOMContentLoaded", function() {
  // Classy feature: Click to make plants grow
  document.querySelectorAll('.plant').forEach(function(plant) {
    plant.addEventListener('click', function() {
      if (plant.classList.contains('grow')) {
        plant.classList.remove('grow');
      } else {
        plant.classList.add('grow');
      }
    });
  });

  // Position the plants randomly on the page
  let plant1 = document.getElementById('plant1');
  let plant2 = document.getElementById('plant2');
  plant1.style.left = '10%';
  plant1.style.top = '10%';
  plant2.style.left = '80%';
  plant2.style.top = '80%';
});
