function areValidCredentials(name, password) {
    var nombre = name.length;
    var contras = password.length;
  
    if (name.length > 3 && password.length > 8) {
      return true;
    }
    else {
        return false;
    } 

}
  
  
  module.exports = areValidCredentials;