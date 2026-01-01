/* =========================================
   ANIMASI DAUN JATUH
   ========================================= */
const leavesContainer = document.getElementById('falling-leaves');
const leafCount = 30; // Jumlah daun

const leafClass = "fa-leaf"; 

function createLeaf() {
    const leaf = document.createElement('i');
    leaf.classList.add('fas', leafClass, 'leaf');
    
    // Posisi Random
    const startLeft = Math.random() * 100;
    leaf.style.left = startLeft + '%';
    
    // Ukuran Random
    const size = Math.random() * 20 + 10 + 'px'; 
    leaf.style.fontSize = size;
    
    // Kecepatan Random
    const fallDuration = Math.random() * 5 + 5 + 's';
    leaf.style.animationDuration = fallDuration;
    
    // Delay Random
    leaf.style.animationDelay = Math.random() * 5 + 's';

    // Warna Random (Transparan Hijau)
    const opacity = Math.random() * 0.5 + 0.3; 
    leaf.style.color = `rgba(74, 222, 128, ${opacity})`;

    leavesContainer.appendChild(leaf);
}

// Buat Daun
for (let i = 0; i < leafCount; i++) {
    createLeaf();
}

console.log("Forest Theme Loaded: Static & Falling Leaves 🍃");