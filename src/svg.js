$("#circle").on("click", function () {
    $(this).toggleClass("bigger");
  });
  
$("#rect").on("click", function () {
    $(this).toggleClass("pause");
});
  
$("#polygon").on("click", function () {
    $(this).toggleClass("reverse");
});

$('h1 span').css('color', '#00adb5');
  