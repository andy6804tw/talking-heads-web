const env ='production';
let domain = '';
if (env==='development'){
  domain = 'http://localhost:5000';
}else{
  domain = 'https://196e410b.ngrok.io';
}
