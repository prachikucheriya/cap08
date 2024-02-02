var cart ={
    data : [],
    add : function(name,quantity,price){
      var obj ={};
      obj.name = name;
      obj.quantity = quantity;
      obj.price = price;
      this.data.push(obj);
    },
    total : function(){
      var sum = 0;
      for(var i =0;i<this.data.length;i++){
        var current = this.data[i];
        sum = sum + current.quantity*current.price;
      }
      return sum;
    }
  }
  cart.add("Rice",2,60);
  cart.add("Dal",3,50);
  cart.add("Salt",1,20);
  console.log(cart.total());