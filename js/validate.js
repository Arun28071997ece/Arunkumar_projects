
function validate(){
    var user_name = document.getElementById('userName');
    console.log(user_name.value);

    var password = document.getElementById('password');
    console.log(password.value);

    if((user_name.value == 'arun') && (password.value == 'arun')||
      (user_name.value == 'azmina') && (password.value == 'azmina')||
      (user_name.value == 'jay') && (password.value == 'jay')||
      (user_name.value == 'akilesh') && (password.value == 'akilesh')||
      (user_name.value == 'vijay') && (password.value == 'vijay'))
        
    {
        window.location.assign('../html/shop.html');
    } 
    else
    {
        alert('Invalid user name or password');
    }
    return false;
}