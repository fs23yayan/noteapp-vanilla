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
