// practice problem------1

const progrramer = {
    name: 'khair',
    age: '23',
    isSingle: false,
    knownLanguage: ['python', 'c', 'c++', 'javaScript'],
    study: {
        ssc: 'CPA Boys',
        hsc: 'CPA Boys Collage',
        greduation:'NSTU'
    },
    applyList: function () {
        return progrramer.name + ' applyed so many places with the language of ' + progrramer.knownLanguage[2];
    }
}



// practice problem------2----2.1-------2.2----

const tampletString = `${progrramer.name} has been completed the first stap of study at ${progrramer.study.ssc} School, Then he has been teached the language ${progrramer.knownLanguage[2]} from ${progrramer.study.greduation}.`
// console.log(tampletString)



// practice problem------3----3.1-----3.2-----3.2.1---3.3-------32
// 3:
const arrowTheDhonuk = () => dhonuk = 89;
// console.log(arrowTheDhonuk())

// 3.1:
const arrowTheNUmberDhonuk = (Number) => Number / 17;
// console.log(arrowTheNUmberDhonuk(34))

// 3.2:
const arrowTheEvanDhonuk = (num1, num2) => (num1 + 7 + num2 + 5) / 2;;
// console.log(arrowTheEvanDhonuk(11,5))

// 3.2.1
const arrowTheEvanDhonuk1 = (num1, num2) => (num1 + 7 + num2 + 5) % 2 === 0 ? true: false;
// console.log(arrowTheEvanDhonuk1(11,5))

// 3.3:
const EkadhiArrowTheDhonuk = (n1, n2) => {
    const sum = (n1 + 7) + (n2 + 7)
    return sum;
}
// console.log(EkadhiArrowTheDhonuk(10,20))


// practice problem------4-------4.1---------
// 4:
const arr = [5, 6, 7, 8, 9, 4, 3, 2];
const multiline = (numbers) => {
    let arr = []
    let sum = 0;
    for (const number of numbers) {
        const square = number * number;
        arr.push(square);
        sum = sum + square;
    }
    return sum;

};
// console.log(multiline(arr))

// 4.1:
const array1 = [55, 65, 75, 86, 79, 34, 23, 21];
const arraymap = array1.map(arr=> arr / 7);
// console.log(arraymap)


// practice problem-------------5----------------
const arrayTheline = [20, 50, 520, 90, 46, 50, 50, 88, 60, 58, 46, 65, 21, 64, 44]

// map
const arraymap2 = arrayTheline.map(n => n + 2);
// console.log(arraymap2)

const arryForEach = arrayTheline.forEach(n => 'console.log(n)');
// console.log(arryForEach);

const arrFilter = arrayTheline.filter(n => n % 2 !== 0)
// console.log(arrFilter)

const arrFind = arrayTheline.find(n => n !== 50)
// console.log(arrFind)

const arrReduce = arrayTheline.reduce((num1, num2) => num1 + num2 + 0); 
// console.log(arrReduce)


// practice problem-------------6----------------
const student = {
    name: ' xabed',
    age: 24,
    waight: 90,
    study: {
        ssc: 'CPC boys',
        hsc: 'CPC boys',
        greduation:'IIUC'
    },
    subject: ['biology', 'Micoro Economics', 'Physics', 'math'],
    exam: function(){'retake', 'improvement'}
}
const { name } = student;
// console.log(name)
const [balacne] = [student.subject[1]];
// console.log(balacne)

