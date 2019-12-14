const env ='production';
let domain = '';
if (env==='development'){
  domain = 'http://localhost:5000';
}else{
  domain = 'https://ee8f9815.ngrok.io';
}
