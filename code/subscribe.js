var ws = new WebSocket('ws://localhost:8080/ws');
var stomp = Stomp.over(ws);

stomp.connect('user', 'password', function () {

  stomp.subscribe('/topic/patient.created.*', function (message) {
    console.log(JSON.parse(message.body));
  });
});
