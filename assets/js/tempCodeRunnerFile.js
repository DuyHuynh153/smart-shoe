function createAdmin(){
      var userArray = [];
      var bien="khachhang";
      
      if(localStorage.getItem('user')==null){		
        alert("co vao day k!!!!!!!!!!!");
        
       //userArray = JSON.parse(localStorage.getItem('user'));
        var user1 = {username: 'admin', password: 'admin', fullname: 'Admin ', datesignup: '23-11-1999', usertype:'admin'};
        var user2={username:bien , password: '123', fullname: 'Nguyen Van b ', datesignup: '23-11-1999', usertype:'kh'}
        userArray.push(user1);
        userArray.push(user2);
        console.log(userArray);
        localStorage.setItem('user',JSON.stringify(userArray));
      }
    }
    createAdmin()
  