const menu = [
    {
        title:  "Ezogelin Çorbası",
        category: "firstPlate",
        ingredients: ["Bulgur", "Pirinç", "Mercimek"],
    },
    {
        title: "Patates Oturtma",
        category: "secondPlate",
        ingredients: ["Patates", "Kıyma"],
    },
    {
        title: "Makarna",
        category: "thirdPlate",
        ingredients: ["Makarna"],
    }

];

const addMenu = () => {
    for (let i = 0; i < menu.length; i++) {
        const item = menu[i];
        addHTML(item);
    }
}


const addHTML = (item) => {
    const tableBodyDOM = document.querySelector("#menu_tbody");

    const trDOM = document.createElement('tr');
    trDOM.classList.add("menu_items");
    trDOM.innerHTML = `<td>${item.title}</td><td></td><td></td>`;
    tableBodyDOM.append(trDOM);
}

addMenu();