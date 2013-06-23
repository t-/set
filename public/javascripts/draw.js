function DrawCircle(){
  for (var cc=0; cc<color.length; cc++){
    for (var tt=0; tt<tone.length; tt++){
      for (var nn=0; nn<number.length; nn++){
        col_fill='rgba('+color[cc]+","+tone[tt]+')'
        col_stroke='rgb('+color[cc]+')'
        var c=document.createElement("canvas")
        c.className="mem shape3 color"+cc+" tone"+tt+" count"+nn
        c.style.width=w+"px";
        c.style.height=h+"px";
        c.style.padding="0px 0px 0px 0px"
        c.style.margin="0px 0px 0px 0px"
        c.width=w
        c.height=h
        var context=c.getContext("2d");
        context.beginPath()
          context.fillStyle=col_stroke;//canvasBgColor
          context.rect(0,0,w,h)
          context.fill()
        context.beginPath()
          context.fillStyle=canvasBgColor
          context.strokeStyle=canvasBgColor
          context.lineWidth=lwidth
          if (number[nn]==1){
            context.moveTo(w/3.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(w/3.0+10,2*h/3.0, 2*w/3.0-10,2*h/3.0, 2*w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0-10,h/3  , w/3.0+10,h/3.0, w/3.0+10,h/3.0+h/6.0);
          }else if(number[nn]==2){
            //left
            context.moveTo(w/6.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(w/6.0+10,2*h/3.0, w/6.0+w/3.0-10,2*h/3.0, w/6.0+w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(w/6.0+w/3.0-10,h/3  , w/6.0+10,h/3.0, w/6.0+10,h/3.0+h/6.0)
            //right
            context.moveTo(2*w/3.0+10-w/6.0,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0+10-w/6.0,2*h/3.0, 3*w/3.0-10-w/6.0,2*h/3.0, 3*w/3.0-10-w/6.0,h/3.0+h/6.0);
            context.bezierCurveTo(3*w/3.0-10-w/6.0,h/3  , 2*w/3.0+10-w/6.0,h/3.0, 2*w/3.0+10-w/6.0,h/3.0+h/6.0);
          }else if(number[nn]==3){
            //center
            context.moveTo(w/3.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(w/3.0+10,2*h/3.0, 2*w/3.0-10,2*h/3.0, 2*w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0-10,h/3  , w/3.0+10,h/3.0, w/3.0+10,h/3.0+h/6.0);
            //left
            context.moveTo(10,h/3.0+h/6.0);
            context.bezierCurveTo(10,2*h/3.0, w/3.0-10,2*h/3.0, w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(w/3.0-10,h/3  , 10,h/3.0, 10,h/3.0+h/6.0)
            //right
            context.moveTo(2*w/3.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0+10,2*h/3.0, 3*w/3.0-10,2*h/3.0, 3*w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(3*w/3.0-10,h/3  , 2*w/3.0+10,h/3.0, 2*w/3.0+10,h/3.0+h/6.0);
          }
          context.fill()
          context.stroke()

          context.fillStyle=col_fill
          context.strokeStyle=canvasBgColor
          context.lineWidth=lwidth
          if (number[nn]==1){
            context.moveTo(w/3.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(w/3.0+10,2*h/3.0, 2*w/3.0-10,2*h/3.0, 2*w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0-10,h/3  , w/3.0+10,h/3.0, w/3.0+10,h/3.0+h/6.0);
          }else if(number[nn]==2){
            //left
            context.moveTo(w/6.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(w/6.0+10,2*h/3.0, w/6.0+w/3.0-10,2*h/3.0, w/6.0+w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(w/6.0+w/3.0-10,h/3  , w/6.0+10,h/3.0, w/6.0+10,h/3.0+h/6.0)
            //right
            context.moveTo(2*w/3.0+10-w/6.0,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0+10-w/6.0,2*h/3.0, 3*w/3.0-10-w/6.0,2*h/3.0, 3*w/3.0-10-w/6.0,h/3.0+h/6.0);
            context.bezierCurveTo(3*w/3.0-10-w/6.0,h/3  , 2*w/3.0+10-w/6.0,h/3.0, 2*w/3.0+10-w/6.0,h/3.0+h/6.0);
          }else if(number[nn]==3){
            //center
            context.moveTo(w/3.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(w/3.0+10,2*h/3.0, 2*w/3.0-10,2*h/3.0, 2*w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0-10,h/3  , w/3.0+10,h/3.0, w/3.0+10,h/3.0+h/6.0);
            //left
            context.moveTo(10,h/3.0+h/6.0);
            context.bezierCurveTo(10,2*h/3.0, w/3.0-10,2*h/3.0, w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(w/3.0-10,h/3  , 10,h/3.0, 10,h/3.0+h/6.0)
            //right
            context.moveTo(2*w/3.0+10,h/3.0+h/6.0);
            context.bezierCurveTo(2*w/3.0+10,2*h/3.0, 3*w/3.0-10,2*h/3.0, 3*w/3.0-10,h/3.0+h/6.0);
            context.bezierCurveTo(3*w/3.0-10,h/3  , 2*w/3.0+10,h/3.0, 2*w/3.0+10,h/3.0+h/6.0);
          }
          context.fill()
          context.stroke()

          cards.push(c)
        //document.getElementById("game").appendChild(c)
      }
    }
  }    
}//DrawCircle 
function DrawTriangle(){
  for (var cc=0; cc<color.length; cc++){
    for (var tt=0; tt<tone.length; tt++){
      for (var nn=0; nn<number.length; nn++){
        col_fill='rgba('+color[cc]+","+tone[tt]+')'
        col_stroke='rgb('+color[cc]+')'
        var c=document.createElement("canvas")
        c.className="mem shape2 color"+cc+" tone"+tt+" count"+nn
        c.style.width=w+"px";
        c.style.height=h+"px";
        c.style.padding="0px 0px 0px 0px"
        c.style.margin="0px 0px 0px 0px"
        c.width=w
        c.height=h
        var context=c.getContext("2d");
        context.beginPath()
          context.fillStyle=col_stroke;//canvasBgColor
          context.rect(0,0,w,h)
          context.fill()
        context.beginPath()
        context.lineJoin    = "round";
        context.lineCap     = "round";
        context.lineWidth   = lwidth;
        context.fillStyle   = canvasBgColor
        context.strokeStyle = canvasBgColor
        if (number[nn]==3){
        //mtop
        context.moveTo(w/2, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10, 2*h/3.0-5);
        context.lineTo(w/3.0+10, 2*h/3.0-5);
        context.lineTo(w/2, h/3.0+10);

        //lowleft
        context.moveTo(w/2-w/3.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10-w/3.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10-w/3.0, 2*h/3.0-5);
        context.lineTo(w/2-w/3.0, h/3.0+10);

        //lowright
        context.moveTo(w/2+w/3.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10+w/3.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10+w/3.0, 2*h/3.0-5);
        context.lineTo(w/2+w/3.0, h/3.0+10);

        }else if (number[nn]==1){
        //mtop
        context.moveTo(w/2, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10, 2*h/3.0-5);
        context.lineTo(w/3.0+10, 2*h/3.0-5);
        context.lineTo(w/2, h/3.0+10);
        }else if (number[nn]==2){
        //lowleft
        context.moveTo(w/2-w/6.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10-w/6.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10-w/6.0, 2*h/3.0-5);
        context.lineTo(w/2-w/6.0, h/3.0+10);

        //lowright
        context.moveTo(w/2+w/6.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10+w/6.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10+w/6.0, 2*h/3.0-5);
        context.lineTo(w/2+w/6.0, h/3.0+10);
        }
          context.fill()
          context.stroke()

          context.lineWidth=lwidth
          context.strokeStyle=canvasBgColor;// col_stroke
          context.fillStyle=col_fill
        if (number[nn]==3){
        //mtop
        context.moveTo(w/2, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10, 2*h/3.0-5);
        context.lineTo(w/3.0+10, 2*h/3.0-5);
        context.lineTo(w/2, h/3.0+10);

        //lowleft
        context.moveTo(w/2-w/3.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10-w/3.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10-w/3.0, 2*h/3.0-5);
        context.lineTo(w/2-w/3.0, h/3.0+10);

        //lowright
        context.moveTo(w/2+w/3.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10+w/3.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10+w/3.0, 2*h/3.0-5);
        context.lineTo(w/2+w/3.0, h/3.0+10);

        }else if (number[nn]==1){
        //mtop
        context.moveTo(w/2, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10, 2*h/3.0-5);
        context.lineTo(w/3.0+10, 2*h/3.0-5);
        context.lineTo(w/2, h/3.0+10);
        }else if (number[nn]==2){
        //lowleft
        context.moveTo(w/2-w/6.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10-w/6.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10-w/6.0, 2*h/3.0-5);
        context.lineTo(w/2-w/6.0, h/3.0+10);

        //lowright
        context.moveTo(w/2+w/6.0, h/3.0+10); // give the (x,y) coordinates
        context.lineTo(2*w/3.0-10+w/6.0, 2*h/3.0-5);
        context.lineTo(w/3.0+10+w/6.0, 2*h/3.0-5);
        context.lineTo(w/2+w/6.0, h/3.0+10);
        }

        context.fill();
        context.stroke()


        cards.push(c)
      }
    }
  }
}//DrawCircle

function DrawSquare(){   
 	for (var cc=0; cc<color.length; cc++){
    for (var tt=0; tt<tone.length; tt++){
      for (var nn=0; nn<number.length; nn++){
        col_fill='rgba('+color[cc]+","+tone[tt]+')'
        col_stroke='rgb('+color[cc]+')'
        var c=document.createElement("canvas")
        c.className="mem shape1 color"+cc+" tone"+tt+" count"+nn
        c.style.padding="0px 0px 0px 0px"
        c.style.margin="0px 0px 0px 0px"
        c.style.width=w+"px";
        c.style.height=h+"px";
        c.width=w
        c.height=h
        var context=c.getContext("2d");
        context.beginPath()
          context.fillStyle=col_stroke;//canvasBgColor
          context.rect(0,0,w,h)
          context.fill()
        context.beginPath()
          context.lineWidth=lwidth
          context.strokeStyle=canvasBgColor;// col_stroke
          context.fillStyle=canvasBgColor
          if (number[nn]==1){
            context.rect(w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
          }else if(number[nn]==2){
            context.rect(w/6.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
            context.rect(w/6.0+w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
          }else if(number[nn]==3){
            context.rect(10,h/3.0+10,w/3.0-20,h/3.0-20);
            context.rect(w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
            context.rect(2*w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
          }
          context.fill()
          context.stroke()

          context.lineWidth=lwidth
          context.strokeStyle=canvasBgColor;// col_stroke
          context.fillStyle=col_fill
          if (number[nn]==1){
            context.rect(w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
          }else if(number[nn]==2){
            context.rect(w/6.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
            context.rect(w/6.0+w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
          }else if(number[nn]==3){
            context.rect(10,h/3.0+10,w/3.0-20,h/3.0-20);
            context.rect(w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
            context.rect(2*w/3.0+10,h/3.0+10,w/3.0-20,h/3.0-20);
          }        
          context.fill()
          context.stroke()
          cards.push(c)  
      }
 		}
 	}
}//DrawSquare