//渲染商品信息
function Detail(obj){
    if(typeof obj.ele ==='string')obj.ele = document.querySelector(obj.ele);
    this.$detail = obj.ele;
    this.$title = this.$detail.firstElementChild.firstElementChild;
    console.log(this.$title)
    this.data = JSON.parse(localStorage.getItem('product'));

    //添加商品
    this.$addBtn = $('.addBtn');
    this.$reduceBtn = $(".reduceBtn");
    this.$count = document.querySelector('.countp');
    //点击购买或点击加入购物车
    this.$btnBuy = $('.btnbuy');
    this.$btnAddShop = $('.btnaddshop');
    //console.log( this.$btnBuy)
    this.init();
}
Detail.prototype.init = function(){
    this.insertData();
    //增加商品数量
    this.$addBtn.click(_=>{
        this.add();
    })
    //减少商品数量
    this.$reduceBtn.click(_=>{
        this.reduce();
    })
    //点击购买
    this.$btnBuy.click(_=>{
        this.btnBuy();
    })
    //点击加入购物车，将数据存储于本地
    this.$btnAddShop.click(_=>{
        this.btnAddShop();
    })
    console.log(localStorage.username)
}
Detail.prototype.add = function(){
    this.$count.value++;
}
Detail.prototype.reduce= function(){
    this.$count.value--;
    if(this.$count.value<=1){
        this.$count.value=1;
    }
}
Detail.prototype.btnBuy = function(){
    if(localStorage.getItem('username')){
        alert('请扫码支付')
    }else{
        alert('请先登录')
    }
}
Detail.prototype.btnAddShop = function(){

}
Detail.prototype.insertData = function(){
    this.$titleTxt = document.createTextNode(this.data.title)
    this.$title.appendChild(this.$titleTxt);
    let _this = this;
    if(this.data.price){
        $('.priceDm').append(`<dl class="promPrice_main" style="display:block">
        <dt><span class="w3" id="promPriceText">价格</span></dt>
        <dd><span class="mainprice"><i>¥</i> <span class="price"></span><span>00</span></span></dd>
    </dl>`);
    $('.price').append(this.data.price+".");
    }
    if(this.data.weight){
       $('.priceDm').append(` <dl class="weight"  style="display:block"> 
       <dt><span>重量</span></dt>
       <dd  class="weightSpan"></dd>
        </dl>`); 
        $('.weightSpan').append(this.data.weight);
    }
    if(this.data.version){
        $('.priceDm').append(` <dl class="version">
        <dt>
            <span>版本</span>
        </dt>
        <dd>
           <ul class="versionp">
               <li><span></span></li>
               <li> <span></span></li>
               <li><span></span></li> 
           </ul>
        </dd>
    </dl>`);
        for(var i =0;i<this.data.version.length;i++){
          $('.versionp').children('li').eq(i).children('span').append(this.data.version[i]);
        }
    }
    if(this.data.color){
       // console.log(this.data.color)
        $('.priceDm').append(` <dl class="color">
        <dt>
            <span>颜色</span>
        </dt>
        <dd>
           <ul class="colorp">
               <li><img src="" alt=""><span></span></li>
               <li><img src="" alt=""> <span></span></li>
               <li><img src="" alt=""> <span></span></li> 
           </ul>
        </dd>
    </dl>`);
        for(var i =0;i<this.data.color.length;i++){
            $('.colorp').children('li').eq(i).children('img').attr('src',this.data.color[i].src)
            $('.colorp').children('li').eq(i).children('span').append(this.data.color[i].title);
        }
    }
}
//加入数量


