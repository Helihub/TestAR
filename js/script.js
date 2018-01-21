$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        if($('button span').hasClass('glyphicon-chevron-right')){
          $(this).html('<span class="glyphicon glyphicon-chevron-left"></span>');
        } else {
          $(this).html('<span class="glyphicon glyphicon-chevron-right"></span>'); 
        }
    });

});
