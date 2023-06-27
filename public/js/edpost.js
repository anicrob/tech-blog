//update post and redirect to dashboard

const updatePost = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const title = document.querySelector("#ed-post-title").value.trim();
    const content = document.querySelector("#ed-post-content").value.trim();
    const id = document.querySelector('#update-post').getAttribute('data-post-id')
    
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
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

//delete post and redirect to dashboard
const deletePost = async (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    const id = document.querySelector('#delete-post').getAttribute('data-post-id')
    
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
  };

  //event listeners
document
    .querySelector('#update-post')
    .addEventListener("click", updatePost);

document
  .querySelector('#delete-post')
  .addEventListener("click", deletePost);