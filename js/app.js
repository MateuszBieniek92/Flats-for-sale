$(function () {

    
    var flatsTable = $(".flats-table");
    var tableContent = $(".table-content");
    var $leftTableBt = $('.left__table__btn');
    var $rightTableBt = $('.right__table__btn');



    $rightTableBt.click(function () {
        tableContent.css("left", "-=79.5");

    });
    $leftTableBt.click(function () {
        tableContent.css("left", "+=79.5");
    });

});