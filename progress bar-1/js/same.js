 //SVG gauges script
var firstGauge = document.querySelector('.container:first-of-type .progress');
var firstTarget = parseInt(firstGauge.getAttribute('data-target'));
var firstGaugeReadout = document.querySelector('.container:first-of-type .percentage > .valor');

var secondGauge = document.querySelector('.container:nth-of-type(2) .progress');
var secondTarget = parseInt(secondGauge.getAttribute('data-target'));
var secondGaugeReadout = document.querySelector('.container:nth-of-type(2) .percentage > .valor');

var thirdGauge = document.querySelector('.container:nth-of-type(3) .progress');
var thirdTarget = parseInt(thirdGauge.getAttribute('data-target'));
var thirdGaugeReadout = document.querySelector('.container:nth-of-type(3) .percentage > .valor');

var fourthGauge = document.querySelector('.container:nth-of-type(4) .progress');
var fourthTarget = parseInt(fourthGauge.getAttribute('data-target'));
var fourthGaugeReadout = document.querySelector('.container:nth-of-type(4) .percentage > .valor');

//variables
var gaugeR = parseInt(document.querySelectorAll('circle')[0].getAttribute('r'));
var gaugeC = gaugeR * Math.PI * 2;
var animationDuration = 1.5;

//init svg circles
var circles = document.querySelectorAll('circle');
var gauges = document.querySelectorAll('.progress');
TweenMax.set(circles, {
  strokeDashoffset: gaugeC
});

TweenMax.set(gauges, {
  attr: {
    'stroke-dasharray': gaugeC + ' ' + gaugeC
  }
});

//calculate the offset
function calculateOffset(t, c) {
			
  var target = c - (c * t) / 100;
  return target;

}

//timeline
var tl = new TimelineMax();

//first gauge animation
tl.to(firstGauge, animationDuration, {

  strokeDashoffset: calculateOffset(firstTarget, gaugeC),
  ease: Bounce.easeOut,
  onUpdate: function() {

    var currentStrokeOffset = parseInt(firstGauge.style.strokeDashoffset);
    firstGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//second gauge animation
tl.to(secondGauge, animationDuration, {

  strokeDashoffset: calculateOffset(secondTarget, gaugeC),
  ease: Power3.easeInOut,
   onUpdate: function() {

    var currentStrokeOffset = parseInt(secondGauge.style.strokeDashoffset);
    secondGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//third gauge animation
tl.to(thirdGauge, animationDuration, {

  strokeDashoffset: calculateOffset(thirdTarget, gaugeC),
  ease: Elastic.easeOut.config(1, 0.4),
   onUpdate: function() {

    var currentStrokeOffset = parseInt(thirdGauge.style.strokeDashoffset);
    thirdGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});

//fourth gauge animation
tl.to(fourthGauge, animationDuration, {

  strokeDashoffset: calculateOffset(fourthTarget, gaugeC),
  ease: SlowMo.ease.config(0.1, 1.3, false),
   onUpdate: function() {

    var currentStrokeOffset = parseInt(fourthGauge.style.strokeDashoffset);
    fourthGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);

  }

});
    