 const Oradios = document.getElementsByName('Organization'); 
 const Odisplay = document.getElementById('Oscore');

  Oradios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        Odisplay.textContent = this.value;
      }
    });
  });

const Dradios = document.getElementsByName('Design');
const Ddisplay = document.getElementById('Dscore');

  Dradios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
       Ddisplay.textContent = this.value;
      }
    });
  });


const Fradios = document.getElementsByName('Functionality');
const Fdisplay = document.getElementById('Fscore');

  Fradios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
       Fdisplay.textContent = this.value;
      }
    });
  });

function Average() {
  const Oscore = parseFloat(document.getElementById('Oscore').textContent) || 0;
  const Dscore = parseFloat(document.getElementById('Dscore').textContent) || 0;
  const Fscore = parseFloat(document.getElementById('Fscore').textContent) || 0;

  const average = (Oscore + Dscore + Fscore) / 3;
  const average_round = Math.round(average)
  document.getElementById("Ave").innerHTML = "Your average score is " + average_round;
}