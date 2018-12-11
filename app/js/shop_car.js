function ShopCar(obj){
    if(typeof obj.ele ==="string")obj.ele= document.querySelector(obj.ele);
    this.$ele = obj.ele;
}
ShopCar.prototype.init = function(){
    console.log(this.$ele);
    this.getData();
}
ShopCar.prototype.getData = function(){
      //localStorage.clear();
      this.data = localStorage.shopList || '[]';
      this.data = JSON.parse(this.data);
      //console.log(shopList);
     this.insertData(this.data)
}
ShopCar.prototype.insertData = function(data){
       this.$ele.innerHTML='';
        data.forEach((item, index) => {
                var $div = document.createElement('div');
                $div.setAttribute('class','bobyspxqboxlist');
                $div.index = index;
                console.log(this.data);
                $div.innerHTML = `
                <p class="spdanxuan-p">
                <input class="spdanxuan-d" type="checkbox" name="spdanxuan" id="spdanxuan">
            </p>
           <div class="spimg-div">
            <p class="spimg-p"><img class="spimg" src= alt=""></p>
            <p class="spname-p"><a class="spname">${this.data[index].title}</a></p>
          </div>
          <div class="emptybox">
          </div>
       <div class="spdanjia-div">
       <span class="spdanjia">
           <em>${this.data[index].price}</em> 
       </span>
     </div>
     <div class="spjiahaoanniu-div">
         <div class="spjiajiangn">
             <a class="spjianhaobtn" href="">-</a>
             <!-- 减号 -->
             <input class="sptext" type="text" name="spval" id="spval" value="1">
             <!-- 文字区 -->
             <a class="spjiahaobtn" href="">+</a>
             <!-- 加号 -->
         </div>
       </div>
       <!-- 商品增加减少按钮 -->
       <div class="spxiaoji-div">
             <b class="spxiaoji">7988</b>
         </div>
         <div class="spshanchubox">
             <a class="spshanchu" href="#">
                 <b>删除此商品</b>
             </a>
         </div>
                   
                `;
                this.$ele.appendChild($div);
            })
    
}
   
// 商品名称:<span class='title'>${data[index].title}</span></br>
// 商品价格<span class='price'>${data[index].price}</span></br>
// 购买数量<input class="count" value=${data[index].count} placeholder="请输入数量" /></br>
// 小计<span>${data[index].price * data[index].count}</span></br>
// <button>删除</button>
// var count = (function() {
//     // 获取所有添加按钮
//     var $addBtnAll = document.querySelectorAll('.add');
//     // 获取所有清除按钮
//     var $clearBtnAll =  document.querySelectorAll('.clear')
//     return {
//         init() {
//             this.event();
//         },
//         event() {
//             const _this = this;
//             for(var i = 0; i < $addBtnAll.length; i++) {
//                     (function() {
//                         var  count = 0
//                         $addBtnAll[i].onclick = function() {
//                             count++;
//                             _this.set(this.parentNode, count, 'p');
//                         }
//                         $clearBtnAll[i].onclick = function() {
//                             count = 0;
//                             _this.set(this.parentNode, count, 'p')
//                         }

//                     }())
                
//             }
//         },
//         set(ele, val, child) {
//             // 如果传入了子类名
//             if(child) {
//                 ele.querySelector(child).innerHTML = val;
//             } else {
//                 ele.innerHTML = val;
//             }
//         }
//     }
// }())
// count.init()


