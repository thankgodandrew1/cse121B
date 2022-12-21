const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://unsplash.com/photos/7Bmk9mAXP2I');
newImage.setAttribute('alt', 'HD photo by Dell');
document.body.appendChild(newImage);

const newSection = document.createElement('section')
const newHeader = document.createElement('h2')
newHeader.innerText = 'CSE 121b'
newSection.appendChild(newHeader)

const newParag = document.createElement('p')
newParag.innerText = 'Welcome to JavaScript Language'
newSection.appendChild(newParag)

document.body.appendChild(newSection)

// OR you could do it this way:

// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
// document.body.appendChild(newSection);

// Create a new section element. Add an h2 element with the content "CSE 121b" Add a paragraph p that says: 
// "Welcome to Javascript Language" Add your section to the body.
// Solution