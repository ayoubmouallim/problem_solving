function timeConversion(time) {
  // Write your code here
  if (time.includes("PM")) {
    let hours = time.slice(0, 2);
    let newTime = "";
    if (hours == "12") newTime = "12" + ":" + time.slice(0, 8).slice(3, 8);
    else {
      newTime = 12 + parseInt(hours) + ":" + time.slice(0, 8).slice(3, 8);
    }
    console.log(newTime);
    return newTime;
  } else if (time.includes("AM")) {
    let hours = time.slice(0, 2);
    let newTime = "";
    if (hours == "12") newTime = "00" + ":" + time.slice(0, 8).slice(3, 8);
    else {
      newTime = hours + ":" + time.slice(0, 8).slice(3, 8);
    }
    console.log(newTime);
    return newTime;
  }
}
