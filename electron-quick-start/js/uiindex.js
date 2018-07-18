//alert(jQuery.fn.jquery)

$(function () {
    console.log('ui-index')
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
})
const remote = require('electron').remote;
console.log(remote.getGlobal('sharedObj').prop1);     