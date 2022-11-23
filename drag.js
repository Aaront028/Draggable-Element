window.onload = () => {
	
 let parent = document.querySelector('.parent');
 let parentRect = parent.getBoundingClientRect();

 let draggable = document.querySelector('.draggable');
 let draggableRect = draggable.getBoundingClientRect();
 
 
 let dragging = false;
 
 
 function moveStart(e)
 {
   e.preventDefault();
   dragging = true;
 }
 
 function moveEnd(e)
 {
   e.preventDefault();
   draggable.style.cursor = "grab";
   dragging = false;
 }

 function moving(e)
 {
   e.preventDefault();
   
   if( dragging)
   {
     //if the position of the element is bigger or equal to parent div. Keeps the element inside the parent div
     if( (e.clientX >= parentRect.left + 50  && (e.clientX+draggableRect.width <= parentRect.right + 50)) &&
         (e.clientY >= parentRect.top +50 && (e.clientY+draggableRect.height <= parentRect.bottom +50))  
       ){
       //adds widths and height style to draggable element in pixels
       
         draggable.style.cursor = "grabbing";
         draggable.style.left = `${e.clientX-50}px`;
         draggable.style.top = `${e.clientY-50}px`;
         
     }
     else{
       //if mouse went out of bounds in Horizontal and keeps the element inside the parent div
       if(e.clientX+draggableRect.width >= parentRect.right){
          draggable.style.left = `${parentRect.right-draggableRect.width}px`;
       }
       //if mouse went out of bounds in Vertical keeps the element inside the parent div
       if(e.clientY+draggableRect.height >= parentRect.bottom ){
          draggable.style.top = `${parentRect.bottom-draggableRect.height}px`;
       }
       
     }
     
   }	
  //  testing purposes finding out position and size of element and parent div
  //  console.log("parentrect left: ",parentRect.left)
  //  console.log("parentrect right: ",parentRect.right)
  //  console.log("parentrect bottom: ",parentRect.bottom)
  //  console.log("parentrect top: ",parentRect.top)
  //  console.log("draggable rect width: ", draggableRect)
 }
 
 //allows only one draggable item to move on click
 draggable.addEventListener('mousedown', moveStart);

 document.addEventListener('mousemove', moving);
 document.addEventListener('mouseup', moveEnd);

//  draggable.addEventListener('touchstart', moveStart, { passive: false });

//  document.addEventListener('touchmove', moving, { passive: false });
//  document.addEventListener('touchend', moveEnd, { passive: false });

}