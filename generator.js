
function generateContent() {
  const topic = document.getElementById("topic").value.trim();
  let result = "";
  if (!topic) {
    result = "Please enter a topic!";
  } else {
    result = `🔥 Here's a great caption for "${topic}": Boost your visibility with content that speaks directly to your audience. 🚀 #${topic}`;
  }
  document.getElementById("output").innerText = result;
}
