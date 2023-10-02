var subsBtn = document.querySelector('.subscribe-btn')
subsBtn.addEventListener('click', function () {
    var thankContainer = document.querySelector('.thank-container')
    thankContainer.classList.toggle('hide')

    var inputContainer = document.querySelector('.input-container')
    inputContainer.classList.toggle('hide')
})

var dissBtn = document.querySelector('.dismiss-btn')
dissBtn.addEventListener('click', function () {
    var thankContainer = document.querySelector('.thank-container')
    thankContainer.classList.toggle('hide')
    var inputContainer = document.querySelector('.input-container')
    inputContainer.classList.toggle('hide')
})

function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Kiểm tra định dạng email bằng biểu thức chính quy
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.classList.add('error');
      return;
    }

    // Nếu định dạng email hợp lệ, xóa lớp 'error' và tiến hành xử lý dữ liệu
    emailInput.classList.remove('error');
  }