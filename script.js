$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  $(".saveBtn").on("click", function () {
    let hour = $(this).parent().attr("id").split("-")[1];
    let description = $(this).siblings(".description").val();
    localStorage.setItem("hour-" + hour, description);
  });

  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("-")[1]);
    let currentHour = dayjs().hour();
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function () {
    var hour = $(this).attr("id").split("-")[1];
    var savedDescription = localStorage.getItem("hour-" + hour);
    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription);
    }
  });
});
