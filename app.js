var elementList = {typeList:'',
                   htmlItem:'',
                   item:'', // es el item de la lista
                   openTagList:'<li>',
                   closeTagList:'</li>'
                   };



var putElementList = function(){
  $(this.typeList).append(this.openTagList + this.htmlItem + this.closeTagList);
  this.item.remove();
}




$(".todo").on("click","li", function(e){

   var target = $(e.target); //permite saber si el elemento span provocó el evento click

   if(target.is("span")){
     $(this).remove();
   }else{
      elementList.htmlItem = $(this).html();
      elementList.item = $(this);
      elementList.typeList = '.done';
      putElementList.call(elementList);// se pasa el contexto
   }

});



$(".done").on("click","li", function(e){ //event delegation debido a que li no se carga inicialmente

  var target = $(e.target);

  if(target.is("span")){
    $(this).remove();
  }else{
    elementList.htmlItem = $(this).html();
    elementList.item = $(this);
    elementList.typeList = '.todo';
    putElementList.call(elementList);// se pasa el contexto
  }

});



