var username = document.getElementById("username");
var password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");



btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  var userArray = [];
    userArray = JSON.parse(localStorage.getItem('taikhoan'));
    if (!username.value || !password.value) {
      alert("vui long nhap day du thong tin");
    }
    for(i=0;i<userArray.length;i++)
		if(userArray[i].username==username.value && userArray[i].password==password.value)
			{
        alert("dang nhap thanh cong");

        var userArray1 = [];
	
	if(localStorage.getItem('dangnhap')==null){		
		var user1 = {username1:username.value , password1: password.value};
		userArray1.push(user1);
		console.log(userArray1);
		localStorage.setItem('dangnhap',JSON.stringify(userArray1));
	}

        window.location="index.html";
      }
    else
    {
      alert("dang nhap khong thanh cong");
    }
});

btnLogout.addEventListener("click", (e) => {
  e.preventDefault();
	var userArray = JSON.parse(localStorage.getItem('dangnhap'));
	userArray.splice(i, 0);
	localStorage.setItem('dangnhap',JSON.stringify(userArray));
});
