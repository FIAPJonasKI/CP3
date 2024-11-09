//Mudar o tema claro para tema escuro
function mudarTema() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme")
    }
    else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme")
    }
}
//script para logar e registrar no site
window.onload = function () {
    var log = document.getElementById('login');
    var reg = document.getElementById('reg');
    log.style.display = 'none';
    reg.style.display = 'none';
    document.querySelector('.login-btn').onclick = function () {
        log.style.display = 'block';
    };
    document.querySelector('.close-btn-l').onclick = function () {
        log.style.display = 'none';
    };
    document.querySelector('.reg-btn').onclick = function () {
        reg.style.display = 'block';
    };
    document.querySelector('.close-btn-r').onclick = function () {
        reg.style.display = 'none';
    };
}