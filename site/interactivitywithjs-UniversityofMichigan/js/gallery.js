/*Name this external file gallery.js*/

function upDate(previewPic){
    x = previewPic.getAttribute("src");
    y = previewPic.getAttribute("alt");
  
    document.getElementById('image').style.backgroundImage = "url('" + x + "')";
    document.getElementById('image').innerHTML = y;
    console.log(x);
    console.log(y);
    
      }
  
      function unDo(){
      x=document.getElementById("image");
      x.style.backgroundImage="url('')";
      document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    }