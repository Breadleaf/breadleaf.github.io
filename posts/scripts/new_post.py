import os
import sys
import time
from datetime import datetime

os.environ['TZ'] = 'America/Denver'
time.tzset()

now = datetime.now()
formatted = now.strftime('%d-%m-%Y_%H-%M-%S')
file_name = f"{formatted}.md"

base_dir = os.path.dirname(os.path.realpath(__file__))
posts_dir = os.path.abspath(os.path.join(base_dir, "../markdown"))

if not os.path.exists(posts_dir):
    os.makedirs(posts_dir)

file_path = os.path.join(posts_dir, file_name)

if os.path.exists(file_path):
    print("ERROR: file already exists")
    sys.exit(1)

post_title = input("POST TITLE> ").strip()
post_preview = input("POST PREVIEW> ").strip()

post_title = post_title.replace("\\", "").replace("'", "").replace("\"", "")
post_preview = post_preview.replace("\\", "").replace("'", "").replace("\"", "")

if post_title == "" or post_preview == "":
    print(f"current title: '{post_title}'")
    print(f"current preview: '{post_preview}'")
    print("ERROR: title and/or preview cannot be empty")
    sys.exit(1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write("---\n")
    f.write(f'title: "{post_title}"\n')
    f.write(f'date: "{formatted}"\n')
    f.write(f'preview: "{post_preview}"\n')
    f.write("---\n\n")

print(f"Created new post at {file_path}")