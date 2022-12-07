let username = document.getElementById("username");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener("click", (e) => {
	e.preventDefault();
	var userArray = [];

	if (localStorage.getItem('taikhoan') == null) {
		var user1 = { username: 'admin', password: 'admin' };
		var user2 = { username: 'guest1', password: '123' };
		userArray.push(user1);
		userArray.push(user2);
		console.log(userArray);
		localStorage.setItem('taikhoan', JSON.stringify(userArray));
	}

	if (!username.value || !password.value) {
		alert("vui long nhap day du thong tin");
	} else {

		var user1;
		userArray = JSON.parse(localStorage.getItem('taikhoan'));
		for (let i = 0; i < userArray.length; i++) {
			if (document.getElementById("username").value == userArray[i].username) {
				alert('tài khoản đã tồn tại');
				break;
			} else {
				user1 = { username: document.getElementById("username").value, password: document.getElementById("password").value };
				console.log(user1.username);
				console.log("Type user 1:");
				console.log(typeof (user1));
				userArray.push(user1);

				localStorage.setItem('taikhoan', JSON.stringify(userArray));
				alert("dang ky thanh cong");
				break;
			}
		}
	}
}
);
