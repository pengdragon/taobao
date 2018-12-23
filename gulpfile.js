    /*cnpm install -D gulp-concat 插件合并
    cnpm install --save-dev gulp-uglify 插件压缩js
    cnpm install gulp 主件
    cnpm install --save-dev gulp-rename 插件重命名
    cnpm install --save-dev gulp-minify-html 插件压缩html
    cnpm install --save-dev gulp-babel @babel/core @babel/preset-env 插件将es6转成es5
    cnpm install --save-dev gulp-imagemin 插件图片压缩
    cnpm install --save-dev gulp-minify-css 插件css压缩
    cnpm install --save-dev gulp-connect 插件服务器
    cnpm install gulp-rev-collector -D 生成标识码插件
    cnpm install --save-dev gulp-rev 生成标识码插件

    */
    var rev = require('gulp-rev');
    // var revCollector = require('gulp-rev-collector');
    var gulp = require('gulp');
    var connect = require('gulp-connect');
    var uglify = require('gulp-uglify');//js压缩
    var minify = require('gulp-minify-html');//html压缩
    var rename = require('gulp-rename');
    var concat = require('gulp-concat');
    var gulpBabel = require('gulp-babel');
    var  runSequence  = require('run-sequence');
    var sass = require('gulp-sass');
    sass.compiler = require('node-sass');
    const image = require('gulp-image');
    gulp.task('dev',function(cb){
        runSequence(
            ['images','startjs','sass'],
            'starthtml',
            'startwatch',
            'connect',
        )
    })
    gulp.task('xxx',function(){
        console.log(555)
    })
  
    gulp.task('images',function(){//图片压缩
        gulp.src('app/images/**/*')
        .pipe(image())
        .pipe(gulp.dest('dist/images'));
    })
    gulp.task('sass', function () {
        return gulp.src('app/css/*.scss')//进入sass文件夹，然后选择其文件夹下所有的sass文件
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); //在dist下创建一个css文件夹，将sass预编译后的css文件放在其中；
      });

    gulp.task('starthtml',function(){
        //gulp.src(['rev/**/*.json','app/**/*.html'])//将rev文件和绑定
        //.pipe(revCollector())
        //.pipe(minify())
        gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
    })
    gulp.task('startjs',function(){
        gulp.src('app/**/*.js')
        .pipe(gulpBabel({
            presets:['@babel/env']
        }))
        //.pipe(concat('all.js'))
        .pipe(uglify())
       // .pipe(rev())
        //.pipe(gulp.dest('dist'))
        //.pipe(rev.manifest())//重新弄一个文件夹存放
        //.pipe(gulp.dest('rev'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
    })
    gulp.task('startimages',function(){
        gulp.src('app/**/*')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
    })
    gulp.task('startcss',function(){
        gulp.src('app/**/*.css')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    })
    gulp.task('startwatch',function(){
        gulp.watch('app/**/*.html',['starthtml']);
        gulp.watch('app/**/*.js',['startjs']);
        gulp.watch('app/**/*',['startimages']);
        gulp.watch('app/**/*.css',['startcss']);
        gulp.watch('app/css/*.scss',['sass']);
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
















   // gulp.task('default',['allhtml','watch','connect']);
    //展示页面
   gulp.task('allhtml',function(){
       //捕捉文件
    gulp.src(['rev/**/*.json','app/**/*.html'])//将rev文件和绑定
    .pipe(revCollector())//用于将'rev/**/*.json'对应js和'app/**/*.html'中的js名称替换；
    //html压缩
    .pipe(minify())
    //放到dist中去
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());//服务器自动刷新
   })
   gulp.task('alljs',function(){
    gulp.src(['app/**/*.js'])//生成的的rev文件；
    .pipe(gulpBabel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .on('error',function(err){
        console.log(err.message);
        this.emit('end');//emit为触发，触发end，触发这一步结束了，可以执行下一步了 因为如果有错服务器就会停止，有着这个，服务器就不会停止了
    })
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())//重新弄一个文件夹存放
    .pipe(gulp.dest('rev'));
   })
   //监听，如果'app/**/*.html'右边，立刻执行'allhtml'
//    gulp.task('watch',function(){
//        gulp.watch('app/**/*.html',['allhtml'])
//    })
   





    
  

    // gulp.task('nimihtml',function(){
    //     console.log('我要开始压缩htnl');
    // })
    // gulp.task('nimiimage',function(){
    //     console.log('我要开始压缩image');
    // })

    // gulp.task('nimi',['nimihtml','nimiimage'],function(){
    // console.log('压缩成功');
    // })
