//create post
const createPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#create-post-title").value.trim();
  const content = document.querySelector("#create-post-content").value.trim();

  if (title && content) {
    const response = await fetch("api/posts/", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

//update post

const updatePost = async (event) => {
    event.preventDefault();
    event.stopPropagation()

    const title = document.querySelector("#create-post-title").value.trim();
    const content = document.querySelector("#create-post-content").value.trim();
    const id = document.querySelector('#update-post').getAttribute('data-post-id')
    
    if (title && content) {
      const response = await fetch(`api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
//delete post buttons
const deletePost = async (event) => {
    event.preventDefault();
    event.stopPropagation()
  
    const id = document.querySelector('#delete-post').getAttribute('data-post-id')
    
    if (title && content) {
      const response = await fetch(`api/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector("#create-post-btn")
  .addEventListener("click", createPost);

document
    .querySelector('#update-post')
    .addEventListener("click", updatePost);

document
  .querySelector('#delete-post')
  .addEventListener("click", deletePost);