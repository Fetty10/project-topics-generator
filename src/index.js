function generateTopics(event) {
  event.preventDefault();

  new Typewriter("#project-topics", {
    strings: "Here are your project Topics",
    autoStart: true,
    cursor: "✍🏽",
    delay: 80,
  });
}

let topicGenerator = document.querySelector("#project-topics-generator-form");
topicGenerator.addEventListener("submit", generateTopics);
