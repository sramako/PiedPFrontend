getRestaurants = function() {
    $.get("https://piedp.herokuapp.com/restaurants",
        {
        },
        false,
        function(data){
            console.log(JSON.stringify(data));
            return data;
        });
        
};

getCategory = function(name) {
    $.get("https://piedp.herokuapp.com/category",
        {
            "name": getRestaurants()
        },
        false,
        function(data){
            console.log(data)
            return data;
        });
};

getMenu = function(name) {
    $.get("https://piedp.herokuapp.com/menu",
        {
            "name": getRestaurants()
        },
        false,
        function(data){
            console.log(data)
            // name=data
            // console.log(name)
            return data;
        });

    
};

getCategoryContent = function(name,category) {
    $.get("https://piedp.herokuapp.com/categorycontent",
    {
        "name": getRestaurants(),
        "category":getCategory(name)
    },
    false,
    function(data){
        console.log(data)
        // name=data
        // console.log(name)
        return data;
    });
};

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
	return price;
}
