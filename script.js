var carouselList = null;

function nextSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	lastItem.after(firstItem);

	carouselList.css({marginLeft:0});
}


$(function(){

	console.log('jQuery works');
	carouselList = $("#carousel ul");

	console.log(carouselList)

	setInterval(nextSlide,3000);

})

