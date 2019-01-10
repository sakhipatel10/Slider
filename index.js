
let imageIndex = 1;

slideImages(imageIndex);

function changeImg(n) {
  slideImages(imageIndex += n);
}

function onclickImg(n) {
  slideImages(imageIndex = n);
}

function slideImages(n) {
  //alert('slideImages('+ n +')\nimageIndex='+imageIndex);
  let i;
  const images = document.getElementsByClassName("myImages");
  const squares = document.getElementsByClassName("demo cursor");
  if (n==undefined){n = ++imageIndex}
  if (n > images.length) {imageIndex = 1}
  if (n < 1) {imageIndex = images.length}
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }
  for (i = 0; i < squares.length; i++) {
      squares[i].className = squares[i].className.replace(" active", "");
  }
  images[imageIndex-1].style.display = "block";
  squares[imageIndex-1].className += " active";
  
  setTimeout(slideImages, 5000); // Change image every 5 seconds
    
    
    
    let counter = 5;
    const interval = setInterval(() => {
    counter--;
    document.getElementById("timer").innerHTML = counter;
    if (counter == 0) {
        // Display a login box
        clearInterval(interval);
    }
}, 1000);   

}