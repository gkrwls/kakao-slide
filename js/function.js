const $indicator = $('ul>li');
const $bgImg = $('.mainimg');
let nowIdx = 0;

$indicator.on('click', function (evt) {
	evt.preventDefault();

	nowIdx = $indicator.index(this);

	$bgImg.animate({ marginLeft: -478 * nowIdx + 'px' });
	$indicator.eq(nowIdx).addClass('on');
	$indicator.eq(nowIdx).siblings().removeClass('on');
});

$('.next').on('click', function (evt) {
	evt.preventDefault();

	if (nowIdx < $indicator.length - 1) {
		nowIdx++;
	} else {
		nowIdx = 0;
	}
	$bgImg.animate({ marginLeft: -478 * nowIdx + 'px' });
	$indicator.eq(nowIdx).addClass('on');
	$indicator.eq(nowIdx).siblings().removeClass('on');
});

$('.prev').on('click', function (evt) {
	evt.preventDefault();

	if (nowIdx > 0) {
		nowIdx--;
	} else {
		nowIdx = $indicator.length - 1;
	}
	$bgImg.animate({ marginLeft: -478 * nowIdx + 'px' });
	$indicator.eq(nowIdx).addClass('on');
	$indicator.eq(nowIdx).siblings().removeClass('on');
});
