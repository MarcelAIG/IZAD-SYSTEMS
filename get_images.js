const industries = [
  "plumber", "roofer", "electrician", "hvac", "landscaper",
  "painter", "handyman", "cleaning service", "kitchen remodel", "general contractor",
  "hardwood flooring", "window installation", "pest control", "locksmith", "garage door repair",
  "swimming pool", "tree service arborist", "moving company boxes", "auto mechanic", "car detailing",
  "dog grooming", "dentist", "medical spa", "physiotherapy", "local business owner"
];

async function getImages() {
  const results = [];
  for (const query of industries) {
    try {
      const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=1`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        // Use the raw url with some formatting params
        results.push(data.results[0].urls.raw + '&auto=format&fit=crop&q=80&w=800');
      } else {
        results.push('https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800');
      }
    } catch (e) {
      console.error("Error fetching", query, e.message);
      results.push('https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800');
    }
    // Small delay to prevent rate limit
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(JSON.stringify(results, null, 2));
}

getImages();
