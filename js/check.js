$(document).ready(function(){
	initialize();
	$("#inputs").validate({
		submitHandler: function(form) {
			postAddr($("#address").val());
		}
	});
});