(function(){
    console.log(localStorage)
    function login_zdb(){
      this.$none_block = document.querySelector(".none-block");
      this.$reg = this.$none_block.nextElementSibling;
      this.$userinp = document.querySelector('#gwcdl');
      this.init = function(){
          this.panduan();
          this.$none_block.onclick = _=>{
            if(!localStorage.username){
                open('page/sign_in.html');
            }
          }
          this.$reg.onclick = _=>{
              open('page/register.html');
          }
      }
      this.panduan = function(){
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
             console.log(localStorage.username)
         }
      }
    }
    const $login = new login_zdb();
    $login.init();
}())


