const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbxHALw_TivLfpSTpVD0-Vqggx9cVlWkAS5lsPr4nJ2SylGV6CYGIwVFuw_gEsdFbAGP/exec';

fetch(googleAppsScriptUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.server_member);
        console.log(data.active_member);
    })
    .catch(error => {
        console.error(error);
});
