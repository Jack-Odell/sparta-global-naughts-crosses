$(function () {

  var xTurn = true;
  var oTurn = false;
  var xMark = $('td').hasClass('X');
  var oMark = $('td').hasClass('O');

  $('td').click(function () {
    if (xTurn) {
      if (xMark || oMark) {
        cantPlace();
      } else {
        $(this).html('X').addClass('X');
        xTurn = false;
        oTurn = true;
      }
    }
    else if (oTurn) {
      if (xMark || oMark) {
        cantPlace();
      } else {
        $(this).html('O').addClass('O');
        oTurn = false;
        xTurn = true;
      }
    }
  });

  function cantPlace() {
    alert("Can't place that there!");
  }
});
