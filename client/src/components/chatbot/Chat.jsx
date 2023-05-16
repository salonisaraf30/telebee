
import React, {Component} from 'react'
// import "./Chat.scss";

export class Chat extends Component{

    componentDidMount(){
       
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"ccf1f2a71530993f703d93a133f12dea","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }
    render(){
        return(
            <div className="container">
                <div className="tagline">
                <h1 className="tag-item">Not sure what to watch</h1>
                <h2 className="tag-item">We'll make it less complicated for you</h2>
            </div>
            </div>
           
        )
    }
}
  
  export default Chat

  