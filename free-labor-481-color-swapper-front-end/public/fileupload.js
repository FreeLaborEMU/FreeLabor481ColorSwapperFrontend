//Solomon Hatchett

var imageFile;


// Start the process of conneenting to the firebase functions
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import {getStorage, ref ,uploadBytesResumable,getDownloadURL}from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";


// Conneenting to firebase
	 const firebaseConfig = {

    apiKey: "AIzaSyB-3Iy8XcZ8WZlN0W49rptRb5B-QUbref0",

    authDomain: "testing-6f9e7.firebaseapp.com",

    projectId: "testing-6f9e7",

    storageBucket: "testing-6f9e7.appspot.com",

    messagingSenderId: "240110318389",

    appId: "1:240110318389:web:0ccf4d6df17c7f62b9d27c"

  };

  // Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const storage=getStorage();

// Get file from the input
	document.getElementById("getimage").onchange = function(event) {getFile(event)};
  
  
  //Get file after being called 
	function getFile(e) {
 
		imageFile= e.target.files[0];
	
		console.log(imageFile.name);
    
	}
   
   
 //Call uploadFile
	document.getElementById("uploading").onclick = function() {uploadFile()};
	function uploadFile(){
  	
	console.log("hello");
	
	// Data file type
		const meta={
  
		contentType: imageFile.type
		}
		
  // Location of storage and files
		let store= ref(storage,"images/photo");
		
		
	// Upload the photo to data base	
		let upload=uploadBytesResumable(store,imageFile,meta);
		
  //Get url from firebase
		getDownloadURL(store).then(function(url){
  
		document.getElementById("view").src=url 
		
		}
  
  
  
  );}
  
