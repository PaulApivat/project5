


var d = new Date();
// var weekday = new Array(7);

// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];

var phrase = new Array(7);

phrase[0] = "Sexy Sundays";
phrase[1] = "MJ Mondays";
phrase[2] = "Oh, it's just Tuesday";
phrase[3] = "Women Crush Wednesday";
phrase[4] = "Thirsty Thursday";
phrase[5] = "Friday couldn't be here sooner.";
phrase[6] = "It's Saturday, the freakin weekend is heeeaayy.";

var m = phrase[d.getDay()];



//document.getElementById("display1").innerHTML = n;
document.getElementById("phrase1").innerHTML = m;

$(document).ready(function(){

switch (new Date().getDay()) {
	case 0:
			$('.day0').removeClass('day0').addClass('day');
		break;
	case 1:
			$('.day1').removeClass('day1').addClass('day');
		break;
	case 2:
			$('.day2').removeClass('day2').addClass('day');
		break;
	case 3:
			$('.day3').removeClass('day3').addClass('day');
		break;
	case 4:
			$('.day4').removeClass('day4').addClass('day');
		break;
	case 5:
			$('.day5').removeClass('day5').addClass('day');
		break;
	case 6:
		  $('.day6').removeClass('day6').addClass('day');
		break;
}

});


