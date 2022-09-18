var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Common = Matter.Common,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Vertices = Matter.Vertices,
    Svg = Matter.Svg;

var engine = Engine.create(),
    world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
    }
});


/* MOUSE */
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

render.mouse = mouse;

Engine.run(engine);
Render.run(render);


/* Função Resize*/

var ground, sky, leftWall, rightWall;
var ellipse, rect1, rect2, rect3, rect4;

window.addEventListener('resize', () => {
    render.bounds.max.x = window.innerWidth;
    render.bounds.max.y = window.innerHeight;
    render.options.width = window.innerWidth;
    render.options.height = window.innerHeight;
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;

    removeAll();
    createAll();
});

function removeAll() {
    Matter.World.remove(world, [ground, sky, leftWall, rightWall,
    ellipse, rect1, rect2, rect3, rect4]);
}

createAll();

function createAll() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var r = null;

    if (vw > vh) {
        r = vh * 0.3;
    } else {
        r = vw * 0.25;
    }

    // ------------------------- //
    // Barriers
    // ------------------------- //

    ground = Bodies.rectangle(vw / 2, vh + 30, vw, 60, {
        fillStyle: 'transparent',
        isStatic: true,
    });
    sky = Bodies.rectangle(vw / 2, -30, vw, 60, {
        fillStyle: 'transparent',
        isStatic: true,
    });
    leftWall = Bodies.rectangle(-30, vh / 2, 60, vh, {
        fillStyle: 'transparent',
        isStatic: true,
    });
    rightWall = Bodies.rectangle(vw + 30, vh / 2, 60, vh, {
        fillStyle: 'transparent',
        isStatic: true,
    });

    // ------------------------- //
    // Logo
    // ------------------------- //

    var x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    var y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    ellipse = Bodies.circle(x, y, r, {
        render: {
            fillStyle: '#D15C33',
            sprite: {
                texture: '../data/home/bola_text.png',
                xScale: r / 500 * 2,
                yScale: r / 500 * 2
            }
        }
    });

    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect1 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect2 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect3 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });
    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect4 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    Composite.add(world, [
        ground, leftWall, rightWall, sky,
        ellipse, rect1, rect2, rect3, rect4
    ]);
}

setInterval(function (){
    if(ellipse.position.y<0) {
        Matter.World.remove(world, ellipse);
        createEllipse();
    }
    if(rect1.position.y<0) {
        Matter.World.remove(world, rect1);
        createRect1();
    }
    if(rect2.position.y<0) {
        Matter.World.remove(world, rect2);
        createRect2();
    }
    if(rect3.position.y<0) {
        Matter.World.remove(world, rect3);
        createRect3();
    }
    if(rect4.position.y<0) {
        Matter.World.remove(world, rect4);
        createRect4();
    }
},2500)

function createEllipse() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var r = null;

    if (vw > vh) {
        r = vh * 0.3;
    } else {
        r = vw * 0.25;
    }

    var x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    var y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    ellipse = Bodies.circle(x, y, r, {
        render: {
            fillStyle: '#D15C33',
            sprite: {
                texture: '../data/home/bola_text.png',
                xScale: r / 500 * 2,
                yScale: r / 500 * 2
            }
        }
    });

    Composite.add(world, ellipse);
}
function createRect1() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var r = null;

    if (vw > vh) {
        r = vh * 0.3;
    } else {
        r = vw * 0.25;
    }


    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect1 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    Composite.add(world, rect1);
}function createRect2() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var r = null;

    if (vw > vh) {
        r = vh * 0.3;
    } else {
        r = vw * 0.25;
    }


    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect2 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    Composite.add(world, rect2);
}function createRect3() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var r = null;

    if (vw > vh) {
        r = vh * 0.3;
    } else {
        r = vw * 0.25;
    }


    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect3 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    Composite.add(world, rect3);
}function createRect4() {
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var r = null;

    if (vw > vh) {
        r = vh * 0.3;
    } else {
        r = vw * 0.25;
    }


    x = Math.min(Math.max(Math.random() * vw, r), vw - r);
    y = Math.min(Math.max(Math.random() * vh, r), vh - r);

    rect4 = Bodies.rectangle(x, y, r * 2, r * 2 / 5, {
        render: {
            fillStyle: '#D15C33',
        }
    });

    Composite.add(world, rect4);
}