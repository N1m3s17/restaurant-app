const contactFunction = () => {
    
    const mainDiv = document.querySelector('#content');
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'body-div';
    bodyDiv.textContent = 'Contact';
    mainDiv.append(bodyDiv);
}

export {contactFunction};