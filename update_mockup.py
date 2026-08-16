import re

with open('src/components/home/HomeProducts.tsx', 'r') as f:
    content = f.read()

with open('/Users/marcel/.gemini/antigravity-ide/brain/babb9f58-c39a-463d-b082-2d7e6389f0c6/scratch/InteractiveWebsiteMockup.tsx', 'r') as f:
    scratch_content = f.read()

match = re.search(r'export function InteractiveWebsiteMockup\(\) \{.*?\n\}', scratch_content, re.DOTALL)
new_function = match.group(0).replace('export function', 'function')

old_match = re.search(r'function InteractiveWebsiteMockup\(\) \{.*?\n\}\n\nfunction renderVisual', content, re.DOTALL)
old_function = old_match.group(0).replace('\n\nfunction renderVisual', '')

new_content = content.replace(old_function, new_function)

with open('src/components/home/HomeProducts.tsx', 'w') as f:
    f.write(new_content)

print("Replacement successful")
