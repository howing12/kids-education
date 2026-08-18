export type Course = {
  id: string;
  name: string;
  image: string;
  description: string;
  fee: string;
  age: string;
  link: string;
};

export type Teacher = {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
};

export const site = {
  name: "Johnny Education Centre",
  nameEn: "Johnny Education Centre",
  tagline: "讓孩子從小愛上學習，贏在起跑線！",
  intro:
    "Johnny Education Centre 專為 5 至 9 歲小學生而設，致力打造一個結合學術基礎與科技啟發的學習環境。我們明白這個階段是孩子建立學習興趣與自信的關鍵時期，因此透過有趣、互動及生活化的教學方式，讓孩子在輕鬆愉快中成長與進步。",
  philosophy: [
    {
      title: "小班互動教學",
      text: "照顧每位學生的學習進度，讓每個孩子都獲得足夠關注。",
    },
    {
      title: "遊戲式學習",
      text: "透過活動、遊戲及故事提升理解力，讓孩子在玩樂中吸收知識。",
    },
    {
      title: "建立自信",
      text: "鼓勵表達與嘗試，培養正面學習態度，讓孩子勇於挑戰。",
    },
    {
      title: "科技啟蒙",
      text: "讓孩子從小接觸 AI 與數碼工具，提升未來競爭力。",
    },
  ],
  address: "九龍長沙灣貿易廣場 5 樓 599 號",
  phone: "+852 1234 5678",
  whatsapp: "+852 1234 5678",
  email: "info@johnnyedu.hk",
  website: "www.johnnyedu.hk",
  hours: [
    { day: "星期一至五", time: "14:00 – 19:30" },
    { day: "星期六", time: "10:00 – 18:00" },
    { day: "星期日及公眾假期", time: "休息" },
  ],
};

export const courses: Course[] = [
  {
    id: "ai",
    name: "AI 小小探索班",
    image: "/courses/ai.png",
    description:
      "透過簡單有趣的例子，讓孩子認識人工智能，學習如何用 AI 工具幫助學習及創作，例如生成故事、圖片等。",
    fee: "HKD 1,100 / 4堂",
    age: "5 - 9 歲",
    link: "/courses/ai",
  },
  {
    id: "python",
    name: "兒童 Python 啟蒙班",
    image: "/courses/python.png",
    description:
      "以遊戲及圖像方式教授編程概念，培養邏輯思維與解難能力，適合零基礎小朋友。",
    fee: "HKD 1,300 / 4堂",
    age: "5 - 9 歲",
    link: "/courses/python",
  },
  {
    id: "allsubjects",
    name: "小學全科提升班",
    image: "/courses/allsubjects.png",
    description:
      "針對中文、英文及數學基礎，透過練習與講解，幫助學生打好基礎及提升成績。",
    fee: "HKD 900 / 4堂",
    age: "5 - 9 歲",
    link: "/courses/allsubjects",
  },
  {
    id: "arts",
    name: "創意繪畫小達人班",
    image: "/courses/arts.png",
    description:
      "小朋友拾起畫筆，創作圖畫、簡報及小故事，提升創意與表達能力。",
    fee: "HKD 1,200 / 4堂",
    age: "5 - 9 歲",
    link: "/courses/arts",
  },
];

export const teachers: Teacher[] = [
  {
    id: "johnny",
    name: "Johnny Ip",
    title: "校長 · Microsoft & Google Educator",
    image: "",
    bio: "擁有多年 IT 教學及培訓經驗，專注將複雜科技轉化為小朋友都能理解的學習內容。擅長以互動及遊戲方式教學，讓孩子在開心中學習，建立自信與成就感。",
  },
];
