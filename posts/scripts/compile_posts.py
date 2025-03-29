import os
import frontmatter
import markdown
import sys
from datetime import datetime
from zoneinfo import ZoneInfo
from bs4 import BeautifulSoup

base_dir = os.path.dirname(os.path.realpath(__file__))
parent_dir = os.path.abspath(os.path.join(base_dir, ".."))
md_dir = os.path.abspath(os.path.join(base_dir, "../markdown"))
html_dir = os.path.abspath(os.path.join(base_dir, "../html"))
source_map_file = os.path.abspath(os.path.join(parent_dir, "sourceMap.js"))

base_url = "https://breadleaf.github.io"

posts = [
    os.path.join(md_dir, file)
    for file in os.listdir(md_dir)
    if os.path.isfile(os.path.join(md_dir, file))
]

# NOTE: depricated until I feel like adding single file support (doing it breaks rss.xml generation)
# if len(sys.argv) == 2:
#     f = sys.argv[1]
#     if os.path.isfile(f) and os.path.splitext(f)[1] == ".md":
#         posts = [f]
#     else:
#         print(f"'{f}' not a valid file path or did not point to an md file, exiting")
#         sys.exit(1)

post_storage = []
for post_path in posts:
    with open(post_path, "r", encoding="utf-8") as f:
        post_data = frontmatter.load(f)
    meta = post_data.metadata
    body = post_data.content
    html = markdown.markdown(body)

    soup = BeautifulSoup(html, "html.parser")
    for a in soup.find_all("a"):
        classes = a.get("class", [])
        if "open-new" not in classes:
            classes.append("open-new")
        a["class"] = classes
    html = str(soup)

    
    post_storage.append({
        "meta": meta,
        "html": html
    })

sorted_post_storage = sorted(
    post_storage,
    key=lambda post: datetime.strptime(
        post["meta"]["date"],
        "%d-%m-%Y_%H-%M-%S"
    )
)

def create_html_file(date, title, content):
    dt = datetime.strptime(date, "%d-%m-%Y_%H-%M-%S").replace(tzinfo=ZoneInfo("America/Denver"))
    readable_date = dt.strftime("%B %d, %Y %H:%M %Z")
    
    temp_path = os.path.join(base_dir, "template_post.html")
    with open(temp_path, "r", encoding="utf-8") as f:
        template = f.read().split("<!--SPLIT-->")
    output_path = os.path.join(html_dir, date + ".html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(template[0])
        f.write(title)
        f.write(template[1] + "\n")
        f.write(title)
        f.write(template[2] + "\n")
        f.write(readable_date)
        f.write(template[3] + "\n")
        f.write(content)
        f.write(template[4] + "\n")

with open(source_map_file, "w", encoding="utf-8") as f:
    f.write("export default function sourceMap() {\n")
    f.write("\treturn [\n")
    
    for post in reversed(sorted_post_storage):
        create_html_file(post["meta"]["date"], post["meta"]["title"], post["html"])
        
        dt = datetime.strptime(post["meta"]["date"], "%d-%m-%Y_%H-%M-%S").replace(tzinfo=ZoneInfo("America/Denver"))
        readable_date = dt.strftime("%B %d, %Y %H:%M %Z")
        
        f.write("\t[\n")
        f.write("\t\t'{}',\n".format(post["meta"]["title"]))
        f.write("\t\t'{}',\n".format(readable_date))
        f.write("\t\t'{}',\n".format(post["meta"]["preview"]))
        f.write("\t\t'{}',\n".format("posts/html/" + post["meta"]["date"] + ".html"))
        f.write("\t],\n")
    f.write("\t];\n")
    f.write("}\n")

latest_posts = list(reversed(sorted_post_storage))[:10]
rss_items = ""
for post in latest_posts:
    dt = datetime.strptime(post["meta"]["date"], "%d-%m-%Y_%H-%M-%S").replace(tzinfo=ZoneInfo("America/Denver"))
    dt_gmt = dt.astimezone(ZoneInfo("GMT"))
    pub_date = dt_gmt.strftime("%a, %d %b %Y %H:%M:%S GMT")
    post_link = f"{base_url}/posts/html/{post['meta']['date']}.html"
    
    rss_items += "\t<item>\n"
    rss_items += "\t\t<title>{}</title>\n".format(post["meta"]["title"])
    rss_items += "\t\t<link>{}</link>\n".format(post_link)
    rss_items += "\t\t<description>{}</description>\n".format(post["meta"]["preview"])
    rss_items += "\t\t<pubDate>{}</pubDate>\n".format(pub_date)
    rss_items += "\t\t<guid>{}</guid>\n".format(post_link)
    rss_items += "\t</item>\n"

last_build_date = datetime.now(ZoneInfo("GMT")).strftime("%a, %d %b %Y %H:%M:%S GMT")
rss_feed = '<?xml version="1.0" encoding="UTF-8" ?>\n'
rss_feed += '<rss version="2.0">\n'
rss_feed += "\t<channel>\n"
rss_feed += "\t\t<title>My Blog</title>\n"
rss_feed += "\t\t<link>{}</link>\n".format(base_url)
rss_feed += "\t\t<description>Latest posts from my blog</description>\n"
rss_feed += "\t\t<lastBuildDate>{}</lastBuildDate>\n".format(last_build_date)
rss_feed += rss_items
rss_feed += "\t</channel>\n"
rss_feed += "</rss>\n"

rss_file = os.path.join(parent_dir, "rss.xml")
with open(rss_file, "w", encoding="utf-8") as f:
    f.write(rss_feed)