const deleteLinks = document.querySelectorAll(".delete-post");

deleteLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const postId = link.getAttribute("data-post-id");
    if (confirm("Are you sure you want to delete this post?")) {
      fetch(`/posts/${postId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            window.location.href = "/dashboard";
          } else {
            alert("Failed to delete post.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to delete post.");
        });
    }
  });
});
