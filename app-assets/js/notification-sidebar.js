$(document).ready( function(){

    /********************************
    *           Customizer          *
    ********************************/
    var body = $('body');

    // Customizer toggle & close button click events  [Remove customizer code from production]
    $('.notification-sidebar-toggle').on('click',function(){
        $('.notification-sidebar').toggleClass('open');
    });
    $('.notification-sidebar-close').on('click',function(){
        $('.notification-sidebar').removeClass('open');
    });
    if($('.notification-sidebar-content').length > 0){
        $('.notification-sidebar-content').perfectScrollbar({
            theme:"dark"
        });
    }
});