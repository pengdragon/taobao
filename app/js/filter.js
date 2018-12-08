
    function Filter(obj){
        if(typeof obj.ele ==="string")this.ele = document.querySelector(obj.ele);
        else this.ele = obj.ele;
        //展示区
        this.$show_image = this.ele.firstElementChild;
        this.$show_image_img = this.$show_image.firstElementChild;
        this.$show_image_filter = this.$show_image.lastElementChild;
        //选择区
        this.$img_box = this.ele.lastElementChild;
        this.$img_box_childAll =  this.$img_box.children;
        //放大区
        this.$show_big = this.$img_box.previousElementSibling;
        this.$show_big_img = this.$show_big.firstElementChild;
       //获取本地存储的数据并将其渲染到页面中
        this.data = JSON.parse(localStorage.getItem('product'));
        console.log(this.data)
        for(let i =0;i< this.data.srcBtn.length;i++){
            this.$img_box_childAll[i].firstElementChild.setAttribute('src',this.data.srcBtn[i])
        }
        this.$show_image_img.setAttribute('src',this.data.srcShow[0])
        this.$show_big_img.setAttribute('src',this.data.srcBig[0])
    }
    Filter.prototype.init = function(){
    this.event();
    }
    Filter.prototype.event= function(){
        this.$show_image.onmouseenter =_=>{
            this.$show_image_filter.style.display="block";
            this.$show_big.style.display="block"; 
             //最大值判断
            this.maxX = this.$show_image.clientWidth- this.$show_image_filter.offsetWidth;
            this.mayY =  this.$show_image.clientHeight- this.$show_image_filter.offsetHeight;   
        }
        this.$show_image.onmousemove =e=>{
            e = e || window.event;
            let left = e.pageX - this.ele.offsetLeft - this.$show_image_filter.offsetWidth/2;
            let top = e.pageY -this.ele.offsetTop -  this.$show_image_filter.offsetHeight/2;
            if(left<0)
            left = 0;
            else if(left>=this.maxX)
            left =this.maxX;    
            if(top<0)
            top = 0;
            else if(top>=this.mayY)
                top = this.mayY;
            this.$show_image_filter.style.left = left +'px';
            this.$show_image_filter.style.top = top +'px';
            this.$show_big_img.style.left = -1.78*left+'px';
            this.$show_big_img.style.top= -1.78*top+'px';
        }
        this.$show_image.onmouseleave = _=>{
            this.$show_image_filter.style.display="none";
            this.$show_big.style.display="none";
        }
        for(let i = 0;i<  this.$img_box_childAll.length;i++){
            this.$img_box_childAll[i].index=i;
            this.$img_box_childAll[i].classList.remove('active');
            this.$img_box_childAll[i].onclick =_=>{
                for(var j = 0;j<this.$img_box_childAll.length;j++){
                    this.$img_box_childAll[j].classList.remove('active');                       
                }
                this.$img_box_childAll[i].classList.add('active');
                //this.$show_big_img.setAttribute('src',`img/${i}.jpg`);
                //this.$show_image_img .setAttribute('src',`img/${i}.jpg`);
                this.$show_image_img.setAttribute('src',this.data.srcShow[i])
                this.$show_big_img.setAttribute('src',this.data.srcBig[i])
               
            }
        }       
    }