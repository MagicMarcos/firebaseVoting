// function writeUserData(name, email) {
//   const db = getDatabase();
//   set(ref(db, 'dogs/' + 'buut'), {
//     breed: 'CATR',
//     imgURL:
//       'https://www.thesprucepets.com/thmb/k3NXIqobAKvxoQ2ozGcwPxzIkpI=/3300x1856/smart/filters:no_upscale()/most-obedient-dog-breeds-4796922-hero-4440a0ccec0e42c98c5e58821fc9f165.jpg',
//   });
// }

// writeUserData(3, 'MArcos', 'marcos@email.com');

// const dbRef = ref(getDatabase());
// get(child(dbRef, `dogs/`))
//   .then(snapshot => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log('No data available');
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });
