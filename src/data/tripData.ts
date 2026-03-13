import { DaySchedule, FlightInfo, AccommodationInfo } from '../types';

export const flights: FlightInfo[] = [
  {
    direction: '去程',
    date: '2026.3.28',
    time: '15:40 ~ 19:20',
    airline: '亞洲航空 (Air Asia)',
    flightNumber: 'D7 378',
    route: '桃園機場 TPE (T1) → 關西機場 KIX (T1)',
  },
  {
    direction: '回程',
    date: '2026.4.5',
    time: '13:10 ~ 15:00',
    airline: '中華航空 (China Airlines)',
    flightNumber: 'CI157',
    route: '關西機場 KIX (T1) → 桃園機場 TPE (T2)',
  },
];

export const accommodations: AccommodationInfo[] = [
  {
    nights: 4,
    location: '大阪',
    name: 'クリスタルエグゼ日本橋806',
    cost: 24496,
  },
  {
    nights: 3,
    location: '京都',
    name: 'RESI STAY Gojozaka',
    cost: 34424,
  },
  {
    nights: 1,
    location: '大阪',
    name: '旅館 竹水 なんば駅まで10分',
    cost: 4549,
  },
];

export const schedules: DaySchedule[] = [
  {
    date: '2026-03-28',
    day: 1,
    location: '大阪',
    accommodation: 'クリスタルエグゼ日本橋806',
    activities: [
      {
        time: '15:40',
        title: '桃園機場起飛',
        description: '亞洲航空 D7 378',
        notes: ['桃園機場 T1'],
      },
      {
        time: '19:20',
        title: '抵達關西機場',
        notes: [
          '出海關',
          '國際線北邊出口直走',
          '電扶梯往二樓',
          '右轉過空橋',
          '搭地鐵',
        ],
      },
      {
        time: '21:30',
        title: '抵達難波',
        description: '回飯店',
        address: 'Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区',
      },
      {
        time: '22:00',
        title: '找宵夜',
        description: '拉麵',
      },
    ],
  },
  {
    date: '2026-03-29',
    day: 2,
    location: '大阪',
    accommodation: 'クリスタルエグゼ日本橋806',
    activities: [
      {
        time: '07:30',
        title: '起床',
      },
      {
        time: '08:30',
        title: '出門',
      },
      {
        time: '09:00',
        title: '黑門市場',
        address: '黑門市場 大阪 大阪市中央區',
      },
      {
        time: '11:30',
        title: '八阪神社（難波）',
        address: '難波八阪神社 大阪府 大阪市浪速区',
        notes: ['難波站五號出口有電扶梯', '步行十分鐘'],
      },
      {
        time: '12:00',
        title: '千日前道具街',
        description: '鍋碗瓢盆',
        address: '千日前道具屋筋商店街 大阪府 中央区, 大阪市',
      },
      {
        time: '13:30',
        title: '難波南海通 / 千日前通',
        address: '11-21, Nambasennichimae',
      },
      {
        time: '15:30',
        title: '千日前商店街',
        address: '千日前商店街 542-0076 大阪府 大阪市 難波1-3-4 日本',
        notes: [
          '月化粧（現烤小饅頭，千日前尾巴）',
          '無限拉麵（千日前）',
        ],
      },
      {
        time: '18:00',
        title: '道頓堀商店街',
        description: '吃拉麵四名店',
        mapUrl: 'https://maps.apple.com/p/aDSIJkjHBdeYcp',
      },
      {
        time: '19:00',
        title: '戎橋筋商店街',
        description: '固力果招牌',
        address: '8-13, Dotombori 1-Chōme',
      },
      {
        time: '20:30',
        title: '晚餐',
        description: '博多串燒？',
      },
      {
        time: '22:00',
        title: '回飯店',
        address: 'Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区',
      },
    ],
  },
  {
    date: '2026-03-30',
    day: 3,
    location: '大阪',
    accommodation: 'クリスタルエグゼ日本橋806',
    activities: [
      {
        time: '07:30',
        title: '起床',
      },
      {
        time: '08:30',
        title: '出門',
      },
      {
        time: '09:00',
        title: '找個 Lawson 買早餐',
      },
      {
        time: '10:00',
        title: '大阪城',
        address: '大阪城 大阪府 大阪市中央区',
        notes: [
          '西之丸庭園（野餐）',
          '御座船（先去用周遊卡換票）',
          '天守閣（周遊卡走二號通道）',
        ],
      },
      {
        time: '13:00',
        title: '天神橋筋商店街',
        address: '天神橋筋商店街 1丁目·2丁目·3丁目 大阪府 北区, 大阪市',
        notes: [
          '中村屋可樂餅 09:00~18:00 週六到16:00、週日休',
          '玉出超市-天神橋店 24hr',
          '千草大阪燒 11:00~21:00 週二休',
        ],
      },
      {
        time: '16:00',
        title: '心齋橋筋',
        address: '心齋橋 大阪府 中央区, 大阪市',
        notes: ['LE Croissant 可頌', 'Tako Hachi 章魚燒'],
      },
      {
        time: '18:00',
        title: 'Wonder Cruise 觀光船',
        description: '周遊卡換票 17:00~21:00',
        address: '4-18, Dotombori 1-Chōme',
        mapUrl: 'https://fullfenblog.tw/wonder-cruise/',
      },
      {
        time: '19:00',
        title: '晚餐',
        description: '固力果下拉麵',
        address: 'らぁ麺はやし田 道頓堀店 大阪府 大阪市',
        notes: ['拉麵 Hayashida'],
      },
      {
        time: '21:00',
        title: '唐吉軻德',
        address: '唐吉訶德 大阪府 大阪市中央区',
        notes: ['摩天輪', '買隔一天早餐'],
      },
      {
        time: '00:00',
        title: '回飯店',
        address: 'Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区',
      },
    ],
  },
  {
    date: '2026-03-31',
    day: 4,
    location: '大阪',
    accommodation: 'クリスタルエグゼ日本橋806',
    activities: [
      {
        time: '08:00',
        title: '起床',
      },
      {
        time: '08:30',
        title: '出門',
      },
      {
        time: '10:30',
        title: '勝尾寺',
        address: '勝尾寺 大阪府 箕面市',
        notes: [
          '箕面萱野站',
          '6B處搭29, 30號巴士到勝尾寺約22分鐘',
        ],
      },
      {
        time: '14:30',
        title: '通天閣',
        address: '通天閣 大阪府 浪速区, 大阪市',
        notes: [
          '惠美須町站3號出口',
          '周遊卷在下面預約',
          '逛新世界商店街（吃飯）',
        ],
      },
      {
        time: '17:00',
        title: '阿倍野展望台',
        description: '天王寺站，看夜景',
        address: 'ハルカス300 (展望台) 大阪府 阿倍野区, 大阪市',
      },
      {
        time: '19:00',
        title: '法善寺門町',
        address: '法善寺 夫婦善哉 大阪府 中央区, 大阪市',
        notes: ['夫婦善哉 紅豆湯', '晚上氛圍不錯'],
      },
      {
        time: '22:00',
        title: '回飯店',
        address: 'Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区',
      },
    ],
  },
  {
    date: '2026-04-01',
    day: 5,
    location: '京都',
    accommodation: 'RESI STAY Gojozaka',
    activities: [
      {
        time: '08:00',
        title: '起床',
      },
      {
        time: '08:30',
        title: '出門',
      },
      {
        time: '10:30',
        title: '往京都並寄行李',
        notes: ['大阪到京都 13mins'],
      },
      {
        time: '11:30',
        title: '下鴨神社',
        address: '賀茂御祖神社(下鴨神社) 京都府 京都市左京区',
        notes: [
          '出町柳走15分',
          '御守戒指',
          '和合神社 美人水 10:00 ~ 15:30',
        ],
      },
      {
        time: '12:30',
        title: '午餐',
        description: '待定',
      },
      {
        time: '14:30',
        title: '伏見稻荷大社',
        address: '伏見稻荷大社 京都府 伏見区, 京都市',
        notes: ['衹園四條 五站到 伏見稻荷', '千本鳥居'],
      },
      {
        time: '18:00',
        title: '市區逛逛',
        address: '新京極商店街 京都府 京都市中京区',
      },
      {
        time: '22:00',
        title: '回飯店',
        address: 'RESI STAY 五条坂 京都府 東山区, 京都市',
      },
    ],
  },
  {
    date: '2026-04-02',
    day: 6,
    location: '京都',
    accommodation: 'RESI STAY Gojozaka',
    activities: [
      {
        time: '06:30',
        title: '起床',
      },
      {
        time: '07:00',
        title: '出門',
      },
      {
        time: '08:00',
        title: '法觀寺',
        address: '法觀寺(八坂之塔) 京都府 東山区, 京都市',
        notes: [
          '京都車站 D2 206號巴士',
          '搭六站清水站下車後往前走看到八版通右轉',
        ],
      },
      {
        time: '08:30',
        title: '庚申堂',
        address: '八坂庚申堂 京都府 東山区, 京都市',
      },
      {
        time: '09:00',
        title: '清水寺',
        address: '清水寺 京都府 東山区, 京都市',
        notes: ['穿和服', '京阿彌 爆漿抹茶泡芙'],
      },
      {
        time: '14:00',
        title: '祇園',
        description: '京都車站 D2 206號巴士',
        notes: [
          '彌生小路 605-0074 京都府 京都市 祇園町南側560',
          '花見小路通',
          '四条通 576, Giommachiminamigawa',
        ],
      },
      {
        time: '17:00',
        title: '鴨川',
        address: 'Shijo-ohashi Bridge 京都府 京都市 四条大橋',
      },
      {
        time: '18:00',
        title: '先斗町',
        description: '吃飯',
      },
      {
        time: '20:00',
        title: '逛街',
        notes: [
          '三條通 41-2, Koromonotanacho',
          '六角通 127-4, Tamakuracho',
        ],
      },
      {
        time: '22:00',
        title: '回飯店',
        address: 'RESI STAY 五条坂 京都府 東山区, 京都市',
      },
    ],
  },
  {
    date: '2026-04-03',
    day: 7,
    location: '京都',
    accommodation: 'RESI STAY Gojozaka',
    activities: [
      {
        time: '07:00',
        title: '起床',
      },
      {
        time: '08:00',
        title: '出門',
      },
      {
        time: '10:00',
        title: '奈良',
        notes: [
          '春日大社(若草山)',
          '奈良公園',
        ],
        address: '春日大社 奈良県 奈良市',
      },
      {
        time: '14:00',
        title: '宇治',
        address: '平等院 京都府 宇治市',
        notes: [
          '平等院表參道',
          '抹茶',
          '宇治川 - 通圓茶屋 蕎麥麵',
        ],
      },
      {
        time: '17:00',
        title: '八阪神社',
        address: '八坂神社 京都府 東山区, 京都市',
        notes: [
          '晚上去',
          '錦拉麵（抹茶柚子拉麵）',
          '麵屋優光（拉麵）',
        ],
      },
      {
        time: '18:00',
        title: '新京極商店街',
        address: '新京極商店街 京都府 京都市中京区',
      },
      {
        time: '22:00',
        title: '回飯店',
        address: 'RESI STAY 五条坂 京都府 東山区, 京都市',
      },
    ],
  },
  {
    date: '2026-04-04',
    day: 8,
    location: '大阪',
    accommodation: '旅館 竹水 なんば駅まで10分',
    activities: [
      {
        time: '08:00',
        title: '起床',
      },
      {
        time: '08:30',
        title: '出門',
      },
      {
        time: '09:00',
        title: '美國村 橘子街',
        address: '美國村 大阪府 大阪市中央区',
        notes: ['甲賀流 章魚燒'],
      },
      {
        time: '11:00',
        title: 'MOOKEN 泡芙',
        address: 'MooKEN 大阪府 大阪市',
      },
      {
        time: '12:00',
        title: '午餐',
        description: '待定',
      },
      {
        time: '13:00',
        title: 'Big Camera 難波店',
        address: 'Bic Camera難波店 大阪府 大阪市',
      },
      {
        time: '14:30',
        title: '日本橋電器街',
        address: '5-7, Nippombashi 2-Chōme',
      },
      {
        time: '22:00',
        title: '回飯店',
      },
    ],
  },
  {
    date: '2026-04-05',
    day: 9,
    location: '大阪',
    accommodation: '旅館 竹水 なんば駅まで10分',
    activities: [
      {
        time: '08:00',
        title: '起床',
      },
      {
        time: '08:30',
        title: '出門',
      },
      {
        time: '09:00',
        title: '木津市場',
        address: '大阪木津地方卸賣市場 大阪府 大阪市',
        notes: [
          '營業到11:00',
          '吃海鮮',
          'ODA批發超市',
        ],
      },
      {
        time: '10:00',
        title: '上車往關西機場',
      },
      {
        time: '11:00',
        title: '抵達關西機場',
        address: '第1ターミナルビル 大阪府 泉佐野市',
      },
      {
        time: '13:10',
        title: '飛機起飛',
        description: '中華航空 CI157',
      },
      {
        time: '15:00',
        title: '抵達桃園機場',
        description: 'T2 航廈',
      },
    ],
  },
];
