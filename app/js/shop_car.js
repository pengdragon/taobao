function ShopCar(obj){
    if(typeof obj.ele ==="string")obj.ele= document.querySelector(obj.ele);
    this.$ele = obj.ele;
}
ShopCar.prototype.getData = function(){
      //localStorage.clear();
      this.data = localStorage.shopList || '[]';
      this.data = JSON.parse(this.data);
      //console.log(shopList);
     this.insertData(this.data)
}
ShopCar.prototype.insertData = function(){
    
}
   