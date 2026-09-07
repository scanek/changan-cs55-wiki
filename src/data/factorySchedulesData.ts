export interface FactoryScheduleItem {
  title: string;
  category: string;
  description: string;
  spec?: string;
  article?: string;
  icon: string;
  interval_distance: number;
  interval_months: number;
  notify_before_distance: number;
  notify_before_days: number;
  notes: string;
}

export const CHANGAN_CS55_PLUS_SCHEDULE: FactoryScheduleItem[] = [
  {
    title: 'Моторное масло и масляный фильтр',
    category: 'Двигатель',
    description: 'Замена моторного масла 0W-20 SP и масляного фильтра (3.8-4.0 л). Обязательная замена уплотнительной шайбы поддона (25-30 Н·м).',
    spec: 'SAE 0W-20, API SP / ILSAC GF-6A',
    article: 'H15002-1000 / 1012010-M01',
    icon: 'droplet',
    interval_distance: 10000,
    interval_months: 12,
    notify_before_distance: 500,
    notify_before_days: 14,
    notes: 'При тяжелых условиях эксплуатации (городские пробки, частый прогрев) рекомендуется сократить интервал до 7 500 км.'
  },
  {
    title: 'Салонный фильтр (кондиционера)',
    category: 'Фильтры',
    description: 'Замена фильтрующего элемента салона с активированным углем и антиаллергенным слоем PM2.5.',
    spec: 'Угольный фильтр тонкой очистки PM2.5',
    article: '8104011-M01',
    icon: 'wind',
    interval_distance: 10000,
    interval_months: 12,
    notify_before_distance: 500,
    notify_before_days: 14,
    notes: 'Расположен за перчаточным ящиком. Рекомендуется менять перед летним и зимним сезонами.'
  },
  {
    title: 'Воздушный фильтр двигателя',
    category: 'Фильтры',
    description: 'Замена воздушного фильтра ДВС для обеспечения оптимального наполнения цилиндров и защиты турбины.',
    spec: 'Оригинальный сухой элемент',
    article: '1109013-M01',
    icon: 'wind',
    interval_distance: 10000,
    interval_months: 12,
    notify_before_distance: 500,
    notify_before_days: 14,
    notes: 'Продувка сжатым воздухом каждые 5 000 км, полная замена каждые 10 000 км.'
  },
  {
    title: 'Тормозная жидкость',
    category: 'Тормозная система',
    description: 'Полная аппаратная замена тормозной жидкости с прокачкой контуров ABS/ESP (объем ~1.0 л).',
    spec: 'DOT 4 Class 6 (низковязкая для систем ESP 9.3)',
    article: 'DOT 4 Class 6',
    icon: 'disc',
    interval_distance: 20000,
    interval_months: 24,
    notify_before_distance: 1000,
    notify_before_days: 30,
    notes: 'Использовать исключительно низковязкую жидкость Class 6 для корректной работы ESP зимой.'
  },
  {
    title: 'Свечи зажигания (Иридий)',
    category: 'Двигатель',
    description: 'Замена комплекта иридиевых свечей зажигания (4 шт). Момент затяжки 20-25 Н·м на холодном ДВС.',
    spec: 'Иридиевые свечи, зазор 0.7-0.8 мм',
    article: 'TORCH DK7RTI / NGK SILZKFR8D7S',
    icon: 'zap',
    interval_distance: 30000,
    interval_months: 36,
    notify_before_distance: 1000,
    notify_before_days: 30,
    notes: 'Не допускается использование обычных никелевых свечей в турбомоторе GDI с непосредственным впрыском.'
  },
  {
    title: 'Трансмиссионная жидкость 7DCT',
    category: 'Трансмиссия',
    description: 'Сервисная замена трансмиссионного масла в преселективной роботизированной КПП 7DCT с двумя мокрыми сцеплениями (~3.2-3.5 л).',
    spec: 'Changan DCTF / Shell Spirax S5 DCT 11',
    article: 'Shell Spirax S5 DCT 11',
    icon: 'wrench',
    interval_distance: 60000,
    interval_months: 36,
    notify_before_distance: 1500,
    notify_before_days: 30,
    notes: 'Проверка уровня при температуре жидкости 40-50°C. После замены рекомендуется выполнить адаптацию сцеплений.'
  },
  {
    title: 'Охлаждающая жидкость (Антифриз)',
    category: 'Охлаждение',
    description: 'Полная замена карбоксилатного антифриза в контуре охлаждения двигателя и интеркулера (~7.0 л).',
    spec: 'Карбоксилатный антифриз (OAT), класс G12+ / G12++',
    article: 'G12+ (Розовый/Красный)',
    icon: 'droplet',
    interval_distance: 60000,
    interval_months: 48,
    notify_before_distance: 1500,
    notify_before_days: 30,
    notes: 'Не смешивать с силикатными антифризами G11. Проверять плотность перед зимой.'
  }
];
