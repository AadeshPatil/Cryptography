var scene = new THREE.Scene();

let container = document.getElementById('container'), 
    loader = new THREE.TextureLoader(), 
    renderer, 
    camera, 
    maxParticles = 5000, 
    particlesDelay = 3, 
    radius = 50, 
    sphereGeometry, 
    sphere;

loader.crossOrigin = true;

function init() {

    let vw = window.innerWidth, 
        vh = window.innerHeight;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(vw, vh);
    renderer.setPixelRatio(window.devicePixelRatio);

    camera = new THREE.PerspectiveCamera(45, vw / vh, 1, 1000);
    camera.position.z = 94;
    camera.position.x = 30;
    camera.position.y = 30;
    camera.lookAt(scene.position);
    scene.add(camera);

    // let axisHelper = new THREE.AxisHelper(50);
    // scene.add(axisHelper);

    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onResize, false);

}

function onResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);    

}

function draw() {

    sphereGeometry = new THREE.Geometry();
    sphereGeometry.dynamic = true;

    let material = new THREE.PointsMaterial({
            color: 0xffffff, 
            size: 1, 
            transparent: true, 
            blending: THREE.AdditiveBlending, 
            depthWrite: false
        });

        for ( let i = 0; i < maxParticles; i++ ) {

            let vertex = new THREE.Vector3(radius, 0, 0);
            vertex.rotationAxis = new THREE.Vector3(0, Math.random() * 2 - 1, Math.random() * 2 - 1);
            vertex.rotationAxis.normalize();
            vertex.delay = Date.now() + (particlesDelay * i);
            sphereGeometry.vertices.push(vertex);
        }

        sphere = new THREE.Points(sphereGeometry, material);
  console.log(sphere)
        scene.add(sphere);

}

function update() {

    for ( let i = 0; i < maxParticles; i++ ) {

        let particle = sphereGeometry.vertices[i];

        if ( Date.now() > particle.delay ) {
            particle.applyAxisAngle(particle.rotationAxis, 0.01);
        }
}

    sphere.geometry.verticesNeedUpdate = true;

}

function render() {
    update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);

}

init();
draw();
render();