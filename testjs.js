const obj = {
    firstname: 'John',
    age:32,
    location:"hcm"
};

let json = JSON.stringify(obj);
window.localStorage.setItem(firstname, json);


