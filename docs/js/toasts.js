function message(value) {
    toast = document.getElementById("toast");
    clearTimeout(message.timer);
    if (toast.hidden) {
        toast.textContent = value;
    } else {
        toast.textContent += "\n" + value;
    }
    toast.hidden = false;
    message.timer = setTimeout(function () {
        toast.hidden = true;
    }, 1500);
}