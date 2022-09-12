var modal = document.getElementById('myModal');

var image = document.querySelectorAll('.more-photo__img');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
image.forEach(Element => {
  element.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = Element.src;
    captionText.innerHTML = Element.alt;
  });
});

var span = document.getElementsByClassName('button__close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
