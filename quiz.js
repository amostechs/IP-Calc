export function generateQuiz() {
  let ip = "192.168." + Math.floor(Math.random()*255) + ".0";
  let cidr = Math.floor(Math.random()*8) + 24;
  let hosts = 2**(32-cidr) - 2;

  return `
    Question: How many usable hosts in ${ip}/${cidr}?<br>
    Answer: ${hosts}
  `;
}
