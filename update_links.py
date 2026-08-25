import os
import re

files_to_check = [
    "src/pages/MissedCallProduct.tsx",
    "src/pages/WebsiteProduct.tsx",
    "src/pages/Product.tsx",
    "src/pages/Pricing.tsx",
    "src/components/About.tsx",
    "src/components/CTA.tsx",
    "src/components/Hero.tsx",
    "src/components/Navbar.tsx",
    "src/components/home/HomeCTA.tsx"
]

cal_link = "https://cal.com/marcel-izadpanah-fa6ual/demo-call"

for file in files_to_check:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()

    # Regex to find <Link to="/contact" ... > ... Book ... </Link>
    # and replace with <a href="cal_link" target="_blank" rel="noopener noreferrer" ... > ... Book ... </a>
    
    # Let's do a more generic replacement. 
    # Any <Link to="/contact" ... that contains the word "Book" inside its body.
    
    # Find all Link components
    pattern = re.compile(r'<Link\s+to="/contact"(.*?)>(.*?)</Link>', re.DOTALL)
    
    def replacer(match):
        attrs = match.group(1)
        inner_html = match.group(2)
        if "Book" in inner_html or "BOOK" in inner_html:
            return f'<a href="{cal_link}" target="_blank" rel="noopener noreferrer"{attrs}>{inner_html}</a>'
        return match.group(0)

    new_content = pattern.sub(replacer, content)
    
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")

