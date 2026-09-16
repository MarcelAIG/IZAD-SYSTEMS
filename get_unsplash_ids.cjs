const https = require('https');

const industries = [
  "plumber", "roofer", "electrician", "hvac", "landscaper",
  "painter", "handyman", "cleaning-service", "kitchen-remodel", "general-contractor",
  "hardwood-flooring", "window-installation", "pest-control", "locksmith", "garage-door-repair",
  "swimming-pool", "tree-service", "moving-company", "auto-mechanic", "car-detailing",
  "dog-grooming", "dentist", "medical-spa", "physiotherapy", "local-business"
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const results = [];
  for (const query of industries) {
    try {
      const html = await fetchHtml(`https://unsplash.com/s/photos/${query}`);
      const match = html.match(/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/);
      if (match) {
        results.push(`https://${match[0]}?auto=format&fit=crop&q=80&w=800`);
      } else {
        results.push('https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800');
      }
    } catch (e) {
      results.push('https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800');
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
