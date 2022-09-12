let table = document.querySelector('.demotable');
let wrapPer1 = document.querySelector('.wrapPer1');
let wrapPer2 = document.querySelector('.wrapPer2');
let wrapPer3 = document.querySelector('.wrapPer3');
let wrapPer4 = document.querySelector('.wrapPer4');

document.querySelector('.summaryTab').addEventListener('click', function () {

    countHour();
    countNightHour();
    countWord();
    countPrazHour();
    countProeb();
    minusPlan();
    countPraznMinus();
    inWork1();
    inWork2();
    inWork3();
    inWork1FEM();
    inWork2FEM();
    inWork3FEM();
    ObPod1();
    ObPod2();
    ObPod3();
    inOTP1();
    inOTP2();let table = document.querySelector('.demotable');
let wrapPer1 = document.querySelector('.wrapPer1');
let wrapPer2 = document.querySelector('.wrapPer2');
let wrapPer3 = document.querySelector('.wrapPer3');
let wrapPer4 = document.querySelector('.wrapPer4');

document.querySelector('.summaryTab').addEventListener('click', function () {

    countHour();
    countNightHour();
    countWord();
    countPrazHour();
    countProeb();
    minusPlan();
    countPraznMinus();
    inWork1();
    inWork2();
    inWork3();
    inWork1FEM();
    inWork2FEM();
    inWork3FEM();
    ObPod1();
    ObPod2();
    ObPod3();
    inOTP1();
    inOTP2();
    inOTP3();
    inBOL1();
    inBOL2();
    inBOL3();
    inPROCH1();
    inPROCH2();
    inPROCH3();
    inRAZR1();
    inRAZR2();
    inRAZR3();
    inPROG1();
    inPROG2();
    inPROG3();
    inVIH1();
    inVIH2();
    inVIH3();
    inHOUER1();
    inHOUER2();
    inHOUER3();

})
//=======================================================================================Объекты рабочих===========================================================================================
let persons = [];




for (let i = 1; i <= 60; i++) {
    let persObg = {};
    persObg.abr = localStorage.getItem("nastrABR" + i);
    persObg.firstname = localStorage.getItem("nastrFIRSTNAME" + i);
    persObg.category = localStorage.getItem("nastrCATEGORY" + i);
    persObg.prof = localStorage.getItem("nastrPROF" + i);
    persObg.sex = localStorage.getItem("nastrSEX" + i);
    persObg.mode = localStorage.getItem("nastrMODE" + i);
    persObg.decret = Boolean(+localStorage.getItem("nastrDECRET" + i));
    if (localStorage.getItem("nastrABR" + i) !== "") {
        persons.push(persObg)
    }
}

//=======================================================================================Праздники===========================================================================================
// let prazdniki = [];




// for (let i = 1; i <= 4; i++) {
//     let prazObg = localStorage.getItem("nastrDatPraz" + i);;
//     if (localStorage.getItem("nastrDatPraz" + i) !== "") {
//         prazdniki.push(prazObg)
//     }
// }


    for (let i = 1; i <= 12; i++) {
        localStorage.setItem("nastrCOUNTPlan" + i, "120/140")
        localStorage.setItem("nastrSm1Plan" + i, "120/140")
        localStorage.setItem("nastrSm2Plan" + i, "120/140")
        localStorage.setItem("nastrSm3Plan" + i, "120/140")
        localStorage.setItem("nastrSm4Plan" + i, "120/140")

    }




let rr=new Date()

let parolNastr=rr.toLocaleDateString().slice(0,-5).replace(".", "")+")"
let parolOCH=rr.toLocaleDateString().slice(0,-5).replace(".", "")+")"
//=======================================================================================Планы===========================================================================================
//1 смена

let plan1SM = [];

for (let i = 1; i <= 12; i++) {
    let planObg = {};
    planObg.data = localStorage.getItem("nastrCOUNTPlan" + i);
    planObg.plan = localStorage.getItem("nastrSm1Plan" + i).slice(0, 3);
    planObg.fact = localStorage.getItem("nastrSm1Plan" + i).slice(4, 7);
    if (planObg.data == " " && planObg.plan == " " && planObg.fact == " ") {
        planObg.data = 0;
        planObg.plan = 0;
        planObg.fact = 0;
    }
    planObg.perer = localStorage.getItem("nastrSm1Plan" + i).slice(4, 7) - localStorage.getItem("nastrSm1Plan" + i).slice(0, 3);
    if (localStorage.getItem("nastrCOUNTPlan" + i) !== "") {
        plan1SM.push(planObg)
    }
}
console.log(plan1SM)

//2 смена

let plan2SM = [];

for (let i = 1; i <= 12; i++) {
    let planObg = {};
    planObg.data = localStorage.getItem("nastrCOUNTPlan" + i);
    planObg.plan = localStorage.getItem("nastrSm2Plan" + i).slice(0, 3);
    planObg.fact = localStorage.getItem("nastrSm2Plan" + i).slice(4, 7);
    if (planObg.data == " " && planObg.plan == " " && planObg.fact == " ") {
        planObg.data = 0;
        planObg.plan = 0;
        planObg.fact = 0;
    }
    planObg.perer = localStorage.getItem("nastrSm1Plan" + i).slice(4, 7) - localStorage.getItem("nastrSm2Plan" + i).slice(0, 3);
    if (localStorage.getItem("nastrCOUNTPlan" + i) !== "") {
        plan2SM.push(planObg)
    }
}

console.log(plan2SM)
//3 смена

let plan3SM = [];

for (let i = 1; i <= 12; i++) {
    let planObg = {};
    planObg.data = localStorage.getItem("nastrCOUNTPlan" + i);
    planObg.plan = localStorage.getItem("nastrSm3Plan" + i).slice(0, 3);
    planObg.fact = localStorage.getItem("nastrSm3Plan" + i).slice(4, 7);
    if (planObg.data == " " && planObg.plan == " " && planObg.fact == " ") {
        planObg.data = 0;
        planObg.plan = 0;
        planObg.fact = 0;
    }
    planObg.perer = localStorage.getItem("nastrSm1Plan" + i).slice(4, 7) - localStorage.getItem("nastrSm3Plan" + i).slice(0, 3);
    if (localStorage.getItem("nastrCOUNTPlan" + i) !== "") {
        plan3SM.push(planObg)
    }
}

console.log(plan3SM)
//4 смена

let plan4SM = [];

for (let i = 1; i <= 12; i++) {
    let planObg = {};
    planObg.data = localStorage.getItem("nastrCOUNTPlan" + i);
    planObg.plan = localStorage.getItem("nastrSm4Plan" + i).slice(0, 3);
    planObg.fact = localStorage.getItem("nastrSm2Plan" + i).slice(4, 7);
    if (planObg.data == " " && planObg.plan == " " && planObg.fact == " ") {
        planObg.data = 0;
        planObg.plan = 0;
        planObg.fact = 0;
    }
    planObg.perer = localStorage.getItem("nastrSm4Plan" + i).slice(4, 7) - localStorage.getItem("nastrSm4Plan" + i).slice(0, 3);
    if (localStorage.getItem("nastrCOUNTPlan" + i) !== "") {
        plan4SM.push(planObg)
    }
}
console.log(plan4SM)
//=======================================================================================Разбивка на группы=================================================================================


//Вывод элементов рабочих

let ABR = persons.map(function (x) {
    return x.abr;
});

let FIRSTNAMES = persons.map(function (x) {
    return x.firstname;
});

let NAMES = persons.map(function (x) {
    return x.name;
});
let CATEGORIES = persons.map(function (x) {
    return x.category;
});





let PROFS = persons.map(function (x) {
    return x.prof;
});
let SEXES = persons.map(function (x) {
    return x.sex;
});
let MODES = persons.map(function (x) {
    return x.mode;
});

// Разбивка на категории 

let CATRAB = persons.map(function (x) {
    if (x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});



let CATITR = persons.map(function (x) {
    if (x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


let CATSPEC = persons.map(function (x) {
    if (x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


//Разбивка на пол

let RABSEXMAL = persons.map(function (x) {
    if (x.sex == 'male' && x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let RABSEXFEM = persons.map(function (x) {
    if (x.sex == 'female' && x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


let ITRSEXMAL = persons.map(function (x) {
    if (x.sex == 'male' && x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let ITRSEXFEM = persons.map(function (x) {
    if (x.sex == 'female' && x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SPECSEXMAL = persons.map(function (x) {
    if (x.sex == 'male' && x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SPECSEXFEM = persons.map(function (x) {
    if (x.sex == 'female' && x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

//Разбивка декрет
let DECRAB = persons.map(function (x) {
    if (x.decret == true && x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});



let DECITR = persons.map(function (x) {
    if (x.decret == true && x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let DECSPEC = persons.map(function (x) {
    if (x.decret == true && x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});
//Разривка на смены

let SMENA0 = persons.map(function (x) {
    if (x.mode == 'zero') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


let SMENA1 = persons.map(function (x) {
    if (x.mode == 'one') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA2 = persons.map(function (x) {
    if (x.mode == 'two') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


let SMENA3 = persons.map(function (x) {
    if (x.mode == 'three') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA4 = persons.map(function (x) {
    if (x.mode == 'four') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

//Разривка на смены (firstname)

let SMENAF0 = persons.map(function (x) {
    if (x.mode == 'zero') {
        return x.firstname;
    }
}).filter(function (el) {
    return el != null;
});


let SMENAF1 = persons.map(function (x) {
    if (x.mode == 'one') {
        return x.firstname;
    }
}).filter(function (el) {
    return el != null;
});

let SMENAF2 = persons.map(function (x) {
    if (x.mode == 'two') {
        return x.firstname;
    }
}).filter(function (el) {
    return el != null;
});

let SMENAF3 = persons.map(function (x) {
    if (x.mode == 'three') {
        return x.firstname;
    }
}).filter(function (el) {
    return el != null;
});

let SMENAF4 = persons.map(function (x) {
    if (x.mode == 'four') {
        return x.firstname;
    }
}).filter(function (el) {
    return el != null;
});

// =====================================================================================Табель============================================================================================

//Добавление строк

for (let k = 1; k <= ABR.length; k++) {
    let nodet = document.createElement('tr');
    nodet.innerHTML = FIRSTNAMES[k - 1];
    nodet.classList.add(CATEGORIES[k - 1]);
    nodet.classList.add(ABR[k - 1]);
    nodet.classList.add(MODES[k - 1]);
    nodet.classList.add(SEXES[k - 1]);
    nodet.classList.add("col" + k);

    for (let i = 1; i <= 43; i++) {
        let node = document.createElement('td');
        node.classList.add("row" + i);
        node.classList.add(ABR[k - 1]);
        node.id = i
        node.setAttribute("contentEditable", "true");
        table.append(nodet);
        nodet.append(node);
    }
}

//Добвляем классы к TD

//класс day
for (let k = 1; k <= 31; k++) {
    let rowDay = [];
    for (let www of document.querySelectorAll(".row" + k)) {
        rowDay.push(www);
        for (yyy of rowDay) {
            yyy.classList.add('day' + k);
            if (k <= 9) {
                yyy.classList.add("0" + k);
            }
            yyy.classList.add(k);
        }
    }
}

//класс категорий
let bossTabl = document.querySelector('.boss');
let tabITR = bossTabl.querySelectorAll('.ITR');
for (let eee of tabITR) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('ITR')
    }
}

let tabSPEC = bossTabl.querySelectorAll('.SPEC');
for (let eee of tabSPEC) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('SPEC')
    }
}

let tabWORK = bossTabl.querySelectorAll('.Wopker');
for (let eee of tabWORK) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('Wopker')

    }
}


//===========Прописываем смены в td==========

let S0 = bossTabl.querySelectorAll('.zero');
for (let eee of S0) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('zero')

    }
}

let S1 = bossTabl.querySelectorAll('.one');
for (let eee of S1) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('one')

    }
}

let S2 = bossTabl.querySelectorAll('.two');
for (let eee of S2) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('two')

    }
}

let S3 = bossTabl.querySelectorAll('.three');
for (let eee of S3) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('three')

    }
}

let S4 = bossTabl.querySelectorAll('.four');
for (let eee of S4) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('four')

    }
}

//==============Прописываем пол в td==========

let tdFEM = bossTabl.querySelectorAll('.female');
for (let eee of tdFEM) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('female')

    }
}




//Добвляем id к TD

let arrID = [];
for (let k = 1; k <= ABR.length; k++) {
    for (let www of document.querySelectorAll('.col' + k)) {
        arrID.push(www)
    }
}
for (let i = 0; i < arrID.length; i++) {
    arrID[i].id = "r" + i;
}


//==========================================================Выбираем месяц и год======================================================

let changeDat = document.querySelector(".changeDat")
let changeMon = document.querySelector(".changeMon")
let changeYear = document.querySelector(".changeYear")

changeDat.addEventListener('click', function () {
    localStorage.setItem("trueMOUNTH", changeMon.value)
    localStorage.setItem("trueYEAR", changeYear.value)


    window.location.reload()

})
let trueM = localStorage.getItem("trueMOUNTH")
let trueY = localStorage.getItem("trueYEAR")
changeMon.value = trueM;
changeYear.value = trueY;

//===========================================================Наодим td смен =============================================================
//td 0 смены

let arrDay0SM = [];
for (let k = 1; k <= 31; k++) {
    for (let www of document.querySelectorAll('.day' + k)) {
        if (www.getAttribute("class").includes("zero"))
            arrDay0SM.push(www)
    }
}



//td 1 смены

let arrDay1SM = [];
for (let k = 1; k <= 31; k++) {
    for (let www of document.querySelectorAll('.day' + k)) {
        if (www.getAttribute("class").includes("one"))
            arrDay1SM.push(www)
    }
}

//td 2 смены

let arrDay2SM = [];
for (let k = 1; k <= 31; k++) {
    for (let www of document.querySelectorAll('.day' + k)) {
        if (www.getAttribute("class").includes("two"))
            arrDay2SM.push(www)
    }
}

//td 3 смены

let arrDay3SM = [];
for (let k = 1; k <= 31; k++) {
    for (let www of document.querySelectorAll('.day' + k)) {
        if (www.getAttribute("class").includes("three"))
            arrDay3SM.push(www)
    }
}

//td 4 смены

let arrDay4SM = [];
for (let k = 1; k <= 31; k++) {
    for (let www of document.querySelectorAll('.day' + k)) {
        if (www.getAttribute("class").includes("four"))
            arrDay4SM.push(www)
    }
}

let arrAllSM = [];
for (let k = 1; k <= 31; k++) {
    for (let www of document.querySelectorAll('.day' + k)) {
        arrAllSM.push(www)

    }
}

//==============================================Находим выходные\ночные смен========================================================


//====================================================== Смена 0 ====================================

// 1 выходной 

// let arrdate0sm1v = []
// var date0sm1v = 1661547600000;
// for (let i = 0; i <= 100; i++) {
//     date0sm1v += 604800000
//     var dat = new Date(date0sm1v);
//     let trueDat = dat.toLocaleDateString()
//     arrdate0sm1v.push(trueDat)
// }



// // 2 выходной 

// let arrdate0sm2v = []
// var date0sm2v = 1661634000000;
// for (let i = 0; i <= 100; i++) {
//     date0sm2v += 604800000
//     var dat = new Date(date0sm2v);
//     let trueDat = dat.toLocaleDateString()
//     arrdate0sm2v.push(trueDat)
// }

//====================================================== Смена 1 ====================================

// 1 ночная 

let arrdate1sm1n = []
var date1sm1n = 1661547600000;
for (let i = 0; i <= 100; i++) {
    date1sm1n += 691200000
    var dat = new Date(date1sm1n);
    let trueDat = dat.toLocaleDateString()
    arrdate1sm1n.push(trueDat)
}




// 2 ночная  

let arrdate1sm2n = []
var date1sm2n = 1661634000000;
for (let i = 0; i <= 100; i++) {
    date1sm2n += 691200000
    var dat = new Date(date1sm2n);
    let trueDat = dat.toLocaleDateString()
    arrdate1sm2n.push(trueDat)
}




// 3 ночная 

let arrdate1sm3n = []
var date1sm3n = 1661720400000;
for (let i = 0; i <= 100; i++) {
    date1sm3n += 691200000
    var dat = new Date(date1sm3n);
    let trueDat = dat.toLocaleDateString()
    arrdate1sm3n.push(trueDat)
}


// 1 выходной 

let arrdate1sm1v = []
var date1sm1v = 1661806800000;
for (let i = 0; i <= 100; i++) {
    date1sm1v += 691200000
    var dat = new Date(date1sm1v);
    let trueDat = dat.toLocaleDateString()
    arrdate1sm1v.push(trueDat)
}

// 2 выходной  

let arrdate1sm2v = []
var date1sm2v = 1661202000000;
for (let i = 0; i <= 100; i++) {
    date1sm2v += 691200000
    var dat = new Date(date1sm2v);
    let trueDat = dat.toLocaleDateString()
    arrdate1sm2v.push(trueDat)
}

// 3 выходной  

let arrdate1sm3v = []
var date1sm3v = 1661288400000;
for (let i = 0; i <= 100; i++) {
    date1sm3v += 691200000
    var dat = new Date(date1sm3v);
    let trueDat = dat.toLocaleDateString()
    arrdate1sm3v.push(trueDat)
}

//====================================================== Смена 2 ====================================

// 1 ночная  

let arrdate2sm1n = []
var date2sm1n = 1661893200000;
for (let i = 0; i <= 100; i++) {
    date2sm1n += 691200000
    var dat = new Date(date2sm1n);
    let trueDat = dat.toLocaleDateString()
    arrdate2sm1n.push(trueDat)
}



// 2 ночная  

let arrdate2sm2n = []
var date2sm2n = 1661288400000;
for (let i = 0; i <= 100; i++) {
    date2sm2n += 691200000
    var dat = new Date(date2sm2n);
    let trueDat = dat.toLocaleDateString()
    arrdate2sm2n.push(trueDat)
}




// 3 ночная 

let arrdate2sm3n = []
var date2sm3n = 1661374800000;
for (let i = 0; i <= 100; i++) {
    date2sm3n += 691200000
    var dat = new Date(date2sm3n);
    let trueDat = dat.toLocaleDateString()
    arrdate2sm3n.push(trueDat)
}

// 1 выходной 

let arrdate2sm1v = []
var date2sm1v = 1661461200000;
for (let i = 0; i <= 100; i++) {
    date2sm1v += 691200000
    var dat = new Date(date2sm1v);
    let trueDat = dat.toLocaleDateString()
    arrdate2sm1v.push(trueDat)
}

// 2 выходной  

let arrdate2sm2v = []
var date2sm2v = 1661547600000;
for (let i = 0; i <= 100; i++) {
    date2sm2v += 691200000
    var dat = new Date(date2sm2v);
    let trueDat = dat.toLocaleDateString()
    arrdate2sm2v.push(trueDat)
}

// 3 выходной 

let arrdate2sm3v = []
var date2sm3v = 1661634000000;
for (let i = 0; i <= 100; i++) {
    date2sm3v += 691200000
    var dat = new Date(date2sm3v);
    let trueDat = dat.toLocaleDateString()
    arrdate2sm3v.push(trueDat)
}
//==================================================== 3 смена ===============================================
// 1 ночная  

let arrdate3sm1n = []
var date3sm1n = 1661720400000;
for (let i = 0; i <= 100; i++) {
    date3sm1n += 691200000
    var dat = new Date(date3sm1n);
    let trueDat = dat.toLocaleDateString()
    arrdate3sm1n.push(trueDat)
}



// 2 ночная  

let arrdate3sm2n = []
var date3sm2n = 1661806800000;
for (let i = 0; i <= 100; i++) {
    date3sm2n += 691200000
    var dat = new Date(date3sm2n);
    let trueDat = dat.toLocaleDateString()
    arrdate3sm2n.push(trueDat)
}




// 3 ночная 

let arrdate3sm3n = []
var date3sm3n = 1661893200000;
for (let i = 0; i <= 100; i++) {
    date3sm3n += 691200000
    var dat = new Date(date3sm3n);
    let trueDat = dat.toLocaleDateString()
    arrdate3sm3n.push(trueDat)
}


// 1 выходной 

let arrdate3sm1v = []
var date3sm1v = 1661288400000;
for (let i = 0; i <= 100; i++) {
    date3sm1v += 691200000
    var dat = new Date(date3sm1v);
    let trueDat = dat.toLocaleDateString()
    arrdate3sm1v.push(trueDat)
}

// 2 выходной  

let arrdate3sm2v = []
var date3sm2v = 1661374800000;
for (let i = 0; i <= 100; i++) {
    date3sm2v += 691200000
    var dat = new Date(date3sm2v);
    let trueDat = dat.toLocaleDateString()
    arrdate3sm2v.push(trueDat)
}

// 3 выходной 

let arrdate3sm3v = []
var date3sm3v = 1661461200000;
for (let i = 0; i <= 100; i++) {
    date3sm3v += 691200000
    var dat = new Date(date3sm3v);
    let trueDat = dat.toLocaleDateString()
    arrdate3sm3v.push(trueDat)
}

//====================================================== Смена 4 ====================================

// 1 ночная  

let arrdate4sm1n = []
var date4sm1n = 1661374800000;
for (let i = 0; i <= 100; i++) {
    date4sm1n += 691200000
    var dat = new Date(date4sm1n);
    let trueDat = dat.toLocaleDateString()
    arrdate4sm1n.push(trueDat)
}



// 2 ночная  

let arrdate4sm2n = []
var date4sm2n = 1661461200000;
for (let i = 0; i <= 100; i++) {
    date4sm2n += 691200000
    var dat = new Date(date4sm2n);
    let trueDat = dat.toLocaleDateString()
    arrdate4sm2n.push(trueDat)
}




// 3 ночная 

let arrdate4sm3n = []
var date4sm3n = 1661547600000;
for (let i = 0; i <= 100; i++) {
    date4sm3n += 691200000
    var dat = new Date(date4sm3n);
    let trueDat = dat.toLocaleDateString()
    arrdate4sm3n.push(trueDat)
}

// 1 выходной 

let arrdate4sm1v = []
var date4sm1v = 1661634000000;
for (let i = 0; i <= 100; i++) {
    date4sm1v += 691200000
    var dat = new Date(date4sm1v);
    let trueDat = dat.toLocaleDateString()
    arrdate4sm1v.push(trueDat)
}

// 2 выходной  

let arrdate4sm2v = []
var date4sm2v = 1661720400000;
for (let i = 0; i <= 100; i++) {
    date4sm2v += 691200000
    var dat = new Date(date4sm2v);
    let trueDat = dat.toLocaleDateString()
    arrdate4sm2v.push(trueDat)
}

// 3 выходной 

let arrdate4sm3v = []
var date4sm3v = 1661806800000;
for (let i = 0; i <= 100; i++) {
    date4sm3v += 691200000
    var dat = new Date(date4sm3v);
    let trueDat = dat.toLocaleDateString()
    arrdate4sm3v.push(trueDat)
}


//=======================================================Даем классы td в соответствии статуса дня=====================
//=================================================================Смена 0=========================================


for (let i = 1; i <= 31; i++) {
    document.querySelector('.dayWeek' + i).addEventListener('click', function () {
        for (let k = 0; k < arrDay0SM.length; k++) {
            if (arrDay0SM[k].getAttribute("id") == i) {
                console.log(arrDay0SM[k])
                localStorage.setItem(arrDay0SM[k] + "vihodDay", "VD")

                arrDay0SM[k].classList.toggle(localStorage.getItem(arrDay0SM[k] + "vihodDay"))
            }

        }
    })
}


for (let i = 1; i <= 31; i++) {

    document.querySelector('.dayWeek' + i).addEventListener('dblclick', function () {
        prazdn = 0
        let sum = 0
        for (let k = 0; k < arrAllSM.length; k++) {
            // console.log(ABR)
            if (arrAllSM[k].getAttribute("id") == i) {

                localStorage.setItem(arrAllSM[k] + "prDay", "PD")
                arrAllSM[k].classList.toggle(localStorage.getItem(arrAllSM[k] + "prDay"))
                sum++
                localStorage.setItem(arrAllSM[k] + "prazdnik", sum / ABR.length)
            }
        }

    })

}

let prazdniki = function () {
    for (let k = 0; k < arrAllSM.length; k++) {
        return localStorage.getItem(arrAllSM[k] + "prazdnik")
    }
}
console.log(prazdniki())


// for (let i = 1; i <= 31; i++) {
//     document.querySelector('.dayWeek' + i).addEventListener('contextmenu', function () {
//         for (let k = 0; k < arrDay0SM.length; k++) {
//             if (arrDay0SM[k].getAttribute("id") == i) {
//                 arrDay0SM[k].classList.toggle("PD")

//             }
//         }
//     })
// }

// for (let k = 0; k < arrDay0SM.length; k++) {
//     for (let i = 0; i < arrdate0sm1v.length; i++) {
//         if (arrDay0SM[k].getAttribute("class").includes(arrdate0sm1v[i].slice(0, 2)) && arrdate0sm1v[i].slice(3, 5) == trueM && arrdate0smv[i].slice(6, 10) == trueY) {
//             arrDay0SM[k].classList.add("VD")
//         }
//     }
// }

// for (let k = 0; k < arrDay0SM.length; k++) {
//     for (let i = 0; i < arrdate0sm2v.length; i++) {
//         if (arrDay0SM[k].getAttribute("class").includes(arrdate0sm2v[i].slice(0, 2)) && arrdate0sm2v[i].slice(3, 5) == trueM && arrdate0sm2v[i].slice(6, 10) == trueY) {
//             arrDay0SM[k].classList.add("VD")
//         }
//     }
// }

//=================================================================Смена 1=========================================



//1 ночная 

for (let k = 0; k < arrDay1SM.length; k++) {
    for (let i = 0; i < arrdate1sm1n.length; i++) {
        if (arrDay1SM[k].getAttribute("class").includes(arrdate1sm1n[i].slice(0, 2)) && arrdate1sm1n[i].slice(3, 5) == trueM && arrdate1sm1n[i].slice(6, 10) == trueY) {
            arrDay1SM[k].classList.add("ND")
            arrDay1SM[k].classList.add("N4")
        }
    }
}

//2 ночная  

for (let k = 0; k < arrDay1SM.length; k++) {
    for (let i = 0; i < arrdate1sm2n.length; i++) {
        if (arrDay1SM[k].getAttribute("class").includes(arrdate1sm2n[i].slice(0, 2)) && arrdate1sm2n[i].slice(3, 5) == trueM && arrdate1sm2n[i].slice(6, 10) == trueY) {
            arrDay1SM[k].classList.add("ND")
            arrDay1SM[k].classList.add("N12")
        }
    }
}


//3 ночная  

for (let k = 0; k < arrDay1SM.length; k++) {
    for (let i = 0; i < arrdate1sm3n.length; i++) {
        if (arrDay1SM[k].getAttribute("class").includes(arrdate1sm3n[i].slice(0, 2)) && arrdate1sm3n[i].slice(3, 5) == trueM && arrdate1sm3n[i].slice(6, 10) == trueY) {
            arrDay1SM[k].classList.add("ND")
            arrDay1SM[k].classList.add("N8")
        }
    }
}


//1 выходной 

for (let k = 0; k < arrDay1SM.length; k++) {
    for (let i = 0; i < arrdate1sm1v.length; i++) {
        if (arrDay1SM[k].getAttribute("class").includes(arrdate1sm1v[i].slice(0, 2)) && arrdate1sm1v[i].slice(3, 5) == trueM && arrdate1sm1v[i].slice(6, 10) == trueY) {
            arrDay1SM[k].classList.add("VD")
        }
    }
}

//2 выходной 

for (let k = 0; k < arrDay1SM.length; k++) {
    for (let i = 0; i < arrdate1sm2v.length; i++) {
        if (arrDay1SM[k].getAttribute("class").includes(arrdate1sm2v[i].slice(0, 2)) && arrdate1sm2v[i].slice(3, 5) == trueM && arrdate1sm2v[i].slice(6, 10) == trueY) {
            arrDay1SM[k].classList.add("VD")
        }
    }
}


//3 выходной 

for (let k = 0; k < arrDay1SM.length; k++) {
    for (let i = 0; i < arrdate1sm3v.length; i++) {
        if (arrDay1SM[k].getAttribute("class").includes(arrdate1sm3v[i].slice(0, 2)) && arrdate1sm3v[i].slice(3, 5) == trueM && arrdate1sm3v[i].slice(6, 10) == trueY) {
            arrDay1SM[k].classList.add("VD")
        }
    }
}


//=================================================================Смена 2=========================================



//1 ночная 

for (let k = 0; k < arrDay2SM.length; k++) {
    for (let i = 0; i < arrdate2sm1n.length; i++) {
        if (arrDay2SM[k].getAttribute("class").includes(arrdate2sm1n[i].slice(0, 2)) && arrdate2sm1n[i].slice(3, 5) == trueM && arrdate2sm1n[i].slice(6, 10) == trueY) {
            arrDay2SM[k].classList.add("ND")
            arrDay2SM[k].classList.add("N4")
        }
    }
}

//2 ночная  

for (let k = 0; k < arrDay2SM.length; k++) {
    for (let i = 0; i < arrdate2sm2n.length; i++) {
        if (arrDay2SM[k].getAttribute("class").includes(arrdate2sm2n[i].slice(0, 2)) && arrdate2sm2n[i].slice(3, 5) == trueM && arrdate2sm2n[i].slice(6, 10) == trueY) {
            arrDay2SM[k].classList.add("ND")
            arrDay2SM[k].classList.add("N12")
        }
    }
}


//3 ночная  

for (let k = 0; k < arrDay2SM.length; k++) {
    for (let i = 0; i < arrdate2sm3n.length; i++) {
        if (arrDay2SM[k].getAttribute("class").includes(arrdate2sm3n[i].slice(0, 2)) && arrdate2sm3n[i].slice(3, 5) == trueM && arrdate2sm3n[i].slice(6, 10) == trueY) {
            arrDay2SM[k].classList.add("ND")
            arrDay2SM[k].classList.add("N8")
        }
    }
}

//1 выходной 

for (let k = 0; k < arrDay2SM.length; k++) {
    for (let i = 0; i < arrdate2sm1v.length; i++) {
        if (arrDay2SM[k].getAttribute("class").includes(arrdate2sm1v[i].slice(0, 2)) && arrdate2sm1v[i].slice(3, 5) == trueM && arrdate2sm1v[i].slice(6, 10) == trueY) {
            arrDay2SM[k].classList.add("VD")
        }
    }
}

//2 выходной 

for (let k = 0; k < arrDay2SM.length; k++) {
    for (let i = 0; i < arrdate2sm2v.length; i++) {
        if (arrDay2SM[k].getAttribute("class").includes(arrdate2sm2v[i].slice(0, 2)) && arrdate2sm2v[i].slice(3, 5) == trueM && arrdate2sm2v[i].slice(6, 10) == trueY) {
            arrDay2SM[k].classList.add("VD")
        }
    }
}


//3 выходной 

for (let k = 0; k < arrDay2SM.length; k++) {
    for (let i = 0; i < arrdate2sm3v.length; i++) {
        if (arrDay2SM[k].getAttribute("class").includes(arrdate2sm3v[i].slice(0, 2)) && arrdate2sm3v[i].slice(3, 5) == trueM && arrdate2sm3v[i].slice(6, 10) == trueY) {
            arrDay2SM[k].classList.add("VD")
        }
    }
}


//=================================================================Смена 3=========================================



//1 ночная 

for (let k = 0; k < arrDay3SM.length; k++) {
    for (let i = 0; i < arrdate3sm1n.length; i++) {
        if (arrDay3SM[k].getAttribute("class").includes(arrdate3sm1n[i].slice(0, 2)) && arrdate3sm1n[i].slice(3, 5) == trueM && arrdate3sm1n[i].slice(6, 10) == trueY) {
            arrDay3SM[k].classList.add("ND")
            arrDay3SM[k].classList.add("N4")
        }
    }
}

//2 ночная  

for (let k = 0; k < arrDay3SM.length; k++) {
    for (let i = 0; i < arrdate3sm2n.length; i++) {
        if (arrDay3SM[k].getAttribute("class").includes(arrdate3sm2n[i].slice(0, 2)) && arrdate3sm2n[i].slice(3, 5) == trueM && arrdate3sm2n[i].slice(6, 10) == trueY) {
            arrDay3SM[k].classList.add("ND")
            arrDay3SM[k].classList.add("N12")
        }
    }
}


//3 ночная  

for (let k = 0; k < arrDay3SM.length; k++) {
    for (let i = 0; i < arrdate3sm3n.length; i++) {
        if (arrDay3SM[k].getAttribute("class").includes(arrdate3sm3n[i].slice(0, 2)) && arrdate3sm3n[i].slice(3, 5) == trueM && arrdate3sm3n[i].slice(6, 10) == trueY) {
            arrDay3SM[k].classList.add("ND")
            arrDay3SM[k].classList.add("N8")
        }
    }
}

//1 выходной 

for (let k = 0; k < arrDay3SM.length; k++) {
    for (let i = 0; i < arrdate3sm1v.length; i++) {
        if (arrDay3SM[k].getAttribute("class").includes(arrdate3sm1v[i].slice(0, 2)) && arrdate3sm1v[i].slice(3, 5) == trueM && arrdate3sm1v[i].slice(6, 10) == trueY) {
            arrDay3SM[k].classList.add("VD")
        }
    }
}

//2 выходной 

for (let k = 0; k < arrDay3SM.length; k++) {
    for (let i = 0; i < arrdate3sm2v.length; i++) {
        if (arrDay3SM[k].getAttribute("class").includes(arrdate3sm2v[i].slice(0, 2)) && arrdate3sm2v[i].slice(3, 5) == trueM && arrdate3sm2v[i].slice(6, 10) == trueY) {
            arrDay3SM[k].classList.add("VD")
        }
    }
}


//3 выходной 

for (let k = 0; k < arrDay3SM.length; k++) {
    for (let i = 0; i < arrdate3sm3v.length; i++) {
        if (arrDay3SM[k].getAttribute("class").includes(arrdate3sm3v[i].slice(0, 2)) && arrdate3sm3v[i].slice(3, 5) == trueM && arrdate3sm3v[i].slice(6, 10) == trueY) {
            arrDay3SM[k].classList.add("VD")
        }
    }
}


//=================================================================Смена 4=========================================



//1 ночная 

for (let k = 0; k < arrDay4SM.length; k++) {
    for (let i = 0; i < arrdate4sm1n.length; i++) {
        if (arrDay4SM[k].getAttribute("class").includes(arrdate4sm1n[i].slice(0, 2)) && arrdate4sm1n[i].slice(3, 5) == trueM && arrdate4sm1n[i].slice(6, 10) == trueY) {
            arrDay4SM[k].classList.add("ND")
            arrDay4SM[k].classList.add("N4")
        }
    }
}

//2 ночная  

for (let k = 0; k < arrDay4SM.length; k++) {
    for (let i = 0; i < arrdate4sm2n.length; i++) {
        if (arrDay4SM[k].getAttribute("class").includes(arrdate4sm2n[i].slice(0, 2)) && arrdate4sm2n[i].slice(3, 5) == trueM && arrdate4sm2n[i].slice(6, 10) == trueY) {
            arrDay4SM[k].classList.add("ND")
            arrDay4SM[k].classList.add("N12")
        }
    }
}


//3 ночная  

for (let k = 0; k < arrDay4SM.length; k++) {
    for (let i = 0; i < arrdate4sm3n.length; i++) {
        if (arrDay4SM[k].getAttribute("class").includes(arrdate4sm3n[i].slice(0, 2)) && arrdate4sm3n[i].slice(3, 5) == trueM && arrdate4sm3n[i].slice(6, 10) == trueY) {
            arrDay4SM[k].classList.add("ND")
            arrDay4SM[k].classList.add("N8")
        }
    }
}

//1 выходной 

for (let k = 0; k < arrDay4SM.length; k++) {
    for (let i = 0; i < arrdate4sm1v.length; i++) {
        if (arrDay4SM[k].getAttribute("class").includes(arrdate4sm1v[i].slice(0, 2)) && arrdate4sm1v[i].slice(3, 5) == trueM && arrdate4sm1v[i].slice(6, 10) == trueY) {
            arrDay4SM[k].classList.add("VD")
        }
    }
}

//2 выходной 

for (let k = 0; k < arrDay4SM.length; k++) {
    for (let i = 0; i < arrdate4sm2v.length; i++) {
        if (arrDay4SM[k].getAttribute("class").includes(arrdate4sm2v[i].slice(0, 2)) && arrdate4sm2v[i].slice(3, 5) == trueM && arrdate4sm2v[i].slice(6, 10) == trueY) {
            arrDay4SM[k].classList.add("VD")
        }
    }
}


//3 выходной 

for (let k = 0; k < arrDay4SM.length; k++) {
    for (let i = 0; i < arrdate4sm3v.length; i++) {
        if (arrDay4SM[k].getAttribute("class").includes(arrdate4sm3v[i].slice(0, 2)) && arrdate4sm3v[i].slice(3, 5) == trueM && arrdate4sm3v[i].slice(6, 10) == trueY) {
            arrDay4SM[k].classList.add("VD")
        }
    }
}


//==============================================================Празники всем сменам=========================================

// let arrDayAll = [];
// for (let k = 1; k <= 31; k++) {
//     for (let www of document.querySelectorAll('.day' + k)) {
//         arrDayAll.push(www)
//     }
// }

// for (let k = 0; k < arrDayAll.length; k++) {
//     for (let i = 0; i < prazdniki.length; i++) {
//         if (arrDayAll[k].getAttribute("class").includes(prazdniki[i].slice(0, 2)) && prazdniki[i].slice(3, 5) == trueM && prazdniki[i].slice(6, 10) == trueY) {
//             arrDayAll[k].classList.add("PD")
//         }
//     }
// }




//Окрашивание смен



for (let i = 1; i <= ABR.length; i++) {
    let X = document.querySelector('.col' + i);
    if (i % 2 == 0)
        X.classList.add("colorGrey");
}

//Подсчет часов

function countHour() {
    for (let k = 1; k <= ABR.length; k++) {

        let sum = 0;
        let count = 0;
        for (let i = 1; i <= 31; i++) {
            let examination = +(document.querySelector(".col" + k).querySelector(".row" + i).innerHTML);
            if (isNaN(examination)) {
                continue;
            }
            else if (examination >= 1) {
                count++;
                sum += examination;

            }
            document.querySelector(".col" + k).querySelector(".row33").innerHTML = sum;
            document.querySelector(".col" + k).querySelector(".row32").innerHTML = count;
        }
    }
}

//Подсчет ночных часов

function countNightHour() {
    for (let k = 1; k <= ABR.length; k++) {

        let sum = 0;
        // let count = 0;
        for (let i = 1; i <= 31; i++) {
            let examination = +(document.querySelector(".col" + k).querySelector(".row" + i).innerHTML);
            if (isNaN(examination)) {
                continue;
            }
            else if (examination >= 1 && document.querySelector(".col" + k).querySelector(".row" + i).getAttribute("class").includes("ND")) {
                // count++;
                sum += examination;

            }
            document.querySelector(".col" + k).querySelector(".row34").innerHTML = sum;
            // document.querySelector(".col" + k).querySelector(".row32").innerHTML = count;
        }
    }
}

// Подсчет букв


function countWord() {
    for (let k = 1; k <= ABR.length; k++) {
        let K = [];
        let P = [];
        let B = [];
        let O = [];
        let D = [];
        let A = [];
        //let U = [];

        for (let i = 1; i <= 31; i++) {
            let examination = document.querySelector(".col" + k).querySelector(".row" + i).innerHTML;
            if (examination == 'К') {
                K.push(examination);
            } else if (examination == 'П') {
                P.push(examination);
            }
            else if (examination == 'Б') {
                B.push(examination);
            }
            else if (examination == 'О') {
                O.push(examination);
            }
            else if (examination == 'Д') {
                D.push(examination);
            }
            else if (examination == 'А') {
                A.push(examination);
            }
            // else {
            //     console.log(examination = 8)

            // }
            document.querySelector(".col" + k).querySelector(".row35").innerHTML = K.length;
            document.querySelector(".col" + k).querySelector(".row38").innerHTML = P.length;
            document.querySelector(".col" + k).querySelector(".row39").innerHTML = B.length;
            document.querySelector(".col" + k).querySelector(".row40").innerHTML = O.length;
            document.querySelector(".col" + k).querySelector(".row42").innerHTML = D.length;
            document.querySelector(".col" + k).querySelector(".row43").innerHTML = A.length;
        }

    }

}


// Подсчет праздничных дней

function countPrazHour() {
    for (let k = 1; k <= ABR.length; k++) {

        let sum = 0;
        // let count = 0;
        for (let i = 1; i <= 31; i++) {
            let examination = +(document.querySelector(".col" + k).querySelector(".row" + i).innerHTML);
            if (isNaN(examination)) {
                continue;
            }
            else if (examination >= 1 && document.querySelector(".col" + k).querySelector(".row" + i).getAttribute("class").includes("PD")) {
                // count++;
                sum += examination;

            }
            document.querySelector(".col" + k).querySelector(".row37").innerHTML = sum;
            // document.querySelector(".col" + k).querySelector(".row32").innerHTML = count;
        }
    }
}

//Подсчет проебаных часов



function countProeb() {
    for (let k = 1; k <= ABR.length; k++) {
        let sum = 0
        let abr = ""
        for (let i = 1; i <= 31; i++) {
            // sum = 0
            let examination = +(document.querySelector(".col" + k).querySelector(".row" + i).innerHTML);
            let atr = document.querySelector(".col" + k).querySelector(".row" + i)
            if (isNaN(examination) && atr.getAttribute("class").includes("N12")) {

                sum += 12
                abr = ABR[k - 1]
            }

            else if (isNaN(examination) && atr.getAttribute("class").includes("N8")) {

                sum += 8
                abr = ABR[k - 1]
            }

            else if (isNaN(examination) && atr.getAttribute("class").includes("N4")) {

                sum += 4
                abr = ABR[k - 1]
            }

            else if (isNaN(examination) && (atr.getAttribute("class").includes("N4") == false) && (atr.getAttribute("class").includes("N8") == false) && (atr.getAttribute("class").includes("N12") == false) && (atr.getAttribute("class").includes("VD") == false)) {

                sum += 12
                abr = ABR[k - 1]
            }
            else { continue; }

        }
        localStorage.setItem(abr + "per" + " " + "proebFact", sum)
    }
}


function minusPlan() {
    let sum = 0
    let abr = ""

    for (let i = 1; i <= 31; i++) {

        let atr = document.querySelector(".zero").querySelector(".row" + i)
        if (atr.getAttribute("class").includes("VD") || atr.getAttribute("class").includes("PD")) {
            continue;
        }

        for (let k = 0; k < SMENA1.length; k++) {
            if (document.querySelector("." + SMENA1[k])) {
                if (isNaN(+(document.querySelector("." + SMENA1[k]).querySelector(".day" + i).innerHTML))) {
                    abr = SMENA1[k]
                    localStorage.setItem(abr + "per" + " " + "minusPlan" + " " + i, (abr))
                }
            }
        }

        for (let k = 0; k < SMENA2.length; k++) {
            if (document.querySelector("." + SMENA2[k])) {
                if (isNaN(+(document.querySelector("." + SMENA2[k]).querySelector(".day" + i).innerHTML))) {
                    abr = SMENA2[k]
                    localStorage.setItem(abr + "per" + " " + "minusPlan" + " " + i, (abr))
                }
            }
        }

        for (let k = 0; k < SMENA3.length; k++) {
            if (document.querySelector("." + SMENA3[k])) {
                if (isNaN(+(document.querySelector("." + SMENA3[k]).querySelector(".day" + i).innerHTML))) {
                    abr = SMENA3[k]
                    localStorage.setItem(abr + "per" + " " + "minusPlan" + " " + i, (abr))
                }
            }
        }

        for (let k = 0; k < SMENA4.length; k++) {
            if (document.querySelector("." + SMENA4[k])) {
                if (isNaN(+(document.querySelector("." + SMENA4[k]).querySelector(".day" + i).innerHTML))) {
                    abr = SMENA4[k]
                    localStorage.setItem(abr + "per" + " " + "minusPlan" + " " + i, (abr))
                }
            }
        }
    }
}


let trueMinusPlan = function () {
    let arrFacK = []
    for (z = 1; z <= 31; z++) {
        for (let k = 0; k < ABR.length; k++) {
            let r = localStorage.getItem(ABR[k] + "per" + " " + "minusPlan" + " " + z)
            if (r == null) {
                continue
            }
            arrFacK.push(r + "per")
        }
    }
    var counts = {};
    arrFacK.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return counts
}




function countPraznMinus() {
    for (let k = 1; k <= ABR.length; k++) {
        let sum = 0
        let abr = ""
        for (let i = 1; i <= 31; i++) {
            // sum = 0
            let examination = +(document.querySelector(".col" + k).querySelector(".row" + i).innerHTML);
            let atr = document.querySelector(".col" + k).querySelector(".row" + i)
            if (examination > 0 && document.querySelector(".col" + k).querySelector(".row" + i).getAttribute("class").includes("PD")) {

                sum += document.querySelector(".col" + k).querySelector(".row" + i).innerHTML
                abr = ABR[k - 1]
            }

        }
        localStorage.setItem(abr + "per" + " " + "praznMinus", sum)
    }
}




//=============================================================================================Декадка===========================================================================



//Подсчет декретниц

let decRab = document.querySelectorAll('.decRab');
for (let www of decRab) {

    www.innerHTML = DECRAB.length;

}


let decITR = document.querySelectorAll('.decITR');
for (let www of decITR) {
    www.innerHTML = DECITR.length;
}

let decSPEC = document.querySelectorAll('.decSPEC');
for (let www of decSPEC) {
    www.innerHTML = DECSPEC.length;
}





//Подсчет "На работе"

//Первая декадка

function inWork1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + i).querySelector('.rowDek1').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek1').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek1').innerHTML = ytSPEC;
        }
    }
}

//Вторая декадка

function inWork2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek1').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek1').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek1').innerHTML = ytSPEC;
        }
    }
}


//Третья декадка

function inWork3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek1').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek1').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek1').innerHTML = ytSPEC;
        }
    }
}

//========================Подсчет женщин на работе==========

//Первая декадка

function inWork1FEM() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker") && xxx.getAttribute("class").includes("female")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR") && xxx.getAttribute("class").includes("female")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC") && xxx.getAttribute("class").includes("female")) {
                ytSPEC++;
            }


            document.querySelector('.colDek' + i).querySelector('.femRab').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.femITR').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.femSPEC').innerHTML = ytSPEC;
        }
    }
}

//Вторая декадка

function inWork2FEM() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker") && xxx.getAttribute("class").includes("female")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR") && xxx.getAttribute("class").includes("female")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC") && xxx.getAttribute("class").includes("female")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 30)).querySelector('.femRab').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.femITR').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.femSPEC').innerHTML = ytSPEC;
        }
    }
}


//Третья декадка

function inWork3FEM() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker") && xxx.getAttribute("class").includes("female")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR") && xxx.getAttribute("class").includes("female")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC") && xxx.getAttribute("class").includes("female")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 60)).querySelector('.femRab').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.femITR').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.femSPEC').innerHTML = ytSPEC;
        }
    }
}

//========================Общесписочный подсчет==========

//Первая декадка

function ObPod1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }


            document.querySelector('.colDek' + i).querySelector('.sredChisRab').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.sredChisITR').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.sredChisSPEC').innerHTML = ytSPEC;
        }
    }
}

//Вторая декадка

function ObPod2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 30)).querySelector('.sredChisRab').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.sredChisITR').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.sredChisSPEC').innerHTML = ytSPEC;
        }
    }
}


//Третья декадка

function ObPod3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML !== "" && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 60)).querySelector('.sredChisRab').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.sredChisITR').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.sredChisSPEC').innerHTML = ytSPEC;
        }
    }
}

//Подсчет отпусков


//Первая декадка

function inOTP1() {

    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytOTPWorker = 0;
        let ytOTPITR = 0;
        let ytOTPSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("Wopker")) {
                ytOTPWorker++;
            } else if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("ITR")) {
                ytOTPITR++;
            } else if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("SPEC")) {
                ytOTPSPEC++;
            }
            document.querySelector('.colDek' + (i)).querySelector('.rowDek2').innerHTML = ytOTPWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek2').innerHTML = ytOTPITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek2').innerHTML = ytOTPSPEC;
        }
    }
}

//Вторая декадка
function inOTP2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytOTPWorker = 0;
        let ytOTPITR = 0;
        let ytOTPSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("Wopker")) {
                ytOTPWorker++;

            }
            else if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("ITR")) {
                ytOTPITR++;
            } else if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("SPEC")) {
                ytOTPSPEC++;
            }
            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek2').innerHTML = ytOTPWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek2').innerHTML = ytOTPITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek2').innerHTML = ytOTPSPEC;
        }
    }
}

//Третья декадка

function inOTP3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));
        let ytOTPWorker = 0;
        let ytOTPITR = 0;
        let ytOTPSPEC = 0;

        for (let xxx of dayX) {

            if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("Wopker")) {
                ytOTPWorker++;
            }
            else if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("ITR")) {
                ytOTPITR++;
            } else if (xxx.innerHTML == "О" && xxx.getAttribute("class").includes("SPEC")) {
                ytOTPSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek2').innerHTML = ytOTPWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek2').innerHTML = ytOTPITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek2').innerHTML = ytOTPSPEC;

        }
    }
}


//Подсчет больничных

//Первая декадка

function inBOL1() {

    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytBOLWorker = 0;
        let ytBOLITR = 0;
        let ytBOLSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("Wopker")) {
                ytBOLWorker++;
            } else if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("ITR")) {
                ytBOLITR++;
            } else if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("SPEC")) {
                ytBOLSPEC++;
            }
            document.querySelector('.colDek' + (i)).querySelector('.rowDek4').innerHTML = ytBOLWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek4').innerHTML = ytBOLITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek4').innerHTML = ytBOLSPEC;
        }
    }
}

//Вторая декадка
function inBOL2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytBOLWorker = 0;
        let ytBOLITR = 0;
        let ytBOLSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("Wopker")) {
                ytBOLWorker++;
            } else if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("ITR")) {
                ytBOLITR++;
            } else if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("SPEC")) {
                ytBOLSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek4').innerHTML = ytBOLWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek4').innerHTML = ytBOLITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek4').innerHTML = ytBOLSPEC;
        }
    }
}

//Третья декадка

function inBOL3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytBOLWorker = 0;
        let ytBOLITR = 0;
        let ytBOLSPEC = 0;

        for (let xxx of dayX) {

            if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("Wopker")) {
                ytBOLWorker++;
            } else if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("ITR")) {
                ytBOLITR++;
            } else if (xxx.innerHTML == "Б" && xxx.getAttribute("class").includes("SPEC")) {
                ytBOLSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek4').innerHTML = ytBOLWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek4').innerHTML = ytBOLITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek4').innerHTML = ytBOLSPEC;

        }
    }
}


//Подсчет прочих невыходов(Командировка, Доноры)

//Первая декадка

function inPROCH1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytPROCHWorker = 0;
        let ytPROCHITR = 0;
        let ytPROCHSPEC = 0;
        for (let xxx of dayX) {

            if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("Wopker")) {
                ytPROCHWorker++;
            } else if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("ITR")) {
                ytPROCHITR++;
            } else if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("SPEC")) {
                ytPROCHSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek6').innerHTML = ytPROCHWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek6').innerHTML = ytPROCHITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek6').innerHTML = ytPROCHSPEC;
        }
    }
}

//Вторая декадка

function inPROCH2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytPROCHWorker = 0;
        let ytPROCHITR = 0;
        let ytPROCHSPEC = 0;
        for (let xxx of dayX) {

            if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("Wopker")) {
                ytPROCHWorker++;
            } else if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("ITR")) {
                ytPROCHITR++;
            } else if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("SPEC")) {
                ytPROCHSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek6').innerHTML = ytPROCHWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek6').innerHTML = ytPROCHITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek6').innerHTML = ytPROCHSPEC;
        }
    }
}

//Третья декадка

function inPROCH3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytPROCHWorker = 0;
        let ytPROCHITR = 0;
        let ytPROCHSPEC = 0;
        for (let xxx of dayX) {

            if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("Wopker")) {
                ytPROCHWorker++;
            } else if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("ITR")) {
                ytPROCHITR++;
            } else if ((xxx.innerHTML == "К" || xxx.innerHTML == "Д") && xxx.getAttribute("class").includes("SPEC")) {
                ytPROCHSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek6').innerHTML = ytPROCHWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek6').innerHTML = ytPROCHITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek6').innerHTML = ytPROCHSPEC;
        }
    }
}




//Подсчет разрешенных администрацией

//Первая декадка

function inRAZR1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytRAZRWorker = 0;
        let ytRAZRITR = 0;
        let ytRAZRSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("Wopker")) {
                ytRAZRWorker++;
            } else if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("ITR")) {
                ytRAZRITR++;
            } else if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("SPEC")) {
                ytRAZRSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek7').innerHTML = ytRAZRWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek7').innerHTML = ytRAZRITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek7').innerHTML = ytRAZRSPEC;
        }
    }
}

//Вторая декадка 

function inRAZR2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytRAZRWorker = 0;
        let ytRAZRITR = 0;
        let ytRAZRSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("Wopker")) {
                ytRAZRWorker++;
            } else if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("ITR")) {
                ytRAZRITR++;
            } else if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("SPEC")) {
                ytRAZRSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek7').innerHTML = ytRAZRWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek7').innerHTML = ytRAZRITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek7').innerHTML = ytRAZRSPEC;
        }
    }
}

//Третья декадка

function inRAZR3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytRAZRWorker = 0;
        let ytRAZRITR = 0;
        let ytRAZRSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("Wopker")) {
                ytRAZRWorker++;
            } else if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("ITR")) {
                ytRAZRITR++;
            } else if (xxx.innerHTML == "А" && xxx.getAttribute("class").includes("SPEC")) {
                ytRAZRSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek7').innerHTML = ytRAZRWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek7').innerHTML = ytRAZRITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek7').innerHTML = ytRAZRSPEC;
        }
    }
}

//Подсчет прогулов

//Первая декадка

function inPROG1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytPROGRWorker = 0;
        let ytPROGITR = 0;
        let ytORAGSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("Wopker")) {
                ytPROGRWorker++;
            } else if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("ITR")) {
                ytPROGITR++;
            } else if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("SPEC")) {
                ytORAGSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek8').innerHTML = ytPROGRWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek8').innerHTML = ytPROGITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek8').innerHTML = ytORAGSPEC;
        }
    }
}

//Вторая декадка 

function inPROG2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytPROGRWorker = 0;
        let ytPROGITR = 0;
        let ytORAGSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("Wopker")) {
                ytPROGRWorker++;
            } else if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("ITR")) {
                ytPROGITR++;
            } else if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("SPEC")) {
                ytORAGSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek8').innerHTML = ytPROGRWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek8').innerHTML = ytPROGITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek8').innerHTML = ytORAGSPEC;
        }
    }
}

//Третья декадка

function inPROG3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytPROGRWorker = 0;
        let ytPROGITR = 0;
        let ytORAGSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("Wopker")) {
                ytPROGRWorker++;
            } else if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("ITR")) {
                ytPROGITR++;
            } else if (xxx.innerHTML == "П" && xxx.getAttribute("class").includes("SPEC")) {
                ytORAGSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek8').innerHTML = ytPROGRWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek8').innerHTML = ytPROGITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek8').innerHTML = ytORAGSPEC;
        }
    }
}



//Подсчет вЫходных

//Первая декадка

function inVIH1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytVIHWorker = 0;
        let ytVIHITR = 0;
        let ytVIHSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("Wopker")) {
                ytVIHWorker++;
            } else if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("ITR")) {
                ytVIHITR++;
            } else if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("SPEC")) {
                ytVIHSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek10').innerHTML = ytVIHWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek10').innerHTML = ytVIHITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek10').innerHTML = ytVIHSPEC;
        }
    }
}

//Вторая декадка 

function inVIH2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytVIHWorker = 0;
        let ytVIHITR = 0;
        let ytVIHSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("Wopker")) {
                ytVIHWorker++;
            } else if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("ITR")) {
                ytVIHITR++;
            } else if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("SPEC")) {
                ytVIHSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek10').innerHTML = ytVIHWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek10').innerHTML = ytVIHITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek10').innerHTML = ytVIHSPEC;
        }
    }
}

//Третья декадка

function inVIH3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytVIHWorker = 0;
        let ytVIHITR = 0;
        let ytVIHSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("Wopker")) {
                ytVIHWorker++;
            } else if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("ITR")) {
                ytVIHITR++;
            } else if (xxx.innerHTML == "В" && xxx.getAttribute("class").includes("SPEC")) {
                ytVIHSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek10').innerHTML = ytVIHWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek10').innerHTML = ytVIHITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek10').innerHTML = ytVIHSPEC;
        }
    }
}

//Подсчет общих часов

//Первая декадка



function inHOUER1() {
    for (let k = 1; k <= 12; k++) {
        for (let i = 1; i <= 10; i++) {
            let dayX = document.querySelectorAll('.day' + i);

            let ytVIHWorker = 0;
            let ytVIHITR = 0;
            let ytVIHSPEC = 0;
            for (let xxx of dayX) {
                let K = String(k)
                if (xxx.innerHTML == K && xxx.getAttribute("class").includes("Wopker")) {
                    ytVIHWorker++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("ITR")) {
                    ytVIHITR++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("SPEC")) {
                    ytVIHSPEC++;
                }

                document.querySelector('.colDek' + (i)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHWorker;
                document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHITR;
                document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHSPEC;
            }
        }
    }
}

//Вторая декадка 

function inHOUER2() {
    for (let k = 1; k <= 12; k++) {
        for (let i = 1; i <= 10; i++) {
            let dayX = document.querySelectorAll('.day' + (i + 10));

            let ytVIHWorker = 0;
            let ytVIHITR = 0;
            let ytVIHSPEC = 0;
            for (let xxx of dayX) {
                let K = String(k)
                if (xxx.innerHTML == K && xxx.getAttribute("class").includes("Wopker")) {
                    ytVIHWorker++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("ITR")) {
                    ytVIHITR++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("SPEC")) {
                    ytVIHSPEC++;
                }

                document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHWorker;
                document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHITR;
                document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHSPEC;
            }
        }
    }
}

//Третья декадка

function inHOUER3() {
    for (let k = 1; k <= 12; k++) {
        for (let i = 1; i <= 11; i++) {
            let dayX = document.querySelectorAll('.day' + (i + 20));

            let ytVIHWorker = 0;
            let ytVIHITR = 0;
            let ytVIHSPEC = 0;
            for (let xxx of dayX) {
                let K = String(k)
                if (xxx.innerHTML == K && xxx.getAttribute("class").includes("Wopker")) {
                    ytVIHWorker++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("ITR")) {
                    ytVIHITR++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("SPEC")) {
                    ytVIHSPEC++;
                }

                document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHWorker;
                document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHITR;
                document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHSPEC;
            }
        }
    }
}

// =====================================================================================Переработка ============================================================================================

//=======================================================================================1 смена=================================================================================

//Добавление строк

for (let k = 1; k <= SMENAF1.length; k++) {
    let nodet = document.createElement('tr');
    nodet.innerHTML = SMENAF1[k - 1];
    nodet.classList.add(SMENA1[k - 1] + "per");
    nodet.classList.add("colPER1sm" + k);

    for (let i = 1; i <= 5; i++) {
        let node = document.createElement('td');
        node.classList.add("rowPER1sm" + i);
        wrapPer1.append(nodet);
        nodet.append(node);
    }
}

//Устанавливаем план, факт и +/-


for (let i = 0; i < plan1SM.length; i++) {
    for (let k = 1; k <= SMENAF1.length; k++) {
        if (plan1SM[i].data.slice(0, 2) == trueM && plan1SM[i].data.slice(3, 7) == trueY) {
            let PLAN = document.querySelector(".colPER1sm" + k).querySelector(".rowPER1sm1")
            let arrValueTrueMinusPlan = Object.values(trueMinusPlan());
            let arrItemTrueMinusPlan = Object.getOwnPropertyNames(trueMinusPlan());
            PLAN.innerHTML = plan1SM[i].plan
            for (let w = 0; w < arrItemTrueMinusPlan.length; w++) {
                if (document.querySelector(".colPER1sm" + k).getAttribute("class").includes(arrItemTrueMinusPlan[w])) {
                    PLAN.innerHTML = plan1SM[i].plan - (arrValueTrueMinusPlan[w] * 8);
                    localStorage.setItem(SMENA1[k - 1] + "per" + " " + "razn-", PLAN.innerHTML)
                }
            }
        }
    }
}




for (let i = 0; i < plan1SM.length; i++) {
    for (let n = 0; n < SMENA1.length; n++) {
        let FACT = document.querySelector("." + SMENA1[n] + "per").querySelector(".rowPER1sm3")
        FACT.innerHTML = plan1SM[i].fact
        if (plan1SM[i].data.slice(0, 2) == trueM && plan1SM[i].data.slice(3, 7) == trueY && +(localStorage.getItem(SMENA1[n] + "per" + " " + "proebFact")) > 0) {
            FACT.innerHTML = plan1SM[i].fact - localStorage.getItem(SMENA1[n] + "per" + " " + "proebFact")
            localStorage.setItem(SMENA1[n] + "per" + " " + "razn+", plan1SM[i].fact - localStorage.getItem(SMENA1[n] + "per" + " " + "proebFact"))
        }
    }
}



for (let i = 0; i < SMENA1.length; i++) {
    let plusMinus = document.querySelector("." + SMENA1[i] + "per").querySelector(".rowPER1sm4")
    for (let k = 0; k < plan1SM.length; k++) {
        if (plan1SM[k].data.slice(0, 2) == trueM && plan1SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA1[i] + "per" + " " + "razn+") == 0 && localStorage.getItem(SMENA1[i] + "per" + " " + "razn-") > 0) {
            console.log(plan1SM[k].fact)
            console.log(localStorage.getItem(SMENA1[i] + "per" + " " + "razn-"))
            plusMinus.innerHTML = plan1SM[k].fact - localStorage.getItem(SMENA1[i] + "per" + " " + "razn-")
        }
        else if (plan1SM[k].data.slice(0, 2) == trueM && plan1SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA1[i] + "per" + " " + "razn+") > 0 && localStorage.getItem(SMENA1[i] + "per" + " " + "razn-") == 0) {
            plusMinus.innerHTML = localStorage.getItem(SMENA1[i] + "per" + " " + "razn+") - plan1SM[k].plan
        }
        else {
            plusMinus.innerHTML = localStorage.getItem(SMENA1[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA1[i] + "per" + " " + "razn-")
        }
    }

}


for (let i = 0; i < SMENA1.length; i++) {
    for (let k = 0; k < prazdniki(); k++) {
        let truePererabot = document.querySelector("." + SMENA1[i] + "per").querySelector(".rowPER1sm5")
        truePererabot.innerHTML = (localStorage.getItem(SMENA1[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA1[i] + "per" + " " + "razn-")) - localStorage.getItem(SMENA1[i] + "per" + " " + "praznMinus")

    }
}



//=======================================================================================2 смена=================================================================================

//Добавление строк

for (let k = 1; k <= SMENAF2.length; k++) {
    let nodet = document.createElement('tr');
    nodet.innerHTML = SMENAF2[k - 1];
    nodet.classList.add(SMENA2[k - 1] + "per");
    nodet.classList.add("colPER2sm" + k);

    for (let i = 1; i <= 5; i++) {
        let node = document.createElement('td');
        node.classList.add("rowPER2sm" + i);
        wrapPer2.append(nodet);
        nodet.append(node);
    }
}

//Устанавливаем план, факт и +/-

for (let i = 0; i < plan2SM.length; i++) {
    for (let k = 1; k <= SMENAF2.length; k++) {
        if (plan2SM[i].data.slice(0, 2) == trueM && plan2SM[i].data.slice(3, 7) == trueY) {
            let PLAN = document.querySelector(".colPER2sm" + k).querySelector(".rowPER2sm1")
            let arrValueTrueMinusPlan = Object.values(trueMinusPlan());
            let arrItemTrueMinusPlan = Object.getOwnPropertyNames(trueMinusPlan());
            PLAN.innerHTML = plan2SM[i].plan

            for (let w = 0; w < arrItemTrueMinusPlan.length; w++) {
                if (document.querySelector(".colPER2sm" + k).getAttribute("class").includes(arrItemTrueMinusPlan[w])) {
                    PLAN.innerHTML = plan2SM[i].plan - (arrValueTrueMinusPlan[w] * 8);
                    localStorage.setItem(SMENA2[k - 1] + "per" + " " + "razn-", PLAN.innerHTML)
                }
            }
        }
    }
}


for (let i = 0; i < plan2SM.length; i++) {
    for (let n = 0; n < SMENA2.length; n++) {
        let FACT = document.querySelector("." + SMENA2[n] + "per").querySelector(".rowPER2sm3")
        FACT.innerHTML = plan2SM[i].fact
        if (plan2SM[i].data.slice(0, 2) == trueM && plan2SM[i].data.slice(3, 7) == trueY && +(localStorage.getItem(SMENA2[n] + "per" + " " + "proebFact")) > 0) {
            FACT.innerHTML = plan2SM[i].fact - localStorage.getItem(SMENA2[n] + "per" + " " + "proebFact")
            localStorage.setItem(SMENA2[n] + "per" + " " + "razn+", plan2SM[i].fact - localStorage.getItem(SMENA2[n] + "per" + " " + "proebFact"))
        }
    }
}


for (let i = 0; i < SMENA2.length; i++) {
    let plusMinus = document.querySelector("." + SMENA2[i] + "per").querySelector(".rowPER2sm4")
    for (let k = 0; k < plan2SM.length; k++) {
        if (plan2SM[k].data.slice(0, 2) == trueM && plan2SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA2[i] + "per" + " " + "razn+") == 0 && localStorage.getItem(SMENA2[i] + "per" + " " + "razn-") > 0) {
            plusMinus.innerHTML = plan2SM[k].fact - localStorage.getItem(SMENA2[i] + "per" + " " + "razn-")
        }
        else if (plan2SM[k].data.slice(0, 2) == trueM && plan2SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA2[i] + "per" + " " + "razn+") > 0 && localStorage.getItem(SMENA2[i] + "per" + " " + "razn-") == 0) {
            plusMinus.innerHTML = localStorage.getItem(SMENA2[i] + "per" + " " + "razn+") - plan2SM[k].plan
        }
        else {
            plusMinus.innerHTML = localStorage.getItem(SMENA2[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA2[i] + "per" + " " + "razn-")
        }
    }

}

for (let i = 0; i < SMENA2.length; i++) {
    for (let k = 0; k < prazdniki(); k++) {
        let truePererabot = document.querySelector("." + SMENA2[i] + "per").querySelector(".rowPER2sm5")
        truePererabot.innerHTML = (localStorage.getItem(SMENA2[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA2[i] + "per" + " " + "razn-")) - localStorage.getItem(SMENA2[i] + "per" + " " + "praznMinus")

    }
}

//=======================================================================================3 смена=================================================================================

//Добавление строк

for (let k = 1; k <= SMENAF3.length; k++) {
    let nodet = document.createElement('tr');
    nodet.innerHTML = SMENAF3[k - 1];
    nodet.classList.add(SMENA3[k - 1] + "per");
    nodet.classList.add("colPER3sm" + k);

    for (let i = 1; i <= 5; i++) {
        let node = document.createElement('td');
        node.classList.add("rowPER3sm" + i);
        wrapPer3.append(nodet);
        nodet.append(node);
    }
}

//Устанавливаем план, факт и +/-

for (let i = 0; i < plan3SM.length; i++) {
    for (let k = 1; k <= SMENAF3.length; k++) {
        if (plan3SM[i].data.slice(0, 2) == trueM && plan3SM[i].data.slice(3, 7) == trueY) {
            let PLAN = document.querySelector(".colPER3sm" + k).querySelector(".rowPER3sm1")
            let arrValueTrueMinusPlan = Object.values(trueMinusPlan());
            let arrItemTrueMinusPlan = Object.getOwnPropertyNames(trueMinusPlan());
            PLAN.innerHTML = plan3SM[i].plan
            for (let w = 0; w < arrItemTrueMinusPlan.length; w++) {
                if (document.querySelector(".colPER3sm" + k).getAttribute("class").includes(arrItemTrueMinusPlan[w])) {
                    PLAN.innerHTML = plan3SM[i].plan - (arrValueTrueMinusPlan[w] * 8);
                    localStorage.setItem(SMENA3[k - 1] + "per" + " " + "razn-", PLAN.innerHTML)
                }
            }
        }
    }
}


for (let i = 0; i < plan3SM.length; i++) {
    for (let n = 0; n < SMENA3.length; n++) {
        let FACT = document.querySelector("." + SMENA3[n] + "per").querySelector(".rowPER3sm3")
        FACT.innerHTML = plan3SM[i].fact
        if (plan3SM[i].data.slice(0, 2) == trueM && plan3SM[i].data.slice(3, 7) == trueY && +(localStorage.getItem(SMENA3[n] + "per" + " " + "proebFact")) > 0) {
            FACT.innerHTML = plan3SM[i].fact - localStorage.getItem(SMENA3[n] + "per" + " " + "proebFact")
            localStorage.setItem(SMENA3[n] + "per" + " " + "razn+", plan3SM[i].fact - localStorage.getItem(SMENA3[n] + "per" + " " + "proebFact"))
        }
    }
}

for (let i = 0; i < SMENA3.length; i++) {
    let plusMinus = document.querySelector("." + SMENA3[i] + "per").querySelector(".rowPER3sm4")
    for (let k = 0; k < plan3SM.length; k++) {
        if (plan3SM[k].data.slice(0, 2) == trueM && plan3SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA3[i] + "per" + " " + "razn+") == 0 && localStorage.getItem(SMENA3[i] + "per" + " " + "razn-") > 0) {
            plusMinus.innerHTML = plan3SM[k].fact - localStorage.getItem(SMENA3[i] + "per" + " " + "razn-")
        }
        else if (plan3SM[k].data.slice(0, 2) == trueM && plan3SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA3[i] + "per" + " " + "razn+") > 0 && localStorage.getItem(SMENA3[i] + "per" + " " + "razn-") == 0) {
            plusMinus.innerHTML = localStorage.getItem(SMENA3[i] + "per" + " " + "razn+") - plan3SM[k].plan
        }
        else {
            plusMinus.innerHTML = localStorage.getItem(SMENA3[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA3[i] + "per" + " " + "razn-")
        }
    }

}

for (let i = 0; i < SMENA3.length; i++) {
    for (let k = 0; k < prazdniki(); k++) {
        let truePererabot = document.querySelector("." + SMENA3[i] + "per").querySelector(".rowPER3sm5")
        truePererabot.innerHTML = (localStorage.getItem(SMENA3[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA3[i] + "per" + " " + "razn-")) - localStorage.getItem(SMENA3[i] + "per" + " " + "praznMinus")

    }
}

//=======================================================================================4 смена=================================================================================

//Добавление строк

for (let k = 1; k <= SMENAF4.length; k++) {
    let nodet = document.createElement('tr');
    nodet.innerHTML = SMENAF4[k - 1];
    nodet.classList.add(SMENA4[k - 1] + "per");
    nodet.classList.add("colPER4sm" + k);

    for (let i = 1; i <= 5; i++) {
        let node = document.createElement('td');
        node.classList.add("rowPER4sm" + i);
        wrapPer4.append(nodet);
        nodet.append(node);
    }
}

//Устанавливаем план, факт и +/-

for (let i = 0; i < plan4SM.length; i++) {
    for (let k = 1; k <= SMENAF4.length; k++) {
        if (plan4SM[i].data.slice(0, 2) == trueM && plan4SM[i].data.slice(3, 7) == trueY) {
            let PLAN = document.querySelector(".colPER4sm" + k).querySelector(".rowPER4sm1")
            let arrValueTrueMinusPlan = Object.values(trueMinusPlan());
            let arrItemTrueMinusPlan = Object.getOwnPropertyNames(trueMinusPlan());
            PLAN.innerHTML = plan4SM[i].plan
            for (let w = 0; w < arrItemTrueMinusPlan.length; w++) {
                if (document.querySelector(".colPER4sm" + k).getAttribute("class").includes(arrItemTrueMinusPlan[w])) {
                    PLAN.innerHTML = plan4SM[i].plan - (arrValueTrueMinusPlan[w] * 8);
                    localStorage.setItem(SMENA4[k - 1] + "per" + " " + "razn-", PLAN.innerHTML)
                }
            }
        }
    }
}


for (let i = 0; i < plan4SM.length; i++) {
    for (let n = 0; n < SMENA4.length; n++) {
        let FACT = document.querySelector("." + SMENA4[n] + "per").querySelector(".rowPER4sm3")
        FACT.innerHTML = plan4SM[i].fact
        if (plan4SM[i].data.slice(0, 2) == trueM && plan4SM[i].data.slice(3, 7) == trueY && +(localStorage.getItem(SMENA4[n] + "per" + " " + "proebFact")) > 0) {
            FACT.innerHTML = plan4SM[i].fact - localStorage.getItem(SMENA4[n] + "per" + " " + "proebFact")
            localStorage.setItem(SMENA4[n] + "per" + " " + "razn+", plan4SM[i].fact - localStorage.getItem(SMENA4[n] + "per" + " " + "proebFact"))
        }
    }
}


for (let i = 0; i < SMENA4.length; i++) {
    let plusMinus = document.querySelector("." + SMENA4[i] + "per").querySelector(".rowPER4sm4")
    for (let k = 0; k < plan4SM.length; k++) {
        if (plan4SM[k].data.slice(0, 2) == trueM && plan4SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA4[i] + "per" + " " + "razn+") == 0 && localStorage.getItem(SMENA4[i] + "per" + " " + "razn-") > 0) {
            plusMinus.innerHTML = plan4SM[k].fact - localStorage.getItem(SMENA4[i] + "per" + " " + "razn-")
        }
        else if (plan4SM[k].data.slice(0, 2) == trueM && plan4SM[k].data.slice(3, 7) == trueY && localStorage.getItem(SMENA4[i] + "per" + " " + "razn+") > 0 && localStorage.getItem(SMENA4[i] + "per" + " " + "razn-") == 0) {
            plusMinus.innerHTML = localStorage.getItem(SMENA4[i] + "per" + " " + "razn+") - plan4SM[k].plan
        }
        else {
            plusMinus.innerHTML = localStorage.getItem(SMENA4[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA4[i] + "per" + " " + "razn-")
        }
    }

}

for (let i = 0; i < SMENA4.length; i++) {
    for (let k = 0; k < prazdniki(); k++) {
        let truePererabot = document.querySelector("." + SMENA4[i] + "per").querySelector(".rowPER4sm5")
        truePererabot.innerHTML = (localStorage.getItem(SMENA4[i] + "per" + " " + "razn+") - localStorage.getItem(SMENA4[i] + "per" + " " + "razn-")) - localStorage.getItem(SMENA4[i] + "per" + " " + "praznMinus")

    }
}

//================================================================================ Настройка localStorage =======================================================================

document.querySelector('.storageTab').addEventListener('click', function () {
    for (let i = 0; i < arrID.length; i++) {
        let exInner = document.querySelector('#r' + i).innerHTML;
        localStorage.setItem("a" + i, exInner)
       

    }

}

)


document.querySelector('.onloadTab').addEventListener('click', function r(e) {
    for (let i = 0; i < arrID.length; i++) {
        if (localStorage.getItem('a' + i) !== "") {
            document.querySelector('#r' + i).innerHTML = localStorage.getItem('a' + i);
        }
    }
})

document.querySelector('.clearTab').addEventListener('click', function () {
    let exsParol = prompt('Введите пароль');
    if (exsParol==parolOCH){
        
    
    
        
    


    for (let i = 0; i < arrID.length; i++) {
        document.querySelector('#r' + i).innerHTML = '';
        window.location.reload()
    }


    for (let i = 1; i <= 31; i++) {
        for (let k = 1; k <= ABR.length; k++) {
            localStorage.setItem(ABR[k] + "per" + " " + "minusPlan" + " " + i, " ")
            localStorage.setItem(ABR[k] + "per" + " " + "proebFact", " ")
            localStorage.setItem(ABR[k] + "per" + " " + "razn+", 0)
            localStorage.setItem(ABR[k] + "per" + " " + "razn-", 0)
            localStorage.setItem(ABR[k] + "per" + " " + "praznMinus", 0)
            localStorage.setItem(arrAllSM[k] + "prazdnik", 0)

        }
    }
}
else{
    alert("Неверный пароль")
}
})


for (let i = 0; i < plan1SM.length; i++) {
    for (let n = 0; n < SMENA1.length; n++) {
        if (plan1SM[i].data.slice(0, 2) == trueM && plan1SM[i].data.slice(3, 7) == trueY && document.querySelector("." + SMENA1[n] + "per").querySelector("." + "rowPER1sm4").innerHTML == 0) {
            document.querySelector("." + SMENA1[n] + "per").querySelector("." + "rowPER1sm4").innerHTML = (plan1SM[i].fact - localStorage.getItem(SMENA1[n] + "per" + " " + "razn+")) - (plan1SM[i].plan - localStorage.getItem(SMENA1[n] + "per" + " " + "razn-"))
            console.log(plan1SM[i].plan)
            document.querySelector("." + SMENA1[n] + "per").querySelector("." + "rowPER1sm5").innerHTML = plan1SM[i].fact - plan1SM[i].plan - localStorage.getItem(SMENA1[n] + "per" + " " + "praznMinus")
        }
    }
}



for (let i = 0; i < plan1SM.length; i++) {
    for (let n = 0; n < SMENA1.length; n++) {
        if (plan1SM[i].data.slice(0, 2) == trueM && plan1SM[i].data.slice(3, 7) == trueY && document.querySelector("." + SMENA1[n] + "per").querySelector("." + "rowPER1sm4").innerHTML == 0) {
            document.querySelector("." + SMENA1[n] + "per").querySelector("." + "rowPER1sm4").innerHTML = plan1SM[i].fact - plan1SM[i].plan
            document.querySelector("." + SMENA1[n] + "per").querySelector("." + "rowPER1sm5").innerHTML = plan1SM[i].fact - plan1SM[i].plan - localStorage.getItem(SMENA1[n] + "per" + " " + "praznMinus")
        }
    }
}

for (let i = 0; i < plan2SM.length; i++) {
    for (let n = 0; n < SMENA2.length; n++) {
        if (plan2SM[i].data.slice(0, 2) == trueM && plan2SM[i].data.slice(3, 7) == trueY && document.querySelector("." + SMENA2[n] + "per").querySelector("." + "rowPER2sm4").innerHTML == 0) {
            document.querySelector("." + SMENA2[n] + "per").querySelector("." + "rowPER2sm4").innerHTML = plan2SM[i].fact - plan2SM[i].plan
            document.querySelector("." + SMENA2[n] + "per").querySelector("." + "rowPER2sm5").innerHTML = plan2SM[i].fact - plan2SM[i].plan - localStorage.getItem(SMENA2[n] + "per" + " " + "praznMinus")
        }
    }
}


for (let i = 0; i < plan3SM.length; i++) {
    for (let n = 0; n < SMENA3.length; n++) {
        if (plan3SM[i].data.slice(0, 2) == trueM && plan3SM[i].data.slice(3, 7) == trueY && document.querySelector("." + SMENA3[n] + "per").querySelector("." + "rowPER3sm4").innerHTML == 0) {
            document.querySelector("." + SMENA3[n] + "per").querySelector("." + "rowPER3sm4").innerHTML = plan3SM[i].fact - plan3SM[i].plan
            document.querySelector("." + SMENA3[n] + "per").querySelector("." + "rowPER3sm5").innerHTML = plan3SM[i].fact - plan3SM[i].plan - localStorage.getItem(SMENA3[n] + "per" + " " + "praznMinus")
        }
    }
}

console.log(plan3SM)

for (let i = 0; i < plan4SM.length; i++) {
    for (let n = 0; n < SMENA4.length; n++) {
        if (plan4SM[i].data.slice(0, 2) == trueM && plan4SM[i].data.slice(3, 7) == trueY && document.querySelector("." + SMENA4[n] + "per").querySelector("." + "rowPER4sm4").innerHTML == 0) {
            document.querySelector("." + SMENA4[n] + "per").querySelector("." + "rowPER4sm4").innerHTML = plan4SM[i].fact - plan4SM[i].plan
            document.querySelector("." + SMENA4[n] + "per").querySelector("." + "rowPER4sm5").innerHTML = plan4SM[i].fact - plan4SM[i].plan - localStorage.getItem(SMENA4[n] + "per" + " " + "praznMinus")
        }
    }
}


//=========================Переключения==================================


document.querySelector(".boss").classList.add("vkl");

document.querySelector(".poktab").addEventListener('click', function () {
    document.querySelector(".boss").classList.add("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})
document.querySelector(".pokDec1").addEventListener('click', function () {
    document.querySelector(".wrapDec1").classList.add("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})
document.querySelector(".pokDec2").addEventListener('click', function () {
    document.querySelector(".wrapDec2").classList.add("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})
document.querySelector(".pokDec3").addEventListener('click', function () {
    document.querySelector(".wrapDec3").classList.add("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})

document.querySelector(".pokPer1").addEventListener('click', function () {
    document.querySelector(".wrapPer1").classList.add("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})

document.querySelector(".pokPer2").addEventListener('click', function () {
    document.querySelector(".wrapPer2").classList.add("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})

document.querySelector(".pokPer3").addEventListener('click', function () {
    document.querySelector(".wrapPer3").classList.add("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
})

document.querySelector(".pokPer4").addEventListener('click', function () {
    document.querySelector(".wrapPer4").classList.add("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");


})

document.querySelector(".nastroy").addEventListener('click', function () {
    
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    document.querySelector(".asdPraz").classList.remove("vkl");
    document.querySelector(".asdPlan").classList.remove("vkl");
    
    let exsParol = prompt('Введите пароль');
    if (exsParol==parolNastr){
        document.querySelector(".asd").classList.add("vkl");
        document.querySelector(".nastroyPraz").classList.add("vkl");
    }
    else{
        alert("Неверный пароль")
        document.querySelector(".boss").classList.add("vkl");
    }

})
document.querySelector(".nastroyPraz").addEventListener('click', function () {
    document.querySelector(".asdPraz").classList.add("vkl");
    document.querySelector(".asdPlan").classList.add("vkl");
    document.querySelector(".asd").classList.remove("vkl");
    document.querySelector(".boss").classList.remove("vkl");
    document.querySelector(".wrapDec1").classList.remove("vkl");
    document.querySelector(".wrapDec2").classList.remove("vkl");
    document.querySelector(".wrapDec3").classList.remove("vkl");
    document.querySelector(".nastroyPraz").classList.remove("vkl");
    document.querySelector(".wrapPer1").classList.remove("vkl");
    document.querySelector(".wrapPer2").classList.remove("vkl");
    document.querySelector(".wrapPer3").classList.remove("vkl");
    document.querySelector(".wrapPer4").classList.remove("vkl");
    // document.querySelector(".asdPraz").classList.remove("vkl");
    // document.querySelector(".asdPlan").classList.remove("vkl");
})


//=======================================Настройки штата===================================================

document.querySelector('.saveNastr').addEventListener('click', function () {
    for (let i = 1; i <= 60; i++) {
        localStorage.setItem("nastrCOUNT" + i, document.querySelector('.nastrCOUNT' + i).innerHTML)
        localStorage.setItem("nastrABR" + i, document.querySelector('.nastrABR' + i).innerHTML)
        localStorage.setItem("nastrFIRSTNAME" + i, document.querySelector('.nastrFIRSTNAME' + i).innerHTML)
        localStorage.setItem("nastrCATEGORY" + i, document.querySelector('.nastrCATEGORY' + i).innerHTML)
        localStorage.setItem("nastrPROF" + i, document.querySelector('.nastrPROF' + i).innerHTML)
        localStorage.setItem("nastrSEX" + i, document.querySelector('.nastrSEX' + i).innerHTML)
        localStorage.setItem("nastrMODE" + i, document.querySelector('.nastrMODE' + i).innerHTML)
        localStorage.setItem("nastrDECRET" + i, document.querySelector('.nastrDECRET' + i).innerHTML)

    }
})

function onNastr() {
    for (let i = 1; i <= 60; i++) {
        document.querySelector('.nastrCOUNT' + i).innerHTML = localStorage.getItem("nastrCOUNT" + i);
        document.querySelector('.nastrABR' + i).innerHTML = localStorage.getItem("nastrABR" + i);
        document.querySelector('.nastrFIRSTNAME' + i).innerHTML = localStorage.getItem("nastrFIRSTNAME" + i);
        document.querySelector('.nastrCATEGORY' + i).innerHTML = localStorage.getItem("nastrCATEGORY" + i);
        document.querySelector('.nastrPROF' + i).innerHTML = localStorage.getItem("nastrPROF" + i);
        document.querySelector('.nastrSEX' + i).innerHTML = localStorage.getItem("nastrSEX" + i);
        document.querySelector('.nastrMODE' + i).innerHTML = localStorage.getItem("nastrMODE" + i);
        document.querySelector('.nastrDECRET' + i).innerHTML = localStorage.getItem("nastrDECRET" + i);
    }
}
onNastr()

//=======================================Настройки праздников===================================================

document.querySelector('.saveNastrPraz').addEventListener('click', function () {
    for (let i = 1; i <= 4; i++) {
        localStorage.setItem("nastrCOUNTPraz" + i, document.querySelector('.nastrCOUNTPraz' + i).innerHTML)
        localStorage.setItem("nastrDatPraz" + i, document.querySelector('.nastrDatPraz' + i).innerHTML)

    }
})

function onNastrPraz() {
    for (let i = 1; i <= 4; i++) {
        document.querySelector('.nastrCOUNTPraz' + i).innerHTML = localStorage.getItem("nastrCOUNTPraz" + i);
        document.querySelector('.nastrDatPraz' + i).innerHTML = localStorage.getItem("nastrDatPraz" + i);

    }
}
onNastrPraz()

//=======================================Настройки плана===================================================

document.querySelector('.saveNastrPlan').addEventListener('click', function () {
    for (let i = 1; i <= 12; i++) {
        localStorage.setItem("nastrCOUNTPlan" + i, document.querySelector('.nastrCOUNTPlan' + i).innerHTML)
        localStorage.setItem("nastrSm1Plan" + i, document.querySelector('.nastrSm1Plan' + i).innerHTML)
        localStorage.setItem("nastrSm2Plan" + i, document.querySelector('.nastrSm2Plan' + i).innerHTML)
        localStorage.setItem("nastrSm3Plan" + i, document.querySelector('.nastrSm3Plan' + i).innerHTML)
        localStorage.setItem("nastrSm4Plan" + i, document.querySelector('.nastrSm4Plan' + i).innerHTML)

    }
})

function onNastrPlan() {
    for (let i = 1; i <= 12; i++) {
        document.querySelector('.nastrCOUNTPlan' + i).innerHTML = localStorage.getItem("nastrCOUNTPlan" + i);
        document.querySelector('.nastrSm1Plan' + i).innerHTML = localStorage.getItem("nastrSm1Plan" + i);
        document.querySelector('.nastrSm2Plan' + i).innerHTML = localStorage.getItem("nastrSm2Plan" + i);
        document.querySelector('.nastrSm3Plan' + i).innerHTML = localStorage.getItem("nastrSm3Plan" + i);
        document.querySelector('.nastrSm4Plan' + i).innerHTML = localStorage.getItem("nastrSm4Plan" + i);

    }
}
onNastrPlan()
