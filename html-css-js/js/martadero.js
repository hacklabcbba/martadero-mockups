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
