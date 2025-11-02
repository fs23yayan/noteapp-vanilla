import './note-item.js';

class NotesList extends HTMLElement {
  setNotes(notes) {
    this.innerHTML = '';
    notes.forEach((n) => {
      const item = document.createElement('note-item');
      item.note = n;
      this.appendChild(item);
    });
  }
}
customElements.define('notes-list', NotesList);
