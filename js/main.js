$(function(){

    $('#fullpage').fullpage({
		//options here
		anchors: ['cover','contents','profile','product','uiux','web','shop','contact'],
		autoScrolling:true,
		scrollHorizontally: true,
		navigation:true,
		// navigationPosition:'left'
		afterLoad: function(anchorLink, index){
			console.log("현재섹션=" + index);
			
			if(index == 1){
				$('.cover-anime-title').addClass('animate__fadeInUp on');
				$('.cover-anime-human').addClass('animate__fadeInLeft on');
			}else{
				$('.cover-anime-title').removeClass('animate__fadeInUp on');
				$('.cover-anime-human').removeClass('animate__fadeInLeft on');
			}
			if(index == 2){
				$('.page01-anime-human').addClass('animate__fadeInRight on');
			}else{
				$('.page01-anime-human').removeClass('animate__fadeInRight on');
			}
			if(index == 3){
				$('.page02-anime-right').addClass('profile animate__fadeInRight on');
				$('.page02-anime-skills').addClass('animate__fadeInUp on');
			}else{
				$('.page02-anime-right').removeClass('profile animate__fadeInRight on');
				$('.page02-anime-skills').removeClass('animate__fadeInUp on');
			}
			if(index == 5){
				$('.page-04 .sec-right').addClass('animate__fadeInRight on');
			}else{
				$('.page-04 .sec-right').removeClass('animate__fadeInRight on');
			}
			if(index == 6){
				$('.page-05 .sec-bottom').addClass('animate__fadeInUp on');
			}else{
				$('.page-05 .sec-bottom').removeClass('animate__fadeInUp on');
			}
			if(index == 7){
				$('.page-06 .sec-bottom').addClass('animate__fadeInUp on');
			}else{
				$('.page-06 .sec-bottom').removeClass('animate__fadeInUp on');
			}
			if(index == 8){
				$('.page-07 .back-home').addClass('animate__heartBeat on');
			}else{
				$('.page-07 .back-home').removeClass('animate__heartBeat on');
			}
		}
	});

	$('.slider-container .port-img-slides div').hover(
        function() {
            $(this).addClass('on');
        }, 
        function() {
            $(this).removeClass('on');
        }
    );

	$(document).ready(function () {
		let $links = $(".page-01 .section-inner-wrap .content-list li a");
		
		$links.hover(
			function () {
				$links.removeClass("on");
				$(this).addClass("on");
			},
			function () {
				$links.filter(".on").length || $links.first().addClass("on");
			}
		);
	
		$links.click(function () {
			$links.removeClass("on");
			$(this).addClass("on");
		});
	});
	

	
});


// 상세페이지 슬라이드
document.addEventListener("DOMContentLoaded", function () {
	const slider = document.querySelector(".port-img-slides");
	slider.innerHTML += slider.innerHTML; // 무한 효과를 위해 복제
});