

const username = localStorage.getItem("username");
const role = localStorage.getItem("role");


const userName = document.getElementById("userName");
const userRole = document.getElementById("userRole");

if(userName){
    userName.innerHTML = username;
}

if(userRole){
    userRole.innerHTML = role;
}


const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click",function(){

        menuItems.forEach(menu=>{
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});

const viewButtons=document.querySelectorAll(".viewBtn");

viewButtons.forEach(button=>{

    button.addEventListener("click",function(){

        alert("Bug Details not available");

    });

});


const bell=document.querySelector(".fa-bell");

if(bell){

    bell.addEventListener("click",function(){

        alert("No New Notifications");

    });

}