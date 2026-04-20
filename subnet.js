export function calculateSubnet(ip, cidr) {
  try {
    const ipToInt = ip => ip.split('.').reduce((a,o)=>(a<<8)+ +o,0)>>>0;
    const intToIp = int => [(int>>>24),(int>>16&255),(int>>8&255),(int&255)].join('.');

    cidr = parseInt(cidr);
    const mask = (~0 << (32-cidr))>>>0;
    const ipInt = ipToInt(ip);

    const net = ipInt & mask;
    const broad = net | (~mask>>>0);

    const total = 2**(32-cidr);
    const usable = total > 2 ? total - 2 : 0;

    return `
      Network: ${intToIp(net)}<br>
      Broadcast: ${intToIp(broad)}<br>
      Subnet Mask: ${intToIp(mask)}<br>
      Total Hosts: ${total}<br>
      Usable Hosts: ${usable}
    `;
  } catch {
    return "Invalid input";
  }
}

