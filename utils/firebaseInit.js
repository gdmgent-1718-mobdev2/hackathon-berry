
export function initFirebase(firebase) {
  //firebase config code
  var config = {
    apiKey: "AIzaSyC95KPd_DJwnTMgOehiYew93meP_UUx3c0",
    authDomain: "hackathon-berry.firebaseapp.com",
    databaseURL: "https://hackathon-berry.firebaseio.com",
    projectId: "hackathon-berry",
    storageBucket: "hackathon-berry.appspot.com",
    messagingSenderId: "258662290059"
  };

  firebase.initializeApp(config);
}