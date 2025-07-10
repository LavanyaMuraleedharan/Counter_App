const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const limit = 100;

textarea.addEventListener("input", function () {
  const length = textarea.value.length;

  if (length > limit) {
    counter.style.color = "red";
    counter.textContent = `${length}/${limit}  Limit exceeded`;
  } else {
    counter.style.color = "black";
    counter.textContent = `${length}/${limit} `;
  }
});
