import { FuseBox } from '../types';

export const CHANGAN_CS55_PLUS_FUSE_BOXES: FuseBox[] = [
  {
    id: 'cabin_p01',
    code: 'P01 (C10)',
    title: 'Блок в салоне (Приборная панель)',
    location: 'В салоне автомобиля, слева под панелью приборов (за маленьким вещевым ящичком / лючком водителя)',
    image: './schemes/p01_cabin.jpg',
    tips: [
      '🔌 Подключение видеорегистратора: Для режима парковки (Hardwire Kit) провод ACC подключают через разветвитель к предохранителю DF31 (15A, Розетка) или DF30 (10A, Плафон), а провод B+ (постоянные 12V) — к DF10 (20A, Люк) или DF13 (15A, Обогрев передних сидений). Массу (GND) надежно затягивают под болт кронштейна кузова рядом с блоком.',
      '📱 Розетка 12V (прикуриватель): Предохранитель DF31 (15А, Синий). Питание отключается в режиме ACC / выключении авто.',
      '🔍 Разъем OBD2: Предохранитель DF02 (10А, Красный). Если сканер ELM327 не светится — проверьте этот предохранитель.',
      '🪟 Беспроводная зарядка и задние USB: Предохранитель DF32 (10А, Красный).'
    ],
    items: [
      {
        code: 'DF01',
        type: 'fuse',
        name: 'Антенна-приемник системы бесключевого доступа',
        rating: '7.5 A',
        ratingValue: 7.5,
        color: 'brown',
        powerType: 'battery',
        category: 'electronics',
        description: 'Smart Key приемник, постоянное питание'
      },
      {
        code: 'DF02',
        type: 'fuse',
        name: 'Диагностический разъем OBD-II (Канал передачи данных)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics',
        description: 'Питание диагностического порта OBD2 для ELM327 и дилерских сканеров'
      },
      {
        code: 'DF03',
        type: 'fuse',
        name: 'Электронный селектор переключения передач КПП',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Электронный джойстик переключения режимов коробки передач DCT'
      },
      {
        code: 'DF04',
        type: 'fuse',
        name: 'Цифровая приборная панель / Поворотный переключатель',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics',
        description: 'Дисплей панели приборов (Virtual Cluster)'
      },
      {
        code: 'DF05',
        type: 'fuse',
        name: 'Штатная аудио и мультимедиа система (ШГУ)',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'battery',
        category: 'comfort',
        description: 'Головное устройство мультимедиа, экран, звуковой усилитель'
      },
      {
        code: 'DF07',
        type: 'fuse',
        name: 'Центральная панель управления',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'comfort',
        description: 'Кнопки центральной консоли'
      },
      {
        code: 'DF08',
        type: 'fuse',
        name: 'Assist Left/Right Rear',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'safety',
        description: 'Радары контроля слепых зон (в некоторых комплектациях для РФ отсутствует)'
      },
      {
        code: 'DF10',
        type: 'fuse',
        name: 'Контроллер панорамного люка в крыше',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'battery',
        category: 'comfort',
        description: 'Постоянное питание привода шторки и стекла панорамной крыши (точка B+ постоянных 12V)'
      },
      {
        code: 'DF11',
        type: 'fuse',
        name: 'Датчик дождя / Датчик внешней освещенности / ETC',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'comfort',
        description: 'Датчики на лобовом стекле за зеркалом заднего вида'
      },
      {
        code: 'DF12',
        type: 'fuse',
        name: 'Электронный стояночный тормоз EPB / Центральная распред. коробка',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'safety',
        description: 'Модуль управления электронным ручником'
      },
      {
        code: 'DF13',
        type: 'fuse',
        name: 'Система подогрева передних сидений',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'climate',
        description: 'Постоянное силовое питание матов подогрева водителя и пассажира'
      },
      {
        code: 'DF14',
        type: 'fuse',
        name: 'Система подогрева задних сидений',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'climate',
        description: 'Постоянное питание подогрева дивана второго ряда'
      },
      {
        code: 'DF23',
        type: 'fuse',
        name: 'Бортовой телематический контроллер T-BOX (SOS ЭРА-ГЛОНАСС)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics',
        description: 'Постоянное питание аварийного блока связи T-BOX / SOS Call'
      },
      {
        code: 'DF27',
        type: 'fuse',
        name: 'Контроллер телематики T-BOX (SOS CALL)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'acc',
        category: 'electronics',
        description: 'Линия питания T-BOX от режима аксессуаров (ACC)'
      },
      {
        code: 'DF28',
        type: 'fuse',
        name: 'Распределительная коробка приборной панели',
        rating: '7.5 A',
        ratingValue: 7.5,
        color: 'brown',
        powerType: 'acc',
        category: 'power',
        description: 'Питание шины ACC щитка приборов'
      },
      {
        code: 'DF29',
        type: 'fuse',
        name: 'Блок управления кузовом (BCM) / Аудиосистема',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'acc',
        category: 'electronics',
        description: 'Питание логики BCM от режима ACC'
      },
      {
        code: 'DF30',
        type: 'fuse',
        name: 'Передний плафон освещения: питание USB для регистратора',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'acc',
        category: 'comfort',
        description: 'Питание разъема USB у салонного зеркала / плафона освещения от шины ACC'
      },
      {
        code: 'DF31',
        type: 'fuse',
        name: 'Розетка 12V (Прикуриватель в салоне)',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'acc',
        category: 'comfort',
        description: 'Гнездо прикуривателя 12V (питание подается при включении ACC, отключается при выходе из машины)'
      },
      {
        code: 'DF32',
        type: 'fuse',
        name: 'Беспроводная зарядка Qi / Задние разъемы USB',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'acc',
        category: 'comfort',
        description: 'Питание площадки беспроводной зарядки смартфона и USB-портов для задних пассажиров'
      },
      {
        code: 'DF35',
        type: 'fuse',
        name: 'Блок подушек безопасности (SRS / Airbag)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'safety',
        description: 'Питание модуля SRS от цепи зажигания IG1'
      },
      {
        code: 'DF36',
        type: 'fuse',
        name: 'Блок контроля защиты от защемления стеклом',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'comfort',
        description: 'Питание контроллера антизажима стеклоподъемников от IG1'
      },
      {
        code: 'DF37',
        type: 'fuse',
        name: 'Контроллер электроусилителя руля (EPS)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'powertrain',
        description: 'Управляющая логика электроусилителя руля (силовая часть на MF03 100A)'
      },
      {
        code: 'DF38',
        type: 'fuse',
        name: 'Блок кузова BCM / Система бесключевого доступа',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'electronics',
        description: 'Питание цепей бесключевого доступа от зажигания IG1'
      },
      {
        code: 'DF39',
        type: 'fuse',
        name: 'Парктроники (Система помощи при парковке / Задние сонары)',
        rating: '7.5 A',
        ratingValue: 7.5,
        color: 'brown',
        powerType: 'ignition',
        category: 'safety',
        description: 'Ультразвуковые датчики парковки'
      },
      {
        code: 'DF40',
        type: 'fuse',
        name: 'Блок управления стеклоподъемниками двери водителя',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'comfort',
        description: 'Кнопочный пульт стеклоподъемников водительской двери'
      },
      {
        code: 'DF41',
        type: 'fuse',
        name: 'Модуль ETC (Оплата платных дорог)',
        rating: '7.5 A',
        ratingValue: 7.5,
        color: 'brown',
        powerType: 'ignition',
        category: 'electronics',
        description: 'В комплектациях для РФ не используется'
      },
      {
        code: 'DF42',
        type: 'fuse',
        name: 'Управление обогревом заднего стекла / Кнопка обогрева',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'climate',
        description: 'Цепь управления реле обогрева заднего стекла ER06'
      },
      {
        code: 'DF44',
        type: 'fuse',
        name: 'Блок управления и контроля переключения передач КПП DCT',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'powertrain',
        description: 'Управляющая логика коробки передач от зажигания IG1'
      },
      {
        code: 'DF45',
        type: 'fuse',
        name: 'Контроллер люка / Камера удержания в полосе LDW (комплектация TECH)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'safety',
        description: 'В комплектации TECH для РФ с панорамной крышей — система контроля выезда из полосы движения'
      },
      {
        code: 'DF46',
        type: 'fuse',
        name: 'Подрулевой переключатель дворников / Модуль кузова BDC',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'ignition',
        category: 'comfort',
        description: 'Управление стеклоочистителями и омывателями'
      },
      {
        code: 'DF47',
        type: 'fuse',
        name: 'Управляющая логика обогрева передних сидений',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'climate',
        description: 'Управление нагревом кресел от зажигания IG1'
      },
      {
        code: 'DF48',
        type: 'fuse',
        name: 'Панель приборов / Центральная панель / Ионизатор воздуха (Plasma)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'comfort',
        description: 'Индикаторы приборной панели и система ионизации воздуха в климате'
      },
      {
        code: 'SB15',
        type: 'maxi',
        name: 'Электропривод сиденья водителя',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'comfort',
        description: 'Силовой электропривод регулировок водительского кресла (постоянное питание)'
      },
      {
        code: 'SB16',
        type: 'maxi',
        name: 'Электропривод сиденья переднего пассажира',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'comfort',
        description: 'Силовой электропривод регулировок сиденья пассажира (постоянное питание)'
      },
      {
        code: 'DR03',
        type: 'relay',
        name: 'Реле зажигания IG1 (Салон)',
        powerType: 'ignition',
        category: 'power',
        description: 'Главное реле включения потребителей первой линии зажигания'
      },
      {
        code: 'DR04',
        type: 'relay',
        name: 'Реле режима аксессуаров ACC (Салон)',
        powerType: 'acc',
        category: 'power',
        description: 'Реле подачи питания на магнитолу, прикуриватель и USB-порты'
      },
      {
        code: 'DR05',
        type: 'relay',
        name: 'Главное силовое реле блока салона',
        powerType: 'battery',
        category: 'power',
        description: 'Силовое коммутационное реле'
      }
    ]
  },
  {
    id: 'underhood_c09',
    code: 'C09',
    title: 'Блок моторного отсека (Под капотом)',
    location: 'В моторном отсеке с левой стороны (рядом с левым крылом и горловиной омывателя, под черной крышкой на защелках)',
    image: './schemes/c09_underhood.jpg',
    tips: [
      '⚡ Силовой блок отвечает за фары, вентилятор охлаждения, бензонасос, катушки зажигания, обогревы лобового стекла и робот DCT.',
      '❄️ Обогрев лобового стекла разделен на две половины: правая половина (реле ER08, вставка SB03 30A), левая половина (реле ER19, вставка SB09 30A).',
      '⚠️ При отказе омывателя или дворников проверяйте предохранители EF15 (25A, передние) и EF16 (20A, задний).'
    ],
    items: [
      {
        code: 'EF01',
        type: 'fuse',
        name: 'Фара передняя левая / правая, реле света фар ER05',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'lighting',
        description: 'Головное LED-освещение (ближний/дальний свет)'
      },
      {
        code: 'EF02',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 2)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF03',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 4)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF04',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 5)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF05',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 6)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF06',
        type: 'fuse',
        name: 'Главное реле (ЭБУ двигателя ECM)',
        rating: '30 A',
        ratingValue: 30,
        color: 'green',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Силовое питание главного реле управления двигателем'
      },
      {
        code: 'EF07',
        type: 'fuse',
        name: 'Электробензонасос в баке',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Питание топливного насоса (реле ER18)'
      },
      {
        code: 'EF08',
        type: 'fuse',
        name: 'Звуковой сигнал (Клаксон 1/2)',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'safety',
        description: 'Реле звукового сигнала ER15'
      },
      {
        code: 'EF09',
        type: 'fuse',
        name: 'Электромагнитная муфта компрессора кондиционера A/C',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'climate',
        description: 'Реле включения муфты кондиционера ER04'
      },
      {
        code: 'EF10',
        type: 'fuse',
        name: 'Питание контроллера электропривода 5-й двери (Багажника)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'comfort',
        description: 'Электропривод крышки багажника'
      },
      {
        code: 'EF11',
        type: 'fuse',
        name: 'Контроллер управления роботизированной КПП (TCM DCT)',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Питание электронного блока управления роботом DCT'
      },
      {
        code: 'EF12',
        type: 'fuse',
        name: 'Контроллер системы впрыска топлива (ЭБУ ДВС)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'powertrain'
      },
      {
        code: 'EF13',
        type: 'fuse',
        name: 'Интеллектуальный датчик заряда АКБ (IBS)',
        rating: '5 A',
        ratingValue: 5,
        color: 'orange',
        powerType: 'battery',
        category: 'power',
        description: 'Датчик мониторинга состояния аккумулятора на минусовой клемме'
      },
      {
        code: 'EF14',
        type: 'fuse',
        name: 'Выключатель стоп-сигнала (Лягушка тормоза)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'battery',
        category: 'safety'
      },
      {
        code: 'EF15',
        type: 'fuse',
        name: 'Передний стеклоочиститель (Трапеция дворников)',
        rating: '25 A',
        ratingValue: 25,
        color: 'white',
        powerType: 'battery',
        category: 'comfort',
        description: 'Мотор передних стеклоочистителей'
      },
      {
        code: 'EF16',
        type: 'fuse',
        name: 'Задний стеклоочиститель',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'battery',
        category: 'comfort',
        description: 'Моторчик дворника задней двери'
      },
      {
        code: 'EF17',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 3)',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF18',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 7)',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF19',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 1)',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF20',
        type: 'fuse',
        name: 'Блок управления электрооборудованием кузова (BCM 8)',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'battery',
        category: 'electronics'
      },
      {
        code: 'EF21',
        type: 'fuse',
        name: 'Обогрев боковых зеркал заднего вида',
        rating: '7.5 A',
        ratingValue: 7.5,
        color: 'brown',
        powerType: 'battery',
        category: 'climate',
        description: 'Нагревательные элементы в боковых зеркалах'
      },
      {
        code: 'EF25',
        type: 'fuse',
        name: 'Масляный насос, вспомогательный водяной насос турбины, клапан PCJ',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'ignition',
        category: 'powertrain'
      },
      {
        code: 'EF26',
        type: 'fuse',
        name: 'Катушки зажигания цилиндров 1-4',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'ignition',
        category: 'powertrain',
        description: 'Индивидуальные катушки зажигания свечей двигателя 1.5T'
      },
      {
        code: 'EF27',
        type: 'fuse',
        name: 'Лямбда-зонды (перед./зад.), клапаны фазорегуляторов OCV, перепускной клапан',
        rating: '15 A',
        ratingValue: 15,
        color: 'blue',
        powerType: 'ignition',
        category: 'powertrain',
        description: 'Датчики кислорода и электромагнитные клапаны фаз газораспределения'
      },
      {
        code: 'EF28',
        type: 'fuse',
        name: 'Выключатель сигнала тормоза 2',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'safety'
      },
      {
        code: 'EF29',
        type: 'fuse',
        name: 'Контроллер впрыска топлива (Форсунки)',
        rating: '20 A',
        ratingValue: 20,
        color: 'yellow',
        powerType: 'ignition',
        category: 'powertrain'
      },
      {
        code: 'EF30',
        type: 'fuse',
        name: 'Питание реле запуска ER07, топливного насоса ER18, стартера ER14, компрессора ER04, вентилятора',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'powertrain'
      },
      {
        code: 'EF33',
        type: 'fuse',
        name: 'Контроллер системы впрыска топлива 3',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'powertrain'
      },
      {
        code: 'EF34',
        type: 'fuse',
        name: 'Электронный стояночный тормоз (EPBI)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'safety'
      },
      {
        code: 'EF35',
        type: 'fuse',
        name: 'Адаптивный круиз-контроль (Радар ACC)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'safety',
        description: 'Фронтальный миллиметровый радар в переднем бампере'
      },
      {
        code: 'EF36',
        type: 'fuse',
        name: 'Контроллер роботизированной КПП (Питание от зажигания)',
        rating: '10 A',
        ratingValue: 10,
        color: 'red',
        powerType: 'ignition',
        category: 'powertrain'
      },
      {
        code: 'SB01',
        type: 'maxi',
        name: 'Система электронного ручника EPBI (Силовая цепь 1)',
        rating: '40 A',
        ratingValue: 40,
        color: 'green',
        powerType: 'battery',
        category: 'safety'
      },
      {
        code: 'SB02',
        type: 'maxi',
        name: 'Реле стартера ER14 (Система запуска двигателя)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'powertrain'
      },
      {
        code: 'SB03',
        type: 'maxi',
        name: 'Обогрев лобового стекла (ПРАВАЯ ЧАСТЬ)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'climate',
        description: 'Силовое питание правой стороны нитей обогрева лобового стекла (реле ER08)'
      },
      {
        code: 'SB04',
        type: 'maxi',
        name: 'Вентилятор отопителя салона (Печка / Климат)',
        rating: '40 A',
        ratingValue: 40,
        color: 'green',
        powerType: 'battery',
        category: 'climate',
        description: 'Силовой мотор вентилятора печки (реле ER03)'
      },
      {
        code: 'SB05',
        type: 'maxi',
        name: 'Питание салонных реле зажигания IG1 (DR03) и ACC (DR04)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'power'
      },
      {
        code: 'SB06',
        type: 'maxi',
        name: 'Блок предохранителей салона (P01) — ПОСТОЯННОЕ ПИТАНИЕ 1',
        rating: '60 A',
        ratingValue: 60,
        color: 'yellow',
        powerType: 'battery',
        category: 'power',
        description: 'Главный силовой ввод в салонный блок №1'
      },
      {
        code: 'SB07',
        type: 'maxi',
        name: 'Электропривод 5-й двери багажника (Постоянное питание)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'comfort'
      },
      {
        code: 'SB08',
        type: 'maxi',
        name: 'Система электронного ручника EPBI (Силовая цепь 2)',
        rating: '60 A',
        ratingValue: 60,
        color: 'yellow',
        powerType: 'battery',
        category: 'safety'
      },
      {
        code: 'SB09',
        type: 'maxi',
        name: 'Обогрев лобового стекла (ЛЕВАЯ ЧАСТЬ)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'climate',
        description: 'Силовое питание левой стороны нитей обогрева лобового стекла (реле ER19)'
      },
      {
        code: 'SB11',
        type: 'maxi',
        name: 'Контроллер стеклоподъемников (Защита от защемления 2)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'comfort'
      },
      {
        code: 'SB12',
        type: 'maxi',
        name: 'Контроллер стеклоподъемников (Защита от защемления 1)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'comfort'
      },
      {
        code: 'SB13',
        type: 'maxi',
        name: 'Блок предохранителей салона (P01) — ПОСТОЯННОЕ ПИТАНИЕ 2',
        rating: '60 A',
        ratingValue: 60,
        color: 'yellow',
        powerType: 'battery',
        category: 'power',
        description: 'Главный силовой ввод в салонный блок №2'
      },
      {
        code: 'SB14',
        type: 'maxi',
        name: 'Обогрев заднего стекла (Силовая цепь)',
        rating: '30 A',
        ratingValue: 30,
        color: 'pink',
        powerType: 'battery',
        category: 'climate',
        description: 'Силовое питание нитей обогрева заднего стекла (реле ER06)'
      },
      {
        code: 'ER02',
        type: 'relay',
        name: 'Главное реле двигателя (Main Relay)',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Подает питание на ЭБУ и систему зажигания'
      },
      {
        code: 'ER03',
        type: 'relay',
        name: 'Реле вентилятора отопителя салона (Печки)',
        powerType: 'battery',
        category: 'climate',
        description: 'Включение мотора нагнетателя климат-контроля'
      },
      {
        code: 'ER04',
        type: 'relay',
        name: 'Реле компрессора кондиционера',
        powerType: 'battery',
        category: 'climate',
        description: 'Включение муфты компрессора A/C'
      },
      {
        code: 'ER05',
        type: 'relay',
        name: 'Реле наружного освещения (Ближний / Дальний свет)',
        powerType: 'battery',
        category: 'lighting',
        description: 'Коммутация головных фар'
      },
      {
        code: 'ER06',
        type: 'relay',
        name: 'Реле обогрева заднего стекла и боковых зеркал',
        powerType: 'battery',
        category: 'climate',
        description: 'Включение обогрева заднего стекла'
      },
      {
        code: 'ER07',
        type: 'relay',
        name: 'Реле системы запуска 1',
        powerType: 'battery',
        category: 'powertrain'
      },
      {
        code: 'ER08',
        type: 'relay',
        name: 'Реле обогрева лобового стекла (Правая часть)',
        powerType: 'battery',
        category: 'climate'
      },
      {
        code: 'ER13',
        type: 'relay',
        name: 'Реле заднего стеклоочистителя',
        powerType: 'battery',
        category: 'comfort'
      },
      {
        code: 'ER14',
        type: 'relay',
        name: 'Реле стартера (Запуск 2)',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Подает ток на втягивающее реле стартера'
      },
      {
        code: 'ER15',
        type: 'relay',
        name: 'Реле звукового сигнала (Клаксон)',
        powerType: 'battery',
        category: 'safety'
      },
      {
        code: 'ER16',
        type: 'relay',
        name: 'Реле переднего стеклоочистителя 1 (Низкая скорость)',
        powerType: 'battery',
        category: 'comfort'
      },
      {
        code: 'ER17',
        type: 'relay',
        name: 'Реле переднего стеклоочистителя 2 (Высокая скорость)',
        powerType: 'battery',
        category: 'comfort'
      },
      {
        code: 'ER18',
        type: 'relay',
        name: 'Реле электробензонасоса',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Включение подачи топлива из бака'
      },
      {
        code: 'ER19',
        type: 'relay',
        name: 'Реле обогрева лобового стекла (Левая часть)',
        powerType: 'battery',
        category: 'climate'
      }
    ]
  },
  {
    id: 'battery_c08',
    code: 'C08',
    title: 'Блок на клемме аккумулятора (АКБ)',
    location: 'Непосредственно на плюсовой клемме аккумулятора (под красной защитной пластиковой крышкой)',
    image: './schemes/c08_battery.jpg',
    tips: [
      '⚡ Главные силовые плавкие вставки (Mega / Midi Fuse).',
      '⚠️ Перегорание любого из этих предохранителей приводит к полному обесточиванию соответствующих систем автомобиля.'
    ],
    items: [
      {
        code: 'MF02',
        type: 'maxi',
        name: 'Резервная силовая линия',
        rating: '175 A',
        ratingValue: 175,
        color: 'black',
        powerType: 'battery',
        category: 'power'
      },
      {
        code: 'MF03',
        type: 'maxi',
        name: 'Силовой предохранитель электроусилителя руля (EPS)',
        rating: '100 A',
        ratingValue: 100,
        color: 'black',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Силовое питание мощного электромотора рулевой рейки EPS'
      },
      {
        code: 'MF04',
        type: 'maxi',
        name: 'Вентилятор системы охлаждения двигателя',
        rating: '60 A',
        ratingValue: 60,
        color: 'yellow',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Силовое питание главного вентилятора радиатора ДВС'
      },
      {
        code: 'MF05',
        type: 'maxi',
        name: 'Общий силовой предохранитель блоков моторного отсека и салона',
        rating: '150 A',
        ratingValue: 150,
        color: 'black',
        powerType: 'battery',
        category: 'power',
        description: 'Главная силовая шина электропитания бортовой сети авто'
      },
      {
        code: 'MF06',
        type: 'terminal',
        name: 'Клемма аккумулятора "+"',
        rating: 'Ввод',
        powerType: 'battery',
        category: 'power',
        description: 'Прямое механическое крепление к плюсовому выводу батареи'
      },
      {
        code: 'MF07',
        type: 'maxi',
        name: 'Общий силовой предохранитель генератора и стартера',
        rating: '300 A',
        ratingValue: 300,
        color: 'black',
        powerType: 'battery',
        category: 'powertrain',
        description: 'Силовая цепь зарядки батареи от генератора и пускового тока стартера'
      }
    ]
  }
];

export function getFuseBoxesForVehicle(make?: string, _model?: string): FuseBox[] {
  // If vehicle make matches Changan or default fallback
  if (!make || make.toLowerCase().includes('changan') || make.toLowerCase().includes('uni')) {
    return CHANGAN_CS55_PLUS_FUSE_BOXES;
  }
  return CHANGAN_CS55_PLUS_FUSE_BOXES;
}
