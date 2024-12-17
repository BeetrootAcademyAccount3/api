const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

const updatePostEndpoint = `${postsEndpoint}/1`;

fetch(postsEndpoint)
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));

const body = {
  title: "New value",
};

fetch(updatePostEndpoint, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
})
  .then((response) => {
    return response.json(body);
  })
  .then((data) => console.log(data));
