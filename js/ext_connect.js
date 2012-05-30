var extConnect = function (site, url) { 
  var req = new XMLHttpRequest();
  function request() { 
    var nickname = window.localStorage.getItem(site + 'Nickname');
    
    if (nickname == null || nickname== '') {
      setPTag(site, E_NO_NICKNAME);
      return;
    }
    req.open(
      "GET",
      url + "nickname=" + nickname,
       true);
    req.onload = show;
    req.onerror = error;
    req.send(null);
  }

  function show() {
    var response = JSON.parse(req.responseText);
    var events = response.events;
    var noData = true;
    var li, a;
    var title, date, url;
    var tag = $(site); 
    tag.innerHTML = ""; 
  
    for (var i = events.length - 1, event; event = events[i]; i--){
      li = document.createElement("li"); 
      li.className = "line";  
      li.addEventListener("click", click);
  
      title = event.title;
      date = event.started_at;
      url = event.event_url;
  
      if (isPaste(date)) continue;  
  
      a = document.createElement("a");
      a.setAttribute("href", url);
  
      a.innerHTML = date + ":" + title;
      li.appendChild(a);
      tag.appendChild(li);
      noData = false;
    } 
  
    if (noData) { 
      setPTag(site, E_NO_DATA);
    }
  } 

  function error(e) { 
    setPTag(site, E_REQ_ERROR);
  }

  return {
    request: request
  };
};


