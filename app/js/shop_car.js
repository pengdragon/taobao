function ShopCar(obj){
    if(typeof obj.ele ==="string")obj.ele= document.querySelector(obj.ele);
    this.$ele = obj.ele;
    this.$shopcount = document.querySelector('.yixuansq');
    this.$sumprice = document.querySelector(".sqzj");
    this.$gomoney = document.querySelector('.sqjsa');
    this.$cleanAdd = document.querySelector('.cleardall');
    //console.log(this.$sumprice)
    //已选商品数量
    this.countd=0;
    //用于计数单个商品
    this.count=0;
    //商品数量
    this.$shopcount = document.querySelector('.yixuansq');
    //商品总价
    this.$sumprice = document.querySelector(".sqzj");
    //去结算
    this.$gomoney = document.querySelector('.sqjsa');
    //清除全部
    this.$cleanAdd = document.querySelector('.cleardall');
    //console.log(this.$sumprice)
    //全选
    this.$checkAll = $('.zincheckout');
    console.log(this.$checkAll)
}
ShopCar.prototype.init = function(){
    console.log(this.$ele);
    this.getData();
    this.selectShop();
    this.addShopCount();
    this.$gomoney.onclick = _=>{
        if(localStorage.getItem('username')){
            if( this.numAll>0) alert('请支付'+      this.numAll);
            else alert('请先选择商品'); 
        }else{
            alert('请先登录');
        }
        }  
}
ShopCar.prototype.getData = function(){
      //localStorage.clear();
      this.data = localStorage.shopList || '[]';
      this.data = JSON.parse(this.data);
      //console.log(shopList);
      localStorage.setItem('shopcount',this.data.length);
     this.insertData(this.data)

}
ShopCar.prototype.insertData = function(data){
       this.$ele.innerHTML='';
        data.forEach((item, index) => {
                var $div = document.createElement('div');
                $div.setAttribute('class','shopcar-bodyup');
                $div.index = index;
                console.log(this.data);
                $div.innerHTML = `     
                <!-- 此处商品具体信息 -->
                <div class="bodyup-checkbox">
                    <!-- 商品信息上面店铺名 -->
                 
              
                </div>
               <div class="bodyspxqbox">
                   <div class="bobyspxqboxlist">
                <p class="spdanxuan-p">
                       <input class="spdanxuan-d" type="checkbox" name="spdanxuan" id="spdanxuan">
                   </p>
                   <!-- 商品单选按钮 -->
                  <div class="spimg-div">
                   <p class="spimg-p"><img class="spimg" src=${this.data[index].srcBtn[0]} alt=""></p>
                   <p class="spname-p"><a class="spname">${this.data[index].title}</a></p>
                 </div>
                  <!-- 商品图片跟文字描述 -->
                 <div class="emptybox">

                 </div>
              <div class="spdanjia-div">
              <span class="spdanjia">
                  <em>${this.data[index].price}</em> 
              </span>
              <!-- 商品单价 -->
            </div>
            <div class="spjiahaoanniu-div">
                <div class="spjiajiangn">
                    <a class="spjianhaobtn reduceCount" style="cursor:pointer;text-decoration:none;">-</a>
                    <!-- 减号 -->
                    <input class="sptext" type="text" name="spval" id="spval" value=${this.data[index].count}>
                    <!-- 文字区 -->
                    <a class="spjiahaobtn addCount" style="cursor:pointer;text-decoration:none;">+</a>
                    <!-- 加号 -->
                </div>
              </div>
              <!-- 商品增加减少按钮 -->
              <div class="spxiaoji-div">
                    <b class="spxiaoji">${this.data[index].price*this.data[index].count}</b>
                </div>
                <div class="spshanchubox">
                    <a class="spshanchu" href="#">
                        <b class="clearp">删除此商品</b>
                    </a>
                </div>
                </div> 
              
            </div>  
            
            <!-- 商品详情 -->  
        
        <!-- 商品具体信息数据渲染区 -->
                `;
                
                 //console.log(this.$xiaoji)
               //this.money +=Number(this.data[index].price*this.data[index].count);
                 //this.$sumprice.innerHTML= Number(this.$sumprice.innerHTML)+Number(this.$xiaoji.innerHTML);
                this.$ele.appendChild($div);       
                this.$shopcount.innerHTML=this.countd;   
                this.$sumprice.innerHTML=0; 
            });
           
}
ShopCar.prototype.selectShop = function(){
    //复选框集合
    this.$checList = $(".spdanxuan-d");
    this.$xiaoji = document.querySelectorAll('.spxiaoji');
    //console.log( this.$checList);
    let _this = this;
    const xiaojiAll = [];
    const clearindex = [];
    const clearobj =[];
    this.numAll =0;
    //全选框的点击
   this.$checkAll.click(_=> {
        if(this.$checkAll.prop('checked')) {
            console.log(444)
            //全选选中， this.$checList集合里的每个元素都选中
            this.$checList.prop('checked',true); 
            this.countd = this.data.length; 
            console.log(this.countd);
            for(var i =0;i<_this.data.length;i++){
                _this.numAll += Number(_this.$xiaoji[i].innerHTML);
            }
            setTimeout(function(){ _this.$sumprice.innerHTML = _this.numAll;},10);
       
        } else {
            this.$checList.prop('checked', false);
            _this.countd=0;  
            _this.numAll=0;
            setTimeout(function(){ _this.$sumprice.innerHTML = _this.numAll;},10);
        
             }
             _this.$shopcount.innerHTML=_this.countd;
    })
    this.$checList.click(function() {
        var flag = true;
        _this.$checList.each(function(i){
         //    有一个没有被选中
             if(!$(this).prop('checked')) {
                 // 让全选按钮不被选中
                 _this.$checkAll.prop('checked', false);
                 flag = false;
                 // 终止each循环
                 return
             }
         })
         if(flag) _this.$checkAll.prop('checked', true);
     })
     for(let i=0;i<_this.data.length;i++){
        _this.$checList[i].onclick = function(){
            //如果选中
            if(this.checked==true){
                _this.numAll = 0;
               _this.countd++;
               console.log(_this.countd);
               let father = this.parentNode.parentNode.parentNode.parentNode;
               console.log(father)
               _this.xiaoji =this.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild;
                xiaojiAll.push(_this.xiaoji);
                console.log(xiaojiAll);
                xiaojiAll.forEach(_=>{
                    //总价钱，将每个小计放到数组了，遍历累加
                    _this.numAll+=Number(_.innerHTML)
                });
                _this.$sumprice.innerHTML=0;
                setTimeout(_=>{ _this.$sumprice.innerHTML = _this.numAll;},10);
                clearobj.push(father);
                //console.log(clearindex);
                
                //入股没有选中 
            }else if(this.checked==false){
                _this.countd--;
                console.log(_this.countd);
                xiaojiAll.splice(xiaojiAll.length-1,1);
                clearobj.splice(clearobj.length-1,1);
                _this.numAll = 0;
                //console.log(xiaojiAll);
                xiaojiAll.forEach(_=>{
                    _this.numAll+=Number(_.innerHTML)
                });
                _this.$sumprice.innerHTML=0;
                setTimeout(function(){ _this.$sumprice.innerHTML = _this.numAll;},10);
                console.log(clearindex);
            }   
           
            _this.$shopcount.innerHTML=_this.countd;
            //console.log(_this.numAll)//总价格
           
           
        }
    }
    //获取到勾选的dom元素。放在一个数组里，进行遍历删除，更新本地数据，重新渲染；
    this.$cleanAdd.onclick = function(){
       var arr = [...new Set(clearindex)];
        console.log(arr);
        clearobj.forEach(obj=>{
         var data = _this.data[obj.index];
         _this.data.splice(obj.index,1);
         obj.remove();
         localStorage.shopList = JSON.stringify(_this.data);
         _this.getData();

        })
           
        
    }
    
}
//对商品的增删改减后的页面更新及本地购物车数据的更新
ShopCar.prototype.addShopCount = function(){
    this.$reduceCount = document.querySelectorAll('.reduceCount');
    this.$addCount = document.querySelectorAll('.addCount');
    this.$countinp = document.querySelectorAll('.sptext');
    var _this = this;
   this.$ele.oninput = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.className.includes('sptext')){
        var index = target.parentNode.parentNode.parentNode.parentNode.parentNode.index;
        console.log(index)
        //let data= target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[index];
       var data = _this.data[index];
        data.count = Number(target.value);
        localStorage.shopList = JSON.stringify(_this.data);
        _this.getData(_this.data);
    }
   }
   this.$ele.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.className. includes('reduceCount')){
        var index = target.parentNode.parentNode.parentNode.parentNode.parentNode.index;
        var data = _this.data[index];
        var inp =  target.nextElementSibling;
        var  count =inp.value;
        count--;
        if(count<=0)count=0;
        inp.value = count;
        data.count = Number(count);
        localStorage.shopList = JSON.stringify(_this.data);
        _this.getData(_this.data);
        _this.selectShop();
    }
    if(target.className.includes('addCount')){
        var index = target.parentNode.parentNode.parentNode.parentNode.parentNode.index;
        var data = _this.data[index];
        var inp =  target.previousElementSibling;
        var count =inp.value;
        count++;
        inp.value = count;
        data.count = Number(count);
        localStorage.shopList = JSON.stringify(_this.data);
        _this.getData(_this.data);
        _this.selectShop();

    }
    if(target.className.includes("clearp")){
        var father =  target.parentNode.parentNode.parentNode.parentNode.parentNode;
        var index =father.index;
        var data = _this.data[index];
        _this.data.splice(index,1);
        father.remove();
        localStorage.shopList = JSON.stringify(_this.data);
        _this.getData();
    }
   }
   
}



   

