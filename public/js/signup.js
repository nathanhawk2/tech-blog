const signupFormHandler = async function(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-signup");
  fetch("api/user", {
    method: "post",
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function() {
    document.location.replace("/dashboard");
  })
  .catch(err => console.log(err));
};

document.querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);