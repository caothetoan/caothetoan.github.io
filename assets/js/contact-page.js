---
layout: null
---

var $contactForm = $('#contact-form-homepage');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $(':submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: '{{ site.mail_message_url }}',
		method: 'POST',
		data: $(this).serialize() + '&url=' + encodeURIComponent(window.location),
		dataType: 'json',
		beforeSend: function() {
			$submit.attr('disabled', true).val('Sending...');
		},
		success: function(data) {
			$submit.val('Message sent!');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
				grecaptcha.reset();
			}, 5000);
		},
		error: function(err) {
			$submit.val('Ops, there was an error.');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
				grecaptcha.reset();
			}, 5000);
		}
	});
});
