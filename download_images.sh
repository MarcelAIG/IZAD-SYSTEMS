#!/bin/bash
mkdir -p public/images/industries

declare -A queries=(
  ["plumbers"]="plumber fixing pipes"
  ["roofers"]="roofer working roof construction"
  ["electricians"]="electrician electrical panel"
  ["hvac"]="hvac technician air conditioning"
  ["landscapers"]="landscaping gardener"
  ["painters"]="house painter painting wall"
  ["handyman"]="handyman tools repair"
  ["cleaning-companies"]="house cleaning service"
  ["remodelers"]="home remodeling construction kitchen"
  ["general-contractors"]="general contractor construction site"
  ["flooring"]="hardwood flooring installation"
  ["window-door"]="window installation house"
  ["pest-control"]="pest control exterminator"
  ["locksmiths"]="locksmith repairing door lock"
  ["garage-door"]="garage door repair modern"
  ["pool-services"]="swimming pool maintenance cleaning"
  ["tree-services"]="tree cutting service arborist"
  ["moving-companies"]="moving company boxes truck"
  ["auto-repair"]="auto mechanic repairing car"
  ["car-detailing"]="car detailing washing polishing"
  ["dog-groomers"]="dog grooming washing"
  ["dentists"]="dentist clinic smile"
  ["med-spas"]="medical spa facial treatment"
  ["physiotherapy"]="physiotherapy physical therapy massage"
  ["other-local-services"]="small business owner local shop"
)

for slug in "${!queries[@]}"; do
  query="${queries[$slug]}"
  # URL encode the query
  encoded_query=$(echo "$query" | jq -sRr @uri)
  
  echo "Fetching image ID for $slug ($query)..."
  id=$(curl -s -A "Mozilla/5.0" "https://unsplash.com/napi/search/photos?query=${encoded_query}&per_page=1&orientation=landscape" | jq -r '.results[0].id')
  
  if [ "$id" != "null" ] && [ -n "$id" ]; then
    url="https://images.unsplash.com/photo-${id}?w=800&q=80&auto=format&fit=crop"
    echo "Downloading $url to $slug.jpg"
    curl -s -o "public/images/industries/${slug}.jpg" "$url"
  else
    echo "Failed to get ID for $slug"
  fi
  
  # small delay to prevent rate limit
  sleep 1
done
