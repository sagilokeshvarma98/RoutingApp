let element = document.querySelector('input[type="text"]')
function addText(){
        let res =  document.getElementById('result')    
        let conf = confirm('Dou you want to add?')
        if(conf){
        //   method 1
        //   res.innerHTML+=element.value+'<br>'
        //method 2
        let lastRes = document.createElement('b')   
        lastRes.appendChild(document.createTextNode(element.value))
        res.append(lastRes)
        }
        
        
}