
var E_NO_DATA = "参加予定のイベントはありません";
var E_REQ_ERROR = "イベントデータの取得に失敗しました";
var E_SAVE = "データの保存が完了しました";
var E_NO_NICKNAME= "nicknameが設定されていません.オプション画面から設定して下さい.";

function $(elementId) {
  return document.getElementById(elementId);
}

function isPaste(time) {
  try {
    var now = new Date();
    var compTime = new Date();
    compTime.setTime(Date.parse(time));
    if (now.getTime() > compTime.getTime())  return true;  
    return false; 
  } catch (e) { 
    return false;
  }
} 

function click(e) {
  chrome.tabs.create({url: e.target.href});
}

function setPTag(id, text) {
  var tag = $(id); 
  var p = document.createElement("p");  

  tag.innerHTML = "";  
  p.innerHTML = text;
  tag.appendChild(p);
}

