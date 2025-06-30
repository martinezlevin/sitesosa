const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

let confetis = [];
let alto = 20;
let ancho = 10;
let conteoConfeti = 300;
let frame = 0;

canvas.width = cw;
canvas.height = ch;

class Confeti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = this.colores();
    this.angulo = Math.random() * 360;
    this.vy = Math.floor(Math.random() * 5) + 1;
    this.girar = Math.random() < 0.5 ? -1 : 1;
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angulo * Math.PI) / 360 * this.girar);
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, alto, ancho);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    this.angulo += 10;
    this.y += this.vy;

    // Reinicia cuando sale de pantalla
    if (this.y > ch) {
      this.x = Math.floor(Math.random() * (cw - alto));
      this.y = 0;
      this.vy = Math.floor(Math.random() * 5) + 1;
    }
  }

  colores() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b})`;
  }
}

function update() {
  // Generar nuevos confetis si no se alcanzó el límite
  if (confetis.length < conteoConfeti) {
    const x = Math.floor(Math.random() * (cw - alto));
    const confeti = new Confeti(x, -50);
    confeti.draw();
    confetis.push(confeti);
  }

  ctx.clearRect(0, 0, cw, ch);

  confetis.forEach(confeti => confeti.draw());

  requestAnimationFrame(update);
  frame++;
}

update();

// Redimensionar canvas si cambia el tamaño de la ventana
window.addEventListener("resize", () => {
  cw = window.innerWidth;
  ch = window.innerHeight;
  canvas.width = cw;
  canvas.height = ch;
});
