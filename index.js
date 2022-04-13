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

const firstAlbumHandle = () => {
  let shiftedFirst = firstAlbum.shift()
  let shiftedSecond = firstAlbum.shift()
  let shiftedThird = firstAlbum.shift()
  let shiftedFourth = firstAlbum.shift()
  let shiftedFifth = firstAlbum.shift()
  let shiftedSixth = firstAlbum.shift()
  listItemsOne = firstAlbum.map((item) => {
    return `${item}`
  })
  firstAlbumInner.innerHTML = listItemsOne.join(" ")
  let itemNum = firstAlbum.length
  console.log(itemNum)
  let firstItemToAnimate = `${shiftedFirst.substring(0, shiftedFirst.length - 2)}`
  let animateId = null
  fourthAlbum.push(firstItemToAnimate + `id="animate-fourth" />`)
  animateId = "animate-fourth"
  listItemsOne = firstAlbum.map((item) => {
    return `${item}`
  })
  firstAlbumInner.innerHTML = listItemsOne.join(" ")
  listItemsFourth = fourthAlbum.map((item) => {
    return `${item}`
  })
  fourthAlbumInner.innerHTML = listItemsFourth.join(" ")
  let secondItemToAnimate = `${shiftedSecond.substring(0, shiftedSecond.length - 2)}`
  fithAlbum.push(secondItemToAnimate + `id="animate-fith" />`)
  animateId = "animate-fith"
  listItemsFith = fithAlbum.map((item) => {
    return `${item}`
  })
  fithAlbumInner.innerHTML = listItemsFith.join(" ")

  let thirdItemToAnimate = `${shiftedThird.substring(0, shiftedThird.length - 2)}`
  sixthAlbum.push(thirdItemToAnimate + `id="animate-sixth" />`)
  animateId = "animate-sixth"
  listItemsOne = firstAlbum.map((item) => {
    return `${item}`
  })
  listItemsSixth = sixthAlbum.map((item) => {
    return `${item}`
  })
  sixthAlbumInner.innerHTML = listItemsSixth.join(" ")

  let fourthItemToAnimate = `${shiftedFourth.substring(0, shiftedFourth.length - 2)}`
  thirdAlbum.push(fourthItemToAnimate + `id="animate-third" />`)
  animateId = "animate-third"
  listItemsOne = firstAlbum.map((item) => {
    return `${item}`
  })
  firstAlbumInner.innerHTML = listItemsOne.join(" ")
  listItemsThird = thirdAlbum.map((item) => {
    return `${item}`
  })
  thirdAlbumInner.innerHTML = listItemsThird.join(" ")
  let fifthItemToAnimate = `${shiftedFifth.substring(0, shiftedFifth.length - 2)}`
  secondAlbum.push(fifthItemToAnimate + `id="animate-second" />`)
  animateId = "animate-second"
  listItemsOne = firstAlbum.map((item) => {
    return `${item}`
  })
  listItemsTwo = secondAlbum.map((item) => {
    return `${item}`
  })
  secondAlbumInner.innerHTML = listItemsTwo.join(" ")

  let sixthItemToAnimate = `${shiftedSixth.substring(0, shiftedSixth.length - 2)}`

  firstAlbum.push(sixthItemToAnimate + `id="animate-second" />`)
  animateId = "animate-third"
  listItemsOne = firstAlbum.map((item) => {
    return `${item}`
  })
  let listItemsfirst = firstAlbum.map((item) => {
    return `${item}`
  })
  firstAlbumInner.innerHTML = listItemsfirst.join(" ")
  // myMove(animateId)

}

const albumOtherHandle = () => {
  let popedFirst = firstAlbum.pop()
  let popedSecond = secondAlbum.pop()
  let popedThird = thirdAlbum.pop()
  let popedFourth = fourthAlbum.pop()
  let popedFifth = fithAlbum.pop()
  let popedSixth = sixthAlbum.pop()
  let itemNum = secondAlbum.length
  if (itemNum >= 6) {
    firstAlbum.unshift(popedFirst)
    firstAlbum.unshift(popedSecond)
    firstAlbum.unshift(popedThird)
    firstAlbum.unshift(popedFourth)
    firstAlbum.unshift(popedFifth)
    firstAlbum.unshift(popedSixth)
    listItemsSecond = secondAlbum.map((item) => {
      return `${item}`
    })
    secondAlbumInner.innerHTML = listItemsSecond.join(" ")

    listItemsOne = firstAlbum.map((item) => {
      return `${item}`
    })
    firstAlbumInner.innerHTML = listItemsOne.join(" ")

    listItemsThird = thirdAlbum.map((item) => {
      return `${item}`
    })
    thirdAlbumInner.innerHTML = listItemsThird.join(" ")

    listItemsFourth = fourthAlbum.map((item) => {
      return `${item}`
    })
    fourthAlbumInner.innerHTML = listItemsFourth.join(" ")

    listItemsFifth = fithAlbum.map((item) => {
      return `${item}`
    })
    fithAlbumInner.innerHTML = listItemsFifth.join(" ")

    listItemsSixth = sixthAlbum.map((item) => {
      return `${item}`
    })
    sixthAlbumInner.innerHTML = listItemsSixth.join(" ")

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

  function step(timestamp) {
    var progress, x, y;
    if (start === null) {
      start = timestamp;

      stretchFactor = 1 + (Math.random() * 3);
    }
    progress = (timestamp - start) / duration / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

    ball.style.left = maxX / 2 + (gridSize * x) + "px";
    ball.style.bottom = maxY / 2 + (gridSize * y) + "px";

    if (progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

}