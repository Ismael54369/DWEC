export function getSVG() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;
    
    // Devolvemos un string con un rectángulo SVG
    return `
        <svg width="200" height="100" style="border:1px solid #ccc">
            <rect width="100%" height="100%" fill="${color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">
                Color: ${r},${g},${b}
            </text>
        </svg>
    `;
}