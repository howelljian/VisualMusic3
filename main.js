var note = 0;
function Start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DAU-dno7T/model.json', modelReady);
    
}

function modelReady()
{
    console.log("Model Is Loaded");
    classifier.classify(gotResults);
    
}

function gotResults(error, results)
{
  note = results[0].label;
  if(error)
  {
    console.error(error);
  }
  if(results.length > 0.5)
  {
  if(note == "Background_Noise")
  {
    document.getElementById("canvas").style.backgroundColor = "black";
    console.log("Background Noise");
    document.getElementById("note").innerHTML = "Background Noise";
  }
  else if(note =="C")
  {
    document.getElementById("canvas").style.backgroundColor = "red";
    console.log("C");
    document.getElementById("note").innerHTML = "C";
  }
  else if(note =="C#")
  {
    document.getElementById("canvas").style.backgroundColor = "tomato";
    console.log("C#");
    document.getElementById("note").innerHTML = "C#";
  }

  else if(note =="D")
  {
    document.getElementById("canvas").style.backgroundColor = "orange";
    console.log("D");
    document.getElementById("note").innerHTML = "D";

  }
  else if(note =="D#")
  {
    document.getElementById("canvas").style.backgroundColor = "lightsalmon";
    console.log("D#");
    document.getElementById("note").innerHTML = "D#";
  }
  else if(note =="E")
  {
    document.getElementById("canvas").style.backgroundColor = "yellow";
    console.log("E");
    document.getElementById("note").innerHTML = "E";

  }
  else if(note =="F")
  {
    document.getElementById("canvas").style.backgroundColor = "gold";
    console.log("F");
    document.getElementById("note").innerHTML = "F";

  }
  else if(note =="F#")
  {
    document.getElementById("canvas").style.backgroundColor = "lime";
    console.log("F#");
    document.getElementById("note").innerHTML = "F#";

  }
  else if(note =="G")
  {
    document.getElementById("canvas").style.backgroundColor = "greenyellow";
    console.log("G");
    document.getElementById("note").innerHTML = "G";

  }
  else if(note =="G#")
  {
    document.getElementById("canvas").style.backgroundColor = "cyan";
    console.log("G#");
    document.getElementById("note").innerHTML = "G#";

  }
  else if(note == "A")
  {
    document.getElementById("canvas").style.backgroundColor = "deepskyblue";
    console.log("A");
    document.getElementById("note").innerHTML = "A";
  }

  else if(note == "A#")
  {
    document.getElementById("canvas").style.backgroundColor = "deeporchid";
    console.log("A#");
    document.getElementById("note").innerHTML = "A#";
  }

  else if(note == "B")
  {
    document.getElementById("canvas").style.backgroundColor = "violet";
    console.log("Background Noise");
    document.getElementById("note").innerHTML = "Background Noise";
  }
  else if(note == "Background Noise")
  {
    document.getElementById("canvas").style.backgroundColor = "black";
    console.log("Background Noise");
    document.getElementById("note").innerHTML = "Background Noise";
  }
  
 

  note="";
}
}

function Back()
{
  window.location = "home.html";
}


  
