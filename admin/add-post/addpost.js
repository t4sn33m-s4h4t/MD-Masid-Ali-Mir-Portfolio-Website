const form = document.getElementById('add-post-form');
const serverURL = window.config.serverUrl

form.addEventListener('submit',async (e) =>  {
	e.preventDefault();

	const title = document.getElementById('title').value;
	const category = document.getElementById('category').value;
	const content = document.getElementById('content').value;
	const file = document.getElementById('fileInput').files[0];
	
	const fileExtension = (file.name).split(".").pop();
		
	const fileName = title+'.'+fileExtension
	
	if (file) {
		const data =new FormData();
		data.append("name", fileName);
		data.append("file", file);
		
		try {
		  await fetch(`${serverURL}/api/upload`,
		  {
			method: 'POST',
			body: data,
		  });
		} catch (err) {console.error(err)}
	  }
	  
	const post = {
		title: title,
		category: category,
		content: content,
		image: fileName
	};
	  

	fetch(`${serverURL}/api/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	})
	.then(response => response.json())
	.then(data => {
		alert('Post added successfully!');
		window.location.href = 'index.html';
	})
	.catch(error => {
		console.error('Error:', error);
	})})