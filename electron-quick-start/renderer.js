// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
const BrowserWindow = require('electron').remote.BrowserWindow;
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
console.log('ok')
//--------------------
window.$ = window.jQuery = require('./js/jquery.js')
//alert($('#holder').text())
//==============================
console.log('----seesion----')

const ipcRenderer = require('electron').ipcRenderer;
const session = require('electron').remote.session;
let name = window.document.getElementById('name');
let password = window.document.getElementById('password');
function login(){
    console.log("login")
    let name = window.document.getElementById('name');
    let password = window.document.getElementById('password');
  };
  
  /**
   * 保存用户名和密码
   */
  function saveNameAndPassword() {
    console.log("save")
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    setCookie('name', name);
    setCookie('password', password);
  };

function getCookies() {
    console.log("get")
  session.defaultSession.cookies.get({ url: location.href||"1" }, function (error, cookies) {
    console.log(cookies);
    if (cookies.length > 0) {
      let name = document.getElementById('name');
      name.value = cookies[0].value+"ok";
      let password = document.getElementById('password');
      password.value = cookies[1].value+"ok";
      console.log(cookies)
    }
  });
};
/**
 * 清空缓存
 */
function clearCookies(){
  session.defaultSession.clearStorageData({
    origin:  location.href||"1",
    storages: ['cookies']
  }, function (error) {
    if (error) console.error(error);
  })
};

/**
 * 保存cookie
 * @param name  cookie名称
 * @param value cookie值
 */
function setCookie(name, value){
  let Days = 30;
  let exp = new Date();
  let date = Math.round(exp.getTime() / 1000) + Days * 24 * 60 * 60;
  const cookie = {
    url:  location.href||"1",
    name: name,
    value: value,
    expirationDate: date
  };
  console.log(cookie)
  session.defaultSession.cookies.set(cookie, (error) => {
    if (error) console.error(error);
  });
};
getCookies();


const ses = session.fromPartition('persist:name')
console.log(ses.getUserAgent())

document.addEventListener("keydown", function (e) {
    if (e.which === 123) {
        remote.getCurrentWindow().toggleDevTools();
    } else if (e.which === 116) {
        location.reload();
    }
});
document.getElementById('a').onclick=function(){
    login();
  }
  document.getElementById('b').onclick=function(){
    saveNameAndPassword();
  }
  document.getElementById('c').onclick=function(){
    getCookies();
  }
//---------------------
     // show initial value from main process (in dev console)
     console.log(remote.getGlobal('sharedObj').prop1);     

     // change value of global prop1
     remote.getGlobal('sharedObj').prop1 = 125;     

     // show changed value in main process (in stdout, as a proof it was changed) 
     ipcRenderer.send('show-prop1');                       

     // show changed value in renderer process (in dev console)
     console.log(remote.getGlobal('sharedObj').prop1);
     //-----------------------------
    //  var win = new BrowserWindow({
    //      width: 800,
    //      height: 600,
    //      show: false
    //  });
    //  win.on('closed', function () {
    //      win = null;
    //  });

    //  win.loadURL('https://github.com');
    //  win.show();