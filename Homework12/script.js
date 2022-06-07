var table = document.getElementsByClassName('table')[0];
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
    var newTr = document.querySelector('.table tr:first-child');
    newTr.insertAdjacentHTML('beforebegin', '<tr><td></td><td></td><td></td></tr>')
});

table.addEventListener('click', function (event) {

    if (event.target.tagName === 'TD' && !event.target.hasAttribute('colspan')) {
        var input = document.createElement('input');
        input.value = event.target.innerHTML;
        event.target.innerHTML = '';

        input.onblur = function () {
            event.target.innerHTML = this.value;
        }

        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                this.onblur = null;
                event.target.innerHTML = this.value;
                this.remove();
            }
        })

        event.target.appendChild(input);
        input.focus();

    }

});
