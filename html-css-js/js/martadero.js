/**
 * Created by marcelorodcla on 09-08-15.
 */
$(document).ready(function(){
    $('.gs-slidenav-option').on('click', function(){
        $('.gs-slidenav').toggleClass('open');
        console.log('in');
        $('.gs-slidenav-menu').removeClass('close-menu');
    } )
});


//$(document).ready(function(){
//    var $event = $(".events .event.feature:nth-child(2n+2)").next(".event").addClass("eurke");
//    $event.each(function(){
//        var $eventPosition = $(this).position().top;
//        console.log($(this).position().top);
//        //$(this).css({
//        //    position: 'absolute',
//        //    top: $eventPosition - 275 +'px'
//        //});
//    });
//});

