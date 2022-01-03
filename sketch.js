var bot = new RiveScript();

bot.loadFile("brain.rive").then(done).catch(loading_error);


function done(){
    //no automatic response bc of this
    console.log("Bot has finished loading!");
    bot.sortReplies();
}

function message() {
  //getting text input :)
  var x = document.getElementById("myText").value;

  let username = "local-user";
  
  
  bot.reply(username, x ).then(function(reply) {
  console.log("Andres says: " + reply);
  let response = "Andres: " + reply;
  let input = "you: " + x;
  //document.querySelector("#output").innerHTML = response; // add adjacent html 
  let d1 = document.getElementById('output');
  d1.insertAdjacentHTML('beforeend', "<br>" + input + "<br>" + response);
  });
}


function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error);
}


//whatever goes into input box is assigned variable
//content of input = var Whatever ??? hopefully dis works 

 

