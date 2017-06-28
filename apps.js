const App = "img-c:app__img";
const Desc = "p-c:app__name";
 
const colors = {
 Instagram : "#b936a4",
 Facebook : "#3a5897",
 Snapchat : "#fffd01",
 Messenger : "#00b9ff",
 Pinterest : "#b21d23",
 Pokemon : "#0713af",
 Youtube : "#dd2825"
}
 
let appName;
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
 
let addToLocal = (event) => {
  const elements = {
    previous : document.getElementsByClassName("hover"),
    newEl : event.parentElement.parentElement.querySelector("span"),
    current : event.parentElement.parentElement.querySelector("p").innerHTML,
    getHref : event.parentElement.querySelector("a"),
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
 
const setup = {
  "d:root" : ["p-c:main-title","div-c:app"],
  "c:main-title" : ["span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter","span-c:title-letter"],
  "c:app" : ["div-c:app__wrapper"]
}
const props = {
  "app" : {
    style : {
      width : "650px",
      margin: "auto"
    },
  "@media(max-width: 650px)" : {
      width: "100%"
    }
  },
  "app__wrapper" : {
    style : {
      "background-color": "rgba(211, 211, 211, 0.55)",
      "border-radius": "20px",
      padding: "20px",
      "margin-top": "20px",
      "text-align": "center",
      display: "inline-block",
      "font-family": "'Comfortaa', cursive"
    }
  },
  "main-title" : {
    style : {
    "text-align" : "center",
    "font-size": "40px",
    "font-weight" : "bold",
    margin: "20px 0"
    }
  },
  "title-letter" : {
  style : {
    color: "black",
    position: "relative",
    "font-family": "'Comfortaa', cursive"
  }
  },
  "1:title-letter" : {
    innerHTML : "F"
  },
  "2:title-letter" : {
    innerHTML : "a"
  },
  "3:title-letter" : {
    innerHTML : "v"
  },
  "4:title-letter" : {
    innerHTML : "o"
  },
  "5:title-letter" : {
    innerHTML : "r"
  },
  "6:title-letter" : {
    innerHTML : "i"
  },
  "7:title-letter" : {
    innerHTML : "t"
  },
  "8:title-letter" : {
    innerHTML : "e"
  },
  "9:title-letter" : {
    innerHTML : "A"
  },
  "10:title-letter" : {
    innerHTML : "p"
  },
  "11:title-letter" : {
    innerHTML : "p"
  }
}
 
Create(setup, props)
 
const appContent = {
  "c:app__wrapper" : ["div-c:app__App", "div-c:app__App","div-c:app__App","div-c:app__App","div-c:app__App","div-c:app__App","div-c:app__App"]
}
 
const appProps = {
  "app__App" : {
    style: {
      display: "inline-block",
      margin: "20px",
      position: "relative"
    },
    ":hover span" : {
    "box-shadow": "0px 0px 150px 80px rgba(0,0,0,0.73)"
    }
  }
}
 
Create(appContent, appProps)
 
const createApps = {
  "c:app__App" : ["span-c:shadow", "div-c:imgs", Desc]
}
 
const appsProps = {
  "shadow" : {
    style : {
      position: "absolute",
      left: "50%",
      top: "35%",
      width: "5px",
      height: "5px",
      "border-radius": "100px",
      "background-color": "white",
      "z-index": 0,
      "-webkit-transition": "350ms ease-in-out",
      transition: "350ms ease-in-out"
    }
  },
  "app__name" : {
    style : {
      "font-size": "18px",
      "font-weight": 600,
      margin: "10px auto 0",
      color: "black"
    }
  },
  "1:app__name" : {
    innerHTML : "Instagram"
  },
  "2:app__name" : {
    innerHTML : "Facebook"
  },
  "3:app__name" : {
    innerHTML : "Snapchat"
  },
  "4:app__name" : {
    innerHTML : "Messenger"
  },
  "5:app__name" : {
    innerHTML : "Pinterest"
  },
  "6:app__name" : {
    innerHTML : "Pokemon"
  },
  "7:app__name" : {
    innerHTML : "Youtube"
  }
}
 
Create(createApps, appsProps)
 
const createImgs = {
  "c:imgs" : ["a", App]
}
 
const imgsProps = {
  "imgs" : {
    style : {
      position : "relative"
    }
  },
  "app__img" : {
  class : "beck",
  
    style : {
      height: "100px",
      "z-index": 1,
      position: "relative",
      "-webkit-transition": "250ms ease-in-out",
      transition: "250ms ease-in-out",
      cursor: "pointer"
    },
  onclick : "addToLocal(this)",
  ":hover ": {
      height:"120px"
    }
  },
  "1:app__img" : {
    class : "bounce",
    src : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png"
  },
  "2:app__img" : {
    class : "bounce3",
    src: "http://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png"
  },
  "3:app__img" : {
    class : "bounce2",
    src: "https://vignette2.wikia.nocookie.net/ladygaga/images/7/75/Snapchat.png/revision/latest?cb=20160207175816"
  },
  "4:app__img" : {
    class : "bounce4",
    src : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/2000px-Facebook_Messenger_logo.svg.png"
  },
  "5:app__img" : {
    class : "bounce",
    src: "http://www.mark-sign.net/download01/data13/pinterest.png"
  },
  "6:app__img" : {
    class : "bounce2",
    src : "https://thesocietypages.org/cyborgology/files/2016/08/unnamed.png"
  },
  "7:app__img" : {
    class : "bounce",
    src: "http://www.belinterexpo.by/sites/default/files/youtube-256.png"
  },
  "a" : {
    style : {
      position: "absolute",
      bottom: "0px",
      padding: "5px 0",
      width: "100%",
      opacity : 0,
      "background-color" : "#fff",
      "text-align": "center",
      "border-radius" : "5px",
      "text-decoration" : "none",
      color: "#000",
      "-webkit-transition" : "250ms ease-in-out",
      transition : "250ms ease-in-out"
    },
    ":before" : {
      content : '""',
      position: "absolute",
      left: "calc(50% - 7.5px)",
      top: "-7.5px",
      width: "15px",
      height: "15px",
      "background-color" : "#fff",
      "-webkit-transform" : "rotate(45deg)",
      transform : "rotate(45deg)",
      "-webkit-transition" : "250ms ease-in-out",
      transition : "250ms ease-in-out"
    },
    ":hover" : {
      "background-color" : "#651c59",
      color: "#fff"
    },
    ":hover:before" : {
      "background-color" : "#651c59"
    },
    target : "_blank"
  },
  "1:a" : {
    innerHTML : "Visit site",
    href : "http://www.instagram.com"
  },
  "2:a" : {
    innerHTML : "Visit site",
    href : "http://www.facebook.com"
  },
  "3:a" : {
    innerHTML : "Visit site",
    href : "http://www.snapchat.com"
  },
  "4:a" : {
    innerHTML : "Visit site",
    href : "https://www.messenger.com"
  },
  "5:a" : {
    innerHTML : "Visit site",
    href : "http://www.pinterest.com"
  },
  "6:a" : {
    innerHTML : "Visit site",
    href : "http://www.pokemon.com"
  },
  "7:a" : {
    innerHTML : "Visit site",
    href : "http://www.youtube.com"
  },
  "hover" : {
    style : {
      "box-shadow": "0px 0px 150px 80px rgba(0,0,0,0.73)"
    } 
  }
}
 
Create(createImgs, imgsProps)
 
const animate1 = {
 "bounce" : {
   style : {
     animation: "bounce 2s 1",
   "-webkit-animation": "bounce 2s 1",
   "-moz-animation": "bounce 2s 1",
   "-o-animation": "bounce 2s 1"
   }
 },
 "bounce2" : {
   style : {
     animation: "bounce 3s 1",
   "-webkit-animation": "bounce 3s 1",
   "-moz-animation": "bounce 3s 1",
   "-o-animation": "bounce 3s 1"
   }
 },
 "bounce3" : {
   style : {
     animation: "bounce 3.5s 1",
   "-webkit-animation": "bounce 3.5s 1",
   "-moz-animation": "bounce 3.5s 1",
   "-o-animation": "bounce 3.5s 1"
   }
 },
 "animate" : {
    name : "bounce",
    logic : {
      "0%, 20%, 50%, 80%, 100%" : {
        transform : "translateY(0)"
      },
      "40%" : {
        transform: "translateY(-30px)"
      },
      "60%" : {
        transform: "translateY(-15px)"
      }
    }
  } 
}
 
Create(undefined, animate1)
 
const animate2 = {
 "animate" : {
  name : "highBounce",
  logic : {
    "0%, 20%, 50%, 80%, 100%" : {
     transform : "translateY(0)"
   },
   "40%" : {
     transform: "translateY(-40px)"
   },
   "60%" : {
     transform: "translateY(-20px)"
   }
  }
  },  
  "bounce4" : {
    style : {
      animation: "highBounce 2.5s 1",
    "-webkit-animation": "highBounce 2.5s 1",
    "-moz-animation": "highBounce 2.5s 1",
    "-o-animation": "highBounce 2.5s 1"
    }
  }
}
 
Create(undefined, animate2);
 
const animate3 = {
 "animate" : {
  name : "colorChange",
    logic : {
      "0%, 20%, 50%, 80%, 100%" : {
        transform : "translateY(0)"
      },
      "40%" : {
        transform: "translateY(-40px)"
      },
      "60%" : {
        transform: "translateY(-5px)"
      }
    }
  },
  "colorChange1" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1"
    }
  },
  "colorChange2" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "0.5s"
    }
  },
  "colorChange3" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "0.8s"
    }
  },
  "colorChange4" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "1.1s"
    }
  },
  "colorChange5" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "1.4s"
    }
  },
  "colorChange6" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "1.7s"
    }
  },
  "colorChange7" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "2s"
    }
  },
  "colorChange8" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "2.3s"
    }
  },
  "colorChange9" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "2.6s"
    }
  },
  "colorChange10" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "2.9s"
    }
  },
  "colorChange11" : {
    style : {
      animation: "colorChange 2.5s 1",
    "-webkit-animation": "colorChange 2.5s 1",
    "-moz-animation": "colorChange 2.5s 1",
    "-o-animation": "colorChange 2.5s 1",
    "animatio-delay" : "3.2s"
    }
  }
}
 
Create(undefined, animate3); 
 
 
 
