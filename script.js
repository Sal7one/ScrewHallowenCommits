let root = document.documentElement;
let darkKey = "dark"
let darkishKey = "darkish"
let lightKey = "light"
let lightishKey = "lightishKey"
let AllowedStat = "AllowedStat"
let Changebtn = document.querySelector(".changebtn")
let fillbtn = document.querySelector(".githubcolors")
let Allowedbtn = document.querySelector(".allowedbtn")

window.onload = function () {
    Get().then((value) => {
      App(value);
    });
  };

  function App(value){
    Allowed = value[AllowedStat]
    DarkColor = value[darkKey]
    DarkishColor = value[darkishKey]
    LightColor = value[lightKey]
    LightishColor = value[lightishKey]


    if(Allowed == "Yes"){
    if(Allowedbtn != null)
    Allowedbtn.setAttribute("checked", true);
    ChangePageColors(DarkColor, DarkishColor,LightColor,LightishColor)
    
    }else{
        console.log("Not allowed to Change Page")
        if(Allowedbtn != null)
        Allowedbtn.setAttribute("unchecked", true);
    }
    try {
      document.querySelector("#dark").value = DarkColor; document.querySelector("#darkish").value = DarkishColor;
      document.querySelector("#light").value = LightColor; document.querySelector("#lightish").value = LightishColor;
  }catch (error) {}
  }

function GetColors(){
    // Get Hex Values from HTML Input
    DarkColor  = document.querySelector("#dark").value
    DarkishColor  = document.querySelector("#darkish").value
    LightColor  = document.querySelector("#light").value
    LightishColor  = document.querySelector("#lightish").value

    //Change page
    ChangePageColors(DarkColor, DarkishColor,LightColor,LightishColor)

    //Save as new colors
    SaveStatus(darkKey,DarkColor);
    SaveStatus(darkishKey,DarkishColor);
    SaveStatus(lightKey,LightColor);
    SaveStatus(lightishKey,LightishColor);

    refresh();
}

// Change Root Colors to the chosen ones
function ChangePageColors(dark, darkish,light,lightish){
  root.style.setProperty(`--color-calendar-halloween-graph-day-L4-bg`, `${dark}`);
  root.style.setProperty(`--color-calendar-halloween-graph-day-L3-bg`, `${darkish}`);
  root.style.setProperty(`--color-calendar-halloween-graph-day-L1-bg`, `${light}`);
  root.style.setProperty(`--color-calendar-halloween-graph-day-L2-bg`, `${lightish}`);
  hatemessage()
}

    if(Changebtn != null)
  Changebtn.addEventListener("click", GetColors)
  
  if(fillbtn != null)
  fillbtn.addEventListener("click", fillcolors)
  if(Allowedbtn != null)
  Allowedbtn.addEventListener("click", function () {
    if (Allowedbtn.checked) {
    SaveStatus(AllowedStat, "Yes");
    } else {
    document.querySelector('link[href$="styles.css"]').remove()
    SaveStatus(AllowedStat, "No");
    }
    refresh();
  });

  function refresh() {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.reload(tab.id);
    });
  }
  
    function Get() {
        return new Promise(function (resolve, _reject) {
          chrome.storage.local.get(null, function (items) {
            resolve(items);
          });
        });
      }

     //Save Colors in memory 
    function SaveStatus(key, thingy) {
      chrome.storage.local.set({ [key]: thingy });
    }


  function hatemessage(){
    setTimeout(()=>{
      //Tooooo lazy toooo use arrive Js
      text = document.querySelector(".float-left.text-gray")
      if(text!= null){
      text = text.children[0]
      text.innerHTML= text.innerHTML + " NOT! "
      text.style.color = "#30a14e"
    }

    },2500)
  
  
  }
 
  function fillcolors(){
    document.querySelector("#dark").value = `#216e39`; document.querySelector("#darkish").value = `#30a14e`;
    document.querySelector("#light").value = `#9be9a8`; document.querySelector("#lightish").value = `#40c463`;
  }
  