document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('nome_canvas');
    const ctx = canvas.getContext('2d');

    // Desenhar algo no canvas
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Bem-vindo ao Pet Shop!', 50, 50);
});
