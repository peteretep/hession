
$(document).ready(function(){

<!--      $("#paint").show();-->
<!--      $("#repair").show();-->
<!--      $("#build").show();-->
<!--      $("#weld").show();-->
<!--      -->
      $("#paint_details").hide();


<!--paint -->

    $('#paint' || '#paint_menu').click(function()
    {
      $("#paint").toggle();
      $("#paint_details").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

    $('#hide_paint').click(function()
    {
      $("#paint_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

<!--Repair-->

    $('#repair').click(function()
    {
      $("#repair_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

    $('#hide_repair').click(function()
    {
      $("#repair_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

<!--  Build  -->
    $('#build').click(function()
    {
      $("#build_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

    $('#hide_build').click(function()
    {
      $("#build_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

<!--Weld-->
    $('#weld').click(function()
    {
      $("#weld_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });

    $('#hide_weld').click(function()
    {
      $("#weld_details").toggle();

      $("#paint").toggle();
      $("#build").toggle();
      $("#repair").toggle();
      $("#weld").toggle();
    });
});
  $('.leftbar').dblclick(function(e){
    e.preventDefault();
})
