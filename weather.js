<script>
   (function(){

   var body=document.getElementsByTagName("body");

   if (body[0].getAttribute("id")=="collection-54d11b07e4b0a33bbb20a490") {
     var images = [
     "http://www.mediafactory.org.au/alexandra-race-lyons/files/2014/07/creative-commons-2-1ef4xzl.png",
     "http://www.mediafactory.org.au/alexandra-race-lyons/files/2014/07/creative-commons-2-1ef4xzl.png", 
     "http://www.mediafactory.org.au/alexandra-race-lyons/files/2014/07/creative-commons-2-1ef4xzl.png"
     ];

     var imgCount = images.length;

     var randNumber=Math.floor((Math.random() * imgCount) + 1);

     imgURL = images[randNumber-1];

     var image=document.getElementsByClassName("thumb-image loaded");
     image[0].setAttribute("src", imgURL);
     image[0].setAttribute("data-image", imgURL);
     image[0].setAttribute("data-src", imgURL);
     image[0].style.visibility="visible";
   }

 }());
</script>

