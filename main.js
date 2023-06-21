function open_modal() {
  document.getElementById("modal").style.display = "block";
}

function close_modal() {
  document.getElementById("modal").style.display = "none";
}

var slide_index = 1;
show_slides(slide_index);

function plus_slides(e) {
  show_slides((slide_index += e));
}

function current_slide(e) {
  show_slides((slide_index = e));
}

function show_slides(e) {
  var i;
  var slides = document.getElementsByClassName("image_slides");
  var demo = document.getElementsByClassName("demo");
  var caption_text = document.getElementById("caption");
  if (e > slides.length) {
    slide_index = 1;
  }
  if (e < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < demo.length; i++) {
    demo[i].className = demo[i].className.replace(" active", "");
  }
  slides[slide_index - 1].style.display = "block";
  demo[slide_index - 1].className += " active";
  caption_text.innerHTML = demo[slide_index - 1].alt;
}
