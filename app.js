const menu = [
    {
        title:  "Ezogelin Çorbası",
        category: "Soup",
        ingredients: ["Bulgur", "Pirinç", "Mercimek"],
    },
    {
        title: "Patates Oturtma",
        category: "mainCourse",
        ingredients: ["Patates", "Kıyma"],
    },
    {
        title: "Erişte",
        category: "thirdPlate",
        ingredients: ["Erişte"],
    },
    {
        title:  "Yayla Çorbası",
        category: "Soup",
        ingredients: ["Pirinç", "Yoğurt"],
    },
    {
        title: "Karnıyarık",
        category: "mainCourse",
        ingredients: ["Patlıcan", "Kıyma", "Biber"],
    },
    {
        title: "Bulgur Pilavı",
        category: "thirdPlate",
        ingredients: ["Bulgur", "Soğan", "Biber", "Domates"],
    },
    {
        title:  "Sebze Çorbası",
        category: "Soup",
        ingredients: ["Havuç", "Brokoli", "Ispanak", "Karnabahar"],
    },
    {
        title: "Mantı",
        category: "mainCourse",
        ingredients: ["Yoğurt", "Salça"],
    },
    {
        title: "Rus Salatası",
        category: "thirdPlate",
        ingredients: ["Garnitür", "Yoğurt", "Mayonez"],
    },
    {
        title:  "Domates Çorbası",
        category: "Soup",
        ingredients: ["Sarımsak", "Domates"],
    },
    {
        title: "Brokoli Graten",
        category: "mainCourse",
        ingredients: ["Brokoli", "Süt", "Krema"],
    },
    {
        title: "Körili Makarna",
        category: "thirdPlate",
        ingredients: ["Köri", "Makarna"],
    },
    {
        title:  "Havuç Çorbası",
        category: "Soup",
        ingredients: ["Havuç", "Yoğurt", "Yumurta", "Şehriye"],
    },
    {
        title: "Menemen",
        category: "mainCourse",
        ingredients: ["Yumurta", "Domates", "Biber"],
    },
    {
        title:  "Tarhana Çorbası",
        category: "Soup",
        ingredients: ["Tarhana"],
    },
    {
        title:  "Tavuk Çorbası",
        category: "Soup",
        ingredients: ["Tavuk", "Yoğurt", "Yumurta"],
    },
    {
        title:  "Şehriye Çorbası",
        category: "Soup",
        ingredients: ["Salça", "Şehriye"],
    },
    {
        title: "Lahmacun",
        category: "mainCourse",
        ingredients: ["Kıyma", "Domates", "Soğan", "Biber"],
    },
    {
        title: "Kır Pidesi",
        category: "mainCourse",
        ingredients: ["Kıyma", "Domates", "Soğan", "Biber"],
    },
    {
        title: "Patates Kebabı",
        category: "mainCourse",
        ingredients: ["Kıyma", "Patates", "Salça"],
    },
    {
        title:  "Mercimek Çorbası",
        category: "Soup",
        ingredients: ["Mercimek", "Soğan"],
    },
    {
        title: "Tavuk Sote",
        category: "mainCourse",
        ingredients: ["Tavuk", "Soğan", "Biber"],
    },
    {
        title: "Börek",
        category: "mainCourse",
        ingredients: ["Yufka"],
    },
    {
        title: "Fırın Makarna",
        category: "thirdPlate",
        ingredients: ["Makarna", "Süt", "Kaşar"],
    },
    {
        title: "Musakka",
        category: "mainCourse",
        ingredients: ["Patlıcan", "Kıyma"],
    },
    {
        title: "Köfte",
        category: "mainCourse",
        ingredients: ["Köfte"],
    },
    {
        title: "Salata",
        category: "thirdPlate",
        ingredients: ["Domates", "Havuç", "Mısır","Salatalık"],
    },
    {
        title: "Patates Salatası",
        category: "thirdPlate",
        ingredients: ["Patates", "Marul", "Hardal", "Mayonez", "Yoğurt"],
    },
    {
        title: "Kısır",
        category: "thirdPlate",
        ingredients: ["Bulgur", "Marul"],
    },
    {
        title: "Fasulye",
        category: "mainCourse",
        ingredients: ["Fasulye"],
    },
    {
        title: "Nohut",
        category: "mainCourse",
        ingredients: ["Nohut"],
    },
    {
        title: "Patates Kızartması",
        category: "thirdPlate",
        ingredients: ["Patates"],
    },
    {
        title: "Nugget",
        category: "mainCourse",
        ingredients: ["Nugget"],
    },
    {
        title: "Pizza",
        category: "mainCourse",
        ingredients: ["Biber", "Kaşar", "Sucuk", "Biber", "Mantar"],
    },
    {
        title: "Mantar Çorbası",
        category: "Soup",
        ingredients: ["Mantar", "Krema"],
    },
];
// Filters
const soupList = menu.filter(item => item.category === "Soup");
const mainCourseList = menu.filter(item => item.category === "mainCourse");
const thirdPlateList = menu.filter(item => item.category === "thirdPlate");
// List DOMs
const soupDOM = document.querySelector("#soupList");
const mainCourseDOM = document.querySelector("#mainCourseList");
const thirdPDOM = document.querySelector("thirdPlateList");
// insert list items start
const addSoup = (filter) => {
    const ulDOM = document.querySelector("#ulSoup");
    for (let i = 0; i < filter.length; i++) {
        const soupItem = filter[i];
        const liDOM  = document.createElement('li');
        liDOM.innerHTML = `${soupItem.title}`;
        liDOM.classList.add("list-group-item");
        liDOM.style.listStyleType = "none";
        ulDOM.append(liDOM);
    }
}
const addMainCourse = (filter) => {
    const ulDOM = document.querySelector("#ulMainCourse");
    for (let i = 0; i < filter.length; i++) {
        const mainCItem = filter[i];
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${mainCItem.title}`;
        liDOM.classList.add("list-group-item");
        liDOM.style.listStyleType = "none";
        ulDOM.append(liDOM);
    }
}
const addThirdPlate = (filter) => {
    const ulDOM = document.querySelector("#ulThirdP");
    for (let i = 0; i < filter.length; i++) {
        const thirdPItem = filter[i];
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${thirdPItem.title}`;
        liDOM.classList.add("list-group-item");
        liDOM.style.listStyleType = "none";
        ulDOM.append(liDOM);

    }
}
// insert list items end

// print Soup - Main Course - Third Plate lists
const startConf = () => {
    addSoup(soupList);
    addMainCourse(mainCourseList);
    addThirdPlate(thirdPlateList);
}

startConf();

// get all items from ingredients 
let newArr = [];
for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
        newArr.push(`${menu[i].ingredients[j]}`)
    }
}

// remove duplicates and get unique ingredients for checkboxes
const unique = [...new Set(newArr)];

// unique ingredients sorting by alphabetical order
unique.sort((a, b) => a.localeCompare(b));

// creating the checkbox structure
const setCheckbox = (item) => {
    const ingListDOM = document.querySelector("#ingredients_list");
    const ingDiv = document.createElement('div');
    ingDiv.classList.add("form-check");    
    ingListDOM.append(ingDiv);

    const ingInput = document.createElement('input');
    ingInput.classList.add("form-check-input");
    ingInput.type = "checkbox";
    ingInput.value = `${item}`;
    ingInput.id = "flexCheckDefault";
    ingDiv.append(ingInput);

    const ingLabel = document.createElement('label');
    ingLabel.classList.add("form-check-label");
    ingLabel.innerHTML = `${item}`
    ingDiv.append(ingLabel);

}
// add unique values to checkboxes
const addCheckbox = () => {
    for (let i = 0; i < unique.length; i++) {
        setCheckbox(unique[i]);
    }
}

addCheckbox();

// checkbox - checked values to array   

const checkboxes = document.querySelectorAll(".form-check-input");
let checkedList = [];

for (let checkbox of checkboxes) {
    checkbox.addEventListener('click', function(){
        if( this.checked == true) {
            checkedList.push(this.value)
        } else {
            checkedList = checkedList.filter(e => e !== this.value);
            filteredSoupList = [];
            filteredMainCourseList = [];
            filteredThirdPlateList = [];
            if (checkedList.length == 0) {         
                startConf();
            }
        }
        removeItems();
        filterIngredients();
        addSoup(filteredSoupList);
        addMainCourse(filteredMainCourseList);
        addThirdPlate(filteredThirdPlateList);
    })
}

const removeItems = () => {
    const ulSoupDOM = document.querySelector("#ulSoup");
    const ulMainCourseDOM = document.querySelector("#ulMainCourse");
    const ulThirdPDOM = document.querySelector("#ulThirdP");

    while(ulSoupDOM.firstChild) ulSoupDOM.removeChild(ulSoupDOM.firstChild);
    while(ulMainCourseDOM.firstChild) ulMainCourseDOM.removeChild(ulMainCourseDOM.firstChild);
    while(ulThirdPDOM.firstChild) ulThirdPDOM.removeChild(ulThirdPDOM.firstChild);
}

let filteredSoupList = [];
let filteredMainCourseList = [];
let filteredThirdPlateList = [];

const filterIngredients = () => {
    
    for (checked of checkedList) {
        for ( let i = 0; i < soupList.length; i++) {
            if (soupList[i].ingredients.includes(checked)) {
                filteredSoupList.push(soupList[i]);
            }
        }

        for( let j = 0; j < mainCourseList.length; j++) {
            if (mainCourseList[j].ingredients.includes(checked)) {
                filteredMainCourseList.push(mainCourseList[j]);
            }
        }

        for ( let k = 0; k < thirdPlateList.length; k++) {
            if (thirdPlateList[k].ingredients.includes(checked)) {
                filteredThirdPlateList.push(thirdPlateList[k]);
            }
        }
    }
    
    filteredSoupList = [...new Set(filteredSoupList)];
    filteredMainCourseList = [...new Set(filteredMainCourseList)];
    filteredThirdPlateList = [...new Set(filteredThirdPlateList)];

}


