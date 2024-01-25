
(function () {
    // main
    let main=document.createElement('main');
    document.body.appendChild(main);
    main=document.querySelector('main')
    // test-p
    let p=document.createElement('p');
    p.textContent='hello wolrd! [main]';
    main.appendChild(p);
}());