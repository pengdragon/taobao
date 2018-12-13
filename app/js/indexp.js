    var $shuzi = document.querySelector(".shuzi");
    $shuzi.innerHTML = localStorage.getItem('shopcount');
    var $go_shopcar = document.querySelector(".d-gouwuche");
    $go_shopcar.onclick = function(){
        location.href="page/shopcatzdb.html";
    }
    $(".detailp").on("click","li",function(){
        let index = $(this).index('.detailp li');
        $.ajax('../json/product_list.json',{
            type:'GET',
            contentType:'application/json',
            success:function(res){
                if(res.code==1){
                    let data = res.data[index];
                   // console.log(data)
                   data.id = index+1;
                    data = JSON.stringify(data);
                    //localStorage.removeItem('username');
                    localStorage.removeItem('user');
                    localStorage.removeItem('productList');
                    localStorage.setItem('product',data);
                    location.href = "page/detail_page.html";
                    // console.log(data[0].title)
                    // console.log(data[0].price)
                    // console.log(data[0].weight)
                    // console.log(data[0].version)
                    // console.log(data[0].color)
                    // console.log(data[0].src)

                    // console.log(data[1].title)
                    // console.log(data[1].price)
                    // console.log(data[1].version)
                    // console.log(data[1].color)
                    // console.log(data[1].src)
                }
               
            }

            })
    })