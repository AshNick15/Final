function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please enter a note.");
    return;
  }

  const noteList = document.getElementById("noteList");
  const newNote = document.createElement("li");
  newNote.textContent = noteText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = function () {
    noteList.removeChild(newNote);
  };

  newNote.appendChild(deleteBtn);
  noteList.appendChild(newNote);
  noteInput.value = ""; // Clear input field
}

document.getElementById("homeButton").addEventListener("click", function () {
  window.location.href = "index.html";
});
