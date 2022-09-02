const homeFunction = () => {

    const mainDiv = document.querySelector('#content');
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'body-div';
    bodyDiv.textContent = 'Home';
    mainDiv.append(bodyDiv);
}

export {homeFunction};