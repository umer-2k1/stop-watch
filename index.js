    // getting all the elements with id or class 
    let startbtn = document.querySelector('.start')
    let stopbtn = document.querySelector('.stop')
    let resettbtn = document.querySelector('.reset')
    let hrTxt = document.querySelector('#stopHour')
    let minTxt = document.querySelector('#stopMin')
    let secTxt = document.querySelector('#stopSec')
    let msTxt = document.querySelector('#stopMs')
    
    
    // initailzing variable and assign 0 value to each
    let hr = 0
    let min = 0
    let sec = 0
    let ms = 0
    let timer = false
    
    // diable stop and reset button if start buttton not is cicked
    // if (hr<=00 || min <=00 || sec <=00 || ms <=00) {
    //     let myStyle = `cursor:not-allowed; opacity:0.6`
    //     stopbtn.style= myStyle;
    // }
    // else if (hr>0 || min >0 || sec >0 || ms >0) {
    //     let myStyle = `cursor:pointer; opacity:1`
    //     stopbtn.style=myStyle
    // }
    
    
    startbtn.addEventListener('click', ()=>{
        timer = true
    stopWatch()
    })
    
    stopbtn.addEventListener('click', ()=>{
        timer =false
    })
    
    resettbtn.addEventListener('click', ()=>{
        timer =false
        hr = 0, min = 0, sec = 0, ms = 0
        msTxt.innerHTML= "00"
        secTxt.innerHTML= "00"
        minTxt.innerHTML= "00"
        hrTxt.innerHTML= "00"
    })
    
    function stopWatch(){
        if (timer == true ) {
            ms +=1
        
            if (ms ==100) {
                sec +=1
                ms=0
            }
            else if(sec==60){
                min +=1
                sec =0
            }
            else if(min==60){
                hr +=1
                min =0
                sec= 0
            }
                // if value of 1 digit add 0 befor the digit
            let hrString = hr < 10? "0"+hr : hr
            let minString = min < 10? "0"+min : min
            let secString = sec < 10? "0"+sec : sec
            let msString = ms < 10? "0"+ms : ms
         
            
            msTxt.innerHTML= msString
            secTxt.innerHTML= secString
            minTxt.innerHTML= minString
            hrTxt.innerHTML= hrString
    
    
            setTimeout(stopWatch, 10)
        }
    }