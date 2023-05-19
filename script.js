//fancybox




//audio Player
document.addEventListener('DOMContentLoaded', () => {
    /*
      All audio and images curtosey of archive.org. What a solid website!
    */
    const src = [
      [
        "Marjan Farsad", "Blue Flower/گلهای ابی", "audio/Golhaye Abi - Bing video (1).mp4","images/cover2.png"
      ],
      [
        "Marjan Farsad", "Myth/افسانه", "audio/(490) Afsaneh - Marjan Farsad _ مرجان فرساد - افسانه - YouTube.mp4",
        "images/Afsaneh.png"
      ],
      [
       "Marjan Farsad", "Our Home/خانه ما","audio/Khooneye Ma - Marjan Farsad خونه ی ما - مرجان فرساد - Bing video.mp4","images/Khooneye-Ma.png"
      ],
      [
        "Marjan Farsad", "Last Night/دیشب", "audio/(751) Dishab - YouTube.mp4",
        "images/Dishab.png"
      ],
      [
        "Marjan Farsad", "Orange/ پرتقال من", "audio/(751) Porteghale man ( Portakalım benim) l Marjan Farsad l Türkçe Altyazılı مرجان فرساد - پرتقال من - YouTube.mp4",
        "images/Porteghale.png"
      ],
      [
        "Marjan Farsad", "Dream/رویا", "audio/Royaha - Marjan Farsad _ مرجان فرساد - رویاها - Bing video.mp4",
        "images/Royaha.png"
      ]
    ];
    
    for (x = 0; x < src.length; x++) {
      var s = src[x];
      var number = parseInt(x) + 1;
      var artist = document.createTextNode(number + ": " + s[0]);
      var track_name = document.createTextNode(s[1]);
      
      var listItem = document.createElement('div');
      var artist_text = document.createElement('h3');
      var track_text = document.createElement('p');
      
      artist_text.appendChild(artist);
      track_text.appendChild(track_name);
      
      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);
      
      listItem.classList.add('item');
      listItem.dataset.index = x;
      
      document.getElementById('list').appendChild(listItem);
    }
    displayTrack(0);
    
    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
      el.onclick = ()=> {
        displayTrack(el.dataset.index);
      };
    }); 
 
    
    function displayTrack(x) {
      var active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      var el = document.getElementById('list').children[x];
      el.classList.add('is-active');
      var s = src[x],
          artist = s[0],
          track = s[1],
          audio = s[2],
          img = s[3],
          number = parseInt(x) + 1;
      document.getElementById('title').innerText = number + ": " + artist;
      document.getElementById('song_title').innerText = track;
      var albumArt = document.getElementById('art');
      albumArt.src = img;
      albumArt.alt = artist + " " + track;
      document.getElementById('audio').src = audio;
     
     
    }
  })


//songs

 function hideSubmenus(){
  const submenus = document.querySelectorAll(".content p");
  //console.log(submenus);

   for(let i=0; i < submenus.length; i++) {
       submenus[i].className = "hide-menu";
   }

}

hideSubmenus(); 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
   
    var link = this.parentNode.querySelector("div");
    //console.log(link.innerHTML);
    

    var thisLink= this.parentNode.querySelector("div .content p");
   // console.log(thisLink.innerHTML);


   if(thisLink.classList.contains("hide-menu")){
      hideSubmenus();
      thisLink.className = "show-menu";

  }else{
     thisLink.className = "hide-menu";}

 
  }); 
}



// switch button

var farsi= document.getElementsByClassName("fa");
var English = document.getElementsByClassName("En");
var fa = document.getElementById("Farsi");
//console.log(fa);
var Eng = document.getElementById("Engish");
//console.log(Eng);
var button = document.querySelectorAll("button");
//console.log(button);
//console.log(button[0].innerHTML);
var i;


function hidefarsi(){

 for(let i=0; i<farsi.length; i++) {
       farsi[i].style.display = "none";
   }

}

hidefarsi();



for (i = 0; i <button.length; i++) {

  button[i].addEventListener("click", function(e){

  e.preventDefault();

    if( this == fa){

        for(let i=0; i<English.length; i++) {
              English[i].style.display = "none";
          }

          for(let i=0; i<farsi.length; i++) {
            farsi[i].style.display = "block";
        }
    
    } else {
      hidefarsi();  
       
      for(let i=0; i<English.length; i++) {
        English[i].style.display = "block";
      }
    }
   

   




  }); 
}
/* 
fa.onclick = function(){

  for(let i=0; i<English.length; i++) {
    English[i].style.display = "none";
}

  for(let i=0; i<farsi.length; i++) {
    farsi[i].style.display = "block";
}
}; */


