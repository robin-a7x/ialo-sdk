;(function(global) {
    
    var iAlo = function(divName) {
        return new iAlo.init(divName);   
    }
    
    iAlo.prototype = {
        
        showPrayerTime: function() {
            var divName = this.divName;

            //content div creation
            var contentDiv = document.createElement('div');
            var bodyElem = document.getElementsByTagName('body')[0];
            bodyElem.insertBefore(contentDiv, bodyElem.firstChild);  
            contentDiv.setAttribute('id', 'content');

            //load iFrame
            document.getElementById("content").innerHTML="<button id = 'x' style='opacity: 0; position: absolute; z-index: 999;left: 60.3%;top: 15%;border-radius: 13px;font-weight: bold;'>X</button><iframe allowtransparency='true' frameborder='0' src='interface.html' style='width: 100%; height: 100%; margin: 0; padding: 0; border: none; position: absolute; z-index: 1;'></iframe>";
            document.getElementById("content").style.display = "none";

            //iframe visible on button click
            document.getElementById(divName).onclick = function(){

                var x = document.getElementById("content");
                x.style.display = "block";

            };

            //reload on close button click
            document.getElementById("x").onclick = function(){
                location.reload();
            };

            //close icon fade in
            var opacity = 0;
            var intervalID = 0;
            window.onload = fadeIn;
    
            function fadeIn() {
                setInterval(show, 200);
            }
    
            function show() {
                var body = document.getElementById("x");
                opacity = Number(window.getComputedStyle(body)
                                .getPropertyValue("opacity"));
                if (opacity < 1) {
                    opacity = opacity + 0.1;
                    body.style.opacity = opacity
                } else {
                    clearInterval(intervalID);
                }
            }
            
            return; 
        },

        showRamadanTime: function() {
            return;
        }
        
    };
    
    iAlo.init = function(divName) {
        
        var self = this;
        self.divName = divName || '';
        
    }
    
    iAlo.init.prototype = iAlo.prototype;
    
    global.iAlo = iAlo;
    
}(window));