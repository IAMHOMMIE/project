// Select the theme icon
const themeIcon = document.getElementById('icon1');
const body = document.body;

// Event listener for theme toggle
themeIcon.addEventListener('click', () => {
  // Toggle the dark-theme class on the body
  body.classList.toggle('dark-theme');
  
  // Change icon color (optional)
  if (body.classList.contains('dark-theme')) {
    themeIcon.src = 'images/light.png';  // Change to light mode icon
  } else {
    themeIcon.src = 'images/dark.png';  // Change to dark mode icon
  }
});
// video player
 document.querySelector('.play-video').addEventListener('click', function() {
      // Get the ion-icon element
      const icon = this.querySelector('ion-icon');
      const videoContainer = document.querySelector('.image1');
      
      // Check if the icon is play-outline
      if (icon.name === 'play-outline') {
          // Change the icon to pause-outline
          icon.setAttribute('name', 'pause-outline');
          
          // Create a video element and replace the image
          const video = document.createElement('video');
          video.src = 'images/video1.mp4';
          video.width = 300;
          video.height = 250;
          video.controls = true;
          video.autoplay = true;
          
          // Clear the existing image
          videoContainer.innerHTML = '';
          
          // Add the video to the container
          videoContainer.appendChild(video);
      } else {
          // If icon is pause-outline, change it back to play-outline
          icon.setAttribute('name', 'play-outline');
          
          // Pause the video and replace it with the original image
          const img = document.createElement('img');
          img.src = 'images/photos-4.jpg'; // or replace this with an image placeholder if needed
          img.width = 200;
          img.height = 200;
          videoContainer.innerHTML = '';
          videoContainer.appendChild(img);
      }
  });


  // stats counter

  let valueDisplays = document.querySelectorAll(".num");
  let interval = 5000;

 valueDisplays.forEach(valueDisplay => {
     let startValue = 0;
     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter)
      }
    }, duration);
 });