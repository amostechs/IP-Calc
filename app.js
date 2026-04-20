import { calculateSubnet } from './subnet.js';
import { calculateVLSM } from './vlsm.js';
import { toggleTheme } from './ui.js';
import { generateQuiz } from './quiz.js';

// Tabs logic
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Calculator
document.getElementById('calcBtn').onclick = () => {
  const ip = document.getElementById('ip').value;
  const cidr = document.getElementById('cidr').value;
  document.getElementById('result').innerHTML = calculateSubnet(ip, cidr);
};

// VLSM
document.getElementById('vlsmBtn').onclick = () => {
  const base = document.getElementById('vlsmBase').value;
  const hosts = document.getElementById('hosts').value;
  document.getElementById('vlsmResult').innerHTML = calculateVLSM(base, hosts);
};

// Quiz
document.getElementById('quizBtn').onclick = () => {
  document.getElementById('quiz').innerHTML = generateQuiz();
};

// Theme
document.getElementById('themeToggle').onclick = toggleTheme;
