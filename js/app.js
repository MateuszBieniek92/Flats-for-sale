$(function () {
    var mobile = window.matchMedia("screen and (max-width: 768px)");

    //// show hide menu

    var $hamburger = $('.menu__button');
    var $menu = $('.menu');

    if (mobile.matches) {
        $menu.addClass('show-hide-menu');

        $hamburger.on('click', function () {
            $menu.slideToggle().toggleClass('is-active');
        });

    } else {
        $menu.removeClass('show-hide-menu');
    }
    
    //// table move btns

    var flatsTable = $('.flats-table');
    var tableContent = $('.table-content');
    var $leftTableBt = $('.left__table__btn');
    var $rightTableBt = $('.right__table__btn');

    function moveTableBtns() {

        $rightTableBt.click(function () {
            tableContent.css("left", "-=79.5");

        });
        $leftTableBt.click(function () {
            tableContent.css("left", "+=79.5");
        });
    }
    
    //// filter__buttons 

    var $checkBtn = $('.button');

    $checkBtn.click(function () {
        $(this).next().slideToggle();

        return false;
    });

    //// sort and filter__buttons

    var flatNumberSortUp = $('.sort__up');
    var flatNumberSortDown = $('.sort__down');

    function sortItemsUp(a, b) {
        return a.innerHTML > b.innerHTML ? 1 : -1;
    }

    function sortItemsDown(a, b) {
        return a.innerHTML < b.innerHTML ? 1 : -1;
    }

    //// flat__buttons

    $groundLeftBtn = $('.left__ground');
    $groundRightBtn = $('.right__ground');
    $floorLeftBtn = $('.left__floor');
    $floorRightBtn = $('.right__floor');

    $flatImg = $('.flat__view').find('img');
    $location = $('.location');
    $descHeader = $('.desc__header');

    $groundLeftBtn.click(function () {
        $flatImg.attr('src', 'images/ground__left.png');
        $descHeader.html('<span>powierzchnia użytkowa<span class="measure">34,39 m<p>2</p></span></span>');
        $location.children().eq(3).html('<div class="circle">4</div><span>garderoba</span><span class="measure">5, 50 m<p>2</p></span>');
        $location.children().eq(4).html('<div class="circle">5</div><span>korytarz</span><span class="measure">7, 51 m<p>2</p></span>');
        $location.children().eq(5).html('');
        $location.children().eq(6).html('');

    });
    $groundRightBtn.click(function () {
        $flatImg.attr('src', 'images/ground__right.png');
        $descHeader.html('<span>powierzchnia użytkowa<span class="measure">81,61 m<p>2</p></span></span>');
        $location.children().eq(0).html('<div class="circle">1</div><span>garderoba</span><span class="measure">2, 88 m<p>2</p></span>');
        $location.children().eq(1).html('<div class="circle">2</div><span>salon <br> z aneksem kuchennym</span><span class="measure">7, 51 m<p>2</p></span>');
        $location.children().eq(2).html('<div class="circle">3</div><span>pokój</span><span class="measure">11, 79 m<p>2</p></span>');
        $location.children().eq(3).html('<div class="circle">4</div><span>pokój</span><span class="measure">13, 31 m<p>2</p></span>');
        $location.children().eq(4).html('<div class="circle">5</div><span>łazienka</span><span class="measure">4, 55 m<p>2</p></span>');
        $location.children().eq(5).html('');
        $location.children().eq(6).html('');
    });
    $floorLeftBtn.click(function () {
        $flatImg.attr('src', 'images/floor__left.png');
        $descHeader.html('<span>powierzchnia użytkowa<span class="measure">58,61 m<p>2</p></span></span>');
        $location.children().eq(0).html('<div class="circle">1</div><span>pokój</span><span class="measure">15, 53 m<p>2</p></span>');
        $location.children().eq(1).html('<div class="circle">2</div><span>łazienka</span><span class="measure">6, 33 m<p>2</p></span>');
        $location.children().eq(2).html('<div class="circle">3</div><span>przedpokój</span><span class="measure">8, 05 m<p>2</p></span>');
        $location.children().eq(3).html('<div class="circle">4</div><span>pokój</span><span class="measure">19, 53 m<p>2</p></span>');
        $location.children().eq(4).html('<div class="circle">5</div><span>garderoba</span><span class="measure">4, 62 m<p>2</p></span>');
        $location.children().eq(5).html('<div class="circle">5</div><span>hol</span><span class="measure">2, 50 m<p>2</p></span>');
        $location.children().eq(6).html('<div class="circle">5</div><span>salon <br> z aneksem kuchennym</span><span class="measure">13, 79 m<p>2</p></span>');
    });
    $floorRightBtn.click(function () {
        $flatImg.attr('src', 'images/floor__right.png');
        $descHeader.html('<span>powierzchnia użytkowa<span class="measure">70, 32 m<p>2</p></span></span>');
        $location.children().eq(0).html('<div class="circle">1</div><span>salon <br> z aneksem kuchennym</span><span class="measure">25, 50 m<p>2</p></span>');
        $location.children().eq(1).html('<div class="circle">2</div><span>łazienka</span><span class="measure">6, 33 m<p>2</p></span>');
        $location.children().eq(2).html('<div class="circle">3</div><span>pokój</span><span class="measure">12, 05 m<p>2</p></span>');
        $location.children().eq(3).html('<div class="circle">4</div><span>pokój</span><span class="measure">9, 53 m<p>2</p></span>');
        $location.children().eq(4).html('<div class="circle">5</div><span>garderoba</span><span class="measure">1, 62 m<p>2</p></span>');
        $location.children().eq(5).html('<div class="circle">5</div><span>hol</span><span class="measure">5, 50 m<p>2</p></span>');
        $location.children().eq(6).html('<div class="circle">5</div><span>przedpokój</span><span class="measure">3, 79 m<p>2</p></span>');
    });


    //// form validation 

    var $form = $('.footer__form').find('form').children();

    var $formName = $form.first();
    var $formMail = $form.eq(2);
    var $formText = $form.eq(4);
    var $formCodeValidation = $('.form__code__validation');
    var $formSubmitBtn = $('.form__submit__btn');

    var $labelName = $form.eq(1);
    var $labelMail = $form.eq(3);
    var $labelText = $form.eq(5);
    var $labelCodeValidation = $form.eq(7);
    var $labelConfirm = $('.label__confirm');

    // labels reset

    function resetLabels() {
        $labelName.html('');
        $labelMail.html('');
        $labelText.html('');
        $labelCodeValidation.html('');
    }

    // inputs border 
    $formName.removeClass('border-input');
    $formMail.removeClass('border-input');
    $formText.removeClass('border-input');
    $formCodeValidation.removeClass('border-input');

    function borderInput() {
        $formName.on('click', function () {
            $(this).toggleClass('border-input');
            $formMail.removeClass('border-input');
            $formText.removeClass('border-input');
            $formCodeValidation.removeClass('border-input');

        });
        $formMail.on('click', function () {
            $formName.removeClass('border-input');
            $(this).toggleClass('border-input');
            $formText.removeClass('border-input');
            $formCodeValidation.removeClass('border-input');

        });
        $formText.on('click', function () {
            $formName.removeClass('border-input');
            $formMail.removeClass('border-input');
            $(this).toggleClass('border-input');
            $formCodeValidation.removeClass('border-input');

        });
        $formCodeValidation.on('click', function () {
            $formName.removeClass('border-input');
            $formMail.removeClass('border-input');
            $formText.removeClass('border-input');
            $(this).toggleClass('border-input');

        });
    }

    // submit btn 

    $formSubmitBtn.on('click', function () {
        var $nameVal = $formName.val();
        var $mailVal = $formMail.val();
        var $textVal = $formText.val();
        var $codeVal = $formCodeValidation.val();

        function resetInput() {
            $formName.val('');
            $formMail.val('');
            $formText.val('');
            $formCodeValidation.val('');
        }

        if ($nameVal.length > 5) {
            if ($mailVal.indexOf("@") > -1) {
                if ($textVal.length > 10) {
                    if ($codeVal === 'AXK65GH') {
                        resetInput();
                        resetLabels();
                        $labelConfirm.html('Formularz został wysłany!');
                    } else {
                        resetLabels();
                        $labelCodeValidation.html('Podany tekst nie jest taki sam!');
                        $formName.css('border', 'none');
                        $formMail.css('border', 'none');
                        $formText.css('border', ' none');
                        $formCodeValidation.css('border', ' 2px solid red');
                    }
                } else {
                    resetLabels();
                    $labelText.html('Podany tekst jest za krótki!');
                    $formName.css('border', 'none');
                    $formMail.css('border', 'none');
                    $formText.css('border', '2px solid red');
                    $formCodeValidation.css('border', ' none');
                }
            } else {
                resetLabels();
                $labelMail.html('Podana adres email jest nie prawidłowy!');
                $formName.css('border', 'none');
                $formMail.css('border', '2px solid red');
                $formText.css('border', ' none');
                $formCodeValidation.css('border', ' none');
            }
        } else {
            $labelName.html('Podana wartość jest za krótka!');
            $formName.css('border', '2px solid red');
            $formMail.css('border', ' none');
            $formText.css('border', ' none');
            $formCodeValidation.css('border', ' none');

        }

    });

    //// show__form__btn

    $showFormBtn = $('.show__form');
    $arrowRotate = $showFormBtn.find('.arrow__down');

    if (mobile.matches) {
        $form.css('display', 'none');
        $formSubmitBtn.css('display', 'none');
        $showFormBtn.click(function (e) {
            e.preventDefault();
            $(this).text($(this).text() == 'MNIEJ' ? 'WIĘCEJ' : 'MNIEJ');
            $(this).append('<div class="arrow"><div class="arrow__content arrow__down"></div></div>');
            $form.slideToggle();
            $formSubmitBtn.slideToggle();
        });
    }

    //// function start

    borderInput();
    moveTableBtns();
});