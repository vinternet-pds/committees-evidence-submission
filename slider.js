function toggleContent(event) {

  if (event.target && event.target.className == 'slider-link') {

    var next = event.target.previousElementSibling;

    if (next.style.display == 'none') {
      event.target.innerHTML = 'show less';
      next.style.display = 'block';
    } else {
      next.style.display = 'none';
      event.target.innerHTML = 'show more';
    }
  }
}

document.addEventListener('click', toggleContent, true);

function userContent(rad) {
  var urads = document.getElementsByName(rad.name);

  document.getElementById('org').style.display = (urads[0].checked) ? 'none' : 'block';
  document.getElementById('org').style.display = (urads[1].checked) ? 'block' : 'none';
}

function evidenceContent(rads) {
  var erads = document.getElementsByName(rads.name);

  document.getElementById('wtn').style.display = (erads[0].checked) ? 'block' : 'none';
  document.getElementById('upd').style.display = (erads[1].checked) ? 'block' : 'none';
}
