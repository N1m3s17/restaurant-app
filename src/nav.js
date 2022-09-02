const navFunction = () => {
    const mainDiv = document.querySelector('#content');
    const navDiv = document.createElement('div');
    navDiv.className = "nav";
    const navList = document.createElement('ul');
    navDiv.append(navList);

    //list item one
    const listOne = document.createElement('li');
    const linkOne = document.createElement('a');
    linkOne.setAttribute('href', '');
    listOne.className = 'home';
    linkOne.textContent = 'Home';
    listOne.append(linkOne);
    navList.append(listOne);

     //list item two
     const listTwo = document.createElement('li');
     const linkTwo = document.createElement('a');
     linkTwo.setAttribute('href', '');
     listTwo.className = 'menu';
     linkTwo.textContent = 'Menu';
     listTwo.append(linkTwo);
     navList.append(listTwo);

      //list item three
    const listThree = document.createElement('li');
    const linkThree = document.createElement('a');
    linkThree.setAttribute('href', '');
    listThree.className = 'contact';
    linkThree.textContent = 'Contact';
    listThree.append(linkThree);
    navList.append(listThree);


    mainDiv.append(navDiv);
}

export {navFunction};
