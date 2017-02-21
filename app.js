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



$('.todo li').on('click', function(){
   elementList.htmlItem = $(this).html();
   elementList.item = $(this);
   elementList.typeList = '.done';
   putElementList.call(elementList);// se pasa el contexto
});

$('.done li').on('click', function(){
  alert("click");
  elementList.htmlItem = $(this).html();
  elementList.item = $(this);
  elementList.typeList = '.todo';
  putElementList.call(elementList);// se pasa el contexto
});