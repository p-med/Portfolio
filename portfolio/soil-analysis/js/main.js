/* Nav bar hover effect + ChartJS movement */
$(document).ready(function () {
  $("nav").hover(function () {
    $("nav").toggleClass("expand");
    $("#graficoCUT").toggleClass("graficoExpand");
    $("#graficoNA").toggleClass("graficoExpand");
    $("#graficoS60-90").toggleClass("graficoExpand");
    $("#graficoS30-60").toggleClass("graficoExpand");
    $("#graficoS0-30").toggleClass("graficoExpand");
    $("#graficoMg60_90").toggleClass("graficoExpand");
    $("#graficoMg30_60").toggleClass("graficoExpand");
    $("#graficoMg0_60").toggleClass("graficoExpand");
    $("#graficoP").toggleClass("graficoExpand");
    $("#graficoCa0_30").toggleClass("graficoExpand");
    $("#graficoZ").toggleClass("graficoExpand");
    $("#graficoMn").toggleClass("graficoExpand");
    $("#graficoF").toggleClass("graficoExpand");
    $("#graficoCu").toggleClass("graficoExpand");
    $("#graficoBo").toggleClass("graficoExpand");
    $("#graficoCa30_60").toggleClass("graficoExpand");
    $("#graficoCa60_90").toggleClass("graficoExpand");
    $("#graficoK60_90").toggleClass("graficoExpand");
  });
});

function fixTitle() {
  $("section.affix").each(function () {
    var $this = $(this);
    var offset = $this.offset().top;
    var scrollTop = $(window).scrollTop();

    if (scrollTop > offset) {
      $this.addClass("fixed");
    } else {
      $this.removeClass("fixed");
    }
  });
}

/* SCROLL FIX TITLE */

$(document).ready(function () {
  $(window).scroll(fixTitle);
});

/* SLIDE SHOW */
$(document).ready(function () {
  $('#menu-toggle').click(function () {
    $('#nav-links').toggleClass('show');
  });
});

