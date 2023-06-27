//select items in DOM
const addCommentButton = document.querySelector(".add-comment-btn");
const commentDisplaySection = document.getElementsByClassName(
  ".display-comment-section"
);
const sendCommentSection = document.querySelector(".send-comment-section");
const sendCommentBtn = document.querySelector(".send-comment-btn");
const commentContent = document.querySelector(".comment-content");

//add the comment section by manipulating classes
const addCommentSection = async (event) => {
  addCommentButton.classList.add("hidden");
  sendCommentSection.classList.remove("hidden");
};

//send/post the comment and refresh page
const sendComment = async (event) => {
  event.preventDefault();
  const content = commentContent.value.trim();
  const post_id = sendCommentBtn.getAttribute("data-post-id");
  if (content) {
    const response = await fetch("/api/comments", {
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
//event listeners
addCommentButton.addEventListener("click", addCommentSection);
sendCommentBtn.addEventListener("click", sendComment);
