// Advanced Functionalities

getPrice = function(name,item) {
	var price=0;
	$.ajax({
	    url: "https://piedp.herokuapp.com/price",
	    dataType: 'json',
	    data: {
			"restaurant":name,
			"item":item,
		},
	    async: false,
	    success: function(data){
			if(data["price"]!="NF") {
				price = data["price"]
			}
	    }
	});
	return price
}

cartTotal = function() {
	var cart = JSON.parse(localStorage.getItem('cart'));
	items = Object.keys(cart)
	var arrayLength = items.length;
	var total = 0;
	for (var i = 0; i < arrayLength; i++) {
	    console.log(items[i])
		if(items[i]!="name") {
			total+=cart[items[i]]*getPrice(cart["name"],items[i]);
		}
		$("#"+i).find('#number').val(parseInt(cart[items[i]]))
	}
	return total.toFixed(2);
}



getName = function() {
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart!=null) {
		return cart["name"];
	}
	else {
		window.location.href="home.html";
	}
}

setName = function(name) {
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart==null) {
		cart = new Object();
	}
	cart["name"] = name;
	localStorage.setItem('cart', JSON.stringify(cart));
}

// UI Functionalities

createUI = function() {
	$("#cart").empty();
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart==null) {
		swal("Your cart is empty.")
		window.location.href="menu.html"
	}
	items = Object.keys(cart)
	var arrayLength = items.length;
	for (var i = 0; i < arrayLength; i++) {
	    console.log(items[i])
		if(items[i]!="name") {
	    	$("#cart").append("<tr id=\""+i+"\"><td>"+items[i]+"</td><td id='control'>"+getPrice(cart["name"],items[i])+"</td>"+createCounter()+"</tr>");
		}
		$("#"+i).find('#number').val(parseInt(cart[items[i]]))
	}
	setTotal();
}

badge = function() {
	// console.log("Cart badge updated");
	$('#cart_badge').text(cartSize());
}

createCounter = function() {
	return "\<td\>\<form id=\"incrementor\"\> \<div class=\"value-button\" id=\"decrease\" onclick=\"decreaseValue(event)\" value=\"Decrease Value\"\>-\</div\><input type=\"number\" id=\"number\" value=\"0\" /> \<div class=\"value-button\" id=\"increase\" onclick=\"increaseValue(event)\" value=\"Increase Value\"\>+\</div\>\</form\>\</td\>"
}

increaseValue = function(event) {
	var id=event.target.parentElement.parentElement.parentElement.id;
	var item=$("#"+id).children().first().text()
	var cart = JSON.parse(localStorage.getItem('cart'));
	count=$("#"+id).find('#number').val()
	if(count<1) {
		$("#"+id).find('#decrease').show();
	}
	$("#"+id).find('#number').val(parseInt(count)+1)
	addToCart(cart["name"],item);
	setTotal();
}

decreaseValue = function(event) {
	var id=event.target.parentElement.parentElement.parentElement.id;
	var item=$("#"+id).children().first().text()
	var cart = JSON.parse(localStorage.getItem('cart'));
	count=$("#"+id).find('#number').val()
	if(count > 1) {
		$("#"+id).find('#number').val(count-1)
		removeFromCart(item);
	}
	else {
		$("#"+id).find('#number').val(count-1)
		removeFromCart(item);
		// $("#"+id).find('#decrease').hide()
		createUI();
	}
	setTotal();
}

setTotal = function() {
	$("#price").empty()
	$("#price").append("<h2>Total:\t"+cartTotal()+"<\h2")
}

// Basic Cart Functions

addToCart = function(name,item) {
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart==null) {
		cart = new Object();
		cart["name"] = name;
	}
	if(cart["name"]!=name) {
		// resetCart();
		console.log("Remove Cart");
	}
	console.log(cart[item]);
	if(cart[item]==undefined) {
		cart[item]=1;
	}
	else {
		cart[item]+=1;
	}
	localStorage.setItem('cart', JSON.stringify(cart));
}

viewCart = function() {
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart==null) {
		cart = new Object();
	}
	console.log(JSON.stringify(cart));
	return cart;
}

emptyCart = function() {
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart==null) {
		cart = new Object();
	}
	localStorage.clear();
}

removeFromCart = function(item) {
	var cart = JSON.parse(localStorage.getItem('cart'));
	if (cart==null) {
		cart = new Object();
	}
	if(cart[item]) {
		cart[item]-=1;
	}
	if(cart[item]==0) {
		delete cart[item];
	}
	localStorage.setItem('cart', JSON.stringify(cart));
}

cartSize = function() {
	var cart = JSON.parse(localStorage.getItem('cart'));
	// console.log(cart);
	// console.log(Object.keys(cart).length);
	if (cart==null) {
		return 0
	}
	else {
		return Object.keys(cart).length-1;
	}
}

setInterval(badge,1000);
