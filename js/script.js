const text = ['تجربه بهترین ها','تورهای اقتصادی','تورهای لحظه آخری','سفر مطمئن'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
   if (count === text.length){
      count = 0;
   }
   currentText = text[count];
   letter = currentText.slice(0,++index);
   document.querySelector('.myText').textContent = letter;
   if (index === currentText.length) {
      index = 0;
      count++;
   }
   setTimeout(type,200)
})()
