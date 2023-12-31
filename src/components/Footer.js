import "./FooterStyles.css"


const Footer =()=>{
    return (
        
        <div className="footer">
            <div className="top">
                <div>
                    <h1>RoomSync</h1>
                    <p>Choose your favourite services.</p>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/adminlogin">Admin-Login</a>
                    <a href="/login">Login</a>
                    
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/accommodation">Accommodations</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/contact">Contact</a>
                    
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/about">Privacy Policy</a>
                    <a href="/adminlogin">License</a>
                    
                </div>
            </div>
         </div>   
            
    )}
        

export default Footer