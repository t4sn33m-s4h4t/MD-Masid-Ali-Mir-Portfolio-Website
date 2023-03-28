const form = document.getElementById('add-post-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const content = document.getElementById('content').value;

	const post = {
		title: title,
		author: author,
		content: content
	};

	fetch('http://localhost:5000/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	})
	.then(response => response.json())
	.then(data => {
		alert('Post added successfully!');
		window.location.href = 'admin.html';
	})
	.catch(error => {
		console.error('Error:', error);
