
window.addEventListener("load", () => {
    let imagelist = document.getElementsByClassName('right__image');
    let search = document.querySelector('.right__search');
    let input = document.querySelector('.right__input');
    let button = document.querySelector('.right__button');
    let line = document.getElementsByClassName('right__line');
    let previous = document.querySelector('.right__arrow-previous');
    let next = document.querySelector('.right__arrow-next');
    let down = document.querySelector('.left__arrow');
    let content = document.querySelector('.right__content');
    let menu = document.querySelector('.left__list');
    let menubtnl = document.querySelector('.left__menu');
    let menubtnr = document.querySelector('.right__menu');
    let count = 0

    let text = ['<span>The Singer 1 - Williams DLS Goodwood</span> is the ultimate carbon fiber vision of a 1990 Porsche 964 made by restorers at <span>Singer Vehicle Design</span>, partnering with the racing firm <span>Williams Advanced Engineering</span>.',
            '<span>The Singer 2 - Williams DLS Goodwood</span> is the ultimate carbon fiber vision of a 1990 Porsche 964 made by restorers at <span>Singer Vehicle Design</span>, partnering with the racing firm <span>Williams Advanced Engineering</span>.',
            '<span>The Singer 3 - Williams DLS Goodwood</span> is the ultimate carbon fiber vision of a 1990 Porsche 964 made by restorers at <span>Singer Vehicle Design</span>, partnering with the racing firm <span>Williams Advanced Engineering</span>.',
            '<span>The Singer 4 - Williams DLS Goodwood</span> is the ultimate carbon fiber vision of a 1990 Porsche 964 made by restorers at <span>Singer Vehicle Design</span>, partnering with the racing firm <span>Williams Advanced Engineering</span>.',
            '<span>The Singer 5 - Williams DLS Goodwood</span> is the ultimate carbon fiber vision of a 1990 Porsche 964 made by restorers at <span>Singer Vehicle Design</span>, partnering with the racing firm <span>Williams Advanced Engineering</span>.',
            '<span>The Singer 6 - Williams DLS Goodwood</span> is the ultimate carbon fiber vision of a 1990 Porsche 964 made by restorers at <span>Singer Vehicle Design</span>, partnering with the racing firm <span>Williams Advanced Engineering</span>.']

    search.onclick = function(){
        input.classList.toggle('visible');
    }

    button.onclick = function(){
        this.classList.toggle('unvisible');
        text[count] += ' <span> Williams Advanced Engineering</span>!'
        content.innerHTML = text[count];
        button.setAttribute("disabled", "disabled");
    }

    next.onclick = function(){
        if(count < text.length - 1){
            count++
            content.innerHTML = text[count];
            if(text[count][text[count].length-1] == '!'){
                button.classList.add('unvisible');
            }else{
                button.classList.remove('unvisible');
                button.removeAttribute("disabled", "disabled");
            }
        }
        addline()
    }

    previous.onclick = function(){
        if(count > 0){
            count--;
            content.innerHTML = text[count];
            if(text[count][text[count].length-1] == '!'){
                button.classList.add('unvisible');
            }else{
                button.classList.remove('unvisible');
                button.removeAttribute("disabled", "disabled");
            }
        }
        addline()
    }

    down.onclick = function(){
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    function addline(){
        line[count].classList.add('right__lineorange')
        if(count){line[count - 1].classList.remove('right__lineorange')}
        if(count < text.length - 1){line[count + 1].classList.remove('right__lineorange')}
    }

    menubtnl.onclick = function(){
        menu.classList.toggle('visible');
    }

    menubtnr.onclick = function(){
        menu.classList.toggle('visible');
    }

    for(let i = 0; i < imagelist.length; i++) {
        imagelist[i].style.backgroundImage = `url(img/${imagelist[i].classList[1]}.png)`
    };

});