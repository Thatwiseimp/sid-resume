counter= 0
window.onload = function(){
    counter_element= document.getElementById('count').innerHTML;
    document.querySelector('#count').innerHTML = counter;
    console.log(counter_element);
    counter++
};

window.onload = function(){
        setTimeout(function(){
        document.querySelector('.changer').innerHTML ='Artist'
    }, 2000);
        setTimeout(function(){
        document.querySelector('.changer').innerHTML ='Standup Comedian'
    }, 4000);
        setTimeout(function(){
        document.querySelector('.changer').innerHTML ='Public speaker'
    }, 6000);

}

var http = require('http');
//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'www.random.org',
  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();