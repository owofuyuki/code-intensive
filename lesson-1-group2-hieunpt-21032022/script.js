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
