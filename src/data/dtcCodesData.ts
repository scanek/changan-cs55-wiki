// Auto-generated DTC Diagnostic Fault Codes Database (SAE J2012 / Changan Factory)
import { DtcCodeItem } from "../types";

export interface SystemGlossaryItem {
  abbrev: string;
  desc: string;
}

export const SYSTEM_GLOSSARY: SystemGlossaryItem[] = [
  {
    "abbrev": "ABE",
    "desc": "Система аварийного торможения"
  },
  {
    "abbrev": "AC",
    "desc": "Интеллектуальная система управления климат-контролем"
  },
  {
    "abbrev": "ACC",
    "desc": "Адаптивный круиз-контроль"
  },
  {
    "abbrev": "ADAS",
    "desc": "Система повышения безопасности и комфорта вождения"
  },
  {
    "abbrev": "APA",
    "desc": "Автоматическая парковка"
  },
  {
    "abbrev": "APSSS",
    "desc": "Система активной подвески с активными стабилизаторами поперечной устойчивости"
  },
  {
    "abbrev": "AVM",
    "desc": "Система кругового обзора (камеры 360°)"
  },
  {
    "abbrev": "BCM",
    "desc": "Блок управления кузовным оборудованием"
  },
  {
    "abbrev": "BDLATS",
    "desc": "Система центрального замка и противоугонной защиты"
  },
  {
    "abbrev": "CACM",
    "desc": "Модуль управления приводом сцепления"
  },
  {
    "abbrev": "CGU",
    "desc": "Блок генератора тактовых частот"
  },
  {
    "abbrev": "CVO",
    "desc": "Оптимизация работы клапанов цилиндра"
  },
  {
    "abbrev": "DCT",
    "desc": "Коробка передач с двойным сцеплением"
  },
  {
    "abbrev": "DDCU",
    "desc": "Блок управления дверным доменом"
  },
  {
    "abbrev": "DTS",
    "desc": "Система динамического распределения крутящего момента"
  },
  {
    "abbrev": "DVE",
    "desc": "Отклонение в управлении положением"
  },
  {
    "abbrev": "DVR",
    "desc": "Цифровой видеорегистратор"
  },
  {
    "abbrev": "EBS",
    "desc": "Электронная тормозная система"
  },
  {
    "abbrev": "ECU",
    "desc": "Электронный блок управления (ЭБУ) двигателем"
  },
  {
    "abbrev": "EMS",
    "desc": "Система управления двигателем"
  },
  {
    "abbrev": "EPB",
    "desc": "Электронный стояночный тормоз"
  },
  {
    "abbrev": "EPS",
    "desc": "Электроусилитель руля"
  },
  {
    "abbrev": "ESP",
    "desc": "Электронная программа стабилизации"
  },
  {
    "abbrev": "EVAP",
    "desc": "Система улавливания и контроля паров топлива"
  },
  {
    "abbrev": "EVR",
    "desc": "Встроенный регулятор напряжения"
  },
  {
    "abbrev": "FlexRay",
    "desc": "Высокоскоростная шина передачи данных (до 10 Мбит/с)"
  },
  {
    "abbrev": "GTM",
    "desc": "Модуль общего времени (система таймеров)"
  },
  {
    "abbrev": "GW",
    "desc": "Шлюзовой модуль"
  },
  {
    "abbrev": "GW MFS",
    "desc": "Шлюзовой модуль управления многофункциональными переключателями"
  },
  {
    "abbrev": "HU",
    "desc": "Головное устройство (мультимедийная система)"
  },
  {
    "abbrev": "IP / IPK",
    "desc": "Модуль приборной панели / Блок комбинации приборов"
  },
  {
    "abbrev": "LAS",
    "desc": "Система помощи удержания в полосе"
  },
  {
    "abbrev": "LCDAR",
    "desc": "Система помощи при перестроении"
  },
  {
    "abbrev": "LDW",
    "desc": "Система предупреждения о покидании полосы, часть ADAS"
  },
  {
    "abbrev": "LIN2",
    "desc": "Вторая шина локальной интерфейсной сети (до 20 кбит/с, последовательная)"
  },
  {
    "abbrev": "LMU",
    "desc": "Блок управления светом"
  },
  {
    "abbrev": "LSCU",
    "desc": "Блок управления рулевым управлением (дублирующий)"
  },
  {
    "abbrev": "LSU",
    "desc": "Широкополосный кислородный датчик (лямбда-зонд)"
  },
  {
    "abbrev": "MRR",
    "desc": "Радарный модуль"
  },
  {
    "abbrev": "PDCU",
    "desc": "Блок управления передней пассажирской дверью"
  },
  {
    "abbrev": "PEPS",
    "desc": "Система пассивного доступа и запуска"
  },
  {
    "abbrev": "PLL",
    "desc": "Cистема фазовой автоподстройки частоты"
  },
  {
    "abbrev": "PMU",
    "desc": "Модуль управления питанием"
  },
  {
    "abbrev": "PTS",
    "desc": "Система парковки"
  },
  {
    "abbrev": "RFBT",
    "desc": "Радиочастотный кузовной терминал (иммобилайзер и бесключевой доступ)"
  },
  {
    "abbrev": "RFID",
    "desc": "Система радиочастотной идентификации (иммобилайзер и бесключевой доступ)"
  },
  {
    "abbrev": "RFR",
    "desc": "Задний радар"
  },
  {
    "abbrev": "RLDCU",
    "desc": "Блок управления задней левой двери"
  },
  {
    "abbrev": "RLS",
    "desc": "Блок датчика дождя и освещенности"
  },
  {
    "abbrev": "Rolling Counter",
    "desc": "Последовательности данных (защитный механизм, предотвращающий атаки и сбои в CAN-шине)"
  },
  {
    "abbrev": "RRDCU",
    "desc": "Блок управления задней правой двери"
  },
  {
    "abbrev": "RRS",
    "desc": "Система задних парковочных радаров"
  },
  {
    "abbrev": "SAS",
    "desc": "Датчик угла поворота руля"
  },
  {
    "abbrev": "SCM",
    "desc": "Блок управления люком"
  },
  {
    "abbrev": "SCU",
    "desc": "Блок управления рулевым управлением"
  },
  {
    "abbrev": "SMU",
    "desc": "Блок управления стабилизацией"
  },
  {
    "abbrev": "SRS",
    "desc": "Система подушек безопасности"
  },
  {
    "abbrev": "TCU",
    "desc": "Блок управления трансмиссией"
  },
  {
    "abbrev": "THU",
    "desc": "Блок управления системами связи и навигации (телематический хаб-модуль)"
  },
  {
    "abbrev": "VCO",
    "desc": "Генератор, управляемый напряжением"
  },
  {
    "abbrev": "WDTS",
    "desc": "Система распределения крутящего момента на колеса"
  },
  {
    "abbrev": "WT",
    "desc": "Перепускной клапан турбины"
  },
  {
    "abbrev": "WTD / Watchdog Аппаратно реализованная схема контроля над зависанием системы",
    "desc": "WWS"
  }
];

export const DTC_CODES_DATABASE: DtcCodeItem[] = [
  {
    "code": "U0155",
    "desc": "Потеря связи с комбинацией приборов (приборной панелью IPC)",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U0140",
    "desc": "Потеря связи с центральным кузовным электронным модулем (BCM)",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U0121",
    "desc": "Потеря связи с блоком антиблокировочной системы тормозов (ABS / ESP)",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U0101",
    "desc": "Потеря связи с блоком управления трансмиссией (TCM) по CAN-шине",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "P0700",
    "desc": "Запрос включения индикатора неисправности (Check Engine) от блока управления трансмиссией (TCM)",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P0606",
    "desc": "Внутренняя неисправность микропроцессора блока управления (ЭБУ / ECM)",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0562",
    "desc": "Низкое напряжение в бортовой сети электропитания автомобиля",
    "category": "powertrain",
    "system": "Электропитание и АКБ",
    "isGeneric": true
  },
  {
    "code": "P0500",
    "desc": "Неисправность датчика скорости автомобиля (VSS)",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0335",
    "desc": "Неисправность в цепи датчика положения коленчатого вала (ДПКВ)",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0340",
    "desc": "Неисправность в цепи датчика положения распределительного вала (ДПРВ)",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0135",
    "desc": "Неисправность цепи подогревателя датчика кислорода (Банк 1, Датчик 1)",
    "category": "powertrain",
    "system": "Выхлопная система",
    "isGeneric": true
  },
  {
    "code": "P0130",
    "desc": "Неисправность электрической цепи датчика кислорода (Лямбда-зонд 1, Банк 1)",
    "category": "powertrain",
    "system": "Выхлопная система",
    "isGeneric": true
  },
  {
    "code": "P0128",
    "desc": "Температура охлаждающей жидкости ниже температуры регулирования термостата (термостат заклинил в открытом положении)",
    "category": "powertrain",
    "system": "Система охлаждения",
    "isGeneric": true
  },
  {
    "code": "P0113",
    "desc": "Высокий уровень сигнала датчика температуры впускного воздуха (IAT)",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0101",
    "desc": "Выход сигнала датчика расхода воздуха (MAF / MAP) из допустимого диапазона",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0420",
    "desc": "Эффективность каталитического нейтрализатора ниже допустимого порога (Банк 1)",
    "category": "powertrain",
    "system": "Выхлопная система",
    "isGeneric": true
  },
  {
    "code": "P0172",
    "desc": "Слишком богатая смесь в системе (Банк 1) - перелив топлива, забитый воздушный фильтр",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P0171",
    "desc": "Слишком бедная смесь в системе (Банк 1) - возможен подсос воздуха или недостаток топлива",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P0304",
    "desc": "Обнаружены пропуски воспламенения в цилиндре №4",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P0303",
    "desc": "Обнаружены пропуски воспламенения в цилиндре №3",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P0302",
    "desc": "Обнаружены пропуски воспламенения в цилиндре №2",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P0301",
    "desc": "Обнаружены пропуски воспламенения в цилиндре №1",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P0300",
    "desc": "Обнаружены случайные/множественные пропуски зажигания (воспламенения) в цилиндрах",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "B002201",
    "desc": "CAN-модуль - неисправность контроллера.",
    "category": "body",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "B100111",
    "desc": "BCM. Переключатель Start / Stop (светодиод RED) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100412",
    "desc": "BCM. Реле обогрева заднего стекла - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100413",
    "desc": "BCM. Реле обогрева заднего стекла - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100612",
    "desc": "BCM. Реле управления скоростью переднего стеклоочистителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100613",
    "desc": "BCM. Реле управления скоростью переднего стеклоочистителя - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100712",
    "desc": "BCM. Реле дальнего света - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100713",
    "desc": "BCM. Реле дальнего света - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100912",
    "desc": "BCM. Реле управления IGN1 - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100913",
    "desc": "BCM. Реле управления IGN1 - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100A12",
    "desc": "BCM. Реле управления ACC - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100A13",
    "desc": "BCM. Реле управления ACC - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100B13",
    "desc": "BCM. Реле звукового сигнала - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B100D12",
    "desc": "BCM. Реле ACC / IGN / ST - электрический выход обратной связи не соответствует.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B101312",
    "desc": "BCM. Реле задержки PW - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B101313",
    "desc": "BCM. Реле задержки PW - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B101412",
    "desc": "BCM. Реле питания переднего стеклоочистителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B101413",
    "desc": "BCM. Реле питания переднего стеклоочистителя - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B101512",
    "desc": "BCM. Реле заднего стеклоочистителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B101513",
    "desc": "BCM. Реле заднего стеклоочистителя - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102111",
    "desc": "BCM. Складывание зеркал - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102112",
    "desc": "BCM. Складывание зеркал - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102211",
    "desc": "BCM. Раскладывание зеркал - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102212",
    "desc": "BCM. Раскладывание зеркал - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102411",
    "desc": "BCM. Фонарь противотуманный (задний левый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102413",
    "desc": "BCM. Фонарь противотуманный (задний левый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102A11",
    "desc": "BCM. Переключатель Start / Stop (светодиод GREEN) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102D11",
    "desc": "BCM. Атмосферноя подсветка - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102E11",
    "desc": "BCM. Освещение багажника - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B102E13",
    "desc": "BCM. Освещение багажника - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103113",
    "desc": "BCM. Фонарь заднего хода - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103118",
    "desc": "BCM. Фонарь заднего хода - поврежден.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103211",
    "desc": "BCM. Фонарь стоп-сигнала - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103311",
    "desc": "BCM. Указатель поворота (правый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103313",
    "desc": "BCM. Указатель поворота (правый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103318",
    "desc": "BCM. Указатель поворота (правый) - поврежден.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103412",
    "desc": "BCM. Цепь управления замком двери багажника - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103413",
    "desc": "BCM. Цепь управления замком двери багажника - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103512",
    "desc": "BCM. Цепь управления замком двери водителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103513",
    "desc": "BCM. Цепь управления замком двери водителя - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103612",
    "desc": "BCM. Цепь управления замком двери пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103613",
    "desc": "BCM. Цепь управления замком двери пассажира - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103712",
    "desc": "BCM. Центральный замок - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103713",
    "desc": "BCM. Центральный замок - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103813",
    "desc": "BCM. Реле давления топливного насоса - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103911",
    "desc": "BCM. Указатель поворота (левый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103913",
    "desc": "BCM. Указатель поворота (левый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103918",
    "desc": "BCM. Указатель поворота (левый) - поврежден.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103A11",
    "desc": "BCM. Фонарь противотуманный (передний левый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103A13",
    "desc": "BCM. Фонарь противотуманный (передний левый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103B11",
    "desc": "BCM. Фонарь стоп-сигнала (верхний) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B103D12",
    "desc": "BCM. Реле звукового сигнала - короткое замыкание на плюс / лампа внутреннего освещения - короткое замыкание плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104111",
    "desc": "BCM. Подсветка - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104113",
    "desc": "BCM. Подсветка - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104311",
    "desc": "BCM. Фонарь противотуманный (передний правый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104313",
    "desc": "BCM. Фонарь противотуманный (передний правый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104411",
    "desc": "BCM. Ближний свет (левый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104413",
    "desc": "BCM. Ближний свет (левый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104511",
    "desc": "BCM. Ближний свет (правый) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104513",
    "desc": "BCM. Ближний свет (правый) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104D16",
    "desc": "BCM. Напряжение в цепи ниже порогового значения.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B104D17",
    "desc": "BCM. Напряжение в цепи выше порогового значения.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105214",
    "desc": "BCM. LF-антенна (задняя) - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105314",
    "desc": "BCM. LF-антенна (правая) - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105414",
    "desc": "BCM. LF-антенна (передняя) - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105514",
    "desc": "BCM. LF-антенна (левая) - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105624",
    "desc": "BCM. Переключатель омывателя ветрового стекла - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105823",
    "desc": "BCM. Переключатель кратковременного включения дальнего света (моргание дальним) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105924",
    "desc": "BCM. Переключатель омывателя стекла двери багажника - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105A29",
    "desc": "BCM. Ошибка состояния переключателя указателей поворота.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105B29",
    "desc": "BCM. Ошибка состояния комбинированного переключателя ближнего света и габаритных огней.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105C29",
    "desc": "BCM. Ошибка состояния комбинированного переключателя противотуманных фар.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105D23",
    "desc": "BCM. Кнопка переключателя двери (ЗП) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105E23",
    "desc": "BCM. Кнопка переключателя двери (ПП) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B105F23",
    "desc": "BCM. Переключатель открытия багажника - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106012",
    "desc": "BCM. Переключатель Start / Stop 1 - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106023",
    "desc": "BCM. Переключатель Start / Stop 1 - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106029",
    "desc": "BCM. Переключатель Start / Stop 1 - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106112",
    "desc": "BCM. Переключатель Start / Stop 2 - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106123",
    "desc": "BCM. Переключатель Start / Stop 2 - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106129",
    "desc": "BCM. Переключатель Start / Stop 2 - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106211",
    "desc": "BCM. Переключатели Start / Stop 1 и 2 не совпадают.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106311",
    "desc": "BCM. Сигнал о столкновении - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106523",
    "desc": "BCM. Аварийный переключатель (аварийка) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106623",
    "desc": "BCM. Кнопка переключателя двери (ПЛ) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106723",
    "desc": "BCM. Переключатель звукового сигнала (клаксон) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106823",
    "desc": "BCM. Переключатель режима движения - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106929",
    "desc": "BCM. Ошибка состояния переключателя переднего стеклоочистителя.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106B23",
    "desc": "BCM. Переключатель заднего противотуманного фонаря - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B106F00",
    "desc": "BCM. Общая неисправность переднего стеклоочистителя.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107102",
    "desc": "BCM. Низкое давление в шине (ПЛ).",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107202",
    "desc": "BCM. Низкое давление в шине (ПП).",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107302",
    "desc": "BCM. Низкое давление в шине (ЗЛ).",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107402",
    "desc": "BCM. Низкое давление в шине (ЗП).",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107502",
    "desc": "BCM. Датчик давления в шинах - отсутствует ID.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107602",
    "desc": "BCM. Датчик давления в шинах - повторяющийся ID.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107993",
    "desc": "BCM. Датчик давления шины (ПЛ) - неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107A93",
    "desc": "BCM. Датчик давления шины (ПП) - неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107B93",
    "desc": "BCM. Датчик давления шины (ЗЛ) - неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107C93",
    "desc": "BCM. Датчик давления шины (ЗП) - неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107D92",
    "desc": "BCM. Датчик давления в шине (ПЛ) - низкий заряд батареи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107E92",
    "desc": "BCM. Датчик давления в шине (ПП) - низкий заряд батареи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B107F92",
    "desc": "BCM. Датчик давления в шине (ЗЛ) - низкий заряд батареи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108011",
    "desc": "BCM. Фонарь заднего хода - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108092",
    "desc": "BCM. Датчик давления в шине (ЗП) - низкий заряд батареи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108196",
    "desc": "BCM. Датчик давления в шине (ПЛ) - аппаратная неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108296",
    "desc": "BCM. Датчик давления в шине (ПП) - аппаратная неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108396",
    "desc": "BCM. Датчик давления в шине (ЗЛ) - аппаратная неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108496",
    "desc": "BCM. Датчик давления в шине (ЗП) - аппаратная неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108862",
    "desc": "BCM. Ошибка аутентификации EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B108923",
    "desc": "BCM. Кнопка переключателя двери (ЗЛ) - заклинило.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1103",
    "desc": "IP / IPK. Сигнал уровня топлива неверный - выше нормы.",
    "category": "body",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "B1104",
    "desc": "IP / IPK. Сигнал уровня топлива неверный - ниже нормы.",
    "category": "body",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "B1105",
    "desc": "IP / IPK. Аккумулятор - напряжение ниже нормального диапазона.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1106",
    "desc": "IP / IPK. Аккумулятор - напряжение выше нормального диапазона.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1107",
    "desc": "IP / IPK. Ненормальный сигнал зажигания.",
    "category": "body",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "B1108",
    "desc": "IP / IPK. Неисправность экрана дисплея.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1110",
    "desc": "IP / IPK. Заедание кнопки на рулевом колесе.",
    "category": "body",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "B1400",
    "desc": "AC. Датчик температуры испарителя - неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140011",
    "desc": "AC. Датчик температуры испарителя - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140015",
    "desc": "AC. Датчик температуры испарителя - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1401",
    "desc": "AC. Датчик температуры в салоне - неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140111",
    "desc": "AC. Датчик температуры в салоне - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140115",
    "desc": "AC. Датчик температуры в салоне - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1402",
    "desc": "AC. Датчик солнечного света - неисправность.",
    "category": "body",
    "system": "Освещение и оптика",
    "isGeneric": false
  },
  {
    "code": "B140211",
    "desc": "AC. Датчик солнечного света - короткое замыкание на массу.",
    "category": "body",
    "system": "Освещение и оптика",
    "isGeneric": false
  },
  {
    "code": "B140215",
    "desc": "AC. Датчик солнечного света - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Освещение и оптика",
    "isGeneric": false
  },
  {
    "code": "B1403",
    "desc": "AC. Датчик температуры окружающей среды - неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140311",
    "desc": "AC. Датчик температуры окружающей среды - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140315",
    "desc": "AC. Датчик температуры окружающей среды - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1404",
    "desc": "AC. Неисправность привода (электромотора) заслонки режима обдува или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140400",
    "desc": "AC. Неисправность привода (электромотора) заслонки режима обдува или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1405",
    "desc": "AC. Неисправность привода (электромотора) охлаждения / нагрева или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140500",
    "desc": "AC. Неисправность привода (электромотора) охлаждения / нагрева или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1406",
    "desc": "AC. Неисправность привода (электромотора) заслонки рециркуляции воздуха или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140600",
    "desc": "AC. Неисправность привода (электромотора) заслонки рециркуляции воздуха или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1407",
    "desc": "AC. Привод (электромотор) заслонки режима обдува (обратная связь) - ошибка.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140711",
    "desc": "AC. Привод (электромотор) заслонки режима обдува (обратная связь) - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140715",
    "desc": "AC. Привод (электромотор) заслонки режима обдува (обратная связь) - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1408",
    "desc": "AC. Привод (электромотор) охлаждения / нагрева (обратная связь) - ошибка.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140811",
    "desc": "AC. Привод (электромотор) охлаждения / нагрева (обратная связь) - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140815",
    "desc": "AC. Привод (электромотор) охлаждения / нагрева (обратная связь) - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1409",
    "desc": "AC. Ошибка обратной связи с приводом (электромотором) заслонки рециркуляции воздуха.",
    "category": "body",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "B140911",
    "desc": "AC. Привод (электромотор) заслонки рециркуляции воздуха (обратная связь) - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140915",
    "desc": "AC. Привод (электромотор) заслонки рециркуляции воздуха (обратная связь) - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140A",
    "desc": "AC. Неверное управление напряжением питания вентилятора.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B140A13",
    "desc": "AC. Неверное управление напряжением питания вентилятора.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1411",
    "desc": "AC. Датчик опорного напряжения - неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B141111",
    "desc": "AC. Датчик опорного напряжения - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B141112",
    "desc": "AC. Датчик опорного напряжения - короткое замыкание на плюс.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1414",
    "desc": "AC. Датчик давления хладогента - слишком высокое или низкое давление.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B141411",
    "desc": "AC. Датчик давления хладогента - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B141412",
    "desc": "AC. Датчик давления хладогента - слишком высокое давление.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B141413",
    "desc": "AC. Датчик давления хладогента - слишком низкое давление.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B141415",
    "desc": "AC. Датчик давления хладогента - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B150016",
    "desc": "THU. Напряжение ниже заданного порога.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B150017",
    "desc": "THU. Напряжение выше заданного порога.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B154133",
    "desc": "AVM. Неисправность ключа AVM.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B154200",
    "desc": "AVM. Неисправность кнопки аварийной записи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B154578",
    "desc": "AVM. Панорамная система не откалибрована.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B154693",
    "desc": "AVM. Неисправность устройства хранения данных DVR.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190000",
    "desc": "RRS. Парктроник 0 - внутренняя неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190001",
    "desc": "RRS. Парктроник 0 - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190002",
    "desc": "RRS. Парктроник 0 - короткое замыкание на плюс.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190200",
    "desc": "RRS. Парктроник 2 - внутренняя неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190201",
    "desc": "RRS. Парктроник 2 - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190202",
    "desc": "RRS. Парктроник 2 - короткое замыкание на плюс.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190300",
    "desc": "RRS. Парктроник 3 - внутренняя неисправность.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190301",
    "desc": "RRS. Парктроник 3 - короткое замыкание на массу или обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190302",
    "desc": "RRS. Парктроник 3 - короткое замыкание на плюс.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190D00",
    "desc": "RRS. Напряжение питания слишком высокое.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B190D01",
    "desc": "RRS. Напряжение питания слишком низкое.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1B0049",
    "desc": "SRS. Внутренняя неисправность - аппаратная / программная ошибка внутреннего ключа ЭБУ.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0050",
    "desc": "SRS. Внутренняя неисправность функции счетчика жизненного цикла - аппаратная / программная ошибка внутреннего ключа ЭБУ.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0111",
    "desc": "SRS. Датчик поперечного ускорения водителя - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0112",
    "desc": "SRS. Датчик поперечного ускорения водителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0113",
    "desc": "SRS. Датчик поперечного ускорения водителя - обрыв цепи.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0129",
    "desc": "SRS. Датчик поперечного ускорения водителя - ошибка датчика или сторожевого таймера (watchdog) датчика алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B012B",
    "desc": "SRS. Датчик поперечного ускорения водителя - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B014A",
    "desc": "SRS. Датчик поперечного ускорения водителя - ошибка инициализации / неверный тип датчика.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0155",
    "desc": "SRS. Датчик поперечного ускорения водителя - не настроен (отсутствует конфигурация ПО).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0181",
    "desc": "SRS. Датчик поперечного ускорения водителя - неверные данные (плохой контакт между контроллером и соединительным проводом).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0196",
    "desc": "SRS. Датчик поперечного ускорения водителя - внутренняя ошибка.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0211",
    "desc": "SRS. Датчик поперечного ускорения пассажира - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0212",
    "desc": "SRS. Датчик поперечного ускорения пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0213",
    "desc": "SRS. Датчик поперечного ускорения пассажира - обрыв цепи.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0229",
    "desc": "SRS. Датчик поперечного ускорения пассажира - ошибка датчика или сторожевого таймера (watchdog) датчика алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B022B",
    "desc": "SRS. Датчик поперечного ускорения пассажира - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B024A",
    "desc": "SRS. Датчик поперечного ускорения пассажира - ошибка инициализации / неверный тип датчика.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0255",
    "desc": "SRS. Датчик поперечного ускорения пассажира - не настроен (отсутствует конфигурация ПО).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0281",
    "desc": "SRS. Датчик поперечного ускорения пассажира - неверные данные (плохой контакт между контроллером и соединительным проводом).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0296",
    "desc": "SRS. Датчик поперечного ускорения пассажира - внутренняя ошибка.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0311",
    "desc": "SRS. Датчик продольного ускорения водителя - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0312",
    "desc": "SRS. Датчик продольного ускорения водителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0313",
    "desc": "SRS. Датчик продольного ускорения водителя - обрыв цепи.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0329",
    "desc": "SRS. Датчик продольного ускорения водителя - ошибка датчика или сторожевого таймера (watchdog) датчика алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B032B",
    "desc": "SRS. Датчик продольного ускорения водителя - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B034A",
    "desc": "SRS. Датчик продольного ускорения водителя - ошибка инициализации / неверный тип датчика.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0355",
    "desc": "SRS. Датчик продольного ускорения водителя - не настроен (отсутствует конфигурация ПО).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0381",
    "desc": "SRS. Датчик продольного ускорения водителя - неверные данные (плохой контакт между контроллером и соединительным проводом).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0396",
    "desc": "SRS. Датчик продольного ускорения водителя - внутренняя ошибка.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0411",
    "desc": "SRS. Датчик продольного ускорения пассажира - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0412",
    "desc": "SRS. Датчик продольного ускорения пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0413",
    "desc": "SRS. Датчик продольного ускорения пассажира - обрыв цепи.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0429",
    "desc": "SRS. Датчик продольного ускорения пассажира - ошибка датчика или сторожевого таймера (watchdog) датчика алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B042B",
    "desc": "SRS. Датчик продольного ускорения пассажира - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B044A",
    "desc": "SRS. Датчик продольного ускорения пассажира - ошибка инициализации / неверный тип датчика.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0455",
    "desc": "SRS. Датчик продольного ускорения пассажира - не настроен (отсутствует конфигурация ПО).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0481",
    "desc": "SRS. Датчик продольного ускорения пассажира - неверные данные (плохой контакт между контроллером и соединительным проводом).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B0496",
    "desc": "SRS. Датчик продольного ускорения пассажира - внутренняя ошибка.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1011",
    "desc": "SRS. Подушка безопасности водителя - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1012",
    "desc": "SRS. Подушка безопасности водителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1013",
    "desc": "SRS. Подушка безопасности водителя - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B101A",
    "desc": "SRS. Подушка безопасности водителя - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B102B",
    "desc": "SRS. Подушка безопасности водителя - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1055",
    "desc": "SRS. Подушка безопасности водителя - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1111",
    "desc": "SRS. Подушка безопасности пассажира - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1112",
    "desc": "SRS. Подушка безопасности пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1113",
    "desc": "SRS. Подушка безопасности пассажира - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B111A",
    "desc": "SRS. Подушка безопасности пассажира - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B112B",
    "desc": "SRS. Подушка безопасности пассажира - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1155",
    "desc": "SRS. Подушка безопасности пассажира - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1211",
    "desc": "SRS. Преднатяжитель ремня водителя - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1212",
    "desc": "SRS. Преднатяжитель ремня водителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1213",
    "desc": "SRS. Преднатяжитель ремня водителя - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B121A",
    "desc": "SRS. Преднатяжитель ремня водителя - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B122B",
    "desc": "SRS. Преднатяжитель ремня водителя - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1255",
    "desc": "SRS. Преднатяжитель ремня водителя - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1311",
    "desc": "SRS. Преднатяжитель ремня пассажира - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1312",
    "desc": "SRS. Преднатяжитель ремня пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1313",
    "desc": "SRS. Преднатяжитель ремня пассажира - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B131A",
    "desc": "SRS. Преднатяжитель ремня пассажира - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B132B",
    "desc": "SRS. Преднатяжитель ремня пассажира - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1355",
    "desc": "SRS. Преднатяжитель ремня пассажира - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1411",
    "desc": "SRS. Подушка безопасности водителя (боковая) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1412",
    "desc": "SRS. Подушка безопасности водителя (боковая) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1413",
    "desc": "SRS. Подушка безопасности водителя (боковая) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B141A",
    "desc": "SRS. Подушка безопасности водителя (боковая) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B142B",
    "desc": "SRS. Подушка безопасности водителя (боковая) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1455",
    "desc": "SRS. Подушка безопасности водителя (боковая) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1511",
    "desc": "SRS. Подушка безопасности пассажира (боковая) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1512",
    "desc": "SRS. Подушка безопасности пассажира (боковая) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1513",
    "desc": "SRS. Подушка безопасности пассажира (боковая) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B151A",
    "desc": "SRS. Подушка безопасности пассажира (боковая) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B152B",
    "desc": "SRS. Подушка безопасности пассажира (боковая) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1555",
    "desc": "SRS. Подушка безопасности пассажира (боковая) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1611",
    "desc": "SRS. Подушка безопасности пассажира (шторная) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1612",
    "desc": "SRS. Подушка безопасности пассажира (шторная) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1613",
    "desc": "SRS. Подушка безопасности пассажира (шторная) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B161A",
    "desc": "SRS. Подушка безопасности пассажира (шторная) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B162B",
    "desc": "SRS. Подушка безопасности пассажира (шторная) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1655",
    "desc": "SRS. Подушка безопасности пассажира (шторная) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1711",
    "desc": "SRS. Подушка безопасности водителя (шторная) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1712",
    "desc": "SRS. Подушка безопасности водителя (шторная) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1713",
    "desc": "SRS. Подушка безопасности водителя (шторная) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B171A",
    "desc": "SRS. Подушка безопасности водителя (шторная) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B172B",
    "desc": "SRS. Подушка безопасности водителя (шторная) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1755",
    "desc": "SRS. Подушка безопасности водителя (шторная) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1811",
    "desc": "SRS. Подушка безопасности пассажира за водителем (боковая) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1812",
    "desc": "SRS. Подушка безопасности пассажира за водителем (боковая) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1813",
    "desc": "SRS. Подушка безопасности пассажира за водителем (боковая) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B181A",
    "desc": "SRS. Подушка безопасности пассажира за водителем (боковая) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B182B",
    "desc": "SRS. Подушка безопасности пассажира за водителем (боковая) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1855",
    "desc": "SRS. Подушка безопасности пассажира за водителем (боковая) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1911",
    "desc": "SRS. Подушка безопасности пассажира за переднем пассажиром (боковая) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1912",
    "desc": "SRS. Подушка безопасности пассажира за переднем пассажиром (боковая) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1913",
    "desc": "SRS. Подушка безопасности пассажира за переднем пассажиром (боковая) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B191A",
    "desc": "SRS. Подушка безопасности пассажира за переднем пассажиром (боковая) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B192B",
    "desc": "SRS. Подушка безопасности пассажира за переднем пассажиром (боковая) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1955",
    "desc": "SRS. Подушка безопасности пассажира за переднем пассажиром (боковая) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1A11",
    "desc": "SRS. Подушка безопасности водителя (коленная) - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1A12",
    "desc": "SRS. Подушка безопасности водителя (коленная) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1A13",
    "desc": "SRS. Подушка безопасности водителя (коленная) - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1A1A",
    "desc": "SRS. Подушка безопасности водителя (коленная) - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1A2B",
    "desc": "SRS. Подушка безопасности водителя (коленная) - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1A55",
    "desc": "SRS. Подушка безопасности водителя (коленная) - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1D11",
    "desc": "SRS. Преднатяжитель ремня пассажира за водителем - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1D12",
    "desc": "SRS. Преднатяжитель ремня пассажира за водителем - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1D13",
    "desc": "SRS. Преднатяжитель ремня пассажира за водителем - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1D1A",
    "desc": "SRS. Преднатяжитель ремня пассажира за водителем - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1D2B",
    "desc": "SRS. Преднатяжитель ремня пассажира за водителем - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1D55",
    "desc": "SRS. Преднатяжитель ремня пассажира за водителем - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1E11",
    "desc": "SRS. Преднатяжитель ремня пассажира за переднем пассажиром - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1E12",
    "desc": "SRS. Преднатяжитель ремня пассажира за переднем пассажиром - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1E13",
    "desc": "SRS. Преднатяжитель ремня пассажира за переднем пассажиром - слишком высокое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1E1A",
    "desc": "SRS. Преднатяжитель ремня пассажира за переднем пассажиром - слишком низкое сопротивление.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1E2B",
    "desc": "SRS. Преднатяжитель ремня пассажира за переднем пассажиром - проблема с проводкой.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B1E55",
    "desc": "SRS. Преднатяжитель ремня пассажира за переднем пассажиром - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2012",
    "desc": "SRS. Замок ремня водителя - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2055",
    "desc": "SRS. Замок ремня водителя - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2112",
    "desc": "SRS. Замок ремня пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2155",
    "desc": "SRS. Замок ремня пассажира - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2212",
    "desc": "SRS. Датчик присутствия пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2255",
    "desc": "SRS. Датчик присутствия пассажира - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2412",
    "desc": "SRS. Замок ремня пассажира за водителем - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2455",
    "desc": "SRS. Замок ремня пассажира за водителем - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2512",
    "desc": "SRS. Замок ремня среднего пассажира - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2555",
    "desc": "SRS. Замок ремня среднего пассажира - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2612",
    "desc": "SRS. Замок ремня пассажира за передним пассажиром - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B2655",
    "desc": "SRS. Замок ремня пассажира за передним пассажиром - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B3012",
    "desc": "SRS. Вывод столкновения - короткое замыкание на плюс.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B3014",
    "desc": "SRS. Вывод столкновения - короткое замыкание на массу.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B3055",
    "desc": "SRS. Вывод столкновения - ошибка конфигурации.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B4100",
    "desc": "SRS. Обнаружено столкновение спереди.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B4200",
    "desc": "SRS. Обнаружено столкновение слева.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B4300",
    "desc": "SRS. Обнаружено столкновение справа.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B4400",
    "desc": "SRS. Обнаружено столкновение сзади.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B5001",
    "desc": "SRS. Питание ЭБУ слишком низкое / сопротивление проводов слишком высокое.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6001",
    "desc": "SRS. Несоответствие конфигурации системы.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6101",
    "desc": "SRS. Идентификационный код датчика не совпадает с заранее определенным идентификационным кодом алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6201",
    "desc": "SRS. Идентификационный код параметра не соответствует заданному идентификационному коду алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6301",
    "desc": "SRS. Идентификационный код параметра элемента не совпадает с заранее определенным идентификационным кодом алгоритма.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6401",
    "desc": "SRS. Идентификационный код значения параметра передачи не соответствует заданному идентификационному коду алгоритма.",
    "category": "body",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "B1B6501",
    "desc": "SRS. Неверное обновление кода проверки.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6648",
    "desc": "SRS. Несоответствие программного обеспечения.",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1B6701",
    "desc": "SRS. Ошибка проверки фактических и ожидаемых данных одиночного датчика (не настроен датчик переднего удара).",
    "category": "body",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "B1D0116",
    "desc": "BCM. Контроль нормального питания автомобиля и поддержки функций контроллера.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0217",
    "desc": "BCM. Контроль нормального питания автомобиля и поддержки функций контроллера.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0711",
    "desc": "BCM. Выход обогрева сиденья водителя (HV) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0713",
    "desc": "BCM. Выход обогрева сиденья водителя (HV) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0811",
    "desc": "BCM. Выход обогрева сиденья пассажира (HV) - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0813",
    "desc": "BCM. Выход обогрева сиденья пассажира (HV) - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0911",
    "desc": "BCM. Датчик температуры обогрева сиденья водителя - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0913",
    "desc": "BCM. Датчик температуры обогрева сиденья водителя - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0A11",
    "desc": "BCM. Датчик температуры обогрева сиденья пассажира - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D0A13",
    "desc": "BCM. Датчик температуры обогрева сиденья пассажира - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8016",
    "desc": "BCM. Нестабильное напряжение - слишком низкое напряжение.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8017",
    "desc": "BCM. Нестабильное напряжение - слишком высокое напряжение.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8111",
    "desc": "APSSS. Привод (электромотор) - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1D8112",
    "desc": "APSSS. Привод (электромотор) - короткое замыкание на плюс.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1D8113",
    "desc": "APSSS. Привод (электромотор) - обрыв цепи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1D8239",
    "desc": "APSSS. Датчика крена A - ошибка.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1D8339",
    "desc": "APSSS. Датчика крена B - ошибка.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1D8411",
    "desc": "APSSS. Датчик Холла - короткое замыкание на массу.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1D8567",
    "desc": "BCM. Концевик положения замка багажника (полублокировки) - короткое замыкание или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8568",
    "desc": "BCM. Концевик положения замка багажника (полной блокировки) - короткое замыкание или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8569",
    "desc": "BCM. Концевик аварийного открытия замка багажника - короткое замыкание или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8611",
    "desc": "BCM. Привод (электромотор) замка багажника - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8612",
    "desc": "BCM. Привод (электромотор) замка багажника - короткое замыкание на плюс.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8613",
    "desc": "BCM. Привод (электромотор) замка багажника - обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8711",
    "desc": "BCM. Зуммер багажника - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8713",
    "desc": "BCM. Зуммер багажника - короткое замыкание на плюс или обрыв цепи.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8811",
    "desc": "BCM. Кнопка открытия двери багажника - короткое замыкание на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8911",
    "desc": "BCM. Кнопка открытия двери багажника (у водителя) - короткое замыкание выключателя на массу.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8B67",
    "desc": "BCM. Превышено время открытия / закрытия багажника.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1D8C13",
    "desc": "BCM. Открытие багажника - обрыв или нестабильность цепи J2_3.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B1E4000",
    "desc": "WWS. Слишком высокое напряжение.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4100",
    "desc": "WWS. Слишком низкое напряжение.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4200",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ПЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4300",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ПП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4400",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ЗЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4500",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ЗП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4600",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ПЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4700",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ПП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4800",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ЗЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4900",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ЗП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4A00",
    "desc": "WWS. Кнопка автоматического подъема стекла двери (ПЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4B00",
    "desc": "WWS. Кнопка автоматического подъема стекла двери (ПП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4C00",
    "desc": "WWS. Кнопка автоматического подъема стекла двери (ЗЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4D00",
    "desc": "WWS. Кнопка автоматического подъема стекла двери (ЗП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4E00",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ПЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E4F00",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ПП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5000",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ЗЛ) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5100",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ЗП) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5200",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ПЛ) - слишком маленький ток.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5300",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ПП) - слишком маленький ток.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5400",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ЗЛ) - слишком маленький ток.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5500",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ЗП) - слишком маленький ток.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5600",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ПЛ) - слишком большой ток .",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5700",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ПП) - слишком большой ток .",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5800",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ЗЛ) - слишком большой ток .",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E5900",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ЗП) - слишком большой ток .",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6400",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ПЛ) - ошибка сигнала положения.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6500",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ПП) - ошибка сигнала положения.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6600",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ЗЛ) - ошибка сигнала положения.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6700",
    "desc": "WWS. Привод (электромотор) стеклокопъемника двери (ЗП) - ошибка сигнала положения.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6800",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ПП) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6900",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ЗЛ) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6A00",
    "desc": "WWS. Кнопка ручного подъема стекла двери (ЗП) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6B00",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ПП) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6C00",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ЗЛ) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6D00",
    "desc": "WWS. Кнопка ручного опускания стекла двери (ЗП) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6E00",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ПП) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E6F00",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ЗЛ) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B1E7000",
    "desc": "WWS. Кнопка автоматического опускания стекла двери (ЗП) (у водителя) - короткое замыкание.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B210081",
    "desc": "BCM. Ошибка диагностики сигнала частоты вращения двигателя от EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210181",
    "desc": "BCM. Ошибка диагностики сигнала состояния педали тормоза от EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210277",
    "desc": "BCM. Ошибка диагностики сигнала педали акселератора ACC от EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210381",
    "desc": "BCM. Ошибка сигнала крутящего момента от EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210581",
    "desc": "BCM. Ошибка диагностики сигнала состояния положения переключателя от EPB.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210681",
    "desc": "BCM. Ошибка диагностики сигнала состояния от EPB.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210754",
    "desc": "BCM. Ошибка калибровки SAS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B210881",
    "desc": "BCM. Ошибка SAS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B211081",
    "desc": "ESP. Неверный сигнал скорости рысканья.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211281",
    "desc": "ESP. Неверный сигнал продольного ускорения.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211381",
    "desc": "ESP. Неверный сигнал поперечного ускорения.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211477",
    "desc": "ESP. Управление замедлением недоступно.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211581",
    "desc": "ESP. Ошибка диагностики сигнала скорости вращения колеса.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211681",
    "desc": "ESP. Ошибка диагностики сигнала скорости автомобиля.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211708",
    "desc": "ESP. Ошибка сигнала давления QDC.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211881",
    "desc": "ESP. Понижение функции VAF.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B211981",
    "desc": "ESP. Ошибка MasCylBrakePressureValid.",
    "category": "body",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "B212081",
    "desc": "BCM. Ошибка диагностики сигнала TCSVDC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212181",
    "desc": "BCM. Ошибка сигнала состояния двигателя от TCU.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212281",
    "desc": "BCM. Сигнал фактической передачи неверный от TCU.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212408",
    "desc": "BCM. Ошибка сигнала QEACC от EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212578",
    "desc": "BCM. Радар - ошибка калибровки.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212604",
    "desc": "BCM. Радар - внутренняя ошибка системы - обнаружено ослепление.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212881",
    "desc": "BCM. Ошибка сигнала угловой скорости SAS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212981",
    "desc": "BCM. Радар - VMC в ненормальной состоянии.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212A77",
    "desc": "BCM. Сигнал положения передачи от TCU неверный.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212B81",
    "desc": "BCM. Ошибка диагностики сигнала процесса переключения от TCU.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212C81",
    "desc": "BCM. Сигнал крутящего момента EMS неверный.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212D81",
    "desc": "BCM. Ошибка диагностики сигнала направления вращения колеса от ESP.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B212F06",
    "desc": "BCM. Активация режима производственной линии.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213000",
    "desc": "BCM. Радар - внутренняя неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213100",
    "desc": "BCM. Радар - внутренняя неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213178",
    "desc": "BCM. Радар - никогда не калибровался.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213200",
    "desc": "BCM. Радар - внутренняя неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213278",
    "desc": "BCM. Радар - ненормальный статус калибровки.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213300",
    "desc": "BCM. Радар - внутренняя неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213381",
    "desc": "BCM. Сигнал состояния двигателя от EMS неверный.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213400",
    "desc": "BCM. Радар - ошибка самотестирования модуля ADC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213481",
    "desc": "BCM. Ошибка диагностики ABS от ESP.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213500",
    "desc": "BCM. Радар - неисправность управления питанием.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213581",
    "desc": "BCM. Состояние замка ремня безопасности водителя от SRS неверное.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213600",
    "desc": "BCM. Радар - внутренняя неисправность процессора.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213700",
    "desc": "BCM. Радар - ошибка перегрева радиолокационной микросхемы MMIC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213800",
    "desc": "BCM. Радар - ошибка перегрева радиолокационной микросхемы MMIC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213881",
    "desc": "BCM. Сигнал состояния двери водителя от BDC неверный.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213900",
    "desc": "BCM. Радар - слишком высокое напряжение радиолокационной микросхемы MMIC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213A81",
    "desc": "BCM. Ошибка диагностики сигнала реального положения педали акселератора ACC от EMS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B213E08",
    "desc": "BCM. Ошибка сигнала состояния переднего стеклоочистителя от BDC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214000",
    "desc": "BCM. Радар - слишком низкое напряжение радиолокационной микросхемы MMIC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214100",
    "desc": "BCM. Радар - неисправность внутреннего модуля.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214200",
    "desc": "BCM. Радар - ошибка в работе программного обеспечения.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214300",
    "desc": "BCM. Радар - слишком низкое напряжение микросхемы.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214381",
    "desc": "BCM. Ошибка сигнала неактивности автомобиля от EPBi.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214400",
    "desc": "BCM. Радар - слишком высокое напряжение микросхемы.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214481",
    "desc": "BCM. Неверный сигнал угла поворота руля от SAS.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214500",
    "desc": "BCM. Радар - ошибка конфигурации модуляции.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214600",
    "desc": "BCM. Радар - неисправность программного обеспечения.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214681",
    "desc": "BCM. Камера - ошибка.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214700",
    "desc": "BCM. Радар - временная неисправность программного обеспечения.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B214800",
    "desc": "BCM. Радар - внутренняя температура слишком высокая.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B216081",
    "desc": "BCM. Ошибка сигнала QDashACC.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B216181",
    "desc": "BCM. Ошибка сигнала DIS от IP.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B216981",
    "desc": "BCM. Ошибка сигнала RESPIus от ключа.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B217081",
    "desc": "BCM. Ошибка сигнала диагностического сообщения от ключа.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B21A586",
    "desc": "BCM. Радар - ошибка ядра DA.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B220016",
    "desc": "LAS. Низкое напряжение батареи.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220117",
    "desc": "LAS. Высокое напряжение аккумулятора.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220297",
    "desc": "LAS. Камера - блокировка.",
    "category": "body",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "B220398",
    "desc": "LAS. Температура ЭБУ превысила рабочий предел.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220649",
    "desc": "LAS. Внутренняя аппаратная неисправность ЭБУ.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220762",
    "desc": "LAS. Ошибка параметра согласования.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220855",
    "desc": "LAS. Ошибка проверки информации о конфигурации автомобиля.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220949",
    "desc": "LAS. Ошибка самодиагностики ЭБУ.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220A54",
    "desc": "LAS. Камера - не откалибрована.",
    "category": "body",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "B220A63",
    "desc": "LAS. Камера - превышено время начальной калибровки.",
    "category": "body",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "B220A84",
    "desc": "LAS. Камера - онлайн калибровка неверная.",
    "category": "body",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "B220A85",
    "desc": "LAS. Первоначальная калибровка выходит за пределы диапазона.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220B16",
    "desc": "LAS. Низкое внутреннее напряжение ЭБУ.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220B17",
    "desc": "LAS. Высокое внутреннее напряжение ЭБУ.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220C45",
    "desc": "LAS. Ошибка программного обеспечения ЭБУ.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220D54",
    "desc": "LAS. Временная неисправность программного обеспечения ЭБУ.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220E60",
    "desc": "LAS. Температура ЭБУ превысила максимальный предел.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B220F32",
    "desc": "LAS. Ошибка входного параметра калибровки MPC.",
    "category": "body",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "B250001",
    "desc": "BCM. Радар - внутренняя неисправность.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B250051",
    "desc": "BCM. Радар - несоответствие программного обеспечения.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B250054",
    "desc": "BCM. Радар - оффлайн калибровка не выполнена.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B254468",
    "desc": "BCM. Радар - заблокирован.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B254476",
    "desc": "BCM. Радар - ошибка при установке.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B254478",
    "desc": "BCM. Радар - ошибка калибровки.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B254498",
    "desc": "BCM. Радар - температура выходит за пределы диапазона.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B256217",
    "desc": "BCM. Низкое напряжение питания.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "B256417",
    "desc": "BCM. Высокое напряжение источника питания.",
    "category": "body",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "C1600",
    "desc": "EPS. Слишком высокое напряжение - неисправность генератора / ненормальный запуск.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1601",
    "desc": "EPS. Слишком низкое напряжение - плохой контакт АКБ / разряжена АКБ.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1602",
    "desc": "EPS. Ненормальное отключение питания - нестабильное напряжение / перезапуск.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1603",
    "desc": "EPS. Датчик крутящего момента / датчик угла поворота руля - неверное питание / угол / повышенное или пониженное напряжение 5 В или 3.3 В / короткое замыкание / перегрузка по напряжению / неисправность компонента.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1604",
    "desc": "EPS. Датчик крутящего момента, выход 1 - нарушение питания / неисправность фланца / неисправность цепи управления.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1605",
    "desc": "EPS. Датчик крутящего момента, выход 2 - нарушение питания / неисправность фланца / неисправность цепи управления.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1606",
    "desc": "EPS. Датчик крутящего момента - ошибка корреляции выхода 1 и 2 / данные T1 и T2 сильно различается.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1607",
    "desc": "EPS. Датчик крутящего момента - ошибка калибровки.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1608",
    "desc": "EPS. Датчика положения ротора привода (электромотора) - нарушение питания / возбуждения / слишком высокое или низкое напряжение.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1609",
    "desc": "EPS. Датчика положения ротора привода (электромотора) - неверный сигнал положения / обрыв датчика / неверный сигнал АЦП.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C160A",
    "desc": "EPS. Датчика положения ротора привода (электромотора) - ошибка корреляции сигнала положения (Die1 / Dle2 отличаются).",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C160B",
    "desc": "EPS. Несоответствие угла руля и положения ротора привода (электромотора) - короткое замыкание или обрыв датчика / повреждение сцепления или подшипника.",
    "category": "chassis",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "C160C",
    "desc": "EPS. Датчик угла поворота руля - ошибка сигнала.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C160D",
    "desc": "EPS. Датчик угла поворота руля - ошибка корреляции углового сигнала.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C160E",
    "desc": "EPS. Датчик угла поворота руля - не откалибровано среднего положения руля.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C160F",
    "desc": "EPS. Привод (электромотор) - ошибка фазного тока / разбаланс напряжений.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1610",
    "desc": "EPS. Привод (электромотор) - ошибка отклонения тока / ошибка ADC.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1611",
    "desc": "EPS. Привод (электромотор) - неисправность микросхемы драйвера.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1612",
    "desc": "EPS. Выполнение программы прервано, ошибка ЭБУ.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1613",
    "desc": "EPS. Ошибка ЦПУ ЭБУ - неправильная конфигурация оборудования.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1614",
    "desc": "EPS. Ошибка тактового генератора ЭБУ, ошибка синхронизации, неправильная аппаратная конфигурация CLMA (DCT).",
    "category": "chassis",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "C1615",
    "desc": "EPS. Ошибка выполнение программы ЭБУ, выполнение программы прервано.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1616",
    "desc": "EPS. Ошибка памяти ЭБУ, повреждение памяти, неправильная конфигурация параметров ЭБУ.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1617",
    "desc": "EPS. Отсутствуют калибровочные параметры или конфигурационный код.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1618",
    "desc": "EPS. Срабатывание защиты от перегрева, слишком большое количество циклов.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "C1619",
    "desc": "EPS. Неисправность системы - ненормальный текущий крутящий момент.",
    "category": "chassis",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "P000A00",
    "desc": "ECU. Турбина - перепускной клапан WT (впуск) медленное срабатывание.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P000B00",
    "desc": "ECU. Турбина - перепускной клапан WT (выпуск) медленное срабатывание.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001000",
    "desc": "ECU. Турбина - перепускной клапан WT (впуск) обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001100",
    "desc": "ECU. Впускной распредвал - неправильная работа блокировки.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001300",
    "desc": "ECU. Турбина - перепускной клапан WT (выпуск) обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001400",
    "desc": "ECU. Выпускной распредвал - неправильная работа блокировки.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001676",
    "desc": "ECU. Коленвал - неправильное исходное положение впускного распредвала (bank1).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001678",
    "desc": "ECU. Коленвал - слишком большое отклонение относительного положения коленвала и впускного распредвала (bank1).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001776",
    "desc": "ECU. Коленвал - неправильное исходное положение выпускного распредвала (bank1).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P001778",
    "desc": "ECU. Коленвал - слишком большое отклонение относительного положения коленвала и выпускного распредвалов (bank1).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P003000",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - обрыв цепи подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P003100",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - слишком низкое напряжение цепи подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P003200",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - слишком высокое напряжение цепи подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P003300",
    "desc": "ECU. Клапан сброса наддува турбины - обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P003400",
    "desc": "ECU. Клапан сброса наддува турбины - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P003500",
    "desc": "ECU. Клапан сброса наддува турбины - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P003600",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - обрыв цепи подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P003700",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - слишком низкое напряжение цепи подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P003800",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - слишком высокое напряжение цепи подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P003A21",
    "desc": "ECU. Турбина - ошибка самообучения нуля электронной заслонки (ниже предела).",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P003A22",
    "desc": "ECU. Турбина - ошибка самообучения нуля электронной заслонки (выше предела).",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P003A72",
    "desc": "ECU. Турбина - ошибка самообучения положения электронной заслонки (выше предела).",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P003A73",
    "desc": "ECU. Турбина - ошибка самообучения положения электронной заслонки (ниже предела).",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P003C00",
    "desc": "ECU. Турбина - перепускной клапан WT (впуск) заклинило.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P005300",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - неисправность цепи обогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P005400",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - неверное сопротивление.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P005A00",
    "desc": "ECU. Турбина - перепускной клапан WT (выпуск) заклинило.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P007000",
    "desc": "ECU. Датчик температуры окружающей среды - потеря связи.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "P008700",
    "desc": "ECU. Топливная рампа высокого давления - слишком низкое давление.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P008800",
    "desc": "ECU. Топливная рампа высокого давления - слишком высокое давление.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P008984",
    "desc": "ECU. Топливная рампа высокого давления - слишком малое отклонение PID давления.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P008985",
    "desc": "ECU. Топливная рампа высокого давления - слишком большое отклонение PID давления.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P009000",
    "desc": "ECU. Топливная рампа высокого давления - короткое замыкание высоковольтной / низковольтной цепи управления форсунками.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P009626",
    "desc": "ECU. Датчик температуры во впускном коллекторе 2 - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P009700",
    "desc": "ECU. Датчик температуры во впускном коллекторе 2 - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P009800",
    "desc": "ECU. Датчик температуры во впускном коллекторе 2 - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P009900",
    "desc": "ECU. Датчик температуры во впускном коллекторе 2 - напряжение не соответствует норме.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P00C600",
    "desc": "ECU. Стартер - ненормальная работа.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P00C721",
    "desc": "ECU. Датчик давления во впускном коллекторе - cлишком низкий сигнал во время запуска.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P00C722",
    "desc": "ECU. Датчик давления во впускном коллекторе - cлишком высокий сигнал во время запуска.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P00CE23",
    "desc": "ECU. Датчик температуры во впускном коллекторе 1 - неверная калибровка при холодном пуске (отрицательное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P00CE24",
    "desc": "ECU. Датчик температуры во впускном коллекторе 1 - неверная калибровка при холодном пуске (положительное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P010621",
    "desc": "ECU. Датчик давления во впускном коллекторе - давление ниже расчетного.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P010622",
    "desc": "ECU. Датчик давления во впускном коллекторе - давление выше расчетного.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P01062A",
    "desc": "ECU. Датчик давления во впускном коллекторе - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P010700",
    "desc": "ECU. Датчик давления во впускном коллекторе - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P010800",
    "desc": "ECU. Датчик давления во впускном коллекторе - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011126",
    "desc": "ECU. Датчик температуры во впускном коллекторе 1 - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011200",
    "desc": "ECU. Датчик температуры во впускном коллекторе 1 - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011300",
    "desc": "ECU. Датчик температуры во впускном коллекторе 1 - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011400",
    "desc": "ECU. Датчик температуры во впускном коллекторе 1 - напряжение не соответствует норме.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011623",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - низкий уровень сигнала.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011626",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011700",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011800",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P011900",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - напряжение не соответствует норме.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P012100",
    "desc": "ECU. Датчик положения дроссельной заслонки 1 - неверный сигнал.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P012200",
    "desc": "ECU. Датчик положения дроссельной заслонки 1 - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P012300",
    "desc": "ECU. Датчик положения дроссельной заслонки 1 - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P012800",
    "desc": "ECU. Термостат - не достигается температура открытия.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013100",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013200",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013300",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - износ (замените датчик).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013600",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - обрыв цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013700",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013800",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P013A00",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - медленная реакция при переходе от богатой к бедной смеси.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P019000",
    "desc": "ECU. Датчик давления топливной рампы - неверное напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P019128",
    "desc": "ECU. Датчик давления топливной рампы - отрицательное смещение характеристики.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P019129",
    "desc": "ECU. Датчик давления топливной рампы - положительное смещение характеристики.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P019200",
    "desc": "ECU. Датчик давления топливной рампы - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P019300",
    "desc": "ECU. Датчик давления топливной рампы - cлишком высокое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P019400",
    "desc": "ECU. Датчик давления топливной рампы - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P020100",
    "desc": "ECU. Цилиндр 1 - обрыв цепи форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P020200",
    "desc": "ECU. Цилиндр 2 - обрыв цепи форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P020300",
    "desc": "ECU. Цилиндр 3 - обрыв цепи форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P020400",
    "desc": "ECU. Цилиндр 4 - обрыв цепи форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P022100",
    "desc": "ECU. Датчик положения дроссельной заслонки 2 - неверный сигнал.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P022200",
    "desc": "ECU. Датчик положения дроссельной заслонки 2 - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P022300",
    "desc": "ECU. Датчик положения дроссельной заслонки 2 - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P023400",
    "desc": "ECU. Турбина - давление наддува слишком высокое.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P023621",
    "desc": "ECU. Турбина - давление наддува слишком низкое.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P023622",
    "desc": "ECU. Турбина - давление наддува необоснованно высокое.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P023700",
    "desc": "ECU. Датчик давление наддува турбины - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P023800",
    "desc": "ECU. Датчик давление наддува турбины - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P024300",
    "desc": "ECU. Турбина - обрыв цепи управления сброса наддува.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P024437",
    "desc": "ECU. Турбина - превышение допустимого диапазона рабочего цикла выпускного клапана.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P024477",
    "desc": "ECU. Турбина - большое отклонение между целевым и фактическим положением выпускного клапана.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P024600",
    "desc": "ECU. Турбина - высокий или низкий уровень напряжения в цепи управления сброса наддува.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P025100",
    "desc": "ECU. Клапан управления потоком (HV или LV) - обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P025400",
    "desc": "ECU. Клапан управления потоком (HV) - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P025900",
    "desc": "ECU. Клапан управления потоком (LV) - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P026200",
    "desc": "ECU. Цилиндр 1 - слишком высокое или низкое напряжение (LV) форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P026500",
    "desc": "ECU. Цилиндр 2 - слишком высокое или низкое напряжение (LV) форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P026800",
    "desc": "ECU. Цилиндр 3 - слишком высокое или низкое напряжение (LV) форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P027100",
    "desc": "ECU. Цилиндр 4 - слишком высокое или низкое напряжение (LV) форсунки.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P029900",
    "desc": "ECU. Турбина - давление наддува слишком низкое.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": true
  },
  {
    "code": "P02CC00",
    "desc": "ECU. Цилиндр 1 - достигнут нижний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02CD00",
    "desc": "ECU. Цилиндр 1 - достигнут верхний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02CE00",
    "desc": "ECU. Цилиндр 2 - достигнут нижний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02CF00",
    "desc": "ECU. Цилиндр 2 - достигнут верхний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02D000",
    "desc": "ECU. Цилиндр 3 - достигнут нижний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02D100",
    "desc": "ECU. Цилиндр 3 - достигнут верхний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02D200",
    "desc": "ECU. Цилиндр 4 - достигнут нижний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02D300",
    "desc": "ECU. Цилиндр 4 - достигнут верхний предел самообучения CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P02EE00",
    "desc": "ECU. Цилиндр 1 - форсунка (HV и LV), короткое замыкание.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P02EF00",
    "desc": "ECU. Цилиндр 2 - форсунка (HV и LV), короткое замыкание.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P02F000",
    "desc": "ECU. Цилиндр 3 - форсунка (HV и LV), короткое замыкание.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P02F100",
    "desc": "ECU. Цилиндр 4 - форсунка (HV и LV), короткое замыкание.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P030000",
    "desc": "ECU. Случайные или множественные пропуски зажигания.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P030100",
    "desc": "ECU. Цилиндр 1 - пропуски зажигания.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P030200",
    "desc": "ECU. Цилиндр 2 - пропуски зажигания.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P030300",
    "desc": "ECU. Цилиндр 3 - пропуски зажигания.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P030400",
    "desc": "ECU. Цилиндр 4 - пропуски зажигания.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P032500",
    "desc": "ECU. Датчик детонации - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P032600",
    "desc": "ECU. Датчик детонации - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P032700",
    "desc": "ECU. Датчик детонации A - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P032714",
    "desc": "ECU. Датчик детонации B - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P032800",
    "desc": "ECU. Датчик детонации A - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P032815",
    "desc": "ECU. Датчик детонации B - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P033664",
    "desc": "ECU. Датчик коленвала - ширина импульсов датчика не соответствует норме.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P033900",
    "desc": "ECU. Датчик скорости - неверный сигнал.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P034100",
    "desc": "ECU. Датчик впускного распредвала (bank1) - неверный сигнал.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P034200",
    "desc": "ECU. Датчик впускного распредвала (bank1) - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P034300",
    "desc": "ECU. Датчик впускного распредвала (bank1) - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P035100",
    "desc": "ECU. Цилиндр 1 - катушка зажигания, обрыв цепи.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P035200",
    "desc": "ECU. Цилиндр 2 - катушка зажигания, обрыв цепи.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P035300",
    "desc": "ECU. Цилиндр 3 - катушка зажигания, обрыв цепи.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P035400",
    "desc": "ECU. Цилиндр 4 - катушка зажигания, обрыв цепи.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P036300",
    "desc": "ECU. Пропуски зажигания, вызывающие отсечку топлива.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": true
  },
  {
    "code": "P036600",
    "desc": "ECU. Датчик выпускного распредвала (bank1) - неверный сигнал.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P036700",
    "desc": "ECU. Датчик выпускного распредвала (bank1) - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P036800",
    "desc": "ECU. Датчик выпускного распредвала (bank1) - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P042000",
    "desc": "ECU. Катализатор - износ (замените катализатор).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P044200",
    "desc": "ECU. Система улавливания паров топлива - негерметичность, эквивалентная отверстию в 1.0 мм.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P044400",
    "desc": "ECU. Клапан адсорбера (контрольный) - обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P044700",
    "desc": "ECU. Клапан адсорбера (вентиляционный) - обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P045125",
    "desc": "ECU. Датчик давления в баке - колебания сигнала.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P045128",
    "desc": "ECU. Датчик давления в баке - смещение сигнала.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P04512A",
    "desc": "ECU. Датчик давления в баке - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P045200",
    "desc": "ECU. Датчик давления в баке - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P045300",
    "desc": "ECU. Датчик давления в баке - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P045500",
    "desc": "ECU. Система улавливания паров топлива - негерметичность, эквивалентная отверстию в 2.2 мм / незакрытая крышка бака.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P045800",
    "desc": "ECU. Клапан адсорбера - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P045900",
    "desc": "ECU. Клапан адсорбера - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P046000",
    "desc": "ECU. Датчик уровня топлива - неверный исходный сигнал.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P046129",
    "desc": "ECU. Датчик уровня топлива - сигнал уровня топлива не соответствует действительности.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P046200",
    "desc": "ECU. Датчик уровня топлива - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P046300",
    "desc": "ECU. Датчик уровня топлива - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P046700",
    "desc": "ECU. Датчик давления линии высоконагруженной десорбции (EVAP) - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P046800",
    "desc": "ECU. Датчик давления линии высоконагруженной десорбции (EVAP) - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P048000",
    "desc": "ECU. Вентилятор охлаждения - обрыв цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P048371",
    "desc": "ECU. Вентилятор охлаждения - несоответствие между фактическими и ожидаемыми параметрами (тип 1).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P048372",
    "desc": "ECU. Вентилятор охлаждения - несоответствие между фактическими и ожидаемыми параметрами (тип 2).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P049600",
    "desc": "ECU. Клапан адсорбера - заклинило в открытом состоянии.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P049700",
    "desc": "ECU. Клапан адсорбера - заклинило в закрытом положении.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P049800",
    "desc": "ECU. Клапан адсорбера (вентиляционный) - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P049900",
    "desc": "ECU. Клапан адсорбера (вентиляционный) - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P04F000",
    "desc": "ECU. Клапан адсорбера - неисправность линии высоконагруженной десорбции.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050000",
    "desc": "ECU. Датчик скорости - неверный входной сигнал.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P050165",
    "desc": "ECU. Датчик скорости - слишком низкая скорость при торможении двигателем.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050166",
    "desc": "ECU. Датчик скорости - слишком низкая скорость при высокой нагрузке на двигатель.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050400",
    "desc": "ECU. Датчик скорости - ошибка корреляции сигнала торможения.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P050600",
    "desc": "ECU. Холостой ход двигателя - слишком низкие обороты.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050700",
    "desc": "ECU. Холостой ход двигателя - слишком высокие обороты.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050A21",
    "desc": "ECU. Холостой ход двигателя - слишком низкие обороты при прогреве катализатора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050A22",
    "desc": "ECU. Холостой ход двигателя - слишком высокие обороты при прогреве катализатора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050B00",
    "desc": "ECU. Холостой ход двигателя - ошибка контроля эффективности угла зажигания при прогреве катализатора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P050C23",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - неверная калибровка при холодном пуске (отрицательное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P050C24",
    "desc": "ECU. Датчик температуры охлаждающей жидкости - неверная калибровка при холодном пуске (положительное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P051300",
    "desc": "ECU. Несоответствие ответа EMS внутренним расчетам.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P052200",
    "desc": "ECU. Датчик давления масла - неверные показания низкого давления масла.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P052300",
    "desc": "ECU. Датчик давления масла - неверные показания высокого давления масла.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P053F21",
    "desc": "ECU. Датчик давления масла - слишком низкое давление в магистрали высокого давления при прогреве катализатора.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P053F22",
    "desc": "ECU. Датчик давления масла - слишком высокое давление в магистрали высокого давления при прогреве катализатора.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P055700",
    "desc": "ECU. Датчик вакуумного давления тормозной камеры - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Тормозная система и EPB",
    "isGeneric": true
  },
  {
    "code": "P055800",
    "desc": "ECU. Датчик вакуумного давления тормозной камеры - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Тормозная система и EPB",
    "isGeneric": true
  },
  {
    "code": "P056200",
    "desc": "ECU. Аккумулятор - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P056300",
    "desc": "ECU. Аккумулятор - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P057100",
    "desc": "ECU. Круиз-контроль - сигнал торможения не синхронизирован.",
    "category": "powertrain",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": true
  },
  {
    "code": "P057500",
    "desc": "ECU. Круиз-контроль - неверный сигнал.",
    "category": "powertrain",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": true
  },
  {
    "code": "P057600",
    "desc": "ECU. Круиз-контроль - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": true
  },
  {
    "code": "P057700",
    "desc": "ECU. Круиз-контроль - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": true
  },
  {
    "code": "P057800",
    "desc": "ECU. Круиз-контроль - заклинило кнопку.",
    "category": "powertrain",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": true
  },
  {
    "code": "P058500",
    "desc": "ECU. Круиз-контроль - неисправность AD преобразования.",
    "category": "powertrain",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": true
  },
  {
    "code": "P05BD00",
    "desc": "ECU. Переключатель Start / Stop - заклинило кнопку.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P05EC00",
    "desc": "ECU. Ошибка контроля многоточечного впрыска при прогреве катализатора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P060D00",
    "desc": "ECU. Неисправность ЭБУ - неверный сигнал педали акселератора (второй уровень).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P061500",
    "desc": "ECU. Реле стартера - клемма управления A, неисправность цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P061600",
    "desc": "ECU. Реле стартера - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P061700",
    "desc": "ECU. Реле стартера - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P061A00",
    "desc": "ECU. Ошибка контроля крутящего момента - расхождение между расчетным и фактическим значением (второй уровень).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P061C00",
    "desc": "ECU. Ошибка контроля оборотов двигателя - расхождение между расчетным и фактическим значением (второй уровень).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P062700",
    "desc": "ECU. Реле топливного насоса - обрыв цепь.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P062800",
    "desc": "ECU. Реле топливного насоса - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P062900",
    "desc": "ECU. Реле топливного насоса - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P062B64",
    "desc": "ECU. Неверное / противоречивое поведение сигналов в параллельных (дублирующих) цепях.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P062B96",
    "desc": "ECU. Неисправность ЭБУ - ошибки CVO всех цилиндров.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P062B9A",
    "desc": "ECU. Превышение допустимых пределов самоадаптации системы.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P063000",
    "desc": "ECU. VIN-код не прописан или несовместим.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P063300",
    "desc": "EMS. EMS не обучается SK.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P063400",
    "desc": "ECU. Вентилятор охлаждения - перегрев микросхемы-драйвера.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P063441",
    "desc": "ECU. Стартер - перегрев микросхемы-драйвера привода.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P063444",
    "desc": "ECU. Неисправность ЭБУ.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P063445",
    "desc": "ECU. Неисправность ЭБУ.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P064100",
    "desc": "ECU. Неисправность блока 1 питания 5V.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P064500",
    "desc": "ECU. Реле компрессора кондиционера - обрыв цепи.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P064600",
    "desc": "ECU. Реле компрессора кондиционера - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P064700",
    "desc": "ECU. Реле компрессора кондиционера - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": true
  },
  {
    "code": "P064D00",
    "desc": "ECU. Ошибка записи в регистр встроенной микросхемы LSU.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P064D13",
    "desc": "ECU. Ошибка связи SPI встроенной микросхемы LSU.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "P065100",
    "desc": "ECU. Неисправность блока 2 питания 5V.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0666",
    "desc": "TCU. Датчик температуры печатной платы - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P068500",
    "desc": "ECU. Главное реле - обрыв цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P068600",
    "desc": "ECU. Главное реле - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P06869E",
    "desc": "ECU. Главное реле ECM / PCM - заклинило или короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P068700",
    "desc": "ECU. Главное реле - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P069100",
    "desc": "ECU. Вентилятор охлаждения - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P069200",
    "desc": "ECU. Вентилятор охлаждения - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P069700",
    "desc": "ECU. Неисправность блока 3 питания 5V.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P06B842",
    "desc": "ECU. Блок памяти NVM - ошибка чтения.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P06B843",
    "desc": "ECU. Блок памяти NVM - ошибка записи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P06DA00",
    "desc": "ECU. Дополнительный масляный насос - обрыв цепи.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P06DB00",
    "desc": "ECU. Дополнительный масляный насос - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P06DC00",
    "desc": "ECU. Дополнительный масляный насос - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "P070000",
    "desc": "TCU. Неисправность трансмиссии, включение лампы MIL.",
    "category": "powertrain",
    "system": "Освещение и оптика",
    "isGeneric": true
  },
  {
    "code": "P0705",
    "desc": "TCU. Датчик PRND - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0710",
    "desc": "TCU. Датчик температуры масла - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0715",
    "desc": "TCU. Датчик частоты вращения входного вала - короткое замыкание на плюс / короткое замыкание на массу / слишком высокая скорость изменения / слишком высокий сигнал / обрыв цепи).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0720",
    "desc": "TCU. Датчик частоты вращения выходного вала - короткое замыкание на плюс / короткое замыкание на массу / слишком высокая скорость изменения / слишком высокий сигнал / обрыв цепи / ошибка калибровки / ошибка, зависящая от частоты вращения - ошибка двух или более сигналов частоты вращения.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0750",
    "desc": "TCU. Переключающий клапан 1 (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неверный тока разряда MOSFET транзистора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0752",
    "desc": "TCU. Рычаг переключения передач - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P0755",
    "desc": "TCU. Переключающий клапан 2 (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неверный тока разряда MOSFET транзистора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P077B",
    "desc": "TCU. Датчик частоты вращения выходного вала - направление равно 0, а частота вращения слишком высокая.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0813",
    "desc": "TCU. Реле фонаря заднего хода - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Освещение и оптика",
    "isGeneric": true
  },
  {
    "code": "P0840",
    "desc": "TCU. Датчик сцепления 1 - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P0845",
    "desc": "TCU. Датчик сцепления 2 - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P0880",
    "desc": "TCU. Электрическая цепь стопора / ключа-фиксатора - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0885",
    "desc": "TCU. Цепь разрешения запуска - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0900",
    "desc": "TCU. Ошибка запроса сцепления 1 - фактическое давление слишком высокое или низкое по сравнению с заданным.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P090A",
    "desc": "TCU. Ошибка запроса сцепления 2 - фактическое давление слишком высокое или низкое по сравнению с заданным.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P0942",
    "desc": "TCU. Ошибка давления - неисправность компенсации.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": true
  },
  {
    "code": "P0960",
    "desc": "TCU. Клапан соленоида смазки (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неисправность тока разряда MOSFET транзистора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0964",
    "desc": "TCU. Главный клапан соленоида давления (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неисправность тока разряда MOSFET транзистора.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": true
  },
  {
    "code": "P0968",
    "desc": "TCU. Соленоид сцепления 1 (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неисправность тока разряда MOSFET транзистора.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "P120000",
    "desc": "ECU. Датчик давления во впускном коллекторе - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1201",
    "desc": "TCU. Превышение скорости, вилка переключения передач 1.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P120100",
    "desc": "ECU. Датчик давления во впускном коллекторе - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1202",
    "desc": "TCU. Превышение скорости, вилка переключения передач 2.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P120200",
    "desc": "ECU. Датчик атмосферного давления - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1203",
    "desc": "TCU. Превышение скорости, вилка переключения передач 3.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P120300",
    "desc": "ECU. Датчик атмосферного давления - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1204",
    "desc": "TCU. Превышение скорости, вилка переключения передач 4.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P120400",
    "desc": "ECU. Датчик давления наддува - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": false
  },
  {
    "code": "P1205",
    "desc": "TCU. Ошибка самообучения положения вилки переключения передач - ошибка адаптации.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P120500",
    "desc": "ECU. Датчик давления наддува - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": false
  },
  {
    "code": "P121000",
    "desc": "ECU. Датчик давления масла - низкий рабочий цикл.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P121200",
    "desc": "ECU. Датчик скорости автомобиля - скорость выше максимального диапазона.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1213",
    "desc": "TCU. Датчика 5 В, источник питания 1 - короткое замыкание на плюс / слишком высокое напряжение или ток.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1214",
    "desc": "TCU. Датчика 5 В, источник питания 2 - короткое замыкание на плюс / слишком высокое напряжение или ток.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1216",
    "desc": "TCU. Датчика 8 В, источник питания 1 - короткое замыкание на плюс / слишком высокое напряжение или ток.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1217",
    "desc": "TCU. Датчика 8 В, источник питания - короткое замыкание на плюс / слишком высокое напряжение или ток.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1218",
    "desc": "TCU. Датчика 8 В, источник питания - ошибка по напряжению.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1243",
    "desc": "TCU. Перегрев сцепления 1 - слишком высокая температура.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P1244",
    "desc": "TCU. Перегрев сцепления 2 - слишком высокая температура.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P1245",
    "desc": "TCU. Клапан соленоида 1 (HV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P1246",
    "desc": "TCU. Клапан соленоида 2 (HV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P1247",
    "desc": "TCU. Клапан соленоида 3 (HV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P1250",
    "desc": "TCU. Адаптация сцепления PT - слишком высокий или низкий сигнал / общая ошибка.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P1251",
    "desc": "TCU. Блок памяти NVM - низкоуровневая неисправность.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1252",
    "desc": "TCU. Блок памяти NVM - критическое состояние.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1253",
    "desc": "TCU. Ошибка данных калибровки - несоответствие данных.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P1254",
    "desc": "TCU. Ошибка включения (зацепления) сцепления.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P126100",
    "desc": "ECU. Цилиндр 1 - неверный сигнал CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P126200",
    "desc": "ECU. Цилиндр 2 - неверный сигнал CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P126300",
    "desc": "ECU. Цилиндр 3 - неверный сигнал CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P126400",
    "desc": "ECU. Цилиндр 4 - неверный сигнал CVO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P128200",
    "desc": "ECU. Датчик давления в баке - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P128300",
    "desc": "ECU. Датчик давления в баке - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P128400",
    "desc": "ECU. Датчик уровня топлива - превышение диапазона сигнала уровня топлива.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P128500",
    "desc": "ECU. Датчика давления линии высоконагруженной десорбции - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P128600",
    "desc": "ECU. Датчика давления линии высоконагруженной десорбции - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P12A0",
    "desc": "TCU. Ошибка системы безопасности.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P12A1",
    "desc": "TCU. Защита от перегрева трансмиссионной жидкости - слишком высокая температура.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P12A2",
    "desc": "TCU. Защита от перегрева сцепления - слишком высокая температура / неисправность датчика / слишком высокий или низкий сигнал.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P12A6",
    "desc": "TCU. Датчик температуры сцепления - слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P12AE",
    "desc": "TCU. Клапан соленоида - неисправность микросхемы-драйвера / ошибки корреляции / связи / разблокировки контактов / включения / обработки данных.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P12AF",
    "desc": "TCU. Ошибка системы безопасности (базовая) - ошибка ввода / вывода. P12AЗ TCU. Датчик температуры сцепления - высокая температура трансмиссионной жидкости.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P12B1",
    "desc": "TCU. Ошибка сброса - ошибки аппаратного сброса / программного сброса / полного сброса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P12C200",
    "desc": "ECU. Диагностическая цепь вентиляции картера - высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P12C300",
    "desc": "ECU. Диагностическая цепь вентиляции картера - низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P130000",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - дополнительная неисправность.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P130100",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - сухой ход.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P130500",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - перегрев.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P130800",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - блокировка.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P138023",
    "desc": "ECU. Датчик температуры во впускном коллекторе 2 - неверная калибровка при холодном пуске (отрицательное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P138024",
    "desc": "ECU. Датчик температуры во впускном коллекторе 2 - неверная калибровка при холодном пуске (положительное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P138823",
    "desc": "ECU. Датчик температуры окружающей среды - неверная калибровка при холодном пуске (отрицательное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P138824",
    "desc": "ECU. Датчик температуры окружающей среды - неверная калибровка при холодном пуске (положительное отклонение).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P141500",
    "desc": "ECU. Превышено время ожидания ответа LIN-шины между EMS и интеллектуальным генератором.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P141700",
    "desc": "ECU. Ошибка контрольной суммы LIN-шины между EMS и интеллектуальным генератором.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P142000",
    "desc": "ECU. Превышено время ожидания ответа регистра CAN.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P142100",
    "desc": "ECU. Превышено время ожидания ответа регистра LIN.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P142800",
    "desc": "ECU. Превышение времени приема сообщения LIN1.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P143000",
    "desc": "ECU. Аккумулятор - неверный тип.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P143100",
    "desc": "EBS. Неисправность EBS или аккумулятора.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P143200",
    "desc": "EBS. Слишком высокая загрузка связи.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P144000",
    "desc": "ECU. Интеллектуальный генератор - неисправность цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P144100",
    "desc": "ECU. Интеллектуальный генератор - механическая неисправность.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P144200",
    "desc": "ECU. Интеллектуальный генератор - неисправность связи.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P14A300",
    "desc": "ECU. Переключатель Start / Stop (светодиод GREEN) - напряжение слишком высокое.",
    "category": "powertrain",
    "system": "Освещение и оптика",
    "isGeneric": false
  },
  {
    "code": "P14A400",
    "desc": "ECU. Переключатель Start / Stop (светодиод GREEN) - напряжение слишком низкое.",
    "category": "powertrain",
    "system": "Освещение и оптика",
    "isGeneric": false
  },
  {
    "code": "P14A500",
    "desc": "ECU. Переключатель Start / Stop (светодиод GREEN) - обрыв цепи.",
    "category": "powertrain",
    "system": "Освещение и оптика",
    "isGeneric": false
  },
  {
    "code": "P14AC00",
    "desc": "ECU. Стартер - поврежден или обрыв цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P14AD00",
    "desc": "ECU. Заблокирован двигатель или отсутствует зацепление стартера с маховиком.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P14AE00",
    "desc": "ECU. Сигнальный провод KL50r стартера - короткое замыкание на плюс или заклинило реле R1.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P14AF00",
    "desc": "ECU. Сигнальный провод KL50r стартера - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P150000",
    "desc": "ECU. Автомобиль получил сигнал отключения при аварии.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P150100",
    "desc": "ECU. Подушки безопасности - неверная информация связи.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P151000",
    "desc": "ECU. Датчик детонации - ошибка оценки сигнала.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P152000",
    "desc": "ECU. Ошибка контроля прогноза нагрузки.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P152100",
    "desc": "ECU. Ошибка контроля топливной системы в режиме отсечки топлива.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P152200",
    "desc": "ECU. Ошибка контроля топливной системы в режиме подачи топлива.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P152700",
    "desc": "ECU. Ошибка контроля аварийной отсечки топлива (первый уровень).",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P152800",
    "desc": "ECU. Ошибка контроля аварийной отсечки топлива (второй уровень).",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P152900",
    "desc": "ECU. Ошибка контроля управления стартером.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P153000",
    "desc": "ECU. Ошибка контроля нулевого теста AD преобразователя.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P153100",
    "desc": "ECU. Ошибка контроля заданного напряжения теста AD преобразователя.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P153500",
    "desc": "ECU. Ошибка контроля состава смеси.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P153600",
    "desc": "ECU. Ошибка контроля режима работы.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P153700",
    "desc": "ECU. Ошибка контроля сравнения нагрузки.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P153800",
    "desc": "ECU. Ошибка сигнала угла зажигания, проводки или ECU.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P153900",
    "desc": "ECU. Несоответствие между фактическими и ожидаемыми параметрами процесса синхронизации (на основе скорости и счетчика синхронизации).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P155000",
    "desc": "ECU. Дроссельная заслонка - условие самообучения не выполнено.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155100",
    "desc": "ECU. Дроссельная заслонка - ошибка самообучения при инициализации нижнего предельного положения.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155400",
    "desc": "ECU. Дроссельная заслонка - ошибка проверки возвратной пружины (максимум).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155500",
    "desc": "ECU. Дроссельная заслонка - ошибка проверки возвратной пружины (минимум).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155600",
    "desc": "ECU. Дроссельная заслонка - ошибка повторного самообучения мертвой точки (максимум).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155700",
    "desc": "ECU. Дроссельная заслонка - ошибка повторного самообучения мертвой точки (минимум).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155800",
    "desc": "ECU. Дроссельная заслонка - положение и начальное отклонение самообучения выходят за пределы диапазона.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155900",
    "desc": "ECU. Дроссельная заслонка - превышение верхнего предела положения.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155A00",
    "desc": "ECU. Дроссельная заслонка - предельное положение и предыдущее отклонение самообучения превышают предел.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P155B00",
    "desc": "ECU. Дроссельная заслонка - превышение нижнего предела положения.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P156000",
    "desc": "ECU. Дроссельная заслонка - PID-регулирование за пределами диапазона.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P156100",
    "desc": "ECU. Ошибка отклонения положения DVE - несоответствие между фактическим и ожидаемым положением электронно-управляемого клапана.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P157100",
    "desc": "ECU. Ошибка в системе контроля передачи крутящего момента или ошибка связи между ЭБУ.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P157200",
    "desc": "ECU. Активация ABE при нормальном напряжении.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P157300",
    "desc": "ECU. Ошибка в системе мониторинга и обратной связи между ЭБУ.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P157400",
    "desc": "ECU. Активация аварийного сигнала (Errorpin) при нормальной связи между системами.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P157500",
    "desc": "ECU. Отключение привода DVE из-за перенапряжения.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A000",
    "desc": "ECU. CPU0 - ошибка MPU (регистры, DSPR, PSPR).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A100",
    "desc": "ECU. CPU0 - DCACHE / DSPR ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A200",
    "desc": "ECU. CPU0 - DCACHE / DSPR ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A300",
    "desc": "ECU. CPU0 - DCACHE / TAGRAM ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A400",
    "desc": "ECU. CPU0 - DCACHE / TAGRAM ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A500",
    "desc": "ECU. CPU0 - PCACHE / TAGRAM ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A600",
    "desc": "ECU. CPU0 - PCACHE / TAGRAM ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A700",
    "desc": "ECU. CPU0 - PCACHE / PSPR ошибка ECC.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A800",
    "desc": "ECU. CPU0 - PCACHE / PSPR ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15A900",
    "desc": "ECU. CPU1 - ошибка компаратора Lockstep.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15AA00",
    "desc": "ECU. CPU1 - ошибка MPU (регистры, DSPR, PSPR).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15AB00",
    "desc": "ECU. CPU1 - DCACHE / DSPR ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15AC00",
    "desc": "ECU. CPU1 - DCACHE / DSPR ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15AD00",
    "desc": "ECU. CPU1 - DCACHE / TAGRAM ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15AE00",
    "desc": "ECU. CPU1 - DCACHE / TAGRAM ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15AF00",
    "desc": "ECU. CPU1 - PCACHE / TAGRAM ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B000",
    "desc": "ECU. CPU1 - PCACHE / TAGRAM ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B100",
    "desc": "ECU. CPU1 - PCACHE / PSPR ошибка ECC.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B200",
    "desc": "ECU. CPU1 - PCACHE / PSPR ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B300",
    "desc": "LMU. Ошибка контроля коррекции ошибок (ECC) памяти SRAM.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B400",
    "desc": "LMU. Ошибка коррекции ошибок (ECC) памяти SRAM (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B500",
    "desc": "LMU. Ошибка адреса памяти SRAM.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B600",
    "desc": "SMU. Превышено время ожидания восстановления Timer 0.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B700",
    "desc": "SMU. Превышено время ожидания восстановления Timer 1.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B800",
    "desc": "PMU. Ошибка коррекции ошибок (ECC) памяти PFLASH (многобитовая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15B900",
    "desc": "PMU. Ошибка адреса памяти PFLASH.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15BA00",
    "desc": "PMU. Ошибка контроля коррекции ошибок (ECC) памяти PFLASH (все модули).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15BB00",
    "desc": "PMU. Ошибка компаратора памяти PFLASH (все экземпляры PFLASH).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15BC00",
    "desc": "SCU / CGU. Превышение тактовой частоты PLL.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15BD00",
    "desc": "SCU / CGU. Потеря тактовой частоты PLL генератора VCO.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15BE00",
    "desc": "SCU / EVR. Пониженное напряжение 1.3V.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15BF00",
    "desc": "SCU / EVR. Повышенное напряжение 3.3V.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C000",
    "desc": "SCU / EVR. Повышенное напряжение внешнего питания.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C100",
    "desc": "SCU / WDTS. Превышено время ожидания сторожевого таймера (watchdog).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C200",
    "desc": "SCU / WDT. CPU0 - превышено время ожидания сторожевого таймера (watchdog).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C300",
    "desc": "SCU / WDT. Превышено время ожидания сторожевого таймера (watchdog) CPU1.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C400",
    "desc": "SCU / CGU. Потеря тактовой частоты PLL генератора VCO (PLL_ERAY).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C500",
    "desc": "SCU / WDT. Превышено время ожидания сторожевого таймера (watchdog) CPU2.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C600",
    "desc": "SCU / DTS. Перегрев датчика температуры.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C700",
    "desc": "ECU. Несоответствие контрольных значений в системных регистрах.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15C800",
    "desc": "SCU / LSCU. Несоответствие между основным (SCU) и резервным (LSCU) контроллерами рулевого управления.",
    "category": "powertrain",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "P15C900",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (STM вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15CA00",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (PLL_ERAY вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15CB00",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (PLL вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15CC00",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (SRI вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15CD00",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (SPB вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15CE00",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (GTM вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15CF00",
    "desc": "SCU / CGU. Ошибка мониторинга тактовой частоты (ADC вне диапазона).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D000",
    "desc": "GTM. Ошибка памяти SRAM (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D100",
    "desc": "FLEXRAY. Ошибка адреса памяти SRAM.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D200",
    "desc": "ECU. Различные модули памяти SRAM - ошибка коррекции ошибок (ECC) памяти SRAM (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D300",
    "desc": "ECU. Различные модули памяти SRAM - ошибка адреса памяти SRAM.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D400",
    "desc": "GTM. Ошибка адреса памяти SRAM.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D500",
    "desc": "ECU. CAN-модуль - неисправимая ошибка памяти SRAM.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P15D600",
    "desc": "ECU. CAN-модуль - ошибка адреса памяти SRAM.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P15D700",
    "desc": "FLEXRAY. Ошибка коррекции ошибок (ECC) памяти SRAM (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D800",
    "desc": "ECU. CPU2 - ошибка MPU (регистры, DSPR, PSPR).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15D900",
    "desc": "ECU. CPU2 - DCACHE / DSPR ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15DA00",
    "desc": "ECU. CPU2 - DCACHE / DSPR ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15DB00",
    "desc": "ECU. CPU2 - DCACHE / TAGRAM ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15DC00",
    "desc": "ECU. CPU2 - DCACHE / TAGRAM ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15DD00",
    "desc": "ECU. CPU2 - PCACHE / TAGRAM ошибка ECC (неисправимая).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15DE00",
    "desc": "ECU. CPU2 - PCACHE / TAGRAM ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15DF00",
    "desc": "ECU. CPU2 - PCACHE / PSPR ошибка ECC.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P15E000",
    "desc": "ECU. CPU2 - PCACHE / PSPR ошибка адреса.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P161000",
    "desc": "PEPS. EMS не получает корректный ответ, запуск двигателя запрещен.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P161200",
    "desc": "PEPS. Неверное значение Supplier ID.",
    "category": "powertrain",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "P161300",
    "desc": "PEPS. EMS получила неверный формат ответа.",
    "category": "powertrain",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "P161400",
    "desc": "PEPS. Ошибка контрольной суммы ответа одобрения.",
    "category": "powertrain",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "P161500",
    "desc": "PEPS. Несоответствие конфигурации EMS и противоугонной системы.",
    "category": "powertrain",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "P170300",
    "desc": "ECU. Турбина - ошибка связи в системе управления давлением наддува.",
    "category": "powertrain",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "P208800",
    "desc": "ECU. Турбина - слишком низкое напряжение в цепи управления перепускным клапаном WT (впуск).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P208900",
    "desc": "ECU. Турбина - слишком высокое напряжение в цепи управления перепускным клапаном WT (впуск).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P209000",
    "desc": "ECU. Турбина - слишком низкое напряжение в цепи управления перепускным клапаном WT (выпуск).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P209100",
    "desc": "ECU. Турбина - слишком высокое напряжение в цепи управления перепускным клапаном WT (выпуск).",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P209600",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - превышение нижнего предела коррекции, слишком бедная смесь.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P209700",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - превышение верхнего предела коррекции, слишком богатая смесь.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P210000",
    "desc": "ECU. Дроссельная заслонка - неисправность привода (электромотора), обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P210300",
    "desc": "ECU. Дроссельная заслонка - неисправность привода (электромотора), короткое замыкание.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P210600",
    "desc": "ECU. Дроссельная заслонка - неисправность привода (электромотора), неверный сигнал.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P211800",
    "desc": "ECU. Дроссельная заслонка - неисправность привода (электромотора), перегрев или перегрузка по току.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P212200",
    "desc": "ECU. Датчик положения педали акселератора 1 - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P212300",
    "desc": "ECU. Датчик положения педали акселератора 1 - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P212700",
    "desc": "ECU. Датчик положения педали акселератора 2 - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P212800",
    "desc": "ECU. Датчик положения педали акселератора 2 - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P213800",
    "desc": "ECU. Датчик положения педали акселератора - неверный сигнал.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P214800",
    "desc": "ECU. Цилиндр 4 - форсунка (HV), слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P215100",
    "desc": "ECU. Цилиндр 3 - форсунка (HV), слишком высокое или низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P217700",
    "desc": "ECU. Самообучение коррекции топливовоздушной смеси (средняя нагрузка) - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P217800",
    "desc": "ECU. Самообучение коррекции топливовоздушной смеси (средняя нагрузка) - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P218700",
    "desc": "ECU. Самообучение коррекции топливовоздушной смеси (холостой ход) - превышение верхнего предела.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P218800",
    "desc": "ECU. Самообучение коррекции топливовоздушной смеси (холостой ход) - превышение нижнего предела.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P219500",
    "desc": "ECU. Кислородный датчик (лямбда-зонд) - смещение характеристики LSU, бедная смесь.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P219600",
    "desc": "ECU. Кислородный датчик (лямбда-зонд) - смещение характеристики LSU, богатая смесь.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222721",
    "desc": "ECU. Датчик атмосферного давления - слишком низкое давление.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222722",
    "desc": "ECU. Датчик атмосферного давления - слишком высокое давление.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222729",
    "desc": "ECU. Датчик атмосферного давления - неверный сигнала.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222784",
    "desc": "ECU. Датчик атмосферного давления - слишком низкий сигнал при запуске.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222785",
    "desc": "ECU. Датчик атмосферного давления - слишком высокий сигнал при запуске.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222800",
    "desc": "ECU. Датчик атмосферного давления - короткое замыкание на массу.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P222900",
    "desc": "ECU. Датчик атмосферного давления - короткое замыкание на плюс.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P223200",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - короткое замыкание между сигнальным проводом и цепью подогрева.",
    "category": "powertrain",
    "system": "Обогревы и климат-контроль",
    "isGeneric": false
  },
  {
    "code": "P223713",
    "desc": "ECU. Кислородный датчик (лямбда-зонд) - обрыв цепи APE LSU.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P224300",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - обрыв цепи RE.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P225100",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - обрыв цепи IPE.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P226100",
    "desc": "ECU. Клапан сброса наддува турбины - механическая неисправность.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P227000",
    "desc": "ECU. Нижний кислородный датчик (лямбда-зонд) - постоянный сигнал бедной смеси, износ (замените датчик).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P227100",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - постоянный сигнал богатой смеси, износ (замените датчик).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P230000",
    "desc": "ECU. Цилиндр 1 - катушка зажигания, слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P230100",
    "desc": "ECU. Цилиндр 1 - катушка зажигания, слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P230300",
    "desc": "ECU. Цилиндр 2 - катушка зажигания, слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P230400",
    "desc": "ECU. Цилиндр 2 - катушка зажигания, слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P230600",
    "desc": "ECU. Цилиндр 3 - катушка зажигания, слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P230700",
    "desc": "ECU. Цилиндр 3 - катушка зажигания, слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P230900",
    "desc": "ECU. Цилиндр 4 - катушка зажигания, слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P231000",
    "desc": "ECU. Цилиндр 4 - катушка зажигания, слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P241400",
    "desc": "ECU. Верхний кислородный датчик (лямбда-зонд) - неверное выходное напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P242200",
    "desc": "ECU. Клапан адсорбера (вентиляционный) - заклило в закрытом положении.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P2530",
    "desc": "TCU. Ошибка сигнала включения зажигания - слишком высокое или низкое напряжение питания.",
    "category": "powertrain",
    "system": "Система зажигания",
    "isGeneric": false
  },
  {
    "code": "P256400",
    "desc": "ECU. Датчик положения заслонки турбины - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": false
  },
  {
    "code": "P256500",
    "desc": "ECU. Датчик положения заслонки турбины - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Турбонаддув и впуск",
    "isGeneric": false
  },
  {
    "code": "P25A900",
    "desc": "ECU. Клапан охлаждающих форсунок поршней - обрыв цепи.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P25AA00",
    "desc": "ECU. Клапан охлаждающих форсунок поршней - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P25AB00",
    "desc": "ECU. Клапан охлаждающих форсунок поршней - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P25B000",
    "desc": "ECU. Датчик уровня топлива - сигнал долго не изменяется (ненормально стабильный).",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P261000",
    "desc": "ECU. Неверное время выключения.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P261700",
    "desc": "ECU. Потеря сигнала датчика скорости.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P261A00",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - обрыв цепи.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P261C00",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P261D00",
    "desc": "ECU. Электрический водяной насос охлаждения турбины - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Топливная система ДВС",
    "isGeneric": false
  },
  {
    "code": "P26E400",
    "desc": "ECU. Реле стартера - клемма управления B, неисправность цепи.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P26E500",
    "desc": "ECU. Реле стартера - слишком низкое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P26E600",
    "desc": "ECU. Реле стартера - слишком высокое напряжение.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P26F000",
    "desc": "ECU. Реле стартера - не отключается после запуска двигателя.",
    "category": "powertrain",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "P26F100",
    "desc": "ECU. Реле стартера - неисправность главного реле стартера (Starter Relay) / реле втягивающего устройства (Crank Relay) / реле статуса (Power Take-off State Relay).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P26F200",
    "desc": "ECU. Реле стартера - не отключается реле статуса (Power Take-off State Relay).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P2727",
    "desc": "TCU. Клапан соленоида сцепления 2 (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неисправность тока разряда MOSFET транзистора).",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2765",
    "desc": "TCU. Датчик частоты вращения наружного входного вала 2 - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокая скорость изменения / слишком высокий сигнал / ошибка калибровки).",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P2784",
    "desc": "TCU. Датчик частоты вращения внутреннего входного вала - ошибка калибровки частоты вращения.",
    "category": "powertrain",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "P2831",
    "desc": "TCU. Датчик перемещения 1-й вилки переключения 5-й / 7-й передачи - слишком высокое или низкое напряжение / ошибки позиционирования.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2836",
    "desc": "TCU. Датчик перемещения 2-й вилки переключения 2-й / 6-й передачи - слишком высокое или низкое напряжение / ошибки позиционирования.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P283B",
    "desc": "TCU. Датчик перемещения 3-й вилки переключения 4-й / R передачи - слишком высокое или низкое напряжение / ошибки позиционирования.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2840",
    "desc": "TCU. Датчик перемещения 4-й вилки переключения 1-й / 3-й передачи - слишком высокое или низкое напряжение / ошибки позиционирования.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2845",
    "desc": "TCU. Ошибка выхода из зацепления 5-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2846",
    "desc": "TCU. Ошибка выхода из зацепления 2-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2847",
    "desc": "TCU. Ошибка выхода из зацепления 4-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2848",
    "desc": "TCU. Ошибка выхода из зацепления 1-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2849",
    "desc": "TCU. Ошибка фиксации 3-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P284A",
    "desc": "TCU. Ошибка фиксации 6-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P284B",
    "desc": "TCU. Ошибка фиксации 7-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P284C",
    "desc": "TCU. Ошибка фиксации R передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P284D",
    "desc": "TCU. Передача 3 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P284E",
    "desc": "TCU. Передача 6 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P284F",
    "desc": "TCU. Передача 7 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2850",
    "desc": "TCU. Передача R не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P285B",
    "desc": "TCU. Клапан соленоида переключения передач 1 (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неисправность тока разряда MOSFET транзистора).",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P285C",
    "desc": "TCU. Ошибка выхода из зацепления 6-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P285D",
    "desc": "TCU. Ошибка выхода из зацепления 7-й передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P285E",
    "desc": "TCU. Ошибка выхода из зацепления R передачи.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P285F",
    "desc": "TCU. Неисправность клапана соленоида переключения передач 2 (LV) - короткое замыкание на массу / короткое замыкание на плюс / обрыв цепи / слишком высокий или низкий ток / неожиданное отключение канала / неисправность тока разряда MOSFET транзистора).",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2872",
    "desc": "TCU. Ошибка включения (зацепления) сцепления 1 - ошибка фиксации.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P287A",
    "desc": "TCU. Ошибка включения (зацепления) сцепления 2 - ошибка фиксации.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P287C",
    "desc": "TCU. Адаптация точки полувключения сцепления / самообучение - слишком высокий или низкий сигнал / нет адаптации длительное время.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2900",
    "desc": "TCU. Передача 1 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2901",
    "desc": "TCU. Передача 2 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2902",
    "desc": "TCU. Передача 3 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2903",
    "desc": "TCU. Передача 4 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2904",
    "desc": "TCU. Передача 5 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2905",
    "desc": "TCU. Передача 6 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2906",
    "desc": "TCU. Передача 7 не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2907",
    "desc": "TCU. Передача R не запрашивается.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2908",
    "desc": "TCU. Рукоятка выбора режима работы / неисправность переключения передач на нечетном валу - неисправность положения / две передачи на валу).",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "P2909",
    "desc": "TCU. Ошибка переключения передач с четным валом - две передачи на валу. U00018888 Ошибка CAN-шины.",
    "category": "powertrain",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U0073",
    "desc": "TCU. Ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U007300",
    "desc": "ECU. Ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U0100",
    "desc": "TCU. Ошибка сигнала CAN-шины от ESM - потеря данных.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U010100",
    "desc": "ECU. Потеря связи с TCM.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": true
  },
  {
    "code": "U012200",
    "desc": "ECU. Потеря связи с ESP.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U012286",
    "desc": "ECU. Потеря связи с узлом 3 модуля ESP.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U012287",
    "desc": "ECU. Потеря связи с узлом 2 модуля ESP.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U012800",
    "desc": "ECU. Потеря связи с EPB.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U0129",
    "desc": "TCU. Ошибка сигнала CAN-шины от ESP - потеря данных.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U014687",
    "desc": "ECU. Потеря связи с узлом 2 модуля GW.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U014688",
    "desc": "ECU. Потеря связи с узлом 1 модуля GW.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U015100",
    "desc": "ECU. Потеря связи с SRS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U015500",
    "desc": "ECU. Потеря связи с IPK или ненормальный сигнал.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U01B000",
    "desc": "ECU. Потеря связи с EBS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": true
  },
  {
    "code": "U067600",
    "desc": "ECU. Датчик уровня топлива - потеря сигнала / отказ / ошибка калибровки.",
    "category": "network",
    "system": "Топливная система ДВС",
    "isGeneric": true
  },
  {
    "code": "U100017",
    "desc": "RLS. Датчик дождя - перенапряжение.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U100046",
    "desc": "RLS. Датчик дождя - ошибка калибровки.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U10004B",
    "desc": "RLS. Датчик дождя - перегрев.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U100281",
    "desc": "LIN2. Ошибка обратной связи с DDCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U100287",
    "desc": "LIN3. Превышено время ожидания связи c DDCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U100381",
    "desc": "LIN2. Ошибка обратной связи с RLS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U100387",
    "desc": "LIN3. Превышено время ожидания связи с RLS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U100701",
    "desc": "SCM. Неисправность системы управления люком.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U100709",
    "desc": "SCM. Неисправность переключателя люка.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U100801",
    "desc": "SCM. Неисправность системы управления шторкой люка.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U100809",
    "desc": "SCM. Неисправность переключателя шторки люка.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U100901",
    "desc": "BCM. Неисправность системы IBS.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101088",
    "desc": "BCM. Ошибка CAN-шины DiagCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101188",
    "desc": "BCM. Ошибка CAN-шины SCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101288",
    "desc": "BCM. Ошибка CAN-шины PCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101388",
    "desc": "BCM. Ошибка CAN-шины INFOCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101588",
    "desc": "BCM. Ошибка CAN-шины EPSCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101883",
    "desc": "BCM. Запрос проверки EMS Immo.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101987",
    "desc": "BCM. Не получен запрос проверки от EMS Immo.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101988",
    "desc": "BCM. Ошибка CAN-шины BCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101A87",
    "desc": "BCM. Не получены результаты проверки от EMS Immo.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101B44",
    "desc": "BCM. Ошибка памяти EEPROM ключа дистанционного доступа.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101B85",
    "desc": "BCM. Низкий заряд батареи ключа дистанционного доступа.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101B86",
    "desc": "BCM. Ошибка счетчика SI ключа дистанционного доступа.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101C00",
    "desc": "BCM. Потеря связи с RFR.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101C81",
    "desc": "LIN2. Ошибка обратной связи с PDCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U101D44",
    "desc": "BCM. Ошибка чтения MK-ключа.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101D81",
    "desc": "LIN2. Ошибка обратной связи с RLCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U101E44",
    "desc": "BCM. Ошибка чтения / записи CK-ключа.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101E81",
    "desc": "LIN2. Ошибка обратной связи с RRCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U101F44",
    "desc": "BCM. Ошибка чтения / записи счетчика 25C TripCNT.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U101F81",
    "desc": "LIN2. Ошибка обратной связи с люком.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102044",
    "desc": "RFBT. Проверка сообщения 2CA безопасности не удалась.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U102181",
    "desc": "LIN2. Ошибка обратной связи c солнцезащитным козырьком.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102887",
    "desc": "LIN2. Превышено время ожидания связи с PDCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102987",
    "desc": "LIN2. Превышено время ожидания связи с RLDCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102A87",
    "desc": "LIN2. Превышено время ожидания связи с RRDCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102B87",
    "desc": "LIN2. Превышено время ожидания связи c люком.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102D87",
    "desc": "LIN2. Превышено время ожидания связи с солнцезащитным козырьком.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U102F81",
    "desc": "BCM. Ошибка обратной связи c IBS.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U103881",
    "desc": "BCM. Неисправность системы закрывания люка при дожде.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U103D87",
    "desc": "BCM. Потеря связи с IBS.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105087",
    "desc": "BCM. Режим аварийной работы BCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105187",
    "desc": "BCM. Режим аварийной работы ICAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105287",
    "desc": "BCM. Потеря связи с ACC (0x31A) - превышено время ожидания ADASCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105387",
    "desc": "BCM. Потеря связи с EMS (0x196) - превышено время ожидания PCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105487",
    "desc": "BCM. Потеря связи с EPBi (0x34F) - превышено время ожидания PCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105587",
    "desc": "BCM. Потеря связи с EPS (0x24F) - превышено время ожидания EPSCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105687",
    "desc": "BCM. Потеря связи с ESCL (0x276) - превышено время ожидания BCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105787",
    "desc": "BCM. Потеря связи с HU (0x580) - превышено время ожидания ICAN (5000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105887",
    "desc": "BCM. Потеря связи с IP (0x385) - превышено время ожидания ICAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105987",
    "desc": "BCM. Потеря связи с SAS (0x180) - превышено время ожидания SCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105A87",
    "desc": "BCM. Потеря связи с SRs (0x50) - превышено время ожидания PCAN (2500 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105B87",
    "desc": "BCM. Потеря связи с TB0x (0X38D) - превышено время ожидания INFOCAN.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105C87",
    "desc": "BCM. Потеря связи с TCU (0x338) - превышено время ожидания PCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105D87",
    "desc": "BCM. Потеря связи с APA (0x247) - превышено время ожидания ADASCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105E87",
    "desc": "BCM. Потеря связи с LAS (0x39A) - превышено время ожидания ADASCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U105F87",
    "desc": "BCM. Потеря связи с LCDAL (0x2AD) - превышено время ожидания ADASCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U106087",
    "desc": "BCM. Потеря связи с LCDAR (0x2A4) - превышено время ожидания ADASCAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U106187",
    "desc": "BCM. Потеря связи с AVM (0x3E0) - превышено время ожидания ICAN (1000 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U106287",
    "desc": "BCM. Потеря связи с RRS (0x69F) - превышено время ожидания ICAN (2500 мс).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1080",
    "desc": "IP / IPK. Потеря связи с BCM 288.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1081",
    "desc": "IP / IPK. Потеря связи с GW.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1082",
    "desc": "IP / IPK. Потеря связи с HU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1083",
    "desc": "IP / IPK. Потеря связи с AC.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U108A",
    "desc": "IP / IPK. Потеря связи с RRS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1090",
    "desc": "IP / IPK. Потеря связи с EMS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1091",
    "desc": "IP / IPK. Потеря связи с EPBi / ESP / ABS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1092",
    "desc": "IP / IPK. Потеря связи с EPS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1093",
    "desc": "IP / IPK. Потеря связи с SRS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1094",
    "desc": "IP / IPK. Потеря связи с TCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1096",
    "desc": "IP / IPK. Потеря связи с АСС (35Е).",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1097",
    "desc": "IP / IPK. Потеря связи с LAS 332 / SAS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1098",
    "desc": "IP / IPK. Потеря связи с LCDAL 2AE.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1099",
    "desc": "IP / IPK. Потеря связи с LCDAR 2AF.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U10A1",
    "desc": "IP / IPK. Ошибка связи с шиной. U11001717 Слишком высокое напряжения - выше 16 В непрерывно в течение 10 с. U11011616 Слишком низкое напряжения - ниже 9 В непрерывно в течение 10 с.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U128088",
    "desc": "BCM. Отключении сети CAN, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128387",
    "desc": "BCM. Потеря связи с BCM, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128487",
    "desc": "BCM. Потеря связи с PEPS, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128687",
    "desc": "BCM. Потеря связи с AC, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128987",
    "desc": "BCM. Потеря связи с RRS, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128C87",
    "desc": "BCM. Потеря связи с ACC, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128D87",
    "desc": "BCM. Потеря связи с LAS, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U128F87",
    "desc": "BCM. Потеря связи с IP, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U129087",
    "desc": "BCM. Потеря связи с WLCM, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U129287",
    "desc": "BCM. Потеря связи с EMS, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U129387",
    "desc": "BCM. Потеря связи с TCU, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U129487",
    "desc": "BCM. Потеря связи с ESP, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U129787",
    "desc": "BCM. Потеря связи с LCDAL, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U12A200",
    "desc": "BCM. Потеря связи с DSM, записана ошибка.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U148100",
    "desc": "RRS. Отсутствует EPBi.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U148700",
    "desc": "RRS. Потеря связи с TCU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U148800",
    "desc": "RRS. Потеря связи с AC.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U148900",
    "desc": "RRS. Потеря связи с BCM.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U148F00",
    "desc": "RRS. Ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U158087",
    "desc": "Нет ответа на сообщение ABM, неисправность в сети CAN.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U158287",
    "desc": "ESP. Потеря связи с ESP, неисправность в сети CAN.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U158486",
    "desc": "ESP. Неверная информация о скорости, неверный сигнал.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U158587",
    "desc": "EMS. Потеря связи с EMS, неисправность в сети CAN.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U170016",
    "desc": "BCM. Слишком низкое напряжение питания.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U170017",
    "desc": "BCM. Слишком высокое напряжение питания.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U170187",
    "desc": "BCM. Отсутствует сообщение 50 от узла SRS (только при активности и без отключения THU CAN-шины).",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U178088",
    "desc": "LAS. CAN-шина - частичное отключение.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U178188",
    "desc": "LAS. CAN-шина - общее отключение.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U178282",
    "desc": "SAS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178283",
    "desc": "SAS. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178287",
    "desc": "SAS. Потеря связи с LAS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1782F0",
    "desc": "SAS. Неверный сигнал SAS.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1782F1",
    "desc": "ESP. Угол поворота руля неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1782F2",
    "desc": "ESP. Не откалиброван SAS.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1782F4",
    "desc": "ESP. Угловая скорость рулевого колеса неверная.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U178382",
    "desc": "ESP. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U178383",
    "desc": "ESP. Ошибка проверки CRC.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U178386",
    "desc": "ESP. Ошибка DLC.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U178387",
    "desc": "ESP. Потеря связи с LAS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1783F0",
    "desc": "ESP. Скорость неверная.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F2",
    "desc": "ESP. Сигнал направления скорости вращения колеса неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F3",
    "desc": "ESP. Сигнал скорости вращения колеса неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F4",
    "desc": "ESP. Импульсный сигнал частоты вращения колеса неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F5",
    "desc": "ESP. Датчик скорости рыскания - неисправность.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F6",
    "desc": "ESP. Давление в главном цилиндре неверное.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F7",
    "desc": "ESP. Сигнал бокового ускорения неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F8",
    "desc": "ESP. Сигнал продольного ускорения неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U1783F9",
    "desc": "ESP. Сигнал состояния TCS неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U178482",
    "desc": "TCU. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178483",
    "desc": "TCU. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178487",
    "desc": "TCU. Потеря связи c LAS или ошибка DLC.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1784F0",
    "desc": "TCU. Сигнал статуса процесса переключения передач неверный.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U1784F1",
    "desc": "TCU. Положение рычага переключателя передач неверное.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U1784F2",
    "desc": "TCU. Фактическая передача неверная.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U178582",
    "desc": "EMS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178583",
    "desc": "EMS. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178587",
    "desc": "EMS. Потеря связи между LAS и EMS или ошибка DLC.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1785F0",
    "desc": "ECU. Сигнал частоты вращения двигателя неверный.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U1785F1",
    "desc": "ECU. Сигнал положения педали акселератора 1 неверный.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1785F2",
    "desc": "ECU. Сигнал состояния двигателя неверный.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U178682",
    "desc": "EPS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U178683",
    "desc": "EPS. Ошибка проверки CRC.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U178687",
    "desc": "EPS. Потеря сявзи между LAS и EPS.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U1786F3",
    "desc": "EPS. Ошибка усилия (крутящего момента) рук водителя на руле.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U1786F5",
    "desc": "EPS. Недоступность системы бокового контроля электроусилителя руля.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U1786F7",
    "desc": "EPS. Недоступность или ошибка в системе электроусилителя руля.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U178782",
    "desc": "HU. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178783",
    "desc": "HU. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U178787",
    "desc": "HU. Потеря связи с HU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1787F0",
    "desc": "HU. Неверный сигнал ограничения скорости навигации.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1788F0",
    "desc": "BCM. Ближний свет - состояние работы неверное.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1788F1",
    "desc": "BCM. Дальний свет - состояние работы неверное.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1788F2",
    "desc": "BCM. Передние противотуманные фары - состояние работы неверное.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U179182",
    "desc": "MRR. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179183",
    "desc": "MRR. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179186",
    "desc": "MRR. Ошибка DLC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179187",
    "desc": "MRR. Потеря связи с MRR.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1791F0",
    "desc": "MRR. Неверные данные.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179282",
    "desc": "GW. Ошибка Rolling Counter MFS.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179283",
    "desc": "GW. Ошибка проверки CRC MFS.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179287",
    "desc": "GW. Потеря связи с MFS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1792F0",
    "desc": "GW. Переключатель IACC неверный / MFS DiagInfoSW 2 8C неверный.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179382",
    "desc": "LCDAR. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179383",
    "desc": "LCDAR. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U179387",
    "desc": "LCDAR. Превышено время ожидания связи LCDAR.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U179487",
    "desc": "SRS. Потеря связи с SRS.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U179587",
    "desc": "BCM. Потеря связи с BCM.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190087",
    "desc": "BCM. Превышено время ожидания сообщения EMS от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190487",
    "desc": "BCM. Превышено время ожидания сообщения IP от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190587",
    "desc": "BCM. Превышено время ожидания сообщения EPB от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190687",
    "desc": "BCM. Превышено время ожидания сообщения ESP от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190787",
    "desc": "BCM. Превышено время ожидания сообщения IMS от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190887",
    "desc": "BCM. Превышено время ожидания сообщения HU от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190987",
    "desc": "BCM. Превышено время ожидания сообщения EPS от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190A87",
    "desc": "BCM. Превышено время ожидания сообщения BCM от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190B87",
    "desc": "BCM. Превышено время ожидания сообщения LCDAR.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190C87",
    "desc": "BCM. Превышено время ожидания сообщения GW MFS от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190D87",
    "desc": "BCM. Превышено время ожидания сообщения SAS от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190E87",
    "desc": "BCM. Превышено время ожидания сообщения SRS от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U190F87",
    "desc": "BCM. Превышено время ожидания сообщения TCU от ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U191087",
    "desc": "BCM. Превышено время ожидания сообщений ACC.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U192082",
    "desc": "EMS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U192182",
    "desc": "EPS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U192282",
    "desc": "SAS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U192382",
    "desc": "TCU. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U192482",
    "desc": "SRS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Безопасность (SRS / Airbag)",
    "isGeneric": false
  },
  {
    "code": "U192682",
    "desc": "HU. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U192782",
    "desc": "GW. Ошибка Rolling Counter MFS.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U192882",
    "desc": "EPS. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U192982",
    "desc": "EPB. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U192B82",
    "desc": "IP / IPK. Ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U194083",
    "desc": "EMS. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U194183",
    "desc": "ESP. Ошибка проверки CRC.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U194283",
    "desc": "SAS. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U194383",
    "desc": "TCU. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U194583",
    "desc": "HU. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U194683",
    "desc": "GW. Ошибка проверки CRC MFS.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U194783",
    "desc": "EPS. Ошибка проверки CRC.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U194883",
    "desc": "EPB. Ошибка проверки CRC.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U194A83",
    "desc": "IP / IPK. Ошибка проверки CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U196487",
    "desc": "AVM. Камера - превышено время ожидания связи.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U196587",
    "desc": "AVM. Камера - превышено время ожидания TSR, ASL.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U1967008",
    "desc": "AVM. Камера - превышено время ожидания целевого сигнала.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U1967068",
    "desc": "AVM. Камера - ошибка блокировки счетчика цели.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U1967108",
    "desc": "AVM. Камера - превышено время ожидания сигнала полосы движения.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U1967168",
    "desc": "AVM. Камера - ошибка блокировки счетчика линии полосы движения.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U196808",
    "desc": "AVM. Камера - ошибка проверки состояния.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U196908",
    "desc": "AVM. Камера - ошибка проверки TSR, ASL.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U196987",
    "desc": "AVM. Камера (боковая) - превышено время ожидания связи.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U196C08",
    "desc": "AVM. Камера (боковая) - ошибка калибровки.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U19A186",
    "desc": "AVM. Угол поворота руля неверный, вспомогательная линия не отображается, функция работает не в полном режиме.",
    "category": "network",
    "system": "Рулевое управление (ЭУР / EPS)",
    "isGeneric": false
  },
  {
    "code": "U19A286",
    "desc": "AVM. Сигнал передачи неверный, вспомогательная линия не отображается, функция работает не в полном режиме.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U19A386",
    "desc": "AVM. Сигнал скорости автомобиля неверный, отключен LDW, функция работает не в полном режиме, на DVR индикатор скорости автомобиля неверный.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U19A586",
    "desc": "AVM. Сигнал состояния педали тормоза неверный, на DVR индикатор педали тормоза неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U19A686",
    "desc": "AVM. Сигнал состояния педали акселератора неверный, на DVR индикатор педали акселератора неверный.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U19AC86",
    "desc": "AVM. Данные о скорости вращения колеса (ЗЛ / ЗП) неверные, отключена 3D-модель колеса.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U19AD86",
    "desc": "AVM. Данные о скорости вращения колеса (ПП) неверные, отключена 3D-модель колеса.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U19AE86",
    "desc": "AVM. Данные о скорости вращения колеса (ПЛ) неверные, отключена 3D-модель колеса.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8181",
    "desc": "GW. Сигнал положения передачи неверный (1A8).",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U1A8182",
    "desc": "GW. Превышено время ожидания сообщения (187).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8183",
    "desc": "GW. Ошибка проверки CRC (187).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8184",
    "desc": "GW. Ошибка сигнала фактической передачи (1A8).",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U1A8381",
    "desc": "GW. Сигнал скорости автомобиля неверный (187).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8382",
    "desc": "GW. Превышено время ожидания сообщения (278).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8383",
    "desc": "GW. Ошибка проверки CRC (278).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8581",
    "desc": "GW. Ошибка сигнала скорости рысканья (278).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8582",
    "desc": "GW. Превышено время ожидания сообщения (1A8).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8583",
    "desc": "GW. Ошибка проверки CRC (1A8).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8781",
    "desc": "GW. Отказ сигнала поворотника (180).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8782",
    "desc": "GW. Превышено время ожидания сообщения (180).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8783",
    "desc": "GW. Ошибка проверки CRC (180).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8981",
    "desc": "GW. Сигнал состояния указателя поворота неверный (28B).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8982",
    "desc": "GW. Ошибка счетчика циклов (28B).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8983",
    "desc": "GW. Ошибка проверки CRC (28B).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A8987",
    "desc": "GW. Превышено время ожидания сообщения (28B).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9182",
    "desc": "GW. Ошибка счетчика циклов (187).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9187",
    "desc": "GW. Превышено время ожидания сообщения (298).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9381",
    "desc": "GW. Замок двери (ПЛ) - неверный сигнал (298).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9382",
    "desc": "GW. Ошибка счетчика циклов (278).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9387",
    "desc": "GW. Превышено время ожидания сообщения (2DE).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9581",
    "desc": "GW. Замок двери (ПП) - неверный сигнал (298).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9582",
    "desc": "GW. Ошибка счетчика циклов (1A8).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9781",
    "desc": "GW. Замок двери (ЗЛ) - неверный сигнал (298).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9782",
    "desc": "GW. Ошибка счетчика циклов (180).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1A9981",
    "desc": "GW. Замок двери (ЗП) - неверный сигнал (298).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1AA181",
    "desc": "GW. Ошибка поперечного ускорения (278).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1AA381",
    "desc": "GW. Ошибка продольного ускорения (278).",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U1AA587",
    "desc": "BCM. Ошибка CAN-шины.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1AA781",
    "desc": "BCM. Неисправность светодиодной лампы.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F0087",
    "desc": "BCM. Ошибка CAN-шины - отсутствует сообщение GW_1A8.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F0187",
    "desc": "BCM. Ошибка CAN-шины - отсутствует сообщение GW_187.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F0287",
    "desc": "BCM. Ошибка CAN-шины - отсутствует узел BCM_28B.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F0387",
    "desc": "BCM. Ошибка CAN-шины - отсутствует узел AC_366.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F0588",
    "desc": "BCM. Ошибка CAN-шины - неисправность CAN-шины.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F0687",
    "desc": "BCM. Ошибка CAN-шины - отсутствует сообщение BCM_298.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F4088",
    "desc": "BCM. CAN-шина - отключение, невозможность нормальной передачи / приема данных по CAN-шине.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F4187",
    "desc": "BCM. Обогрева сидений - контроллер не получил сообщение 0x1A6.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F4287",
    "desc": "BCM. Обогрева сидений - контроллер не получил сообщение 0x262.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F4387",
    "desc": "BCM. Обогрева сидений - контроллер не получил сообщение 0x506.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F4487",
    "desc": "BCM. Обогрева сидений - контроллер не получил сообщение 0x38D.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F6000",
    "desc": "WWS. Потеря связи с BCM.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F6100",
    "desc": "WWS. Потеря связи с BCM 2.",
    "category": "network",
    "system": "Блок кузова (BCM)",
    "isGeneric": false
  },
  {
    "code": "U1F6200",
    "desc": "WWS. Потеря связи с HU.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1F6400",
    "desc": "WWS. Потеря связи с ESP.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1F6500",
    "desc": "WWS. Ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U1F6600",
    "desc": "WWS. Ошибка приема / передачи сигнала.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U1F6700",
    "desc": "WWS. Потеря связи с IP.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U2081",
    "desc": "TCU. Ошибка по сигналу торможения - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2082",
    "desc": "TCU. Ошибка по сигналу ожидаемого крутящего момента - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2083",
    "desc": "TCU. Ошибка по сигналу крутящего момента двигателя - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2084",
    "desc": "TCU. Ошибка по сигналу момента трения - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2085",
    "desc": "TCU. Ошибка по сигналу частоты вращения двигателя - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2086",
    "desc": "TCU. Ошибка по сигналу заданного значения частоты вращения холостого хода двигателя - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2087",
    "desc": "TCU. Ошибка по сигналу акселератора - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2088",
    "desc": "TCU. Датчик температуры охлаждающей жидкости - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2089",
    "desc": "TCU. Ошибка по сигналу коэффициента плато - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U208A",
    "desc": "TCU. Ошибка по сигналу скорости автомобиля ESP - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U208B",
    "desc": "TCU. Ошибка по сигналу ESP колеса (ЗЛ) - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U208C",
    "desc": "TCU. Ошибка по сигналу ESP колеса (ЗП) - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U208D",
    "desc": "TCU. Ошибка по сигналу ESP колеса (ПП) - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U208E",
    "desc": "TCU. Ошибка по сигналу ESP колеса (ПЛ) - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U208F",
    "desc": "TCU. Ошибка сигнала CAN-шины от ESL - потеря данных.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U2090",
    "desc": "TCU. Ошибка сигнала CAN-шины от ACM - потеря данных.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U2091",
    "desc": "TCU. Ошибка по сигналу DrivePark ESL - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2092",
    "desc": "TCU. Ошибка по сигналу P ACM - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2093",
    "desc": "TCU. Ошибка состояния переключателя передач ESL - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U2094",
    "desc": "TCU. Ошибка по сигналу режима ESL - неверный / ошибочный сигнал.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2095",
    "desc": "TCU. Ошибка положения переключателя передач ESL - недопустимое положение.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U2200",
    "desc": "ABS. Сигнал скорости автомобиля $187 неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2201",
    "desc": "ABS. Сигнал скорости автомобиля $187 отсутствует.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2202",
    "desc": "ABS. Сигнал скорости автомобиля $187 ошибка CRC.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2203",
    "desc": "ABS. Сигнал скорости автомобиля $187 ошибка Rolling Counter.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2204",
    "desc": "ABS. Сообщение системы двигателя $26A неверное.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2205",
    "desc": "ABS. Сообщение системы двигателя $26A отсутствует.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2206",
    "desc": "ABS. Сообщение системы двигателя $26A ошибка CRC.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2207",
    "desc": "ABS. Сообщение системы двигателя $26A ошибка Rolling Counter.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2208",
    "desc": "ABS. Сообщение системы двигателя $1A6 неверное.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U2209",
    "desc": "ABS. Сообщение системы двигателя $1A6 отсутствует.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U220A",
    "desc": "ABS. Сообщение системы двигателя $1A6 ошибка CRC.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U220B",
    "desc": "ABS. Сообщение системы двигателя $1A6 ошибка Rolling Counter.",
    "category": "network",
    "system": "Двигатель (ЭБУ ДВС / ECM)",
    "isGeneric": false
  },
  {
    "code": "U220C",
    "desc": "ABS. Импульс скорости вращения колеса $258 неверный.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U220D",
    "desc": "ABS. Импульс скорости вращения колеса $258 отсутствует.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U220E",
    "desc": "ABS. Импульс скорости вращения колеса $258 ошибка CRC.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U220F",
    "desc": "ABS. Импульс скорости вращения колеса $258 ошибка Rolling Counter.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2210",
    "desc": "ABS. Поперечное ускорение $278 неверное.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2211",
    "desc": "ABS. Поперечное ускорение $278 отсутствует.",
    "category": "network",
    "system": "Тормозная система и EPB",
    "isGeneric": false
  },
  {
    "code": "U2212",
    "desc": "ABS. Многорежимный переключатель $3FD отсутствует или ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U2213",
    "desc": "ABS. Многорежимный переключатель $2DE отсутствует или ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U2214",
    "desc": "APA. Сообщение APA $264 неверное.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2215",
    "desc": "APA. Сообщение APA $264 отсутствует.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2216",
    "desc": "APA. Сообщение APA $264 ошибка CRC.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2217",
    "desc": "APA. Сообщение APA $264 ошибка Rolling Counter.",
    "category": "network",
    "system": "Электронная система",
    "isGeneric": false
  },
  {
    "code": "U2218",
    "desc": "ADAS. Сообщение ADAS $1C0 неверное.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2219",
    "desc": "ADAS. Сообщение ADAS $1C0 отсутствует.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U221A",
    "desc": "ADAS. Сообщение ADAS $1C0 ошибка CRC.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U221B",
    "desc": "ADAS. Сообщение ADAS $1C0 ошибка Rolling Counter.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U221C",
    "desc": "ADAS. Ошибка обратной связи ADAS несоответствие состояния.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U221D",
    "desc": "ADAS. Ошибка обратной связи ADAS запрос вне диапазона.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U221E",
    "desc": "ADAS. Ошибка обратной связи ADAS превышение скорости.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U221F",
    "desc": "ADAS. Сообщение о состоянии LDW $24E неверное.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2220",
    "desc": "ADAS. Сообщение о состоянии LDW $24E отсутствует.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2221",
    "desc": "ADAS. Сообщение о состоянии LDW $24E ошибка CRC.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2222",
    "desc": "ADAS. Сообщение о состоянии LDW $24E ошибка Rolling Counter.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2223",
    "desc": "ADAS. Сообщение об уровне вибрации LDW $30A неверное.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2224",
    "desc": "ADAS. Сообщение об уровне вибрации LDW $30A отсутствует.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2225",
    "desc": "ADAS. Сообщение об уровне вибрации LDW $30A ошибка CRC.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2226",
    "desc": "ADAS. Сообщение об уровне вибрации LDW $30A ошибка Rolling Counter.",
    "category": "network",
    "system": "Ассистенты водителя (ADAS)",
    "isGeneric": false
  },
  {
    "code": "U2227",
    "desc": "ADAS. Ошибка CAN-шины.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U3000",
    "desc": "TCU. Контроллер РКПП - ошибки PLL / АЦП / ОЗУ / ПЗУ / тестирования замкнутого цикла / программного цикла / тестирования временного среза / тестирования команд / мониторинга / сброса ASW / неизвестная ошибка.",
    "category": "network",
    "system": "Коробка передач (Робот 7DCT)",
    "isGeneric": false
  },
  {
    "code": "U350100",
    "desc": "ECU. CAN-модуль - слишком низкое напряжение.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  },
  {
    "code": "U350200",
    "desc": "ECU. CAN-модуль - слишком высокое напряжение.",
    "category": "network",
    "system": "CAN-шина и телематика",
    "isGeneric": false
  }
];
