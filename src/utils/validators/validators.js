

export const requiredField = (value) => {
    if (value) return undefined
    return 'Filed is required'
    
}

export const maxLenghtCreator =(maxlength) => (value)=> {
    
    if (value.length> maxlength) return `Max lenght is ${maxlength} symbols`
    return undefined
}
