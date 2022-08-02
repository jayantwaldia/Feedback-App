function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 0, text: "1st comment" },
    { id: 1, text: "2nd comment" },
    { id: 2, text: "3rd comment" },
    { id: 3, text: "4th comment" },
  ];
  return (
    <div className="App">
      <h1>{title.toUpperCase()}</h1>
      <h2>{body}</h2>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
