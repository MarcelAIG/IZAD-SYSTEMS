from duckduckgo_search import DDGS
import json

industries = [
    "professional plumber working", "professional roofer at work", "professional electrician working", 
    "professional hvac technician", "professional landscaper working", "professional painter painting wall",
    "professional handyman working", "professional house cleaning service", "professional kitchen remodeling", 
    "professional general contractor", "professional hardwood flooring", "professional window installation",
    "professional pest control exterminator", "professional locksmith working", "professional garage door repair", 
    "professional swimming pool cleaning", "professional tree service arborist", "professional movers carrying boxes",
    "professional auto mechanic working", "professional car detailing", "professional dog groomer", 
    "professional dentist working", "professional medical spa treatment", "professional physiotherapist", 
    "local business owner smiling"
]

results = []
with DDGS() as ddgs:
    for query in industries:
        try:
            # Get first image result
            images = list(ddgs.images(query, max_results=1))
            if images and len(images) > 0:
                results.append(images[0]['image'])
            else:
                results.append("https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800")
        except Exception as e:
            results.append("https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800")

print(json.dumps(results, indent=2))
