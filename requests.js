const list = document.getElementById("list");

const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

const updatePostEndpoint = `${postsEndpoint}/1`;

let valueList = [];

const xhr = new XMLHttpRequest();

function sendRequest(method, url, body) {
  xhr.open(method, url);

  const promise = new Promise((resolve, reject) => {
    xhr.onload = () => {
      const resp = JSON.parse(xhr.response);
      const jsonResponse = JSON.stringify(resp);

      resolve(resp);
    };

    xhr.onerror = (error) => {
      reject(error);
    };
  });

  xhr.send(JSON.stringify(body));

  return promise;
}

sendRequest("GET", postsEndpoint).then((items) => {
  valueList = items;

  valueList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.id}.${item.title}`;
    list.append(li);
  });
});

const body = {
  title: "New value",
};

sendRequest("PATCH", updatePostEndpoint, body).then((item) => {
  console.log(item);
});
