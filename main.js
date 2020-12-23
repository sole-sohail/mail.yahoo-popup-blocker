killPopup();

function killPopup()
{
    if (document.querySelectorAll('div[aria-describedby="adblock-delay-dismiss-cue"]').length > 0) {
        document.querySelectorAll('div[aria-describedby="adblock-delay-dismiss-cue"]')[0].parentNode.remove();
        console.log("Yahoo popup blocked!");
    }
    else{
        console.log("Yahoo Popup Not Found!!!");
        setTimeout(function(){
            killPopup();
        },1000);
    }
}