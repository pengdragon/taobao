    /*cnpm install -D gulp-concat 插件合并
    cnpm install --save-dev gulp-uglify 插件压缩js
    cnpm install gulp 主件
    cnpm install --save-dev gulp-rename 插件重命名
    cnpm install --save-dev gulp-minify-html 插件压缩html
    cnpm install --save-dev gulp-babel @babel/core @babel/preset-env 插件将es6转成es5
    cnpm install --save-dev gulp-imagemin 插件图片压缩
    cnpm install --save-dev gulp-minify-css 插件css压缩
    cnpm install --save-dev gulp-connect 插件服务器

    

    */
    var gulp = require('gulp');
    var connect = require('gulp-connect');
    var uglify = require('gulp-uglify');//js压缩
    var minify = require('gulp-minify-html');//html压缩
    var imagemin = require('gulp-imagemin');//图片压缩
    //var pngquant = require('imagemin-pngquant')//pnp图片压缩
    //var minifyCss = require(' gulp-minify-css');//css压缩
    var rename = require('gulp-rename');
    var concat = require('gulp-concat');
    gulp.task('default',['allhtml','watch','connect']);
    //展示页面
   gulp.task('allhtml',function(){
       //捕捉文件
    gulp.src('app/**/*.html')
    //html压缩
    .pipe(minify())
    //放到dist中去
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
   })
   //监听
   gulp.task('watch',function(){
       gulp.watch('app/**/*.html',['allhtml'])
   })
   //建立服务器，执行服务器时即为打开
    gulp.task('connect',function(){
        console.log(444);
        connect.server({
            root:'dist',
            port:'7777',
            livereload:true
        });
    });





    
  

    gulp.task('nimihtml',function(){
        console.log('我要开始压缩htnl');
    })
    gulp.task('nimiimage',function(){
        console.log('我要开始压缩image');
    })

    gulp.task('nimi',['nimihtml','nimiimage'],function(){
    console.log('压缩成功');
    })
