/* 
fonction détéction résolution écran
Condition si résolution est inférieur à 970 alors ont affiche la div
dans le cas contraire la div est display none.
*/


jQuery(window).width(function(){
    var w = jQuery(window).width();
    if(w < 970) // si la resolution est inferieur à 970
    {
        jQuery('#slider2').css('display', 'block'); // alors ont display block la div "slider2"
    }
    if(w >= 970) // si la resolution est superieur ou égale à 970
    {
        jQuery('#slider2').css('display', 'none'); // alors ont display none la div "slider2"
    }
});
