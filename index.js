var list = document.getElementById('todo-list');
var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');
var btnDelete = document.getElementById('delete-item');
var tbox = document.getElementById('textbox');

var currValue = ''
tbox.addEventListener('input',function(e) {
    currValue = e.target.value
})

tbox.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        addListItem();
    }
})

btnAdd.addEventListener('click', addListItem);

function createNewNode() {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(currValue);
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount+1);

    return newListElement;
}

function addListItem() {
    if(currValue !== undefined && currValue !== null && currValue !== '')
    {
        var newListElement = createNewNode();

        var item1 = list.firstElementChild

        list.appendChild(newListElement)
        tbox.value = ''
        currValue = ''
    } else{
        alert('Please enter a value to add');
    }
}

btnUpdate.addEventListener('click', function() {
    var item1 = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement,item1);
    tbox.value = ''
    currValue = ''
});

btnDelete.addEventListener('click',function() {
    var item1 = list.firstElementChild;
    list.removeChild(item1)
})