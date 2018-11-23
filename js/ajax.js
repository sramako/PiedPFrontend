getRestaurants = function() {
    $.get("https://piedp.herokuapp.com/restaurants",
        {
        },
        false,
        function(data){
            console.log(data)
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

};

getCategoryContent = function(name,category) {

};
