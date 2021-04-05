import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Particles from "react-particles-js";
import {Fade} from "react-awesome-reveal";

const Main = () => {

    const particlesOpt: any = {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 180,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 10
                }
            }
        },
        "retina_detect": true
    }

    return (
        <div className={style.mainBlock}>

            <Particles className={style.particles} params={particlesOpt}/>
            <Fade damping={0} direction={'up'} fraction={1} triggerOnce={true}>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am <br/>
                            Yauheni Auchynnikau</h1>
                        <p>A Frontend Developer</p>
                    </div>
                    <div className={style.photo}></div>
                </div>
            </Fade>
        </div>
    )
}
export default Main