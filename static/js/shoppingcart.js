var cartObj =
{
		"id": "947C045C3C262CD2658F15596BAC1831/tL6Idg8ITsCbe8EnQ6bthQ",
		"messages": [],
		"offers": [
		{
			"id": "cross_sellF2uO_QdyQTuVPrkdv0SavA_any:Jn64-xgNR2qMveXL3yUIWA",
			"presentation": {
				"description": "orem ipsum dolor sit amet, consectetuer adipiscing elit. Sed eu ligula. Sed interdum, odio ut consectetuer imperdiet, elit velit tempor nisi, sit amet accumsan nulla velit ut tortor. Duis pretium ligula non orci interdum accumsan. Vestibulum varius lectus vel nisi. Pellentesque cursus, magna eu euismod vestibulum, nisl nulla pellentesque enim, et dictum dui risus at nibh. Nam id sapien nec pede sagittis euismod.",
				"display": "ABC Photo Organizer"
			},
			"price": {
				"presentation": "$24.95",
				"value": 24.95
			},
			"quantity": 0,
			"styleClass": ""
		}
		],
		"order": {
		"coupons": "",
		"taxExemptionId": "",
		"currency": "USD",
		"items": [
		{
			"discount": {
				"presentation": "$0.00",
				"value": 0.0
			},
			"presentation": {
				"description": "orem ipsum dolor sit amet, consectetuer adipiscing elit. Sed eu ligula. Sed interdum, odio ut consectetuer imperdiet, elit velit tempor nisi, sit amet accumsan nulla velit ut tortor. Duis pretium ligula non orci interdum accumsan. Vestibulum varius lectus vel nisi. Pellentesque cursus, magna eu euismod vestibulum, nisl nulla pellentesque enim, et dictum dui risus at nibh. Nam id sapien nec pede sagittis euismod.",
				"display": "ABC Book Organizer",
				"image": "http://dnkiumg6lohf.cloudfront.net/test/image/58ffd041-28e9-4604-914d-acc8e5efacc6",
				"summary": ""
			},
			"productName": "ABC Book Organizer",
			"quantity": 2,
			"subtotal": {
				"presentation": "$29.95",
				"value": 29.95
			},
			"total": {
				"presentation": "$29.95",
				"value": 29.95
			}
		},
		{
			"discount": {
				"presentation": "$0.00",
				"value": 0.0
			},
			"presentation": {
				"description": "This is different ipsum dolor sit amet, consectetuer adipiscing elit. Sed eu ligula. Sed interdum, odio ut consectetuer imperdiet, elit velit tempor nisi, sit amet accumsan nulla velit ut tortor. Duis pretium ligula non orci interdum accumsan. Vestibulum varius lectus vel nisi. Pellentesque cursus, magna eu euismod vestibulum, nisl nulla pellentesque enim, et dictum dui risus at nibh. Nam id sapien nec pede sagittis euismod.",
				"display": "XYZ Book Organizer",
				"image": "http://dnkiumg6lohf.cloudfront.net/test/image/58ffd041-28e9-4604-914d-acc8e5efacc6",
				"summary": ""
			},
			"productName": "XYZ Book Organizer",
			"quantity": 1,
			"subtotal": {
				"presentation": "$39.95",
				"value": 39.95
			},
			"total": {
				"presentation": "$39.95",
				"value": 39.95
			}
		}
		],
		"taxRate": 0.0
	}
};


$(document).ready(function(){
	var items = cartObj.order.items;

	// MODELS
	var LineItem = Backbone.Model.extend({
		initialize: function() {
			// this.total = this.quantity * this.subtotal.value;
			this.updateTotal();
			this.on("change:quantity", this.updateTotal);
		},
		updateTotal: function() {
			this.total = this.quantity * this.subtotal.value;
		}
	});
	var LineItemList = Backbone.Collection.extend({
		// model: LineItem,
		initialize: function() {
			// this.total = this.quantity * this.subtotal.value;
			this.updateTotal();
			this.on("change", this.updateTotal);
		},
		updateTotal: function() {
			var total = 0;
			this.forEach(function(item){
				debugger;
				var quantity = item.attributes.quantity;
				var price = item.attributes.subtotal.value;
				total = total + (quantity * price);
			});
			this.total = total;
		}

	});

	// =========
	// = VIEWS =
	// =========

	// item view
	var LineItemView = Backbone.View.extend({
		template: _.template("<li class='fs_line_item'><img src='<%= presentation.image%>' /> <div class='fs_line_item_prod_name'> Product Name: <%= presentation.display%></div> <div class='fs_line_item_qty'><input type='text' value='<%= quantity%>' /></div> <div class='fs_line_item_subtotal'><%= subtotal.presentation%></div><div class='fs_line_item_total'><%= total.presentation%></div><span>Remove</span></li>"),
		render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		},
		events:{
			"change input": function(event){
				var input = event.target;
				this.model.set("quantity", input.value);
			}
		},
		initialize: function() {
		}
	});
	// list view
	var LineItemListView = Backbone.View.extend({
		template: _.template("<div><ul></ul><div id='cartTotal'><span>Tax: <%= taxRate %> </span><span class='fs_cart_total'>Total: <%= total %> </span> </div></div>"),
		render: function() {
			var data = {
				taxRate : this.collection.taxRate,
				total : this.collection.total
			};
			this.$el.html(this.template(data));
			this.collection.forEach(this.addOne, this);
			return this;
		},
		initialize: function() {
			// this.total = this.quantity * this.subtotal.value;
			// this.updateTotal();
			this.collection.on("change", this.render, this);
		},
		addOne: function(lineItem){
			var lineItemView = new LineItemView( {model: lineItem});
			this.$el.find("ul").append(lineItemView.render().el);
		}
	});

	// INSTANTIATE VIEWS
	var itemList = new LineItemList();
	var itemListView = new LineItemListView({collection: itemList});

	// populate with data (clears the collection to initialize)
	itemList.reset(items);
	itemList.initialize();

	// RENDER
	// inject view's render output into the cart container
	$("#fastspring-cart").html(itemListView.render().el);

});
