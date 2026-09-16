const fs = require('fs');
const https = require('https');
const path = require('path');

const industries = [
  { name: "Plumbers", query: "professional plumber fixing sink photography realistic" },
  { name: "Roofers", query: "professional roofer working on roof shingles photography realistic" },
  { name: "Electricians", query: "professional electrician fixing electrical panel photography realistic" },
  { name: "HVAC", query: "professional hvac technician repairing ac unit photography realistic" },
  { name: "Landscapers", query: "professional landscaper mowing lawn garden photography realistic" },
  { name: "Painters", query: "professional painter painting wall with roller photography realistic" },
  { name: "Handyman", query: "professional handyman with tools repairing photography realistic" },
  { name: "Cleaning Companies", query: "professional house cleaner cleaning living room photography realistic" },
  { name: "Remodelers", query: "professional kitchen remodeling contractor photography realistic" },
  { name: "General Contractors", query: "professional general contractor on construction site photography realistic" },
  { name: "Flooring", query: "professional hardwood flooring installation photography realistic" },
  { name: "Window & Door", query: "professional window and door installation photography realistic" },
  { name: "Pest Control", query: "professional pest control exterminator spraying photography realistic" },
  { name: "Locksmiths", query: "professional locksmith fixing door lock photography realistic" },
  { name: "Garage Door", query: "professional garage door repair technician photography realistic" },
  { name: "Pool Services", query: "professional swimming pool cleaning service photography realistic" },
  { name: "Tree Services", query: "professional tree service arborist cutting photography realistic" },
  { name: "Moving Companies", query: "professional movers carrying boxes photography realistic" },
  { name: "Auto Repair", query: "professional auto mechanic repairing car photography realistic" },
  { name: "Car Detailing", query: "professional car detailing washing photography realistic" },
  { name: "Dog Groomers", query: "professional dog groomer washing dog photography realistic" },
  { name: "Dentists", query: "professional dentist examining patient photography realistic" },
  { name: "Med Spas", query: "professional medical spa treatment photography realistic" },
  { name: "Physiotherapy", query: "professional physiotherapist helping patient photography realistic" },
  { name: "Other Local Services", query: "local small business owner smiling photography realistic" }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      } else {
        res.resume();
        reject(new Error(`Status: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

async function run() {
  for (let i = 0; i < industries.length; i++) {
    const ind = industries[i];
    const filename = ind.name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.jpg';
    const filepath = path.join(__dirname, 'public/images/industries', filename);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(ind.query)}?width=800&height=600&nologo=true`;
    console.log(`Downloading ${ind.name}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed ${ind.name}`, e.message);
    }
  }
  console.log("Done");
}
run();
