const min = prompt('Введи сколько минут у тебя');

if ((min >= 0) && (min <= 15)) {
	alert('Первая четверть');
} else if ((min >= 16) && (min <= 30)) {
	alert('Вторая четверть');
} else if ((min >= 31) && (min <= 45)) {
	alert('Третья четверть');
}	else if ((min >= 46) && (min <= 59)) {
	alert('Четвертая четверть');
} else {
	alert('В часе только 60 минут!')
}