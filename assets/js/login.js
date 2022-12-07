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
      window.location="index.html";
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

function hide() {
  if(localStorage.getItem('dangnhap')==null)
  {
    var x = document.getElementById("nav__user");
    x.style.display = "none";
    var x = document.getElementById("log-out");
    x.style.display = "none";
    var x = document.getElementById("sign-in");
    x.style.display = "block";
    var x = document.getElementById("sign-up");
    x.style.display = "block";
    var x = document.getElementById("nav-shop-market");
    x.style.display = "none";
  }
  if(localStorage.getItem('dangnhap')!=null)
  {
    userArray = JSON.parse(localStorage.getItem('dangnhap'));
    document.getElementById("nav__user").innerHTML=userArray[0].username1;
    var x = document.getElementById("log-out");
    x.style.display = "block";
    var x = document.getElementById("sign-in");
    x.style.display = "none";
    var x = document.getElementById("sign-up");
    x.style.display = "none";
    var x = document.getElementById("nav-shop-market");
    x.style.display = "block";
    if(userArray.username != "admin"){
    var x = document.getElementById("admin");
    x.style.display = "none";
    }
    if(userArray.username == "admin"){
      var x = document.getElementById("admin");
    x.style.display = "block";
    }
  }
}

function logout() {
    localStorage.removeItem("dangnhap");
    localStorage.removeItem("giohang");
}
