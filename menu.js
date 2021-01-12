var overlay = document.getElementById('overlay');
var btn = document.getElementById('abc');
var closeBtn = document.getElementById('close-btn');
var menuWrap = document.querySelector('.menu-wrap');
var menuHeader = document.querySelector('.menu-wrap-header');
btn.addEventListener('click',function(){
    closeBtn.style.opacity = '1';
    menuHeader.style.left = '0';
    menuWrap.style.left = '0';
    overlay.style.display ='block';
});
overlay.addEventListener('click',function(){
    overlay.style.display = 'none';
    menuHeader.style.left = '-350px';
    menuWrap.style.left = '-350px';
    closeBtn.style.opacity = '0';

    Object.assign(subMenuSub.style,{
        opacity: '0',
        display: 'none',
    });
});
closeBtn.addEventListener('click',function(){
    overlay.style.display = 'none';
    closeBtn.style.opacity = '0';
    menuHeader.style.left = '-350px';
    menuWrap.style.left = '-350px';

    Object.assign(subMenuSub.style,{
        opacity: '0',
        display: 'none',
    });
});

// sub-subMenu
var subMenuSub = document.querySelector('.submenu-sub-wrap');
var amazonMusicElement = document.getElementById('1-1');
amazonMusicElement.addEventListener('click',function(e){
    Object.assign(subMenuSub.style,{
        opacity: '1',
        display: 'block',
    });
    menuWrap.style.left = '-350px';
});

var backSubMenu = document.querySelector('.submenu-sub-wrap-header');
backSubMenu.addEventListener('click',function(){
    menuWrap.style.left = '0';
    Object.assign(subMenuSub.style,{
        opacity: '0',
        display: 'none',
    });
});

var onOverlay = document.querySelector('.logo-navbar-search-language');
var menuOverlay = document.querySelector('.overlayNav');
onOverlay.onmouseover = function(){
    menuOverlay.style.opacity = '1';
};
onOverlay.onmouseout = function(){
    menuOverlay.style.opacity = '0';
};
