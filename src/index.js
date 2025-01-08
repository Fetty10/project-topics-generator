function displayTipics(response) {
  new Typewriter("#project-topics", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✍🏽",
    delay: 0,
  });
}

function generateTopics(event) {
  event.preventDefault();

  let userInput = document.querySelector("#text-input");
  let apiKey = "o74291bedbb48f3c3et5a5a6ad40853a";
  let prompt = `Generate academic research topics based on ${userInput.value}, make it precise with no further explanation, add fullstop at the end of every topic and seperate each new number with a <br />. Do not write more than the number entered by the student. Sign the topics with By Fetty AI inside a <strong> element at the end of the topics with a <br />`;
  let context =
    "You are and ai academic researcher, please provide the exact number of topics requested by the user";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let topicElement = document.querySelector("#project-topics");
  topicElement.classList.remove("hidden");
  topicElement.innerHTML = "📚 Generating your topics... please wait";
  axios.get(apiUrl).then(displayTipics);
}

let topicGenerator = document.querySelector("#project-topics-generator-form");
topicGenerator.addEventListener("submit", generateTopics);
