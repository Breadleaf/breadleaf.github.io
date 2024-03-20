document.addEventListener('DOMContentLoaded', () => {
	const contentContainer = document.getElementById('content');

	// read the posts.json file and create a new post for each entry
	fetch('./posts.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// for each key in the data object, create a new post
			Object.keys(data).forEach(key => {
				const title = key;
				const tags = data[key].tags; // array
				const date = data[key].date;
				const postContent = data[key].content;

				console.log(title, tags, date, postContent);

				const post = document.createElement('div');
				const postTitle = document.createElement('h2');
				const postTags = document.createElement('p');
				const postDate = document.createElement('p');
				const postContentDiv = document.createElement('div');

				postTitle.textContent = title;
				postTags.textContent = tags.join(', ');
				postDate.textContent = date;
				postContentDiv.innerHTML = postContent;

				postTags.id = 'tags';

				post.appendChild(postTitle);
				post.appendChild(postTags);
				post.appendChild(postDate);
				post.appendChild(postContentDiv);

				post.id = title;


				contentContainer.appendChild(post);
			});
		});
});
