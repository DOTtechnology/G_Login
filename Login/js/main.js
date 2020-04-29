var x = window.matchMedia("(min-width: 1024px)")
if(x.matches){
    function shift(){
        $('#s1').toggleClass('d-none');
        $('#s2').toggleClass('d-block');
        $('.sign').html('<h1>Register</h1>');
        $('.dont').html('Already have an account?');
        $(".LeftContent").css("animation","slide1 0.3s forwards");
        $('.RightContent').css("animation","slide2 0.3s forwards");
        $('.xyz').addClass('d-none');
        $('.social-login-label').addClass('d-none');
        $('#form-2').toggleClass('d-block');
        $('#form-1').toggleClass('d-none');
        //$('.LeftContent').css("background-image","url(./images/green-2.png)");
        $('.log').html('<img class="" src="./images/sign-up.png" style="height: 200px; margin-bottom: 20px;" alt="">');
    }
    function unshift(){
        $('#s1').toggleClass('d-none');
        $('#s2').toggleClass('d-block');
        $('#form-2').toggleClass('d-block');
        $('#form-1').toggleClass('d-none');
        $('.xyz').removeClass('d-none');
        $('.dont').html(`Don't have an account?`);
        $('.social-login-label').removeClass('d-none');
        $('.sign').html('<h1>Sign In</h1>');
        $(".LeftContent").css("animation","bslide1 0.3s forwards");
        $('.RightContent').css("animation","bslide2 0.3s forwards");
        //$('.LeftContent').css("background-image","url(./images/green-1.png)");
        $('.log').html('<img class="" src="./images/login.png" style="height: 200px; margin-bottom: 20px;" alt="">');
    }
}
else{
    function shift(){
        $('#s1').toggleClass('d-none');
        $('#s2').toggleClass('d-block');
        $('.sign').html('<h1>Register</h1>');
        $('.dont').html('Already have an account?');
        $('.xyz').addClass('d-none');
        $('.social-login-label').addClass('d-none');
        $('#form-2').toggleClass('d-block');
        $('#form-1').toggleClass('d-none');
        //$('.LeftContent').css("background-image","url(./images/green-2.png)");
        $('.log').html('<img class="" src="./images/sign-up.png" style="height: 200px; margin-bottom: 20px;" alt="">');
    }
    function unshift(){
        $('#s1').toggleClass('d-none');
        $('#s2').toggleClass('d-block');
        $('#form-2').toggleClass('d-block');
        $('#form-1').toggleClass('d-none');
        $('.xyz').removeClass('d-none');
        $('.social-login-label').removeClass('d-none');
        $('.dont').html(`Don't have an account?`);
        $('.sign').html('<h1>Sign In</h1>');
        //$('.LeftContent').css("background-image","url(./images/green-1.png)");
        $('.log').html('<img class="" src="./images/login.png" style="height: 200px; margin-bottom: 20px;" alt="">');
    }
}