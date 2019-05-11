var flower=[
{
	name:"rose",
	picture: "http://www.pngpix.com/wp-content/uploads/2016/03/Red-Rose-PNG-image-500x601.png",
	cost:15,
     identyty:"redrose"
},
{
	name:"rose",
	picture: "http://www.pngpix.com/wp-content/uploads/2016/03/Red-Rose-PNG-image-500x601.png",
	cost:16,
     identyty:"whightrose"
},
{
	name:"tulip",
	picture: "https://freepngimg.com/thumb/tulip/4-2-tulip-png-clipart.png",
	cost:10,
     identyty:"tulip"
}]

$(document).ready(function() {
		$('.minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = (parseInt($input.val()) - 1);
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});

$('.oplata').click(function(argument) {
	var prompt= confirm("Do you want to pay payment?")
	if (true) {
		var forHome= confirm("Do you want delivery?")
	if	(false){
	 var al= alert("You are going to go back to site.")
	}	
			if (true) {
				document.location.replace("file:///F:/%D0%9B%D0%B8%D0%B7%D0%B0%20%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B5%D1%86/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82/temp/html.html")
			} 
else { var online =  confirm("do you want pay online?")
				document.location.replace("file:///F:/%D0%9B%D0%B8%D0%B7%D0%B0%20%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B5%D1%86/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82/temp/html.html")
			}	
}
});