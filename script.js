let btnStart = document.getElementById('btn-start')
btnStart.onclick = function(){
    
    let sectionaboutUs = document.querySelector('.aboutUs')
    sectionaboutUs.scrollIntoView({
            behavior: 'smooth'

        }
    )
    console.log("Good Lucky!!!\n")
}

let count = 0;
let pictures = [
    "images\\circle\\0.jpg",
    "images\\circle\\1.jpg",
    "images\\circle\\2.jpg",
    "images\\circle\\3.jpg",
];

picture = document.getElementById("picture_id");

picture.onclick = function(){

    count++;
    if(count == pictures.length )
    {
            count = 0;
    }
    picture.src = pictures[count];

}
