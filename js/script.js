var leftArr = document.getElementById("leftarr");
var rightArr = document.getElementById("rightarr");
var imgs = document.querySelectorAll("#slider > img");
var opisanies = document.querySelectorAll("#opisanie > p");
var imgIndex = 0;


rightArr.onclick = function () {
    imgs[imgIndex].classList.remove("active");
    if (imgIndex == 6) {
        imgIndex = 0;
    } else imgIndex++;
    imgs[imgIndex].classList.add("active");
	console.log(imgIndex);
	
};
leftArr.onclick = function () {
    imgs[imgIndex].classList.remove("active");
    if (imgIndex == 0) {
        imgIndex = 6;
    } else imgIndex--;
    imgs[imgIndex].classList.add("active");
};

imgs[imgIndex].onclick = function () {
    opisanies[imgIndex].classList.add("active1");
	
    imgs[imgIndex].onclick = function () {
        opisanies[imgIndex].classList.remove("active1");
		
    };
};









/*Создать приложение "список заданий" со следующими элементами:
1. Строка для ввода нового элемента списка
2. Кнопка для добавления этого элемента в список
3. Кнопка для удаления выделенного элемента из списка
4. Любой элемент списка можно выделить (синяя рамка)
5. При повторном клике по выделенному элементу, выделение должно сниматься
6. При попытке выделения 2х элементов, выделение с предыдущего должно сниматься*/
