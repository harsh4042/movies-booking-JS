document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var usr = document.getElementById('exampleInputUser1').value;
    var pwd = document.getElementById('exampleInputPassword1').value;
    if (usr === 'Harsh' && pwd === '12345') {
        window.open('A2.html');
        alert('LOGIN SUCCESS!!!');
    } else {
        alert('LOGIN FAILED!!!');
    }
});