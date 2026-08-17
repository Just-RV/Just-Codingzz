console.log("Hii")

const Bottons = document.querySelectorAll('.Botton');
const body = document.querySelector('body');

Bottons.forEach(function (Bottons){

  Bottons.addEventListener('click' , function(e){

  if(e.target.id === 'white'){
    body.style.background = e.target.id;
  }
  if(e.target.id === 'red'){
    body.style.background = e.target.id;
  }
  if(e.target.id === 'black'){
    body.style.background = e.target.id;
  }
  if(e.target.id === 'yellow'){
    body.style.background = e.target.id;
  }

  })

})