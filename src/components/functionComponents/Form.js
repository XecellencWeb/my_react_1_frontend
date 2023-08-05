

export const data = {
    fullName:'',
    userName:'',
    email:'',
    password:''
}

const ErrorArray = []

export const vallidateAll = (length,button)=>{
    if(ErrorArray.length<length) return 
    
        button.disabled = false

}




export const togglePassword = (element)=>{
if(element.type === 'password'){
    element.type = 'text' 
    return false
}
else {
    element.type = 'password'
    return true
}
}
export const setData = ({value,what,regexp,message,errElement})=>{

    let valid = false
    

    if(value === undefined || regexp === undefined || message === undefined) return
    const text = value.value
    if(text.match(regexp) != null)  valid = true

    if(!valid) return errElement.textContent = message
    errElement.textContent = ''
    
    data[what] = text
    console.log(data)

    value.onblur = ()=>{
        console.log('This Element is blured')
        return   ErrorArray.push(true)
    }

    

}

