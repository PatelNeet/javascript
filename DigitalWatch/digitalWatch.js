
let d;
let h;
let m;
let s;
let ampm;
let final;
let dateString;

setInterval(() => {

    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    //as well we get month , year , date.....

    // For Hour
    if (h < 12) {
        ampm = "AM";
        if (h < 10) {
            h = "0" + h;
        }
    }
    else if (h == 12) {
        ampm = "PM";
    }
    else if (h > 12) {
        h = h - 12;
        ampm = "PM";
        if (h < 10) {
            h = "0" + h;
        }
    }

    //For Minute
    if (m < 10) {
        m = '0' + m;
    }
    //For Second
    if (s < 10) {
        s = '0' + s;
    }

    final = h + ":" + m + ":" + s + " " + ampm;
    //console.log(final);
    dateString = d.toLocaleDateString();
    document.getElementById('time').innerHTML = final + " <br> on " + dateString;
}, 1000);
