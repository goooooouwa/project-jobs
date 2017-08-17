if(typeof social_services == "undefined") {
    var social_services = '';
}
if(typeof without_phone == "undefined") {
    var without_phone = 0;
}
$(document).ready(function(){
    var promocode = '';
    if(social_services=='emailservice'){
        promocode = $( '#promocode' ).val();
    }
    if(without_phone){
        without_phone = 1;
    }
    if ($('#faceebook_btn, .btn-fb').length || $('#google_btn, .btn-tw').length) {
        $.ajax({
            type : "GET",
            url: 'https://login.sendpulse.com/login/social/?callback=?',
            data: { social_services: social_services, promocode:promocode, without_phone:without_phone },
            dataType: 'jsonp',
            success: function (data) {
                if (data.results>0) {
                    $('#faceebook_btn, .btn-fb').attr('href',data.facebook);
                    $('#google_btn, .btn-tw').attr('href',data.google);
                    $( '.btn-social' ).on( 'click', function( event ) {
                        popupCenter( $( this ).attr( 'href' ), 580, 470 );
                        event.preventDefault();
                    } );
                }
            }
        });
    }

});
var newWindow = null;
var popupCenter = function( url, w, h ) {
    // Fixes dual-screen position
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 3) - (h / 3)) + dualScreenTop;
    if(newWindow!=null){
        if(!newWindow.closed) {
            newWindow.focus();
            return;
        }
    }
    newWindow = window.open( url, '_blank', 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left );

    // Puts focus on the newWindow
    if( window.focus ) {
        newWindow.focus();
    }
};
function getCookie( name ) {
    var matches = document.cookie.match( new RegExp(
        "(?:^|; )" + name.replace( /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1' ) + "=([^;]*)"
    ) );
    return matches ? decodeURIComponent( matches[1] ) : '';
}
function registartionfromSocial( services ) {
    var captcha_input = $( '#captcha-input' ).val();
    var captcha_id = $( '#captcha-id' ).val();
    var email = $( "#iEmail" ).val();
    if(email.length==0){
        email = $( "#siemail" ).html();
    }
    if (getCookie('_ga'))
        var clientid = getCookie('_ga').match(/[0-9]*.[0-9]*$/g)[0];
    else
        var clientid = '';
    //#14654
    if (getCookie('last_visit'))
        var last_visit = getCookie('last_visit');
    else
        var last_visit = '';
    //#14827
    if (getCookie('lp_visit'))
        var lp_visit = getCookie('lp_visit');
    else
        var lp_visit = 0;
    var GUAAccount = $.trim( $( "input[name=GUAAccount]" ).val() );
    var password = $.trim( $( "input[name=password]" ).val() );
    if(password.length==0){
        password = $( "#sipassword" ).html();
    }
    var firstname = $.trim( $( "input[name=firstname]" ).val() );
    var country = $( "select[name=country] option:selected" ).val();
    var promocode = '';

    var telephone_number = $("#iPhone").intlTelInput("getNumber");
    if(telephone_number.length==0) {
        telephone_number = $.trim($("input[name=telephone_number]").val());
    }
    var isAntispam = $( '#isAntiSpam' ).is( ':checked' );
    var validOk = true;
    var errorMessage = new String();
    var focus = "";

    var social_name = $.trim( $( "input[name=social_name]" ).val() );
    var social_id = $.trim( $( "input[name=social_id]" ).val() );
    var social_picture = $.trim( $( "input[name=social_picture]" ).val() );
    var userapp = $.trim( $( "input[name=userapp]" ).val() );

    if( firstname.length < 2 ) {
        validOk = false;
        errorMessage += '<p>' + $( "#error_firstname_short" ).text() + '</p>';
        focus = 'input[name=firstname]';
    }
    if(email.length>0 && validEmail( email ) ) {
        $.ajaxSetup( {async: false} );
        $.post( '/registration/checkemail', {'email': email}, function( data ) {
            async:false
            if( !data.result ) {
                validOk = false;
                errorMessage += '<p>' + $( "#error_already" ).html() + '</p>';

            }
        }, 'json' );
        $.ajaxSetup( {async: true} );
    } else {
        validOk = false;
        errorMessage += '<p>' + $( "#error_email" ).text() + '</p>';
    }

    if( country == 'null' ) {
        validOk = false;
        errorMessage += '<p>' + $( "#error_country" ).text() + '</p>';
        if( !focus.length ) {
            focus = 'select:[name=country]';
        }
    }

    if( telephone_number.length < 5 ) {
        validOk = false;
        errorMessage += '<p>' + $( "#error_telephone" ).text() + '</p>';
        if( !focus.length ) {
            focus = 'input[name=telephone_number]';
        }
    } else if (telephone_number!='emptyenphone') {
        var cc = $('#iPhone').intlTelInput('getSelectedCountryData');
        countryCode = cc.iso2;
        $.ajaxSetup( {async: false} );
        $.post( '/members/registration/checkphone', {'phone': telephone_number, 'countyCode': countryCode}, function( data ) {
            if( !data.phone ) {
                $( '#mError' ).empty().html( '<p>' + $( '#error_telephone' ).html() + '</p>' ).removeClass( 'hide' );
                $( '#iPhone' ).focus();
                errorMessage += '<p>' + $( '#error_telephone' ).html() + '</p>';
                validOk = false;
            } else if( !data.result ) {
                $( '#mError' ).empty().html( '<p>' + $( '#error_phone_already' ).html() + '</p>' ).removeClass( 'hide' );
                errorMessage += '<p>' + $( '#error_phone_already' ).html() + '</p>';
                $( '#iPhone' ).focus();
            } else {
                $( '#mError' ).addClass( 'hide' );
                validOk = true;
            }
        }, 'json' );
        $.ajaxSetup( {async: true} );
    }

    if( !isAntispam ) {
        validOk = false;
        errorMessage += '<p>' + $( "#error_antispam" ).text() + '</p>';
        if( !focus.length ) {
            focus = '#isAntiSpam';
        }
    }

    if( services == 'emailservice' ) {
        promocode = $( '#promocode' ).val();
    }
    var bfingerprint = '';
    if(typeof fingerprintresult != 'undefined' && fingerprintresult.length > 0 ){
        bfingerprint = fingerprintresult;
    }

    var is_recaptcha = false;
    var recaptcha_response = "";
    if(grecaptcha){
        if(typeof(gRecaptchaRegFromId) !== "undefined" && $('#gRecaptchaRegFrom').is(':visible')){
            is_recaptcha = true;
            recaptcha_response = grecaptcha.getResponse(gRecaptchaRegFromId);
        }else if(typeof(gRecaptchabuyNowModalId) !== "undefined" && $('#gRecaptchabuyNowModal').is(':visible')){
            is_recaptcha = true;
            recaptcha_response = grecaptcha.getResponse(gRecaptchabuyNowModalId);
        }
    }

    if(is_recaptcha){
        if(!recaptcha_response){
            validOk = false;
            var error_msg = $('#error_recapthca').text();
            $('.error-gRecaptcha').html(error_msg);
            errorMessage += '<p>' + error_msg + '</p>';
        }else{
            $('.error-gRecaptcha').html('');
        }
    }


    if( !validOk ) {
        $( '#mError' ).removeClass( 'hide' );
        $( '#mError' ).empty();
        $( '#mError' ).append( errorMessage );
        $( '#mError' ).parent().show();
        $( focus ).focus();
        return false;
    }
    $.blockUI();
    $( '#regButton' ).prop( 'disabled', true );

    $.post( "/members/registration/registr", {
        'reCaptcha'       : recaptcha_response,
        'promocode'       : promocode,
        'ref'       : $( '#ref' ).val(),
        'source'          : source,
        'captcha[input]'  : captcha_input,
        'captcha[id]'     : captcha_id,
        'email'           : email,
        'password'        : password,
        'firstname'       : firstname,
        'telephone_number': telephone_number,
        'country'         : country,
        'services'        : services,
        'GUAAccount'      : GUAAccount,
        'clientid'        : clientid,
        'social_name'	  : social_name,
        'social_id'	  	  : social_id,
        'social_picture'  : social_picture,
        'userapp'		  : userapp,
        'first_visit'     : getCookie('first_visit'),
        'bfingerprint'    : bfingerprint,
        'lp_visit'        : lp_visit,
        'last_visit'      : last_visit
    }, function( data ) {
        if( data.result ) {
            if (typeof yaCounter30384532 != "undefined") {
                yaCounter30384532.reachGoal( services );
            }
            /*dataLayer.push( {'event': 'registration', 'registrationLabel': services, 'registrationAction':social_name, 'userId': data.user_id, 'eventCallback': function(){
                window.location.href = "/members/" + data.redirectServices;
            }} );*/

            // #15108 переход на создание рассылки
            if (data.backurl && data.backurl.length > 0) {
                window.location.href = data.backurl;
            } else {
                window.location.href = "/members/" + data.redirectServices;
            }
        } else {
            $.unblockUI();
            $( '#regButton' ).prop( 'disabled', false );
            $( '#mError' ).empty();
            $( '#mError' ).html( '<p>' + data.error_message + '</p>' );
            $( '#mError' ).parent().show();

            if( data.error_code == '-1' ) {
                $( "input[name=email]" ).val( '' );
                window.location.href = "#registartion";
            } /*else if( data.error_code == '-2' ) {
             $( "input[name=telephone_number]" ).val( '' );
             window.location.href = "#registartion";
             } */ else if( data.error_code == '-2' ) {
                //Captcha reload
                $( '#captcha' ).html( '' ).html( data.captcha );
            } else {
                window.location.reload( true );
            }
        }
    }, "json" );
}