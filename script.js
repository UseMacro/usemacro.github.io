let isShowing = false;
let panel = document.getElementById('panel');
let panelBg = document.getElementById('panel-background');

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
  key('alt+/,opt+/', togglePanel);

  key('esc', hidePanel);

  $(panelBg).click(hidePanel);
});
