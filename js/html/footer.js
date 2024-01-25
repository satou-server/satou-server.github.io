
(function () {
    // footer
    let footer=document.createElement('footer');
    footer.id='footer';
    document.body.appendChild(footer);
    footer=document.getElementById('footer');

    let footer_div=document.createElement('div');
    footer_div.id='footer_div';
    footer_div.classList.add('footer_div');
    footer.appendChild(footer_div);
    footer_div=document.getElementById('footer_div');

    let footer_div_a=document.createElement('a');
    footer_div_a.id='footer_div_a';
    footer_div_a.href='https://satou-server.github.io/';
    footer_div.appendChild(footer_div_a);
    footer_div_a=document.getElementById('footer_div_a');

    let footer_div_a_p=document.createElement('p');
    footer_div_a_p.id='footer_div_a_p';
    footer_div_a.classList.add('footer_div_a');
    footer_div_a_p.textContent='砂糖鯖';
    footer_div_a.appendChild(footer_div_a_p);

    let footer_div_ul=document.createElement('ul');
    footer_div_ul.id='footer_div_ul';
    footer_div_ul.classList.add('footer_div_ul');
    footer_div.appendChild(footer_div_ul);
    footer_div_ul=document.getElementById('footer_div_ul');

    let footer_div_ul_li_1=document.createElement('li');
    footer_div_ul_li_1.id='footer_div_ul_li_1';
    footer_div_ul.appendChild(footer_div_ul_li_1);
    footer_div_ul_li_1=document.getElementById('footer_div_ul_li_1');

    let footer_div_ul_li_2=document.createElement('li');
    footer_div_ul_li_2.id='footer_div_ul_li_2';
    footer_div_ul.appendChild(footer_div_ul_li_2);
    footer_div_ul_li_2=document.getElementById('footer_div_ul_li_2');

    let footer_div_ul_li_3=document.createElement('li');
    footer_div_ul_li_3.id='footer_div_ul_li_3';
    footer_div_ul.appendChild(footer_div_ul_li_3);
    footer_div_ul_li_3=document.getElementById('footer_div_ul_li_3');

    let footer_div_ul_li_1_a=document.createElement('a');
    footer_div_ul_li_1_a.id='footer_div_ul_li_1_a';
    footer_div_ul_li_1_a.classList.add('footer_div_ul_li_1_a');
    footer_div_ul_li_1_a.href='https://satou-server.github.io/about';
    footer_div_ul_li_1_a.textContent='About';
    footer_div_ul_li_1.appendChild(footer_div_ul_li_1_a);

    let footer_div_ul_li_2_a=document.createElement('a');
    footer_div_ul_li_2_a.id='footer_div_ul_li_2_a';
    footer_div_ul_li_2_a.classList.add('footer_div_ul_li_2_a');
    footer_div_ul_li_2_a.href='https://satou-server.github.io/about_bot';
    footer_div_ul_li_2_a.textContent='About Bot';
    footer_div_ul_li_2.appendChild(footer_div_ul_li_2_a);

    let footer_div_ul_li_3_a=document.createElement('a');
    footer_div_ul_li_3_a.id='footer_div_ul_li_3_a';
    footer_div_ul_li_3_a.classList.add('footer_div_ul_li_3_a');
    footer_div_ul_li_3_a.href='https://satou-server.github.io/invite';
    footer_div_ul_li_3_a.textContent='Discord';
    footer_div_ul_li_3.appendChild(footer_div_ul_li_3_a);

    let footer_hr=document.createElement('hr');
    footer_hr.classList.add('footer_hr');
    footer.appendChild(footer_hr);

    let footer_small=document.createElement('small');
    footer_small.classList.add('footer_small')
    footer_small.textContent='© 2024 satou-server. All Rights Reserved.'
    footer.appendChild(footer_small);
}());
