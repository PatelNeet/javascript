
//we can set interval for 1 second with function, so we have to pass 1000 like this... setInterval(function(){ ##logic code## },1000)
setInterval(function (){

    //create object of date function
    d = new Date();
    

    //put value of hours,minute,second in variable by date object
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();



    // Let's confirm is it work or not !
    // console.log(htime+ ":" +mtime+ ":"+stime);
    // haahaahaaa it's worked :)

    
    //Logic of rotation of Houre Hands,Minute Hand and Second Hand in clock 

    /* Let's assume that there is 3 hand of hour, minute and second.
    
    Hand of Hour:
    To complate one circle its need to rotate 360 degree. Also the Hand of hour is also with respective minute Hand. Rotation of second effect is countless.
    
    first we count  rotation for 1 hour, how much dgree it move ? 
        To move 12 hour its need to rotate ==> 360 dgree
        so to move 1 hours                 ==>   360/12 = 30 dgree

    second we count rotation of 60 min, how much dgree it move ? 
        To move 60 minute its need to rotate ==> 30 dgree
        so to move 1 minute                  ==> 30/60 = 0.5 dgree

    #==>>Total Hand of Hour = 30 dgree houre + o.5 dgree minute 


    Hand of Minute:
    To complate one circle its need to rotate 360 degree. Rotation of second effect is countless.

    To move 60 minute its need to rotate ==> 360 dgree
    so to move 1 minute                  ==> 360/60 = 6 dgree

    #==>>Total Hand of Minute =  6 dgree minute

    Hand of Second:
    To complate one circle its need to rotate 360 degree. Rotation of second effect is countless.

    To move 60 second its need to rotate ==> 360 dgree
    so to move 1 second                  ==> 360/60 = 6 dgree

    #==>>Total Hand of Second =  6 dgree minute

    */
    hrrotation = 30*htime + mtime/2;
    minrotation = 6*mtime;
    secrotation = 6*stime;



    hr.style.transform = `rotate(${hrrotation}deg)`;
    min.style.transform = `rotate(${minrotation}deg)`;
    sec.style.transform = `rotate(${secrotation}deg)`;






    
},1000)