const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



document.querySelectorAll('.elem').forEach(function(elem){

    let rotate = 0;
    let rotdiff = 0;
 
    elem.addEventListener('mouseleave', function(dets) {
     if (elem.querySelector('img').style.display === 'none') {
       rotdiff = 0;
     }
 
     gsap.to(elem.querySelector('img'), {
       display: 'none',
       opacity: 0,
       duration: 0.5
     });
   });
 
    elem.addEventListener('mousemove',function(dets){
     let diff = dets.clientY - elem.getBoundingClientRect().top;
 
     rotdiff = dets.clientX - rotate;
     rotate = dets.clientX;
 
 
    gsap.to(elem.querySelector('img'),{
              display: 'block',
              opacity: 1,
              ease: Power3,
              top: diff,
              left: dets.clientX,
              rotate : gsap.utils.clamp(-20, 20 , rotdiff)
       });
    });
    
 });



function circleSkew(){
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener('mousemove',function(dets){
    xscale = gsap.utils.clamp(0.8,1.2,dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8,1.2,dets.clientY - yprev);

    xprev = dets.clientX; 
    yprev = dets.clientY; 

    mouseFollower(xscale,yscale);
  });
};


function firstPageAnime(){
    let tl = gsap.timeline();
    
    tl.from('.nav',{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut 
    })
    .to('.boundingelem',{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.4,
        stagger: .2,
        delay: -1
    })
    .from('.footer-heading',{
        y: 10,
        duration: 1.2,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1
    })
    
    
};


function mouseFollower(xscale,yscale){
    window.addEventListener('mousemove',function(dets){
        document.querySelector('.circlem').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
};
mouseFollower();
firstPageAnime();
circleSkew();