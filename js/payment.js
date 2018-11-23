paymentPage = function() {
	$("#payment").hide();
	var loader="<div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div><p id='message'>Message</p></div>"
	$(".modal-body").empty();
	$(".modal-body").append(loader);
}

function getStatus(){
	var status="waiting";
	$.ajax({
		url: "https://piedp.herokuapp.com/payment",
		dataType: 'json',
		data: {
			"name":"Sraman"
		},
		async: false,
		success: function(data){
			// console.log(data["status"]);
			status=data["status"];
		}
	});
	return status;
}

success = function() {
	var success="<div class='check_mark'><div class='sa-icon sa-success animate'><span class='sa-line sa-tip animateSuccessTip'></span><span class='sa-line sa-long animateSuccessLong'></span><div class='sa-placeholder'></div><div class='sa-fix'></div></div></div>"
	$(".modal-body").empty();
	$(".modal-body").append(success);
}

time = 1000;
total_time = 0;
checkStatus = function() {
	var status=getStatus()
	console.log("STATUS:"+status);
	if(status=="waiting") {
		console.log("PR");
		if(total_time>15000) {
			time=time*2;
			message = "This is taking a while."
			$('#message').empty();
			$('#message').text(message);
			console.log("This is taking a while.");
		}
		else {
			$('#message').text("Waiting...");
		}
		console.log(time);
		total_time += time;
		setTimeout("checkStatus()",time)
	}
	if(status=="success") {
		success();
	}
}

pay=function() {
	window.open("payment_gateway.html", '_blank', 'location=yes,height=500,width=600,scrollbars=yes,status=yes');
	paymentPage();
	checkStatus();
}
