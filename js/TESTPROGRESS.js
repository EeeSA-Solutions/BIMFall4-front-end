

function changeValues(){
  let progress1 = document.getElementById('progress1');
  let p1 = Math.round(Math.random()*100)/100;
  let p2 = Math.round(Math.random()*100)/100;
  1000/12000
  updateBar(progress1, p1);
  updateBar(progress2, p2);
 
  }
  
  function updateBar(element, value){
    element.style.setProperty('--progress', value);
    element.style.setProperty('--color', getColor(value));
    element.innerHTML = `${value*100}%`;
  }
  
  function getColor(value){
    return  (value<0.5)?'#c03':((value<0.8) ? '#f63': '#0c6');
  }

  