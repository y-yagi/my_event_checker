
function initialize() {
  var atndNickname= window.localStorage.getItem('atndNickname');
  if (atndNickname != null) $('atnd_nickname').value = atndNickname;  

  var connpassNickname = window.localStorage.getItem('connpassNickname');
  if (connpassNickname != null) $('connpass_nickname').value = connpassNickname;  

  var zusaarNickname = window.localStorage.getItem('zusaarNickname');
  if (zusaarNickname != null) $('zusaar_nickname').value = zusaarNickname; 
}

function save() {
  window.localStorage.setItem('atndNickname', $('atnd_nickname').value);
  window.localStorage.setItem('connpassNickname', $('connpass_nickname').value);
  window.localStorage.setItem('zusaarNickname', $('zusaar_nickname').value);
  $('save_status').innerText = E_SAVE;
}

