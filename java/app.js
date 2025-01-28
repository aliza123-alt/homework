function upDate(previewPic) {
    console.log("Mouse over an image", previewPic);
  
    const imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt; // Text becomes the alt attribute of the image
    imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Set background image
  }
  
  function undo() {
    console.log("Mouse left the image gallery");
  
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url("")'; // Reset background image
    imageDiv.textContent = "Hover over an image below to display here."; // Reset text
  }
  
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', () => upDate(thumbnail));
    thumbnail.addEventListener('mouseleave', undo);
  });
  