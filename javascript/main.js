$(document).ready(function() {
  $("input[name='option']").on("change", function() {
    if (this.value == 1) {
      $(".title.placeholder").html("Frontend");
    } else if (this.value == 2) {
      $(".title.placeholder").html("Backend");
    } else if (this.value == 3) {
      $(".title.placeholder").html("User Experience");
    } else if (this.value == 4) {
      $(".title.placeholder").html("Quality Assurance");
    } else {
      $(".title.placeholder").html("Choose your Job...");
    }
  });
});
