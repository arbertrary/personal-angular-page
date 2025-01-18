// See this stackoverflow answer:
// https://stackoverflow.com/a/57409528
// https://vincentgarreau.com/particles.js/#default

export const ParticlesConfig = {
    fullScreen: {
        enable: true,
        zIndex: 1 // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
    },
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 2000
            }
        },
        color: {
            value: '#773acc'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 2,
                color: '#773acc'
            },
            polygon: {
                nb_sides: 6
            }
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.25,
                sync: true
            }
        },
        size: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 1.25,
                sync: true
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#773acc',
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 2000,
                rotateY: 2000
            }
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: false,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 3
                }
            },
            repulse: {
                distance: 250,
                duration: 2
            },
            bubble: {
                distance: 200,
                size: 20,
                opacity: 0.1
            }
        }
    },
    retina_detect: true
};