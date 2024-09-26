const passwordInput = document.getElementById('search-input');
const submitButton = document.getElementById('submit-button');

let currentAudio = null;

const passwords = {
  '666': {
    music: 'jenskiy-krik-ujasa-29477.mp3', 
    caption: 'Ааааааааа!',
    index1: 1
  },
  'satana': {
    music: 'blood-red.mp3', 
    caption: 'Кроваво-красный фон!',
    index1: 2
  },
  'exe': {
    download: () => {
        const link = document.createElement('a');
        link.href = 'data:text/plain,ты умрешь. Я уже знаю где ты живешь. Я ненавижу тебя хахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахаххахахахахахахахахахаххаахахаххахаахах';
        link.download = 'dead.txt';
        link.click();
      }
    },

'смерть': {
    music: 'blood-red.mp3',
    caption: 'Кроваво-красный фон!',
    index1: 2,
  },

  'ютуб': {
    music: '',
    caption: '',
    index1: 2,
  },

};



submitButton.addEventListener('click', () => {
  const password = passwordInput.value.trim().toLowerCase();
  if (passwords[password]) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
}else{
  setTimeout(() => {
    const screamAudio = new Audio('zvuk_-_krik_devushki.mp3');
    screamAudio.play();
  }, 1000);
}
  

 
 
if (password === 'exe') {
    passwords[password].download();
  } else {
    const audio = new Audio(passwords[password].music);
    audio.play();
    currentAudio = audio;
  }

  if(password === '666'){
    console.log('666');
    // Play the scream sound after 4 seconds
    setTimeout(() => {
      // Play the scream sound
      const screamAudio = new Audio('scream.mp3'); // replace with your scream sound file
      screamAudio.play();
      // Create a screamer image
      const screamerImage = document.createElement('img');
      screamerImage.src = 'download.jpg'; // replace with your screamer image file
      screamerImage.style.position = 'fixed';
      screamerImage.style.top = '0px';
      screamerImage.style.left = '0px';
      screamerImage.style.width = '100%';
      screamerImage.style.height = '100%';
      document.body.appendChild(screamerImage);
      // Delay the site shutdown by 1 second
      setTimeout(() => {
        // Shutdown the site (this will close the current tab)
        window.close();
      }, 1000);
    }, 4000);
  }
  // Check if the password is 'satana'
  if(password === 'satana'){
    console.log('satana');
    // Change the background color to blood-red
    document.body.style.backgroundColor = 'red';
    document.body.style.backgroundImage = 'none';
    // Add a blood-red overlay
    const bloodRedOverlay = document.createElement('div');
    bloodRedOverlay.style.position = 'fixed';
    bloodRedOverlay.style.top = '0px';
    bloodRedOverlay.style.left = '0px';
    bloodRedOverlay.style.width = '100%';
    bloodRedOverlay.style.height = '100%';
    bloodRedOverlay.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    document.body.appendChild(bloodRedOverlay);

    setTimeout(() => {
        // Play the scream sound
        const screamAudio = new Audio('jutkii-smeh-jenskii-rezkii-melodichnyii.mp3'); // replace with your scream sound file
        screamAudio.play();},2000)
  }

  if(password === 'смерть'){
    alert('уже поздно')
  }


  if(password === 'ютуб'){
    window.open('https://youtu.be/q3ahRlb5m5Yhttps://youtu.be/q3ahRlb5m5Y');
  }

  if(password === ''){
    window.open('https://youtu.be/q3ahRlb5m5Yhttps://youtu.be/q3ahRlb5m5Y');
  }

});