/*
function Cat({ name }) {
  return <h1>The cat`s name is {name}</h1>
}
ReactDOM.render(<Cat name="Jungle" />, document.getElementById("root"));
*/

/*
function Cat({ name }) {
  return <h1>The cat`s name is {name}</h1>
	<p>He`s good</p>
}
ReactDOM.render(<Cat name="Jungle" />, document.getElementById("root"));
*/

/*
function Cat({ name }) {
  return (
    <React.Fragment>
      <h1>The cat`s name is {name}</h1>
      <p>He`s good.</p>
    </React.Fragment>
  );
}
*/

function Cat({ name }) {
  return (
    <>
      <h1>The cat`s name is {name}</h1>
      <p>He`s good.</p>
    </>
  );
}
ReactDOM.render(<Cat name="Jungle" />, 
document.getElementById("root"));
