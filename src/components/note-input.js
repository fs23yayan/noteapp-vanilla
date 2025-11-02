class NoteInput extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="noteForm">
        <input type="text" id="title" placeholder="Title" required />
        <textarea id="body" placeholder="Your note..." required></textarea>
        <button type="submit">Add Note</button>
      </form>`;
    this.querySelector('#noteForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const note = {
        title: this.querySelector('#title').value,
        body: this.querySelector('#body').value,
      };
      this.dispatchEvent(new CustomEvent('note-added', { detail: note, bubbles: true }));
      e.target.reset();
    });
  }
}
customElements.define('note-input', NoteInput);
