function typedEffect(){if($(".typed").length>0){console.log("do TypeEffect 2");var e=$(".typed").data("typed-items");e=e.split(","),new Typed(".typed",{strings:e,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}}