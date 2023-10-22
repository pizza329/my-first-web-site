var Body={
    setColor:function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}

var Links={
    setColor:function(color){
        var alist=document.querySelector('a');
        var i=0;
        while(i<alist.length){
            alist[i].style.color=color;
            i=i+1
        }
    }
}


function nightDayHandler(self){
    if(self.value=='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        self.value='day';
    }
    else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        self.value='night';
    }
}





function bodySetColor(color){
    document.querySelector('body').style.color=color;
}

function bodyBgSetColor(color){
    document.querySelector('body').style.backgroundColor=color;
}

function nightDayHandler(self){
    var target=document.querySelector('body');

    if(self.value=='night'){
        bodyBgSetColor('black');
        bodySetColor('white');
        self.value='day';
        setColor('powderblue');

    }else
    {   bodyBgSetColor('white');
        bodySetColor('black');
        self.value='night';
        setColor('blue');
        }
    }
    