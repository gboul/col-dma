var API_URL = 'https://api.shutterstock.com/v2';
var shutterstockClientId = '148f2da09975e4a56800';
var shutterstockClientSecret = '8ff5ee592cc3571356464512dbce8b1a288a5dac';
// Base 64 encode Client ID and Client Secret for use in the Authorization header
function encodeAuthorization() {
  return 'Basic ' + window.btoa(shutterstockClientId + ':' + shutterstockClientSecret);
}
