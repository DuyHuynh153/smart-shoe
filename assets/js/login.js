var username = document.getElementById("username");
var password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");
let btnLogout = document.querySelector(".btn-logout");

function createAdmin()	
{	
	if(localStorage.getItem('taikhoan')==null){			
		var user1 = {username: 'admin', password: 'admin'};	
		userArray.push(user1);	
		console.log(userArray);	
		localStorage.setItem('taikhoan',JSON.stringify(userArray));	
	}	
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  var userArray = [];
    userArray = JSON.parse(localStorage.getItem('taikhoan'));
    if (!username.value || !password.value) {
      alert("vui long nhap day du thong tin");
    }
    for(i=0;i<userArray.length;i++)
		{
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
        break;
      }
    }
    if(i==userArray.length)
    {
      alert("dang nhap khong thanh cong");
    }
});

btnLogout.addEventListener("click", (e) => {
  e.preventDefault();
  if(localStorage.getItem('dangnhap')!=null)
  {
    var userArray2 = JSON.parse(localStorage.getItem('dangnhap'));
	userArray2.splice(i, 0);
	localStorage.setItem('dangnhap',JSON.stringify(userArray2));
  window.location="./login.html";
  }
});
