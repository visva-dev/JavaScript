const button = document.querySelector('button');
const output = document.querySelector('.output');
button.addEventListener('click', showOutput);
output.style.cssText ="color:white;text-align: center;";
function showOutput() {
  const date = new Date();
  let current = date.getHours();
  let message;
  console.log(current);
  current = 22;
  if (current > 17) {
    message = "it's evening";
    output.style.backgroundColor = 'black';
  } else if (current > 12) {
    message = "it's afternoon";
    output.style.backgroundColor = 'blue';
  } else if (current > 0) {
    message = "It's morning";
    output.style.backgroundColor = 'orange';
  } else {
    message = 'Something wrong!';
    output.style.backgroundColor = 'red';
  }

  output.innerHTML = `<h1> ${message} </h1>`;
}
