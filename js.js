window.onload = init;

function query(name) {
    return document.querySelector(name);
}

function query_all_raw(name) {
    return document.querySelectorAll(name);
}

function query_all(name, arg) {
    document.querySelectorAll(name).forEach(elem => {arg(elem)});
}

function init()
{
    
}