//1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let input=document.querySelector('#input')
// let p=document.querySelector('#p')
// input.addEventListener('blur',function func(){
//     p.textContent+=input.value
// })


//2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let elems = document.querySelectorAll('.elem');
// let elem1 = document.querySelector('.elem1');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
// 	let sum = 0;
// 	for(let i=0; i<=elems.length-1; i++){
// 		sum += Number(elems[i].value)
// 	}
// 	elem1.textContent += sum;
// })


// 3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let elem = document.querySelector('.elem');
// let p = document.querySelector('.elem1');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split("")
//     let sum = 0;
//     for(let i = 0; i<=arr.length-1; i++){
//         sum += +arr[i]
//     }
//     p.textContent = sum
// })


// 4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let elem = document.querySelector('.elem');
// let p = document.querySelector('.elem1');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split(",")
//     let sum = 0;
//     for(let i = 0; i<=arr.length-1; i++){
//         sum += +arr[i]
//     }
//     p.textContent = sum/arr.length
// })


// 5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let elem1 = document.querySelector('.elem1');
// let elems = document.querySelectorAll('.elem');
// elem1.addEventListener('blur', function(){
//     let arr=elem1.value.split(' ')
//     for(let i=0, elem = 0; i<= arr.length-1, elem<=elems.length-1; i++, elem++){
//             elems[elem].value = arr[i]
//         }
// })


//6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split(' ')
//     let arr1 = []
//     for(let i =0; i<arr.length; i++){
//         arr1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
//     }
//     elem.value = arr1.join(" ")
// })


// 7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let elem = document.querySelector('.elem');
// let elem1 = document.querySelector('.elem1');
// elem.addEventListener('blur', function(){
//     elem1.textContent = elem.value.split(" ").length
// })

// 8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function(){
//     elem.value = elem.value.split(".").reverse().join("-")
// })


// 9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     if(elem.value.split("").reverse().join("") == elem.value.split("").join("")){
//         elem.value= "палиндром"
//     }
//     else{
//         elem.value = "не палиндром"
//     }
//     })


// 10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let elem = document.querySelector('.elem');
// elem.addEventListener('blur', function(){
//     let arr = elem.value.split("")
//     arr.find(function(elem){
//         res = elem == "3"
//         return res
//     })
//     console.log(res)
// })


// 11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let elems = document.querySelectorAll('.elem');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
// 	for(let i=0; i<=elems.length-1; i++){
// 		elems[i].textContent = elems[i].textContent + (i+1)
// 	}
// })

// 12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let a = document.querySelectorAll('.a');
// let button = document.querySelector('#button')
// button.addEventListener("click", func)
// function func(){
//     for(let elem of a){
// 		elem.textContent  += `(${elem.href})`;
// 	}
// }

// 13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let a = document.querySelectorAll('.a');
// let button = document.querySelector('#button')
// button.addEventListener("click", func)
// function func(){
//     for(let elem of a){
// 		if(elem.href.split("").slice(0, 7).join("") == "http://"){
//             elem.innerHTML +=  "&rarr;" ;
//         }
// 	}
// }

// 14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let elems = document.querySelectorAll('.elem');
// for(let elem of elems){
//     elem.addEventListener("click", function(){
//         elem.textContent**=2
//     })
// }


// 15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let elem = document.querySelector('.elem');
// elem.addEventListener("blur", function(){
//     let arr = elem.value.split(".").reverse()
//     let [year, month, dayy] = arr 
//     let date = new Date(year, month-1, dayy)
//     let day  = date.getDay();
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     elem.value =  days[day]
// })


// 16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// let elem = document.querySelector('.elem');
// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')
// button1.addEventListener("click", function(){
//     if(elem.value > 0){
//         elem.value++
//     }
// })
// button2.addEventListener("click", function(){
//     if(elem.value > 0){
//         elem.value--
//     }
// })


// 17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let elems = document.querySelectorAll('.elem');
// let elem1 = document.querySelector('.elem1');
// for(let elem of elems){
//     elem.addEventListener("click", func)
// }
// let count = 0;
// function func(){
//     count++
//     elem1.value = count  
// }

// 18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let divs = document.querySelectorAll('.div');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//     for(let div of divs){
//         if(div.textContent.length > 10 )
//         div.textContent =  div.textContent.slice(0, 10) + "..."
//     }
// })


// 19 Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//    let res = "";
//    for(let i = 0; i<8; i++){
//     res += symbols.charAt(Math.floor(Math.random() * symbols.length))
//    }
//    elem.value = res

// })

// 20 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//    let res = "";
//    for(let i = 0; i < elem.value.length; i++){
//     res += elem.value.charAt(Math.floor(Math.random() * elem.value.length))
//    }
//    elem.value = res

// })


// 21 Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('.elem1');
// button.addEventListener("click", function(){
//    elem1.textContent = (elem.value -32)*5/9
// })



// 22 Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let elem = document.querySelector('.elem');
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('.elem1');
// button.addEventListener("click", function(){
//     let res = 1;
//    for(let i = 1; i<=elem.value; i++){
//     res *=i
//    }
//    elem1.textContent = res;
// })


// 23 Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
// let a = document.querySelector('.a');
// let b = document.querySelector('.b');
// let c = document.querySelector('.c');
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('.elem1');
// button.addEventListener("click", function(){
//     let d = b.value**2 - 4*a.value*c.value
//     if(d>0){
//         let x1 = (-(b.value) + Math.sqrt(d))/2*a.value
//         let x2 = (-(b.value) - Math.sqrt(d))/2*a.value
//         elem1.textContent = `Корни: ${x1}, ${x2}`
//     }
//     else if(d == 0){
//         let x1 = -(b.value)/(2*a.value)
//         elem1.textContent = `Корень: ${x1}`
//     }
//     else{
//         elem1.textContent = `Нет корней`
//     }
// })




