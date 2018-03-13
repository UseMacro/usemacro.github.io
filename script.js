let storeUrl = 'https://chrome.google.com/webstore/detail/pgffhcglkcdpalkgpkkghpofcoibodak';
let isShowing = false;
let panel = null;
let panelBg = null;
let panelClose = null;

let messengerHtml = '<a href="https://messenger.com/" target="_blank"> <button class="panel-button"> Try Macro on Messenger </button> </a>';

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

function addToChrome() {
  chrome.webstore.install(storeUrl, () => {
    let title = document.getElementById('panel-title');
    title.innerHTML = 'Thanks for installing Macro!';
    $('#panel-placeholder').html($(messengerHtml));
    showPanel();
  }, (error, errorCode) => {
    console.error('error: ' + error + ', error code: ' + errorCode);
  });
}

$(document).ready(() => {
  panel = document.getElementById('panel');
  panelBg = document.getElementById('panel-background');
  panelClose = document.getElementById('panel-close');
  panelClose = document.getElementById('panel-close');

  key('alt+/,opt+/', togglePanel);
  key('esc', hidePanel);
  $(panelBg).click(hidePanel);
  $(panelClose).click(hidePanel);
});
