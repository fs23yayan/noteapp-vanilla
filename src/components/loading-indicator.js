class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="loader" style="display:none">Loading...</div>';
    this.loader = this.querySelector('.loader');
  }
  show() { this.loader.style.display = 'block'; }
  hide() { this.loader.style.display = 'none'; }
}
customElements.define('loading-indicator', LoadingIndicator);
