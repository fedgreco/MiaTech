const setCookie = (name, value) => {
    const data = new Date();
    data.setTime(data.getTime() + 24*60*60*1000);
    const expires = "Expires=" + data.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + "; path=/";
}

setCookie("id", "ica");
console.log("Cookies:" + document.cookie);



