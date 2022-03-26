// 1 - Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array
let reverseString = (string) => {
    return string.split('').reverse().join('');
}

console.log(reverseString("abcdef"));

// 2 - Viết một function xoá các phần tử trùng lặp trong một mảng các số
let filterArray = (array) => {
    let newArray = [];
    newArray = array.filter((item) => {
        return newArray.includes(item) ? '' : newArray.push(item);
    });
    return newArray;
}

console.log(filterArray([1, 2, 3, 5, 4, 2, 6, 4]));

// 3 - Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần xuất hiện của nó trong mảng
let appearedTheMost = (array) => {
    let value = filterArray(array), count = [];
    for (let i = 0; i < value.length; i++) {
        count[i] = array.join('').split(value[i]).length - 1;
    }
    let maxLocation = 0, max = count[0];
    for (let i = 1; i < count.length; i++) {
        if (count[i] > max) {
            max = count[i];
            maxLocation = i;
        }
    }
    return { value: value[maxLocation], count: max };
}

console.log(appearedTheMost([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]));

// 4 - Viết một ứng dụng web danh bạ có yêu cầu:
//      · Danh bạ được sắp xếp bằng tên theo bảng chữ cái
//      · Thêm mới danh bạ với tên và số điện thoại
//      · Tìm kiếm danh bạ theo tên và số điện thoại
//      · Xoá các danh bạ bị trùng số điện thoại. Sẽ xóa người nào đứng sau

const nameInput   = document.querySelector(".name-input"),
      telInput    = document.querySelector(".tel-input"),
      searchInput = document.querySelector(".search-input"),
      addBtn      = document.querySelector(".add-button"),
      searchBtn   = document.querySelector(".search-button"),
      removeBtn   = document.querySelector(".remove-button"),
      addNumber   = document.querySelector(".add-number"),
      phonebook   = document.querySelector(".phonebook-list");
      
const contactList = [
    {
        name: "alice",
        tel: "8164035456"
    },
    {
        name: "bob",
        tel: "5725662397"
    },
    {
        name: "cris",
        tel: "8643094841"
    },
    {
        name: "daniel",
        tel: "8164035456"
    },
    {
        name: "eevee",
        tel: "0979955527"
    },
    {
        name: "fiona",
        tel: "8164035456"
    },
    {
        name: "george",
        tel: "8164035456"
    },
    {
        name: "hermione",
        tel: "8164035456"
    }
];

const formatContact = (array) => {
    let name = array.name[0].toUpperCase() + array.name.substring(1).toLowerCase();
    let tel  = '(' + array.tel.substring(0, 3) + ')-' + array.tel.substring(3, 6) + '-' + array.tel.substring(6);
    return { name, tel };
}

const phonebookOutput = () => {
    phonebook.innerHTML = "";
    contactList.forEach((item) => {
        phonebook.innerHTML += `
            <li class="phonebook-item">
                <p class="name">${formatContact(item).name}</p>
                <p class="tel">${formatContact(item).tel}</p>
            </li>
        `;
    });
};

phonebookOutput();
addNumber.addEventListener("submit", () => {
    contactList.push({
        name: nameInput.value,
        tel: telInput.value
    });
    contactList.sort((a, b) => (formatContact(a).name > formatContact(b).name) ? 1 : (formatContact(a).name === formatContact(b).name) ? ((a.tel > b.tel) ? 1 : -1) : -1);
    console.log(contactList);
    phonebookOutput();
});

searchBtn.addEventListener("click", () => {
    let contactItems = document.querySelectorAll(".phonebook-item");
    contactItems.forEach((item) => {
        if (searchInput.value.toLowerCase() === '') item.classList.remove("hidden");
        else if (item.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
});

removeBtn.addEventListener("click", () => {
    for (let i = 0; i < contactList.length; i++) {
        for (let j = i + 1; j < contactList.length; j++) {
            if (contactList[j].tel === contactList[i].tel) contactList.splice(j, 1);
        }
    }
    console.log(contactList);
    phonebookOutput();
});