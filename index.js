// --ALBUM1--
const firstAlbum = [
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"/>`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.2.jpg" />`,
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.1.jpg" />`

]
const firstAlbumInner = document.getElementById("album-one");
var listItemsOne = firstAlbum.map((item) => {
  return `${item}`
})
firstAlbumInner.innerHTML = listItemsOne.join(" ")

// --ALBUM2--
const secondAlbum = [
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.3.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg" />`
]
const secondAlbumInner = document.getElementById("album-two");
var listItemsTwo = secondAlbum.map((item) => {
  return `${item}`
})
secondAlbumInner.innerHTML = listItemsTwo.join(" ")

const thirdAlbum = [
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.3.photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.3.photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.3.photo.3.jpg" />`
]
const thirdAlbumInner = document.getElementById("third-album");
var listItemsThird = thirdAlbum.map((item) => {
  return `${item}`
})
thirdAlbumInner.innerHTML = listItemsThird.join(" ")

const fourthAlbum = [
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.3.jpg" />`
]
const fourthAlbumInner = document.getElementById("fourth-album");
var listItemsFourth = fourthAlbum.map((item) => {
  return `${item}`
})
fourthAlbumInner.innerHTML = listItemsFourth.join(" ")


const fithAlbum = [
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.1.jpg" />`,
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.2.jpg" />`,
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.3.jpg" />`,
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`,
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg" />`,
  `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg" />`
]
const fithAlbumInner = document.getElementById("fith-album");
var listItemsFith = fithAlbum.map((item) => {
  return `${item}`
})
fithAlbumInner.innerHTML = listItemsFith.join(" ")


const sixthAlbum = [
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.6.photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.6.photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/album.6.photo.3.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg" />`
  , `<img class="img-fluid" src="https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg" />`
]
const sixthAlbumInner = document.getElementById("sixth-album");
var listItemsSixth = sixthAlbum.map((item) => {
  return `${item}`
})
sixthAlbumInner.innerHTML = listItemsSixth.join(" ")

const albumOneHandle = () => {
  let popedOne = firstAlbum.shift()
  let itemNum = firstAlbum.length
  let itemToAnimate=`${popedOne.substring(0, popedOne.length-2)}`
  let animateId= null
  let image =null
  switch (itemNum) {
    case 5:
      fourthAlbum.push(itemToAnimate +`id="animate-fourth" />`)
      animateId ="animate-fourth"
      listItemsOne = firstAlbum.map((item) => {
        return `${item}`
      })
      firstAlbumInner.innerHTML = listItemsOne.join(" ")
      listItemsFourth = fourthAlbum.map((item) => {
        return `${item}`
      })
      fourthAlbumInner.innerHTML = listItemsFourth.join(" ")

      break;

    case 4:
      fithAlbum.push(itemToAnimate+`id="animate-fith" />`)
      animateId ="animate-fith"
      listItemsOne = firstAlbum.map((item) => {
        return `${item}`
      })
      firstAlbumInner.innerHTML = listItemsOne.join(" ")
      listItemsFith = fithAlbum.map((item) => {
        return `${item}`
      })
      fithAlbumInner.innerHTML = listItemsFith.join(" ")

      break;

    case 3:
      sixthAlbum.push(itemToAnimate+`id="animate-sixth" />`)
      animateId ="animate-sixth"
      listItemsOne = firstAlbum.map((item) => {
        return `${item}`
      }) 
      firstAlbumInner.innerHTML = listItemsOne.join(" ")
      listItemsSixth = sixthAlbum.map((item) => {
        return `${item}`
      })
      sixthAlbumInner.innerHTML = listItemsSixth.join(" ")

      break;
    case 2:
      thirdAlbum.push(itemToAnimate+`id="animate-third" />`)
      animateId ="animate-third"
      listItemsOne = firstAlbum.map((item) => {
        return `${item}`
      })
      firstAlbumInner.innerHTML = listItemsOne.join(" ")
      listItemsThird = thirdAlbum.map((item) => {
        return `${item}`
      })
      thirdAlbumInner.innerHTML = listItemsThird.join(" ")


      break;
    case 1:
      secondAlbum.push(itemToAnimate+`id="animate-second" />`)
      animateId ="animate-second"
      listItemsOne = firstAlbum.map((item) => {
        return `${item}`
      })
      firstAlbumInner.innerHTML = listItemsOne.join(" ")
      listItemsTwo = secondAlbum.map((item) => {
        return `${item}`
      })
      secondAlbumInner.innerHTML = listItemsTwo.join(" ")


      break;

    default:
      alert("Remain only one picture")
      break;

      
  }
  myMove(animateId)

}

const albumSecondHandle = () => {
  let poped = secondAlbum.pop()
  let itemNum = secondAlbum.length
  if (itemNum >= 6) {
    firstAlbum.unshift(poped)
    listItemsSecond = secondAlbum.map((item) => {
      return `${item}`
    })
    secondAlbumInner.innerHTML = listItemsSecond.join(" ")
    listItemsOne = firstAlbum.map((item) => {
      return `${item}`
    })
    firstAlbumInner.innerHTML = listItemsOne.join(" ")
  }
  else {
    alert("Not enough")
  }



}

const albumThirdHandle = () => {
  let poped = thirdAlbum.pop()
  let itemNum = thirdAlbum.length
  if (itemNum >= 7) {
    firstAlbum.unshift(poped)
    listItemsThird = thirdAlbum.map((item) => {
      return `${item}`
    })
    thirdAlbumInner.innerHTML = listItemsThird.join(" ")
    listItemsOne = firstAlbum.map((item) => {
      return `${item}`
    })
    firstAlbumInner.innerHTML = listItemsOne.join(" ")
  }
  else {
    alert("Not enough")
  }



}

const albumFourthHandle = () => {
  let poped = fourthAlbum.pop()
  let itemNum = fourthAlbum.length
  if (itemNum >= 7) {
    firstAlbum.unshift(poped)
    listItemsFourth = fourthAlbum.map((item) => {
      return `${item}`
    })
    fourthAlbumInner.innerHTML = listItemsFourth.join(" ")
    listItemsOne = firstAlbum.map((item ) => {
      return `${item}`
    })
    firstAlbumInner.innerHTML = listItemsOne.join(" ")
  }
  else {
    alert("Not enough")
  }



}

const albumFithHandle = () => {
  let poped = fithAlbum.pop()
  let itemNum = fithAlbum.length
  if (itemNum >= 6) {
    firstAlbum.unshift(poped)
    listItemsFith = fithAlbum.map((item) => {
      return `${item}`
    })
    fithAlbumInner.innerHTML = listItemsFith.join(" ")
    listItemsOne = firstAlbum.map((item) => {
      return `${item}`
    })
    firstAlbumInner.innerHTML = listItemsOne.join(" ")
  }
  else {
    alert("Not enough")
  }



}

const albumSixthHandle = () => {
  let poped = sixthAlbum.pop()
  let itemNum = sixthAlbum.length
  if (itemNum >= 7) {
    firstAlbum.unshift(poped)
    listItemsSixth = sixthAlbum.map((item) => {
      return `${item}`
    })
    sixthAlbumInner.innerHTML = listItemsSixth.join(" ")
    listItemsOne = firstAlbum.map((item) => {
      return `${item}`
    })
    firstAlbumInner.innerHTML = listItemsOne.join(" ")
  }
  else {
    alert("Not enough")
  }



}


function myMove(animate) {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  // var field = document.getElementById("field");
  var ball = document.getElementById(animate);

  var maxX = 800;
  var maxY = 800;

  var duration = 7; // seconds
  var gridSize = 100; // pixels

  var start = null;
  var stretchFactor;

  function step(timestamp)
  {
    var progress, x, y;
    if(start === null) {
      start = timestamp;
      
      stretchFactor = 1 + (Math.random() * 3);
    }
    progress = (timestamp - start) / duration / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

    ball.style.left = maxX/2 + (gridSize * x) + "px";
    ball.style.bottom = maxY/2 + (gridSize * y) + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

}