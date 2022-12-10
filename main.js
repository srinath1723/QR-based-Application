async function GenerateQR() {
    var response = await fetch('http://127.0.0.1:8000/api/token/');
    var result = await response.json();
    var data = `http://127.0.0.1:5500/login&token=${result.token}`;
    document.getElementById("image").innerHTML = "<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=186' alt='qr' />";
}


async function login() {
    var queryParams = new URLSearchParams(window.location.search);
    var token = queryParams.get('token');

    var response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: "POST",
        headers:{'content-type': 'application/json'},
        // Adding body or contents to send
        body: JSON.stringify({
            UserName: document.getElementById("userName").value,
            Password: document.getElementById("password").value,
            Token: token
        })});

    var result = await response.json();
    if (result.Result === 'True') {
        window.location.href = 'loginSucess.html';
    } else {
        window.location.href = 'loginFailed.html';
    }
    //alert(result.Result);
}
//     var data = $("#codeData").val();
//     var size = $("#codeSize").val();
//     if(data == "") {
//         alert('please enter a url or text');
//         return false;
//     } else {
//         if( $("#image").is(':empty')) {
//             $("#image").append("<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "' alt='qr' />");
//             $("#link").append("<a href='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "'>Permalink</a>");
//             $("#code").append("<textarea readonly='readonly' wrap='off'>&lt;img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "' alt='qr' /&gt;</textarea>");
//             return false;
//         } else {
//             $("#image").html("");
//             $("#link").html("");
//             $("#code").html("");
//             $("#image").append("<img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "' alt='qr' />");
//             $("#link").append("<a href='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "'>Permalink</a>");
//             $("#code").append("<textarea readonly='readonly wrap='off>&lt;img src='http://chart.apis.google.com/chart?cht=qr&chl=" + data + "&chs=" + size + "' alt='qr' /&gt;</textarea>");
//             return false;
//         }
//     }
// });