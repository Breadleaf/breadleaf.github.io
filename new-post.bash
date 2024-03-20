#!/bin/bash
filename=$(date +"%Y-%m-%d_%H:%M.md")
timestamp=$(date +"%Y-%m-%d %H:%M")
echo "Creating new post: ./posts/$filename"
title="---\ntitle: \"\"\ndate: \"$timestamp\"\ntags: []\n---\n\n<!--USE <br> TO SEPERATE PARAGRAPHS-->\n"
echo -e $title > ./posts/$filename
echo "NOTE: to seperate paragraphs use <br> tag"
