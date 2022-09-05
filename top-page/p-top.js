$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(function(){
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      }
    });
  });

 