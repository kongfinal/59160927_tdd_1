function greet(name){
    if(name === null){
        return "Hello, my friend."
    }
    else if(typeof(name) ==="object"){
        if(name.length === 2){
            return `Hello, ${name[0]} and ${name[1]}.`
        }else{
           var text = "Hello, ";
            for (i=0; i< name.length ; i++){
                if(name[i] == name[i].toUpperCase()){
                    var tempText = name[i]
                    name.splice(i, 1)
                    for (j=0; j< name.length ; j++){
                        if(j!= name.length -1 ){
                            text = `${text}${name[j]} and `
                        }else{
                            text = `${text}${name[j]}. `
                        }
                    }
                    text = `${text}AND HELLO ${tempText}!`
                    return text
                }
            }       
            const lastname = name[name.length-1];
            delete name[name.length-1];
            const nameAll = name.join(", ");
            return `Hello, ${nameAll}and ${lastname}.`

        
        }
    }
    else if(name===name.toUpperCase()){
        return `HELLO ${name}!`
    }
    return `Hello, ${name}.`; 
}

module.exports = greet;