
const formId = 'telegramForm'
const form = document.getElementById(formId)
function toJSONString(form) {
  var obj = {}
  var elements = form.querySelectorAll('input, select, textarea')
  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i]
    var name = element.name
    var value = element.value
    if (name) {
      obj[ name ] = value
    }
  }
  return JSON.stringify(obj)
}
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    const json = toJSONString(form)
    const formReq = new XMLHttpRequest()
    formReq.open('POST', '/telegram', true)
    ///////////////////////////////////
    /////////////SweetAlert////////////
    formReq.onload = function(oEvent) {
      if (formReq.status === 200) {
        swal({
          title: 'Успешно отправлено!',
          icon: 'success',
          timer: 2000
        })
        document.querySelector('.sa-success').style.display = 'block'
        document.querySelector('.sa-button-container').style.opacity = '0'
      }
      if (formReq.status !== 200) {
        swal({
          title: 'Произошла ошибка!',
          icon: 'error',
          timer: 2000
        })
        document.querySelector('.sa-error').style.display = 'block'
        document.querySelector('.sa-button-container').style.opacity = '0'
      }
    }
    ////////////////////////////
    ////////////////////////////
    formReq.setRequestHeader('Content-Type', 'application/json')
    formReq.send(json)
  })
}