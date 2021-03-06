// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
        $("#email_form").validate({
            rules: {
                "email_1": {
                    required: true,
                    email: true,
                },
                "email_2": {
                    required: true,
                    email: true,
                    equalTo: "#email_1", 
                },
                "full_name": {
                    required: true,
                },     
                "phone": {
                    required: true,
                    number: true,
                    minlength: 10,
                },
                "address_1": {
                    required: true,
                },
                "address_2": {
                    required: true,
                },
                "city": {
                    required: true,
                },
            },
            
            messages: {
                "email_1": {
                    required: "Email Address is required",
                    email: "Please enter a valid email address",
                },
                "email_2": {
                    required: "Email is required",
                    email: "Please enter a valid email address",
                    equalTo: "Email addresses must match",
                },
                "full_name": {
                    required: "Full name is required",
                },
                "phone": {
                    required: "Please enter a valid number",
                    number: "Phone number must be valid",
                    minLinks: "Please enter a 10 digit phone number",
                },
                "address_1": {
                    required: "Please enter a valid address",
                },
                "address_2": {
                    required: "Please enter a valid address",
                },
                "city": {
                    required: "Please enter a valid city",
                },
       },
    });
    
});