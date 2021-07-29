const http = new easyHTTP();

//create post and data to send
//data
const data = {
  title: "Custom Post",
  body: "This is Julie's custom post.",
};

//new post
http.post(
  "https://jsonplaceholder.typicode.com/posts",
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);
