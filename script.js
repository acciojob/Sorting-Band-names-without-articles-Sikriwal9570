//your code here
// Array of band names
let bandNames = ['The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Pink Floyd'];

// Function to remove articles from a string
function removeArticles(name) {
    return name.replace(/^(a|an|the)\s+/i, '');
}

// Remove articles and sort the band names
bandNames = bandNames.map(removeArticles).sort();

// Get the ul element by its id
const bandList = document.getElementById('band');

// Populate the ul element with li elements
bandNames.forEach(function (name) {
    const li = document.createElement('li');
    li.textContent = name;
    bandList.appendChild(li);
});


