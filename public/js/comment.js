const addCommentButton = document.querySelector(".add-comment-btn");
const commentDisplaySection = document.getElementsByClassName(
  ".display-comment-section"
);
const sendCommentSection = document.querySelector(".send-comment-section");
const sendCommentBtn = document.querySelector(".send-comment-btn");
const commentContent = document.querySelector(".comment-content");

const addComment = async (event) => {
  addCommentButton.classList.add("hidden");
  if(commentDisplaySection.length > 0){
  commentDisplaySection.classList.add("hidden");
  }
  sendCommentSection.classList.remove("hidden");
};

const sendComment = async (event) => {
  event.preventDefault();
  const content = commentContent.value.trim();
  const post_id = sendCommentBtn.getAttribute("data-post-id");
  console.log(content, post_id);
  if (content) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({post_id, content}),
      headers: { "Content-Type": "application/json"}
    });
    if(response.ok){
        document.location.replace(`/post/${post_id}`)
    } else{
        alert(response.statusText);
    }
  }
};

addCommentButton.addEventListener("click", addComment);

sendCommentBtn.addEventListener("click", sendComment);
