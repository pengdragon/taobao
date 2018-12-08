
    $(".detailp").click(function(){
        $.ajax('../json/product_list.json',{
            type:'GET',
            contentType:'application/json',
            success:function(res){
                if(res.code==1){
                    console.log(res.code)
                    let data = res.data;
                    data = JSON.stringify(data);
                    localStorage.removeItem('username');
                    localStorage.removeItem('user');
                    localStorage.removeItem('productList');
                    localStorage.setItem('product',data);
                    //location.href = "";
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