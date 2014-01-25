var Stomp = require('stompjs');
var SerialPort = require('serialport');

var stompClient = Stomp.overWS('ws://localhost:8080/ws');

var arduino = new SerialPort.SerialPort('/dev/tty.usbmodem1421', {
	baudrate: 115200,
	parser: SerialPort.parsers.readline('\n')
}, false);

stompClient.connect(null, null, function () {
	arduino.open(function () {

		var point = {};

		arduino.on('data', function (data) {
			point.x = Date.now();
			point.y = parseFloat(data) * 1.2 - 2;
			stompClient.send('/ecg', null, JSON.stringify(point));
		});
	});
});
