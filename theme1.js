// 1. Tip Generator logic
const tips = [
    "Protein is vital for muscle repair.",
    "Stay hydrated: 3-4 Liters per day.",
    "Consistency beats intensity every time.",
    "Don't skip leg day!",
    "Sleep 8 hours for maximum recovery."
];

function newTip() {
    const el = document.getElementById('healthTip');
    if(el) el.innerText = `"${tips[Math.floor(Math.random()*tips.length)]}"`;
}

// 2. BMI Calculation (Functional)
function calcBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value / 100;
    const out = document.getElementById('bmiOut');
    
    if(w > 0 && h > 0) {
        const bmi = (w / (h * h)).toFixed(1);
        out.classList.remove('hidden');
        document.getElementById('bmiVal').innerText = bmi;
        
        let label = document.getElementById('bmiLabel');
        if(bmi < 18.5) { label.innerText = "UNDERWEIGHT"; label.style.color = "#fbbf24"; }
        else if(bmi < 25) { label.innerText = "HEALTHY STATUS"; label.style.color = "#22c55e"; }
        else { label.innerText = "OVERWEIGHT"; label.style.color = "#ef4444"; }
    } else {
        alert("Please enter Weight and Height!");
    }
}

// 3. Activity Tracker (Functional)
let count = 0;
function addAct() {
    const input = document.getElementById('actIn');
    const list = document.getElementById('actList');
    
    if(input.value.trim() !== "") {
        count++;
        const div = document.createElement('div');
        div.className = "flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-xl mb-3";
        div.innerHTML = `
            <span class="text-cyan-400 font-mono text-sm">> ${input.value}</span>
            <button onclick="this.parentElement.remove(); count--; updateCount();" class="text-red-500 hover:text-white transition">✕</button>
        `;
        list.prepend(div);
        input.value = "";
        updateCount();
    }
}

function updateCount() {
    document.getElementById('taskCount').innerText = `${count} LOGGED`;
}

// 4. V1.0 LIVE Button Functionality (Bonus)
// Isse button click karne par page wapas top par smoothly jayega
document.querySelector('.glow-btn').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    newTip(); // Naya tip bhi generate ho jayega
};

// Start
window.onload = newTip;

