var none_block = document.querySelector("none-block");
none_block.onclick=function(){
    window.location.href = "http://www.baidu.com"; 
}
if(localStorage.username=""){
    $(".none-block").append("请登录");
}else{
    $(".none-block").append(localStorage.username)
}

