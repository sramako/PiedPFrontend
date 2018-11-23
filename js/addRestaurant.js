addRestaurant = function(e) {
  alert("add res called");
  var obj = {};
  obj['name']=document.getElementById('name').value;
  console.log(obj['name'])
  obj['address']=document.getElementById('address').value;
  // obj['image']=document.getElementById('img').background;
  var menu=[];
  var obj1 = {};
  obj1['name'] = document.getElementById('submenu_1').value;
  obj1['items'] = [];
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_1_item_1').value;
  sub_obj['price']=document.getElementById('submenu_1_price_1').value;
  obj1['items'].push(sub_obj);
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_1_item_2').value;
  sub_obj['price']=document.getElementById('submenu_1_price_2').value;
  obj1['items'].push(sub_obj);
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_1_item_3').value;
  sub_obj['price']=document.getElementById('submenu_1_price_3').value;
  obj1['items'].push(sub_obj);
  menu.push(obj1);

  var obj2 = {};
  obj2['name'] = document.getElementById('submenu_2').value;
  obj2['items'] = [];
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_2_item_1').value;
  sub_obj['price']=document.getElementById('submenu_2_price_1').value;
  obj2['items'].push(sub_obj);
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_2_item_2').value;
  sub_obj['price']=document.getElementById('submenu_2_price_2').value;
  obj2['items'].push(sub_obj);
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_2_item_3').value;
  sub_obj['price']=document.getElementById('submenu_2_price_3').value;
  obj2['items'].push(sub_obj);
  menu.push(obj2);

  var obj3 = {};
  obj3['name'] = document.getElementById('submenu_3').value;
  obj3['items'] = [];
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_3_item_1').value;
  sub_obj['price']=document.getElementById('submenu_3_price_1').value;
  obj1['items'].push(sub_obj);
  var sub_obj={};
  sub_obj['name']=document.getElementById('submenu_3_item_2').value;
  sub_obj['price']=document.getElementById('submenu_3_price_2').value;
  obj1['items'].push(sub_obj);
  var sub_obj={};
  sub_obj['price']=document.getElementById('submenu_3_price_3').value;
  sub_obj['name']=document.getElementById('submenu_3_item_3').value;
  obj1['items'].push(sub_obj);
  menu.push(obj3);

  obj['menu']=menu;

  console.log(obj);
  alert("uploading now");
	$.ajax({
      type: "POST",
      contentType: "application/json",
	    url: "http://localhost:5000/addRestaurant",
	    dataType: 'json',
	    data:JSON.stringify(obj)
	});
  return true;
    alert("uploaded");
}
