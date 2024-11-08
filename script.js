const languageDiv = document.querySelector('#language-div');
const toggleButton = document.querySelector("button");

toggleButton.addEventListener("click", () => {
    if (toggleButton.innerText === "Hide Languages") {
        toggleButton.innerText = "Show Languages";
        languageDiv.style.display = "none";
    } else {
        toggleButton.innerText = "Hide Languages";
        languageDiv.style.display = "unset";
    }
});