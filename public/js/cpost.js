//create post and redirect to dashboard when complete
const createPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#create-post-title").value.trim();
    const content = document.querySelector("#create-post-content").value.trim();
  
    if (title && content) {
      const response = await fetch("/api/posts/", {
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
  //event listener
  document
    .querySelector("#create-post-btn")
    .addEventListener("click", createPost);