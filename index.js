function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#f7f7f7";

  }
  
  var slideImg = document.getElementById("slideImg");
  var images = new Array(
      "/images/iphone132.png",
      "/images/laptop1.png",
      "/images/accessories1.png",
    
  );
  var len = images.length;
  var i = 0;
  function slider(){
      if(i> len-1){
          i = 0;
      }
      slideImg.src = images[i];
      i++;
      setTimeout('slider()',3000);
  }
 