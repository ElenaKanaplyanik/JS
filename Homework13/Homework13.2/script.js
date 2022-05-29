var numbers = document.getElementById('numbers');
var button = document.getElementsByTagName('button')[0];
var form = document.getElementsByTagName('form')[0];
var inputs = form.getElementsByTagName('input');

for (var input of inputs){
	input.onfocus = function (e) {
		if(e.target.tagName = 'INPUT') {
			e.target.classList.add('active');
		}
	}

	input.onblur = function (e) {
		if(e.target.tagName = 'INPUT') {
			e.target.classList.remove('active');
		}
	}
	
}


form.onmousedown = function (e) {
	if(e.target.tagName = 'INPUT') {
		e.target.classList.remove('error');
	} 
}

form.onkeyup = function () {
    
	var bool = false;
	for (var i = 0; i < inputs.length; i++) {
		if(!inputs[i].value || inputs[i].value.indexOf(' ') !== -1) {
			bool = true;
			break;
		} 
	}
	button.disabled = bool;
}

button.onclick = function (e) {
	e.preventDefault();
	if(numbers.dataset.status) {
		var firstNumbersBoard = numbers.getElementsByTagName('table')[0];
		firstNumbersBoard.remove();
	}
	numbers.dataset.status = 'board';

	var size = {},
        boardBody = document.createElement('table');

	for (var i = 0; i < inputs.length; i++) {
		var val = inputs[i].value;
		if((val >= 1) && (val <= 10) && (val % 1 === 0) ) {
			size[inputs[i].dataset.id] = val;
		} else {
			inputs[i].classList.add('error');
			alert(inputs[i].dataset.id + ' введено некорректное значение. Введите целое число от 1 до 10');
		}
	}

	numbers.appendChild(boardBody);

	for(var row = 0; row < size.X; row++) {
		var boardRow = document.createElement('tr');
		boardBody.appendChild(boardRow);
		for(var cell = 0; cell < size.Y; cell++) {
			var boardCell = document.createElement('td');
			if((cell % 2) && (row % 2)) {
				boardCell.classList.add('black');
			}
			if(!(cell % 2) && !(row % 2)) {
				boardCell.classList.add('black');
			}
			boardRow.appendChild(boardCell);
		}
	}

	boardBody.onclick = function (e) {
		if (e.target.tagName = 'TD') {
			var boardCells = boardBody.getElementsByTagName('td');
			for (var i = 0; i < boardCells.length; i++) {
				if (!boardCells[i].className) {
					boardCells[i].classList.add('black');
				} else {
					boardCells[i].classList.remove('black');
				}
			}
		}
	}
}
