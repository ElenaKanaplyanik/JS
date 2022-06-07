localStorage.clear();
var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button');

button[0].addEventListener('click', function () {
    var links = firstPar.getElementsByTagName('a');
  
    for (var link of links) {
      link.classList.add('changed');
    }
  });
  
secondPar.onclick = function (event) {
    event.preventDefault();
    var target = event.target;
    if(target.getAttribute('href') == '#') {
			alert(JSON.parse(localStorage.getItem(target.textContent)).path);
		} else {
			localStorage.setItem(target.textContent, JSON.stringify({path: target.href}));
			target.href = '#';
			alert('Информация о ссылке сохранена');
		}
  };

