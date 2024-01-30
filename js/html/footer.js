
(function () {
    // footer
    let footer=document.createElement('footer');
    document.body.appendChild(footer);
    footer=document.querySelector('footer');

    let div=document.createElement('div');
    footer.appendChild(div);
    div=footer.querySelector('div');

    let saver_logo=document.createElement('a');
    saver_logo.id='footer-saver-logo';
    saver_logo.href='https://satou-server.github.io/';
    div.appendChild(saver_logo);
    saver_logo=div.querySelector('a')

    let saver_logo_p=document.createElement('p');
    saver_logo_p.textContent='砂糖鯖';
    saver_logo.appendChild(saver_logo_p);

    let ul=document.createElement('ul');
    div.appendChild(ul);
    ul=div.querySelector('ul');

    for (var i=0;i<3;i++) {
        input={
            'text':['About','About Bot','Discord'],
            'url':['https://satou-server.github.io/about','https://satou-server.github.io/about_bot','https://satou-server.github.io/invite']
        };
        var li=document.createElement('li');
        ul.appendChild(li);
        li=ul.querySelectorAll('li')[i];
        var a=document.createElement('a');
        a.textContent=input.text[i];
        a.href=input.url[i];
        li.appendChild(a);
    }

    let hr=document.createElement('hr');
    footer.appendChild(hr);

    let footer_small=document.createElement('small');
    footer_small.textContent='© 2024 satou-server. All Rights Reserved.'
    footer.appendChild(footer_small);
}());
