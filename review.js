let guitars = [];

const MAXCAPACITY = 9;
//FUNCTION NEWGUITAR CONSUMES ARGUMENT AND CALLS IT GUITARNAME
function newGuitar(guitarName) {
  //checking length of the guitars array against the const MAXCAPACITY
  if (guitars.length < MAXCAPACITY){
    //HAVE ROOM, PUSH GUITAR NAME INTO GUITARS ARRAY
    guitars.push(guitarName);
    return true;
  } else {
    return false;
  }
}

function showGuitars() {
  //LOOP THROUGH GUITARS array
  for (i=0; i < guitars.length; i++){
    console.log(guitars[i] );
  }
}
