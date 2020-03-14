let x
let flgA = 1
let flgB = 1
let a
let b

while(flgA){
    a = prompt("Введите значение A", 0)
     if(isNaN(a)){
       alert("Должно быть введено число!")
     } else flgA = 0
    }
while(flgB){
    b = prompt("Введите значение B", 0)
     if(isNaN(b)) {
       alert("Должно быть введено число!")
     } else flgB = 0
    }
   
if(a==null||b==null){
    alert("Не введены значения")
} else if(a>b){
    x=a+b/2*4
    alert("Результат x=" + x)
} else if(a==b){
    alert("Результат x=400")
} else if(a<b){
    x=a-b+2/b*4
    alert("Результат x=" + x)

} 