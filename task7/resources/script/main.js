const username=document.getElementById('username')
const message=document.getElementById('message')
username.oninput=function(){
    
    if(  (username.value).length<6 )
        {
            username.style.outline='1px solid red'
            username.style.border='0'
            message.innerHTML="<p>most be at least 6 characters</p>"
        }
    else
    {
        username.style.outline='1px solid black' 
         username.style.border='1px'
         message.innerHTML=""
    }    
}
