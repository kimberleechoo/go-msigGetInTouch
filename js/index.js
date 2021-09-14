function resize() {
    var $window = $(window);
    var windowWidth = $window.width();
    console.log('width is:' + windowWidth);
    if (windowWidth > 767) {
        console.log('width is more than 767px');
        $('#contactUs').addClass('in');
        $('#collapseFooter1').addClass('in collapse');
        console.log('adding class');

        $('#collapseFooter2').addClass('in collapse');
        $('#collapseFooter3').addClass('in collapse');
        $('#collapseFooter4').addClass('in collapse');
    } else if (windowWidth < 767) {
        console.log('width is below 767')
        $('#contactUs').removeClass('in');
        $('#collapseFooter1').removeClass('in');
        console.log('removing class');


        $('#collapseFooter2').removeClass('in');
        $('#collapseFooter3').removeClass('in');
        $('#collapseFooter4').removeClass('in');
    }
}

$(document).ready(function() {
    resize();

    $(window).resize(function(event) {
        console.log(event);
        // var winWidth = $(window).width();
        // console.log('width is ::::' + winWidth);
        resize();
    });


    console.log(" 🙌🙌🙌 ");
    $('#productEnquiryFormSection').hide();
    $('#feedbackFormSection').hide();
    $('#dataCorrectionFormSection').hide();
    $('#generalEnquiryForm').show();

    // choose product type 
    $("input[name=typeofEnquiry]").change(function() {
        if ($(this).val() == "General Enquiry") {
            console.log("this is general enq form");
            $('#generalEnquiryForm').show();
            $('#productEnquiryFormSection').hide();
            $('#feedbackFormSection').hide();
            $('#dataCorrectionFormSection').hide();
        } else if ($(this).val() == "Product Enquiry") {
            console.log("this is product enquiry");
            $('#productEnquiryFormSection').show();
            $('#generalEnquiryForm').hide();
            $('#feedbackFormSection').hide();
            $('#dataCorrectionFormSection').hide();
        } else if ($(this).val() == "Feedback/Complaint") {
            console.log("this is feedback form");
            $('#feedbackFormSection').show();
            $('#productEnquiryFormSection').hide();
            $('#generalEnquiryForm').hide();
            $('#dataCorrectionFormSection').hide();

        } else if ($(this).val() == "Change of Personal Details") {
            console.log("this is change of data form");
            $('#dataCorrectionFormSection').show();
            $('#generalEnquiryForm').hide();
            $('#productEnquiryFormSection').hide();
            $('#feedbackFormSection').hide();
        }
    });
    //end of choose product type script


    //policy
    $("input[name=GEexistingCustomer]").change(function() {
        if ($(this).val() == "Yes") {
            console.log("existing cust");
            $('.policyNumGE').show();


        } else if ($(this).val() == "No") {
            console.log("Not existing cust");
            $('.policyNumGE').hide();

        }
    });

    $("input[name=PEexistingCustomer]").change(function() {
        if ($(this).val() == "Yes") {
            console.log("existing cust PE");
            $('.policyNumPE').show();


        } else if ($(this).val() == "No") {
            console.log("Not existing cust PE");
            $('.policyNumPE').hide();

        }
    });

    $("input[name=FEexistingCustomer]").change(function() {
        if ($(this).val() == "Yes") {
            console.log("existing cust FE");
            $('.policyNumFE').show();


        } else if ($(this).val() == "No") {
            console.log("Not existing cust FE");
            $('.policyNumFE').hide();

        }
    });
    //end of policy script 
    //reset general enquiry form 
    $('#generalForm #reset').click(function() {
        console.log("CLEARED !");
        $(".error").remove();
        $('form#generalForm :input').css({ border: '' });
        $('form#generalForm :input').css({ outline: '' });

    });
    $('#prodEnqreset').click(function() {
        console.log("PE CLEARED !");
        $(".error").remove();
        $('form#prodEnqForm :input').css({ border: '' });
        $('form#prodEnqForm :input').css({ outline: '' });

    });
    $('#feedbackreset').click(function() {
        console.log("FE CLEARED !");
        $(".error").remove();
        $('form#feedbackForm :input').css({ border: '' });
        $('form#feedbackForm :input').css({ outline: '' });

    });
    $('#datacorrectionreset').click(function() {
        console.log("DC CLEARED !");
        $(".error").remove();
        $('form#dataCorrectionForm :input').css({ border: '' });
        $('form#dataCorrectionForm :input').css({ outline: '' });
    });
    //allows alphanumeric only 
    var noSpecialCharElements = ['#fullName,#gePolicyNumber,#prodEnqfullName,#prodEnqpolicyNumber,#feedbackfullName,#feedbackpolicyNumber,#dataEnqfullName,#dataEnqpolicyNumber,#claimNumber,#correspondenceAdd']

    for (let i = 0; i < noSpecialCharElements.length; i++) {
        $(document).on('keypress', noSpecialCharElements[i], function(event) {
            var regex = new RegExp("^[a-zA-Z0-9_ ]*$");
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        });
    }

    //general enquiry submitForm
    $('#generalForm').submit(function(e) {

        e.preventDefault();
        var fullName = $('#fullName').val();
        var emailAdd = $('#email').val();
        var contactNum = $('#contactNumber').val();
        var msg = $('#message').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var telPattern = /^\+?6?(?:01?[0-46-9]-?\d{7,8}|0\d{8})$/;

        $('form#generalForm :input').css({ border: '' });
        $(".error").remove();
        //fullname
        if (fullName.length < 1) {
            console.log('nameis empty');
            $('#fullName').after('<span class="error">*This field is required</span>');
            $('#fullName').focus($('#fullName').css({ 'border': '1px solid #E11F27' }));
        }
        //emailAdd
        if (emailAdd.length <= 0) {
            console.log('email empty');
            $('#email').after('<span class="error">*This field is required</span>');
            $('#email').focus($('#email').css({ 'border': '1px solid #E11F27' }));
        }

        if ((emailAdd.length >= 1) && (!pattern.test(emailAdd))) {
            console.log('email contains weird char');
            $('#email').after('<span class="error">*Please enter a valid email address</span>');
            $('#email').focus($('#email').css({ 'border': '1px solid #E11F27' }));
        }
        //telnum
        if (contactNum.length <= 0) {
            console.log('number empty');
            $('#contactNumber').after('<span class="error">*This field is required</span>');
            $('#contactNumber').focus($('#contactNumber').css({ 'border': '1px solid #E11F27' }));
        }

        if ((contactNum.length >= 1) && (!telPattern.test(contactNum))) {
            console.log('contact contains weird char');
            $('#contactNumber').after('<span class="error">*Please enter a valid contact number</span>');
            $('#contactNumber').focus($('#contactNumber').css({ 'border': '1px solid #E11F27' }));
        }


        //msgbox
        if (msg.length <= 0) {
            console.log('msg empty');
            $('#message').after('<span class="error">*This field is required</span>');
            $('#message').focus($('#message').css({ 'border': '1px solid #E11F27' }));
        }
        //tnc checkbox
        var checkboxTNC = document.getElementById('privacyNotice');
        if (!checkboxTNC.checked) {
            console.log("TNC checkbox not checked");
            $("label[for='termsCondition']").after('<span class="error">Please agree to TNC</span>');
            // $('#privacyNotice').focus($('#privacyNotice').css({ 'outline': '3px solid #E11F27' }));
        }

    });
    //end of general enquiry submitForm

    //product enquiry submission form
    $('#prodEnqForm').submit(function(e) {

        e.preventDefault();
        var fullName = $('#prodEnqfullName').val();
        var emailAdd = $('#prodEnqemail').val();
        var contactNum = $('#prodEnqcontactNumber').val();
        var msg = $('#productenqMessage').val();
        var prodCat = $('#productCategorySel').val();

        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        // var telPattern = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/;

        var telPattern = /^\+?6?(?:01?[0-46-9]-?\d{7,8}|0\d{8})$/;



        $('form#prodEnqForm :input').css({ border: '' });
        $(".error").remove();
        //fullname
        if (fullName.length < 1) {
            console.log('nameis empty');
            $('#prodEnqfullName').after('<span class="error">*This field is required</span>');
            $('#prodEnqfullName').focus($('#prodEnqfullName').css({ 'border': '1px solid #E11F27' }));
        }
        //emailAdd
        if (emailAdd.length <= 0) {
            console.log('email empty');
            $('#prodEnqemail').after('<span class="error">*This field is required</span>');
            $('#prodEnqemail').focus($('#prodEnqemail').css({ 'border': '1px solid #E11F27' }));
        }

        if ((emailAdd.length >= 1) && (!pattern.test(emailAdd))) {
            console.log('email contains weird char');
            $('#prodEnqemail').after('<span class="error">*Please enter a valid email address</span>');
            $('#prodEnqemail').focus($('#prodEnqemail').css({ 'border': '1px solid #E11F27' }));
        }
        //telnum
        if (contactNum.length <= 0) {
            console.log('number empty');
            $('#prodEnqcontactNumber').after('<span class="error">*This field is required</span>');
            $('#prodEnqcontactNumber').focus($('#prodEnqcontactNumber').css({ 'border': '1px solid #E11F27' }));
        }

        if ((contactNum.length >= 1) && (!telPattern.test(contactNum))) {
            console.log('contact contains weird char');
            $('#prodEnqcontactNumber').after('<span class="error">*Please enter a valid contact number</span>');
            $('#prodEnqcontactNumber').focus($('#prodEnqcontactNumber').css({ 'border': '1px solid #E11F27' }));
        }

        //product category 

        if (prodCat === "") {
            console.log("product category is empty");
            $('#productCategorySel').after('<span class="error">*This field is required</span>');
            $('#productCategorySel').focus($('#productCategorySel').css({ 'border': '1px solid #E11F27' }));
        }



        //msgbox
        if (msg.length <= 0) {
            console.log('msg empty');
            $('#productenqMessage').after('<span class="error">*This field is required</span>');
            $('#productenqMessage').focus($('#productenqMessage').css({ 'border': '1px solid #E11F27' }));
        }
        //tnc checkbox
        var checkboxTNC = document.getElementById('privacyNotice');
        if (!checkboxTNC.checked) {
            console.log("pN TNC checkbox not checked");
            $("label[for='termsCondition']").after('<span class="error">Please agree to TNC</span>');
            // $('#privacyNotice').focus($('#privacyNotice').css({ 'outline': '3px solid #E11F27' }));
        }

    });
    //end of prod enq submission form

    // feedback submission form 
    $('#feedbackForm').submit(function(e) {

        e.preventDefault();
        var fullName = $('#feedbackfullName').val();
        var emailAdd = $('#feedbackemail').val();
        var contactNum = $('#feedbackcontactNumber').val();
        var msg = $('#feedbackMessage').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var telPattern = /^\+?6?(?:01?[0-46-9]-?\d{7,8}|0\d{8})$/;

        $('form#feedbackForm :input').css({ border: '' });
        $(".error").remove();
        //fullname
        if (fullName.length < 1) {
            console.log('nameis empty');
            $('#feedbackfullName').after('<span class="error">*This field is required</span>');
            $('#feedbackfullName').focus($('#feedbackfullName').css({ 'border': '1px solid #E11F27' }));
        }
        //emailAdd
        if (emailAdd.length <= 0) {
            console.log('email empty');
            $('#feedbackemail').after('<span class="error">*This field is required</span>');
            $('#feedbackemail').focus($('#feedbackemail').css({ 'border': '1px solid #E11F27' }));
        }

        if ((emailAdd.length >= 1) && (!pattern.test(emailAdd))) {
            console.log('email contains weird char');
            $('#feedbackemail').after('<span class="error">*Please enter a valid email address</span>');
            $('#feedbackemail').focus($('#feedbackemail').css({ 'border': '1px solid #E11F27' }));
        }
        //telnum
        if (contactNum.length <= 0) {
            console.log('number empty');
            $('#feedbackcontactNumber').after('<span class="error">*This field is required</span>');
            $('#feedbackcontactNumber').focus($('#feedbackcontactNumber').css({ 'border': '1px solid #E11F27' }));
        }

        if ((contactNum.length >= 1) && (!telPattern.test(contactNum))) {
            console.log('contact contains weird char');
            $('#feedbackcontactNumber').after('<span class="error">*Please enter a valid contact number</span>');
            $('#feedbackcontactNumber').focus($('#feedbackcontactNumber').css({ 'border': '1px solid #E11F27' }));
        }


        //msgbox
        if (msg.length <= 0) {
            console.log('msg empty');
            $('#feedbackMessage').after('<span class="error">*This field is required</span>');
            $('#feedbackMessage').focus($('#feedbackMessage').css({ 'border': '1px solid #E11F27' }));
        }
        //tnc checkbox
        var checkboxTNC = document.getElementById('privacyNotice');
        if (!checkboxTNC.checked) {
            console.log("feedback TNC checkbox not checked");
            $("label[for='termsCondition']").after('<span class="error">Please agree to TNC</span>');
            // $('#privacyNotice').focus($('#privacyNotice').css({ 'outline': '3px solid #E11F27' }));
        }

    });
    //end of feedback form 

    //data correction form 
    $('#dataCorrectionForm').submit(function(e) {

        e.preventDefault();
        var fullName = $('#dataEnqfullName').val();
        var emailAdd = $('#datacorrectionemail').val();
        var contactNum = $('#datacorrectioncontactNumber').val();
        var msg = $('#detailsofRequest').val();
        var corAdd = $('#correspondenceAdd').val();
        var nric = $('#nric').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var telPattern = /^\+?6?(?:01?[0-46-9]-?\d{7,8}|0\d{8})$/;
        var nricPattern = /^\d{6}\-\d{2}\-\d{4}$/;

        $('form#dataCorrectionForm :input').css({ border: '' });
        $(".error").remove();
        //fullname
        if (fullName.length < 1) {
            console.log('nameis empty');
            $('#dataEnqfullName').after('<span class="error">*This field is required</span>');
            $('#dataEnqfullName').focus($('#dataEnqfullName').css({ 'border': '1px solid #E11F27' }));
        }

        //nric 
        if (nric.length <= 0) {
            console.log('nric empty');
            $('#nric').after('<span class="error">*This field is required</span>');
            $('#nric').focus($('#nric').css({ 'border': '1px solid #E11F27' }));
        }

        if ((nric.length >= 1) && (!nricPattern.test(nric))) {
            console.log('email contains weird char');
            $('#nric').after('<span class="error">*Please enter a valid NRIC number</span>');
            $('#nric').focus($('#nric').css({ 'border': '1px solid #E11F27' }));
        }

        //emailAdd
        if (emailAdd.length <= 0) {
            console.log('email empty');
            $('#datacorrectionemail').after('<span class="error">*This field is required</span>');
            $('#datacorrectionemail').focus($('#datacorrectionemail').css({ 'border': '1px solid #E11F27' }));
        }

        if ((emailAdd.length >= 1) && (!pattern.test(emailAdd))) {
            console.log('email contains weird char');
            $('#datacorrectionemail').after('<span class="error">*Please enter a valid email address</span>');
            $('#datacorrectionemail').focus($('#datacorrectionemail').css({ 'border': '1px solid #E11F27' }));
        }
        //telnum
        if (contactNum.length <= 0) {
            console.log('number empty');
            $('#datacorrectioncontactNumber').after('<span class="error">*This field is required</span>');
            $('#datacorrectioncontactNumber').focus($('#datacorrectioncontactNumber').css({ 'border': '1px solid #E11F27' }));
        }

        if ((contactNum.length >= 1) && (!telPattern.test(contactNum))) {
            console.log('contact contains weird char');
            $('#datacorrectioncontactNumber').after('<span class="error">*Please enter a valid contact number</span>');
            $('#datacorrectioncontactNumber').focus($('#datacorrectioncontactNumber').css({ 'border': '1px solid #E11F27' }));
        }


        //correspondence add
        if (corAdd.length <= 0) {
            console.log(' address empty');
            $('#correspondenceAdd').after('<span class="error">*This field is required</span>');
            $('#correspondenceAdd').focus($('#correspondenceAdd').css({ 'border': '1px solid #E11F27' }));
        }
        //details of request
        if (msg.length <= 0) {
            console.log('msg empty');
            $('#detailsofRequest').after('<span class="error">*This field is required</span>');
            $('#detailsofRequest').focus($('#detailsofRequest').css({ 'border': '1px solid #E11F27' }));
        }
        //tnc checkbox
        var checkboxTNC = document.getElementById('privacyNotice');
        if (!checkboxTNC.checked) {
            console.log("data TNC checkbox not checked");
            $("label[for='termsCondition']").after('<span class="error">Please agree to TNC</span>');
            // $('#privacyNotice').focus($('#privacyNotice').css({ 'outline': '3px solid #E11F27' }));
        }

    });



});