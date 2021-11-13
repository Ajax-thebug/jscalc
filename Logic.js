let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue= "";
screen.value = 0;
for(item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // screen.value += buttonText;

    
        if(buttonText=='X'){
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }
    
        else if(buttonText=='C'){
        screenValue = "0";
        screen.value = screenValue;
        

    }
        else if(buttonText=='=' ) {
            screen.value = eval(screenValue);
            
            

        }

        else if(buttonText == "DEL"){
            screenValue = screen.value.slice(0, - 1);
            screen.value = screenValue;
        }

        else{
            screenValue += buttonText;
            screen.value= screenValue;
        }



    console.log(buttonText);
    })
}