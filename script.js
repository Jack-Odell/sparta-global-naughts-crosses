$(function () {

  var xTurn = true;
  var oTurn = false;

  //On click of tile, replaces the innerHTML with an X or O depending who's turn it is
  //Currently can't stop ovewrite of tile
  $('td').click(function () {
    var xMark = isXMark();
    var oMark = isOMark();
    turnIndicator();
    isXMark();
    isOMark();
    if (xTurn) {
      if (!xMark || !oMark) {
        cantPlace();
      } else {
        $(this).html('X').addClass('X');
        xTurn = false;
        oTurn = true;
      }
    }
    else {
      if (!xMark || !oMark) {
        cantPlace();
      } else {
        $(this).html('O').addClass('O');
        oTurn = false;
        xTurn = true;
      }
    }
  });
  //Alert to stop player from clicking on a tile that is filled
  function cantPlace() {
    alert("Can't place that there!");
  }
  //Changes the heading that shows who's turn is next
  function turnIndicator () {
    var xName = "it's X's turn!";
    var oName = "it's O's turn!";
     if (xTurn) {
       $('.playerTurn').html(xName);
     } else {
       $('.playerTurn').html(oName);
     }
  }

  function isXMark () {
    var isXMarked = $('td').hasClass('X');
    return true;
  }
  function isOMark () {
    var isOMarked = $('td').hasClass('O');
    return true;
  }
});
