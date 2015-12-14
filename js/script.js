// 数字输入框keypress
function numberKeypress(e) {
  var text = String.fromCharCode(e.which),
      pattern = /\d/;
  if(!pattern.test(text) && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
  }
}

// 数字输入框blur
function numberBlur(e) {
  var pattern = /\D/,
      text = e.target.value;
  if(pattern.test(text)) {
    e.target.value = '';
  }
}

$(function () {



})
