// content.js
document.addEventListener("DOMContentLoaded", function() {
    const hiddenText = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    // Create a new paragraph element
    const p = document.createElement("p");
    p.className = "dark-gray"; // Add the same class for styling
    p.innerText = hiddenText;

    // Append the paragraph to the text-box
    document.querySelector(".text-box").appendChild(p);
});
