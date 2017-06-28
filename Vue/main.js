
const colors = {
 Instagram : "#b936a4",
 Facebook : "#3a5897",
 Snapchat : "#fffd01",
 Messenger : "#00b9ff",
 Pinterest : "#b21d23",
 Pokemon : "#0713af",
 Youtube : "#dd2825"
}

const apps = [
  {
    name : "Instagram",
    href : "http://www.instagram.com",
    classes : ["app__img", "bounce"],
    src : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png"
  },
  {
    name : "Facebook",
    href : "http://www.facebook.com",
    classes : ["app__img", "bounce3"],
    src : "http://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png"
  },
  {
    name : "Snapchat",
    href : "http://www.snapchat.com",
    classes : ["app__img", "bounce2"],
    src : "https://vignette2.wikia.nocookie.net/ladygaga/images/7/75/Snapchat.png/revision/latest?cb=20160207175816"
  },
  {
    name : "Messenger",
    href : "http://www.messenger.com",
    classes : ["app__img", "bounce4"],
    src : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/2000px-Facebook_Messenger_logo.svg.png"
  },
  {
    name : "Pinterest",
    href : "http://www.pinterest.com",
    classes : ["app__img", "bounce"],
    src : "http://www.mark-sign.net/download01/data13/pinterest.png"
  },
  {
    name : "Pokemon",
    href : "http://www.pokemon.com",
    classes : ["app__img", "bounce2"],
    src : "https://thesocietypages.org/cyborgology/files/2016/08/unnamed.png"
  },
  {
    name : "Youtube",
    href : "http://www.youtube.com",
    classes : ["app__img", "bounce"],
    src : "http://www.belinterexpo.by/sites/default/files/youtube-256.png"
  }
]

const line = (stored) => {return stored.split("").splice(0,stored.length-1).join("");}

window.onload = () => {
  let stored = String(localStorage.getItem("appName"))
  if(stored == undefined){
    return
  }
  else {
    appName = document.querySelector(`a[href='${line(stored)}']`).parentElement.parentElement.querySelector("p").innerHTML;
 
    document.querySelector("body").style.backgroundColor = colors[appName];
    let element = document.querySelector(`a[href='${line(stored)}']`).parentElement.parentElement.querySelector("span");
    element.classList.add("hover")
  }
}

const app = new Vue({
  el: '#app',
  data: {
    apps : apps
  },
  methods : {
    add : (event) => {
      const elements = {
        previous : document.getElementsByClassName("hover"),
        newEl : event.target.parentElement.parentElement.querySelector("span"),
        current : event.target.parentElement.parentElement.querySelector("p").innerHTML,
        getHref : event.target.parentElement.querySelector("a"),
        getAllHref : document.querySelectorAll("a")
      };
    
      [...elements.getAllHref].map((el) => {
          el.style.bottom = "0px";
          el.style.opacity = "0";
      });
      
      localStorage.setItem('appName', elements.getHref.href);
      
      elements.getHref.style.bottom = "-38px";
      elements.getHref.style.opacity = "1";
      
      setTimeout(() => {
          elements.getHref.style.bottom = "0px";
          elements.getHref.style.opacity = "0";
      }, 3000)
      
      document.querySelector("body").style.backgroundColor = colors[elements.current];
      
      if(elements.previous.length != 0){
        elements.previous[0].classList.remove("hover")
        elements.newEl.classList.add("hover");
      }
      else {
        elements.newEl.classList.add("hover");
      }
    }
  }
})