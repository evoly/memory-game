export const createFireworks = (canvas) => {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let running = true;
    let launchTimeout;

    const colors = ['#ff4d6d', '#ffd166', '#06d6a0', '#4cc9f0', '#c77dff', '#fff'];

    const resize = () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const explode = (x, y) => {
        const count = 60 + Math.floor(Math.random() * 40);
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                decay: 0.012 + Math.random() * 0.02,
                color,
                size: Math.random() * 2 + 1,
            });
        }
    };

    const scheduleLaunch = () => {
        if (!running) return;
        const x = canvas.width * (0.15 + Math.random() * 0.7);
        const y = canvas.height * (0.15 + Math.random() * 0.5);
        explode(x, y);
        launchTimeout = setTimeout(scheduleLaunch, 400 + Math.random() * 600);
    };

    const tick = () => {
        if (!running) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'lighter';

        particles = particles.filter(p => p.life > 0);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.98;
            p.vy *= 0.98;
            p.vy += 0.03;          // gravity
            p.life -= p.decay;

            ctx.globalAlpha = Math.max(p.life, 0);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        animationId = requestAnimationFrame(tick);
    };

    // opening bursts
    setTimeout(() => explode(canvas.width * 0.3, canvas.height * 0.35), 100);
    setTimeout(() => explode(canvas.width * 0.7, canvas.height * 0.4), 350);
    scheduleLaunch();
    tick();

    return () => {
        running = false;
        cancelAnimationFrame(animationId);
        clearTimeout(launchTimeout);
        window.removeEventListener('resize', resize);
    };
};