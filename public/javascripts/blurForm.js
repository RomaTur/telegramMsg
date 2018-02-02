let fn = (function(){
    return {
        set: function () {
            let bgWidth = document.querySelector('.wrapper__bg-img').offsetWidth,
                posLeft = -formContainer.offsetLeft,
                posTop = -formContainer.offsetTop,
                blurCSS = formBlur.style
                blurCSS.backgroundSize = (bgWidth-(bgWidth*0.0833)) + 'px' + ' ' + 'auto'
                blurCSS.backgroundPosition = (posLeft-posLeft*0.109) + 'px' + ' ' + (posTop-posTop*0.1178) + 'px'
        }
    }
}());

 let formContainer = document.querySelector('.form');
let formBlur = document.querySelector('.form__blur');
if(formContainer && formBlur){
    fn.set()
    window.onresize = function(){
        fn.set()
    }
    window.onscroll = function(){
        fn.set()
    }
}