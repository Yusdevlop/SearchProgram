const inputId = document.querySelector("#inputid");
const searchBtn =document.querySelector("#searchbtn");
const clearBtn = document.querySelector("#clearbtn");
const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const buttonWrapper= document.querySelector(".button-wrapper");
const imageWrapper= document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit" , goster);
    clearBtn.addEventListener("click",clear);
}

function clear(){
    inputId.value="";
    imageWrapper.innerHTML="";
}



function goster(e){
    
    const value = inputId.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID vggfm0cYRm1bTmH0V4WuWAuGk7ANg7s1uRFpuMmbgQE"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=>console.log(err));



    e.preventDefault();
 }


function addImageToUI(url){
    const div =document.createElement("div")
    div.className="card";


    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.width='300'
    img.height='300'

    div.append(img)
    imageWrapper.append(div)

}

