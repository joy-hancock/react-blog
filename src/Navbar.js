const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>Joy's Blog</h1>
            <div className = "links">
                <a href = "/">Home</a>
                {/*Dynamic value around object, then key-value pairs */}
                <a href = "/create" style= {{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
      );
}
 

//Export this root app component and nest it in the App template.//
export default Navbar;