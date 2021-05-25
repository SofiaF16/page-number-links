//Get the collection of all 'li' elements
let listAll = document.querySelectorAll('li');
//convert a collection of DOM elements into an array
let listArray = Array.from(listAll);
//declaration of variable to keep track of the current page 
let currentPage = 0;
//calculate the amount of pages needed and keep it as a variable
let pages = Math.ceil(listAll.length/10);

//A function to divide the array into needed amount of small arrays
function divideArray(arr, val) {
    let finalArray = [];

    for(let i=0; i<arr.length; i += val){
        finalArray.push(arr.slice(i, val + i));
    }

    return finalArray;
} 

    

function changePage(targetPage){
    let pageView = document.querySelector('.contact-list');
    //hide all contacts
    pageView.innerHTML = '';
    finalArray = divideArray(listArray, 10);

    let currentPageItems = finalArray[targetPage];
    //add only the needed contacts
    for (let listItem of currentPageItems) {
        pageView.appendChild(listItem);
    }
}

for (let i = 0; i < pages; i++) {
    // create a button for each page
    let newButton = document.createElement('button');
    newButton.innerText = i + 1;


    //add a click event to change the page when the button is clicked
    newButton.onclick  = (e) => {
        //varibale to keep the index of each page (equale to the array's indexes)
        let pageIndex = parseInt(e.target.innerText) - 1;
        changePage(pageIndex);
    }
    //add the buttons
    document.querySelector('.pagination').appendChild(newButton)
}

//call the function (the first page with index 0);
changePage(0);
