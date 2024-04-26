const isValidAuth = () => {
    return !!Cookies.get('coonect.sid')
}

export default isValidAuth