async function sendFeedback() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (!name || !message) {
    status.textContent = "Please fill all fields";
    return;
  }

  const res = await fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message })
  });

  const data = await res.json();
  status.textContent = data.message;
}
