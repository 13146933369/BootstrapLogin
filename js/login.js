$(function () {
    var loginHead =$(".loginHead ul li");
    var loginFormContent = $(".loginForm .loginFormContent")
    var loginHeadLeng = loginHead.length
    var loginFormContentLeng = loginFormContent.length
    for(var i=0;i<loginHeadLeng;i++){
        loginHead[i].index = i;
        $(".loginHead ul li").click(function () {
           for(var j=0; j< loginFormContentLeng;j++){
               $(loginHead[j]).find(".login-font-title").removeClass("loginHeadfontColor")
               $(loginHead[j]).find(".loginHeadLine").removeClass("lineShow")
               $(loginFormContent[j]).removeClass("showForm")

           }
            $(this).find(".login-font-title").addClass("loginHeadfontColor")
            $(this).find(".loginHeadLine").addClass("lineShow")
            $(loginFormContent[this.index]).addClass("showForm")

        })
    }

})