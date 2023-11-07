Shery.imageEffect(".back", {
    style: 5,
    gooey: true,
    // debug: true,
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9532044154556782},
    "gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.04,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":0.99,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},
    "scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},
    "onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.12,"range":[0,2]},
    "discard_threshold":{"value":0.5,"range":[0,1]},
    "antialias_threshold":{"value":0,"range":[0,0.1]},
    "noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});


let elems = document.querySelectorAll('.elem');

elems.forEach(function(elem){
   let h1s = elem.querySelectorAll('h1');
    let index = 0;
    let animation = false;

document.querySelector(".main").addEventListener("click", function(){
    if(!animation){
        animation = true;
        gsap.to(h1s[index], {
            top: "-=100%",
            duration: 1,
            ease: Expo.easeInOut,
            onComplete: function(){
               gsap.set(this._targets[0], {
                top: '100%'
               });
               animation = false;
            },
        });
    

    index === h1s.length-1 ? (index = 0) : index++;

    gsap.to(h1s[index], {
        top: "-=100%",
        duration: 1,
        ease: Expo.easeInOut,
    });
}
});
});
