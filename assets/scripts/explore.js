window.addEventListener('DOMContentLoaded', init);
function init() {
  const speech = window.speechSynthesis;
  var voices = [];
  var text = document.getElementById("text-to-speak");
  var voiceSelected = document.querySelector("select");
  voices = speech.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const currOption = document.createElement('option');
    currOption.textContent = `${voices[i].name} (${voices[i].lang})`;
    currOption.setAttribute('data-lang', voices[i].lang);
    currOption.setAttribute('data-name', voices[i].name);
    currOption.value = i;
    document.querySelector("select").appendChild(currOption);
  }
  var button = document.querySelector("button");
  button.addEventListener('click', function() {
    var textValue = text.value;
    var speakText = new SpeechSynthesisUtterance(textValue);
    speakText.voice = voices[voiceSelected.value];
    var img = "assets/images/smiling-open.png";
    document.querySelector("img").src = img;
    speech.speak(speakText);
    speakText.addEventListener('end', function() {
      var img2 = "assets/images/smiling.png";
      document.querySelector("img").src = img2;
    })
  });
}