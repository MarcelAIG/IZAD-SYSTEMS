const fs = require('fs');
const https = require('https');
const path = require('path');

const industries = [
  { name: "Plumbers", query: "plumber fixing pipes" },
  { name: "Roofers", query: "roofer working roof construction" },
  { name: "Electricians", query: "electrician electrical panel" },
  { name: "HVAC", query: "hvac technician air conditioning" },
  { name: "Landscapers", query: "landscaping gardener" },
  { name: "Painters", query: "house painter painting wall" },
  { name: "Handyman", query: "handyman tools repair" },
  { name: "Cleaning Companies", query: "house cleaning service" },
  { name: "Remodelers", query: "home remodeling construction kitchen" },
  { name: "General Contractors", query: "general contractor construction site" },
  { name: "Flooring", query: "hardwood flooring installation" },
  { name: "Window & Door", query: "window installation house" },
  { name: "Pest Control", query: "pest control exterminator" },
  { name: "Locksmiths", query: "locksmith repairing door lock" },
  { name: "Garage Door", query: "garage door repair modern" },
  { name: "Pool Services", query: "swimming pool maintenance cleaning" },
  { name: "Tree Services", query: "tree cutting service arborist" },
  { name: "Moving Companies", query: "moving company boxes truck" },
  { name: "Auto Repair", query: "auto mechanic repairing car" },
  { name: "Car Detailing", query: "car detailing washing polishing" },
  { name: "Dog Groomers", query: "dog grooming washing" },
  { name: "Dentists", query: "dentist clinic smile" },
  { name: "Med Spas", query: "medical spa facial treatment" },
  { name: "Physiotherapy", physical: "physiotherapy physical therapy massage" },
  { name: "Other Local Services", query: "small business owner local shop" }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
};

const fetchUnsplashImage = (query) => {
  return new Promise((resolve, reject) => {
    const searchUrl = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape`;
    https.get(searchUrl, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            // Get the first result's regular image URL
            resolve(json.results[0].urls.regular);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

async function main() {
  const publicDir = path.join(__dirname, 'public', 'images', 'industries');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const ind of industries) {
    const slug = ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const filename = `${slug}.jpg`;
    const filepath = path.join(publicDir, filename);
    const query = ind.query || ind.physical;
    
    try {
      console.log(`Fetching image for ${ind.name} (query: ${query})...`);
      const imageUrl = await fetchUnsplashImage(query);
      if (imageUrl) {
        // Download it with specific dimensions for optimal size
        const optimizedUrl = `${imageUrl}&w=800&q=80&auto=format&fit=crop`;
        await downloadImage(optimizedUrl, filepath);
        console.log(`Saved ${filename}`);
      } else {
        console.log(`No image found for ${ind.name}`);
      }
    } catch (e) {
      console.error(`Error processing ${ind.name}:`, e.message);
    }
  }
}

main();
