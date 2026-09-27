document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".photo-button");

  // Replace the placeholder before publishing.
  if (button && button.getAttribute("href") === "YOUR_GOOGLE_DRIVE_FOLDER_LINK") {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add your Google Drive folder link in index.html first.");
    });
  }
});
