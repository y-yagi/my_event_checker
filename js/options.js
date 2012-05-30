
function initialize() {
  var atndNickname= window.localStorage.getItem('atndNickname');
  $('atnd_nickname').value = atndNickname;  

  var connpassNickname = window.localStorage.getItem('connpassNickname');
  $('connpass_nickname').value = connpassNickname; 
}

function save() {
  window.localStorage.setItem('atndNickname', $('atnd_nickname').value);
  window.localStorage.setItem('connpassNickname', $('connpass_nickname').value);
  $('save_status').innerText = E_SAVE;
}

