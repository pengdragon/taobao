//渲染商品信息
function Detail(obj){
    if(typeof obj.ele ==='string')obj.ele = document.querySelector(obj.ele);
    this.$detail = obj.ele;
    this.$title = this.$detail.firstElementChild.firstElementChild;
    console.log(this.$title)
    this.data = JSON.parse(localStorage.getItem('product'));

    //添加头部和尾部
    $('#headerp').load('header.html #header',function(){
        console.log('引入头部');
        this.$none_block = document.querySelector(".none-block");
        this.$reg = this.$none_block.nextElementSibling;
        this.$userinp = document.querySelector('#gwcdl');
        if(!localStorage.username){
            this.$none_block.innerHTML="请登录";
            this.$userinp.value="登录";
           
         }else{
             let username = localStorage.getItem('username');
             username = '彭龙';
             this.$none_block.innerHTML= username;
             this.$userinp.value=username;
             this.$none_block.style.background="orange";
             this.$none_block.style.color="white";
             this.$none_block.style.padding="3px";
             //console.log(localStorage.username)
         }
        $(function () {
            $(".navigation-bar").mouseenter(function () {
                $(".nab-particulars").toggle(true);
                $(".navigation-bar").find("em").attr("class", "pjd pjd-jiantoushang");
            });
        });
        $(function () {
            $(".navigation-bar").mouseleave(function () {
                $(".nab-particulars").toggle(false);
                $(".navigation-bar").find("em").attr("class", "pjd pjd-jiantouxia");
            });
        });
        //网站导航//
        $(function () {
            $(".merchan").mouseenter(function () {
                $(".merchan-la").toggle(true);
                $(".merchan").find("em").attr("class", "pjd pjd-jiantoushang");
            });
        });
        $(function () {
            $(".merchan").mouseleave(function () {
                $(".merchan-la").toggle(false);
                $(".merchan").find("em").attr("class", "pjd pjd-jiantouxia");
            });
        });
        //商家入驻//
        $(function () {
            $(".customer-service").mouseenter(function () {
                $(".service-la").toggle(true);
                $(".customer-service").find("em").attr("class", "pjd pjd-jiantoushang");
            });
        });
        $(function () {
            $(".customer-service").mouseleave(function () {
                $(".service-la").toggle(false);
                $(".customer-service").find("em").attr("class", "pjd pjd-jiantouxia");
            });
        });
        //客户服务//
        $(function () {
            $(".d-wodedingdan").mouseenter(function () {
                $(".wddd-la").toggle(true);
                $(".d-wodedingdan").find("em").attr("class", "pjd pjd-jiantoushang");
            });
        });
        $(function () {
            $(".d-wodedingdan").mouseleave(function () {
                $(".wddd-la").toggle(false);
                $(".d-wodedingdan").find("em").attr("class", "pjd pjd-jiantouxia");
            });
        });
        //我的订单//
        $(function () {
            $(".d-wodeyigou").mouseenter(function () {
                $(".wdyg-la").toggle(true);
                $(".d-wodeyigou").find("em").attr("class", "pjd pjd-jiantoushang");
            });
        });
        $(function () {
            $(".d-wodeyigou").mouseleave(function () {
                $(".wdyg-la").toggle(false);
                $(".d-wodeyigou").find("em").attr("class", "pjd pjd-jiantouxia");
            });
        });
        //我的易购//
        $(function () {
            $(".d-gouwuche").mouseenter(function () {
                $(".gouwuche-la").toggle(true);
                $(".d-gouwuche").find("em").attr("class", "pjd pjd-jiantoushang");
            });
        });
        $(function () {
            $(".d-gouwuche").mouseleave(function () {
                $(".gouwuche-la").toggle(false);
                $(".d-gouwuche").find("em").attr("class", "pjd pjd-jiantouxia");
            });
        });
    });
    $('#footerp').load('footer.html #footerd',function(){
        console.log('引入尾部');
   
    });
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
        this.seItem();
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
//商品信息的存储
Detail.prototype.seItem = function(){
    this.data["count"] = Number(this.$count.value);
    var shopList = localStorage.getItem('shopList') || '[]';
    shopList = JSON.parse(shopList);
    for(var i = 0; i < shopList.length; i++) {
        if(this.data.id == shopList[i].id) {
            // 此商品已经存在
            shopList[i].count+=this.data.count;
            console.log( 111)
            break;
        }                         
    }
    if(i == shopList.length) {
        // 商品不存在
        shopList.push(this.data);
    }     
    console.log(this.data);
    console.log(shopList);
      // 在把全部数据存到本地
      localStorage.shopList = JSON.stringify(shopList);  
     //localStorage.removeItem('shopList'); 
    console.log(JSON.parse(localStorage.getItem('shopList')));
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


