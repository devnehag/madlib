document.getElementById('madLibsForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var adjective1 = document.getElementById('adjective1').value;
    var noun = document.getElementById('noun').value;
    var adjective2 = document.getElementById('adjective2').value;
    var clothing = document.getElementById('clothing').value;
    var bodyPart = document.getElementById('bodyPart').value;
    var verb = document.getElementById('verb').value;
    var food = document.getElementById('food').value;
  
    var story = "Once upon a time, there was a " + adjective1 + " " + noun + " who wore a " + adjective2 + " " +
      clothing + " on their " + bodyPart + ". One day, they decided to " + verb + " and eat some " + food + ". " +
      "It was a truly " + adjective1 + " experience!";
  
    document.getElementById('story').textContent = story;
  });
  