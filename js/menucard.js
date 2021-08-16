let order = document.querySelectorAll("section .gpcontainer .group .container .menuOrder");

order.forEach( orderNow => {
    orderNow.addEventListener("click" , ()=> {
        console.log(orderNow);
        let container= orderNow.parentElement;
        console.log(container);
        // console.log(container.children);
        container.forEach()
    })
})