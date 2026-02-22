// Show profile image preview
const profileInput = document.getElementById('profileImage');
const profilePreview = document.getElementById('profilePreview');

profileInput.addEventListener('change', function() {
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      profilePreview.src = e.target.result; // show selected image
    }
    reader.readAsDataURL(file);
  }
});

// Submit profile (for now just console log)
function submitProfile(){
  const telegram = document.getElementById('telegram').value;
  const youtube = document.getElementById('youtube').value;
  if(!telegram || !youtube || !profilePreview.src){
    alert("Please enter all fields and choose an image!");
    return;
  }
  console.log("Telegram:", telegram);
  console.log("YouTube:", youtube);
  console.log("Profile Image:", profilePreview.src);
  alert("Profile submitted! Next, we'll show all users.");
}