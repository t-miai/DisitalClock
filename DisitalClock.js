function clock(){
    var data = new Date();

    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    var msg = hours + ":" + minutes + ":" + seconds;

    document.getElementById("PassageArea").innerHTML = msg;
}