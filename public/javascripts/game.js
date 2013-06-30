function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  (function($) {
  $.fn.render = function() {
    $("#game").show()
    for (var i=0; i<20; i++){cards = shuffleArray(cards)}
    cou = $("#game .mem").length
    for (var i=0; i<(12-cou); i++){
      x=cards.pop()
      $(x).css("border-style","solid")
      $(x).css("border-width","2px")
      $(x).css("border-color","#efefef") 
      $(x).css("float","left")
      $(x).mousedown(function(){
        nselect += 1
        $(this).css("border-color","#34495e")
        var sel = $(this).classes()
        var seljoin = '.'+sel.join(".")
        selection.push(sel)
        selectionJoin.push(seljoin)
        selection = array_unique(selection)
        selectionJoin = array_unique(selectionJoin)
        if (selectionJoin.length==3){
          $("#playerSelect").show()
          $("#game").hide()
          $("#stack").hide()
        }
      })
      $("#game").append(x)
    }
  }
})(jQuery);

function VerifyMove(){
    ans = CheckSelection()
    if (ans==true){
      for (var i=0;i<3;i++){
        $(selectionJoin[i]).css("border-color","#efefef").unbind('mousedown').prependTo("#PlayerChoice")  
      }
      aval=$("#score"+CurrentPlayer).text()
      $("#score"+CurrentPlayer).text(parseInt(aval)+1)
      $("#moveText").text("CORRECT! Player"+CurrentPlayer)
    }else{
      for (var i=0;i<3;i++){
        $(selectionJoin[i]).css("border-color","#efefef").unbind('mousedown').prependTo("#PlayerChoice")  
      }
      $("#moveText").text("WRONG! Player"+CurrentPlayer)
      aval=$("#score"+CurrentPlayer).text()
      if (aval > 0){
        $("#score"+CurrentPlayer).text(parseInt(aval)-1)
      }
      for (var i=0;i<3;i++){
        $(selectionJoin[i]).css("border-color","#efefef") 
      }
    }
  selectionJoin=[]
  selection=[]
}

(function ($) {
    $.fn.classes = function (callback) {
        var classes = [];
        $.each(this, function (i, v) {
            var splitClassName = v.className.split(/\s+/);
            for (var j in splitClassName) {
                var className = splitClassName[j];
                if ('' !== className) {
                    classes.push(className); // replace with 'classes.unshift(className);' to put classes in order of their appearance
                }
            }
        });
        if ('function' === typeof callback) {
            for (var i in classes) {
                callback(classes[i]);
            }
        }
        return classes;
    };
})(jQuery);

function array_unique(arrayName) {
  var newArray = new Array();
  label:for(var i=0; i<arrayName.length;i++ ) { 
     for(var j=0; j<newArray.length;j++ ) {
        if(newArray[j] == arrayName[i])
           continue label;
     }
     newArray[newArray.length] = arrayName[i];
  }
  return newArray;
}

function CheckSelection(){
  kill = false
  for (var i=0; i<4; i++){
    console.log("property "+i)
    if ((selection[0][i]==selection[1][i] && selection[1][i]==selection[2][i]) || (selection[0][i]!=selection[1][i] && selection[1][i]!=selection[2][i] && selection[0][i]!=selection[2][i]) ){
      kill = false
      console.log("property "+i+" correct")
    }else{
      kill = true
    }
    if (kill==true){
      console.log("wrong!")
      return false
    }
  }
  if (kill==false){
    return true
  }
}

function EndMove(){
  $("#PlayerChoice .mem").each(function(ele){
    $(this).css("border-style","none").unbind('mousedown')
    cards.unshift($(this).get(0))
    $(this).remove()
  })
  $("#results").hide()
  $(".mem").render()
}
