let table = document.querySelector('.demotable');
document.querySelector('.summaryTab').addEventListener('click', function () {
    prazdn(6);
    countHour();
    countWord();
    // y()
    inWork1();
    inWork2();
    inWork3();
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
    inHOURRAB1();
    inHOURRAB2();
    inHOURRAB3();
    inHOURITR1();
    inHOURITR2();
    inHOURITR3();
    inHOURSPEC1();
    inHOURSPEC2();
    inHOURSPEC3();

    inHOURSUTRAB();
    inHOURSUTITR();
    inHOURSUTSPEC();

    inOTPRAB1();
    inOTPRAB2();
    inOTPRAB3();
    inOTPITR1();
    inOTPITR2();
    inOTPITR3();
    inOTPSPEC1();
    inOTPSPEC2();
    inOTPSPEC3();
    inWORKRAB1();
    inWORKRAB2();
    inWORKRAB3();
    inWORKITR1();
    inWORKITR2();
    inWORKITR3();
    inWORKSPEC1();
    inWORKSPEC2();
    inWORKSPEC3();
    inBOLRAB1();
    inBOLRAB2();
    inBOLRAB3();
    inBOLITR1();
    inBOLITR2();
    inBOLITR3();
    inBOLSPEC1();
    inBOLSPEC2();
    inBOLSPEC3();
    inPROCHRAB1();
    inPROCHRAB2();
    inPROCHRAB3();
    inPROCHITR1();
    inPROCHITR2();
    inPROCHITR3();
    inPROCHSPEC1();
    inPROCHSPEC2();
    inPROCHSPEC3();
    inRAZRRAB1();
    inRAZRRAB2();
    inRAZRRAB3();
    inRAZRITR1();
    inRAZRITR2();
    inRAZRITR3();
    inRAZRSPEC1();
    inRAZRSPEC2();
    inRAZRSPEC3();
    inPROGRAB1();
    inPROGRAB2();
    inPROGRAB3();
    inPROGITR1();
    inPROGITR2();
    inPROGITR3();
    inPROGSPEC1();
    inPROGSPEC2();
    inPROGSPEC3();
    inVIHRAB1();
    inVIHRAB2();
    inVIHRAB3();
    inVIHITR1();
    inVIHITR2();
    inVIHITR3();
    inVIHSPEC1();
    inVIHSPEC2();
    inVIHSPEC3();
    inItogTabInWorkRAB1();
    inItogTabInWorkRAB2();
    inItogTabInWorkRAB3();
    inItogTabInWorkRAB();
    inItogTabInWorkITR1();
    inItogTabInWorkITR2();
    inItogTabInWorkITR3();
    inItogTabInWorkITR();
    inItogTabInWorkSPEC1();
    inItogTabInWorkSPEC2();
    inItogTabInWorkSPEC3();
    inItogTabInWorkSPEC();

    inItogTabInOTPRAB1();
    inItogTabInOTPRAB2();
    inItogTabInOTPRAB3();
    inItogTabInOTPRAB();
    inItogTabInOTPITR1();
    inItogTabInOTPITR2();
    inItogTabInOTPITR3();
    inItogTabInOTPITR();
    inItogTabInOTPSPEC1();
    inItogTabInOTPSPEC2();
    inItogTabInOTPSPEC3();
    inItogTabInOTPSPEC();

    inItogTabInBOLRAB1();
    inItogTabInBOLRAB2();
    inItogTabInBOLRAB3();
    inItogTabInBOLRAB();
    inItogTabInBOLITR1();
    inItogTabInBOLITR2();
    inItogTabInBOLITR3();
    inItogTabInBOLITR();
    inItogTabInBOLSPEC1();
    inItogTabInBOLSPEC2();
    inItogTabInBOLSPEC3();
    inItogTabInBOLSPEC();

    inItogTabInPROCHRAB1();
    inItogTabInPROCHRAB2();
    inItogTabInPROCHRAB3();
    inItogTabInPROCHRAB();
    inItogTabInPROCHITR1();
    inItogTabInPROCHITR2();
    inItogTabInPROCHITR3();
    inItogTabInPROCHITR();
    inItogTabInPROCHSPEC1();
    inItogTabInPROCHSPEC2();
    inItogTabInPROCHSPEC3();
    inItogTabInPROCHSPEC();

    inItogTabInRAZRRAB1();
    inItogTabInRAZRRAB2();
    inItogTabInRAZRRAB3();
    inItogTabInRAZRRAB();
    inItogTabInRAZRITR1();
    inItogTabInRAZRITR2();
    inItogTabInRAZRITR3();
    inItogTabInRAZRITR();
    inItogTabInRAZRSPEC1();
    inItogTabInRAZRSPEC2();
    inItogTabInRAZRSPEC3();
    inItogTabInRAZRSPEC();

    inItogTabInPROGRAB1();
    inItogTabInPROGRAB2();
    inItogTabInPROGRAB3();
    inItogTabInPROGRAB();
    inItogTabInPROGITR1();
    inItogTabInPROGITR2();
    inItogTabInPROGITR3();
    inItogTabInPROGITR();
    inItogTabInPROGSPEC1();
    inItogTabInPROGSPEC2();
    inItogTabInPROGSPEC3();
    inItogTabInPROGSPEC();

    inItogTabInVIHRAB1();
    inItogTabInVIHRAB2();
    inItogTabInVIHRAB3();
    inItogTabInVIHRAB();
    inItogTabInVIHITR1();
    inItogTabInVIHITR2();
    inItogTabInVIHITR3();
    inItogTabInVIHITR();
    inItogTabInVIHSPEC1();
    inItogTabInVIHSPEC2();
    inItogTabInVIHSPEC3();
    inItogTabInVIHSPEC();

    inItogTabInHOUR8RAB1();
    inItogTabInHOUR8RAB2();
    inItogTabInHOUR8RAB3();
    inItogTabInHOUR8RAB();
    inItogTabInHOUR8ITR1();
    inItogTabInHOUR8ITR2();
    inItogTabInHOUR8ITR3();
    inItogTabInHOUR8ITR();
    inItogTabInHOUR8SPEC1();
    inItogTabInHOUR8SPEC2();
    inItogTabInHOUR8SPEC3();
    inItogTabInHOUR8SPEC();

    inItogTabInHOUR7RAB1();
    inItogTabInHOUR7RAB2();
    inItogTabInHOUR7RAB3();
    inItogTabInHOUR7RAB();
    inItogTabInHOUR7ITR1();
    inItogTabInHOUR7ITR2();
    inItogTabInHOUR7ITR3();
    inItogTabInHOUR7ITR();
    inItogTabInHOUR7SPEC1();
    inItogTabInHOUR7SPEC2();
    inItogTabInHOUR7SPEC3();
    inItogTabInHOUR7SPEC();

    inItogTabInHOUR6RAB1();
    inItogTabInHOUR6RAB2();
    inItogTabInHOUR6RAB3();
    inItogTabInHOUR6RAB();
    inItogTabInHOUR6ITR1();
    inItogTabInHOUR6ITR2();
    inItogTabInHOUR6ITR3();
    inItogTabInHOUR6ITR();
    inItogTabInHOUR6SPEC1();
    inItogTabInHOUR6SPEC2();
    inItogTabInHOUR6SPEC3();
    inItogTabInHOUR6SPEC();

    inItogTabInHOUR4RAB1();
    inItogTabInHOUR4RAB2();
    inItogTabInHOUR4RAB3();
    inItogTabInHOUR4RAB();
    inItogTabInHOUR4ITR1();
    inItogTabInHOUR4ITR2();
    inItogTabInHOUR4ITR3();
    inItogTabInHOUR4ITR();
    inItogTabInHOUR4SPEC1();
    inItogTabInHOUR4SPEC2();
    inItogTabInHOUR4SPEC3();
    inItogTabInHOUR4SPEC();

    inItogTabInHOUR10RAB1();
    inItogTabInHOUR10RAB2();
    inItogTabInHOUR10RAB3();
    inItogTabInHOUR10RAB();
    inItogTabInHOUR10ITR1();
    inItogTabInHOUR10ITR2();
    inItogTabInHOUR10ITR3();
    inItogTabInHOUR10ITR();
    inItogTabInHOUR10SPEC1();
    inItogTabInHOUR10SPEC2();
    inItogTabInHOUR10SPEC3();
    inItogTabInHOUR10SPEC();

    inItogTabInHOUR12RAB1();
    inItogTabInHOUR12RAB2();
    inItogTabInHOUR12RAB3();
    inItogTabInHOUR12RAB();
    inItogTabInHOUR12ITR1();
    inItogTabInHOUR12ITR2();
    inItogTabInHOUR12ITR3();
    inItogTabInHOUR12ITR();
    inItogTabInHOUR12SPEC1();
    inItogTabInHOUR12SPEC2();
    inItogTabInHOUR12SPEC3();
    inItogTabInHOUR12SPEC();

    inItogTabInHOURALL();

    inItogTabInSP();
})
//=======================================================================================Объекты рабочих===========================================================================================



let persons = [
    {
        abr: 'Asmakovec',
        firstname: 'Асмаковец Виктория',
        category: 'ITR',
        prof: 'Мастер',
        sex: 'female',
        mode: '0', decret: true,
    },
    {
        abr: 'Barsukova',
        firstname: 'Барсукова Наталья',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'female',
        mode: '2',decret : false,
    },
    {
        abr: 'Verbitskaya',
        firstname: 'Вербитская Юлия',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'female',
        mode: '4',decret : false,
    },
    {
        abr: 'Vishnikova',
        firstname: 'Вышникова Людмила',
        category: 'Wopker',
        prof: 'Кладовщик',
        sex: 'female',
        mode: '0',decret : false,
    },
    {
        abr: 'Gorbachev',
        firstname: 'Горбачев Кирилл',
        category: 'Wopker',
        prof: 'Оператор по обезвоживанию осадка',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Gorbovec',
        firstname: 'Горбовец Владимир',
        category: 'ITR',
        prof: 'Мастер по обслуживанию оборудования',
        sex: 'male',
        mode: '0',decret : false,
    },
    {
        abr: 'Gorshunova',
        firstname: 'Горшунова Ирина',
        category: 'Wopker',
        prof: 'Оператор ДПУ',
        sex: 'female',
        mode: '3',decret : false,
    },
    {
        abr: 'Gremenkov',
        firstname: 'Гременков Эдуард',
        category: 'ITR',
        prof: 'Мастер',
        sex: 'male',
        mode: '3',decret : false,
    },
    {
        abr: 'Grozny',
        firstname: 'Грозный Эдуард',
        category: 'Wopker',
        prof: 'Оператор по обезвоживанию осадка',
        sex: 'male',
        mode: '3',decret : false,
    },

    {
        abr: 'Gutcev',
        firstname: 'Гуцев Артёв',
        category: 'Wopker',
        prof: 'Слесарь',
        sex: 'male',
        mode: '2',decret : false,
    },
    {
        abr: 'Danilenko',
        firstname: 'Даниленко Максим',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '1',decret : false,
    },
    {
        abr: 'Doroschenko',
        firstname: 'Дорощенко Дмитрий',
        category: 'Wopker',
        prof: 'Аппаратчик приготовления химикатов',
        sex: 'male',
        mode: '2',decret : false,
    },
    {
        abr: 'Drobishevskaya',
        firstname: 'Дробышевская Олеся',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'female',
        mode: '1',decret : false,
    },
    {
        abr: 'Gitnik',
        firstname: 'Житник Денис',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '2',decret : false,
    },
    {
        abr: 'Gurov',
        firstname: 'Журов Дмитрий',
        category: 'Wopker',
        prof: 'Оператор по обезвоживанию осадка',
        sex: 'male',
        mode: '0',decret : false,
    },
    {
        abr: 'Zayceva',
        firstname: 'Зайцева Валерия',
        category: 'SPEC',
        prof: 'Инженер-микробиолог',
        sex: 'female',
        mode: '0',decret : false,
    },
    {
        abr: 'Ivanov',
        firstname: 'Иванов Виктор',
        category: 'Wopker',
        prof: 'Аппаратчик приготовления химикатов',
        sex: 'male',
        mode: '3',decret : false,
    },
    {
        abr: 'Ivanova',
        firstname: 'Иванова Зинаида',
        category: 'Wopker',
        prof: 'Урорщица',
        sex: 'female',
        mode: '0',decret : false,
    },
    {
        abr: 'Kavalyova',
        firstname: 'Кавалёва Карина',
        category: 'SPEC',
        prof: 'Инженер-технолог',
        sex: 'female',
        mode: '0',decret : false,
    },
    {
        abr: 'Kazakova',
        firstname: 'Казакова Татьяна',
        category: 'Wopker',
        prof: 'Оператор ДПУ',
        sex: 'female',
        mode: '0', decret: true,
    },
    {
        abr: 'Korotkov',
        firstname: 'Коротков Сергей',
        category: 'Wopker',
        prof: 'Слесарь',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Kulinenkov',
        firstname: 'Кулиненков Виктор',
        category: 'Wopker',
        prof: 'Аппаратчик приготовления химикатов',
        sex: 'male',
        mode: '1',decret : false,
    },
    {
        abr: 'Lazovik',
        firstname: 'Лазовик Екатерина',
        category: 'Wopker',
        prof: 'Оператор ДПУ',
        sex: 'female',
        mode: '2',decret : false,
    },
    {
        abr: 'Mazurov',
        firstname: 'Мазуров Вячеслав',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Metelyov',
        firstname: 'Метелев Антон',
        category: 'Wopker',
        prof: 'Аппаратчик приготовления химикатов',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Mileshkina',
        firstname: 'Милешкина Анна',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'female',
        mode: '3',decret : false,
    },
    {
        abr: 'Mislivchik',
        firstname: 'Мысливчик Павел',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '1',decret : false,
    },
    {
        abr: 'Murashkin',
        firstname: 'Мурашкин Александр',
        category: 'Wopker',
        prof: 'Оператор по обезвоживанию осадка',
        sex: 'male',
        mode: '1',decret : false,
    },
    {
        abr: 'Nidodirov',
        firstname: 'Нидодиров Кирилл',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '2',decret : false,
    },
    {
        abr: 'Mirzoaliev',
        firstname: 'Мирзоалиев Вячеслав',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '3',decret : false,
    },
    {
        abr: 'Ponanorenko',
        firstname: 'Понаморенко Виталий',
        category: 'Wopker',
        prof: 'Слесарь',
        sex: 'male',
        mode: '3',decret : false,
    },
    {
        abr: 'Privalova',
        firstname: 'Привалова Татьяна',
        category: 'Wopker',
        prof: 'Урорщица',
        sex: 'female',
        mode: '0',decret : false,
    },
    {
        abr: 'Prihodko',
        firstname: 'Приходько Дмитрий',
        category: 'Wopker',
        prof: 'Оператор ДПУ',
        sex: 'male',
        mode: '1',decret : false,
    },
    {
        abr: 'PrihodkoM',
        firstname: 'Приходько Михаил',
        category: 'Wopker',
        prof: 'Оператор по обезвоживанию осадка',
        sex: 'male',
        mode: '2',decret : false,
    },
    {
        abr: 'Protchenko',
        firstname: 'Протченко Михаил',
        category: 'ITR',
        prof: 'Начальник участка',
        sex: 'male',
        mode: '0',decret : false,
    },
    {
        abr: 'Romanov',
        firstname: 'Романов Вячеслав',
        category: 'ITR',
        prof: 'Мастер',
        sex: 'male',
        mode: '2',decret : false,
    },
    {
        abr: 'Serebryakov',
        firstname: 'Cеребряков Дмитрий',
        category: 'ITR',
        prof: 'Мастер',
        sex: 'male',
        mode: '1',decret : false,
    },
    {
        abr: 'Tatarov',
        firstname: 'Татаров Кирилл',
        category: 'Wopker',
        prof: 'Оператор ДПУ',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Kharibin',
        firstname: 'Харибин Андрей',
        category: 'ITR',
        prof: 'Мастер',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Chuprakov',
        firstname: 'Чупраков Александр',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '4',decret : false,
    },
    {
        abr: 'Shelipaho',
        firstname: 'Шелипахо Виктор',
        category: 'Wopker',
        prof: 'Аппаратчик ОСВ',
        sex: 'male',
        mode: '3',decret : false,
    },
];

// =======================================================================================Разбивка на группы=================================================================================


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
    if (x.mode == '0') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA1 = persons.map(function (x) {
    if (x.mode == '1') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA2 = persons.map(function (x) {
    if (x.mode == '2') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA3 = persons.map(function (x) {
    if (x.mode == '3') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA4 = persons.map(function (x) {
    if (x.mode == '4') {
        return x.abr;
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
    nodet.classList.add("col" + k);
    for (let i = 1; i <= 43; i++) {
        let node = document.createElement('td');
        node.classList.add("row" + i);
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


// //Окрашивание смен

// for (let i = 0; i <= SMENA0.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA0[i]);
//     for (let www of COlORS) {
//         www.classList.add("color0");
//     }
// }

// for (let i = 0; i <= SMENA1.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA1[i]);
//     for (let www of COlORS) {
//         www.classList.add("color1");
//     }
// }

// for (let i = 0; i <= SMENA2.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA2[i]);
//     for (let www of COlORS) {
//         www.classList.add("color2");
//     }
// }

// for (let i = 0; i <= SMENA3.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA3[i]);
//     for (let www of COlORS) {
//         www.classList.add("color3");
//     }
// }

// for (let i = 0; i <= SMENA4.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA4[i]);
//     for (let www of COlORS) {
//         www.classList.add("color4");
//     }
// }

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

function prazdn(x) {

    for (let k = 1; k <= ABR.length; k++) {
        let sum = 0;
        let examination = +(document.querySelector(".col" + k).querySelector(".row" + x).innerHTML);
        if (examination > 1) {
            sum += examination;
        }
        document.querySelector(".col" + k).querySelector(".row37").innerHTML = sum;
    }
}




//=============================================================================================Декадка===========================================================================

//Среднесписочная численность

let SREDCHISRAB = document.querySelectorAll('.sredChisRab');
for (let www of SREDCHISRAB) {
    www.innerHTML = CATRAB.length;
}

let SREDCHISITR = document.querySelectorAll('.sredChisITR');
for (let www of SREDCHISITR) {
    www.innerHTML = CATITR.length;
}

let SREDCHISSPEC = document.querySelectorAll('.sredChisSPEC');
for (let www of SREDCHISSPEC) {
    www.innerHTML = CATSPEC.length;
}


//Подсчет женщин

let FEMRAB = document.querySelectorAll('.femRab');
for (let www of FEMRAB) {
    www.innerHTML = RABSEXFEM.length;
}

let FEMITR = document.querySelectorAll('.femITR');
for (let www of FEMITR) {
    www.innerHTML = ITRSEXFEM.length;
}

let FEMSPEC = document.querySelectorAll('.femSPEC');
for (let www of FEMSPEC) {
    www.innerHTML = SPECSEXFEM.length;
}

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


// https://www.cyberforum.ru/javascript-beginners/thread2606554.html


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

//Итоговый подсчет часов

//Работники

//Первая декадка

function inHOURRAB1() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k

            document.querySelector('.headRAB1').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Вторая декадка

function inHOURRAB2() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k
            document.querySelector('.headRAB2').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Третья декадка

function inHOURRAB3() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 11; i++) {
            if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k
            document.querySelector('.headRAB3').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//ИТР

//Первая декадка

function inHOURITR1() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k

            document.querySelector('.headITR1').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Вторая декадка

function inHOURITR2() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k
            document.querySelector('.headITR2').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Третья декадка

function inHOURITR3() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 11; i++) {
            if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k
            document.querySelector('.headITR3').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Специалисты

//Первая декадка

function inHOURSPEC1() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k;
            document.querySelector('.headSPEC1').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Вторая декадка

function inHOURSPEC2() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k
            document.querySelector('.headSPEC2').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Третья декадка

function inHOURSPEC3() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        for (let i = 1; i <= 11; i++) {
            if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum++;
            }
            let e = sum * k;
            document.querySelector('.headSPEC3').querySelector('.headDEK' + (k + 18)).innerHTML = e;
        }
    }
}

//Итоговый подсчет часов по суткам

//Работники

function inHOURSUTRAB() {
    for (let k = 0; k <= 2; k++) {
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            if (+(document.querySelector(".headRAB" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML) >= 1) {
                sum += +(document.querySelector(".headRAB" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML);
            }
            document.querySelector(".headRAB" + (k + 1)).querySelector('.headDEK31').innerHTML = sum;
        }
    }
}



//ИТР

function inHOURSUTITR() {
    for (let k = 0; k <= 2; k++) {
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            if (+(document.querySelector(".headITR" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML) >= 1) {
                sum += +(document.querySelector(".headITR" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML);
            }
            document.querySelector(".headITR" + (k + 1)).querySelector('.headDEK31').innerHTML = sum;
        }
    }
}


//Специалисты

function inHOURSUTSPEC() {
    for (let k = 0; k <= 2; k++) {
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            if (+(document.querySelector(".headSPEC" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML) >= 1) {
                sum += +(document.querySelector(".headSPEC" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML);
            }
            document.querySelector(".headSPEC" + (k + 1)).querySelector('.headDEK31').innerHTML = sum;
        }
    }
}



//---------------------------------------------------------------------------Итоговый подсчет отпусков-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inOTPRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK7').innerHTML = sum;
    }
}

//Вторая декадка

function inOTPRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK7').innerHTML = sum;
    }
}

//Третья декадка

function inOTPRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK7').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inOTPITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK7').innerHTML = sum;
    }
}


//Вторая декадка

function inOTPITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK7').innerHTML = sum;
    }
}


//Третья декадка

function inOTPITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK7').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inOTPSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK7').innerHTML = sum;
    }
}


//Вторая декадка

function inOTPSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK7').innerHTML = sum;
    }
}


//Третья декадка

function inOTPSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK7').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------Итоговый подсчет 'На работе'-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inWORKRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK6').innerHTML = sum;
    }
}

//Вторая декадка

function inWORKRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK6').innerHTML = sum;
    }
}

//Третья декадка

function inWORKRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK6').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inWORKITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK6').innerHTML = sum;
    }
}


//Вторая декадка

function inWORKITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK6').innerHTML = sum;
    }
}


//Третья декадка

function inWORKITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK6').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inWORKSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK6').innerHTML = sum;
    }
}


//Вторая декадка

function inWORKSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK6').innerHTML = sum;
    }
}


//Третья декадка

function inWORKSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK6').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------Итоговый подсчет больничных-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inBOLRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK9').innerHTML = sum;
    }
}

//Вторая декадка

function inBOLRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK9').innerHTML = sum;
    }
}

//Третья декадка

function inBOLRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK9').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inBOLITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK9').innerHTML = sum;
    }
}


//Вторая декадка

function inBOLITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK9').innerHTML = sum;
    }
}


//Третья декадка

function inBOLITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK9').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inBOLSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK9').innerHTML = sum;
    }
}


//Вторая декадка

function inBOLSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK9').innerHTML = sum;
    }
}


//Третья декадка

function inBOLSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK9').innerHTML = sum;
    }
}




//---------------------------------------------------------------------------Итоговый подсчет прочих неявок-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inPROCHRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK11').innerHTML = sum;
    }
}

//Вторая декадка

function inPROCHRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK11').innerHTML = sum;
    }
}

//Третья декадка

function inPROCHRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK11').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inPROCHITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK11').innerHTML = sum;
    }
}


//Вторая декадка

function inPROCHITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK11').innerHTML = sum;
    }
}


//Третья декадка

function inPROCHITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK11').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inPROCHSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK11').innerHTML = sum;
    }
}


//Вторая декадка

function inPROCHSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK11').innerHTML = sum;
    }
}


//Третья декадка

function inPROCHSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK11').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------Итоговый разрешения администрации-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inRAZRRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK12').innerHTML = sum;
    }
}

//Вторая декадка

function inRAZRRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK12').innerHTML = sum;
    }
}

//Третья декадка

function inRAZRRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK12').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inRAZRITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK12').innerHTML = sum;
    }
}


//Вторая декадка

function inRAZRITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK12').innerHTML = sum;
    }
}


//Третья декадка

function inRAZRITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK12').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inRAZRSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK12').innerHTML = sum;
    }
}


//Вторая декадка

function inRAZRSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK12').innerHTML = sum;
    }
}


//Третья декадка

function inRAZRSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK12').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------Итоговый подсчет прогулов-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inPROGRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK13').innerHTML = sum;
    }
}

//Вторая декадка

function inPROGRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK13').innerHTML = sum;
    }
}

//Третья декадка

function inPROGRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK13').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inPROGITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK13').innerHTML = sum;
    }
}


//Вторая декадка

function inPROGITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK13').innerHTML = sum;
    }
}


//Третья декадка

function inPROGITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK13').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inPROGSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK13').innerHTML = sum;
    }
}


//Вторая декадка

function inPROGSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK13').innerHTML = sum;
    }
}


//Третья декадка

function inPROGSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK13').innerHTML = sum;
    }
}



//---------------------------------------------------------------------------Итоговый подсчет выходных-----------------------------------------------------------------------------

//Работники

//Первая декадка

function inVIHRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB1').querySelector('.headDEK15').innerHTML = sum;
    }
}

//Вторая декадка

function inVIHRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB2').querySelector('.headDEK15').innerHTML = sum;
    }
}

//Третья декадка

function inVIHRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headRAB3').querySelector('.headDEK15').innerHTML = sum;
    }
}

//ИТР

//Первая декадка

function inVIHITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR1').querySelector('.headDEK15').innerHTML = sum;
    }
}


//Вторая декадка

function inVIHITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR2').querySelector('.headDEK15').innerHTML = sum;
    }
}


//Третья декадка

function inVIHITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headITR3').querySelector('.headDEK15').innerHTML = sum;
    }
}


//Специалисты

//Первая декадка

function inVIHSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK15').innerHTML = sum;
    }
}


//Вторая декадка

function inVIHSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK15').innerHTML = sum;
    }
}


//Третья декадка

function inVIHSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum++;
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK15').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------Итоговый подсчет ЖЕНЩИН-----------------------------------------------------------------------------

document.querySelector('.headRAB1').querySelector('.headDEK5').innerHTML = RABSEXFEM.length * 10;
document.querySelector('.headRAB2').querySelector('.headDEK5').innerHTML = RABSEXFEM.length * 10;
document.querySelector('.headRAB3').querySelector('.headDEK5').innerHTML = RABSEXFEM.length * 11;
document.querySelector('.headITR1').querySelector('.headDEK5').innerHTML = ITRSEXFEM.length * 10;
document.querySelector('.headITR2').querySelector('.headDEK5').innerHTML = ITRSEXFEM.length * 10;
document.querySelector('.headITR3').querySelector('.headDEK5').innerHTML = ITRSEXFEM.length * 11;
document.querySelector('.headSPEC1').querySelector('.headDEK5').innerHTML = SPECSEXFEM.length * 10;
document.querySelector('.headSPEC2').querySelector('.headDEK5').innerHTML = SPECSEXFEM.length * 10;
document.querySelector('.headSPEC3').querySelector('.headDEK5').innerHTML = SPECSEXFEM.length * 11;


//---------------------------------------------------------------------------Итоговый подсчет среднесписочной численности-----------------------------------------------------------------------------
document.querySelector('.headRAB1').querySelector('.headDEK4').innerHTML = CATRAB.length * 10;
document.querySelector('.headRAB2').querySelector('.headDEK4').innerHTML = CATRAB.length * 10;
document.querySelector('.headRAB3').querySelector('.headDEK4').innerHTML = CATRAB.length * 11;
document.querySelector('.headITR1').querySelector('.headDEK4').innerHTML = CATITR.length * 10;
document.querySelector('.headITR2').querySelector('.headDEK4').innerHTML = CATITR.length * 10;
document.querySelector('.headITR3').querySelector('.headDEK4').innerHTML = CATITR.length * 11;
document.querySelector('.headSPEC1').querySelector('.headDEK4').innerHTML = CATSPEC.length * 10;
document.querySelector('.headSPEC2').querySelector('.headDEK4').innerHTML = CATSPEC.length * 10;
document.querySelector('.headSPEC3').querySelector('.headDEK4').innerHTML = CATSPEC.length * 11;

//---------------------------------------------------------------------------Итоговый подсчет декретниц-----------------------------------------------------------------------------
document.querySelector('.headRAB1').querySelector('.headDEK14').innerHTML = DECRAB.length * 10;
document.querySelector('.headRAB2').querySelector('.headDEK14').innerHTML = DECRAB.length * 10;
document.querySelector('.headRAB3').querySelector('.headDEK14').innerHTML = DECRAB.length * 11;
document.querySelector('.headITR1').querySelector('.headDEK14').innerHTML = DECITR.length * 10;
document.querySelector('.headITR2').querySelector('.headDEK14').innerHTML = DECITR.length * 10;
document.querySelector('.headITR3').querySelector('.headDEK14').innerHTML = DECITR.length * 11;
document.querySelector('.headSPEC1').querySelector('.headDEK14').innerHTML = DECSPEC.length * 10;
document.querySelector('.headSPEC2').querySelector('.headDEK14').innerHTML = DECSPEC.length * 10;
document.querySelector('.headSPEC3').querySelector('.headDEK14').innerHTML = DECSPEC.length * 11;


//===============================================================================Итоговая таблица=======================================================================================================

//-------------------------------------------------------------------Итоговый подсчет среднесписочной численности-------------------------------------------------------------------------------------------



document.querySelector('.colITOG1').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG4').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG7').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG10').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG2').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG5').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG8').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG11').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK4').innerHTML)
document.querySelector('.colITOG3').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG6').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG9').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG12').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK4').innerHTML);

//-------------------------------------------------------------------Итоговый подсчет женщин-------------------------------------------------------------------------------------------

document.querySelector('.colITOG1').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG4').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG7').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG10').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG2').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG5').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG8').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG11').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK5').innerHTML)
document.querySelector('.colITOG3').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG6').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG9').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG12').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK5').innerHTML);

//-------------------------------------------------------------------Итоговый подсчет декретниц-------------------------------------------------------------------------------------------

document.querySelector('.colITOG1').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG4').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG7').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG10').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG2').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG5').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG8').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG11').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK14').innerHTML)
document.querySelector('.colITOG3').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG6').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG9').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG12').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK14').innerHTML);

//-------------------------------------------------------------------------------Итоговый подсчет "На работе"-------------------------------------------------------------------------------------------

function inItogTabInWorkRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK6').innerHTML);
}
function inItogTabInWorkRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK6').innerHTML);
}
function inItogTabInWorkITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK6').innerHTML)
};
function inItogTabInWorkSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK6').innerHTML);
}
function inItogTabInWorkSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK6').innerHTML)
}


//-------------------------------------------------------------------------------Итоговый подсчет отпусков-------------------------------------------------------------------------------------------
function inItogTabInOTPRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK7').innerHTML);
}
function inItogTabInOTPRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK7').innerHTML);
}
function inItogTabInOTPITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK7').innerHTML)
};
function inItogTabInOTPSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK7').innerHTML);
}
function inItogTabInOTPSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK7').innerHTML)
}


//-------------------------------------------------------------------------------Итоговый подсчет больничных-------------------------------------------------------------------------------------------
function inItogTabInBOLRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK9').innerHTML);
}
function inItogTabInBOLRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK9').innerHTML);
}
function inItogTabInBOLITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK9').innerHTML)
};
function inItogTabInBOLSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK9').innerHTML);
}
function inItogTabInBOLSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK9').innerHTML)
}


//-------------------------------------------------------------------------------Итоговый подсчет прочих неявок-------------------------------------------------------------------------------------------
function inItogTabInPROCHRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK11').innerHTML);
}
function inItogTabInPROCHRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK11').innerHTML);
}
function inItogTabInPROCHITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK11').innerHTML)
};
function inItogTabInPROCHSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK11').innerHTML);
}
function inItogTabInPROCHSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK11').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет прочих неявок-------------------------------------------------------------------------------------------
function inItogTabInRAZRRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK12').innerHTML);
}
function inItogTabInRAZRRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK12').innerHTML);
}
function inItogTabInRAZRITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK12').innerHTML)
};
function inItogTabInRAZRSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK12').innerHTML);
}
function inItogTabInRAZRSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK12').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет прогулов-------------------------------------------------------------------------------------------
function inItogTabInPROGRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK13').innerHTML);
}
function inItogTabInPROGRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK13').innerHTML);
}
function inItogTabInPROGITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK13').innerHTML)
};
function inItogTabInPROGSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK13').innerHTML);
}
function inItogTabInPROGSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK13').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет выходных-------------------------------------------------------------------------------------------
function inItogTabInVIHRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK15').innerHTML);
}
function inItogTabInVIHRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK15').innerHTML);
}
function inItogTabInVIHITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK15').innerHTML)
};
function inItogTabInVIHSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK15').innerHTML);
}
function inItogTabInVIHSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK15').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет по 8 часов-------------------------------------------------------------------------------------------
function inItogTabInHOUR8RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK26').innerHTML);
}
function inItogTabInHOUR8RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK26').innerHTML);
}
function inItogTabInHOUR8ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK26').innerHTML)
};
function inItogTabInHOUR8SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK26').innerHTML);
}
function inItogTabInHOUR8SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK26').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет по 7 часов-------------------------------------------------------------------------------------------
function inItogTabInHOUR7RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK25').innerHTML);
}
function inItogTabInHOUR7RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK25').innerHTML);
}
function inItogTabInHOUR7ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK25').innerHTML)
};
function inItogTabInHOUR7SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK25').innerHTML);
}
function inItogTabInHOUR7SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK25').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет по 6 часов-------------------------------------------------------------------------------------------
function inItogTabInHOUR6RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK24').innerHTML);
}
function inItogTabInHOUR6RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK24').innerHTML);
}
function inItogTabInHOUR6ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK24').innerHTML)
};
function inItogTabInHOUR6SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK24').innerHTML);
}
function inItogTabInHOUR6SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK24').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет по 4 часов-------------------------------------------------------------------------------------------
function inItogTabInHOUR4RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK22').innerHTML);
}
function inItogTabInHOUR4RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK22').innerHTML);
}
function inItogTabInHOUR4ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK22').innerHTML)
};
function inItogTabInHOUR4SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK22').innerHTML);
}
function inItogTabInHOUR4SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK22').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет по 10 часов-------------------------------------------------------------------------------------------
function inItogTabInHOUR10RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK28').innerHTML);
}
function inItogTabInHOUR10RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK28').innerHTML);
}
function inItogTabInHOUR10ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK28').innerHTML)
};
function inItogTabInHOUR10SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK28').innerHTML);
}
function inItogTabInHOUR10SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK28').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет по 12 часов-------------------------------------------------------------------------------------------
function inItogTabInHOUR12RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK30').innerHTML);
}
function inItogTabInHOUR12RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK30').innerHTML);
}
function inItogTabInHOUR12ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK30').innerHTML)
};
function inItogTabInHOUR12SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK30').innerHTML);
}
function inItogTabInHOUR12SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK30').innerHTML)
}

//-------------------------------------------------------------------------------Итоговый подсчет ВСЕХ ЧАСОВ -------------------------------------------------------------------------------------------

function inItogTabInHOURALL() {
    for (let k = 0; k < 12; k++) {
        let sum = 0;
        for (let i = 0; i < 6; i++) {
            if (+(document.querySelector('.colITOG' + (k + 1)).querySelector('.rowITOG' + (i + 17)).innerHTML) >= 1) {
                sum += +(document.querySelector('.colITOG' + (k + 1)).querySelector('.rowITOG' + (i + 17)).innerHTML);
            }
            document.querySelector('.colITOG' + (k + 1)).querySelector('.rowITOG23').innerHTML = sum;
        }
    }
}

//--------------------------------------------------------------------------------Подсчет средней численности (СП) -------------------------------------------------------------------------------------

function inItogTabInSP() {
    document.querySelector('.spRAB').innerHTML = (+document.querySelector('.colITOG10').querySelector('.rowITOG2').innerHTML) / document.querySelector('.colvoDAY').innerHTML;
    document.querySelector('.spITR').innerHTML = (+document.querySelector('.colITOG11').querySelector('.rowITOG2').innerHTML) / document.querySelector('.colvoDAY').innerHTML;
    document.querySelector('.spSPEC').innerHTML = (+document.querySelector('.colITOG12').querySelector('.rowITOG2').innerHTML) / document.querySelector('.colvoDAY').innerHTML;
}