let isShowing = false;
let panel = document.getElementById('panel');

function showPanel() {
  panel.style.display = 'block';
  document.body.style.overflowY = 'hidden';
  isShowing = true;
}

function hidePanel() {
  panel.style.display = '';
  document.body.style.overflowY = 'scroll';
  isShowing = false;
}

function togglePanel() {
  if (isShowing) {
    hidePanel();
  } else {
    showPanel();
  }
}

$(document).ready(() => {
  key('alt+/,opt+/', (event, handler) => {
    togglePanel();
  });
});
