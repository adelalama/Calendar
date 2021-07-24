$(document).ready(function () {
  
    // looks for saveBtn pressed and saves to local storage
    $('.saveBtn').on('click', function () {

      var info = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, info);
  
      // notification item was successfully saved to local storage
      $('.notification').removeClass('ghost');
      
      // remove notification after 3 seconds
      setTimeout(function () {
        $('.notification').addClass('ghost');
      }, 3000);
    });

    
    function hourUpdater() {
        // get number of hours passed
        var currentHour = moment().hours();
    
        // loop over time blocks, validating if currentHour is greater than block hour
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
          // depending on the current hour, different possible css classes will be assigned to the block hour: past, present and future 
          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      }
    
      hourUpdater();
    
      // interval to determine if hourUpdater should be called
      var interval = setInterval(hourUpdater, 15000);
    
      // load saved local storage data
      $('#hour-9 .description').val(localStorage.getItem('hour-9'));
      $('#hour-10 .description').val(localStorage.getItem('hour-10'));
      $('#hour-11 .description').val(localStorage.getItem('hour-11'));
      $('#hour-12 .description').val(localStorage.getItem('hour-12'));
      $('#hour-13 .description').val(localStorage.getItem('hour-13'));
      $('#hour-14 .description').val(localStorage.getItem('hour-14'));
      $('#hour-15 .description').val(localStorage.getItem('hour-15'));
      $('#hour-16 .description').val(localStorage.getItem('hour-16'));
      $('#hour-17 .description').val(localStorage.getItem('hour-17'));
      //display date 
      $('#currentDay').text(moment().format('dddd, MMMM Do'));
    });
    