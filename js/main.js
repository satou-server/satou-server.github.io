const invite_button=document.getElementById('invite_button');
invite_button.addEventListener('click', function() {
    window.open('https://satou-server.github.io/invite', '_blank');
});
const servericon = document.getElementsByClassName('server-icon')[0];
servericon.onerror = function() {
    servericon.src = 'img/nopanel.png';
};
