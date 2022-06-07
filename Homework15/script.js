var users = document.getElementById('users'),
	btn = document.getElementsByTagName('button')[0];

function getUserData() {
	var info = JSON.parse(localStorage.getItem('users')).data;
	var	tabs = users.getElementsByClassName('tabsScript')[0];
	var	content = users.getElementsByClassName('contentScript')[0];

	btn.disabled = true;
	
	for (var i in info) {
		tabs.insertAdjacentHTML('beforeend',
			'<span class="'+ (i == 0 ? 'active usTab tabsScript' : 'usTab tabsScript') +'" data-id='+ info[i].id +'>Пользователь ' + ++i +'</span>')
	}
	content.insertAdjacentHTML('beforeend',
		'<div class="users__content-wrap">' +
				'<img src="'+info[0].avatar+'" alt="user-photo" class="users__photo avatarScript" width="130" height="130">' +
				'<div class="users__info userInfoJS">' +
					'<p class="name">First Name: <span class="userFirstScript">'+ info[0].first_name +'</span></p>' +
					'<p class="surname">Last Name: <span class="userSurnameScript">'+ info[0].last_name +'</span></p>' +
				'</div>' +
			'</div>'
	);
	users.onclick = function (e) {
		if (e.target.classList.contains('tabsScript') && !e.target.classList.contains('active')) {
			var newTabs = tabs.getElementsByClassName('tabsScript');
			for (var i = 0;  i < newTabs.length; i++) {
				newTabs[i].classList.remove('active');
			}
			e.target.classList.add('active');
		}
		for (var j in info) {
			if(info[j].id == e.target.dataset.id) {
				var avatar = users.getElementsByClassName('avatarScript')[0];
				var firstName = users.getElementsByClassName('userFirstScript')[0];
				var surname = users.getElementsByClassName('userSurnameScript')[0];
				avatar.src = info[j].avatar;
				firstName.textContent = info[j].first_name;
				surname.textContent = info[j].last_name;
				break;
			}
		}
	}

}

function errorMessageStatus(xhr) {
	btn.remove();
	users.insertAdjacentHTML('beforeend','<div class="error">' + '' + '<p>Ошибка</p>' +
		'<span>'+ xhr.status +'</span>' + '<p>Что-то пошло не так</p>' + '</div>'
	);
}

btn.onclick = function () {
	if(localStorage.getItem('users')) {
		getUserData();
	} else {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://reqres.in/api/users?page=2');
		xhr.send();
		xhr.onload = function () {
			var statusType = +String(this.status)[0];

			if (statusType === 2) {
				localStorage.setItem('users', this.response);
				getUserData();
			} else {
				errorMessageStatus(xhr);
			}
		}
		xhr.onerror = function () {
			errorMessageStatus(xhr);
		}
	}
}
