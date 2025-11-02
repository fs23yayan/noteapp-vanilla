import './styles.css';
import './components/app-bar.js';
import './components/note-input.js';
import './components/notes-list.js';
import './components/loading-indicator.js';
import { getNotes } from './api/notes-api.js';

window.addEventListener('DOMContentLoaded', async () => {
  const list = document.querySelector('notes-list');
  const loader = document.querySelector('loading-indicator');
  loader.show();
  const notes = await getNotes();
  list.setNotes(notes);
  loader.hide();
});
