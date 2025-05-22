class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json'
      // Add 'Authorization': 'Bearer YOUR_TOKEN' here if needed
    };
  }

  // GET request to fetch data
  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) throw new Error(`GET failed: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('GET error:', error);
      throw error;
    }
  }

  // POST request to create a new resource
  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error(`POST failed: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('POST error:', error);
      throw error;
    }
  }

  // PUT request to update a resource
  async put(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error(`PUT failed: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('PUT error:', error);
      throw error;
    }
  }

  // DELETE request to remove a resource
  async delete(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error(`DELETE failed: ${response.status}`);
      return true; // Or you can return a message/status
    } catch (error) {
      console.error('DELETE error:', error);
      throw error;
    }
  }
}

// how to use class

// const api = new ApiService('https://jsonplaceholder.typicode.com');

// // Example: GET posts
// api.get('/posts')
//   .then(data => console.log('Posts:', data))
//   .catch(err => console.error(err));

// // Example: POST new post
// api.post('/posts', {
//   title: 'New post',
//   body: 'This is the post body.',
//   userId: 1
// }).then(data => console.log('Post created:', data));

// // Example: PUT update post
// api.put('/posts/1', {
//   id: 1,
//   title: 'Updated post',
//   body: 'This is the updated content.',
//   userId: 1
// }).then(data => console.log('Post updated:', data));

// // Example: DELETE a post
// api.delete('/posts/1')
//   .then(() => console.log('Post deleted.'));