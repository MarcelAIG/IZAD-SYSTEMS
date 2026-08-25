import json
import os
import time
import urllib.request
import urllib.parse

industries = [
    ("plumbers", "plumber fixing pipes"),
    ("roofers", "roofer working roof construction"),
    ("electricians", "electrician electrical panel"),
    ("hvac", "hvac technician air conditioning"),
    ("landscapers", "landscaping gardener"),
    ("painters", "house painter painting wall"),
    ("handyman", "handyman tools repair"),
    ("cleaning-companies", "house cleaning service"),
    ("remodelers", "home remodeling construction kitchen"),
    ("general-contractors", "general contractor construction site"),
    ("flooring", "hardwood flooring installation"),
    ("window-door", "window installation house"),
    ("pest-control", "pest control exterminator"),
    ("locksmiths", "locksmith repairing door lock"),
    ("garage-door", "garage door repair modern"),
    ("pool-services", "swimming pool maintenance cleaning"),
    ("tree-services", "tree cutting service arborist"),
    ("moving-companies", "moving company boxes truck"),
    ("auto-repair", "auto mechanic repairing car"),
    ("car-detailing", "car detailing washing polishing"),
    ("dog-groomers", "dog grooming washing"),
    ("dentists", "dentist clinic smile"),
    ("med-spas", "medical spa facial treatment"),
    ("physiotherapy", "physiotherapy physical therapy massage"),
    ("other-local-services", "small business owner local shop")
]

os.makedirs('public/images/industries', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for slug, query in industries:
    encoded_query = urllib.parse.quote(query)
    search_url = f"https://unsplash.com/napi/search/photos?query={encoded_query}&per_page=1&orientation=landscape"
    
    print(f"Fetching {slug}...")
    try:
        req = urllib.request.Request(search_url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            
        if data.get('results') and len(data['results']) > 0:
            img_id = data['results'][0]['id']
            img_url = f"https://images.unsplash.com/photo-{img_id}?w=800&q=80&auto=format&fit=crop"
            
            img_req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(img_req) as img_resp, open(f"public/images/industries/{slug}.jpg", 'wb') as out_file:
                out_file.write(img_resp.read())
            print(f"Downloaded {slug}.jpg")
        else:
            print(f"No results for {slug}")
    except Exception as e:
        print(f"Error for {slug}: {e}")
        
    time.sleep(1)
