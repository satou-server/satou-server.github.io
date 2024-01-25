
(function () {
    // header
    let main=document.createElement('header');
    document.body.appendChild(main);
    main=document.querySelector('header')
    // test-p
    let p=document.createElement('p');
    p.textContent='hello wolrd! [header]';
    main.appendChild(p);
}());