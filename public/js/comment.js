// add event listener for delete comment button
document.querySelectorAll(".delete-comment").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()
    const commentId = button.getAttribute("data-comment-id");
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentId: commentId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          location.reload();
        } else {
          throw new Error("Failed to delete comment.");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  });
});
