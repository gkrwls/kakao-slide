const $topNav = $('ul>li');
const $bgImg = $('.mainimg');
let nowIdx = 0;

const moveFn = function () {
	$bgImg.animate({ marginLeft: -478 * nowIdx + 'px' }, 1000, 'easeOutCubic');
	$topNav.eq(nowIdx).addClass('on');
	$topNav.eq(nowIdx).siblings().removeClass('on');
};

$topNav.on('click', function (evt) {
	evt.preventDefault();
	nowIdx = $topNav.index(this);
	moveFn();
});

$('.next').on('click', function (evt) {
	evt.preventDefault();
	if (nowIdx < $topNav.length - 1) {
		nowIdx++;
	} else {
		nowIdx = 0;
	}
	moveFn();
});

$('.prev').on('click', function (evt) {
	evt.preventDefault();
	if (nowIdx > 0) {
		nowIdx--;
	} else {
		nowIdx = $topNav.length - 1;
	}
	moveFn();
});
