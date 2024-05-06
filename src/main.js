import './styles/style.css'

import { gsap } from "gsap";
    
import { Draggable } from "gsap/Draggable";

import { InertiaPlugin } from "gsap/InertiaPlugin";


gsap.registerPlugin(Draggable,InertiaPlugin);

//draggable should be something the user can grab and move anywhere using intertia

// STICKER
if (document.querySelector('.sticker')) {
    const stickers = document.querySelectorAll('.sticker');

    function scaleSticker(sticker, scaleValue) {
        gsap.to(sticker, { scale: scaleValue, duration: 0.2 });
    }
    
    stickers.forEach(sticker => {
        Draggable.create(sticker, {
            bounds: ".section_quiz",
            inertia: true,
            onDragStart: function() {
                scaleSticker(this.target, 0.9);
            },
            onDragEnd: function() {
                scaleSticker(this.target, 1);
            }
        });
    
        sticker.addEventListener('mouseenter', function() {
            scaleSticker(this, 1.1);
        });
    
        sticker.addEventListener('mouseleave', function() {
            scaleSticker(this, 1);
        });
    });
    


}