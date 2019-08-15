(function ($) {
    // 测试
    // $(".star li").mouseenter(function () {
    //     $(".star li").css("background", "url('img/star2.png') no-repeat center center");
    //     $(this).css("background", "url('img/star2.png') no-repeat center center");
    //     $(this).nextAll().css("background", "url('img/graystar2.png') no-repeat center center");
    // })
    // $(".star2 li").mouseenter(function () {
    //     $(".star2 li").css("background", "url('img/halfstar2.png') no-repeat center center");
    //     $(this).css("background", "url('img/halfstar2.png') no-repeat center center");
    //     $(this).nextAll().css("background", "url('img/graystar2.png') no-repeat center center");
    // })

    $.fn.star = function (param) {
        var _this = this;
        var initParam = {
            defaultValue: 0,
            currentValue: 0,
            onChange: function () {

            },
            disable: false,
            allowHalf:false
        }
        var newParam = $.fn.extend({}, initParam, param);
        //设置当前值，便于移除和点击时的判断
        newParam.currentValue = newParam.defaultValue;


        //初始化方法实现
        var initstar = function (defaultValue) {
            var ul = $("<ul></ul>").addClass("u-ul");
            var count = 0;
            for (var i = 0; i < 5; i++) {
                if(newParam.allowHalf){
                    var li = $("<li></li>").addClass("u-half-li");
                    li.attr('starnum', i + 1);
                    //设置半星
                    if (defaultValue * 2 == count + 1) {
                        li.addClass('z-half-selected');
                    } else {
                        if (defaultValue * 2 >= count + 2) {
                            li.addClass('z-selected');
                        }
                    }
                    count = count+2;
                }else{
                    var li = $("<li></li>").addClass("u-li");
                    li.attr('starnum', i + 1);
                    //设置默认星星数量3
                    if (i < defaultValue) {
                        li.addClass('z-selected');
                    }
                }
                 ul.append(li);
            }
            $(_this).append(ul);



        }
        //初始化五个star
        initstar(newParam.defaultValue);
       

        //星值数量显示方法
        var starShow = function (value) {
            let fns = selector => {
                return [].slice.call(document.querySelectorAll(selector));
            };
            if(newParam.allowHalf){
                let stars = fns('.u-half-li');
                let preStars = stars.slice(0, value);
                console.log(preStars)
                let sufStars = stars.slice(value,5);
                console.log(sufStars)
    
                // for (let preStar of preStars) {
                    
                //     if (preStar.classList.contains('z-selected') == true) {
                //         preStar.setAttribute('class', 'u-half-li z-selected')
                //     }else if(preStar.classList.contains('z-half-selected') == true){
                //         preStar.setAttribute('class', 'u-half-li z-selected')
                //     }else if(!preStar.classList.contains('z-selected') 
                //     ||!preStar.classList.contains('z-half-selected')){
                //         preStar.setAttribute('class', 'u-half-li z-half-selected')
                //     }
                // }
                for (let key in preStars) {
                    if (preStars[key].classList.contains('z-selected') == true) {
                        preStars[key].setAttribute('class', 'u-half-li z-selected')
                            }else if(preStars[key].classList.contains('z-half-selected') == true){
                                preStars[key].setAttribute('class', 'u-half-li z-selected')
                            }else if(!preStars[key].classList.contains('z-selected') 
                            ||!preStars[key].classList.contains('z-half-selected')){
                                preStars[key].setAttribute('class', 'u-half-li z-half-selected')
                            }
                    //半星没实现。。。
                    // if(key>0){
                    //     if(preStars[key-1].classList.contains('z-half-selected') == true){
                    //         preStars[key-1].setAttribute('class', 'u-half-li z-selected')
                    //     }else if(!preStars[key-1].classList.contains('z-selected') 
                    //     ||!preStars[key-1].classList.contains('z-half-selected')){
                    //         preStars[key].setAttribute('class', 'u-half-li z-selected')
                    //     }
                    // }
                   
                }
                for (let sufStar of sufStars) {
                    if (sufStar.classList.contains('z-half-selected') == true 
                    ||sufStar.classList.contains('z-selected') == true  ) {
                        sufStar.setAttribute('class', 'u-half-li')
                    }
                }
               
            }else{
                let stars = fns('.u-li');
                let preStars = stars.slice(0, value);
                // console.log(preStars);
                let sufStars = stars.slice(value,5);
                // console.log(sufStars);
    
                for (let preStar of preStars) {
                    if (preStar.classList.contains('z-selected') == false) {
                        preStar.setAttribute('class', 'u-li z-selected')
                    }
                }
                for (let sufStar of sufStars) {
                    if (sufStar.classList.contains('z-selected') == true) {
                        sufStar.setAttribute('class', 'u-li')
                    }
                }
            }
           
            
        };
        if (!newParam.disable) {
        
        $(_this).find('li').mouseover(function () {
            var _starnum = $(this).attr('starnum');
            starShow(_starnum);

        });

        $(_this).find('li').mouseout(function () {
            // var _starnum = $(this).attr('starnum');
            // console.log(_starnum);
            //解决其他li的selected失效
            //滑动少1？？？emmm。。。
            //$(this).nextAll().removeClass("z-selected");

            var _currentValue = newParam.currentValue;
            //mouseout恢复当前星值，而不是当前li值！
            starShow(_currentValue);
        });
        //点击才能选中 ，排hover
        $(_this).find('li').click(function () {
            var _starnum = $(this).attr('starnum');
            //设置当前值为点击星级
            newParam.currentValue=_starnum;
            starShow(_starnum);
            //回调当前选择的星级
            newParam.onChange(_starnum);
        });
    }

}
})(jQuery);