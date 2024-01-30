const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbzdj-WPE4zVcn5MTohDfMAc53zKUm8RtSKbVYU78dmIADWjC3wbh-ZZBQ5LtEdL6xn7/exec';

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
