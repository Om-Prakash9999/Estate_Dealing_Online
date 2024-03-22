
  
let xValues = ['Jan\'23', 'Feb\'23', 'Mar\'23', 'Apr\'23', 'May\'23', 'Jun\'23', 'Jul\'23', 'Aug\'23', 'Sep\'23', 'Oct\'23', 'Nov\'23', 'Dec\'23'];
let yValues1 = [8300, 8500, 8300, 8250, 8200, 8400, 8530, 8500, 8530, 8700, 9000, 9800, 10520];
let yValues2 = [9300, 9250, 9200, 9400, 9300, 9350, 9500, 9520, 9530, 9620, 9800, 10520];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Lowest',
      data: yValues1,
      fill: false,
      borderColor: 'rgba(255, 0, 0, 1)', // Darker color

      borderWidth: 1,
    }, {
      label: 'highest',
      data: yValues2,
      fill: false,
      borderColor: 'rgba(0, 0, 255, 0.5)', // Faint shade

      borderWidth: 2,
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: { min: 8000, max: 11000 }
      }]
    }
  }
});

////

// Get necessary elements
// Get necessary elements
const sliderWrapper = document.querySelector('.slider-Wrapper');
const slideElements = document.querySelectorAll('.slide-element');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

// Set initial variables
let currentIndex = 0;
const totalSlides = slideElements.length;
const slideWidth = slideElements[0].offsetWidth;

// Function to go to the next slide
function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

// Function to go to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
}

// Function to update slider position
function updateSlider() {
    const newPosition = -currentIndex * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}

// Event listeners for prev and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


//////// slider services 

$(document).ready(function () {
  var itemsMainDiv = '.MultiCarousel';
  var itemsDiv = '.MultiCarousel-inner';
  var itemWidth = "";

  $('.leftLst, .rightLst').click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition)
          click(0, this);
      else
          click(1, this)
  });

  ResCarouselSize();

  $(window).resize(function () {
      ResCarouselSize();
  });

  function ResCarouselSize() {
      var incno = 0;
      var dataItems = "data-items";
      var itemClass = '.item';
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $('body').width();
      $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr("id", "MultiCarousel" + id);

          if (bodyWidth >= 1200) {
              incno = 4; // Show 4 items at a time for large screens
          }
          else if (bodyWidth >= 992) {
              incno = 3; // Show 3 items at a time for medium screens
          }
          else if (bodyWidth >= 768) {
              incno = 2; // Show 2 items at a time for small screens
          }
          else {
              incno = 1; // Show 1 item at a time for extra small screens
          }
          itemWidth = sampwidth / incno;
          $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
          $(this).find(itemClass).each(function () {
              $(this).outerWidth(itemWidth);
          });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");

      });
  }

  function ResCarousel(e, el, s) {
      var leftBtn = '.leftLst';
      var rightBtn = '.rightLst';
      var translateXval = '';
      var divStyle = $(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
          translateXval = parseInt(xds) + itemWidth;
          $(el + ' ' + rightBtn).removeClass("over");

          if (translateXval >= itemWidth / 2) {
              translateXval = 0;
              $(el + ' ' + leftBtn).addClass("over");
          }
      }
      else if (e == 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) - itemWidth;
          $(el + ' ' + leftBtn).removeClass("over");

          if (translateXval <= itemsCondition - itemWidth / 2) {
              translateXval = itemsCondition;
              $(el + ' ' + rightBtn).addClass("over");
          }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
  }

  function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
  }
});
////////////////////////////////
///similar properties
// optional
$('#blogCarousel').carousel({
  interval: 5000
});
/////////////
