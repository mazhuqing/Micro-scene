// 核心js代码
	var swiper = new Swiper('.swiper-container', {
	  direction: 'vertical',
// 	  pagination: {
// 	    el: '.swiper-pagination',
// 	    clickable: true,
// 	  },
	  
	 loop:true,
	  
	 on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
	});
// 核心js代码结束

// 音乐图片控制
	var music = document.getElementById("music");
	var musicPic = music.getElementsByClassName("musicPic")[0];
	var aud = music.getElementsByClassName("aud")[0];
	
	// 让音乐和图片暂停
	var musicSta = 1;
	music.onclick=function(){
		if(musicSta == 1){
			// 让图片暂停
			musicPic.style.animation='none';
			// 让音乐停掉
			aud.pause();
			musicSta = 2;
		}else if(musicSta == 2){
			// 让图片旋转
			musicPic.style.animation='music 2s linear infinite';
			// 让音乐开始
			aud.play();
			musicSta = 1;
		}
	}
// 音乐图片控制结束