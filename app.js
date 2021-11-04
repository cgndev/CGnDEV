// Interactive Developer 채널 스터디

import {
    Circle
} from './circle.js';

class App {
    constructor()
    {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false );
        this.resize();

        this.circle = new Circle(this.stageWidth, this.stageHeight, 200, 15);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize()
    {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio , this.pixelRatio);
    }

    animate(t)
    {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight );

        this.circle.draw(this.ctx, this.stageWidth, this.stageHeight);
    }
}

window.onload = () => {
    new App();
};