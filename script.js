// ======== ハッカー文字背景アニメーション ========
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);

// ======== ウィンドウサイズに応じてリサイズ ========
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
  drops = Array(Math.floor(columns)).fill(1);
});

// ======== ロック解除処理 ========
document.getElementById("unlock-btn").addEventListener("click", () => {
  document.getElementById("lock-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
});

// ======== ダーク／ライトモード切り替え ========
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
