const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbxeJLDGjoJwVSZADZ3pNbc3Di4IZD7AQ7HIXdA0oDW1h9RF-jf2lW4oC7yli6gaAaE6/exec';

fetch(googleAppsScriptUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.server_member);
        console.log(data.active_member);
    })
    .catch(error => {
        console.error(error);
});
