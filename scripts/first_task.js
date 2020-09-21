'use strict';

try {

    function quick_sort(arr_common, left, right) {

        if (arr_common.length > 1) {

            let index = splitting(arr_common, left, right);

            if (left < index - 1) {

                quick_sort(arr_common, left, index - 1);
            }

            if (index < right) {

                quick_sort(arr_common, index, right);
            }
        }

        return arr_common;
    }

    function splitting(arr_common, left, right) {

        let base = arr_common[Math.floor((right + left) / 2)],  // опорный элемент
            i = left,                                           // индекс левого указателя
            j = right;                                          // индекс правого указателя

        while (i <= j) {

            while (arr_common[i] < base) {

                i++;
            }

            while (arr_common[j] > base) {

                j--;
            }

            if (i <= j) {

                [arr_common[i], arr_common[j]] = [arr_common[j], arr_common[i]];
                i++;
                j--;
            }
        }

        return i;   // возвращается индекс левого указателя
    }

    let arr_common = [1, 2, 7, 5, 6, 8, 4];     // исходный массив
    
    if (arr_common.filter(elem => elem < 0).length !== 0) {    // проверка на присутствие в массиве только натуральных чисел

        throw new Error("Массив должен состоять только из натуральных чисел");
    }

    let str_odd = '';   // строка нечётных индексов
    let str_even = '';  // строка чётных индексов
    let arr_odd = [];   // массив нечётных значений
    let arr_even = [];  // массив чётных значений

    arr_common.forEach((elem, index) => {   // разделяем на два массива чётных и нечётных значений

        if (elem % 2 === 0) {

            str_even += index + ',';
            arr_even.push(elem);

        } else {

            str_odd += index + ',';
            arr_odd.push(elem);
        }
    });

    let result_odd = quick_sort(arr_odd, 0, arr_odd.length - 1).reverse();      // упорядоченный массив нечётных значений по убыванию
    let result_even = quick_sort(arr_even, 0, arr_even.length - 1);             // упорядоченный массив чётных значений по возрастанию

    str_odd.split(',').filter(Boolean).forEach((elem, index) => {       // в соответсвующие индексы исходного массива помещаем упорядоченные нечётные значения

        arr_common[elem] = result_odd[index];
    });

    str_even.split(',').filter(Boolean).forEach((elem, index) => {      // в соответсвующие индексы исходного массива помещаем упорядоченные чётные значения

        arr_common[elem] = result_even[index];
    });

    console.log('RESULT =', arr_common);

} catch (error) {

    console.log(error);
}
