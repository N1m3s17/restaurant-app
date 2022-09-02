const menuFunction = () => {
    
    const mainDiv = document.querySelector('#content');
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'body-div';
    bodyDiv.textContent = 'Menu';
    mainDiv.append(bodyDiv);
}

export {menuFunction};