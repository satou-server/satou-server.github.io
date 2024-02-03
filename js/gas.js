const gas_url = 'https://script.google.com/macros/s/AKfycbzg0mkjf0CrfOwByiw1lSq9FjHS6fivdxcAAaLAFBjsTwDZ1V0nVn-Xhv_gTIIllE02/exec';

fetch(gas_url)
    .then(response => response.json())
    .then(data => {
        const serverMember_p    = document.getElementById('server-members');
        const serverMember_span = serverMember_p.querySelector('span');
        serverMember_span.textContent = data.server_member;

        const activeMember_p    = document.getElementById('server-actives');
        const activeMember_span = activeMember_p.querySelector('span');
        activeMember_span.textContent = data.active_member;

        const serverBoost_p     = document.getElementById('server-boost');
        const serverBoost_span  = serverBoost_p.querySelector('span');
        serverBoost_span.textContent = data.boost_level;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
