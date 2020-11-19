document.addEventListener('DOMContentLoaded', function() {

    const scroll=document.querySelector('#scroll');
    const like=document.querySelectorAll('.fa-heart');


    // SCROLL
    scroll.addEventListener('click',function (e) {
        e.preventDefault();
        console.log(document.querySelector('#scrollTo').value);
        document.querySelector('#scrollTo').scrollIntoView({behavior: "smooth"});
    })

    window.onscroll = function() {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 300) {
            document.getElementById('scroll').style.display = 'flex';
        } else {
            document.getElementById('scroll').style.display = 'none';
        }
    }

    //VALIDATE
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const INPUT = document.getElementById('email');
    function validateEmail(value) {
        return EMAIL_REGEXP.test(value);
    }
    function updateInput() {
        if (validateEmail(INPUT.value))
            INPUT.style.borderColor = 'green';
        else INPUT.style.borderColor = 'red';
    }
    INPUT.addEventListener('input', updateInput);


    //NOTIFICATIONS
    like.forEach(function (element){element.addEventListener('click',function (e) {
        e.preventDefault();
        if (element.style.opacity!=="1"){
            element.style.opacity="1";
            swal("Мы рады!", "Вы добавили котика в избранное.", "success");
        }
        else {
            element.style.opacity=".5";
            swal("Нам грустно!", "Вы удалили котика из избранного.", "error");        }

    })})

    //SORT
    let el=document.querySelector('#price');
    el.onclick=function (){
        if (el.getAttribute("data-flag")=="false"){
            mySort("data-price");
            el.dataset.flag = "false";
            console.log(el.dataset.flag);
        }
        else{
            mySortDesc("data-price");
            el.dataset.flag = "true";
            console.log(el.dataset.flag);
        }
    }

    let em=document.querySelector('#age');
    em.onclick=function (){
        if (em.getAttribute("data-flag")=="false"){
            mySort("data-age");
            em.dataset.flag = "false";
            console.log(em.dataset.flag);
        }
        else{
            mySortDesc("data-age");
            em.dataset.flag = "true";
            console.log(em.dataset.flag);
        }
    }

    function mySort(sortType){
        let nav = document.querySelector(".cards");
        for (let i=0;i<nav.children.length; i++){
            for (let j=i;j<nav.children.length; j++){
                if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)){
                    replaceNode = nav.replaceChild(nav.children[j],nav.children[i]);
                    insertAfter(replaceNode,nav.children[i]);
                }
            }
        }
    }

    function mySortDesc(sortType){
        let nav = document.querySelector(".cards");
        for (let i=0;i<nav.children.length; i++){
            for (let j=i;j<nav.children.length; j++){
                if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)){
                    replaceNode = nav.replaceChild(nav.children[j],nav.children[i]);
                    insertAfter(replaceNode,nav.children[i]);
                }
            }
        }
    }

    function insertAfter(elem,refElem){
        return refElem.parentNode.insertBefore(elem,refElem.nextSibling);
    }



}); // end ready
