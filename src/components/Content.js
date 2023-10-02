//application to display the Content


function Content(){
    // Application to display text and time on app
    return(
        <div>
              <h1>Hello World</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )


}
export default Content;