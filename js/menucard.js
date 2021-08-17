let order = document.querySelectorAll("section .gpcontainer .group .container .menuOrder");

order.forEach( orderNow => {
    orderNow.addEventListener("click" , ()=> {
        console.log(orderNow);
        let container= orderNow.parentElement;
        // console.log(container);
        let menulist = container.children;
        console.log(menulist);
        for(let i=0; i<menulist.length;i++){
            if(menulist[i].className == "menuDish"){
                
            }
            if(menulist[i].className == "menuPrice"){

            }
            if(menulist[i].className == "menuOrder"){

            }
            if(menulist[i].className == "menuPlates"){

            }
        }
        
       
    })
})