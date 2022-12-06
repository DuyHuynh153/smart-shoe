var username = document.getElementById("username");
var password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

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
        if(userArray[0].username==username.value && userArray[0].password==password.value)
    {
      alert("admin");
      window.location="admin.html";
      break;
    }
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


// nút đăng xuất
function logout() {

	if(localStorage.getItem('dangnhap')!=null)
	{
		localStorage.removeItem("dangnhap");
	window.location="./login.html";
	}
}
