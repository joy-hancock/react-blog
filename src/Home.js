//Homepage content gets its own component, to nest under root component.  Therefore it gets its own file.//

const Home = () => {
  //Function for event handler of button.//
  const handleClick = (e) => {
  console.log("hello, friends", e);
  }

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  }
  return ( 
        //classes being applied for using CSS later.
      <div className="home">
        <h2>Homepage</h2>
        {/*Dynamic event listener with jsx, passing function handleClick
        You can't invoke function immediately, because the values will be passed to the console without clicking.*/}
        <button onClick={handleClick}>Click me</button>
        =
      </div>
     );
}
 
export default Home;