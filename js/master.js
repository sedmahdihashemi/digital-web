let img1 = document.getElementById('img1')
let fig1 = document.getElementById('fig1')
let menu = document.getElementById('menu')
let nav = document.getElementsByTagName('nav')[1]
let _close = document.getElementById('close')
let bgred = document.getElementById('bgred')
let _about = document.getElementById('_about')
let flag1 = 0
console.log(nav);


fig1.addEventListener('mouseenter', () => {

    img1.style.transform = 'translateY(-40px)'
    img1.style.transition = '1s'


})
fig1.addEventListener('mouseleave', () => {
    img1.style.transform = 'translateY(0px)'

})


menu.addEventListener('click', () => {




    nav.style.transform = 'translateY(0px)'
    _close.style.display = 'flex'
    menu.style.display = 'none'

})
_close.addEventListener('click', () => {

    nav.style.transform = 'translateY(-500px)'
    _close.style.display = 'none'
    menu.style.display = 'flex'

})
let desk = document.getElementById('desk')
let deskY = window.scrollY
let sw = bgred.clientWidth
console.log(sw);

// console.log(deskY);
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    let st = window.scrollY
    //  console.log(st);
    let photos = document.querySelector('#photos')
    // console.log(st);
    // console.log(sw);
    // console.log(photos.scrollLeft);


    if (st >= 1880 && st <= 2200 && sw >= 1260 && sw <= 1283) {
        // console.log('ok');

        bgred.style.backgroundColor = '#ff3c00'
        _about.style.color = 'white'
        bgred.style.position = 'fixed'
        // photos.style.position = 'absolute'
        bgred.style.bottom = -50 + 'px'
        // photos.style.bottom = -300 + 'px'
        // photos.style.left = 0 + 'px'
        // photos.style.bottom = 10 + 'px'

        // photos.style.left =  -1000 + 'px'
        if (st >= 1880 && st <= 1920) {
            photos.style.transform = 'translateX(-600px)'
        } else{
            photos.style.transform = 'translateX(0px)'
        }
         if (st > 1920 && st <= 2100) {
            photos.style.transform = 'translateX(-800px)'

        } else if (st > 2100) {
            photos.style.transform = 'translateX(-2160px)'


        }else{
            photos.style.transform = 'translateX(0px)'
        }
    } else {
        bgred.style.backgroundColor = '#f3f0e7'
        _about.style.color = '#ff3c00'
        // photos.style.transform = 'translateX(0px)'
        // bgred.style.bottom = 150 + 'px'
        bgred.style.position = 'static'
        photos.style.position = 'static'
       
        photos.style.transition = '4s'


    }
})


let figs = document.querySelectorAll('#photos>figure>img')
console.log(figs);
let x = 0
let y = 0
let flag2 = true
let wid = photos.clientWidth
// console.log(wid);
if(wid >= 3000 && wid <= 3160){
    // alert('ok')
    figs.forEach((items, i)=>{
        console.log(i);
        figs[i].addEventListener('mousemove', (e) => {
            x = ((e.offsetX) / 50) - 5
            y = ((e.offsetY) / -50) - 5
        
            //    console.log(x);
            e.target.style.position = 'absolute'
            e.target.style.zIndex = 5
    
            e.target.style.left = x + 'px'
            e.target.style.top = y + 'px'
            e.target.style.scale = 1.008
    
        
        })
    
        figs[i].addEventListener('mouseleave', (e) => {
        
            e.target.style.position = 'static'
            e.target.style.left = 0 + 'px'
            // e.target.style.transition = 1 + 's'
            e.target.style.top = 0 + 'px'
        
        })
    
    })
    
}
    // alert('ok')


    let mhd = document.getElementById('para')
    let _mos = document.getElementById('mos')
    let _class = _mos.getAttribute('class')
    mhd.addEventListener('mousemove',(e)=>{
        let x3 = e.clientX
        let y3 = e.offsetY
        console.log(y3);
        console.log(x3);
        _mos.style.left =  x3 + 'px'
        _mos.style.top = y3 + 'px'
        _mos.style.scale = 2
        _mos.style.opacity = 1
      
        
        mhd.setAttribute('class' , 'w-[2000%] relative my-24   flex flex-nowrap flex-shrink-0 overflow-hidden transform translate-x-[-20px] translate-y-[-8px] *:w-auto cursor-none   pt-4')
        

    })
    mhd.addEventListener('mouseleave',(e)=>{
       
        _mos.style.left =  0 + 'px'
        _mos.style.top = 0 + 'px'
        _mos.style.scale = 2
        _mos.style.opacity = 0
        mhd.style.transition = 3 + 's'
        
        mhd.setAttribute('class' , 'w-[2000%] relative my-24  animate-wiggle flex flex-nowrap flex-shrink-0 overflow-hidden *:w-auto transform translate-x-[-20px] translate-y-[-8px] cursor-none  pt-4')
        

    })
    _mos.addEventListener('click',()=>{
        // alert('ok')
        window.location.href = 'https://sedmahdihashemi.github.io/pesonalorg/'
    })


    // let _link = document.querySelector('._link')
    // mhd.addEventListener('mousedown',()=>{
    //     _link.innerHTML = `
    //     <a href="https://sedmahdihashemi.github.io/pesonalorg/" class="_link my-5 mx-5 text-blue-400 text-5xl">@mahdi-hashemi</a>
        
    //     `

    // })
    // mhd.addEventListener('mouseup',()=>{
    //     _link.innerHTML = `
    //     <a href="https://sedmahdihashemi.github.io/pesonalorg/" class="_link my-5 mx-5 text-blue-400 text-5xl">@mahdi-hashemi</a>
        
    //     `

    // })
        






