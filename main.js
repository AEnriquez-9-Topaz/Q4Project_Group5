 // Enriquez, Espina
 const Oradios = document.getElementsByName('Organization'); 
 const Odisplay = document.getElementById('Oscore');
// This code checks/listens to each Oradio for any change event. If it does change (meaning the person has clicked an option), it will display the value (this.value) of it in 'Oscore'
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

// Math methods

function Average() {
  // Score is automatically 0 if nothing is clicked
  const Oscore = parseFloat(document.getElementById('Oscore').textContent) || 0;
  const Dscore = parseFloat(document.getElementById('Dscore').textContent) || 0;
  const Fscore = parseFloat(document.getElementById('Fscore').textContent) || 0;

  const average = (Oscore + Dscore + Fscore) / 3;
  const average_round = Math.round(average)


  document.getElementById("Ave").innerHTML = "Their average score is " + average_round;
// Gives an alert message based on the average of the person
  switch (average_round) {
  case 0:
    alert("Extra Poor!");
    break;
  case 1:
    alert("Poor!");
    break;
  case 2:
    alert("Needs Improvement!");
    break;
  case 3:
    alert("Standard!");
    break;
   case 4:
   alert("Above Standard!");
    break;
  default:
    alert("Excellent!");
}

}

// onchange js event to capitalize 
          document.getElementById("FullName").onchange = function() {ChangeToCapital()}
          function ChangeToCapital() {
            var fname = document.getElementById("FullName");
            fname.value = fname.value.toUpperCase();
          }
