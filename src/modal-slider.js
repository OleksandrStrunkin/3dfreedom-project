var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
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

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
