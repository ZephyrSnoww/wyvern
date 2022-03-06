import Particles from "react-tsparticles";
import "./Homepage.css";

function Homepage(props) {
    return (
        <div className="homepage-container">
                <Particles
                    id="tsparticles"
                    className="particles"
                    options={{
                        "autoPlay": true,
                        "background": {
                            "color": {
                                "value": "#000000"
                            },
                            "image": "",
                            "position": "",
                            "repeat": "",
                            "size": "",
                            "opacity": 1
                        },
                        "backgroundMask": {
                            "composite": "destination-out",
                            "cover": {
                                "color": {
                                    "value": "#fff"
                                },
                                "opacity": 1
                            },
                            "enable": false
                        },
                        "fullScreen": {
                            "enable": true,
                            "zIndex": 1
                        },
                        "detectRetina": true,
                        "duration": 0,
                        "fpsLimit": 120,
                        "interactivity": {
                            "detectsOn": "window",
                            "events": {
                                "onClick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "onDiv": {
                                    "selectors": [],
                                    "enable": false,
                                    "mode": [],
                                    "type": "circle"
                                },
                                "onHover": {
                                    "enable": true,
                                    "mode": "grab",
                                    "parallax": {
                                        "enable": true,
                                        "force": 10,
                                        "smooth": 10
                                    }
                                },
                                "resize": true
                            },
                            "modes": {
                                "attract": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "easing": "ease-out-quad",
                                    "factor": 1,
                                    "maxSpeed": 50,
                                    "speed": 1
                                },
                                "bounce": {
                                    "distance": 1
                                },
                                "bubble": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "mix": false
                                },
                                "connect": {
                                    "distance": 150,
                                    "links": {
                                        "opacity": 0.5
                                    },
                                    "radius": 100
                                },
                                "grab": {
                                    "distance": 150,
                                    "links": {
                                        "blink": false,
                                        "consent": false,
                                        "opacity": 1
                                    }
                                },
                                "light": {
                                    "area": {
                                        "gradient": {
                                            "start": {
                                                "value": "#ffffff"
                                            },
                                            "stop": {
                                                "value": "#000000"
                                            }
                                        },
                                        "radius": 1000
                                    },
                                    "shadow": {
                                        "color": {
                                            "value": "#000000"
                                        },
                                        "length": 2000
                                    }
                                },
                                "push": {
                                    "default": true,
                                    "groups": [],
                                    "quantity": 4
                                },
                                "remove": {
                                    "quantity": 2
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad"
                                },
                                "slow": {
                                    "factor": 3,
                                    "radius": 200
                                },
                                "trail": {
                                    "delay": 1,
                                    "pauseOnStop": false,
                                    "quantity": 1
                                }
                            }
                        },
                        "manualParticles": [],
                        "motion": {
                            "disable": false,
                            "reduce": {
                                "factor": 4,
                                "value": true
                            }
                        },
                        "particles": {
                            "bounce": {
                                "horizontal": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                },
                                "vertical": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                }
                            },
                            "collisions": {
                                "bounce": {
                                    "horizontal": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    },
                                    "vertical": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    }
                                },
                                "enable": false,
                                "mode": "bounce",
                                "overlap": {
                                    "enable": true,
                                    "retries": 0
                                }
                            },
                            "color": {
                                "value": "#841562",
                                "animation": {
                                    "h": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 1,
                                        "speed": 50,
                                        "sync": false
                                    },
                                    "s": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "sync": true
                                    },
                                    "l": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "sync": true
                                    }
                                }
                            },
                            "destroy": {
                                "mode": "none",
                                "split": {
                                    "count": 1,
                                    "factor": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 3
                                    },
                                    "rate": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": {
                                            "min": 4,
                                            "max": 9
                                        }
                                    },
                                    "sizeOffset": true
                                }
                            },
                            "gradient": [],
                            "groups": {},
                            "life": {
                                "count": 0,
                                "delay": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0,
                                    "sync": false
                                },
                                "duration": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.0001
                                    },
                                    "value": 0,
                                    "sync": false
                                }
                            },
                            "links": {
                                "blink": false,
                                "color": {
                                    "value": "#841562"
                                },
                                "consent": false,
                                "distance": 100,
                                "enable": false,
                                "frequency": 1,
                                "opacity": 0.4,
                                "shadow": {
                                    "blur": 5,
                                    "color": {
                                        "value": "#00ff00"
                                    },
                                    "enable": false
                                },
                                "triangles": {
                                    "enable": false,
                                    "frequency": 1
                                },
                                "width": 1,
                                "warp": false
                            },
                            "move": {
                                "angle": {
                                    "offset": 0,
                                    "value": 90
                                },
                                "attract": {
                                    "distance": 200,
                                    "enable": false,
                                    "rotate": {
                                        "x": 3000,
                                        "y": 3000
                                    }
                                },
                                "decay": 0,
                                "distance": {},
                                "direction": "none",
                                "drift": 0,
                                "enable": true,
                                "gravity": {
                                    "acceleration": 9.81,
                                    "enable": true,
                                    "inverse": true,
                                    "maxSpeed": 7
                                },
                                "path": {
                                    "clamp": true,
                                    "delay": {
                                        "random": {
                                            "enable": true,
                                            "minimumValue": 0
                                        },
                                        "value": 0
                                    },
                                    "enable": false,
                                    "options": {}
                                },
                                "outModes": {
                                    "default": "out",
                                    "bottom": "out",
                                    "left": "out",
                                    "right": "out",
                                    "top": "out"
                                },
                                "random": true,
                                "size": false,
                                "speed": 6,
                                "spin": {
                                    "acceleration": 1,
                                    "enable": false
                                },
                                "straight": false,
                                "trail": {
                                    "enable": true,
                                    "length": 5,
                                    "fillColor": {
                                        "value": "#000000"
                                    }
                                },
                                "vibrate": false,
                                "warp": false
                            },
                            "number": {
                                "density": {
                                    "enable": true,
                                    "area": 800,
                                    "factor": 1000
                                },
                                "limit": 0,
                                "value": 150
                            },
                            "opacity": {
                                "random": {
                                    "enable": true,
                                    "minimumValue": 0.1
                                },
                                "value": 0.5,
                                "animation": {
                                    "count": 10,
                                    "enable": true,
                                    "speed": 2,
                                    "sync": false,
                                    "destroy": "none",
                                    "startValue": "random"
                                }
                            },
                            "orbit": {
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 1,
                                    "sync": false
                                },
                                "enable": false,
                                "opacity": 1,
                                "rotation": {
                                    "random": {
                                        "enable": true,
                                        "minimumValue": 0
                                    },
                                    "value": 45
                                },
                                "width": 1
                            },
                            "reduceDuplicates": false,
                            "repulse": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "enabled": false,
                                "distance": 1,
                                "duration": 1,
                                "factor": 1,
                                "speed": 1
                            },
                            "roll": {
                                "darken": {
                                    "enable": true,
                                    "value": 6
                                },
                                "enable": false,
                                "enlighten": {
                                    "enable": true,
                                    "value": 5
                                },
                                "mode": "vertical",
                                "speed": 25
                            },
                            "rotate": {
                                "random": {
                                    "enable": true,
                                    "minimumValue": 100
                                },
                                "value": 100,
                                "animation": {
                                    "enable": true,
                                    "speed": 100,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "path": true
                            },
                            "shadow": {
                                "blur": 0,
                                "color": {
                                    "value": "#000000"
                                },
                                "enable": false,
                                "offset": {
                                    "x": 0,
                                    "y": 0
                                }
                            },
                            "shape": {
                                "options": {},
                                "type": "circle"
                            },
                            "size": {
                                "random": {
                                    "enable": true,
                                    "minimumValue": 1
                                },
                                "value": {
                                    "min": 0.1,
                                    "max": 3
                                },
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 5,
                                    "sync": false,
                                    "destroy": "none",
                                    "startValue": "random"
                                }
                            },
                            "stroke": {
                                "width": 0
                            },
                            "tilt": {
                                "random": {
                                    "enable": true,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "animation": {
                                    "enable": true,
                                    "speed": 10,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "enable": true
                            },
                            "twinkle": {
                                "lines": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                },
                                "particles": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                }
                            },
                            "wobble": {
                                "distance": 50,
                                "enable": true,
                                "speed": 10
                            },
                            "zIndex": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "opacityRate": 1,
                                "sizeRate": 1,
                                "velocityRate": 1
                            }
                        },
                        "pauseOnBlur": true,
                        "pauseOnOutsideViewport": true,
                        "responsive": [],
                        "style": {},
                        "themes": [],
                        "zLayers": 100
                    }}
                />
            <div className="homepage-content-container">
                <div className="homepage-titlebar">
                    <img className="homepage-titlebar-logo" src="/logo.png" alt="Wyvern Logo Text" />
                    <div className="homepage-titlebar-items">
                        <div className="homepage-titlebar-item">Home</div>
                        <div className="homepage-titlebar-item">About</div>
                        <div className="homepage-titlebar-item">Log In</div>
                    </div>
                </div>
                <div className="homepage-content">
                    <div className="homepage-section homepage-header">
                        <img className="homepage-header-image" src="/logo-image.png" alt="Wyvern Logo" />
                        <img className="homepage-header-text" src="/logo.png" alt="Wyvern Logo Text" />
                    </div>
                    <div className="homepage-section-break" />
                    <div className="homepage-section">
                        <div className="homepage-section-header">
                            {">What Wyvern is"}
                        </div>
                        <div className="homepage-section-text">
                            Wyvern is a chat client built on the <a href="https://matrix.org">Matrix</a> backend. It's a hobby project made by <a href="https://sophie-snow.carrd.co">Sophie Snow</a>, and is really just a reason to make something that looks cool.<br />Also just because every other chat app is kind of annoying.
                        </div>
                    </div>
                    {/* <div className="homepage-section-break" />
                    <div className="homepage-section">
                        <div className="homepage-section-header"></div>
                        <div className="homepage-section-text"></div>
                    </div>
                    <div className="homepage-section-break" />
                    <div className="homepage-section">
                        <div className="homepage-section-header"></div>
                        <div className="homepage-section-text"></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
