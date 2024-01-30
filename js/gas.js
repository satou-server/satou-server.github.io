const gas_url = 'https://script.google.com/macros/s/AKfycbzdj-WPE4zVcn5MTohDfMAc53zKUm8RtSKbVYU78dmIADWjC3wbh-ZZBQ5LtEdL6xn7/exec';

fetch(gas_url)
.then(function (data) {
    const serverMember_p    = document.getElementById("server-members");
    const serberMember_span = serverMember_p.querySelector("span");
    serberMember_span.textContent = data.server_member;

    const activeMember_p    = document.getElementById("active-members");
    const activeMember_span = serverMember_p.querySelector("span");
    activeMember_span.textContent = data.active_member;

    console.log(data.server_member);
    console.log(data.active_member);
});
