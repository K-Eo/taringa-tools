$('.comment-content').each(function (index) {
	
	var binText = $(this).text()
	var match = binText.match(/([0-1]{8,}\s?)+/)
	
	if (match && match.length > 0) {
		var groups = match[0].split(' ')

		var converted = groups.map(function (element) {
			return String.fromCharCode(parseInt(element, 2))
    }).join('')

		$(this).html($(this).html().replace(match[0], converted))
	}
	
});