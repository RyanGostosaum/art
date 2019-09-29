

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    const bol = random() >= 0.5

    const color = bol ? 51 : 151

    for (let i = 0; i < 0.1; i++) {
        const maxWidth = windowWidth;
        const maxHeigth = windowHeight;

        let randomWidth = random(maxWidth)
        let randomHeigth = random(maxHeigth)

        fill(color)
        ellipse(randomWidth, randomHeigth, 80, 80);
    }
}
