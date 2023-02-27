document.getElementById("name-input").addEventListener("input", function() {
    let enteredName = document.getElementById("name-input").value;
    if (enteredName === "") {
      document.getElementById("name-output").innerHTML = "Anonymous";
    } else {
      document.getElementById("name-output").innerHTML = enteredName;
    }
  });