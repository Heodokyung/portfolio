(function(){
	// 캐쉬 방지
	var date 		= new Date();
		year  		= String( date.getFullYear() ),
		month 		= String( date.getMonth() + 1 ),
		day   		= String( date.getDate() ),
		hour 		= String( date.getHours() ),
		min 		= String( date.getMinutes() ),
		sec 		= String( date.getSeconds() );

		if (month < 10) { month = '0' + month; }
		if (day < 10) { day = '0' + day; }
		if (hour < 10) { hour = '0' + hour; }
		if (min < 10) { min = '0' + min; }
		if (sec < 10) { sec = '0' + sec; }

	var fulldate 	= year + month + day + '_' + hour + min + sec;


	var codeview = new Array();

	document.write('<link rel="stylesheet" type="text/css" href="https://heodokyung.github.io/portfolio/css/ui_common.css?date'+ fulldate +'" />');
	document.write('<link rel="stylesheet" type="text/css" href="https://heodokyung.github.io/portfolio/css/ui_style.css?date'+ fulldate +'" />');
	codeview.push({'url':'https://heodokyung.github.io/portfolio/js/jquery-2.2.4.min.js', 'cashbuster':false});
	codeview.push({'url':'https://heodokyung.github.io/portfolio/js/vue-2.5.17.min.js', 'cashbuster':false});
	codeview.push({'url':'https://heodokyung.github.io/portfolio/js/jquery.event.drag-1.5.1.min.js', 'cashbuster':false});
	codeview.push({'url':'https://heodokyung.github.io/portfolio/js/ui.js?date'+ fulldate +'', 'cashbuster':false});

	for(var i = 0, total = codeview.length; i < total; i++){
		document.write('<script src="' +codeview[i].url + ((codeview[i].cashbuster) ?'?cb='+window._CACHE_BUSTER:'')+'" charset="utf-8"></'+'script>');
	};
})();
