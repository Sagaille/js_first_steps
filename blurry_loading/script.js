const loadText = document.querySelector('.loading_text');
const bg = document.querySelector('.bg');
//document.querySelector returns the CSS object.

let load = 0;

let interval = setInterval(blurring, 10);
// calls a function every x millsecs until clearInterval() is called

function blurring()
{
	load++;
	if (load > 100)
		clearInterval(interval);

	loadText.innerText = `WELCOME TO FRONTEND`;
	loadText.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
	bg.style.filter = `blur(${scale(load, 0, 100, 60, 0)}px)`;
}

// quick function to map a range of number to another range
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }