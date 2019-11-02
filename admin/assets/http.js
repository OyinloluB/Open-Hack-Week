function COM() {
  this.http = new XMLHttpRequest();
}
//Get
COM.prototype.get = function(destination, cb) {
  this.http.open("GET", destination, true);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      cb(null, JSON.parse(self.http.responseText));
    } else {
      cb(`An Error Occured: ${self.http.status}`);
    }
  };

  this.http.send();
};
COM.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
