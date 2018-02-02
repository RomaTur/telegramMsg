module.exports.sendMsg = (req, res) => {
  const config = require('../config/configLocal.json');
  let http = require('request')
  let reqBody = req.body
  let fields = [
    '<b>Name</b>: ' + reqBody.name,
    '<b>Email</b>: ' + reqBody.email,
    reqBody.text
  ]
  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  });
  msg = encodeURI(msg)
  http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    if(response.statusCode===200){
      res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
    }
    if(response.statusCode===400){
      res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
    }
  });

}