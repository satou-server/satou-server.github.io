const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbxkFUsIQRzE9kHTd8JBcaEGCi0nATQ7l8eogL4lWXOrk7i3rZJXfhHqOTo7wAEydluf/exec';

// ランダムなコールバック関数名を生成
const callbackName = 'callback_' + Math.floor(Math.random() * 10000);

// グローバルスコープにコールバック関数を定義
window[callbackName] = function(data) {
    console.log(data.server_member);
    console.log(data.active_member);
};

// JSONPリクエストを発行
const script = document.createElement('script');
script.src = `${googleAppsScriptUrl}?callback=${callbackName}`;
document.head.appendChild(script);
