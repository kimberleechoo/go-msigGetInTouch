// choose product 
// $('#productEnquiryForm').hide();
//  $(document).ready(function() {
//     if ($("#productEnquiry").attr('checked')) {
//         $('#generalEnquiryForm').hide();
//         $('#productEnquiryForm').show();

//     }
//  });




// jQuery(function() {
//     jQuery("input[name=typeofEnquiry]").change(function() {
//         if ($(this).val() == "General Enquiry") {
//             console.log("hi fire");
//             $('#productEnquiryForm').show();
//             $('#productEnquiryForm').hide();
//         } else if ($(this).val() == "Product Enquiry") {
//             console.log("this is product");
//             $('#productEnquiryForm').show();
//             $('#generalEnquiryForm').hide();


//         }
//     })
// })


$(document).ready(function() {
    $('#productEnquiryForm').hide();
    // choose product type 
    $("input[name=typeofEnquiry]").change(function() {
        if ($(this).val() == "General Enquiry") {
            console.log("hi fire");
            $('#generalEnquiryForm').show();
            $('#productEnquiryForm').hide();
        } else if ($(this).val() == "Product Enquiry") {
            console.log("this is product");
            $('#productEnquiryForm').show();
            $('#generalEnquiryForm').hide();
        }
    });

    //policy
    $("input[name=existingCustomer]").change(function() {
        if ($(this).val() == "Yes") {
            console.log("existing cust");
            $('.policyNum').show();
        } else if ($(this).val() == "No") {
            console.log("Not existing cust");
            $('.policyNum').hide();

        }
    });

    //submitForm
    $('#generalForm').submit(function(e) {
        e.preventDefault();
        var fullName = $('#fullName').val();
        var emailAdd = $('#email').val();
        var contactNum = $('#contactNumber').val();
        var msg = $('#message').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var telPattern = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/;

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
            return false;
        }
        //resetbutton
        $("#reset").click(function() {
            $(".error").remove();
            $('form#generalForm :input').css({ border: '' });

        });
        return false;
    });
});