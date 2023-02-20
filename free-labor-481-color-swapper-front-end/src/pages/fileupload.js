//Solomon Hatchett

var imageFile;


// Start the process of conneenting to the firebase functions
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import {getStorage, ref ,uploadBytesResumable,getDownloadURL}from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";


// Conneenting to firebase
	const firebaseConfig = {
		apiKey: "AIzaSyDLlGi_n-ytDtKa-3vA5GpMFiRP3pIK9vM",
		authDomain: "testing-demo-bd1d0.firebaseapp.com",
		projectId: "testing-demo-bd1d0",
		storageBucket: "testing-demo-bd1d0.appspot.com",
		messagingSenderId: "34361186289",
		appId: "1:34361186289:web:49afc7f9a6ca61ad321650",
		measurementId: "G-QSY8XD22BY"
	};


  // Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const storage=getStorage();


	document.getElementById("getimage").onchange = function(event) {getFile(event)};
  
  
  
	function getFile(e) {
 
		imageFile= e.target.files[0];
	
		console.log(imageFile.name);
    
	}
   
   
 
	document.getElementById("uploading").onclick = function() {uploadFile()};
	function uploadFile(){
  	
		const meta={
  
		contentType: imageFile.type
		}
  
  
  
		let store= ref(storage,"images/photo");
		let upload=uploadBytesResumable(store,imageFile,meta)
  
		getDownloadURL(store).then(function(url){
  
		document.getElementById("view").src=url 
		
		}
  
  
  
  );}
  
