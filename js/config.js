const env ='production';
let domain = '';
if (env==='development'){
  domain = 'http://localhost:5000';
}else{
  domain = 'https://7f22bd21.ngrok.io';
}
