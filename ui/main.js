//Counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //Creat a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and state and store it in a varible
    request.onreadystatechange = function () {
      if (request.readystate === XMLHttpRequest.DONE) {
          //Take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHtml = counter.toString();
          }
      }
      // Not done yet
    };
    
    // Make the request
    request.open('GET', 'http://imad.hasura.io/counter', true);
    request.send(null);
};