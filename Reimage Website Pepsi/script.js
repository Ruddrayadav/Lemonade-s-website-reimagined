var ttl = gsap.timeline()

ttl.from("nav h2",{
    opacity:0,
    y:-14,
    duration:0.2,
})

ttl.from(".nav-ctrl p",{
    opacity:0,
    y:-14,
    stagger:0.2,
})

ttl.from(".main i ",{
    opacity:0,
    y:-14,
})


var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
}
})

tl.to(".fanta",{
    top:"114%",
    left:"9%",
    ease: "power1.inOut",
},"orango")

tl.to(".orange-cut",{
    top:"148%",
    left:"24%",
    ease: "power1.inOut",
},"orango")

tl.to(".orange",{
top:"160%",
width:"20%",
right:"4%",
ease: "power1.inOut",
},"orango")

tl.to(".leaf", {
  top:"101%",
  left:"82.1%",
  duration: 0.5, 
  rotate:185,
  ease: "power1.inOut",
},"orango");

tl.to(".leaf2", {
  rotate: 90, 
  duration: 0.5, 
  ease: "power1.inOut",
},"orango");

var tl3 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
}
})
tl3.from(".slicelemon",{
    rotate:-90,
    left:"-140%",
    top:"100%",
    
},"apol")
tl3.from(".apple",{
    rotate:360,
    right:"-140%",
    top:"100%",
},"apol")

tl3.from(".sprite",{
     rotate:-90,
    left:"-340%",
    top:"100%",
},"apol")

tl3.from(".lipton",{
     rotate:90,
    right:"-340%",
    top:"100%",
},"apol")

tl3.to(".fanta",{
    top:"220%",
    left:"38%",
    width:"24%"
},)

tl3.to(".orange-cut",{
    top:"212%",
    left:"39%",
    width:"21%"
},)


var string = document.querySelector(".string");

string.addEventListener("mousemove", function (e) {
  // Get mouse position relative to the SVG
  var rect = string.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;

  // Update the path with new control point
  var path = `M 10 100 Q ${x} ${y} 490 100`;

  gsap.to("svg path", {
    attr: { d: path },
    ease: "power3.out",
    duration: 0.3
  });
});

string.addEventListener("mouseleave", function () {
  // Reset the path to original position
  var path = `M 10 100 Q 250 100 490 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)"
  });
});
string.addEventListener("mouseleave",function(){
    finalPath = `M 10 100 Q 250 100 490 100`

    gsap.to("svg path",{
        attr: {d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
})