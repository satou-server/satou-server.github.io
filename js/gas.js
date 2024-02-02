const gas_url = 'https://script.google.com/macros/s/AKfycbwBlE1FEr1EhjNmEdZdSGFVO1ZMU8Vrg44yWTL3d7QebnFI921Xlj3gK-G9rb3lWOgg/exec';

fetch(gas_url)
    .then(response => response.json())
    .then(data => {
        const serverMember_p    = document.getElementById("server-members");
        const serverMember_span = serverMember_p.querySelector("span");
        serverMember_span.textContent = data.server_member;

        const activeMember_p    = document.getElementById("active-members");
        const activeMember_span = activeMember_p.querySelector("span");
        activeMember_span.textContent = data.active_member;

        console.log(data.server_member);
        console.log(data.active_member);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
