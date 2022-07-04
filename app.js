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

const soupList = menu.filter(item => item.category === "Soup");
const mainCList = menu.filter(item => item.category === "mainCourse");
const thirdPList = menu.filter(item => item.category === "thirdPlate");

const soupDOM = document.querySelector("#soupList");
const mainCourseDOM = document.querySelector("#mainCourseList");
const thirdPDOM = document.querySelector("thirdPlateList");

const addSoup = () => {
    const ulDOM = document.querySelector("#ulSoup");
    for (let i = 0; i < soupList.length; i++) {
        const soupItem = soupList[i];
        const liDOM  = document.createElement('li');
        liDOM.innerHTML = `${soupItem.title}`;
        liDOM.classList.add("list-group-item");
        liDOM.style.listStyleType = "none";
        ulDOM.append(liDOM);
    }
}
const addMainCourse = () => {
    const ulDOM = document.querySelector("#ulMainCourse");
    for (let i = 0; i < mainCList.length; i++) {
        const mainCItem = mainCList[i];
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${mainCItem.title}`;
        liDOM.classList.add("list-group-item");
        liDOM.style.listStyleType = "none";
        ulDOM.append(liDOM);
    }
}
const addThirdPlate = () => {
    const ulDOM = document.querySelector("#ulThirdP");
    for (let i = 0; i < thirdPList.length; i++) {
        const thirdPItem = thirdPList[i];
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${thirdPItem.title}`;
        liDOM.classList.add("list-group-item");
        liDOM.style.listStyleType = "none";
        ulDOM.append(liDOM);

    }
}

addSoup();
addMainCourse();
addThirdPlate();

