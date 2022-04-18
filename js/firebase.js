window.onload = () => voteCheck();
// Import the functions you need from the SDKs you need
import fbCfb from './firebaseConfig';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';

import {
  getDatabase,
  ref,
  update,
  onValue,
  increment,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: fbCfb.apiKey,
  authDomain: fbCfb.authDomain,
  databaseURL: fbCfb.databaseURL,
  projectId: fbCfb.projectId,
  storageBucket: fbCfb.storageBucket,
  messagingSenderId: fbCfb.messagingSenderId,
  appId: fbCfb.appId,
  measurementId: fbCfb.measurementId,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();

// localStorage.removeItem('voted');

const voteCount = ref(db, 'dogs/');
onValue(voteCount, snapshot => {
  const data = snapshot.val();
  setVotingResults(data);
});

function setVotingResults(data) {
  document
    .querySelectorAll('.votingResults')
    .forEach(
      el => (el.innerText = `${data[el.id].votes} out of ${data.totalVotes}`)
    );
}

document
  .querySelectorAll('.btn')
  .forEach(btn => btn.addEventListener('click', logger));

function logger(e) {
  const id = e.target.parentNode.children[0].firstChild.id;
  const updates = {};
  updates['dogs/' + id + '/votes'] = increment(1);
  updates['dogs/totalVotes'] = increment(1);

  localStorage.setItem('voted', 't');
  voteCheck();
  update(ref(db), updates);
}

function voteCheck() {
  if (localStorage.getItem('voted') !== null) {
    document
      .querySelectorAll('.btn')
      .forEach(el => (el.style.display = 'none'));
    document
      .querySelectorAll('.votingResults')
      .forEach(el => (el.style.display = 'block'));
  } else {
    document
      .querySelectorAll('.votingResults')
      .forEach(el => (el.style.display = 'none'));
  }
}
