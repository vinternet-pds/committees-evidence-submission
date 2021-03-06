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

function showDocument() {
  var doc = document.getElementById('updoc');
  if (doc.style.display === 'none') {
    doc.style.display = 'table';
  } else {
    doc.style.display = 'none';
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

function privacyContent(radz) {
  var prads = document.getElementsByName(radz.name);

  document.getElementById('prv').style.display = (prads[0].checked) ? 'none' : 'block';
  document.getElementById('prv').style.display = (prads[1].checked) ? 'block' : 'none';
}
