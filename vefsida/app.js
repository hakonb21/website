let a = function(){
    alert("babygirl")
}


document.getElementById('sidebar').addEventListener('click',a)

let next_page = function(){
    location.href = "https://www.youtube.com/watch?v=my6IroYcyEI"
}

document.getElementById('vid').addEventListener('click',next_page)

const btn = document.getElementById('sjomli')

btn.onclick = () => {
    alert("Yeaaahboyyy");
}

function sjonni(ar1,arg2){
    if (ar1 > arg2){
        console.log(ar1+" is bigger then "+arg2)
    }else{
        console.log(`${arg2} is bigger then ${ar1}`)
    }
}

sjonni(4,3)

sjonni(2,6)