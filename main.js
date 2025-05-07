function displaySectionInfo() {
  var sectionNumber = parseInt(document.getElementById('numberInput').value);
  var output = document.getElementById('output');

  switch (sectionNumber) {
    case 1:
      output.innerHTML = "Emerald: The Radiant Achievers";
      break;
    case 2:
      output.innerHTML = "Ruby: The Precious Gems of Intellect";
      break;
    case 3:
      output.innerHTML = "Sapphire: The Brilliant Minds";
      break;
    case 4:
      output.innerHTML = "Topaz: The (not so) Golden Scholars";
      break;
    default:
      output.innerHTML = "Invalid Section Number";
  }
}

function refreshPage() {
  window.location.reload();
}