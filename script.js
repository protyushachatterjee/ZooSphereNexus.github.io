gsap.from("#main h1",{
    opacity:0,
    duration:2,
    delay:0.4,
    x:-30,
})

gsap.from(".navbar img",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:-30,
})
gsap.from(".navbar a",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:-30,
    stagger:0.3
})
gsap.from("#main #img1",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:30,
})
gsap.from("#main #img2",{
    opacity:0,
    duration:2,
    delay:0.4,
    x:30,
})
gsap.from("#main #img3",{
    opacity:0,
    duration:2,
    delay:0.4,
    y:30,
})

gsap.to("#search .items",{
    transform: "translateX(-80%)",
    scrollTrigger:{
        trigger: "#search",
        scroll:"body",
        start: "top -0%",
        // end: "top -100%",
        scrub: 1,
        pin:true,
    }
})
// gsap.to(".search h2",{
//     transform: "translateX(-50%)",
//     scrollTrigger:{
//         trigger: ".search",
//         scroll:"body",
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 1,
//         pin:true,
//     }
// })


gsap.from("#article h2",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:-30,
    scrollTrigger:{
        trigger: "#article",
        scroll:"body",
        start:"top 50%",
    }
})
gsap.from(".blog1 ",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:30,
    scrollTrigger:{
        trigger: ".blog1 ",
        scroll:"body",
        start:"top 50%",
    }
})
gsap.from(".blog2",{
    opacity:0,
    duration:1,
    x:-30,
    scrollTrigger:{
        trigger: ".blog2",
        scroll:"body",
        start:"top 50%",
    }
})
gsap.from(".blog3",{
    opacity:0,
    duration:1,
 
    x:30,
    scrollTrigger:{
        trigger: ".blog3",
        scroll:"body",
        start:"top 70%",
    }
})
gsap.from(".blog4",{
    opacity:0,
    duration:1,
    x:-30,
    scrollTrigger:{
        trigger: ".blog4",
        scroll:"body",
        start:"top 70%",
    repeat:-1,

    }
})




