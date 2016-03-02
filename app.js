
'use strict';

let blessed = require('blessed'),
    contrib = require('blessed-contrib');

let screen = blessed.screen();


let lcd = contrib.lcd({
	label: 'Realtime Clock - Halfeld',
	elements: 8
});

screen.append(lcd);

setInterval(initClock, 1000);

function initClock() {

  let date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

  if(hours < 10) hours = `0${hours}`;
  if(minutes < 10) minutes = `0${minutes}`;
  if(seconds < 10) seconds = `0${seconds}`;

  let value = `${hours}:${minutes}:${seconds}`;

	lcd.setDisplay(value);

  lcd.setOptions({
		color: 'red',
		elementPadding: 10,
    strokeWidth: 0.10,
    segmentWidth: 0.10,
    display: 129
	});
	screen.render();
}

screen.render();
