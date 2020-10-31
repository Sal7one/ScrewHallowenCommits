let darkKey = "dark"
let darkishKey = "darkish"
let lightKey = "light"
let lightishKey = "lightishKey"
let AllowedStat = "AllowedStat"

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        SaveStatus(darkKey,`#216e39`)
        SaveStatus(darkishKey,`#30a14e`)
        SaveStatus(lightKey,`#9be9a8`)
        SaveStatus(lightishKey,`#40c463`)
        SaveStatus(AllowedStat,"Yes")
    }
});

function SaveStatus(key, thingy) {
    chrome.storage.local.set({ [key]: thingy });
  }
