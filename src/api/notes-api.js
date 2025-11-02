export async function getNotes() {
  try {
    const res = await fetch('https://notes-api.dicoding.dev/v2/notes');
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('Using fallback data due to API error');
    const dummy = await fetch('https://raw.githubusercontent.com/dicodingacademy/a163-bfwd-labs/099-shared-files/notes.js');
    const text = await dummy.text();
    return eval(text); // simple fallback
  }
}

export async function createNote(note) {
  // note should be an object, e.g. { title: '...', body: '...', tags: [...] }
  try {
    const res = await fetch('https://notes-api.dicoding.dev/v2/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    if (!res.ok) {
      console.warn('API createNote error:', data);
      return null;
    }
    return data.data;
  } catch (err) {
    console.warn('createNote failed:', err);
    return null;
  }
}

export async function deleteNote(id) {
  try {
    const res = await fetch(`https://notes-api.dicoding.dev/v2/notes/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!res.ok) {
      console.warn('API deleteNote error:', data);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('deleteNote failed:', err);
    return false;
  }
}
