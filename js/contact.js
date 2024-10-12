document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you for your message, ${name}!`);
    form.reset();
  });
});
