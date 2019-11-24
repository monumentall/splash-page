document.addEventListener('DOMContentLoaded', function(){
  console.log('ready');
  const submitButton = document.getElementsByClassName('submit')[0];
  const closeButton = document.getElementById('close');
  const subscriptionBox = document.getElementById('mc_embed_signup');
  function closeMailChimpBox(e) {
    subscriptionBox.classList.toggle('open');
  }
  submitButton.addEventListener('click', closeMailChimpBox);
  closeButton.addEventListener('click', closeMailChimpBox);
});
