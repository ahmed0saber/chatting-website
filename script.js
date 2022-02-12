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