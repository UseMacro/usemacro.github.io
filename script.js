let isShowing = false;
let panel = null;
let panelBg = null;
let panelClose = null;

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
  panel = document.getElementById('panel');
  panelBg = document.getElementById('panel-background');
  panelClose = document.getElementById('panel-close');

  key('alt+/,opt+/', togglePanel);
  key('esc', hidePanel);
  $(panelBg).click(hidePanel);
  $(panelClose).click(hidePanel);
});
