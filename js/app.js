$(function () {
    var mobile = window.matchMedia("screen and (max-width: 768px)");


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

    //// function start

    borderInput();
    moveTableBtns();
});