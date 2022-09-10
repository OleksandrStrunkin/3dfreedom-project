var modal = document.getElementById('myModal');

var image = document.querySelectorAll('.morephoto');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
image.forEach(Element => {
  Element.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = Element.src;
    captionText.innerHTML = Element.alt;
  });
});

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
