// Get necessary DOM elements
const noteList = document.getElementById("noteList");
const addNoteButton = document.getElementById("addNoteButton");
const noteContent = document.getElementById("noteContent");
const saveButton = document.getElementById("saveButton");

// Array to store notes
let notes = [];

// Index of the currently selected note
let selectedNoteIndex = -1;

// Function to render notes in the sidebar
function renderNotes() {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = `Note ${index + 1}`;
    li.addEventListener("click", () => {
      selectNote(index);
    });
    noteList.appendChild(li);
  });
}

// Function to select a note
function selectNote(index) {
  selectedNoteIndex = index;
  noteContent.value = notes[index];
  saveButton.disabled = true;
}

// Function to update the selected note
function updateNote() {
  if (selectedNoteIndex !== -1) {
    notes[selectedNoteIndex] = noteContent.value;
    renderNotes();
    saveButton.disabled = true;
  }
}

// Function to add a new note
function addNote() {
  const newNote = prompt("Enter your note:");
  if (newNote) {
    notes.push(newNote);
    renderNotes();
  }
}

// Function to enable the "Save" button when note content is modified
function enableSaveButton() {
  saveButton.disabled = false;
}

// Event listeners
addNoteButton.addEventListener("click", addNote);
saveButton.addEventListener("click", updateNote);
noteContent.addEventListener("input", enableSaveButton);

// Initial rendering of notes
renderNotes();
