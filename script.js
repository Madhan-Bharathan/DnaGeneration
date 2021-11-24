function dnaGeneration() {
    var length=document.getElementById('getinput').value
    var result           = '';
    var characters       = 'ATGC';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   document.getElementById('output').innerHTML = result;
}