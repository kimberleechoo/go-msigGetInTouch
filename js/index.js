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


    $("input[name=existingCustomer]").change(function() {
        if ($(this).val() == "Yes") {
            console.log("existing cust");
            $('.policyNum').show();
        } else if ($(this).val() == "No") {
            console.log("Not existing cust");
            $('.policyNum').hide();

        }
    });

    var $form = $("#generalForm")
    var $errorMsg = $("<span class='error'>This is empty</span>");

    $("#submit").on("click", function() {
        var toReturn = true;
        $("input", $form).each(function() {
            if ($(this).val() == "") {
                if (!$(this).data("error")) {
                    $(this).data("error", $errorMsg.clone().insertAfter($(this)));
                }
                toReturn = false;
            } else {
                if ($(this).data("error")) {
                    $(this).data("error").remove();
                    $(this).removeData("error");
                }
            }
        });
        return toReturn;
    });
});