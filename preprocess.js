const fs = require('fs');
const path = require('path');
const marked = require('marked');
const matter = require('gray-matter');

const postsDir = './posts/';
const output = {};

fs.readdirSync(postsDir).forEach(file => {
	if (file === 'template.md') return;

	const fullPath = path.join(postsDir, file);
	const fileContents = fs.readFileSync(fullPath, 'utf-8');

	const { data, content } = matter(fileContents);
	let html = marked.parse(content);

	html = html.replace(
		/\n/g, " "
	);

	/*
	html = html.replace(
		/<h1>/g, "<h1>"
	);
	*/

	const postTitle = data.title;

	output[postTitle] = {
		tags: data.tags || [],
		date: data.date || "",
		content: html
	};
});

fs.writeFileSync(
	"./posts.json",
	JSON.stringify(output, null, 2),
	"utf-8"
);
