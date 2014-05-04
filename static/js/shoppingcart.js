var Product = Backbone.Model.extend({
	initialize : function(name){
		this.set({ 'name' : name });
	}
});

