console.log("hello")

let guitars = 0;

const MAXCAPACITY = 9;

function newguitar() {
  if (guitars < MAXCAPACITY){
    guitars++;
    return true;
  } else {
    return false;
  }
}
