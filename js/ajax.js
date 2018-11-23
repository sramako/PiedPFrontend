getRestaurants = function() {
    $.get("http://localhost:5000/restaurants",
        {
        },
        false,
        function(data){
            console.log(data)
            return data;
        });
        
}

getCategory = function(name) {
    $.get("http://localhost:5000/category",
        {
            "name": getRestaurants()
        },
        false,
        function(data){
            console.log(data)
            return data;
        });
}

getMenu = function(name) {

}

getCategoryContent = function(name,category) {

}
