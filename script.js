// --ALBUM1--
const firstAlbum = [
    "https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.2.jpg",
    "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.1.jpg"
    
]
const firstAlbumInner =document.getElementById("album-one");
var listItemsOne = firstAlbum.map((item) =>{
   return <img
    class="img-fluid"
    src={item}
  />
})
firstAlbumInner.innerHTML = listItemsOne

// --ALBUM2--
const secondAlbum = [
    "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.3.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"
]
const secondAlbumInner =document.getElementById("album-two");
var listItemsTwo = secondAlbum.map((item) =>{
   return <img
    class="img-fluid"
    src={item}
  />
})
secondAlbumInner.innerHTML = listItemsTwo

const thirdAlbum = [
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.3.photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.3.photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.3.photo.3.jpg"
]
const thirdAlbumInner =document.getElementById("third-album");
var listItemsThird = thirdAlbum.map((item) =>{
   return <img
    class="img-fluid"
    src={item}
  />
})
thirdAlbumInner.innerHTML = listItemsThird

const fourthAlbum = [
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.4.photo.3.jpg"
]
const fourthAlbumInner =document.getElementById("fourth-album");
var listItemsFourth = fourthAlbum.map((item) =>{
   return <img
    class="img-fluid"
    src={item}
  />
})
fourthAlbumInner.innerHTML = listItemsFourth


const fithAlbum = [
    "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.1.jpg",
    "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.2.jpg",
    "https://dev.websgeek.com/kaorukikuchi.com/images/album.5.photo.3.jpg",
    "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg",
    "https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg",
    "https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"
]
const fithAlbumInner =document.getElementById("fith-album");
var listItemsFith = fithAlbum.map((item) =>{
   return <img
    class="img-fluid"
    src={item}
  />
})
fithAlbumInner.innerHTML = listItemsFith


const sixthAlbum = [
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.6.photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.6.photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/album.6.photo.3.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.1.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.2.jpg"
    , "https://dev.websgeek.com/kaorukikuchi.com/images/photo.3.jpg"
]
const sixthAlbumInner =document.getElementById("sixth-album");
var listItemsSixth = sixthAlbum.map((item) =>{
   return <img
    class="img-fluid"
    src={item}
  />
})
sixthAlbumInner.innerHTML = listItemsSixth

const albumOneHandle = () => {
    let popedOne = firstAlbum.shift()
     let itemNum = firstAlbum.length
     animateId = null
     animateImage =null
    switch (itemNum) {
        case 5:
            fourthAlbum.push(popedOne)
            animateImage =popedOne
            listItemsOne = firstAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             firstAlbumInner.innerHTML = listItemsOne
             listItemsFourth = fourthAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             fourthAlbumInner.innerHTML = listItemsFourth
            
            break;

            case 4:
            fithAlbum.push(popedOne)
            listItemsOne = firstAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             firstAlbumInner.innerHTML = listItemsOne
             listItemsFith = fithAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             fithAlbumInner.innerHTML = listItemsFith
            
            break;

            case 3:
            sixthAlbum.push(popedOne)
            listItemsOne = firstAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             firstAlbumInner.innerHTML = listItemsOne
             listItemsSixth = sixthAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             sixthAlbumInner.innerHTML = listItemsSixth
            
            break;
            case 2:
                thirdAlbum.push(popedOne)
                listItemsOne = firstAlbum.map((item) =>{
                    return <img
                     class="img-fluid"
                     src={item}
                   />
                 })
                 firstAlbumInner.innerHTML = listItemsOne
                 listItemsThird = thirdAlbum.map((item) =>{
                    return <img
                     class="img-fluid"
                     src={item}
                   />
                 })
                 thirdAlbumInner.innerHTML = listItemsThird
                
            
            break;
            case 1:
                secondAlbum.push(popedOne)
                listItemsOne = firstAlbum.map((item) =>{
                    return <img
                     class="img-fluid"
                     src={item}
                   />
                 })
                 firstAlbumInner.innerHTML = listItemsOne
                 listItemsTwo = secondAlbum.map((item) =>{
                    return <img
                     class="img-fluid"
                     src={item}
                   />
                 })
                 secondAlbumInner.innerHTML = listItemsTwo
                
            
            break;
    
        default:
            alert("Remain only one picture")
            break;
    }
    
    myMove(animateImage)
}

const albumSecondHandle = () => {
    let poped = secondAlbum.pop()
     let itemNum = secondAlbum.length
        if(itemNum >= 6){
            firstAlbum.unshift(poped)
            listItemsSecond = secondAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             secondAlbumInner.innerHTML = listItemsSecond
             listItemsOne = firstAlbum.map((item) =>{
                return <img
                 class="img-fluid"
                 src={item}
               />
             })
             firstAlbumInner.innerHTML = listItemsOne
}
            else{
            alert("Not enough")}
    
    

    }

    const albumThirdHandle = () => {
        let poped = thirdAlbum.pop()
         let itemNum = thirdAlbum.length
         console.log(itemNum)
            if(itemNum >= 7){
                firstAlbum.unshift(poped)
                listItemsThird = thirdAlbum.map((item) =>{
                    return <img
                     class="img-fluid"
                     src={item}
                   />
                 })
                 thirdAlbumInner.innerHTML = listItemsThird
                 listItemsOne = firstAlbum.map((item) =>{
                    return <img
                     class="img-fluid"
                     src={item}
                   />
                 })
                 firstAlbumInner.innerHTML = listItemsOne
    }
                else{
                alert("Not enough")}
        
        
    
        }

        const albumFourthHandle = () => {
            let poped = fourthAlbum.pop()
             let itemNum = fourthAlbum.length
             console.log(itemNum)
                if(itemNum >= 7){
                    firstAlbum.unshift(poped)
                    listItemsFourth = fourthAlbum.map((item) =>{
                        return <img
                         class="img-fluid"
                         src={item}
                       />
                     })
                     fourthAlbumInner.innerHTML = listItemsFourth
                     listItemsOne = firstAlbum.map((item) =>{
                        return <img
                         class="img-fluid"
                         src={item}
                       />
                     })
                     firstAlbumInner.innerHTML = listItemsOne.join("")
        }
                    else{
                    alert("Not enough")}
            
            
        
            }

            const albumFithHandle = () => {
                let poped = fithAlbum.pop()
                 let itemNum = fithAlbum.length
                 console.log(itemNum)
                    if(itemNum >= 6){
                        firstAlbum.unshift(poped)
                        listItemsFith = fithAlbum.map((item) =>{
                            return <img
                             class="img-fluid"
                             src={item}
                           />
                         })
                         fithAlbumInner.innerHTML = listItemsFith
                         listItemsOne = firstAlbum.map((item) =>{
                            return <img
                             class="img-fluid"
                             src={item}
                           />
                         })
                         firstAlbumInner.innerHTML = listItemsOne.join("")
            }
                        else{
                        alert("Not enough")}
                
                
            
                }

                const albumSixthHandle = () => {
                    let poped = sixthAlbum.pop()
                     let itemNum = sixthAlbum.length
                     console.log(itemNum)
                        if(itemNum >= 7){
                            firstAlbum.unshift(poped)
                            listItemsSixth = sixthAlbum.map((item) =>{
                                return <img
                                 class="img-fluid"
                                 src={item}
                               />
                             })
                             sixthAlbumInner.innerHTML = listItemsSixth
                             listItemsOne = firstAlbum.map((item) =>{
                                return <img
                                 class="img-fluid"
                                 src={item}
                               />
                             })
                             firstAlbumInner.innerHTML = listItemsOne
                }
                            else{
                            alert("Not enough")}
                    
                    
                
                    }                
function myMove(animateImage) {
    
    
  var field = document.getElementById("field");
  var ball = document.getElementById("ball");

  var maxX = field.clientWidth - ball.offsetWidth;
  var maxY = field.clientHeight - ball.offsetHeight;

  var duration = 4; // seconds
  var gridSize = 200; // pixels

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