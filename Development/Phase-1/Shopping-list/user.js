document.addEventListener("DOMContentLoaded", () => {
    loadItems();
});

function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    if (!itemText) return;
    
    const ul = document.getElementById('shoppingList');
    const li = document.createElement('li');
    li.textContent = itemText;
    li.onclick = () => li.classList.toggle('purchased');
    ul.appendChild(li);
    input.value = '';
    
    saveItems();
}

function clearList() {
    const ul = document.getElementById('shoppingList');
    ul.innerHTML = '';
    saveItems();
}

function saveItems() {
    const items = [];
    document.querySelectorAll('#shoppingList li').forEach(item => {
        items.push({ text: item.textContent, purchased: item.classList.contains('purchased') });
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function loadItems() {
    const items = JSON.parse(localStorage.getItem('shoppingList'));
    if (items) {
        const ul = document.getElementById('shoppingList');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.text;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            li.onclick = () => li.classList.toggle('purchased');
            ul.appendChild(li);
        });
    }
}
