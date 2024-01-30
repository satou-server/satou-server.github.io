const gas_url = 'https://script.google.com/macros/s/AKfycbzdj-WPE4zVcn5MTohDfMAc53zKUm8RtSKbVYU78dmIADWjC3wbh-ZZBQ5LtEdL6xn7/exec';

fetch(gas_url)
.then(function (data) {
    console.log(data.server_member);
    console.log(data.active_member);
});
