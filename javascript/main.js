$(document).ready(function() {
  $("input[name='option']").on("change", function() {
    if (this.value == 1) {
      $(".title.placeholder").html("Administrator Keamanan dan Jaringan");
    } else if (this.value == 2) {
      $(".title.placeholder").html("Analis dan Administrator Basisdata");
    } else if (this.value == 3) {
      $(".title.placeholder").html("Software Engeenering");
    } else if (this.value == 4) {
      $(".title.placeholder").html("Vision Intelligent");
    } else {
      $(".title.placeholder").html("Pilih Peminatan.. !");
    }
  });


  $("aside .nav a:nth-child(2)").on("click", function(e){
    e.preventDefault();
    $(".form").toggleClass("sorot");
    $(".table.sorot").toggleClass("sorot");
    $(".dropdown.sorot").toggleClass("sorot");
  })

  $("aside .nav a:nth-child(1)").on("click", function(e){
    e.preventDefault();
    $(".form.sorot").toggleClass("sorot");
    $(".table").toggleClass("sorot");
    $(".dropdown.sorot").toggleClass("sorot");
  })

   $("aside .nav a:nth-child(3)").on("click", function(e){
    e.preventDefault();
    $(".form.sorot").toggleClass("sorot");
    $(".table.sorot").toggleClass("sorot");
    $(".dropdown").toggleClass("sorot");
  })
});
