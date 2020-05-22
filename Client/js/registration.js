$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later

        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter Driver name'
                    }
                }
            },

            boda_stage: {
                validators: {
                    stringLength: {
                        min: 20,
                    },
                    notEmpty: {
                        message: 'Please enter stage name'
                    }
                }
            },
            Age: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Password'
                    }
                }
            },
            date: {
                validators: {
                    stringLength: {
                        max: 8,
                    },
                    notEmpty: {
                        message: 'Please enter the date'
                    }
                }
            },
            station: {
                validators: {
                    stringLength: {
                        20
                    },
                    notEmpty: {
                        message: 'Please enter station address'
                    }
                }
            },
            contact_no: {
                validators: {
                    stringLength: {
                        min: 12,
                        max: 12,
                        notEmpty: {
                            message: 'Please enter your Contact No.'
                        }
                    }
                },

            }
        }
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});