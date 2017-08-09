$(document).ready(function () {
    // #17490
    if ($('.pagination').length) {

        window.onpopstate = function (event) {

            refreshContentPagination(location.href);

            if (document.getElementById('search-filter')) {
                /* reset data begin */
                $('#search-filter form').trigger('reset');
                $('#search-filter .one-filter-params').remove();
                resetFilterView();
                if (document.getElementById('sort-by')) {
                    $('#sort-by').prop('selectedIndex', 0);
                }
                /* reset data end */

                aTemp = location.href.split('/page/');
                if (typeof aTemp[1] !== 'undefined') {
                    aParams = aTemp[1].split('/');
                    // filer
                    var bIsHasFilreValue = false;
                    $('#search-filter form').find('.send-val:not([type=hidden])').each(function (index, el) {
                        var sElemName = $(this).attr('name');
                        var iIndexByArray = $.inArray(sElemName, aParams);
                        if (iIndexByArray !== -1 && typeof aParams[++iIndexByArray] !== 'undefined') {
                            $(this).val(decodeURIComponent(aParams[iIndexByArray]));
                            bIsHasFilreValue = true;
                        }
                    });
                    if (bIsHasFilreValue) {
                        $('#search-filter a[data-toggle="dropdown"]').first().addClass('active');
                    }
                    refreshFilterParametrsBox();
                    // sort
                    if (document.getElementById('sort-by') && $.inArray('order_field', aParams) && $.inArray('order_field', aParams)) {
                        var iIndexByArray = $.inArray('order_field', aParams);
                        var aSortVal = decodeURIComponent(aParams[++iIndexByArray]);
                        var iIndexByArray = $.inArray('order_dir', aParams);
                        var aSortDir = decodeURIComponent(aParams[++iIndexByArray]);
                        var iNumOptionSelected = 0;

                        $('#sort-by option').each(function (index) {
                            if ($(this).val() == aSortVal && $(this).data('order_dir') == aSortDir) {
                                iNumOptionSelected = index + 1;
                            }
                        });
                        if (iNumOptionSelected) {
                            $("#sort-by :nth-child(" + iNumOptionSelected + ")").prop("selected", "selected");
                        }
                    }
                }
            }
        };
    }
});

$('body').on("keyup", function (e) { // Feature #12835
    if (e.keyCode == 13 && $('.modal.in .modal-dialog .btn-primary').length && !$("*:focus").first().is("textarea")) {
        $('.modal.in .modal-dialog .btn-primary').click();
    }
});
$('body').on('keyup', '.has-error input', function () { // Bug #12948
    $(this).parent().removeClass('has-error');
});
$('body').on('keyup', 'input.inp-error', function () {
    $(this).removeClass('inp-error');
});
$('body').on('keyup', '.has-error textarea', function () { // Bug #12948
    $(this).parent().removeClass('has-error');
});
$('body').on('change', '.has-error select', function () { // Bug #12948
    $(this).parent().removeClass('has-error');
});
$("body").on("click", ".pagination a, .pagination-page a", function () {
    //#17490 begin
    if(!!(window.history && history.pushState)  && $(this).parent().parent().hasClass('pagination')) {
        history.pushState({}, '', $(this).attr("href"));
    }
    // #17490 end
    refreshContentPagination($(this).attr("href"));
    return false;
});

function markReadPanelAlertsForUser(iItemID, iItemType){
    $.post("/panel-alerts/mark-read/",
        {'item_id': iItemID, 'item_type': iItemType}, function (data) {
        }, "json");
}

function setCursorToTextField(sBlockName) { // Feature #12775
    sBlockName = sBlockName || 'body';
    bSetFocus = false;

    if (window.location.hash !== '')
        return false;

    if (window.location.pathname.indexOf('/emailservice/constructor') != -1) {
        return false;
    }

    if ($(sBlockName + ' input[type=text], ' + sBlockName + ' input[type=email], ' + sBlockName + ' input[type=password], ' + sBlockName + ' input[type=number], ' + sBlockName + ' textarea').length > 0) {
        // если найдено видимое пустое поле, ставим курсор в него
        $(sBlockName + ' input:visible[type=text], ' + sBlockName + ' input:visible[type=email], ' + sBlockName + ' input:visible[type=password], ' + sBlockName + ' input:visible[type=number]').each(function () {
            if ($.trim($(this).val()) === '' && !$(this).hasClass('no-set-focus') && !$(this).hasClass('datepicker_input')) {
                $(this).focus();
                bSetFocus = true;
                return false;
            }
        });
        if (!bSetFocus) {
            // видимое поле со значением, ставим курсор в него
            $(sBlockName + ' input:visible[type=text], ' + sBlockName + ' input:visible[type=email], ' + sBlockName + ' input:visible[type=password], ' + sBlockName + ' input:visible[type=number]').each(function () {
                if (!$(this).hasClass('no-set-focus') && !$(this).hasClass('datepicker_input')) {
                    $(this).focus();
                    bSetFocus = true;
                    return false;
                }
            });
        }
        if (!bSetFocus && $(sBlockName + ' textarea:visible').length) {
            $(sBlockName + ' textarea:visible').first().focus();
        }
        if (!bSetFocus) {
            //первое пустое поле, ставим курсор в него
            $(sBlockName + ' input[type=text], ' + sBlockName + ' input[type=email], ' + sBlockName + ' input[type=password], ' + sBlockName + ' input[type=number]').each(function () {
                if ($.trim($(this).val()) === '' && !$(this).hasClass('no-set-focus') && !$(this).hasClass('datepicker_input')) {
                    $(this).focus();
                    bSetFocus = true;
                    return false;
                }
            });
        }
        if (!bSetFocus && $(sBlockName + ' input[type=text]').length) {
            if (!$(this).hasClass('no-set-focus') && !$(this).hasClass('datepicker_input')) {
                $(sBlockName + ' input[type=text]').first().focus();
                bSetFocus = true;
            }
        }
        if (!bSetFocus && $(sBlockName + ' input[type=number]').length) {
            $(sBlockName + ' input[type=number]').first().focus();
            bSetFocus = true;
        }
        if (!bSetFocus && $(sBlockName + ' input[type=email]').length) {
            $(sBlockName + ' input[type=email]').first().focus();
            bSetFocus = true;
        }
        if (!bSetFocus && $(sBlockName + ' input[type=password]').length) {
            $(sBlockName + ' input[type=password]').first().focus();
            bSetFocus = true;
        }
        if (!bSetFocus && $(sBlockName + ' textarea').length) {
            $(sBlockName + ' textarea').first().focus();
        }
    }
}

$('#tab-bookmarks li a, div.bookmark-arrow, #search-filter a, .need-set-focus a, .set-focus-after-click').on("click", function () { // переход по вкладкам, фильтр
    if ($(this).attr('id') !== 'f_lang_switcher_link') {
        setTimeout(function () {
            setCursorToTextField();
        }, 500);
    }
});

detectModalWindow = false;


function initDatepicker($elms) {
    if ($elms.length > 0) {
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
        var oParams = {
            format: 'YYYY-MM-DD',
            maxDate: now,
            locale: (document.getElementById('current_lang') && ($.inArray($('#current_lang').text(), ['en', 'ua', 'ru']) !== -1)) ? $('#current_lang').text() : 'en'
        };
        if(document.getElementById('minDate')){
            oParams.minDate = new Date($('#minDate').val());
        }
        $elms.datetimepicker(oParams);
        $elms.on("click", function (e) {
            $(this).data('DateTimePicker').show();
        });
        $elms.on("dp.change", function (e) {
            var error = false;
            var sCurrentValue = $.trim($(this).val());
            if ($(this).attr('name') === 'date1') {
                var date2 = $('.datepicker_input[name="date2"]').val();
                if (date2 && date2 < sCurrentValue) {
                    error = true;
                }
            }
            if ($(this).attr('name') === 'date2') {
                var date1 = $('.datepicker_input[name="date1"]').val();
                if (date1 && date1 > sCurrentValue) {
                    error = true;
                }
            }
            if (error) {
                alert($('#filter_no_correct_date').text());
                var sThisID = $(this).attr('id');
                setTimeout(function () {
                    $('#' + sThisID).focus();
                }, 1000);
            }
            if (typeof onChangeDatepickerHook !== 'undefined' && $.isFunction(onChangeDatepickerHook)) {
                onChangeDatepickerHook();
            }

        });
    }

}

$(function () {


    setTimeout(function () {
        setCursorToTextField();
    }, 1000);
    setInterval(function () { // Feature #12775
        if (detectModalWindow === false && $('.modal-dialog:visible input[type=text], .modal-dialog:visible input[type=number], .modal-dialog:visible textarea').length) {
            setCursorToTextField('.modal-dialog:visible');
            detectModalWindow = true;
        }
        if ($('.modal-dialog:visible').length === 0) {
            detectModalWindow = false;
        }
    }, 1000);

    if ($('.collapser').length) {
        $('.collapser').collapse({
            toggle: false
        });
    }

    initDatepicker($('.datepicker_input'));

    $('.bootstrap-datetimepicker-widget').click(function (e) {
        e.stopPropagation();
    });
    $('#user-statistic-warpper .drop-link a').click(function () {
        $('#user-dropdown').addClass('hidden');
        window.location.href = $(this).attr('href');
    });
    $('.panel-lightblue .lightblue-heading a').click(function () {
        $('.panel-lightblue').removeClass('panel-blue-active');
        if ($(this).parent().parent().parent().find('.panel-collapse').first().hasClass('in') == false) {
            $(this).parent().parent().parent().addClass('panel-blue-active');
        }
    });

    var side_menu_trigger = 1;
    $('a.expandable').click(function () {
        $(this).toggleClass('expand-on');
        // Remember open menu
        var sAbbr = $(this).data('abbr');
        if (sAbbr && checkLocalStorage()) {
            var aOpenItemsLeftMenu = getLocalStorageItem('open_items_left_menu');
            var aCloseItemsLeftMenu = getLocalStorageItem('close_items_left_menu');
            if (aOpenItemsLeftMenu === null) {
                aOpenItemsLeftMenu = [];
            }
            if (aCloseItemsLeftMenu === null) {
                aCloseItemsLeftMenu = [];
            }
            if ($(this).hasClass('expand-on')) { // set open
                if (!in_array(sAbbr, aOpenItemsLeftMenu)) {
                    aOpenItemsLeftMenu.push(sAbbr);
                }
                if (in_array(sAbbr, aCloseItemsLeftMenu)) {
                    aCloseItemsLeftMenu.splice(aCloseItemsLeftMenu.indexOf(sAbbr), 1);
                }
            } else { // set close
                if (!in_array(sAbbr, aCloseItemsLeftMenu)) {
                    aCloseItemsLeftMenu.push(sAbbr);
                }
                if (in_array(sAbbr, aOpenItemsLeftMenu)) {
                    aOpenItemsLeftMenu.splice(aOpenItemsLeftMenu.indexOf(sAbbr), 1);
                }
            }
            setLocalStorageItem('open_items_left_menu', aOpenItemsLeftMenu);
            setLocalStorageItem('close_items_left_menu', aCloseItemsLeftMenu);
        }
    });
    if (checkLocalStorage()) {
        var aOpenItemsLeftMenu = getLocalStorageItem('open_items_left_menu');
        var aCloseItemsLeftMenu = getLocalStorageItem('close_items_left_menu');
        $('a.expandable').each(function () {
            var sAbbr = $(this).data('abbr');
            if (sAbbr) {
                if (in_array(sAbbr, aOpenItemsLeftMenu)) {
                    $(this).addClass('expand-on').next('ul.collapser').addClass('in');
                } else if (in_array(sAbbr, aCloseItemsLeftMenu)) {
                    $(this).removeClass('expand-on').next('ul.collapser').removeClass('in');
                }
            }
        });
    }

    $('#activate-side-menu-xs').on('click', function () {
        side_menu_trigger = sideMenuEffect(side_menu_trigger);
        $(window).resize(function () {
            if ($(window).width() > 1024) {
                sideMenuEffect(2);
            }
        });
    });
    $('#disable-all-tablet').on('click', function () {
        side_menu_trigger = sideMenuEffect(side_menu_trigger);
    });
    $('#activate-submenu-phone').on('click', function () {
        $('#accrodion-collapser-phone').slideToggle();
    });

    $('#btnToggleSidebar').on('click', function(){
        $('#side-menu').toggleClass('collapsed');
        var sideMenuState = readCookie('side_menu_state');
        if (!sideMenuState) {
            createCookie('side_menu_state', 'collapsed', 60*60*24*30);
        } else {
            eraseCookie('side_menu_state');
        }
    });

    setActiveMenuItem();
    // For mobile version
    //switch_menu_items();
    if ($('#es_lm_8 li').length == 0) {
        $('#es_lm_8').parent().hide();
    }

    refreshJsPagination();
    $('body').on('click', '#search-filter .reset', function () {
        var form = $(this).parents('form');
        $(form).find('.send-val')
            .val('')
            .removeAttr('value')
            .removeAttr('checked')
            .removeAttr('selected');

        $(form).submit();
        setTimeout(function () {
            $(form).find('.send-val-radio').each(function () {
                var mValue = ($(this).data('defaultval')) ? $(this).data('defaultval') : 0;
                if(parseInt(mValue) == 1) {
                    $(this).prop('checked', true);
                } else {
                    $(this).prop('checked', false);
                }
            });
            $(form).find('.send-val').each(function () {
                var mValue = ($(this).data('defaultval')) ? $(this).data('defaultval') : '';
                $(this).val(mValue);
            });
            $('.filter-fast-dates a').removeClass('active');
            $('.filter-fast-dates a.active-default').addClass('active');
        }, 1000);
        return false;
    });
    if (document.getElementById('search-filter')) {
        refreshFilterParametrsBox();
    }

    $('#search-filter form input').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $('#search-filter form input').submit();
        }
    });
    setUnreadClassByNewsIntoHeaber();
    $('#all-mark-as-read').on('click', 'a', function (e) {
        e.stopPropagation();
        $('#top-news .top-news-item.unread').each(function () {
            noteReadNews($(this).data('newsid'));
            $(this).removeClass('unread');
        });
        setUnreadClassByNewsIntoHeaber();
        $('#all-mark-as-read').hide();
    });
    if ($('#breadcrumbs').exists()) {
        parts = $('#breadcrumbs').html().split('<span>/</span>').reverse();
        page_title = parts.join(' / ').replace(/<\/?[^>]+>/gi, '');
        document.title = page_title;
    }
});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    if ($(window).width() < 1024) {
        if ($('.collapser').length) {
            $('#accordion .collapser').collapse('hide');
            $('#accordion').find('.expandable').removeClass('expand-on').addClass('collapsed');
        }
    }
    if ($('#f_lang_switcher_link').length) {
        $('#overflowed-menu-link').popover({
            placement: 'bottom',
            html: true,
            content: $('#overflowed-menu').html()
        });
        $('#f_lang_switcher_link').popover({
            placement: 'top',
            html: true,
            content: $('#lang-selector').html(),
            template: '<div class="popover fade lang-popover" role="tooltip"><div class="arrow"></div><ul class="popover-content"></ul></div>'
        });
        $('#overflowed-menu-link, #f_lang_switcher_link, #refferal_nav_banner_link').blur(function () {
            $(this).popover('hide');
        });
    }
    $('#service-menu-link').on('click', function () {
        $('.highlight-menu-item:not(.active)').toggleClass('hidden-item');
        $(this).find('span.animate').toggleClass('revert');
    });

    if ($('#refferal_nav_banner_link').length){
        $('#refferal_nav_banner_link').popover({
            placement: 'bottom',
            container: 'body',
            html: true,
            trigger: 'click',
            content: $('#refferal_nav_banner_html').html()
        });
    }


    $(window).on('refferalPopoverShow', function(e, data){
        if ($('#refferal_nav_banner_link').length){
            $('#refferal_nav_banner_link').focus().popover('show');
        }
        if (window.localStorage) {
            localStorage.setItem('refferalPopoverShow', 1);
        }
    });

    if (window.localStorage) {
        if (!parseInt(localStorage.getItem('refferalPopoverShow'))) {
            $(window).trigger('refferalPopoverShow', 'show');
        }
    }

});


function showEmailBlockAlertBox() {
    $('#content-warpper h1').first().after($('#blockalert-es').html());
    $('#blockalert-es').html('');
}

function imageInputPreview(input, outputSelector) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(outputSelector).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function forceHighlightMenu(url) {
    setTimeout(function () {
        $('#accordion a').each(function () {
            if ($(this).attr('href') == url) {
                $('#accordion a').removeClass('active');
                $(this).addClass('active');
                if ($(this).parent().parent().parent().prop('tagName') == 'LI') {
                    $(this).parent().parent().parent().find('a.expandable').addClass('expand-on');
                    $(this).parent().parent().parent().find('ul').addClass('in');
                }
            }
        });
    }, 100);
}

function setActiveMenuItem() {
    if (document.getElementById('refererService')) { // settings page
        var newUrl = '/' + $('#refererService').text() + '/';
    } else {
        var url = window.location.href.replace('http://', '').replace('https://', '');
        var newUrl = '';
        var start_save = false;
        for (var i = 0; i < url.length; i++) {
            if (url[i] == '/') {
                start_save = true;
            }
            if (url[i] == '#') {
                start_save = false;
                start_save = true;
            }
            if (start_save) {
                newUrl += url[i];
            }
        }
    }

    var i = 0;
    $('#menu-navbar').find('li a').reverseEach(function () {
        if ((newUrl.indexOf($(this).attr('href')) + 1 > 0) && $(this).attr('href') != '/') {
            $('#menu-navbar').find('li').removeClass('active');
            $(this).parent('li').addClass('active');
        }
    });

    $('#menu-navbar').find('li.highlight-menu-item a').reverseEach(function () {
        if ($(this).attr('href') == newUrl || $(this).attr('href') == (newUrl + '/') || $(this).attr('href') == newUrl.replace("/members", "") || $(this).attr('href') == (newUrl.replace("/members", "") + '/')) {
            if (((newUrl.indexOf($(this).attr('href')) + 1 > 0) || ((newUrl + '/').indexOf($(this).attr('href')) + 1 > 0)) && $(this).attr('href') != '/') {
                $('#menu-navbar').find('li').removeClass('active');
                $(this).parent('li').addClass('active');
            }
        }
    });
    $('#accordion a').each(function () {
//if( $( this ).attr( 'href' ) == newUrl || $( this ).attr( 'href' ) == (newUrl + '/') ) {
        if ((newUrl.indexOf($(this).attr('href')) + 1 > 0) && $(this).attr('href') != '/') {
            $('#accordion a').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().parent().parent().prop('tagName') == 'LI') {
                $(this).parent().parent().parent().find('a.expandable').addClass('expand-on');
                $(this).parent().parent().parent().find('ul').addClass('in');
            }
        }
    });
}


function sideMenuEffect(side_menu_trigger) {
    $('#side-menu').toggleClass('tablet-side-open');
    if (side_menu_trigger == 0) {
        side_menu_trigger = 1;
        setTimeout(function () {
            $('#menu-wrapper').css('width', 'auto');
            $('#content-warpper').css('width', 'auto');
        }, 1000);
        $('.collapser').collapse('hide');
        $('.expandable').removeClass('expand-on');
        $('#side-menu').animate({width: '62px'});
        $('#page-wrapper').animate({paddingLeft: '62px', 'background-position': '-168px'});
        $('#header').toggle('show');
        $('#accordion a span.sp-icon').animate({marginRight: '200px'}, 800);
        $('#activate-side-menu-xs').attr('style', 'display: block');
        $('#disable-all-tablet').attr('style', 'display: none');
    } else if (side_menu_trigger == 2) {
        side_menu_trigger = -1;
        $('#menu-wrapper').attr({style: ""});
        $('#content-warpper').attr({style: ""});
        $('#side-menu').attr({style: ""});
        $('#page-wrapper').attr({style: ""});
        $('#header').attr({style: ""});
        $('#accordion a span.sp-icon').attr({style: ""});
        $('#activate-side-menu-xs').attr({style: ""});
        $('#disable-all-tablet').attr({style: ""});
    } else {
        side_menu_trigger = 0;
        $('#menu-wrapper').css('width', $('#menu-wrapper').width() + 'px');
        $('#content-warpper').css('width', $('#content-warpper').width() + 'px');
        $('#side-menu').animate({width: '230px'});
        $('#page-wrapper').animate({paddingLeft: '230px', 'background-position': '0px'});
        $('#header').toggle('hide');
        $('#accordion a span.sp-icon').animate({marginRight: '5px'}, 250);
        $('#activate-side-menu-xs').attr('style', 'display: none !important');
        $('#disable-all-tablet').attr('style', 'display: block');
    }

    return side_menu_trigger;
}


function changeLang(lang) {
    $.post("/members/changelang/index/", {"changeLang": lang}, function (data) {
        window.location.href = window.location.href.replace("?l=en", "").replace("?l=ru", "");
        window.location.reload(true);
    });
}

jQuery.fn.reverseEach = (function () {
    var list = jQuery([1]);
    return function (c) {
        var el, i = this.length;
        try {
            while (i-- > 0 && (el = list[0] = this[i]) && c.call(list, i, el) !== false) {
                ;
            }
        }
        catch (e) {
            delete list[0];
            throw e;
        }
        delete list[0];
        return this;
    };
}());
jQuery.fn.exists = function () {
    return $(this).length;
};
function refreshContentPagination(url, no_scroll) {
    no_scroll = no_scroll || 0;
    //$.blockUI();
    $('#content-load').block();
    $("#content-load").load(url + " .content-ajax", function () {
        refreshJsPagination();
        //Call local function if exist
        if (typeof refreshContentPaginationHook !== 'undefined' && $.isFunction(refreshContentPaginationHook)) {
            refreshContentPaginationHook();
        }
        refreshFilterParametrsBox();
        if (!no_scroll && $(window).scrollTop() > 100) {
            $('#content-load').get(0).scrollIntoView();
        }
        //$.unblockUI();
        $('#content-load').unblock();
        setEventInputOnlyIntVal();
    });
}

function refreshFilterParametrsBox() {
    var sResult = '';
    var sRemoveParam = '<span data-placement="top" data-toggle="tooltip" onclick="resetFilterValue(this, \'{{VAL_NAME}}\');" class="sp-icon icon-delete" data-original-title="' + $('#stat_filter_clear').text() + '"></span>';
    var sParamBlank = '<span class="one-filter-params">{{NAME}}: <span>{{VAL}}</span> {{REMOVE_BLOCK}}</span>';
    var sParamMultiSelectBlank = '<span class="one-option"><span>{{VAL}}</span> <span data-placement="top" data-toggle="tooltip" onclick="resetFilterValue(this, \'{{VAL_NAME}}\', \'{{VAL}}\');" class="sp-icon icon-delete" data-original-title="' + $('#stat_filter_clear').text() + '"></span></span>';

    initDatepicker($('.content-ajax .datepicker_input'));

    $('#search-filter form').find('.send-val:not([type=hidden])').each(function (index, el) {
        if (el.value || $(this).data('defaultval')) {
            if (!el.value && $(this).data('defaultval')) {
                el.value = $(this).data('defaultval');
            }
            var sValue = '';
            switch (el.type) {
                case 'select-multiple':
                {
                    var aValues = $(el).find(":selected").map(function () {
                        return $(this).text();
                    }).get();
                    break;
                }
                case 'select-one':
                {
                    sValue = $(el).find(":selected").text();
                    break;
                }
                default:
                {
                    sValue = el.value;
                }
            }
            sValue = escapeHtml(sValue);
            if (($(this).hasClass('datepicker_input')) || $(this).attr('name') === 'date1' || $(this).attr('name') === 'date2') {
                var sCurrentLang = ($.inArray($('#current_lang').text(), ['en', 'ua', 'ru']) !== -1) ? $('#current_lang').text() : 'en';
                moment.locale(sCurrentLang);
                sValue = moment(sValue).format('LL');
            }
            var sParamTitle = $(el).prev('label').text().replace(':', '');
            var showLabel = true;
            var relatedElement = getRelatedElement($(this));
            if(relatedElement) {
                if (relatedElement.hasClass('send-val-radio')) {
                    if(!relatedElement.is(':checked')) {
                        showLabel = false;
                    }
                } else {
                    /** @TODO Define logic of non boolean values*/
                }
            }
            if (el.type !== 'select-multiple') {
                if (el.value != $(this).data('defaultval')) {
                    var sElParam = sParamBlank.replace('{{REMOVE_BLOCK}}', sRemoveParam);
                } else {
                    var sElParam = sParamBlank.replace('{{REMOVE_BLOCK}}', '');
                }
                sElParam = sElParam.replace('{{NAME}}', sParamTitle);
                sElParam = sElParam.replace('{{VAL_NAME}}', el.name);
                if (showLabel) {
                    sResult += sElParam.replace('{{VAL}}', sValue);
                }
            } else { // мультиселект
                var aAddressesStatus = ['3|4|5|11|15', '6|7|8|9|10|12|13|14|16', '5|15'];
                var sValJoin = $(el).find(":selected").map(function () {
                    return $(this).val();
                }).get();
                if ($.inArray(sValJoin.join('|'), aAddressesStatus) === -1) {
                    if (showLabel) {
                        sResult += '<span class="one-filter-params">{{NAME}}: '.replace('{{NAME}}', sParamTitle);
                        var sElParam = '';
                        for (var i = 0, length = aValues.length; i < length; i++) {
                            if (i in aValues) {
                                sElParam += ' ' + sParamMultiSelectBlank.replace(new RegExp("{{VAL}}", "gm"), aValues[i]);
                                sElParam = sElParam.replace('{{VAL_NAME}}', el.name);
                            }
                        }
                        sResult += sElParam + '</span>';
                    }
                } else { // email address-book page, detect special addresses statuses
                    var sTilte = '';
                    if (sValJoin.join('|') === '3|4|5|11|15') {
                        sTilte = $('#stat_task_read_yes').text();
                    }
                    if (sValJoin.join('|') === '6|7|8|9|10|12|13|14|16') {
                        sTilte = $('#stat_task_errors').text();
                    }
                    if (sValJoin.join('|') === '5|15') {
                        sTilte = $('#stat_task_unsubscribe').text();
                    }
                    if (showLabel) {
                        sResult += '<span class="one-filter-params">' + sParamTitle + ': <span class="one-option"><span>' + sTilte + '</span> <span data-placement="top" data-toggle="tooltip" onclick="resetFilterValueAddresses();" class="sp-icon icon-delete" data-original-title="' + $('#stat_filter_clear').text() + '"></span></span></span>';
                    }
                }
            }
        }
    });
    $('#search-filter .one-filter-params').remove();
    $('#search-filter a[data-toggle="dropdown"]').first().after(sResult);
    if (sResult) {
        $('#search-filter a[data-toggle="dropdown"]').first().addClass('active');
    } else {
        resetFilterView();
    }
    $('#search-filter .one-filter-params .icon-delete').tooltip({placement: 'top'});
}

function resetFilterView(){
    $('#search-filter a[data-toggle="dropdown"]').first().removeClass('active');
    $('#search-filter form').find('.send-val:not([type=hidden])').each(function () {
        $(this).val(($(this).data('defaultval')) ? $(this).data('defaultval') : '');
    });
    $('.filter-fast-dates a').removeClass('active');
    $('.filter-fast-dates a.active-default').addClass('active');
}

function resetFilterValue(oParamLabel, sElementName, sMultiSelectVal) {
    if (oParamLabel && sElementName) {
        $(oParamLabel).parent().remove();
        var oElement = $('#search-filter [name="' + sElementName + '"]');
        switch (oElement.prop('tagName')) {
            case 'SELECT':
            {
                if ((oElement.prop('multiple'))) {
                    $(oElement).find(":selected").each(function () {
                        if (this.text === sMultiSelectVal) {
                            this.selected = false;
                        }
                    });
                } else {
                    $(oElement).prop('selectedIndex', 0);
                    var relatedElement = getRelatedElement($(oElement));
                    if(relatedElement) {
                        if (relatedElement.hasClass('send-val-radio')) {
                            relatedElement.prop( "checked", false );
                        } else {
                            /** @TODO Define logic of non boolean values*/
                        }
                    }
                }
                break;
            }
            default:
            {
                oElement.val('');
            }
        }

        if (typeof resetFilterValueHook !== 'undefined' && $.isFunction(resetFilterValueHook)) {
            resetFilterValueHook(sElementName);
        }

        sendQuery($('#search-filter form'));
    }
}



function refreshJsPagination() {
    $('#go-to-page').on('click', function () {
        var pageNum = $('#number-go-to-page').val();
        if (parseInt(pageNum) > parseInt($('#paginator-max-val').val())) {
            pageNum = $('#paginator-max-val').val();
        }
        if (pageNum != 'undefined') {
            var url = $(this).attr("data-target");
            if (url.search("/page/") == -1) {
                var url = +"page/" + pageNum;
            } else {
                var regex = /page\/\d+/;
                url = url.replace(regex, "page/" + pageNum);
            }
            if(document.getElementById('tester_user')) { // #17490; @TODO: потом убрать!
                history.pushState({}, '', url);
            }
        }
        refreshContentPagination(url);
    });

    $('.tooltip.in').remove();
    $('[data-toggle="tooltip"]').tooltip();
    $('#number-go-to-page').keypress(function (e) {
        if (e.which == 13) {
            $('#go-to-page').click();
        }
    });
}

var Base64 = {
// private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }

        return output;
    },
    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);
        return output;
    },
    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },
    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {

            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }
}
var globalFilterAction = '';
var globalFilterStr = '';
function sendQuery(obj, get_url_params) {
    var str = '';
    $(obj).find('.send-val').each(function (index, el) {
        if (el.value) {
            switch (el.type) {
                case 'select-multiple':
                {
                    sValue = $(el).val().join('-');
                    break;
                }
                default:
                {
                    sValue = el.value;
                }
            }
            str += el.name + '/' + encodeURIComponent(sValue.replace(/\s/g, "+")) + '/';
        }
    });
    $(obj).find('.send-val-radio').each(function (index, el) {
        var value = $("input[name='" + el.name + "']:checked", obj).val()
        if (value) {
            str += el.name + '/' + value + '/';
        }
    });

    if(document.getElementById('sort-by')){ //
        str += 'order_field/' + encodeURIComponent($('#sort-by').val()) + '/order_dir/' +  encodeURIComponent($('#sort-by option:selected').data('order_dir')) + '/';
    }
    if(get_url_params){
        return str;
    }

    var action = $(obj).attr('action');
    $('#search-filter').removeClass('open');
    //str = escapeHtml(str);
    //action = escapeHtml(str);
    globalFilterAction = action;
    globalFilterStr = str;

    //console.log(str);
    //console.log(action);

    refreshContentPagination(action + str);
    return false;
}

function validEmail(email) {
    //var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[A-Za-zА-Яа-я0-9-]+\.)*[A-Za-zА-Яа-я0-9-]{0,66})\.([A-Za-zА-Яа-я0-9-]{2,15}(?:\.[A-Za-zА-Яа-я0-9-]{2})?)$/i; // #17705
    return filter.test(email);
}
function validUrl(url) {
    var u = /http(s?):\/\/[A-Za-zА-Яа-я0-9_\-\.]{3,}\.[A-Za-zА-Яа-я0-9_\-]{2,3}/;
    return u.test(url);
}
function removeErrorClass(obj) {
    var validation = $(obj).find(".valid, .thisInt, .no-zero");
    if (validation) {
        validation.each(function (index, el) {
            $(this).parent().removeClass('has-error');
        });
    }
}

function checkform(obj) {
    var validation = $(obj).find(".valid:visible:enabled").not('.disabled');
    // console.log(validation);
    var error = false;
    if (validation) {
        validation.removeClass('inp-txt-error');
        validation.parent().removeClass('has-error');
        validation.each(function (index, el) {
            // console.log(el.value);
            if ($(this).hasClass('email')) {
                validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
                strEmail = el.value;
                if (strEmail.search(validRegExp) == -1) {
                    error = true;
                    $(this).parent().addClass('has-error');
                }
            }
            else {
                if (!$.trim(el.value)) {
                    error = true;
                    $(this).parent().addClass('has-error');
                }
            }
        });
    }
    validation = $(obj).find(".thisInt");
    if (validation) {
        validation.each(function (index, el) {
            if (el.value) {
                if (!isThisInt(el.value)) {
                    error = true;
                    $(this).parent().addClass('has-error');
                }
            }
        });
    }

    validation = $(obj).find(".no-zero");
    if (validation) {
        validation.each(function (index, el) {
            if (el.value) {
                if (!isThisInt(el.value) || el.value < 1) {
                    error = true;
                    $(this).parent().addClass('has-error');
                }
            }
        });
    }
    //console.log(error);return false;
    if (!error) {
        var addCheck = $(obj).attr('rel');
        if (addCheck) {
            return eval(addCheck + '(obj);');
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function getFormatCurrentDateTime(is_get_time) {
    var d = new Date();
    var curr_min = (d.getMinutes() < 10) ? ('0' + d.getMinutes()) : d.getMinutes();
    var curr_hours = (d.getHours() < 10) ? ('0' + d.getHours()) : d.getHours();
    var curr_date = (d.getDate() < 10) ? ('0' + d.getDate()) : d.getDate();
    var curr_month = (d.getMonth() + 1 < 10) ? ('0' + (d.getMonth() + 1)) : d.getMonth() + 1;
    var curr_year = d.getFullYear();
    return curr_year + "-" + curr_month + "-" + curr_date + ((is_get_time) ? (' ' + curr_hours + ':' + curr_min) : '');
}

function sortTable(obj) {
    var field = $(obj).attr('data-order-fld');
    var dir = $(obj).attr('data-order-dir');
    var str = '';
    var filterForm = $('#filterForm');
    $(filterForm).find('.send-val').each(function (index, el) {
        if (el.value) {
            str += el.name + '/' + encodeURIComponent(el.value) + '/';
        }
    });
    str += 'order_field/' + field + '/order_dir/' + dir + '/';
    if (document.getElementById('segment-params')) {
        str += 'segment/' + $('#segment-params').text() + '/';
    }
    var action = $(filterForm).attr('action');
    if (document.getElementById('current_action')) {
        action = $.trim($('#current_action').text());
    }
    $.blockUI();
    $("#content-load").load(action + str + " .content-ajax", function () {
        refreshJsPagination();
        if (typeof refreshContentPaginationHook !== 'undefined' && $.isFunction(refreshContentPaginationHook)) {
            refreshContentPaginationHook();
        }
        if (document.getElementById('search-filter')) {
            refreshFilterParametrsBox();
        }
        $.unblockUI();
    });


}

function dialogOk(message, title) {
    BootstrapDialog.show({
        title: title,
        message: message,
        cssClass: 'custom-dialog',
        buttons: [{
            label: $('#dialog_ok_button').html(),
            cssClass: 'btn btn-primary',
            action: function (dialogItself) {
                dialogItself.close();
            }
        }]
    });
}

function changeCurrency(newCurrency) {
    var newCurrency = newCurrency || $("#iLang :selected").val();
    $.post("/members/changelang/changecurrency/", {"newCurrency": newCurrency}, function (data) {
        if (data.result) {
            window.location.reload(true);
        }
    }, "json");
}

function checkLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function setLocalStorageItem(key, value) {
    if (key) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
        }
    }
    return false;
}

function getLocalStorageItem(key) {
    if (key) {
        return JSON.parse(localStorage.getItem(key));
    }
    return false;
}

function removeLocalStorageItem(key) {
    if (key) {
        localStorage.removeItem(key);
        return true;
    }
    return false;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function in_array(what, where) {
    if (where) {
        for (var i = 0; i < where.length; i++) {
            if (what == where[i]) {
                return true;
            }
        }
    }
    return false;
}
function isThisInt(number) {
    return (!isNaN(number * 1))
}
function setEventInputOnlyIntVal() {
    $(".only-nums").keydown(function (e) {
        //console.log(e.keyCode);
        //console.log(e.ctrlKey);

        // Allow Shift+Ins, Ctrl+v
        if ((e.shiftKey && (e.keyCode == 45)) || (e.ctrlKey && (e.keyCode == 86))) {
            return;
        }

// Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}
function setEventInputOnlyPhoneVal() {
    $(".only-phone").keydown(function (e) {
// Allow: backspace, delete, tab, escape, space, +, enter and .
        if ($.inArray(e.keyCode, [32, 107, 46, 8, 9, 27, 13, 109, 110, 189, 190]) !== -1 ||
            // Allow: Shift and +
            (e.keyCode == 187 && e.shiftKey === true) ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}

$('.filter-fast-dates a').click(function () {
    $('.filter-fast-dates a').removeClass('active');
    $(this).addClass('active');
});
function tabMenuClick(obj, target_id) {
    $(obj).parent().parent().find('li').removeClass('active');
    $(obj).parent().addClass('active');
    $('#nav-tabs-holder .tab-item').addClass('hidden');
    $('#nav-tabs-holder #' + target_id).removeClass('hidden');
}

function BillingFunds() {

    this.changePanelCur = function () {
        BootstrapDialog.show({
            title: $('#change_currency_title').html(),
            message: $('#dialogCC').html(),
            cssClass: 'custom-dialog',
            buttons: [{
                label: $('#save_dialog_button').text(),
                cssClass: 'btn btn-primary',
                action: function (dialogItself) {
                    dialogItself.close();
                    changeCurrency($(".bootstrap-dialog-message #iLang :selected").val());
                }
            },
                {
                    label: $('#cancel_dialog_button').text(),
                    cssClass: 'btn btn-default',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }
                }]
        });
    };
}
;
billingFunds = new BillingFunds();
function noteReadNews(iNewsID) {
    if (iNewsID && checkLocalStorage()) {
        var aReadNews = getLocalStorageItem('read_news_list');
        if (aReadNews === null) {
            aReadNews = [];
        }
        if (!in_array(iNewsID, aReadNews)) {
            aReadNews.push(iNewsID);
            setLocalStorageItem('read_news_list', aReadNews);
        }
    }
    return false;
}

function setUnreadClassByNewsIntoHeaber() {
    if (checkLocalStorage()) {
        var iCountUndeadNews = 0;
        $('#top-news .top-news-item').each(function () {
            var aReadNews = getLocalStorageItem('read_news_list');
            if (aReadNews === null) {
                aReadNews = [];
            }
            if (!in_array($(this).data('newsid'), aReadNews)) {
                $(this).addClass('unread');
                iCountUndeadNews++;
            }
        });
        if ($('#news-additional-counter').length > 0) {
            var dop_counter = $('#news-additional-counter').val();
        } else {
            var dop_counter = 0;
        }

        if ($('.service-news').length > 0) {

            $('.service-news .alert-info .close').click(function () {
                nwsid = $(this).parent().data('newsid');
                noteReadNews(nwsid);
                $('.service-news .alert-info.hidden').first().removeClass('hidden').css('display', 'none').fadeIn(500);
            });
            $('.service-news .alert-info').each(function () {
                var aReadNews = getLocalStorageItem('read_news_list');
                if (aReadNews === null) {
                    aReadNews = [];
                }
                if (in_array($(this).data('newsid'), aReadNews)) {
                    $(this).removeClass('alert-info');
                }
                if (!in_array($(this).data('newsid'), aReadNews) && dop_counter < 3) {
                    $(this).removeClass('hidden');
                    dop_counter++;
                }
            });
        }
        $('#count-unread-news').text(iCountUndeadNews);
        if (!iCountUndeadNews) {
            $('#all-mark-as-read').hide();
            $('#count-unread-news').parent().removeClass('unread-news-link');
        }
    }
}

function var_dump(v) {
    switch (typeof v) {
        case "object":
            for (var i in v) {
                console.log(i + ": " + v[i]);
            }
            break;
        default: //number, string, boolean, null, undefined
            console.log(typeof v + ": " + v);
            break;
    }
}

function resetFilterValueAddresses() {
    $("#email-status").val('');
    sendQuery($('#search-filter form'));
}

function getContract(obj) {
    var file = $(obj).attr('href');
    if (readCookie('agreement_readed'))
        window.location.href = '/getmore/get-contract/?file=' + file;
    else {
        $('.agreement-readed').modal('show');
        $('.agreement-readed .btnagrclose').on('click', function () {
            if ($('.agreement-readed input[name="agrnoshow"]').is(':checked')) {
                createCookie('agreement_readed', '1', 360);
            }
            window.location.href = '/getmore/get-contract/?file=' + file;
        });
    }
}


// QUEST HOOK

function checkQuest(code) {
    var aQuestsCodes = getLocalStorageItem('quests_codes');
    if (aQuestsCodes === null) {
        aQuestsCodes = [];
    }

    if (!in_array(code, aQuestsCodes)) {
        var dataToSend;
        dataToSend = {
            code: code
        };
        $.ajax({
            url: '/quests/check-quest/',
            cache: false,
            type: 'post',
            dataType: 'json',
            data: dataToSend,
            success: function (data) {
                if (data.result) {
                    sendTagManager(code);
                } else {
                    $('#error-message-trigger').val('1');
                }
            }
        });
    }
}

function sendTagManager(event_name) {
    var aQuestsCodes = getLocalStorageItem('quests_codes');
    if (aQuestsCodes === null) {
        aQuestsCodes = [];
    }
    if (!in_array(event_name, aQuestsCodes)) {
        if ($('#t_gr_check').val() == 'yes') {
            $.ajax({
                url: '/quests/mark-progress/',
                type: 'post',
                data: {
                    code: event_name
                },
                success: function (response) {
                }
            });
        }
        dataLayer.push({'event': 'bonusTasks', 'eventType': event_name})
        aQuestsCodes.push(event_name);
        setLocalStorageItem('quests_codes', aQuestsCodes);
    }
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
}


function eraseCookie(name) {
    createCookie(name, "", -1);
}

function saveFeedback() {
    if ($('#feed_comment').val() != '') {
        $('#feedback-popup').modal('hide');
        $('#feedback-thanks').modal('show');
        $.ajax({
            url: '/index/feedback',
            dataType: "text",
            type: 'POST',
            data: {
                feedback: $('#feed_comment').val(),
                from: window.location.href,
                browserinfo: {
                    appname: navigator.appName,
                    appcodename: navigator.appCodeName,
                    appversion: navigator.appVersion,
                    useragent: navigator.userAgent,
                    platform: navigator.platform
                }
            },
            context: this,
            success: function (data) {
            }
        });
    } else {
        $('#beta-error-box').removeClass('hidden');
    }
}
var type95dop = 'auto';
function sendActionOrder(c_orderid, type) {
    if (!type)
        type = '100';
    if (!c_orderid)
        return false;
    var form = $(document.createElement('form')).css({display: 'none'}).attr("method", "POST");
    var input = $(document.createElement('input')).attr('name', 'orders').val(c_orderid);
    form.append(input);

    if (type == '100')
        form.attr("action", "/products/paymentwall/");
    else if (type == '30')
        form.attr("action", "/products/law/");
    else if (type == '40')
        form.attr("action", "/products/bank/");
    else if (type == '24')
        form.attr("action", "/products/privat24/");
    else if (type == '20')
        form.attr("action", "/products/yandexqiwi/");
    else if (type == '50') {
        var wmPurse = $('[name="wmCurrency"]:checked').val();
        var input = $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'purse')
            .val(wmPurse);
        form.append(input);
        form.attr("action", "/products/webmoney/");
    }
    else if (type == '110')
        form.attr("action", "/products/yandex/");
    else if (type == '200')
        form.attr("action", "/products/checkout/");
    else if (type == '95') {
        if (type95dop == 'auto') {
            $.blockUI();
            $.post('/orders/check-avanget-auto-order/', form.serialize(), function (data) {
                if (data.result == true) {
                    $.unblockUI();
                    $('#confirm_avps_card').html(data.card);
                    $('.avangateconfirm').on('hide.bs.modal', function (e) {
                        return false;
                    });
                    $('#avauto_button').click(function () {
                        type95dop = 'pay';
                        sendActionOrder(c_orderid, type);
                    });
                    $('#avcancel_button').click(function () {
                        type95dop = 'url';
                        sendActionOrder(c_orderid, type);
                    });
                    $('.avangateconfirm').modal('show');
                } else {
                    type95dop = 'url';
                    sendActionOrder(c_orderid, type);
                }

            }, 'json')
                .fail(function () {
                    type95dop = 'url';
                    sendActionOrder(c_orderid, type);
                    $.unblockUI();
                });
            return true;
        } else if (type95dop == 'pay') {
            $.blockUI();
            $.get(
                '/orders/pay-avanget-auto-order/', form.serialize(),
                function (data) {
                    if (data.result == true) {
                        if (data.mesage && data.mesage != '') {
                            $.blockUI({message: data.mesage});
                        }
                        setTimeout(function () {
                            document.location.href = '/orders/';
                        }, 4000);
                    } else {
                        type95dop = 'url';
                        sendActionOrder(c_orderid, type);
                    }
                }, 'json'
            )
                .fail(function () {
                    type95dop = 'url';
                    sendActionOrder(c_orderid, type);
                    $.unblockUI();
                });
            return true;
        }
        else
            form.attr("action", "/products/creditcard/");
    }
    else if (type == '25')
        form.attr("action", "/products/liqpay/");


    $("body").append(form);
    form.submit();
}

function num2word($num, $words) {
    //console.log($words);
    $num = $num % 100;
    if ($num > 19) {
        $num = $num % 10;
    }
    switch ($num) {
        case 1:
        {
            return($words[0]);
        }
        case 2:
        case 3:
        case 4:
        {
            return($words[1]);
        }
        default:
        {
            return($words[2]);
        }
    }
}

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

var a = {
    "Ё": "YO",
    "Й": "I",
    "Ц": "TS",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "SH",
    "Щ": "SCH",
    "З": "Z",
    "Х": "H",
    "Ъ": "'",
    "ё": "yo",
    "й": "i",
    "ц": "ts",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "щ": "sch",
    "з": "z",
    "х": "h",
    "ъ": "'",
    "Ф": "F",
    "Ы": "I",
    "В": "V",
    "А": "a",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "ZH",
    "Э": "E",
    "ф": "f",
    "ы": "i",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "zh",
    "э": "e",
    "Я": "Ya",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Ь": "'",
    "Б": "B",
    "Ю": "YU",
    "я": "ya",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "и": "i",
    "т": "t",
    "ь": "'",
    "б": "b",
    "ю": "yu",
    "ç": "c",
    "ı": "i",
    "ş": "s",
    "ü": "i",
    "ö": "o",
    "ğ": "g",
    "İ": "i"
};

function transliterate(word) {
    return word.split('').map(function (char) {
        return a[char] || char;
    }).join("");
}

function convertToSlug(Text) {
    return transliterate(Text)
        .toLowerCase()
        .replace(/{{.*?}}/g, '')
        .replace(/\|\[if.*?endif\]\|/g, '')
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]+/g, '')
        .replace(/(.)(?=\1)/g, '')
        .substring(0, 25);
}

function escapeHtml(string) {
    return String(string).replace(/\+/g, " ").replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

function disableCheckBoxInput(checkbox, target) {
    $(checkbox).change(function () {
        if (this.checked)
            $(target).prop('disabled', false);
        else
            $(target).prop('disabled', true);
    });
}
$(document).ready(function () {
    // old firefox sticky-footer fix
    var nAgt = navigator.userAgent;
    var is_firefox = nAgt.toLowerCase().indexOf('firefox') > -1;
    if (is_firefox) {
        var fullVersion = '' + parseFloat(navigator.appVersion);
        var nameOffset, verOffset;
        if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            fullVersion = nAgt.substring(verOffset + 8);
        }
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        if (majorVersion < 29) {
            $('#footer, #content-placeholder').addClass('unStick');
        }
    }
});

function getAddressesInfo(iAddressBookID, sEmailAddresses) {
    var dataToSend = {
        address_book_id: iAddressBookID,
        email: sEmailAddresses
    };
    $.blockUI();
    $.post('/emailservice/addressbooks/get-id-by-address/', dataToSend, function (response) {
        $.unblockUI();
        if (response != -1) {
            window.location.href = '/emailservice/addressbooks/emailview/id/' + response;
        }
    });
}

function check_url(url) {
    /*
     // @TODO: Change code above by this on new server after 2014/08/26: For Cyrillic domains test
     // But before need to install: sudo apt-get install php5-intl
     // Same in application/modules/members/modules/emailservice/models/RequestsFreeTariff.php
     var u = /^(http|https):\/\/?[-a-zа-я0-9]+([\-\.]{1}[a-zа-я0-9]+)*\.[a-zа-я]{2,5}(:[0-9]{1,5})?(\/.*)?/gi;
     */
    var u = /http(s?):\/\/[A-Za-zА-Яа-я0-9_\-\.]{1,}\.[A-Za-zА-Яа-я0-9_\-]{2,2}/;
    return u.test(url.toLowerCase());
}
;

//Init check values
setEventInputOnlyIntVal();
setEventInputOnlyPhoneVal();

function showAlert(sAlertText, sTitle, cssClass) {
    sTitle = sTitle || $('#information_modal_title').text();
    cssClass = cssClass || 'login-dialog';
    BootstrapDialog.show({
        title: '' + sTitle + '',
        message: sAlertText,
        cssClass: cssClass,
        id: 'alert-bootstrap',
        buttons: [{
            label: $('#dialog_ok_button').html(),
            cssClass: 'btn btn-primary',
            action: function (dialogItself) {
                dialogItself.close();
            }
        }]
    });
}
function number_format(number, decimals, dec_point, thousands_sep) {	// Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}

function addNewSenderEmailAddress(){
    var sender_email = $.trim($('#new_sender_email_address').val());
    if (!sender_email || !validEmail(sender_email)) {
        $('#new_sender_email_address').parent().addClass('has-error');
        return false;
    }
    $('#new_sender_email_address').parent().removeClass('has-error');
    if (!$('#new_sender_email_name').val()) {
        $('#new_sender_email_name').parent().addClass('has-error');
        return false;
    }
    if(location.href.indexOf('/tasks/add') !== -1){
        addTask.saveDataIntoSession();
    }
    //$('#new_sender_email_name').parent().removeClass('has-error');
    $('#add_sender_dialog').modal('hide');
    var dataToSend = {
        sender_email_address: sender_email,
        sender_email_name: $('#new_sender_email_name').val()
    };
    $.blockUI();
    $.ajax({
        url: '/members/emailservice/senders/validate-email',
        type: 'post',
        data: { 'email': sender_email },
        cache: false,
        dataType: 'json',
        success: function( response ) {

            if( response.type ) {
                $.ajax({
                    url: '/emailservice/senders/add',
                    type: 'post',
                    data: dataToSend,
                    cache: false,
                    dataType: 'json',
                    success: function (response) {
                        if (response.type) {
                            $.ajax({
                                url: '/emailservice/senders/sendactivationcode',
                                data: {sender_email_id: response.sender_email_id},
                                cache: false,
                                type: 'post',
                                success: function (responseText) {
                                    $.unblockUI();
                                    responseText = JSON.parse(responseText);
                                    if (responseText.type) {
                                        BootstrapDialog.show({
                                            title: '<h4>' + $('#information_modal_title').text() + '</h4>',
                                            message: '<p style="max-width: 300px;" class="dialog_message">' + responseText.message + '</p>',
                                            cssClass: 'custom-dialog',
                                            buttons: [{
                                                label: $('#dialog_ok_button').text(),
                                                cssClass: 'btn btn-primary custom-dialog',
                                                action: function (dialog) {
                                                    dialog.close();
                                                    if(location.href.indexOf('/emailservice/senders') !== -1){
                                                        refreshContentPagination('/emailservice/senders/');
                                                    } else if(location.href.indexOf('/automation/edit') === -1) {
                                                        window.location.href = '/emailservice/senders/';
                                                    }
                                                }
                                            }]
                                        });
                                    }
                                }
                            });
                        } else {
                            $.unblockUI();
                            if(typeof (response.isfree) != 'undefined' && response.isfree==1){
                                BootstrapDialog.show({
                                    title: '<h4>' + $('#information_modal_title').text() + '</h4>',
                                    message: response.comment,
                                    cssClass: 'wd600',
                                    onhide: function(){
                                        $('#add_sender_dialog_call_button').addClass('disabled');
                                        $('#alert_sender_addresses_more_than_3').removeClass('hidden');
                                    },
                                    buttons: [{
                                        label: $('#goto_pay_tariff_text').text(),
                                        cssClass: 'btn btn-primary custom-dialog',
                                        action: function (dialog) {
                                            dialog.close();
                                            window.location.href = '/emailservice/billing/tariffs/';
                                        }
                                    }]
                                });
                            }else{
                                showAlert(response.comment, '', 'wd600');
                            }
                        }
                    }
                });
            } else {
                $.unblockUI();
                $('#new_sender_email_address').val('');
                showAlert(response.comment, '', 'wd600');
            }
        }
    })
}

function getRelatedElement(element) {
    var related_on = element.data('related_on');
    if (typeof  related_on != 'undefined') {
        return $('[name=' + related_on + ']');
    }
    return false;
}

function isEmoji(str) {
    var ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
    ];
    if (str.match(ranges.join('|'))) {
        return true;
    } else {
        return false;
    }
}

function stripTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}