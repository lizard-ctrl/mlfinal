var bot = new RiveScript();

bot.loadFile("braintwo.rive").then(done).catch(loading_error);


function doneTwo(){
    //no automatic response bc of this
    console.log("Bot has finished loading!");
    bot.sortReplies();
}

function messageTwo() {
  //getting text input :)
  var x = document.getElementById("myTextTwo").value;

  let username = "local-user";
  
  
  bot.reply(username, x ).then(function(reply) {
  console.log("Elliot says: " + reply);
  let response = "Elliot: " + reply;
  let input = "you: " + x;
  //document.querySelector("#output").innerHTML = response; // add adjacent html 
  let d1 = document.getElementById('outputTwo');
  d1.insertAdjacentHTML('beforeend', "<br>" + input + "<br>" + response);
  });
}


function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error);
}


//whatever goes into input box is assigned variable
//content of input = var Whatever ??? hopefully dis works 


 

