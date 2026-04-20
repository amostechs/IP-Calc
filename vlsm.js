export function calculateVLSM(base, hostsStr) {
  const ipToInt = ip => ip.split('.').reduce((a,o)=>(a<<8)+ +o,0)>>>0;
  const intToIp = int => [(int>>>24),(int>>16&255),(int>>8&255),(int&255)].join('.');

  let [ip] = base.split('/');
  let current = ipToInt(ip);

  const hosts = hostsStr.split(',').map(x=>parseInt(x.trim())).sort((a,b)=>b-a);

  let output = '';

  hosts.forEach(h => {
    let needed = Math.ceil(Math.log2(h+2));
    let size = 32-needed;

    let net = current;
    let broad = net + (2**needed)-1;

    output += `Subnet ${h} hosts:<br>
    ${intToIp(net)}/${size}<br>
    Broadcast: ${intToIp(broad)}<br><br>`;

    current = broad + 1;
  });

  return output;
}


