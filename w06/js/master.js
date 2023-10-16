var Body={
   setBackgroundColor : function(color){
      document.querySelector('body').style.backgroundColor=color;
   },
   setColor : function(color){
      document.querySelector('body').style.color=color;
   }
}
var Links={
   setColor : function(color){
      $('a').css('color', color);
   }
}



function nightDayHandler(self){

    var target =document.querySelector('body');
    if(self.value=='night'){
     Body.setBackgroundColor('black'); 
     Body.setColor('white');
     Links.setColor('powderblue');
     self.value='day'
      }
        
     else {
     Body.setBackgroundColor('white');
     Body.setColor('black');
     Links.setColor('blue');
     self.value='night'
    }
}
