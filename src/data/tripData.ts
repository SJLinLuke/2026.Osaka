import { DaySchedule, FlightInfo, AccommodationInfo } from "../types";

export const flights: FlightInfo[] = [
  {
    direction: "去程",
    date: "2026.3.28",
    time: "15:40 ~ 19:20",
    airline: "亞洲航空 (Air Asia)",
    flightNumber: "D7 378",
    route: "桃園機場 TPE (T1) → 關西機場 KIX (T1)",
  },
  {
    direction: "回程",
    date: "2026.4.5",
    time: "13:10 ~ 15:00",
    airline: "中華航空 (China Airlines)",
    flightNumber: "CI157",
    route: "關西機場 KIX (T1) → 桃園機場 TPE (T2)",
  },
];

export const accommodations: AccommodationInfo[] = [
  {
    nights: 4,
    location: "大阪",
    name: "クリスタルエグゼ日本橋806",
    cost: 24496,
  },
  {
    nights: 3,
    location: "京都",
    name: "RESI STAY Gojozaka",
    cost: 34424,
  },
  {
    nights: 1,
    location: "大阪",
    name: "旅館 竹水 なんば駅まで10分",
    cost: 4549,
  },
];

export const schedules: DaySchedule[] = [
  {
    date: "2026-03-28",
    day: 1,
    location: "大阪",
    accommodation: "クリスタルエグゼ日本橋806",
    activities: [
      {
        time: "15:40",
        title: "桃園機場起飛",
        description: "亞洲航空 D7 378",
        notes: ["桃園機場 T1"],
      },
      {
        time: "19:20",
        title: "抵達關西機場",
        notes: [
          "出海關",
          "國際線北邊出口直走",
          "電扶梯往二樓",
          "右轉過空橋",
          "搭車順序：南海電鐵 → 天下茶屋（轉堺筋線） → 日本橋",
        ],
      },
      {
        time: "21:30",
        title: "抵達難波",
        description: "回飯店",
        address: "Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区",
        coordinates: { latitude: 34.667691, longitude: 135.506265 },
      },
      {
        time: "22:00",
        title: "找宵夜",
        description: "河童拉麵",
        address: "河童拉麵千日前店 大阪府 大阪市",
        coordinates: { latitude: 34.667313, longitude: 135.503422 },
      },
    ],
  },

  {
    date: "2026-03-29",
    day: 2,
    location: "大阪",
    accommodation: "クリスタルエグゼ日本橋806",
    activities: [
      { time: "07:30", title: "起床" },
      { time: "08:30", title: "出門" },
      {
        time: "09:00",
        title: "黑門市場",
        address: "黑門市場 大阪 大阪市中央區",
        notes: [
          {
            text: "三都屋 蕨餅",
            coordinates: { latitude: 34.665741, longitude: 135.507072 },
          },
          {
            text: "石橋食品 關東煮",
            coordinates: { latitude: 34.665137, longitude: 135.507073 },
          },
        ],
        coordinates: { latitude: 34.665339, longitude: 135.507051 },
        story:
          "黑門市場的歷史可追溯至江戶時代後期，距今已有180多年歷史。原名「圓明寺市場」，因附近的圓明寺山門被塗成黑色而得名「黑門市場」。自1822年左右，商人就在此販賣從堺和紀州運來的魚類。如今這條長約580公尺的商店街被譽為「大阪的廚房」，聚集了100多間店鋪，以夏天的海鰻和冬天的河豚最為著名。",
      },
      {
        time: "11:30",
        title: "難波南海通 / 千日前通",
        description: "可吃午餐",
        address: "11-21, Nambasennichimae",
        notes: [
          {
            text: "青木松風庵 月化粧なんば店（現烤小饅頭，千日前尾巴）",
            coordinates: { latitude: 34.665219, longitude: 135.501907 },
          },
        ],
        coordinates: { latitude: 34.665395, longitude: 135.503334 },
      },
      {
        time: "12:30",
        title: "八阪神社（難波）",
        address: "難波八阪神社 大阪府 大阪市浪速区",
        notes: ["難波站五號出口有電扶梯", "步行十分鐘"],
        coordinates: { latitude: 34.661616, longitude: 135.496714 },
      },
      {
        time: "14:00",
        title: "Uniqlo",
        address: "優衣庫難波Marui店 大阪府 中央区, 大阪市",
        coordinates: { latitude: 34.665525, longitude: 135.500948 },
      },
      {
        time: "15:00",
        title: "千日前道具街",
        description: "鍋碗瓢盆",
        address: "千日前道具屋筋商店街 大阪府 中央区, 大阪市",
        coordinates: { latitude: 34.664249, longitude: 135.503377 },
      },
      {
        time: "16:30",
        title: "千日前商店街",
        address: "千日前商店街 542-0076 大阪府 大阪市 難波1-3-4 日本",
        notes: [
          {
            text: "無限拉麵 千日前店",
            coordinates: { latitude: 34.66779, longitude: 135.503081 },
          },
          "結束看要不要回去放東西",
        ],
        coordinates: { latitude: 34.667453, longitude: 135.503143 },
      },
      {
        time: "18:00",
        title: "道頓堀商店街",
        description: "吃拉麵四名店",
        coordinates: { latitude: 34.66863, longitude: 135.503199 },
        story:
          "道頓堀是大阪最繁華的娛樂區之一，名稱來自江戶時代商人安井道頓。1612年，他開鑿了這條運河，後人為紀念他而命名為「道頓堀」。這裡以各種大型立體廣告牌聞名，包括巨大的螃蟹、河豚等，是大阪最具代表性的街景。",
      },
      {
        time: "19:00",
        title: "戎橋筋商店街",
        description: "固力果招牌",
        address: "8-13, Dotombori 1-Chōme",
        coordinates: { latitude: 34.669052, longitude: 135.500332 },
        story:
          "固力果跑跑人霓虹招牌自1935年設立，至今已是第六代，是世界最著名的戶外廣告之一。跑者的原型來自1924年巴黎奧運日本選手，招牌上的「一粒300公尺」意指吃一粒固力果焦糖糖果就能獲得跑300公尺的能量。這個招牌見證了大阪近百年的繁榮發展，是大阪人心中不可替代的地標。",
      },
      {
        time: "20:00",
        title: "Big Camera 難波店",
        address: "Bic Camera難波店 大阪府 大阪市",
        coordinates: { latitude: 34.666631, longitude: 135.50213 },
      },
      {
        time: "22:00",
        title: "回飯店",
        address: "Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区",
        coordinates: { latitude: 34.667691, longitude: 135.506265 },
      },
    ],
  },

  {
    date: "2026-03-30",
    day: 3,
    location: "大阪",
    accommodation: "クリスタルエグゼ日本橋806",
    activities: [
      { time: "07:30", title: "起床" },
      { time: "08:30", title: "出門" },
      {
        time: "09:00",
        title: "7-11 買早餐",
        description: "可以去西之丸庭園野餐",
      },
      {
        time: "10:00",
        title: "大阪城",
        address: "大阪城 大阪府 大阪市中央区",
        notes: ["西之丸庭園（野餐）", "御座船（先去用周遊卡換票）", "天守閣（周遊卡走二號通道）"],
        coordinates: { latitude: 34.687234, longitude: 135.525842 },
        story:
          "大阪城由豐臣秀吉於1583年開始建造，動用13萬人、歷時10年完工，是當時日本規模最大的城郭。1615年德川家康攻下大阪城消滅豐臣家後，德川幕府將豐臣時代的城牆全部埋在地下，1620年重建了更高大的石牆。現在的天守閣是1931年重建的第三代，作為博物館使用，展示著豐臣秀吉統一天下的輝煌歷史與德川幕府的權力象徵。",
      },
      {
        time: "13:00",
        title: "天神橋筋商店街",
        address: "天神橋筋商店街 1丁目·2丁目·3丁目 大阪府 北区, 大阪市",
        notes: [
          "中村屋可樂餅 09:00~18:00 週六到16:00、週日休",
          "玉出超市-天神橋店 24hr",
          {
            text: "千草大阪燒 11:00~21:00 週二休",
            coordinates: { latitude: 34.706285, longitude: 135.511588 },
          },
        ],
        coordinates: { latitude: 34.697775, longitude: 135.51183 },
      },
      {
        time: "16:00",
        title: "心齋橋筋",
        address: "心齋橋 大阪府 中央区, 大阪市",
        notes: [
          {
            text: "LE Croissant 可頌",
            coordinates: { latitude: 34.671022, longitude: 135.500952 },
          },
          {
            text: "Tako Hachi 章魚燒 道頓堀総本店",
            coordinates: { latitude: 34.668779, longitude: 135.503325 },
          },
        ],
        coordinates: { latitude: 34.674705, longitude: 135.501383 },
      },
      {
        time: "18:00",
        title: "Wonder Cruise 觀光船",
        description: "周遊卡換票 17:00~21:00",
        address: "4-18, Dotombori 1-Chōme",
        coordinates: { latitude: 34.66863, longitude: 135.503199 },
      },
      {
        time: "19:00",
        title: "晚餐",
        description: "晚餐選項",
        notes: [
          {
            text: "拉麵 Hayashida（固力果下）",
            coordinates: { latitude: 34.668888, longitude: 135.501146 },
          },
          {
            text: "Yakinikuen忍鬨",
            coordinates: { latitude: 34.672702, longitude: 135.505199 },
          },
        ],
        address: "らぁ麺はやし田 道頓堀店 大阪府 大阪市",
        coordinates: { latitude: 34.668888, longitude: 135.501146 },
      },
      {
        time: "20:00",
        title: "3Coin",
        address: "3COINS難波Walk店 大阪府 大阪市",
        coordinates: { latitude: 34.667104, longitude: 135.502069 },
      },
      {
        time: "21:00",
        title: "唐吉軻德",
        address: "唐吉訶德 大阪府 大阪市中央区",
        notes: ["摩天輪", "買隔一天早餐"],
        coordinates: { latitude: 34.669403, longitude: 135.502675 },
      },
      {
        time: "00:00",
        title: "回飯店",
        address: "Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区",
        coordinates: { latitude: 34.667691, longitude: 135.506265 },
      },
    ],
  },

  {
    date: "2026-03-31",
    day: 4,
    location: "大阪",
    accommodation: "クリスタルエグゼ日本橋806",
    activities: [
      { time: "08:00", title: "起床" },
      { time: "08:30", title: "出門" },
      {
        time: "10:30",
        title: "勝尾寺",
        address: "勝尾寺 大阪府 箕面市",
        notes: ["箕面萱野站", "6B處搭29, 30號巴士到勝尾寺約22分鐘"],
        coordinates: { latitude: 34.865856, longitude: 135.49107 },
      },
      {
        time: "16:30",
        title: "通天閣",
        address: "通天閣 大阪府 浪速区, 大阪市",
        notes: ["惠美須町站3號出口", "周遊卷在下面預約", "逛新世界商店街（吃飯）"],
        coordinates: { latitude: 34.65249, longitude: 135.506263 },
        story:
          "通天閣的名字由明治時期儒學者藤澤南嶽命名，意為「直通天空的高建築物」。第一代通天閣建於1912年，仿照巴黎艾菲爾鐵塔，高75公尺。1943年毀於火災後，直到1956年才重建第二代通天閣，由東京鐵塔的設計師內藤多仲設計，高103公尺。通天閣見證了大阪庶民文化的發展，周邊的新世界地區至今仍保有昭和時代的懷舊氛圍。",
      },
      {
        time: "18:00",
        title: "阿倍野展望台",
        description: "天王寺站，看夜景",
        address: "ハルカス300 (展望台) 大阪府 阿倍野区, 大阪市",
        coordinates: { latitude: 34.645756, longitude: 135.513466 },
      },
      {
        time: "20:00",
        title: "法善寺門町",
        description: "夫婦善哉 紅豆湯",
        address: "法善寺 夫婦善哉 大阪府 中央区, 大阪市",
        notes: ["晚上氛圍不錯"],
        coordinates: { latitude: 34.667869, longitude: 135.502423 },
      },
      {
        time: "22:00",
        title: "回飯店",
        address: "Seven Eleven大阪日本橋驛東店 大阪府 大阪市中央区",
        coordinates: { latitude: 34.667691, longitude: 135.506265 },
      },
    ],
  },

  {
    date: "2026-04-01",
    day: 5,
    location: "京都",
    accommodation: "RESI STAY Gojozaka",
    activities: [
      { time: "08:00", title: "起床" },
      { time: "08:30", title: "出門" },
      {
        time: "10:30",
        title: "往京都並寄行李",
        notes: [
          "大阪到京都 13mins",
          "京都車站寄放行李：京都塔1樓CROSTA 地下街",
          "搭京都地鐵烏丸線（北上）四站至今出川站，再步行15分鐘至下鴨神社",
        ],
      },
      {
        time: "11:30",
        title: "下鴨神社",
        address: "賀茂御祖神社(下鴨神社) 京都府 京都市左京区",
        notes: ["出町柳走15分", "御守戒指", "和合神社 美人水 10:00 ~ 15:30"],
        coordinates: { latitude: 35.039104, longitude: 135.773009 },
        story:
          "下鴨神社正式名稱為賀茂御祖神社，擁有兩千多年歷史，是京都最古老的神社之一。在原始森林「糺之森」中曾出土繩文時代的祭祀遺址，證明此地自上古時代便是神聖之地。1994年作為「古都京都的文化財」被列入世界文化遺產。神社以祈求良緣、美麗和消災聞名，每年5月15日舉行的葵祭已有1500年歷史，是京都三大祭之一。",
      },
      {
        time: "12:30",
        title: "午餐",
        description: "出町ろろろ（出町柳站附近）",
        notes: [
          "出町ろろろ：營業時間 11:30-15:00, 17:00-20:00",
          {
            text: "備案：天下一品 京都本店（拉麵）",
            coordinates: { latitude: 35.033218, longitude: 135.769234 },
          },
        ],
      },
      {
        time: "14:30",
        title: "伏見稻荷大社",
        address: "伏見稻荷大社 京都府 伏見区, 京都市",
        notes: ["衹園四條 五站到 伏見稻荷", "千本鳥居"],
        coordinates: { latitude: 34.967135, longitude: 135.773335 },
        story:
          "伏見稻荷大社建於西元711年，已有1300多年歷史，是全日本3萬多座稻荷神社的總本宮。最著名的千本鳥居始於江戶時代，人們為答謝神明實現願望而奉納鳥居。由於日文「通過」與「願望實現」同音，穿過鳥居隧道被視為祈願之意。目前境內有數千座朱紅色鳥居，最早可追溯至明治時代，形成了壯觀的鳥居隧道，吸引全球旅客朝聖。",
      },
      {
        time: "18:00",
        title: "市區逛逛",
        address: "新京極商店街 京都府 京都市中京区",
        coordinates: { latitude: 35.005906, longitude: 135.767184 },
      },
      {
        time: "22:00",
        title: "回飯店",
        address: "RESI STAY 五条坂 京都府 東山区, 京都市",
        coordinates: { latitude: 34.994385, longitude: 135.773935 },
      },
    ],
  },

  {
    date: "2026-04-02",
    day: 6,
    location: "京都",
    accommodation: "RESI STAY Gojozaka",
    activities: [
      { time: "06:30", title: "起床" },
      { time: "07:00", title: "出門" },
      {
        time: "08:00",
        title: "法觀寺",
        address: "法觀寺(八坂之塔) 京都府 東山区, 京都市",
        notes: ["京都車站 D2 206號巴士", "搭六站清水站下車後往前走看到八版通右轉"],
        coordinates: { latitude: 34.998552, longitude: 135.779231 },
        story:
          "法觀寺是臨濟宗建仁寺派的寺院，其五重塔「八坂之塔」是京都最具代表性的地標。根據傳說，此寺於589年由聖德太子創建，他在夢中受如意輪觀音托夢而建造此塔供奉舍利子。2009年考古調查發現7世紀的塼佛和礎石，證實該寺可追溯至飛鳥時代。現存的五重塔於1440年由足利義教重建，高46公尺，被指定為重要文化財。這座古塔見證了京都超過千年的歷史，是東山地區最重要的象徵。",
      },
      {
        time: "08:30",
        title: "庚申堂",
        address: "八坂庚申堂 京都府 東山区, 京都市",
        coordinates: { latitude: 34.998309, longitude: 135.77875 },
        story:
          "八坂庚申堂正式名稱為大黑山金剛寺庚申堂，建於960年平安時代，是日本三大庚申信仰寺院之一。庚申信仰源自中國道教，結合日本民間信仰，認為在庚申日需守夜，以防體內的三尸蟲趁睡眠時向天帝報告罪過。寺內最著名的是五彩繽紛的「くくり猿」（綁猴），象徵束縛人的慾望。據信只要束縛一個慾望並供奉給本尊青面金剛，願望就能實現。色彩繽紛的綁猴掛滿整個境內，成為超人氣的拍照景點。",
      },
      {
        time: "09:00",
        title: "清水寺",
        address: "清水寺 京都府 東山区, 京都市",
        notes: [
          {
            text: "京都愛和服 穿和服",
            coordinates: { latitude: 34.998634, longitude: 135.778428 },
          },
          {
            text: "京阿彌 爆漿抹茶泡芙",
            coordinates: { latitude: 34.996383, longitude: 135.780833 },
          },
          {
            text: "京都 Onimaru 飯糰",
            coordinates: { latitude: 34.996692, longitude: 135.779753 },
          },
        ],
        coordinates: { latitude: 34.994793, longitude: 135.785002 },
        story:
          "清水寺建於778年，擁有超過1200年歷史，是京都最古老的寺院之一。寺名來自音羽瀑布的清澈泉水，這座泉水被列為日本十大名水之首，分為三道水流，分別代表長壽、健康和智慧。最著名的是懸空的「清水舞台」，由139根高達十數公尺的巨木支撐，完全沒有使用一根釘子，充分展現了日本古代建築工藝。1994年被列為世界文化遺產。",
      },
      {
        time: "14:00",
        title: "祇園",
        description: "京都車站 D2 206號巴士",
        notes: [
          {
            text: "彌生小路",
            coordinates: { latitude: 35.00336, longitude: 135.775462 },
          },
          {
            text: "花見小路通",
            coordinates: { latitude: 35.003671, longitude: 135.775022 },
          },
          {
            text: "四条通",
            coordinates: { latitude: 35.003631, longitude: 135.77413 },
          },
        ],
        coordinates: { latitude: 35.00336, longitude: 135.775462 },
        story:
          "祇園的歷史可追溯至平安時代，最初是八坂神社的門前町。江戶時代發展為著名花街，成為藝妓文化的中心。花見小路在明治時期前屬於建仁寺領地，後來才開發成現今樣貌，是電影《藝妓回憶錄》的拍攝地。祇園甲部、祇園東、上七軒、先斗町、宮川町是京都現存的五處花街，祇園甲部最為知名。這裡的藝妓經過多年嚴格訓練，精通舞蹈、音樂和接待藝術，是京都傳統文化的重要傳承者。",
      },
      {
        time: "17:00",
        title: "鴨川",
        address: "Shijo-ohashi Bridge 京都府 京都市 四条大橋",
        coordinates: { latitude: 35.003817, longitude: 135.771524 },
      },
      {
        time: "18:00",
        title: "先斗町",
        description: "吃飯",
      },
      {
        time: "20:00",
        title: "逛街",
        notes: [
          {
            text: "三條通",
            coordinates: { latitude: 35.008694, longitude: 135.756891 },
          },
          {
            text: "六角通",
            coordinates: { latitude: 35.007435, longitude: 135.757484 },
          },
        ],
        coordinates: { latitude: 35.008694, longitude: 135.756891 },
      },
      {
        time: "22:00",
        title: "回飯店",
        address: "RESI STAY 五条坂 京都府 東山区, 京都市",
        coordinates: { latitude: 34.994385, longitude: 135.773935 },
      },
    ],
  },

  {
    date: "2026-04-03",
    day: 7,
    location: "京都",
    accommodation: "RESI STAY Gojozaka",
    activities: [
      { time: "07:00", title: "起床" },
      { time: "08:00", title: "出門" },
      {
        time: "09:00",
        title: "奈良",
        notes: [
          "搭車 順序 住宿 -> 五条站（搭京阪電車） -> 丹波橋（轉近鐵丹波橋） -> 近鐵奈良",
          {
            text: "春日大社(若草山)",
            coordinates: { latitude: 34.681244, longitude: 135.848262 },
          },
          {
            text: "奈良公園",
            coordinates: { latitude: 34.684058, longitude: 135.841205 },
          },
          {
            text: "東大寺大佛殿",
            coordinates: { latitude: 34.688968, longitude: 135.839801 },
          },
        ],
        address: "春日大社 奈良県 奈良市",
        coordinates: { latitude: 34.681244, longitude: 135.848262 },
        story:
          "春日大社建於768年，由權傾一時的藤原氏所創建，已有1250多年歷史，是全國約3000座春日神社的總本社。傳說主祭神武甕槌命乘白鹿從鹿島神宮來到奈良，因此鹿被視為神的使者。藤原氏將春日大社視為氏神，通過將女兒嫁給天皇成為外戚，獨占攝政和關白職位，在貴族社會擁有巨大影響力。神社作為「古都奈良的文化財」被列為世界遺產，境內和奈良公園的鹿至今仍受到神聖的對待。",
      },
      {
        time: "13:00",
        title: "宇治",
        address: "平等院 京都府 宇治市",
        notes: [
          {
            text: "平等院表參道",
            coordinates: { latitude: 34.891077, longitude: 135.806473 },
          },
          "吃抹茶冰淇淋",
          {
            text: "通圓 宇治本店",
            coordinates: { latitude: 34.893233, longitude: 135.807214 },
          },
          "宇治川散步",
        ],
        coordinates: { latitude: 34.889273, longitude: 135.80768 },
        story:
          "平等院由藤原賴通於1052年創建，將父親藤原道長的別墅改建為寺院。鳳凰堂於1053年落成，是平安時代貴族追求的「淨土」建築代表，象徵阿彌陀如來的西方極樂淨土。1951年，鳳凰堂因其獨特建築特色和文化價值被選為10圓硬幣圖案，成為日本最知名的文化符號之一。屋頂上裝飾的鳳凰展翅欲飛，整座建築倒映在池水中，美不勝收。1994年被列為世界文化遺產。",
      },
      {
        time: "17:00",
        title: "八阪神社",
        address: "八坂神社 京都府 東山区, 京都市",
        notes: [
          "晚上比較漂亮",
          {
            text: "錦拉麵（抹茶柚子拉麵）",
            coordinates: { latitude: 35.004859, longitude: 135.767673 },
          },
        ],
        coordinates: { latitude: 35.003651, longitude: 135.778554 },
        story:
          "八坂神社是全國約2300座八坂神社和祭祀素戔嗚尊神社的總本社，通稱「祇園さん」。主祭神素戔嗚尊自古被視為消除疫病之神。869年京都爆發疫病時，人們向八坂神社祈禱，這就是祇園祭的起源。祇園祭從每年7月1日持續到31日，長達一個月，是日本三大祭之一，以華麗的山鉾巡行聞名於世，展現了京都千年的祭典文化傳統。",
      },
      {
        time: "20:00",
        title: "新京極商店街",
        address: "新京極商店街 京都府 京都市中京区",
        coordinates: { latitude: 35.005906, longitude: 135.767184 },
      },
      {
        time: "22:00",
        title: "回飯店",
        address: "RESI STAY 五条坂 京都府 東山区, 京都市",
        coordinates: { latitude: 34.994385, longitude: 135.773935 },
      },
    ],
  },

  {
    date: "2026-04-04",
    day: 8,
    location: "大阪",
    accommodation: "旅館 竹水 なんば駅まで10分",
    activities: [
      { time: "08:00", title: "起床" },
      {
        time: "08:30",
        title: "出門並寄行李至旅館竹水 放行李",
        notes: [
          "搭京阪電車（可以加購 premium 座位）",
          "搭車 順序 住宿 -> 五条站（搭京阪電車） -> 大阪北濱（搭堺筋線） -> 惠美須町",
          "旅館位於難波站步行10分鐘處",
        ],
      },
      {
        time: "09:00",
        title: "美國村 橘子街",
        address: "美國村 大阪府 大阪市中央区",
        notes: ["甲賀流 章魚燒"],
        coordinates: { latitude: 34.672156, longitude: 135.497893 },
      },
      {
        time: "11:00",
        title: "MOOKEN 泡芙",
        address: "MooKEN 大阪府 大阪市",
        coordinates: { latitude: 34.672674, longitude: 135.501613 },
      },
      {
        time: "12:00",
        title: "午餐",
        description: "待定",
      },
      {
        time: "14:30",
        title: "日本橋電器街",
        address: "5-7, Nippombashi 2-Chōme",
        coordinates: { latitude: 34.669022, longitude: 135.506155 },
      },
      {
        time: "22:00",
        title: "回飯店",
        address: "旅館 竹水 なんば駅まで10分",
        coordinates: { latitude: 34.656683, longitude: 135.50396 },
      },
    ],
  },

  {
    date: "2026-04-05",
    day: 9,
    location: "大阪",
    accommodation: "旅館 竹水 なんば駅まで10分",
    activities: [
      { time: "08:00", title: "起床" },
      { time: "08:30", title: "出門" },
      {
        time: "09:00",
        title: "木津市場",
        address: "大阪木津地方卸賣市場 大阪府 大阪市",
        notes: ["營業到11:00", "吃海鮮", "ODA批發超市"],
        coordinates: { latitude: 34.657086, longitude: 135.500104 },
      },
      {
        time: "10:00",
        title: "上車往關西機場",
      },
      {
        time: "11:00",
        title: "抵達關西機場",
        address: "第1ターミナルビル 大阪府 泉佐野市",
        coordinates: { latitude: 34.434883, longitude: 135.244566 },
      },
      {
        time: "13:10",
        title: "飛機起飛",
        description: "中華航空 CI157",
      },
      {
        time: "15:00",
        title: "抵達桃園機場",
        description: "T2 航廈",
      },
    ],
  },
];
