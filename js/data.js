// Blue Archive Static School Metadata

const schoolsData = [
  {
    id: "Abydos",
    nameEn: "Abydos High School",
    nameTh: "โรงเรียนมัธยมปลายอาบิดอส",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/f/f6/School_Icon_ABYDOS.png",
    color: "#13b3c3",
    description: "โรงเรียนเก่าแก่ที่ครั้งหนึ่งเคยยิ่งใหญ่ที่สุดในคิโวทอส แต่ปัจจุบันประสบภัยพิบัติพายุทรายกลืนกินเมืองและมีหนี้สินมหาศาล สมาชิกคณะกรรมการแผนงานล้างหนี้ที่เหลืออยู่เพียง 5 คนจึงต้องต่อสู้ในทุกวันเพื่อรักษาโรงเรียนไว้"
  },
  {
    id: "Gehenna",
    nameEn: "Gehenna Academy",
    nameTh: "สถาบันเกเฮนนา",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/f/f3/School_Icon_GEHENNA.png",
    color: "#c51d24",
    description: "สถาบันขนาดใหญ่ที่เน้นค่านิยมความอิสระเสรีแบบสุดโต่ง เต็มไปด้วยความโกลาหลและความขัดแย้งของชมรมต่างๆ มีกรรมการวินัยคอยควบคุมความเรียบร้อย และมีแก๊งป่วนเมืองอย่างพวกรับจ้างสารพัด 68 ก่อความวุ่นวายประจำ"
  },
  {
    id: "Trinity",
    nameEn: "Trinity General School",
    nameTh: "โรงเรียนรวมทรินิตี้",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/d/d4/School_Icon_TRINITY.png",
    color: "#dfb23b",
    description: "โรงเรียนคริสเตียนเก่าแก่อันทรงเกียรติและสง่างามที่สุดแห่งหนึ่งในคิโวทอส สืบทอดวัฒนธรรมมารยาทของชนชั้นสูง เน้นความสามัคคีเป็นระเบียบเรียบร้อย นำโดยสภาน้ำชา (Tea Party) และกลุ่มพยาบาลกู้ภัย"
  },
  {
    id: "Millennium",
    nameEn: "Millennium Science School",
    nameTh: "โรงเรียนวิทยาศาตร์มิลเลนเนียม",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/a/ab/School_Icon_MILLENNIUM.png",
    color: "#0055a5",
    description: "โรงเรียนใหม่มาแรงที่ขับเคลื่อนด้วยวิทยาศาสตร์ เทคโนโลยี และคณิตศาสตร์ เป็นศูนย์รวมของอัจฉริยะด้านการพัฒนา อุปกรณ์ไฮเทค คอมพิวเตอร์ และหุ่นยนต์ นำโดยสภานักเรียนสัมมนา (Seminar)"
  },
  {
    id: "Hyakkiyako",
    nameEn: "Hyakkiyako Alliance Academy",
    nameTh: "สถาบันพันธมิตรเฮียคคิยาโค",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/a/a2/School_Icon_HYAKKIYAKO.png",
    color: "#e93e7b",
    description: "โรงเรียนสไตล์ญี่ปุ่นโบราณที่เป็นพันธมิตรระหว่างกลุ่มชมรมต่างๆ ไม่มีสภานักเรียนกลางที่คุมเด็ดขาด แต่อยู่ร่วมกันด้วยวัฒนธรรมดั้งเดิม งานเทศกาล การท่องเที่ยว และความบันเทิงที่สวยงาม"
  },
  {
    id: "Shanhaijing",
    nameEn: "Shanhaijing Senior High School",
    nameTh: "โรงเรียนมัธยมปลายซานไห่จิง",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/f/f6/School_Icon_SHANHAIJING.png",
    color: "#00966a",
    description: "โรงเรียนวัฒนธรรมจีนโบราณ โดดเด่นในเรื่องของการค้าขาย การทำธุรกิจ อาหารสมุนไพรจีน และศิลปะการต่อสู้ดั้งเดิม นำโดยสมาคมนักเรียนหงหัวฟู่คอยดูแลความเป็นระเบียบและเศรษฐกิจในเขต"
  },
  {
    id: "RedWinter",
    nameEn: "Red Winter Federal Academy",
    nameTh: "สถาบันสหพันธ์เรดวินเทอร์",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/4/41/School_Icon_REDWINTER.png",
    color: "#c2292f",
    description: "โรงเรียนสไตล์สหภาพโซเวียตที่ตั้งอยู่ในทวีปเยือกแข็งทางเหนือ มีอาณาเขตกว้างขวางมาก เต็มไปด้วยหิมะและการปฏิวัติบ่อยครั้ง นำโดยหัวหน้าสภานักเรียนจอมเผด็จการ เชริโน่ ที่มักถูกโค่นล้มและกลับมามีอำนาจใหม่เสมอ"
  },
  {
    id: "Valkyrie",
    nameEn: "Valkyrie Police School",
    nameTh: "โรงเรียนตำรวจวัลคิรี",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/9/90/School_Icon_VALKYRIE.png",
    color: "#4f68b3",
    description: "สถาบันฝึกอบรมตำรวจและรักษากฎหมายประจำเมืองคิโวทอส คอยตอบรับและแก้ไขสถานการณ์ความไม่สงบต่างๆ แม้ว่าเจ้าหน้าที่ส่วนใหญ่จะมุ่งมั่นตั้งใจทำงาน แต่บางครั้งพวกเธอก็ทำงานพลาดและปั่นป่วนเสียเอง"
  },
  {
    id: "SRT",
    nameEn: "SRT Special Academy",
    nameTh: "สถาบันพิเศษเอสอาร์ที",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/c/c5/School_Icon_SRT.png",
    color: "#677582",
    description: "สถาบันตำรวจพิเศษที่ก่อตั้งขึ้นภายใต้การสั่งการของประธานสภานักเรียนองค์การทั่วไปเพื่อรับมือกับเหตุการณ์ร้ายแรงที่วัลคิรีเอาไม่อยู่ นักเรียนได้รับการฝึกฝนการทหารขั้นสูงสุด มีความพร้อมในยุทธวิธีกึ่งทหาร"
  },
  {
    id: "Arius",
    nameEn: "Arius Satellite School",
    nameTh: "โรงเรียนสาขาอาเรียส",
    logo: "https://static.wikia.nocookie.net/bluearchive/images/b/b3/School_Icon_ARIUS.png",
    color: "#6d6d7e",
    description: "เดิมทีเป็นโรงเรียนกลุ่มเดียวกับทรินิตี้แต่แยกตัวออกไปเนื่องจากประเด็นทางลัทธิศาสนา ปัจจุบันซ่อนตัวอยู่ในเงามืด ได้รับความเดือดร้อนจากการปกครองแบบเผด็จการและฝึกฝนนักเรียนให้เป็นนักฆ่าไร้หัวใจ"
  }
];

// Curated Local Mock Data to use if the fetch request fails (offline / CDN blocked)
const fallbackStudents = [
  {
    Id: 10000,
    Name: "Aru",
    School: "Gehenna",
    Club: "Kohshinjo68",
    StarGrade: 3,
    SquadType: "Main",
    TacticRole: "DamageDealer",
    Position: "Back",
    BulletType: "Explosion",
    ArmorType: "LightArmor",
    FamilyName: "Rikuhachima",
    PersonalName: "Aru",
    SchoolYear: "2nd Year",
    CharacterAge: "16 years old",
    Birthday: "March 12th",
    ProfileIntroduction: "หัวหน้าชมรมรับจ้างสารพัด 68 แห่งสถาบันเกเฮนนา\n\nเธอพยายามวางมาดเป็นจอมวายร้ายที่เฉียบแหลมและเท่ระเบิดอยู่เสมอ เพื่อดำเนินธุรกิจนอกกฎหมาย แต่ความซุ่มซ่ามและเปิ่นของเธอมักเผยโฉมออกมาจนโดนจับได้เป็นประจำเมื่อทุกอย่างไม่เป็นไปตามแผน",
    Hobby: "ศึกษาเรื่องการบริหารธุรกิจ",
    CharacterVoice: "Reina Kondō",
    CharHeightMetric: "160cm",
    WeaponType: "SR"
  },
  {
    Id: 10002,
    Name: "Shiroko",
    School: "Abydos",
    Club: "Countermeasure",
    StarGrade: 3,
    SquadType: "Main",
    TacticRole: "DamageDealer",
    Position: "Middle",
    BulletType: "Explosion",
    ArmorType: "LightArmor",
    FamilyName: "Sunaookami",
    PersonalName: "Shiroko",
    SchoolYear: "2nd Year",
    CharacterAge: "16 years old",
    Birthday: "May 16th",
    ProfileIntroduction: "นักเรียนชั้นปีที่ 2 สมาชิกคนสำคัญของคณะกรรมการวางแผนฟื้นฟูโรงเรียนมัธยมปลายอาบิดอส\n\nเธอเป็นคนที่เงียบขรึมและแสดงความรู้สึกไม่เก่ง แต่เบื้องหลังความนิ่งเฉยนั้นคือความรักโรงเรียนอย่างสุดหัวใจ และมีความคิดผาดโผนในการหาเงินล้างหนี้ (เช่น เสนอแผนการปล้นธนาคาร)",
    Hobby: "ปั่นจักรยานทางไกล, ออกกำลังกาย",
    CharacterVoice: "Yui Ogura",
    CharHeightMetric: "156cm",
    WeaponType: "AR"
  },
  {
    Id: 13000,
    Name: "Hina",
    School: "Gehenna",
    Club: "PrefectTeam",
    StarGrade: 3,
    SquadType: "Main",
    TacticRole: "DamageDealer",
    Position: "Back",
    BulletType: "Explosion",
    ArmorType: "HeavyArmor",
    FamilyName: "Sorasaki",
    PersonalName: "Hina",
    SchoolYear: "3rd Year",
    CharacterAge: "17 years old",
    Birthday: "February 19th",
    ProfileIntroduction: "หัวหน้ากรรมการวินัย (Prefect Team) ผู้ทรงอิทธิพลที่สุดในสถาบันเกเฮนนา\n\nเธอขึ้นชื่อเรื่องความเด็ดขาด ทรงพลัง และเยือกเย็น จนเป็นที่ยำเกรงของนักเรียนป่วนเมืองทุกคนในเกเฮนนาและเมืองคิโวทอส แม้ดูเป็นคนดุและเฉียบขาด แต่ลึกๆ แล้วเธอก็เหนื่อยหน่ายกับเอกสารและการแก้ไขเรื่องวุ่นวาย และต้องการเวลาพักผ่อน",
    Hobby: "นอนพักผ่อน, ถอนหายใจ",
    CharacterVoice: "Rie Kugimiya",
    CharHeightMetric: "142cm",
    WeaponType: "MG"
  },
  {
    Id: 16000,
    Name: "Yuuka",
    School: "Millennium",
    Club: "Seminar",
    StarGrade: 2,
    SquadType: "Main",
    TacticRole: "Tank",
    Position: "Front",
    BulletType: "Normal",
    ArmorType: "HeavyArmor",
    FamilyName: "Hayase",
    PersonalName: "Yuuka",
    SchoolYear: "2nd Year",
    CharacterAge: "16 years old",
    Birthday: "March 14th",
    ProfileIntroduction: "เหรัญญิกผู้อ่อนไหวและมีประสิทธิภาพของสภานักเรียนสัมมนา (Seminar) แห่งสถาบันวิทยาศาสตร์มิลเลนเนียม\n\nเธอมีความเป็นเลิศด้านคณิตศาสตร์และตรรกวิทยา คอยควบคุมและตรวจสอบการใช้งบประมาณของทุกชมรมในโรงเรียนอย่างเข้มงวด มักดุคุณครูเรื่องการฟุ่มเฟือย แต่แท้จริงแล้วเธอเป็นห่วงคุณครูและคอยดูแลเรื่องบัญชีให้เป็นระเบียบอยู่เสมอ",
    Hobby: "คำนวณบัญชีและรายรับรายจ่าย, ต่อเลโก้",
    CharacterVoice: "Haruka Ran",
    CharHeightMetric: "156cm",
    WeaponType: "SMG"
  },
  {
    Id: 10005,
    Name: "Hoshino",
    School: "Abydos",
    Club: "Countermeasure",
    StarGrade: 3,
    SquadType: "Main",
    TacticRole: "Tank",
    Position: "Front",
    BulletType: "Pierce",
    ArmorType: "HeavyArmor",
    FamilyName: "Takanashi",
    PersonalName: "Hoshino",
    SchoolYear: "3rd Year",
    CharacterAge: "17 years old",
    Birthday: "January 2nd",
    ProfileIntroduction: "ประธานคณะกรรมการวางแผนฟื้นฟูของอาบิดอสและเป็นนักเรียนชั้นปี 3 คนเดียวที่เหลืออยู่\n\nปกติเธอชอบทำตัวขี้เกียจ นอนกลางวัน และพูดจาเหมือนคุณลุงวัยเกษียณเพื่อหลีกเลี่ยงงานหนัก แต่ยามคับขันหรือยามที่เพื่อนร่วมทีมตกอยู่ในอันตราย เธอจะกลายเป็นเสาหลักผู้น่าเกรงขามที่ต่อสู้ปกป้องทุกคนอย่างไร้ผู้ต้าน",
    Hobby: "นอนหลับพักผ่อน, สะสมอุปกรณ์ตกปลา",
    CharacterVoice: "Hanamori Yumiri",
    CharHeightMetric: "145cm",
    WeaponType: "SG"
  },
  {
    Id: 13008,
    Name: "Alice",
    School: "Millennium",
    Club: "GameDevelopment",
    StarGrade: 3,
    SquadType: "Main",
    TacticRole: "DamageDealer",
    Position: "Back",
    BulletType: "Mystic",
    ArmorType: "SpecialArmor",
    FamilyName: "Tendou",
    PersonalName: "Alice",
    SchoolYear: "1st Year",
    CharacterAge: "Age Unknown",
    Birthday: "March 25th",
    ProfileIntroduction: "เด็กสาวปริศนาที่ถูกค้นพบในซากปรักหักพังเทคโนโลยีโบราณโดยชมรมพัฒนาเกม\n\nเธอพูดคุยและเรียนรู้พฤติกรรมผ่านวิดีโอเกมสไตล์ RPG ยุคเก่า ทำให้จดจำศัพท์ในเกมและเห็นโลกนี้เป็นดันเจี้ยนขนาดใหญ่ ปัจจุบันร่วมทีมกับชมรมพัฒนาเกมและแบกปืนพลังงานขนาดมหึมาต่อสู้เพื่อความสนุกร่วมกับเพื่อนๆ",
    Hobby: "เล่นเกม RPG คอนโซล",
    CharacterVoice: "Minami Tanaka",
    CharHeightMetric: "152cm",
    WeaponType: "RG"
  },
  {
    Id: 10015,
    Name: "Azusa",
    School: "Trinity",
    Club: "MakeUpClass",
    StarGrade: 3,
    SquadType: "Main",
    TacticRole: "DamageDealer",
    Position: "Back",
    BulletType: "Explosion",
    ArmorType: "LightArmor",
    FamilyName: "Shirasu",
    PersonalName: "Azusa",
    SchoolYear: "2nd Year",
    CharacterAge: "16 years old",
    Birthday: "December 26th",
    ProfileIntroduction: "นักเรียนแลกเปลี่ยนที่ย้ายเข้ามาอยู่ชมรมสอบซ่อม (Make-Up Work Club) ของโรงเรียนรวมทรินิตี้\n\nเธอถูกฝึกมาในสภาพแวดล้อมที่โหดร้ายของสถาบันอาเรียส มีคติประจำใจคือ 'ทุกสิ่งทุกอย่างล้วนว่างเปล่า' (Vanitas Vanitatum) มีสัญชาตญาณระแวดระวังภัยสูงลิบลิ่ว มักวางกับดักรอบๆ แต่อันที่จริงแล้วเธอรักของน่ารักๆ และต้องการมีเพื่อนฝูงที่สงบสุข",
    Hobby: "สะสมของขวัญหรือตุ๊กตาแบรนด์ Momo Friends",
    CharacterVoice: "Risa Taneda",
    CharHeightMetric: "149cm",
    WeaponType: "AR"
  },
  {
    Id: 10012,
    Name: "Chise",
    School: "Hyakkiyako",
    Club: "Onmyodo",
    StarGrade: 2,
    SquadType: "Main",
    TacticRole: "DamageDealer",
    Position: "Middle",
    BulletType: "Mystic",
    ArmorType: "LightArmor",
    FamilyName: "Waraku",
    PersonalName: "Chise",
    SchoolYear: "1st Year",
    CharacterAge: "15 years old",
    Birthday: "July 13th",
    ProfileIntroduction: "นักเรียนชั้นปีที่ 1 สมาชิกชมรมองเมียวโดแห่งสถาบันพันธมิตรเฮียคคิยาโค\n\nเธอเป็นเด็กสาวที่ใจลอยและมักจมอยู่ในโลกส่วนตัว ชอบคิดคำกลอนไฮกุหรือเขียนพู่กันจีน มักหลงทางบ่อยๆ แต่มีความสามารถพิเศษในการทำสมาธิและควบคุมกระสุนเวทมนตร์ได้อย่างน่าประหลาดใจ",
    Hobby: "วาดภาพพู่กัน, แต่งกลอนไฮกุ",
    CharacterVoice: "Kaede Hondo",
    CharHeightMetric: "158cm",
    WeaponType: "GL"
  }
];

// Club and localized terms dictionary mapping for UI display
const translations = {
  // Club names mapping
  club: {
    "Kohshinjo68": "รับจ้างสารพัด 68 (Problem Solver 68)",
    "Countermeasure": "คณะกรรมการแผนงาน (Countermeasures Committee)",
    "PrefectTeam": "กรรมการวินัย (Prefect Team)",
    "Seminar": "สภานักเรียนสัมมนา (Seminar)",
    "GameDevelopment": "ชมรมพัฒนาเกม (Game Development Department)",
    "MakeUpClass": "ชมรมสอบซ่อม (Make-up Work Club)",
    "Onmyodo": "ชมรมองเมียวโด (Onmyodo Club)",
    "Justice": "คณะกรรมการความยุติธรรม (Justice Task Force)",
    "Sisterhood": "ชมรมซิสเตอร์ (Sisterhood)",
    "Library": "ห้องสมุด (Library Committee)",
    "Cands": "ชมรมขนมหวาน (After School Sweets Club)",
    "Training": "ชมรมฝึกสุนัข/กู้ภัย (Rescue Commando)",
    "Gourmet": "สมาคมชิมอาหาร (Gourmet Research Society)",
    "Emergency": "กองกำลังแพทย์ฉุกเฉิน (Emergency Medicine Section)",
    "Veritas": "ชมรมแฮกเกอร์เวริทัส (Veritas)",
    "Engineering": "ชมรมวิศวกรรม (Engineering Department)",
    "CleaningNClearing": "แม่บ้านซีแอนด์ซี (Cleaning & Clearing)",
    "Phenum": "ชมรมวรรณกรรม (Literature Club)",
    "HyakkiyakoAcademy": "สภานักเรียนเฮียคคิยาโค",
    "Ninjustu": "ชมรมวิจัยนินจา (Ninjustu Research Club)",
    "Festival": "คณะกรรมการบริหารเทศกาล (Festival Operations Committee)",
    "InnerDiscipline": "หน่วยวินัยในตนเอง (Inner Discipline Club)",
    "Ryuudan": "สมาคมศิลปะการต่อสู้หลงตาน (Black Tortoise Promenade)",
    "Genryumon": "สมาคมหงหัวฟู่ (Genryumon)",
    "Meihuayuan": "สถานรับเลี้ยงเด็กเหมยฮวาหยวน (Plum Blossom Garden)",
    "RedWinter": "สภานักเรียนเรดวินเทอร์ (Red Winter Office)",
    "PublicSafety": "กองรักษาความปลอดภัยสาธารณะ (Public Safety Bureau)",
    "RABBIT": "หมวดกระต่ายแร็บบิท (RABBIT Squad)"
  },
  // Combat Roles
  role: {
    "DamageDealer": "ดีลเลอร์ (Attacker)",
    "Tank": "แทงก์ (Tank)",
    "Healer": "ฮีลเลอร์ (Healer)",
    "Support": "ซัพพอร์ต (Support)",
    "Tactician": "แทคติคอล (Tactician)"
  },
  // Positions
  position: {
    "Front": "แนวหน้า (Front)",
    "Middle": "แนวกลาง (Middle)",
    "Back": "แนวหลัง (Back)"
  },
  // Bullet/Damage types
  damage: {
    "Explosion": "ระเบิด (Explosive)",
    "Pierce": "เจาะเกราะ (Piercing)",
    "Mystic": "ลึกลับ (Mystic)",
    "Sonic": "โซนิก (Sonic)",
    "Normal": "ทั่วไป (Normal)"
  },
  // Armor types
  armor: {
    "LightArmor": "เกราะเบา (Light)",
    "HeavyArmor": "เกราะหนัก (Heavy)",
    "SpecialArmor": "เกราะพิเศษ (Special)",
    "ElasticArmor": "เกราะยืดหยุ่น (Elastic)"
  }
};
