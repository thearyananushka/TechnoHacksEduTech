const endDate = "29 june 2024 10:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end-now) / 1000;

    if (diff < 0) return;

    // convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    // hours
    inputs[1].value = Math.floor(diff/3600) % 24;
    // minutes
    inputs[2].value = Math.floor(diff /60) % 60;
    //seconds
    inputs[3].value = Math.floor(diff) % 60;
   

}
clock();

setInterval(
    () => {
        clock()
    },
    1000
)


//  1 day = 24hr
//  1hr = 60min
// 60min = 3600sec

