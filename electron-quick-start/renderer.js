// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

var menu = new Menu();
menu.append(new MenuItem({
    label: 'MenuItem1',
    click: function () {
        alert('zqz click  item 1');
    }
}));
menu.append(new MenuItem({
    type: 'separator'
}));
menu.append(new MenuItem({
    label: 'MenuItem2',
    type: 'checkbox',
    checked: true
}));

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
}, false);

//--------------------
window.$ = window.jQuery = require('./js/jquery.js')
//alert($('#holder').text())