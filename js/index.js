var arr = ["images/pageone/bg.jpg", "images/pageone/rr.png", "images/pageone/tt.png",
	"images/pageone/ccc.png", "images/pageone/Cd.png", "images/pageone/Cdd.png",
	"images/pageone/Cddd.png", "images/pageone/gg.png", "images/pageone/yy.png",
	"images/pageone/hh.png", "images/pageone/l1.png", "images/abc4.gif",
	"images/pageone/l2.png", "images/pageone/l3.png", "images/pageone/re.png",
	"images/pageone/maker.png", "images/pageone/dd.png", "images/pageone/dda.png",
	"images/pageone/gg.png", "images/pageone/pe.png", "images/pageone/pd.png",
	"images/pageone/pm.png", "images/pageone/maker.png",
];


$(".c-load").fnLoad(arr, function() {
	paone();
	var w = $(window).width();
	var h = $(window).height();

})

function paone() {
	$('.shift').animate({
		opacity: 1
	});
	$('.firstload').css({
		display: 'none'
	});
	$('.star').addClass('star2');
	Cadd($('.pageone img'));
	Cadd($('.pagetwo img'));
	setTimeout(function() {
		$('.logo').addClass('logo2');
		setTimeout(function() {
			$('.pd').addClass('pd2');
			setTimeout(function() {
				$('.pr').addClass('pr2');
				setTimeout(function() {
					$('.pe').addClass('pe2');
					setTimeout(function() {
						$('.pm').addClass('pm2');
						setTimeout(function() {
							$('.word').addClass('word2');
							setTimeout(function() {
								$('.logotop').animate({
									opacity: 1
								}, 0);

								$('.p3').addClass("animated zoomIn");
								$('.p3').css("display", "block");
								setTimeout(function() {
									$('.p1').addClass('p11');
									$('.p2').addClass('p22');
								}, 1000);
							}, 1000);
						}, 300)
					}, 300)
				}, 300)
			}, 300)
		}, 1000)
	}, 1000);
}


function Cadd(obj) {
	var Cimgnum = obj.length;
	for(var i = 0; i < Cimgnum; i++) {
		var Cdata = obj.eq(i).attr('data-src');
		obj.eq(i).attr('src', Cdata);
	}
}




