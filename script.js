function $(selector) {
    
  var query = document.querySelectorAll(selector);

  
  query.css = function (property, value) {
      if (typeof property === "object") {
          for (let i = 0; i < query.length; i++) {
              for (let [key, value] of Object.entries(property)) {
                  query[i].style.setProperty(key, value);
              }
          }
      }

      else {
          for (let j = 0; j < query.length; j++) {
              query[j].style.setProperty(property, value);
          }
      }
      return query;
  }

  query.on = function (event, callback) {
      for (let i = 0; i < query.length; i++) {
          query[i].addEventListener(event, callback);
      }
      return query;
  }

  query.each = function()  {
      for(let k=0;k<query.length;k++) {
          if(k%2==0){
              var color1 = query[k];
              color1.style.setProperty('color','green');
          }
          else{
              var color2 = query[k];
              color2.style.setProperty('color','orange');
          }
      }
     
  }
  return query;
}