var open = false;

function chat(chat_id){
    open = true;
    document.getElementsByClassName("no-chosen")[0].style.display = "none";
    document.getElementsByClassName("chosen")[0].style.display = "flex";
    if(window.innerWidth<=850){
        document.getElementsByClassName("chats")[0].style.display = "none";
        document.getElementsByClassName("current_chat")[0].style.display = "block";
    }
}

function back(){
    open = false;
    document.getElementsByClassName("no-chosen")[0].style.display = "flex";
    document.getElementsByClassName("chosen")[0].style.display = "none";
    if(window.innerWidth<=850){
        document.getElementsByClassName("chats")[0].style.display = "block";
        document.getElementsByClassName("current_chat")[0].style.display = "none";
    }
}

function check_screen(){
    if(!open && window.innerWidth>850){
        document.getElementsByClassName("current_chat")[0].style.display = "block";
    }else if(!open && window.innerWidth<=850){
        document.getElementsByClassName("current_chat")[0].style.display = "none";
        document.getElementsByClassName("chats")[0].style.display = "block";
    }else if(open && window.innerWidth>850){
        document.getElementsByClassName("chats")[0].style.display = "block";
    }else if(open && window.innerWidth <=850){
        document.getElementsByClassName("chats")[0].style.display = "none";
    }
}

var toggled = true;
function toggle(){
    if(toggled){
        document.getElementsByClassName("drop-down")[0].style.display = "block";
        document.getElementsByClassName("fa-angle-down")[0].classList.add("fa-angle-up");
        document.getElementsByClassName("fa-angle-down")[0].classList.remove("fa-angle-down");
    }else{
        document.getElementsByClassName("drop-down")[0].style.display = "none";
        document.getElementsByClassName("fa-angle-up")[0].classList.add("fa-angle-down");
        document.getElementsByClassName("fa-angle-up")[0].classList.remove("fa-angle-up");
    }
    toggled = !toggled;
}

function open_side(){
    document.getElementsByClassName("side-menu")[0].style.display = "flex";
}
function close_side(){
    document.getElementsByClassName("side-menu")[0].style.display = "none";
}