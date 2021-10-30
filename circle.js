export class Circle {
    constructor( stageWidth, stageHeight, radius, speed )
    {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = radius + (Math.random() * stageWidth - diameter);
        this.y = radius + (Math.random() * stageHeight - diameter);
    }

    draw( ctx, stageWidth, stageHeight)
    {
        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStle = '#000000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}