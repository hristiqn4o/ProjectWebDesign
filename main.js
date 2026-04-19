// функции за количката

// масив с всички продукти
const PRODUCTS = [
  {id:1,  name:'Whey Protein Gold Standard',  brand:'PeakFit Lab',      cat:'Протеини',   price:89,  oldPrice:109, img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80', badge:'hot',  badgeTxt:'Топ',  stock:true,  rating:5, desc:'2кг • Шоколад, Ванилия, Ягода'},
  {id:2,  name:'Витамин D3 + K2',             brand:'PeakFit Lab',      cat:'Витамини',   price:24,  oldPrice:null, img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'60 капсули • 5000 IU'},
  {id:3,  name:'Pre-Workout Xtreme',          brand:'PeakFit Lab',      cat:'Pre-Workout',price:47,  oldPrice:59,  img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', badge:'sale', badgeTxt:'-20%', stock:true,  rating:4, desc:'300г • Арбуз, Тропик'},
  {id:4,  name:'Creatine Monohydrate',        brand:'PeakFit Lab',      cat:'Протеини',   price:34,  oldPrice:null, img:'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:5, desc:'500г • Micronized'},
  {id:5,  name:'Dry-Fit тренировъчна тениска',brand:'PeakFit Wear',     cat:'Облекло',    price:45,  oldPrice:null, img:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'S, M, L, XL • 6 цвята'},
  {id:6,  name:'Компресионен клин',           brand:'PeakFit Wear',     cat:'Облекло',    price:65,  oldPrice:null, img:'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'XS, S, M, L • 4 цвята'},
  {id:7,  name:'Фитнес ръкавици Pro',         brand:'PeakFit Gear',     cat:'Принадлеж.', price:33,  oldPrice:39,  img:'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', badge:'sale', badgeTxt:'-15%', stock:true,  rating:4, desc:'S/M, L/XL • Антихлъзгащи'},
  {id:8,  name:'Протеинов бар (12 бр.)',       brand:'PeakFit Food',     cat:'Храна',      price:36,  oldPrice:null, img:'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:5, desc:'21г протеин • Без захар'},
  {id:9,  name:'Omega-3 Fish Oil',            brand:'Optimum Nutrition',cat:'Витамини',   price:28,  oldPrice:35,  img:'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&q=80', badge:'sale', badgeTxt:'-20%', stock:true,  rating:5, desc:'90 капсули • 1000mg'},
  {id:10, name:'BCAA 2:1:1 Powder',           brand:'MyProtein',        cat:'Аминос',     price:42,  oldPrice:null, img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'400г • Лимон, Горски плодове'},
  {id:11, name:'Фитнес шейкър 700мл',         brand:'PeakFit Gear',     cat:'Принадлеж.', price:18,  oldPrice:null, img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'700мл • BPA Free'},
  {id:12, name:'Магнезий + B6',               brand:'Scitec Nutrition', cat:'Витамини',   price:22,  oldPrice:28,  img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:'sale', badgeTxt:'-21%', stock:false, rating:4, desc:'60 таблетки • 375mg'},
  {id:13, name:'Изотоничен спортен сок',       brand:'PeakFit Lab',      cat:'Витамини',   price:3,   oldPrice:null, img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'500мл • Лимон, Портокал'},
  {id:14, name:'Суитшът Fleece',               brand:'PeakFit Wear',     cat:'Облекло',    price:79,  oldPrice:99,  img:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80', badge:'sale', badgeTxt:'-20%', stock:true,  rating:5, desc:'S, M, L, XL, XXL • 3 цвята'},
  {id:15, name:'ZMA Zinc Magnesium',           brand:'Optimum Nutrition',cat:'Витамини',   price:32,  oldPrice:null, img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'90 капсули • Вечерна формула'},
  {id:16, name:'Fat Burner Extreme',           brand:'PeakFit Lab',      cat:'Изгаряне',   price:54,  oldPrice:68,  img:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80', badge:'sale', badgeTxt:'-21%', stock:true,  rating:4, desc:'60 капсули • Термогенен'},
  {id:17, name:'Тренировъчен клин мъже',       brand:'PeakFit Wear',     cat:'Облекло',    price:55,  oldPrice:null, img:'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'S, M, L, XL • Компресионен'},
  {id:18, name:'Колаген + Витамин C',          brand:'PeakFit Lab',      cat:'Витамини',   price:38,  oldPrice:null, img:'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'30 сашета • Праскова'},
  {id:19, name:'Масажна топка',                brand:'PeakFit Gear',     cat:'Принадлеж.', price:15,  oldPrice:null, img:'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'6см • Твърда'},
  {id:20, name:'Vegan Protein Blend',          brand:'MyProtein',        cat:'Протеини',   price:75,  oldPrice:90,  img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', badge:'sale', badgeTxt:'-17%', stock:true,  rating:5, desc:'1кг • Шоколад, Ванилия'},
  {id:21, name:'Спортна чанта 40L',            brand:'PeakFit Gear',     cat:'Принадлеж.', price:85,  oldPrice:null, img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:5, desc:'40L • Черна, Синя'},
  {id:22, name:'L-Carnitine 3000',             brand:'Scitec Nutrition', cat:'Изгаряне',   price:29,  oldPrice:36,  img:'https://images.unsplash.com/photo-1610415831878-47e0adca9b0e?w=400&q=80', badge:'sale', badgeTxt:'-19%', stock:true,  rating:4, desc:'450мл • Течен • Горски плодове'},
  {id:23, name:'Ленти за китки',               brand:'PeakFit Gear',     cat:'Принадлеж.', price:12,  oldPrice:null, img:'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'2 броя • Памук'},
  {id:24, name:'Мултивитамин Sport Complex',   brand:'Optimum Nutrition',cat:'Витамини',   price:45,  oldPrice:55,  img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:'sale', badgeTxt:'-18%', stock:false, rating:4, desc:'90 таблетки • Всекидневен'},
  {id:25, name:'Казеин Протеин Нощен',         brand:'PeakFit Lab',      cat:'Протеини',   price:94,  oldPrice:115, img:'https://images.unsplash.com/photo-1582019168580-5e91a6941a5b?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'2кг • Ванилия, Шоколад • Бавно освобождаване'},
  {id:26, name:'Egg White Protein',            brand:'MyProtein',        cat:'Протеини',   price:78,  oldPrice:null, img:'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'1кг • Яйчен белтък • Без лактоза'},
  {id:27, name:'Glutamine Powder',             brand:'Scitec Nutrition', cat:'Аминос',     price:38,  oldPrice:48,  img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', badge:'sale', badgeTxt:'-21%', stock:true,  rating:4, desc:'300г • Чист L-Glutamine'},
  {id:28, name:'EAA Essential Amino Acids',    brand:'PeakFit Lab',      cat:'Аминос',     price:52,  oldPrice:null, img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'400г • 9 незаменими аминокиселини'},
  {id:29, name:'Pre-Workout Night Pump',       brand:'PeakFit Lab',      cat:'Pre-Workout',price:55,  oldPrice:69,  img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', badge:'sale', badgeTxt:'-20%', stock:true,  rating:4, desc:'300г • Без кофеин • Pump формула'},
  {id:30, name:'Термогенен чай Slim',          brand:'PeakFit Lab',      cat:'Изгаряне',   price:22,  oldPrice:null, img:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'30 пакетчета • Зелен чай и джинджифил'},
  {id:31, name:'Спортен сутиен Pro',            brand:'PeakFit Wear',     cat:'Облекло',    price:48,  oldPrice:60,  img:'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', badge:'sale', badgeTxt:'-20%', stock:true,  rating:5, desc:'XS, S, M, L • Висока поддръжка'},
  {id:32, name:'Анцуг тренировъчен',           brand:'PeakFit Wear',     cat:'Облекло',    price:89,  oldPrice:null, img:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'S, M, L, XL • Streetwear стил'},
  {id:33, name:'Фитнес шапка Snapback',        brand:'PeakFit Wear',     cat:'Облекло',    price:28,  oldPrice:null, img:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'Универсален размер • 5 цвята'},
  {id:34, name:'Resistance Bands комплект',    brand:'PeakFit Gear',     cat:'Принадлеж.', price:35,  oldPrice:45,  img:'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80', badge:'sale', badgeTxt:'-22%', stock:true,  rating:5, desc:'5 нива на съпротивление'},
  {id:35, name:'Скачалка скоростна',           brand:'PeakFit Gear',     cat:'Принадлеж.', price:25,  oldPrice:null, img:'https://images.unsplash.com/photo-1434596922112-19c563067271?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'Алуминиева • Регулируема дължина'},
  {id:36, name:'Протеинови чипсове (6 бр.)',   brand:'PeakFit Food',     cat:'Храна',      price:18,  oldPrice:null, img:'https://images.unsplash.com/photo-1622484211851-f8a8e1daa8b8?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'15г протеин • Паприка, Сол'},
  {id:37, name:'Granola с протеин',             brand:'PeakFit Food',     cat:'Храна',      price:14,  oldPrice:18,  img:'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=400&q=80', badge:'sale', badgeTxt:'-22%', stock:true,  rating:5, desc:'400г • Овес, Ядки, Мед'},
  {id:38, name:'Vitamin C 1000mg',             brand:'Optimum Nutrition',cat:'Витамини',   price:18,  oldPrice:null, img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:5, desc:'100 таблетки • С Rose Hip'},
  {id:39, name:'Iron Tabs Желязо',             brand:'PeakFit Lab',      cat:'Витамини',   price:16,  oldPrice:null, img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'60 таблетки • 18mg желязо'},
  {id:40, name:'Масажен ролер пяна',           brand:'PeakFit Gear',     cat:'Принадлеж.', price:32,  oldPrice:42,  img:'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80', badge:'sale', badgeTxt:'-24%', stock:true,  rating:5, desc:'33см • Твърд • Мрежеста повърхност'},
  {id:41, name:'True Whey – GymBeam',            brand:'GymBeam',          cat:'Протеини',    price:55,  oldPrice:69,  img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80', badge:'hot',  badgeTxt:'Топ',  stock:true,  rating:5, desc:'1кг • Бисквити с крем, Шоколад, Ванилия'},
  {id:42, name:'Just Whey Grass-Fed – GymBeam',  brand:'GymBeam',          cat:'Протеини',    price:62,  oldPrice:null, img:'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'1кг • Чоколад, Ягода • Лесно смесване'},
  {id:43, name:'Anabolic Whey – GymBeam',        brand:'GymBeam',          cat:'Протеини',    price:27,  oldPrice:34,  img:'https://images.unsplash.com/photo-1582019168580-5e91a6941a5b?w=400&q=80', badge:'sale', badgeTxt:'-21%', stock:true,  rating:4, desc:'900г • WPC + Казеин + Креатин'},
  {id:44, name:'Pure IsoWhey Изолат – GymBeam',  brand:'GymBeam',          cat:'Протеини',    price:56,  oldPrice:null, img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:5, desc:'1кг • 90%+ протеин • Без лактоза'},
  {id:45, name:'Мицеларен Казеин – GymBeam',     brand:'GymBeam',          cat:'Протеини',    price:30,  oldPrice:38,  img:'https://images.unsplash.com/photo-1582019168580-5e91a6941a5b?w=400&q=80', badge:'sale', badgeTxt:'-21%', stock:true,  rating:4, desc:'1кг • Нощен протеин • Бавно усвояване'},
  {id:46, name:'Thor Pre-Workout – GymBeam',     brand:'GymBeam',          cat:'Pre-Workout', price:28,  oldPrice:null, img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', badge:'hot',  badgeTxt:'Топ',  stock:true,  rating:5, desc:'300г • Кофеин 200мг + Бета-Аланин'},
  {id:47, name:'Thor Fuel + Vitargo – GymBeam',  brand:'GymBeam',          cat:'Pre-Workout', price:36,  oldPrice:null, img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'600г • Енергия + Витарго'},
  {id:48, name:'Vitality Complex – GymBeam',     brand:'GymBeam',          cat:'Витамини',    price:18,  oldPrice:23,  img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:'sale', badgeTxt:'-22%', stock:true,  rating:5, desc:'60 капс. • Мултивитамин за спортисти'},
  {id:49, name:'Витамин D3 + K2 – GymBeam',      brand:'GymBeam',          cat:'Витамини',    price:14,  oldPrice:null, img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:5, desc:'120 капс. • 2000 IU D3 + 75мкг K2'},
  {id:50, name:'Omega-3 – GymBeam',              brand:'GymBeam',          cat:'Витамини',    price:16,  oldPrice:null, img:'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'90 капс. • EPA + DHA • Рибено масло'},
  {id:51, name:'Collagen Peptides – GymBeam',    brand:'GymBeam',          cat:'Витамини',    price:30,  oldPrice:null, img:'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'300г • Хидролизиран колаген + Вит. C'},
  {id:52, name:'Kreatin Monohydrate – GymBeam',  brand:'GymBeam',          cat:'Аминос',      price:20,  oldPrice:25,  img:'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80', badge:'sale', badgeTxt:'-20%', stock:true,  rating:5, desc:'500г • Микронизиран • 5г/доза'},
  {id:53, name:'BCAA 8:1:1 – GymBeam',           brand:'GymBeam',          cat:'Аминос',      price:24,  oldPrice:null, img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'400г • 8:1:1 съотношение Leucine'},
  {id:54, name:'Glutamine – GymBeam',            brand:'GymBeam',          cat:'Аминос',      price:19,  oldPrice:null, img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'400г • L-Glutamine 5г/доза'},
  {id:55, name:'L-Carnitine 3000 – GymBeam',     brand:'GymBeam',          cat:'Изгаряне',    price:17,  oldPrice:22,  img:'https://images.unsplash.com/photo-1610415831878-47e0adca9b0e?w=400&q=80', badge:'sale', badgeTxt:'-23%', stock:true,  rating:4, desc:'480мл • Течен • 3000мг/доза'},
  {id:56, name:'Fat Burner Complex – GymBeam',   brand:'GymBeam',          cat:'Изгаряне',    price:22,  oldPrice:null, img:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'90 капс. • Зелен чай + Кофеин + CLA'},
  {id:57, name:'Протеинов бар GymBeam 65г',      brand:'GymBeam',          cat:'Храна',       price:3,   oldPrice:null, img:'https://images.unsplash.com/photo-1622484211851-f8a8e1daa8b8?w=400&q=80', badge:null,   badgeTxt:'',     stock:true,  rating:4, desc:'65г • 20г протеин • 8 вкуса'},
  {id:58, name:'Pancake & Waffle Mix – GymBeam', brand:'GymBeam',          cat:'Храна',       price:11,  oldPrice:null, img:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:5, desc:'500г • Протеинов микс за палачинки'},
  {id:59, name:'Whey Protein – Proof Nutrition', brand:'Proof Nutrition',  cat:'Протеини',    price:75,  oldPrice:89,  img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80', badge:'sale', badgeTxt:'-16%', stock:true,  rating:5, desc:'1.5кг • 60 дози • 25г протеин/доза • Шоколад'},
  {id:60, name:'Vegan Protein – Proof Nutrition',brand:'Proof Nutrition',  cat:'Протеини',    price:79,  oldPrice:null, img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', badge:'new',  badgeTxt:'Ново', stock:true,  rating:4, desc:'1кг • Грахов + Ориз протеин • Cream & Cookies'}
];

const DETAILS = {
  1:  {desc:'Whey Protein Gold Standard е нашият флагмански протеин от 100% суроватъчен протеин с висока биологична стойност. Перфектен за мускулен растеж и възстановяване след тренировка.',specs:[['Протеин/порция','24г'],['Въглехидрати','3г'],['Мазнини','1.5г'],['Калории','120kcal'],['Порции','66'],['Вкусове','Шоколад, Ванилия, Ягода']]},
  2:  {desc:'Витамин D3 + K2 — идеалната комбинация за здрави кости и имунна система. Формула с 5000 IU D3 и 100mcg K2 MK-7 за оптимално усвояване на калций.',specs:[['Витамин D3','5000 IU'],['Витамин K2','100mcg'],['Форма','Капсули'],['Брой','60'],['Дозировка','1/ден']]},
  3:  {desc:'Pre-Workout Xtreme ще те заредят с максимална енергия и фокус. Съдържа Caffeine, Beta-Alanine, Citrulline и Creatine за взривна сила.',specs:[['Кофеин','200mg'],['Beta-Alanine','3.2г'],['Citrulline','6г'],['Creatine','3г'],['Порции','30']]},
  4:  {desc:'Creatine Monohydrate в микронизирана форма за максимално усвояване. Увеличава силата, издръжливостта и мускулния обем. Научно доказан.',specs:[['Creatine','5г/порция'],['Форма','Micronized прах'],['Порции','100'],['Разтворимост','Отлична']]},
  5:  {desc:'Dry-Fit тениска от иновативна технология, която отвежда влагата. Лека, дишаща и удобна за всяка тренировка. Запазва формата след многократно пране.',specs:[['Материал','92% Polyester, 8% Spandex'],['Технология','Dry-Fit'],['Размери','S, M, L, XL'],['Цветове','6']]},
  6:  {desc:'Компресионен клин с четирипосочно разтягане. Осигурява поддръжка на мускулите и ускорява възстановяването. Висока талия за удобство.',specs:[['Материал','78% Nylon, 22% Spandex'],['Тип','Висока талия'],['Размери','XS, S, M, L'],['Цветове','4']]},
  7:  {desc:'Фитнес ръкавици с антихлъзгащо покритие и подсилени дланни. Защитават ръцете при вдигане на тежести и осигуряват по-добър грип.',specs:[['Материал','Синтетична кожа + Neoprene'],['Затваряне','Велкро'],['Размери','S/M, L/XL']]},
  8:  {desc:'Протеинови барове с 21г протеин и без добавена захар. Перфектният следтренировъчен снакс в 6 натурални вкуса.',specs:[['Протеин','21г'],['Захар','0г'],['Калории','220kcal'],['В кутия','12 броя']]},
  9:  {desc:'Omega-3 Fish Oil от дълбоководни студеноводни риби. EPA и DHA за здраво сърце, мозък и стави. Без рибна миризма.',specs:[['EPA','360mg'],['DHA','240mg'],['Форма','Softgel'],['Брой','90']]},
  10: {desc:'BCAA 2:1:1 — незаменими аминокиселини в идеалното съотношение. Предотвратяват разграждането на мускулите и ускоряват възстановяването.',specs:[['Leucine','5г'],['Isoleucine','2.5г'],['Valine','2.5г'],['Порции','40']]},
  11: {desc:'Спортен шейкър от BPA-Free материал с плотно уплътнение против теч. Включва решетка за разбъркване и скала за измерване.',specs:[['Обем','700мл'],['Материал','BPA-Free Tritan'],['Решетка','Да'],['Цветове','3']]},
  12: {desc:'Магнезий + B6 за нервна система и нормална мускулна функция. Таблетки с удължено освобождаване за оптимално усвояване.',specs:[['Магнезий','375mg'],['Витамин B6','5mg'],['Форма','Таблетки'],['Брой','60']]},
  13: {desc:'Изотоничен спортен сок за бързо хидратиране и попълване на електролити по време на тренировка.',specs:[['Обем','500мл'],['Електролити','Na, K, Mg'],['Калории','30kcal']]},
  14: {desc:'Топъл суитшът от флийс материал за тренировки на открито. Зипова яка, страничен джоб и разширено дъно.',specs:[['Материал','100% Polyester Fleece'],['Яка','Зипова 1/4'],['Размери','S–XXL'],['Цветове','3']]},
  15: {desc:'ZMA — Цинк, Магнезий и Витамин B6 за оптимално възстановяване. Приема се вечер преди сън.',specs:[['Цинк','30mg'],['Магнезий','450mg'],['B6','10.5mg'],['Брой','90']]},
  16: {desc:'Термогенен Fat Burner за ускорено изгаряне на мазнини. Caffeine, Green Tea, L-Carnitine и Capsaicin.',specs:[['Кофеин','150mg'],['Green Tea','400mg'],['L-Carnitine','500mg'],['Порции','60']]},
  17: {desc:'Компресионни клини за мъже с поддръжка на квадрицепсите. Четирипосочно разтягане и анти-одор технология.',specs:[['Материал','80% Nylon, 20% Spandex'],['Размери','S, M, L, XL'],['Дължина','3/4']]},
  18: {desc:'Морски колаген + Витамин C в удобни сашета. Подкрепя здравето на ставите, кожата и съединителната тъкан.',specs:[['Колаген','10г/саше'],['Витамин C','80mg'],['Брой','30 сашета']]},
  19: {desc:'Твърда масажна топка за миофасциален релийз. Идеална за стъпала, гръб и раменна зона.',specs:[['Диаметър','6см'],['Твърдост','Твърда'],['Материал','EVA каучук']]},
  20: {desc:'Растителен протеин от грахов и ориз протеин. Перфектен за вегани. Пълен аминокиселинен профил.',specs:[['Протеин','22г/порция'],['Вид','Vegan Blend'],['Въглехидрати','4г'],['Вкусове','Шоколад, Ванилия']]},
  21: {desc:'Голяма спортна чанта с отделение за обувки и мокри дрехи. Идеална за фитнес и пътуване.',specs:[['Обем','40L'],['Материал','600D Polyester'],['Отделение обувки','Да'],['Цветове','2']]},
  22: {desc:'Течен L-Carnitine 3000mg на порция. Транспортира мастните киселини за производство на енергия.',specs:[['L-Carnitine','3000mg'],['Форма','Течен'],['Обем','450мл'],['Порции','15']]},
  23: {desc:'Памучни ленти за китки при вдигане на тежести. Регулируема дължина с велкро затваряне.',specs:[['Материал','100% Памук'],['Дължина','50см'],['Комплект','2 броя']]},
  24: {desc:'Мултивитамин за спортисти с 23 витамина и минерала в оптимални дози.',specs:[['Витамини','23 вида'],['Форма','Таблетки'],['Брой','90'],['Дозировка','3/ден']]},

  // продукти на GymBeam
  41: {desc:'True Whey от GymBeam е суроватъчен протеинов концентрат с 93% WPC. Смесете 1 мерителна лъжичка (30г) с 200-300мл вода. Без глутен, с подсладител сукралоза. Произведен в Словакия.',specs:[['Протеин/доза','22г'],['WPC','93%'],['Порции','33'],['Вкусове','Бисквити, Шоколад, Ванилия'],['Глутен','Не']]},
  42: {desc:'Just Whey Grass-Fed протеинът има невероятен вкус, разклаща се добре без бучки и се усвоява лесно. Клиентите го описват като вкусен млечен шейк с добра поносимост.',specs:[['Протеин/доза','24г'],['Тип','Grass-Fed WPC'],['Порции','33'],['Разтворимост','Отлична'],['Вкусове','Шоколад, Ягода']]},
  43: {desc:'Anabolic Whey е многокомпонентен протеин с WPC и казеин, обогатен с глутаминови пептиди и креатин монохидрат за подобрена физическа производителност.',specs:[['Порция','38г'],['Протеин/доза','25г'],['Съдържа','WPC + Казеин + Креатин'],['Вкусове','Ягода, Шоколад'],['Подсладител','Сукралоза']]},
  44: {desc:'Pure IsoWhey е суроватъчен протеинов изолат с 90%+ протеин, минимум мазнини и захар. Идеален за хора с непоносимост към лактоза.',specs:[['Протеин/доза','27г'],['Тип','Изолат WPI'],['Лактоза','<0.5г'],['Порции','33'],['Разтворимост','Много добра']]},
  45: {desc:'Мицеларен казеин с бавна скорост на усвояване (~6г/час). Идеален нощен протеин, който поддържа мускулите заредени по цялото време.',specs:[['Протеин/доза','24г'],['Скорост усвояване','Бавна 6г/ч'],['Порции','33'],['Препоръка','Преди сън'],['Вкусове','Ванилия, Шоколад']]},
  46: {desc:'Thor Pre-Workout е мощен предтренировъчен стимулант с 200мг кофеин и бета-аланин за максимална енергия, сила и фокус по време на тренировка.',specs:[['Кофеин','200мг'],['Beta-Alanine','3.2г'],['Citrulline','4г'],['Порции','20'],['Форма','Прах']]},
  47: {desc:'Thor Fuel + Vitargo комбинира мощна pre-workout формула с Vitargo въглехидрати за продължителна енергия и максимална помпа.',specs:[['Кофеин','200мг'],['Vitargo','25г'],['Порции','20'],['Вкусове','Горски плодове'],['Форма','Прах']]},
  48: {desc:'Vitality Complex е комплексен мултивитамин специално разработен за активни спортисти с 23+ витамина и минерала в оптимални дози.',specs:[['Витамини','23+'],['Форма','Капсули'],['Брой','60'],['Дозировка','2/ден'],['Без глутен','Да']]},
  49: {desc:'Витамин D3 + K2 от GymBeam в оптимална комбинация за здрави кости, имунна система и сърдечно здраве. K2 подобрява усвояването на D3.',specs:[['Витамин D3','2000 IU'],['Витамин K2','75мкг MK-7'],['Брой','120'],['Дозировка','1/ден'],['Форма','Капсули']]},
  50: {desc:'Omega-3 Fish Oil от дълбоководни студеноводни риби. Осигурява ежедневна доза EPA и DHA за здраво сърце, мозък и стави.',specs:[['EPA','180мг'],['DHA','120мг'],['Форма','Softgel'],['Брой','90'],['Без рибна миризма','Да']]},
  51: {desc:'Collagen Peptides е хидролизиран колаген тип I и III с добавен Витамин C за по-добро усвояване. Подпомага здравето на ставите, кожата и съединителната тъкан.',specs:[['Колаген','10г/доза'],['Витамин C','80мг'],['Тип','I + III'],['Форма','Прах'],['Брой дози','30']]},
  52: {desc:'Kreatin Monohydrate от GymBeam е микронизиран за по-добро усвояване. 5г чист креатин монохидрат на доза – клинично доказан за увеличаване на силата.',specs:[['Creatine','5г/доза'],['Форма','Micronized'],['Порции','100'],['Без вкус','Да'],['Без добавки','Да']]},
  53: {desc:'BCAA 8:1:1 с утроено количество левцин за максимален мускулно-протеинов синтез. Подходящ по всяко време на деня.',specs:[['Leucine','8г'],['Isoleucine','1г'],['Valine','1г'],['Порции','40'],['Форма','Прах']]},
  54: {desc:'L-Glutamine в чиста форма за бързо възстановяване, укрепване на имунната система и намаляване на мускулната болезненост след тренировка.',specs:[['L-Glutamine','5г/доза'],['Порции','80'],['Форма','Прах'],['Чистота','100%'],['Без вкус','Да']]},
  55: {desc:'L-Carnitine 3000 в течна форма за максимално усвояване. Транспортира мастните киселини в митохондриите за производство на енергия.',specs:[['L-Carnitine','3000мг/доза'],['Форма','Течна'],['Обем','480мл'],['Порции','16'],['Вкус','Портокал']]},
  56: {desc:'Fat Burner Complex комбинира зелен чай, кофеин и CLA за ускорен метаболизъм, изгаряне на мазнини и контрол на теглото.',specs:[['Зелен чай','400мг'],['Кофеин','100мг'],['CLA','500мг'],['Брой','90'],['Дозировка','3/ден']]},
  57: {desc:'Протеинов бар на GymBeam с 20г протеин, без добавена захар. Перфектен снакс за активни хора в движение.',specs:[['Протеин','20г'],['Захар','<1г'],['Калории','200kcal'],['Тегло','65г'],['Вкусове','8 варианта']]},
  58: {desc:'Pancake & Waffle Mix е специална смес за приготвяне на вкусни протеинови палачинки и уафли. Просто добавете вода или мляко.',specs:[['Протеин/100г','30г'],['Мазнини','3г'],['Въглехидрати','50г'],['Тегло','500г'],['Подготовка','Само вода']]},
  // продукти на Proof Nutrition
  59: {desc:'Whey Protein от Proof Nutrition съдържа 25г протеин на доза с натурален вкус на шоколад. Разтваря се без бучки дори само с вода. Клинично тестван. GMP сертифициран.',specs:[['Протеин/доза','25г'],['Дози','60'],['Тегло','1.5кг'],['Вкус','Шоколад'],['Сертификат','GMP + БАБХ']]},
  60: {desc:'Vegan Protein от Proof Nutrition е комбинация от грахов и оризов протеин с пълен аминокиселинен профил. Cream & Cookies вкус без изкуствени съставки.',specs:[['Протеин/доза','22г'],['Вид','Vegan'],['Тегло','1кг'],['Вкус','Cream & Cookies'],['Без лактоза','Да']]},
  // собствени продукти на PeakFit
  25: {desc:'2кг • Ванилия, Шоколад • Бавно освобождаване',specs:[['Марка','PeakFit Lab'],['Категория','Протеини']]},
  26: {desc:'1кг • Яйчен белтък • Без лактоза',specs:[['Марка','MyProtein'],['Категория','Протеини']]},
  27: {desc:'300г • Чист L-Glutamine',specs:[['Марка','Scitec Nutrition'],['Категория','Аминос']]},
  28: {desc:'400г • 9 незаменими аминокиселини',specs:[['Марка','PeakFit Lab'],['Категория','Аминос']]},
  29: {desc:'300г • Без кофеин • Pump формула',specs:[['Марка','PeakFit Lab'],['Категория','Pre-Workout']]},
  30: {desc:'30 пакетчета • Зелен чай и джинджифил',specs:[['Марка','PeakFit Lab'],['Категория','Изгаряне']]},
  31: {desc:'XS, S, M, L • Висока поддръжка',specs:[['Марка','PeakFit Wear'],['Категория','Облекло']]},
  32: {desc:'S, M, L, XL • Streetwear стил',specs:[['Марка','PeakFit Wear'],['Категория','Облекло']]},
  33: {desc:'Универсален размер • 5 цвята',specs:[['Марка','PeakFit Wear'],['Категория','Облекло']]},
  34: {desc:'5 нива на съпротивление',specs:[['Марка','PeakFit Gear'],['Категория','Принадлеж.']]},
  35: {desc:'Алуминиева • Регулируема дължина',specs:[['Марка','PeakFit Gear'],['Категория','Принадлеж.']]},
  36: {desc:'15г протеин • Паприка, Сол',specs:[['Марка','PeakFit Food'],['Категория','Храна']]},
  37: {desc:'400г • Овес, Ядки, Мед',specs:[['Марка','PeakFit Food'],['Категория','Храна']]},
  38: {desc:'100 таблетки • С Rose Hip',specs:[['Марка','Optimum Nutrition'],['Категория','Витамини']]},
  39: {desc:'60 таблетки • 18mg желязо',specs:[['Марка','PeakFit Lab'],['Категория','Витамини']]},
  40: {desc:'33см • Твърд • Мрежеста повърхност',specs:[['Марка','PeakFit Gear'],['Категория','Принадлеж.']]},
};

let promoDiscount = 0;
const PROMO_CODES = { 'PEAK10': 10, 'SPORT20': 20, 'FITNESS15': 15 };


function getCart(){try{return JSON.parse(localStorage.getItem('pf_cart')||'[]');}catch{return[];}}
function saveCart(c){localStorage.setItem('pf_cart',JSON.stringify(c));updateBadge();}
function updateBadge(){const t=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('#cartBadge').forEach(b=>b.textContent=t);}

function addToCart(id){
  const allProds = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  const p = allProds.find(x=>x.id===id);
  if(!p){ showToast('⚠️ Продуктът не е намерен'); return; }
  const c=getCart();
  const ex=c.find(i=>i.id===id);
  if(ex){
    ex.qty++;
    // ако продукта вече е в количката без цена го допълвам
    if(!ex.price){ ex.price=p.price; ex.name=p.name; ex.brand=p.brand; ex.img=p.img; }
  } else {
    c.push({id:p.id, name:p.name, brand:p.brand, price:p.price, img:p.img, qty:1});
  }
  saveCart(c);
  showToast('✓ '+p.name+' добавен в количката!');
}

// показва съобщение на потребителя за кратко
function showToast(msg){
  let t=document.getElementById('toastEl');
  if(!t){t=document.createElement('div');t.id='toastEl';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2800);
}

// добавям сянка на навигацията при скрол
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.nav');
  if(nav) nav.style.boxShadow=window.scrollY>40?'0 4px 24px rgba(0,0,0,.1)':'0 2px 20px rgba(0,0,0,.06)';
});

// зареждане на страницата
document.addEventListener('DOMContentLoaded', function(){
  updateBadge();
  initNewsletter();
  setTimeout(initPage, 10);
});

function initPage(){
  const page = window.location.pathname;

  // начална страница
  if(page.includes('index') || page === '/' || page.endsWith('/')){
    initCountdown();
    if(typeof renderHomeProducts === 'function') renderHomeProducts();
  }

  // каталог
  if(page.includes('catalog') && !page.includes('cart')){
    if(typeof render === 'function') render();
  }

  // количка
  if(page.includes('cart')){
    if(typeof renderCart === 'function') renderCart();
  }
}

// таймер за промоцията - запазва се в localStorage
function initCountdown(){
  const KEY = 'pf_promo_end';
  let end = localStorage.getItem(KEY);
  if(!end || new Date(end) < new Date()){
    const e = new Date();
    e.setHours(e.getHours()+23, e.getMinutes()+59, e.getSeconds()+59);
    end = e.toISOString();
    localStorage.setItem(KEY, end);
  }
  end = new Date(end);

  function tick(){
    const diff = Math.max(0, end - new Date());
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const pad = n => String(n).padStart(2,'0');
    const hEl=document.getElementById('hours');
    const mEl=document.getElementById('minutes');
    const sEl=document.getElementById('seconds');
    if(hEl) hEl.textContent=pad(h);
    if(mEl) mEl.textContent=pad(m);
    if(sEl){ sEl.textContent=pad(s); sEl.style.color='#1a8cff'; }
    if(diff===0) localStorage.removeItem(KEY);
  }
  tick();
  setInterval(tick, 1000);
}




// функции за страницата с каталога


const PER_PAGE = 12;
let currentPage = 1;
let currentView = 'grid';
let filtered = [...PRODUCTS];

function syncPrice(){
  const mn=parseInt(document.getElementById('minPriceInput').value)||0;
  const mx=parseInt(document.getElementById('maxPriceInput').value)||300;
  document.getElementById('priceSlider').value=mx;
  document.getElementById('maxPrice').textContent=mx;
}
function syncPriceFromSlider(){
  const v=document.getElementById('priceSlider').value;
  document.getElementById('maxPrice').textContent=v;
  document.getElementById('maxPriceInput').value=v;
  const eurEl=document.getElementById('maxPriceEur');
  if(eurEl) eurEl.textContent=(v/1.95583).toFixed(2);
}
function applyFilters(){
  const minP=parseInt(document.getElementById('minPriceInput').value)||0;
  const maxP=parseInt(document.getElementById('maxPriceInput').value)||300;

  // ако не е избрана категория показвам всички
  const checkedCats=[...document.querySelectorAll('input[data-cat]:checked')].map(i=>i.dataset.cat);
  const allCats=[...document.querySelectorAll('input[data-cat]')].map(i=>i.dataset.cat);
  const cats = checkedCats.length===0 ? allCats : checkedCats;

  // ако не е избрана марка показвам всички
  const checkedBrands=[...document.querySelectorAll('input[data-brand]:checked')].map(i=>i.dataset.brand);
  const allBrands=[...document.querySelectorAll('input[data-brand]')].map(i=>i.dataset.brand);
  const brands = checkedBrands.length===0 ? allBrands : checkedBrands;

  const onlyStock=document.getElementById('chkStock').checked;
  const onlySale=document.getElementById('chkSale').checked;
  const minRating=parseInt(document.querySelector('input[name=rating]:checked')?.value||'0');
  const sort=document.getElementById('sortSel').value;

  filtered=PRODUCTS.filter(p=>{
    if(p.price<minP||p.price>maxP) return false;
    if(!cats.includes(p.cat)) return false;
    if(!brands.includes(p.brand)) return false;
    if(onlyStock && !p.stock) return false;
    if(onlySale && !p.oldPrice) return false;
    if(p.rating<minRating) return false;
    return true;
  });

  if(sort==='price-asc') filtered.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') filtered.sort((a,b)=>b.price-a.price);
  if(sort==='name') filtered.sort((a,b)=>a.name.localeCompare(b.name,'bg'));
  if(sort==='rating') filtered.sort((a,b)=>b.rating-a.rating);

  currentPage=1;
  render();
}

function clearFilters(){
  document.querySelectorAll('input[data-cat]').forEach(i=>i.checked=false);
  document.querySelectorAll('input[data-brand]').forEach(i=>i.checked=false);
  document.getElementById('chkStock').checked=false;
  document.getElementById('chkSale').checked=false;
  document.querySelector('input[name=rating][value="0"]').checked=true;
  document.getElementById('priceSlider').value=300;
  document.getElementById('maxPrice').textContent=300;
  document.getElementById('minPriceInput').value=0;
  document.getElementById('maxPriceInput').value=300;
  filtered=[...PRODUCTS];currentPage=1;render();
  showToast('✓ Филтрите са изчистени');
}

function setView(v){
  currentView=v;
  ['Grid','List','Table'].forEach(x=>document.getElementById('btn'+x).classList.remove('on'));
  document.getElementById('btn'+v.charAt(0).toUpperCase()+v.slice(1)).classList.add('on');
  render();
}

function goPage(p){
  const total=Math.ceil(filtered.length/PER_PAGE);
  if(p<1||p>total)return;
  currentPage=p;render();
  window.scrollTo({top:200,behavior:'smooth'});
}

function render(){
  if(!document.getElementById('resultCount')) return; // функцията не трябва да работи на другите страници
  document.getElementById('resultCount').textContent=filtered.length;
  const start=(currentPage-1)*PER_PAGE;
  const page=filtered.slice(start,start+PER_PAGE);
  const c=document.getElementById('prodsContainer');

  if(currentView==='grid'){
    c.innerHTML='<div class="prods-grid">'+page.map(p=>`
      <div class="prod" onclick="if(!event.target.closest('button'))openModal(${p.id})">
        <div class="prod-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80'"/>
          ${p.badge?`<span class="prod-badge badge-${p.badge}">${p.badgeTxt}</span>`:''}
          <div class="prod-fav">♡</div>
        </div>
        <div class="prod-info">
          <div class="prod-brand">${p.brand}</div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-desc">${p.desc}</div>
          <div class="prod-foot">
            <div class="prod-price">${p.oldPrice?`<span class="prod-old">${Math.round(p.oldPrice/1.95583)}€</span>`:''} ${Math.round(p.price/1.95583)}€ <span style="font-size:.72rem;color:#999;font-weight:500;">(${p.price}лв)</span></div>
            ${p.stock?`<button class="prod-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Добави</button>`:'<span style="font-size:.75rem;color:#ff4757;font-weight:600;">Изчерпан</span>'}
          </div>
        </div>
      </div>`).join('')+'</div>';

  } else if(currentView==='list'){
    c.innerHTML='<div class="prods-list">'+page.map(p=>`
      <div class="prod-list-item" onclick="if(!event.target.closest('button'))openModal(${p.id})">
        <div class="prod-list-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&q=80'"/>
          ${p.badge?`<span class="prod-badge badge-${p.badge}" style="position:absolute;top:8px;left:8px;">${p.badgeTxt}</span>`:''}
        </div>
        <div class="prod-list-info">
          <div class="prod-list-text">
            <div class="prod-brand">${p.brand}</div>
            <div class="prod-name">${p.name}</div>
            <div style="font-size:.78rem;color:#999;">${p.desc}</div>
          </div>
          <div style="color:#f5a623;font-size:.85rem;">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)}</div>
          <div class="prod-list-price">${p.oldPrice?`<span class="prod-list-old">${Math.round(p.oldPrice/1.95583)}€</span>`:''} ${Math.round(p.price/1.95583)}€ <span style="font-size:.72rem;color:#999;font-weight:500;">(${p.price}лв)</span></div>
          ${p.stock?`<button class="prod-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Добави</button>`:'<span style="font-size:.75rem;color:#ff4757;font-weight:600;">Изчерпан</span>'}
        </div>
      </div>`).join('')+'</div>';

  } else {
    c.innerHTML=`<div class="table-wrap"><table class="prod-table">
      <thead><tr><th>#</th><th>Снимка</th><th>Продукт</th><th>Категория</th><th>Марка</th><th>Оценка</th><th>Цена</th><th>Наличност</th><th></th></tr></thead>
      <tbody>`+page.map((p,i)=>`<tr onclick="openModal(${p.id})" style="cursor:pointer;">
        <td style="color:#ccc;">${start+i+1}</td>
        <td><img src="${p.img}" style="width:50px;height:40px;object-fit:cover;border-radius:8px;" loading="lazy"/></td>
        <td class="td-name">${p.name}</td>
        <td style="color:#888;">${p.cat}</td>
        <td style="color:#1a8cff;font-weight:600;">${p.brand}</td>
        <td style="color:#f5a623;">${'★'.repeat(p.rating)}</td>
        <td class="td-price">${Math.round(p.price/1.95583)}€ <span style="font-size:.75rem;color:#888;">(${p.price}лв)</span></td>
        <td>${p.stock?'<span class="td-stock-in">В наличност</span>':'<span class="td-stock-out">Изчерпан</span>'}</td>
        <td onclick="event.stopPropagation();">${p.stock?`<button class="prod-add" style="font-size:.72rem;padding:6px 12px;" onclick="addToCart(${p.id})">+ Добави</button>`:'-'}</td>
      </tr>`).join('')+'</tbody></table></div>';
  }

  renderPagination();
}

function renderPagination(){
  const total=Math.ceil(filtered.length/PER_PAGE);
  const pg=document.getElementById('pagination');
  if(total<=1){pg.innerHTML='';return;}
  let h='';
  const prev=currentPage===1?'style="opacity:.3;pointer-events:none;"':'';
  const next=currentPage===total?'style="opacity:.3;pointer-events:none;"':'';
  h+=`<div class="pg-btn" onclick="goPage(${currentPage-1})" ${prev}>‹</div>`;
  for(let i=1;i<=total;i++){
    if(i===1||i===total||Math.abs(i-currentPage)<=1){
      h+=`<div class="pg-btn ${i===currentPage?'on':''}" onclick="goPage(${i})">${i}</div>`;
    } else if(Math.abs(i-currentPage)===2){
      h+=`<div class="pg-dots">…</div>`;
    }
  }
  h+=`<div class="pg-btn" onclick="goPage(${currentPage+1})" ${next}>›</div>`;
  pg.innerHTML=h;
}

// отваряне на модален прозорец с детайли за продукта
function openModal(id){
  const p=PRODUCTS.find(x=>x.id===id);
  const d=DETAILS[id]||{desc:p.desc,specs:[]};
  if(!p)return;

  document.getElementById('modalImgSrc').src=p.img;
  document.getElementById('modalBrand').textContent=p.brand;
  document.getElementById('modalName').textContent=p.name;
  document.getElementById('modalStars').textContent='★'.repeat(p.rating)+'☆'.repeat(5-p.rating);
  document.getElementById('modalRatingTxt').textContent=p.rating+'.0 / 5.0';
  document.getElementById('modalPrice').textContent=Math.round(p.price/1.95583)+'€';
  // изтривам старата цена в лева за да не се наслагва при повторно отваряне
  const prevBGN=document.getElementById('modalPriceBGN');if(prevBGN)prevBGN.remove();
  document.getElementById('modalPrice').insertAdjacentHTML('afterend','<span id="modalPriceBGN" style="font-size:.9rem;color:#888;margin-left:8px;font-weight:400;">('+p.price+' лв.)</span>');
  document.getElementById('modalDesc').textContent=d.desc;

  const badge=document.getElementById('modalBadge');
  if(p.badge){badge.style.display='';badge.textContent=p.badgeTxt;badge.className='modal-badge badge-'+p.badge;}
  else badge.style.display='none';

  const oldP=document.getElementById('modalOldPrice');
  const disc=document.getElementById('modalDiscount');
  if(p.oldPrice){
    oldP.style.display='';oldP.textContent=Math.round(p.oldPrice/1.95583)+'€ ('+p.oldPrice+'лв)';
    disc.style.display='';disc.textContent='-'+Math.round((1-p.price/p.oldPrice)*100)+'%';
  } else {oldP.style.display='none';disc.style.display='none';}

  document.getElementById('modalStock').innerHTML=p.stock
    ?'<span class="modal-stock-in">✓ В наличност — изпраща се до 24ч</span>'
    :'<span class="modal-stock-out">✕ Временно изчерпан</span>';

  const btn=document.getElementById('modalAddBtn');
  btn.disabled=!p.stock;
  btn.textContent=p.stock?'🛒 Добави в количката':'Изчерпан';
  btn.onclick=p.stock?()=>{addToCart(id);btn.textContent='✓ Добавено!';setTimeout(()=>btn.textContent='🛒 Добави в количката',1500);}:null;

  document.getElementById('modalSpecs').innerHTML=d.specs.map(([l,v])=>`
    <div class="modal-spec"><span class="modal-spec-lbl">${l}</span><span class="modal-spec-val">${v}</span></div>`).join('');

  document.getElementById('modalTabDesc').style.display='';
  document.getElementById('modalTabSpecs').style.display='none';
  document.querySelectorAll('.modal-tab').forEach((t,i)=>t.classList.toggle('on',i===0));

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function switchModalTab(tab,el){
  document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  document.getElementById('modalTabDesc').style.display=tab==='desc'?'':'none';
  document.getElementById('modalTabSpecs').style.display=tab==='specs'?'':'none';
}

function closeModal(e){if(e.target===document.getElementById('modalOverlay'))closeModalDirect();}
function closeModalDirect(){document.getElementById('modalOverlay').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModalDirect();});


function searchProducts(val){
  const q=val.trim().toLowerCase();
  if(!q){filtered=[...PRODUCTS];}
  else{filtered=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q));}
  currentPage=1;render();
}

function quickFilter(cat,el){
  document.querySelectorAll('.ph-chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  if(cat==='all'){filtered=[...PRODUCTS];}
  else{filtered=PRODUCTS.filter(p=>p.cat===cat);}
  currentPage=1;render();
  // синхронизирам чекбоксовете в sidebar-а
  document.querySelectorAll('input[data-cat]').forEach(i=>i.checked=(cat==='all'||i.dataset.cat===cat));
}

function quickFilterSale(el){
  document.querySelectorAll('.ph-chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  filtered=PRODUCTS.filter(p=>p.oldPrice);
  currentPage=1;render();
}

// стартиране
updateBadge();
render();
window.addEventListener('scroll',()=>{document.querySelector('.nav').style.boxShadow=window.scrollY>40?'0 4px 24px rgba(0,0,0,.1)':'0 2px 20px rgba(0,0,0,.06)';});

// функции за страницата с контакти
function toggleFaq(el){
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if(!isOpen) el.classList.add('open');
}

function submitContactForm(){
  const name    = document.getElementById('cfName')?.value.trim();
  const email   = document.getElementById('cfEmail')?.value.trim();
  const subject = document.getElementById('cfSubject')?.value;
  const message = document.getElementById('cfMessage')?.value.trim();
  const btn     = document.getElementById('cfSubmit');
  const success = document.getElementById('cfSuccess');

  if(!name || !email || !subject || !message){
    showToast('⚠️ Моля попълни всички задължителни полета');
    return;
  }
  if(!email.includes('@')){
    showToast('⚠️ Невалиден имейл адрес');
    return;
  }

  // симулирам изпращане на формата
  btn.disabled = true;
  btn.innerHTML = '<span>Изпращане...</span>';
  setTimeout(()=>{
    btn.style.display = 'none';
    if(success) success.style.display = 'block';
    showToast('✓ Съобщението е изпратено!');
  }, 1200);
}

// функции за количката
function renderCart(){
  // добавям данните за продуктите от масива защото в localStorage са само id и количество
  const allProds = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  if(allProds.length){
    const rawCart = getCart();
    rawCart.forEach(item => {
      const p = allProds.find(x => x.id === item.id);
      if(p){ item.price=p.price; item.name=p.name; item.brand=p.brand; item.img=p.img; }
    });
    saveCart(rawCart);
  }
  const cart = getCart();
  const empty = document.getElementById('cartEmpty');
  const list  = document.getElementById('cartItemsList');
  const cont  = document.getElementById('cartContinue');
  const summ  = document.getElementById('cartSummary');
  const rec   = document.getElementById('cartRecommended');

  if(!empty) return; // ако не сме на страницата с количката спирам

  if(cart.length === 0){
    empty.style.display = 'block';
    list.style.display  = 'none';
    cont.style.display  = 'none';
    summ.style.display  = 'none';
    if(rec) rec.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  list.style.display  = 'block';
  cont.style.display  = 'flex';
  summ.style.display  = 'block';

  // показвам продуктите
  const container = document.getElementById('cartItems');
  container.innerHTML = cart.map(item => {
    const eur = Math.round(item.price / 1.95583);
    return `
    <div class="cart-item" id="ci-${item.id}">
      <div class="ci-product">
        <img class="ci-img" src="${item.img || 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=120&q=80'}" alt="${item.name}" onerror="this.style.display='none'"/>
        <div class="ci-info">
          <div class="ci-brand">${item.brand || 'PeakFit'}</div>
          <div class="ci-name">${item.name}</div>
        </div>
      </div>
      <div class="ci-price">${eur}€ <span class="ci-old">(${item.price}лв)</span></div>
      <div class="ci-qty">
        <button class="ci-qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="ci-qty-num">${item.qty}</span>
        <button class="ci-qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <div class="ci-total">${Math.round(item.price * item.qty / 1.95583)}€</div>
      <button class="ci-remove" onclick="removeFromCart(${item.id})" title="Премахни">✕</button>
    </div>`;
  }).join('');

  updateSummary();
  setTimeout(renderRecommended, 50);
}

function changeQty(id, delta){
  const cart = getCart();
  const item = cart.find(i => Number(i.id) === Number(id));
  if(!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
  renderCart();
}

function removeFromCart(id){
  const cart = getCart().filter(i => Number(i.id) !== Number(id));
  saveCart(cart);
  renderCart();
  showToast('✓ Продуктът е премахнат');
}

function clearCart(){
  if(!confirm('Сигурен ли си, че искаш да изчистиш количката?')) return;
  saveCart([]);
  renderCart();
  showToast('✓ Количката е изчистена');
}


function applyPromo(){
  const code  = document.getElementById('promoInput')?.value.trim().toUpperCase();
  const msg   = document.getElementById('promoMsg');
  if(!msg) return;
  if(PROMO_CODES[code]){
    promoDiscount = PROMO_CODES[code];
    msg.textContent = `✓ Код приложен — ${promoDiscount}% отстъпка!`;
    msg.className = 'cs-promo-msg ok';
    updateSummary();
    showToast(`✓ Промо код приложен — ${promoDiscount}% отстъпка!`);
  } else {
    promoDiscount = 0;
    msg.textContent = '✗ Невалиден промо код';
    msg.className = 'cs-promo-msg err';
    updateSummary();
  }
}

function updateSummary(){
  const cart     = getCart();
  const subtotal = cart.reduce((s, i) => s + (Number(i.price)||0) * (Number(i.qty)||1), 0);
  const subtotalEur = Math.round(subtotal / 1.95583);
  const discountEur = Math.round(subtotalEur * promoDiscount / 100);
  const afterDiscount = subtotalEur - discountEur;
  const delivery = afterDiscount >= 41 ? 0 : 5; // безплатна доставка над 41 евро
  const total    = afterDiscount + delivery;
  const FREE_THRESHOLD = 41;

  const el = id => document.getElementById(id);
  if(el('csSubtotal'))  el('csSubtotal').textContent  = subtotalEur + '€';
  if(el('csTotal'))     el('csTotal').textContent      = total + '€';

  // ред с отстъпката
  if(promoDiscount > 0){
    if(el('csDiscountRow')) el('csDiscountRow').style.display = 'flex';
    if(el('csDiscount'))    el('csDiscount').textContent      = '-' + discountEur + '€';
  } else {
    if(el('csDiscountRow')) el('csDiscountRow').style.display = 'none';
  }

  // доставка
  if(el('csDelivery')) el('csDelivery').textContent = delivery === 0 ? '🎉 Безплатна' : delivery + '€';

  // прогрес бар колко остава до безплатна доставка
  const fdLeft = Math.max(0, FREE_THRESHOLD - afterDiscount);
  const pct    = Math.min(100, (afterDiscount / FREE_THRESHOLD) * 100);
  if(el('csFdLeft'))  el('csFdLeft').textContent        = fdLeft > 0 ? fdLeft + '€' : '0€';
  if(el('csFdFill'))  el('csFdFill').style.width        = pct + '%';
  if(el('csFreeDelivery')) el('csFreeDelivery').style.display = afterDiscount >= FREE_THRESHOLD ? 'none' : 'block';
}

function renderRecommended(){
  const rec = document.getElementById('cartRecGrid');
  if(!rec) return;
  const allProds = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  if(!allProds.length) return;
  const cart    = getCart();
  const cartIds = cart.map(i => Number(i.id));
  const pool    = allProds.filter(p => !cartIds.includes(Number(p.id)) && p.stock);
  const picked  = pool.sort(() => Math.random() - 0.5).slice(0, 4);
  rec.innerHTML = picked.map(p => {
    const eur = Math.round(p.price / 1.95583);
    return `
    <div class="prod" onclick="openModal(${p.id})">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"/>
        ${p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badgeTxt}</span>` : ''}
      </div>
      <div class="prod-info">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-footer">
          <div class="prod-price">${eur}€ <span style="font-size:.72rem;color:#999;">(${p.price}лв)</span></div>
          <button class="prod-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Добави</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function checkout(){
  const cart = getCart();
  if(cart.length === 0) return;
  showToast('✓ Поръчката е изпратена! Ще се свържем скоро.');
  saveCart([]);
  setTimeout(() => renderCart(), 1000);
}

// стартирам страницата с количката


// абонамент за бюлетин
function initNewsletter(){
  document.querySelectorAll('.newsletter-btn').forEach(btn => {
    btn.addEventListener('click', function(){
      const input = this.closest('.footer-newsletter-inner')?.querySelector('input[type="email"]')
                 || this.previousElementSibling;
      if(!input) return;
      const email = input.value.trim();
      if(!email || !email.includes('@')){
        showToast('⚠️ Моля въведи валиден имейл');
        return;
      }
      input.value = '';
      showToast('✓ Абониран си успешно! Очаквай нашите оферти.');
      this.textContent = '✓ Абониран';
      this.style.background = '#00c48c';
      setTimeout(() => {
        this.textContent = 'Абонирай се →';
        this.style.background = '';
      }, 3000);
    });
  });
}