const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const rawEpisodes = [
  {
    episode: 2,
    youtube_link:
      "https://youtu.be/gefCStuLWpc?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "00:46",
        question: "She is embarrassed of me, what do I do?",
      },
      {
        timestamp: "03:39",
        question: "How do I manage my time well and be productive?",
      },
      {
        timestamp: "06:37",
        question:
          "How did you take the decision of leaving your job and shifted to content creation full time?",
      },
      {
        timestamp: "13:20",
        question:
          "My teachers degrade me and I have zero friends. How do I stay happy alone?",
      },
      {
        timestamp: "18:22",
        question:
          "I'm an 18 yo, moved to Ireland and I have no friends. What do I do?",
      },
    ],
  },
  {
    episode: 3,
    youtube_link:
      "https://youtu.be/lgDkS8fm0Wc?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "0:16",
        question:
          "I have masturbation addiction and consume porn a lot. What do I do?",
      },
      {
        timestamp: "7:36",
        question:
          "My kids use devices a lot. How do I get them engaged in other activities?",
      },
      {
        timestamp: "15:45",
        question: "What do I gift my fiance on her birthday?",
      },
      {
        timestamp: "17:52",
        question:
          "I'm an airline pilot and I have drinking problem. It's tearing my family apart. What do I do?",
      },
      {
        timestamp: "21:07",
        question:
          "I'm an engineer living in Netherlands. If I change my passport to easily travel, am I backstabbing my own country?",
      },
    ],
  },
  {
    episode: 4,
    youtube_link:
      "https://www.youtube.com/watch?v=xB5jKnBZQZU&list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ&index=4&pp=iAQB0gcJCcMJAYcqIYzv",
    questions: [
      {
        timestamp: "1:29",
        question:
          "I want to study in Canada but my father is forcing me to do CSS.",
      },
      {
        timestamp: "7:06",
        question: "Education ke sath kaam krna kitna zaruri hai?",
      },
      {
        timestamp: "10:16",
        question:
          "A confused Pakistani girl. I like a guy in University but he is creepy.",
      },
      {
        timestamp: "15:14",
        question:
          "How to pick a career? How do you know this is right one for you?",
      },
      {
        timestamp: "17:27",
        question: "If I marry a girl from Pakistan, will she adjust in the UK?",
      },
      {
        timestamp: "21:05",
        question: "Jab rishta lene jayen tou wahan kya baatein karni chahiye?",
      },
    ],
  },
  {
    episode: 5,
    youtube_link:
      "https://www.youtube.com/watch?v=NKzLilXRlvA&list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ&index=5&pp=iAQB",
    questions: [
      {
        timestamp: "0:10",
        question:
          "Kya social media pe controversial baatein likhnay se Visas reject hosaktay hain?",
      },
      {
        timestamp: "02:36",
        question: "Kya Germany main studies free hain? Main jana chahta hun.",
      },
      {
        timestamp: "04:00",
        question:
          "Meri salary 17 hazar hai aur 3 bachay hain. Dubai main 70-80k ki job mil jayegi mujhay?",
      },
      {
        timestamp: "06:02",
        question:
          "BBA Hons ke baad bhi mujhay sirf 15k ki jobs offer ho rahi hain. Debt bhi hai, kaisay bharoon?",
      },
      {
        timestamp: "09:24",
        question:
          "Dubai main maza nahi, US jana chahta hun kaam ke lile. Lekin Passport khaali hai.",
      },
      {
        timestamp: "13:14",
        question:
          "Mere dost mujhay backward kehtay hain kyunke main practicing Muslim hoon. What should I do?",
      },
    ],
  },
  {
    episode: 6,
    youtube_link:
      "https://youtu.be/l7X1Yx_iDKI?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "00:12",
        question:
          "I'm a 28 year old working woman but my grandfather interferes a lot in my life. I want to move out of Pakistan.",
      },
      {
        timestamp: "06:25",
        question:
          "A death metal band from Iraq named Seeds of Iblis has posted a lot of blasphemous material. What can we do to prevent it?",
      },
      {
        timestamp: "10:08",
        question:
          "Should an electrical engineer move to Dubai or start business in Faisalabad? Also, does 3 month Dubai visa suffice?",
      },
      {
        timestamp: "14:17",
        question:
          "I'm a veterinarian but everyone calls me Dangar Daactar. How do I cope with this problem?",
      },
      {
        timestamp: "16:31",
        question:
          "Long distance relationship between Australia and Pakistan. Do they usually work? Also, she doesn't want to sit down and talk issues out with me.",
      },
    ],
  },
  {
    episode: 7,
    youtube_link:
      "https://youtu.be/CHskpDgkzKA?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "0:15",
        question:
          "Married for 2 years in a conservative family, my husband is a hafiz and doesn’t work. We have a child. What do I do?",
      },
      {
        timestamp: "06:10",
        question:
          "I’m halfway in my engineering, turns out, I like graphic designing more. How should I pursuit?",
      },
      {
        timestamp: "08:33",
        question:
          "My father gave money to someone and now they’re not returning back. What do we do?",
      },
      {
        timestamp: "12:18",
        question:
          "I was making 100k, boss wanted to assign more work, I refused and left the job and now I can’t find another one. Did I make a mistake?",
      },
      {
        timestamp: "15:27",
        question:
          "My sister completed her FSc and asking me what should she do in life. I don’t know either so you tell us.",
      },
      {
        timestamp: "18:54",
        question:
          "I want to marry a Black Muslim man but fearing the backlash from family and our society. What do you recommend?",
      },
    ],
  },
  {
    episode: 8,
    youtube_link:
      "https://youtu.be/0bIvvu3iFBQ?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "0:25",
        question:
          "A Norwegian person ask Junaid bhai how are you? Then he ask how can he teach Islam to his kids without Pakistaniat?",
      },
      {
        timestamp: "7:27",
        question:
          "A engineering bacholar asking what should he do when He getting opportunity to study engineering at Germany but his parent is asking him to study for government job.",
      },
      {
        timestamp: "9:47",
        question:
          "A Mphil person who is making 30K PKR is asking that his parents want him to marry mamo ki beti cousin but he likes another girl whom he study with. First of all he want to settle financially. How can he deal with his parents?",
      },
      {
        timestamp: "22:08",
        question:
          "A person who is doing masters in China is asking which countries is suitable for PHD among these: China, Brazil, Germany and Denmark?",
      },
      {
        timestamp: "26:43",
        question:
          "A person who is making videos after inspired from Junaid bhai is asking how can he deal with hatred and make his videos better?",
      },
    ],
  },
  {
    episode: 9,
    youtube_link:
      "https://www.youtube.com/watch?v=iqmUmgeR8w0&list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ&index=9&pp=iAQB",
    questions: [
      {
        timestamp: "1:00",
        question:
          "Pakistan ma business lakhs ka krte ha log lekin marketing pe invest nhi krte",
      },
      {
        timestamp: "5:00",
        question:
          "Should'nt Car Traffic power Wind turbines should be installed in Pakistan for making electricity",
      },
      {
        timestamp: "6:55",
        question:
          "How to do time management at home while institutes are not open. My father is frustrated from me",
      },
      {
        timestamp: "12:45",
        question:
          "I want to study Music and Artificial intelligence but my father wants me to become medical doctor",
      },
      {
        timestamp: "21:05",
        question:
          "am going through mental trauma. My own mother has relationship with many other persons. Wo meri nazru se ghir chuki ha. Ap baye ke ma kaise apni mother ko roko",
      },
    ],
  },
  {
    episode: 10,
    youtube_link:
      "https://youtu.be/tncsEogNMfY?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "0:00",
        question:
          "Whole Episode is dedicated to job hunting in middle east-tips",
      },
    ],
  },
  {
    episode: 11,
    youtube_link:
      "https://youtu.be/fZZ7aeWc5_8?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "01:14",
        question:
          "An affair of 8 years ended, ex is finally back after 5 years now that I’m engaged and wants me to make her second wife.",
      },
      {
        timestamp: "09:22",
        question:
          "Doing bachelors in Botanical sciences but want to join police force to get POWER & RESPECT.",
      },
      {
        timestamp: "16:27",
        question: "16-year-old boy got beaten by the police in Defence.",
      },
      {
        timestamp: "24:25",
        question:
          "Have done bachelors in civil engineering but working closely with CSS officers, I want to switch but facing a lot of pressure from family and relatives.",
      },
    ],
  },
  {
    episode: 12,
    youtube_link:
      "https://youtu.be/7bD2-1quU_k?list=PL8x_tcNdRDFH6p8Qs0rACbBF6z2Wo-ZYQ",
    questions: [
      {
        timestamp: "00:38",
        question:
          "I am 16 years old boy living in UAE my father is 49, his salary is slashed in half. Can we move back?",
      },
      {
        timestamp: "04:23",
        question:
          "Software engineer from abroad, not sure if I’m ready for this LUMS girl.",
      },
      {
        timestamp: "07:05",
        question:
          "I’m Shia, she is Sunni, but my parents are also concerned about her social status.",
      },
      {
        timestamp: "15:59",
        question:
          "I’m 19, often get boner while asleep, parents force me to sleep with my siblings. I’m awkward.",
      },
      {
        timestamp: "20:54",
        question:
          "Husband is infertile, we can’t have kids. We’re really happy though but societal pressure is killing me.",
      },
      {
        timestamp: "29:36",
        question:
          "Sister married an air force officer who has sex worker friends.",
      },
      {
        timestamp: "34:36",
        question:
          "Wife found out that I was writing her Faiz and Faraz poetry claiming as my own writings.",
      },
      {
        timestamp: "43:59",
        question:
          "I’m a girl who don’t wanna get married, I want to be an animator and open up a studio.",
      },
    ],
  },
  {
    episode: 13,
    youtube_link:
      "https://www.youtube.com/watch?v=IICKQ1E4qRc&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=1&pp=iAQB",
    questions: [
      {
        timestamp: "00:47",
        question:
          "My wife is a mixed-race and she gets a lot of racist remarks from fellow desi women. How do I make her tackle that?",
      },
      {
        timestamp: "07:43",
        question:
          "I’m 22, making 100k a month in Lahore, parents want me to settle but I want to talk to the girl first.",
      },
      {
        timestamp: "21:15",
        question:
          "I get around 100k in scholarships, where should I invest that money with long term returns?",
      },
      {
        timestamp: "28:44",
        question:
          "How can we secure ourselves from the deception of marriage without finding out about the mental/sexual health of our potential partner?",
      },
    ],
  },
  {
    episode: 14,
    youtube_link:
      "https://www.youtube.com/watch?v=VhlEvQr-UeQ&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=2&pp=iAQB",
    questions: [
      {
        timestamp: "00:28",
        question:
          "I was all set but within 2 years my kidneys gave up, should I wait for an organ donor or get a dialysis machine because I want to get married to this girl.",
      },
      {
        timestamp: "14:44",
        question:
          "I have two business ideas for Bangkok. Restaurant and a laundry that I want to open with a local lady who I want to marry as well.",
      },
      {
        timestamp: "27:13",
        question:
          "Confused and half-hearted about the engagement after 5 years with my cousin.",
      },
      {
        timestamp: "31:56",
        question:
          "A 22-year-old Indian student struggles with the parents who interfere in almost every matter of his personal life.",
      },
    ],
  },
  {
    episode: 15,
    youtube_link:
      "https://www.youtube.com/watch?v=szw-ssbKTco&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=3&pp=iAQB",
    questions: [
      {
        timestamp: "00:32",
        question: "An Ahmedi who wants to move back",
      },
      {
        timestamp: "08:35",
        question: "Depressed Mechatronics student",
      },
      {
        timestamp: "13:45",
        question: "Indo-Pak marriages",
      },
      {
        timestamp: "25:04",
        question: "Should I come out?",
      },
    ],
  },
  {
    episode: 16,
    youtube_link:
      "https://www.youtube.com/watch?v=DR9pq758GqI&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=4&pp=iAQB",
    questions: [
      {
        timestamp: "00:35",
        question: "Fiancé refusing to move to Canada",
      },
      {
        timestamp: "04:28",
        question: "A bisexual from Barcelona",
      },
      {
        timestamp: "09:47",
        question: "Husband blocked wife on WhatsApp",
      },
      {
        timestamp: "15:05",
        question: "Friend died biking - Need a race track in Karachi",
      },
      {
        timestamp: "25:12",
        question: "A weak Dubai proposal",
      },
    ],
  },
  {
    episode: 17,
    youtube_link: "https://youtu.be/OOz-lu5CYDU",
    questions: [
      {
        timestamp: "01:05",
        question: "An old man seeking love from someone half his age",
      },
      {
        timestamp: "06:41",
        question: "Husband asks me to be on video call all day.",
      },
      {
        timestamp: "25:17",
        question: "Random account blackmailing my friends. FIA wont help.",
      },
      {
        timestamp: "32:33",
        question: "How do you handle fame?",
      },
      {
        timestamp: "39:59",
        question: "You changed my life.",
      },
    ],
  },
  {
    episode: 18,
    youtube_link:
      "https://www.youtube.com/watch?v=Vjvx1MU5Gnc&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=5&pp=iAQB",
    questions: [
      {
        timestamp: "00:48",
        question: "Obsessive crush over an older woman.",
      },
      {
        timestamp: "02:41",
        question: "Wrongfully accused terrorist",
      },
      {
        timestamp: "10:56",
        question: "Will India and Pakistan ever find peace?",
      },
      {
        timestamp: "17:10",
        question: "Broken relationship of a punjabi guy in New Zealand",
      },
      {
        timestamp: "21:41",
        question:
          "Corporate background lady wanting to move back and serve the country.",
      },
      {
        timestamp: "29:58",
        question: "Ranked 800 out of 69,000 students, still suicidal",
      },
      {
        timestamp: "39:34",
        question: "My Pakistani friends' daughter proposed me",
      },
      {
        timestamp: "42:29",
        question: "Dating an extremely non-serious guy",
      },
    ],
  },
  {
    episode: 19,
    youtube_link:
      "https://www.youtube.com/watch?v=-v-O9JheKrc&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=6&pp=iAQB",
    questions: [
      {
        timestamp: "00:55",
        question: "Sex life down after a child.",
      },
      {
        timestamp: "12:35",
        question: "Are working women a threat to family structure?",
      },
      {
        timestamp: "25:00",
        question: "My father is a womaniser.",
      },
      {
        timestamp: "37:26",
        question: "Wife now loves someone else and wants to leave me.",
      },
    ],
  },
  {
    episode: 20,
    youtube_link:
      "https://www.youtube.com/watch?v=ZQF_o343pQw&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=7&pp=iAQB",
    questions: [
      {
        timestamp: "01:26",
        question: "Weirded out by my friend's father.",
      },
      {
        timestamp: "14:17",
        question: "Fairness creams bad but plastic surgeries okay?",
      },
      {
        timestamp: "32:22",
        question: "Personal development & grooming",
      },
      {
        timestamp: "40:07",
        question: "Working hard but wife still suspects me",
      },
      {
        timestamp: "51:52",
        question:
          "Canadian Pakistani everything is great but somethings missing",
      },
    ],
  },
  {
    episode: 21,
    youtube_link: "https://youtu.be/0ykhMcRDTyI",
    questions: [
      {
        timestamp: "01:05",
        question: "IndoPak trolling vs European Peace",
      },
      {
        timestamp: "16:27",
        question: "Expecting vaccine deniers in Pakistan",
      },
      {
        timestamp: "33:41",
        question: "Planning my own startup.",
      },
      {
        timestamp: "38:37",
        question: "My young girls don’t read. What do I do?",
      },
      {
        timestamp: "52:03",
        question: "Changing job life into business life",
      },
      {
        timestamp: "01:00:41",
        question: "Depressed & jobless for 2 years.",
      },
    ],
  },
  {
    episode: 22,
    youtube_link:
      "https://www.youtube.com/watch?v=5DFfJdIg4t0&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=8&pp=iAQB",
    questions: [
      {
        timestamp: "02:01",
        question: "15 yo girl with learning disabilities.",
      },
      {
        timestamp: "15:03",
        question: "Stammering issues.",
      },
      {
        timestamp: "26:57",
        question: "No place to walk in Karachi",
      },
      {
        timestamp: "44:30",
        question: "If future technology is bad, why are you promoting it?",
      },
    ],
  },
  {
    episode: 23,
    youtube_link: "https://youtu.be/YLNsBBmo8Nk",
    questions: [
      {
        timestamp: "01:26",
        question: "Criticizing mother.",
      },
      {
        timestamp: "08:53",
        question: "Fiance wants to talk 7 hours a day.",
      },
      {
        timestamp: "18:14",
        question: "Masturbation addict",
      },
      {
        timestamp: "29:24",
        question: "Why looks matter most?",
      },
      {
        timestamp: "38:05",
        question: "Wife gives away everything to her family",
      },
    ],
  },
  {
    episode: 24,
    youtube_link:
      "https://www.youtube.com/watch?v=v68CZIRGEhA&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=9&pp=iAQB",
    questions: [
      {
        timestamp: "00:28",
        question: "Shia/Sunni marriage that failed.",
      },
      {
        timestamp: "20:18",
        question: "Mother remarried but being abused.",
      },
      {
        timestamp: "38:56",
        question: "Husband siding his mom in my disrespect.",
      },
    ],
  },
  {
    episode: 25,
    youtube_link: "https://youtu.be/RVS1y1kqoqI",
    questions: [
      {
        timestamp: "01:12",
        question: "Love marriage fading away after 4 years.",
      },
      {
        timestamp: "09:08",
        question: "Old parents feeling lonely in Karachi.",
      },
      {
        timestamp: "23:29",
        question: "Cold feet after a 4-year relationship",
      },
      {
        timestamp: "33:01",
        question: "Concerns over raising a child in Pakistan.",
      },
      {
        timestamp: "50:11",
        question: "Involved with 2 girls at the same time they’re both okay.",
      },
    ],
  },
  {
    episode: 26,
    youtube_link:
      "https://www.youtube.com/watch?v=BAvoC_bY0mU&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=10&pp=iAQB",
    questions: [
      {
        timestamp: "01:14",
        question: "Canada main bacha bigar jayega",
      },
      {
        timestamp: "10:50",
        question: "What will heaven be like?",
      },
      {
        timestamp: "21:50",
        question: "Why don't YouTubers make Netflix series?",
      },
      {
        timestamp: "33:33",
        question: "Why we don't say Thank You?",
      },
    ],
  },
  {
    episode: 27,
    youtube_link:
      "https://www.youtube.com/watch?v=zNOmkSsAX9M&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=11&pp=iAQB",
    questions: [
      {
        timestamp: "01:19",
        question: "Toxic future mother in law & low self-esteem",
      },
      {
        timestamp: "17:36",
        question: "I burnt my Porsche, gave up drugs, and found religion",
      },
      {
        timestamp: "34:27",
        question: "Should we stop educating girls?",
      },
      {
        timestamp: "52:32",
        question: "A new woman ruining 30-year long marriage.",
      },
    ],
  },
  {
    episode: 28,
    youtube_link:
      "https://www.youtube.com/watch?v=-4xluY6KSIw&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=12&pp=iAQB",
    questions: [
      {
        timestamp: "01:13",
        question: "Spoilt brother destroying peace",
      },
      {
        timestamp: "17:01",
        question: "Riches to rag story of an Indian boy",
      },
      {
        timestamp: "31:21",
        question: "Confused between two proposals",
      },
      {
        timestamp: "50:21",
        question: "Extreme fear of public speaking",
      },
    ],
  },
  {
    episode: 29,
    youtube_link: "https://youtu.be/QaLnMWvOlpo",
    questions: [
      {
        timestamp: "01:20",
        question: "Would YouTubing hamper my future CSS goals?",
      },
      {
        timestamp: "03:40",
        question: "Pursuing goals but might lose mamu ki beti",
      },
      {
        timestamp: "09:20",
        question: "MBA making 29k. UK or freelance business?",
      },
      {
        timestamp: "18:36",
        question: "Job offer from Istanbul",
      },
      {
        timestamp: "25:30",
        question: "Addiction to porn and masturbation",
      },
      {
        timestamp: "30:11",
        question: "Caught husband cheating after 6 weeks of marriage.",
      },
      {
        timestamp: "40:31",
        question: "Criminally obsessed with a teenage girl.",
      },
    ],
  },
  {
    episode: 30,
    youtube_link:
      "https://www.youtube.com/watch?v=HhQSPB6sROU&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=13&pp=iAQB",
    questions: [
      {
        timestamp: "00:39",
        question: "Aspiration vs family expectations.",
      },
      {
        timestamp: "15:00",
        question: "40 job rejections making me suicidal",
      },
      {
        timestamp: "28:50",
        question: "Dubai boy investment/driving license tricks",
      },
      {
        timestamp: "42:45",
        question: "I have 3 months to live. Shall I tell my parents?",
      },
    ],
  },
  {
    episode: 31,
    youtube_link:
      "https://www.youtube.com/watch?v=WIASHBkDZJw&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=14&pp=iAQB",
    questions: [
      {
        timestamp: "00:53",
        question: "Wrong decision destroying the peace of my family",
      },
      {
        timestamp: "09:44",
        question: "Why people don't exercise after marriage?",
      },
      {
        timestamp: "24:21",
        question: "People call me hijra or am I hallucinating?",
      },
      {
        timestamp: "41:42",
        question: "Immigration officer took bribe at Pakistan's airport",
      },
      {
        timestamp: "55:45",
        question: "Army officer fell in love with an Indian girl",
      },
    ],
  },
  {
    episode: 32,
    youtube_link: "https://youtu.be/QONsmwfOuYw?si=U6o1OuQcbtS4of82",
    questions: [
      {
        timestamp: "01:08",
        question: "Body shaming of my wife.",
      },
      {
        timestamp: "07:08",
        question: "Statement about Pakistan embassy",
      },
      {
        timestamp: "18:03",
        question: "Over sleeping habit",
      },
      {
        timestamp: "24:54",
        question: "Left studies abroad but haven't told family.",
      },
      {
        timestamp: "31:57",
        question:
          "Continuation regarding army officer who fell in love with Indian girl.",
      },
      {
        timestamp: "45:59",
        question: "Wife not up to the social class.",
      },
      {
        timestamp: "54:57",
        question: "Couple on PhD scholarship in US but living far apart",
      },
    ],
  },
  {
    episode: 33,
    youtube_link: "https://youtu.be/G6BccTuG8jE?si=tMg5efJc7cfJ5isM",
    questions: [
      {
        timestamp: "01:06",
        question: "Friend’s sister eloped and married a Sikh in NY",
      },
      {
        timestamp: "08:05",
        question: "Fear of coming out as gay to my parents.",
      },
      {
        timestamp: "14:53",
        question:
          "Ex-Muslim confused about telling his family and the girl(s) he's being arranged with.",
      },
      {
        timestamp: "24:05",
        question: "Disabled person looking for advice to get married.",
      },
      {
        timestamp: "35:56",
        question: "Should parents save money for the future of their child?",
      },
    ],
  },
  {
    episode: 34,
    youtube_link: "https://youtu.be/yzfHOzwJw8w?si=AxP9A5wbqICnSTOr",
    questions: [
      {
        timestamp: "00:59",
        question: "Caught my wife messaging a guy who she met on PubG",
      },
      {
        timestamp: "14:03",
        question: "Should a girl be virgin before marriage?",
      },
      {
        timestamp: "24:25",
        question:
          "Being forced to marry a girl 4 years older than me. Generation gap?",
      },
      {
        timestamp: "30:37",
        question:
          "I met someone from North Africa online, having second thoughts.",
      },
    ],
  },
  {
    episode: 35,
    youtube_link:
      "https://www.youtube.com/watch?v=Ktqzl0g-KPU&list=PL1gRBDKcK5a2G6tSTiNnw8MKhd7qc6e6B&index=15&pp=iAQB0gcJCcMJAYcqIYzv",
    questions: [
      {
        timestamp: "03:28",
        question: "Badlay ki shaadi 'watta satta'.",
      },
      {
        timestamp: "18:04",
        question:
          "Frustrated unable to find a way towards a professional career.",
      },
      {
        timestamp: "31:09",
        question: "Clarification over cheating question from previous episode",
      },
      {
        timestamp: "34:45",
        question: "Phuppo got my father re-married",
      },
      {
        timestamp: "39:55",
        question: "Having an autistic child",
      },
      {
        timestamp: "46:54",
        question: "Struggles in life of a single woman",
      },
      {
        timestamp: "01:04:46",
        question: "Moving to Dubai after living in New Zealand?",
      },
      {
        timestamp: "1:11:36",
        question: "Living like a single man despite being married.",
      },
      {
        timestamp: "1:23:37",
        question: "Home sick overseas Pakistani",
      },
      {
        timestamp: "1:35:25",
        question: "Sex education in Pakistan",
      },
    ],
  },
  {
    episode: 36,
    youtube_link: "https://www.youtube.com/watch?v=MM_DhAv6ngE",
    questions: [
      {
        timestamp: "02:06",
        question:
          "Mother keeps asking for money despite other kids being richer.",
      },
      {
        timestamp: "12:51",
        question: "Indian student consuming extremist content online.",
      },
      {
        timestamp: "21:20",
        question: "Demoralizing parents",
      },
      {
        timestamp: "28:19",
        question: "Freelancer suffering losses from a local client.",
      },
      {
        timestamp: "40:40",
        question:
          "Why is it so difficult for a woman to live in Pakistan or in Pakistani culture?",
      },
    ],
  },
  {
    episode: 37,
    youtube_link: "https://youtu.be/1_pbuesNsaU?si=P7Z-aaG0yjhff6uT",
    questions: [
      {
        timestamp: "04:05",
        question:
          "IT grad from Australia confused to live there or return home.",
      },
      {
        timestamp: "17:25",
        question: "Best friend getting married very hard to let her go.",
      },
      {
        timestamp: "25:29",
        question:
          "Kolkata boy passionate about teaching-looking for investors to invest in his app/startup.",
      },
      {
        timestamp: "28:13",
        question:
          "Fulbright scholar with 100% PhD scholarship confused between going back to Pakistan and work/getting married or stay.",
      },
      {
        timestamp: "44:34",
        question: "Property wife k naam per kerdoon ya nahi?",
      },
      {
        timestamp: "59:17",
        question: "'Fucking bitch for a mother'",
      },
    ],
  },
  {
    episode: 38,
    youtube_link: "https://youtu.be/bc18VBYZI70?si=h1iw-qXPM0RTtjwv",
    questions: [
      {
        timestamp: "02:21",
        question: "Pakistani American serving in the US Army.",
      },
      {
        timestamp: "18:30",
        question: "Waqt se pehlay mature hogaya hoon.",
      },
      {
        timestamp: "29:08",
        question: "25 yo girl from US still living under a curfew.",
      },
      {
        timestamp: "50:28",
        question:
          "Husband checked my phone on suhaag raath and caught messages.",
      },
      {
        timestamp: "01:05:31",
        question: "Controlling mother in law.",
      },
      {
        timestamp: "01:14:15",
        question: "Hate engineering, my life status and everything.",
      },
      {
        timestamp: "01:29:00",
        question: "Appreciation Email.",
      },
    ],
  },
  {
    episode: 39,
    youtube_link: "https://youtu.be/rsSKAgmmFKM?si=akcv5Ev__xqJWapL",
    questions: [
      {
        timestamp: "01:26",
        question: "Too comfortable to move to Canada",
      },
      {
        timestamp: "14:28",
        question: "Toxic environment made me lie about moving houses.",
      },
      {
        timestamp: "19:37",
        question:
          "Left home due to toxicity and confused about the relationship with the partner living in Birmingham.",
      },
      {
        timestamp: "33:22",
        question: "I hate my father and I really want to die.",
      },
    ],
  },
  {
    episode: 40,
    youtube_link: "https://youtu.be/opXjYYL0a5g?si=igxwbiYXj1ao97DQ",
    questions: [
      {
        timestamp: "01:01",
        question: "'How many girls you have slept with?'",
      },
      {
        timestamp: "06:08",
        question: "Your (Junaid’s) take on societal values.",
      },
      {
        timestamp: "17:49",
        question: "What is happening to the city of Karachi?",
      },
      {
        timestamp: "24:05",
        question:
          "Married online, husband divorced 3 years later without even meeting me.",
      },
      {
        timestamp: "39:35",
        question: "'Learn to say no' – Emotionally challenged girl in dilemma.",
      },
      {
        timestamp: "46:59",
        question:
          "'Message from a distressed Father' – My ex-wife shifted to Canada along with my daughter without letting me know.",
      },
    ],
  },
  {
    episode: 41,
    youtube_link: "https://youtu.be/bbTqzgW95YY?si=EyxwsUvgCQXtsUZ0",
    questions: [
      {
        timestamp: "01:24",
        question: "Challenges of marrying in a different economic background.",
      },
      {
        timestamp: "29:42",
        question: "'Wife and I disagree on daughter’s dressing'",
      },
      {
        timestamp: "40:10",
        question: "Shall I leave this country or not?",
      },
      {
        timestamp: "50:40",
        question:
          "Being engaged to Mom’s second cousin who is ex-drug addict with one relationship affair in the past.",
      },
      {
        timestamp: "57:42",
        question:
          "Potential to study arts but suffering from ADHD and have unsupportive parents.",
      },
    ],
  },
  {
    episode: 42,
    youtube_link: "https://youtu.be/MEQNxG2SZbk?si=0oYISPSTcQ7uslR9",
    questions: [
      {
        timestamp: "02:14",
        question: "Views of a minority about living Pakistan.",
      },
      {
        timestamp: "28:27",
        question: "'Taking care of single mother after shaadi'.",
      },
    ],
  },
  {
    episode: 43,
    youtube_link: "https://youtu.be/LjZ7EG5OYP8?si=U6YZRIOMfTLnYvI1",
    questions: [
      {
        timestamp: "01:12",
        question: "Moved back from UAE, cant settle here.",
      },
      {
        timestamp: "08:02",
        question:
          "'Flaws in our society' (Early marriages, Hindu society and Islam).",
      },
      {
        timestamp: "24:51",
        question: "Realizing financial differences after getting married.",
      },
      {
        timestamp: "33:30",
        question: "Suggestion needed for a home about to break",
      },
      {
        timestamp: "53:04",
        question: "Regretting that I invested In crypto.",
      },
      {
        timestamp: "59:32",
        question: "I feel attracted towards my brother’s wife",
      },
      {
        timestamp: "01:08:16",
        question:
          "I have fair complexion and fair looks but never get any attention.",
      },
    ],
  },
  {
    episode: 44,
    youtube_link: "https://www.youtube.com/watch?v=Jso8aknlnMo",
    questions: [
      {
        timestamp: "00:42",
        question: "Final year medical student living with toxic mother.",
      },
      {
        timestamp: "13:43",
        question:
          "My father is extremely abusive to my mother, what should I do for her (mother’s) and my emotional wellbeing.",
      },
      {
        timestamp: "24:26",
        question:
          "'Guilt of hurting my Bhaabi (sister-in-law) again and again'",
      },
      {
        timestamp: "28:10",
        question:
          "How all the married men and women can have monogamous married life?",
      },
      {
        timestamp: "50:19",
        question:
          "I don’t ever wanna get married and spend all the money on my parents as they have worked very hard for us.",
      },
      {
        timestamp: "54:23",
        question:
          "20-year-old, madly in love with the most beautiful girl and is confused why the girl he loved has rejected him.",
      },
    ],
  },
  {
    episode: 45,
    youtube_link: "https://www.youtube.com/watch?v=BPQ4RtqyxEc",
    questions: [
      {
        timestamp: "00:53",
        question: "'Bloody HEC'. Disappointed by his father’s decision.",
      },
      {
        timestamp: "12:18",
        question:
          "Medical student started his own business of mess/hostel but suffering from having bad grades at study.",
      },
      {
        timestamp: "19:52",
        question: "'How do I save my sister from an abusive husband?'",
      },
      {
        timestamp: "33:29",
        question: "'Confusion between friendship and money'.",
      },
      {
        timestamp: "38:09",
        question:
          "Earning 12,000$ per month, has no interest in studying, hates living in Pakistan but stressed about his future.",
      },
      {
        timestamp: "46:50",
        question: "'Gay and Muslim.'",
      },
      {
        timestamp: "57:56",
        question:
          "27-year-old, lives in US, wants to be a Filmmaker and is Pansexual.",
      },
      {
        timestamp: "01:06:48",
        question: "Toxic dirty roommate.",
      },
    ],
  },
  {
    episode: 46,
    youtube_link: "https://youtu.be/8t939KcD0VA?si=hkTkDHK_IZVn8n6-",
    questions: [
      {
        timestamp: "01:26",
        question:
          "Feeling guilty as my parents are spending a lot of money to fulfil my wishes.",
      },
      {
        timestamp: "03:33",
        question:
          "Mother being biased, as she is unfair to my father’s relative daughter in law.",
      },
      {
        timestamp: "05:44",
        question: "Struggling to achieve goals due to mental health.",
      },
      {
        timestamp: "16:09",
        question:
          "BBA graduate making less money than he deserves needs guidance between Saudi or UK?",
      },
      {
        timestamp: "27:05",
        question:
          "14-year-old wants to do the job and give his mother the life she deserves.",
      },
      {
        timestamp: "35:44",
        question:
          "I want to donate my kidney to my mother but don’t feel prepared for it.",
      },
      {
        timestamp: "42:45",
        question:
          "25 years old girl, has responsibility of mother and sister and has a proposal of 43 years old guy living abroad.",
      },
      {
        timestamp: "55:14",
        question: "'E-fuck boy' now feels guilty for what he has done.",
      },
      {
        timestamp: "01:04:09",
        question:
          "'Reviews over Population control' (Rizq Allah dega lekin kapra/makaan kon dega?).",
      },
      {
        timestamp: "01:13:13",
        question: "Is being born ugly is my crime?",
      },
    ],
  },
  {
    episode: 47,
    youtube_link: "https://youtu.be/Plw8WA3Jtvk?si=89RmFNCKeONbGBsS",
    questions: [
      {
        timestamp: "03:14",
        question: "My husband doesn't kiss me.",
      },
      {
        timestamp: "20:55",
        question:
          "Pakistani American girl wants to cut ties with her toxic family.",
      },
      {
        timestamp: "37:41",
        question: "Chronically sick due to black magic.",
      },
      {
        timestamp: "53:45",
        question: "Thank you for the Eid card.",
      },
      {
        timestamp: "01:02:56",
        question: "Heartbroken to see hate comments under your photo.",
      },
      {
        timestamp: "01:05:50",
        question: "A Delhiite who actually KNOWS what he wants in life.",
      },
      {
        timestamp: "01:23:26",
        question: "'How to find people with growth mindset?'",
      },
    ],
  },
  {
    episode: 48,
    youtube_link: "https://youtu.be/imMNfP_gGu8?si=NkQXmKqLQfrLt2nl",
    questions: [
      {
        timestamp: "02:48",
        question: "'Self-talk problem, cannot overcome laziness'",
      },
      {
        timestamp: "18:01",
        question: "Feedback of Pakistani Embassy in Canberra.",
      },
      {
        timestamp: "31:07",
        question: "19-year-old trying to fix his family problems.",
      },
      {
        timestamp: "49:24",
        question: "Living in USA. Sub kuch hai lekin sukoon nahi!",
      },
      {
        timestamp: "01:00:52",
        question: "Unsatisfied parents torturing me to this day.",
      },
      {
        timestamp: "01:11:56",
        question: "How to convince parents to think differently?",
      },
      {
        timestamp: "01:32:52",
        question: "Request to accept my apology.",
      },
    ],
  },
  {
    episode: 49,
    youtube_link: "https://youtu.be/vLOEtpCmxXE?si=u5GMz-K--2RtX1eP",
    questions: [
      {
        timestamp: "03:29",
        question:
          "18 yo music enthusiast wants to know how does one feel when they encounter death in front of them?",
      },
      {
        timestamp: "21:11",
        question: "Lacking in communication skills",
      },
      {
        timestamp: "46:11",
        question:
          "'Why can’t we teach our children in homes and schools the simple DIY tasks?'",
      },
      {
        timestamp: "01:03:55",
        question: "'My wife’s mood swings'",
      },
      {
        timestamp: "01:14:05",
        question: "Does moving abroad really means that you have made it?",
      },
    ],
  },
  {
    episode: 50,
    youtube_link: "https://youtu.be/mtsEbbV1bW4?si=9ZZn2wno51zGD020",
    questions: [
      {
        timestamp: "01:13",
        question:
          "Answer to questions that why junaid Akram doesn't reveal his wife's face",
      },
      {
        timestamp: "06:28",
        question: "The girl I wanted to marry will become my sister-in-law.",
      },
      {
        timestamp: "15:05",
        question: "Who is responsible for road accidents in Karachi?",
      },
      {
        timestamp: "27:29",
        question: "Being an introvert in today’s job market.",
      },
      {
        timestamp: "36:51",
        question: "'Khaalaa in misery.'",
      },
      {
        timestamp: "54:48",
        question:
          "My in laws pretended to be very religious but when I came to USA, they revealed their real faces.",
      },
      {
        timestamp: "01:09:52",
        question: "Relationship getting ruined because of toxic family.",
      },
      {
        timestamp: "01:17:43",
        question: "A girl trapped in a bad situation.",
      },
    ],
  },
  {
    episode: 51,
    youtube_link: "https://www.youtube.com/watch?v=tDRvFdO1mik",
    questions: [
      {
        timestamp: "03:01",
        question:
          "Final year medical student facing brutality in every aspect of life.",
      },
      {
        timestamp: "14:43",
        question:
          "Government officer wants guidance over building online income stream.",
      },
      {
        timestamp: "22:29",
        question:
          "Confused Aathmaa. MBA in tourism from Varanasi wants to earn a lot of money so he can invest in family’s saree business.",
      },
      {
        timestamp: "43:10",
        question:
          "Why there is no online payment systems or clubbing in Pakistan?",
      },
      {
        timestamp: "01:11:33",
        question:
          "What’s the effect of garbage and pollution on our mental health?",
      },
      {
        timestamp: "01:21:13",
        question:
          "My friend in Pakistan has fallen in love with his teacher who asks him for expensive gifts.",
      },
    ],
  },
  {
    episode: 52,
    youtube_link: "https://www.youtube.com/watch?v=bibPojwEY18",
    questions: [
      {
        timestamp: "03:10",
        question: "Suggestion to make AskGanjiswag better.",
      },
      {
        timestamp: "15:29",
        question:
          "Starting a YouTube channel but got stuck with so many questions.",
      },
      {
        timestamp: "39:38",
        question: "Does size matter in Pakistan?",
      },
      {
        timestamp: "56:30",
        question:
          "The wrong interpretation of Sharam-o-haya aspect that is stopping Pakistanis to educate.",
      },
      {
        timestamp: "01:15:15",
        question:
          "Change of future plans by watching your latest video 'Walking Tales – London'.",
      },
    ],
  },
  {
    episode: 53,
    youtube_link: "https://www.youtube.com/watch?v=rksVLPtHxaU",
    questions: [
      {
        timestamp: "03:53",
        question: "Atheist facing a couple of moral dilemmas.",
      },
      {
        timestamp: "20:07",
        question: "4 dost App.",
      },
      {
        timestamp: "21:47",
        question: "My mother fights with my father over small things.",
      },
      {
        timestamp: "33:00",
        question: "How Japanese schools encourage their students for sports.",
      },
      {
        timestamp: "38:29",
        question:
          "Football player in UAE getting rejected as he’s a Pakistani national.",
      },
      {
        timestamp: "42:49",
        question:
          "Father forcing to study accounting and threatens to break everything I own.",
      },
      {
        timestamp: "48:33",
        question: "Stress, Anxiety and Over thinking issues.",
      },
      {
        timestamp: "01:04:41",
        question: "Distaste for cricket.",
      },
      {
        timestamp: "01:18:08",
        question: "My marriage is making me depressed.",
      },
    ],
  },
  {
    episode: 54,
    youtube_link: "https://youtu.be/j61ekig9mXc?si=h_Ad7mN8sYZ6TSJL",
    questions: [
      {
        timestamp: "02:42",
        question: "Birth, Bomb blast and target killing.",
      },
      {
        timestamp: "20:49",
        question: "How to raise new generation kids?",
      },
      {
        timestamp: "38:17",
        question: "Bringing up family abroad.",
      },
      {
        timestamp: "56:09",
        question: "Overprotective parents and their priorities.",
      },
    ],
  },
  {
    episode: 55,
    youtube_link: "https://youtu.be/1uO8iij9EPE?si=2WNj5_WztqYXhRk5",
    questions: [
      {
        timestamp: "01:15",
        question: "Ghazal to God.",
      },
      {
        timestamp: "11:04",
        question: "E-sports gaming and parents of 19th century mindset.",
      },
      {
        timestamp: "25:01",
        question: "3D environment artist looking for suggestions.",
      },
      {
        timestamp: "34:29",
        question: "Creepy Pakistanis creeping into DMs.",
      },
      {
        timestamp: "43:40",
        question:
          "MBBS student and a great footballer is sad at the situation of sports in Pakistan.",
      },
      {
        timestamp: "48:12",
        question: "Feedback Email.",
      },
      {
        timestamp: "49:12",
        question: "Success Story – Why and how I stopped smoking?",
      },
    ],
  },
  {
    episode: 56,
    youtube_link: "https://www.youtube.com/watch?v=9xrWODkA-TU",
    questions: [
      {
        timestamp: "02:14",
        question: "Unsafe public and private travelling services for girls.",
      },
      {
        timestamp: "16:42",
        question: "Sh*t happens when you leave office on time.",
      },
      {
        timestamp: "23:02",
        question: "The vaccine drama.",
      },
      {
        timestamp: "35:06",
        question:
          "Struggling to participate and help my father in family’s business.",
      },
      {
        timestamp: "47:17",
        question: "Lacking of NADRA.",
      },
    ],
  },
  {
    episode: 57,
    youtube_link: "https://youtu.be/QYT6nlm9ggk?si=wPkCAvsShKl8MI9m",
    questions: [
      {
        timestamp: "00:41",
        question:
          "Why are opinionated females considered a threat to the family?",
      },
      {
        timestamp: "16:35",
        question: "Safe future for girls in Pakistan?",
      },
      {
        timestamp: "32:03",
        question: "A newly wed couple's problem.",
      },
      {
        timestamp: "52:19",
        question:
          "20-year-old disappointed over parents’ behavior towards each other.",
      },
      {
        timestamp: "58:28",
        question:
          "What signs to look for in a person that you’re planning to get married to?",
      },
    ],
  },
  {
    episode: 58,
    youtube_link: "https://www.youtube.com/watch?v=BYRlwCDwQJw",
    questions: [
      {
        timestamp: "04:22",
        question:
          "15 yo graphic designer needs help over his payment issues from an international client.",
      },
      {
        timestamp: "07:49",
        question:
          "Arranged marriage. Moved to Canada. Family in middle east is having issues over small things.",
      },
      {
        timestamp: "21:00",
        question: "Vaccination has affected my sex life.",
      },
      {
        timestamp: "32:36",
        question: "How to give a good visa interview?",
      },
      {
        timestamp: "41:52",
        question: "Future of Pakistan.",
      },
      {
        timestamp: "01:09:00",
        question: "Useless education system of Pakistan.",
      },
    ],
  },
  {
    episode: 59,
    youtube_link: "https://www.youtube.com/watch?v=oax15XBWV60",
    questions: [
      {
        timestamp: "04:22",
        question: "Help me to quit smoking like you did.",
      },
      {
        timestamp: "09:17",
        question: "Stuck in elite friend's circle.",
      },
      {
        timestamp: "14:18",
        question: "Moved abroad 1.5 years ago but I still feel social anxiety.",
      },
      {
        timestamp: "24:45",
        question: "Relationship/Engagement in tatters.",
      },
      {
        timestamp: "30:23",
        question:
          "Request to not to put such details in the questions that your family and friends can easily recognize who’s the sender.",
      },
      {
        timestamp: "31:43",
        question:
          "Which sector is more important to you for the development of the country and which sector countries like India and Pakistan should focus on for the betterment of their economic prosperity and betterment of people. (Answered by Uzair Younus – Economic Analyst).",
      },
      {
        timestamp: "46:12",
        question: "Ethical dilemma over switching companies.",
      },
      {
        timestamp: "50:36",
        question:
          "PhD living overseas, applied for a government job in Pakistan confused over the outdated paper work system in the government offices.",
      },
      {
        timestamp: "55:25",
        question: "Terrible family planning by my father.",
      },
      {
        timestamp: "01:04:14",
        question: "Confused on sending a bit unusual marriage proposal.",
      },
    ],
  },
  {
    episode: 60,
    youtube_link: "https://youtu.be/5E-pG1t4zuw",
    questions: [
      {
        timestamp: "01:15",
        question: "Dealing with insecurities (eczema).",
      },
      {
        timestamp: "19:56",
        question: "Stuck in a condition.",
      },
      {
        timestamp: "26:26",
        question: "A young lost swag needs thoughts from your swag family.",
      },
      {
        timestamp: "52:55",
        question:
          "App that lets overseas Pakistani’s help their parents in Pakistan.",
      },
      {
        timestamp: "55:56",
        question: "Double standards of Parenting.",
      },
      {
        timestamp: "01:04:47",
        question: "Superior Complex.",
      },
    ],
  },
  {
    episode: 61,
    youtube_link: "https://youtu.be/dmoRkMr8RXw",
    questions: [
      {
        timestamp: "01:30",
        question: "Parents' treatment based on money.",
      },
      {
        timestamp: "14:18",
        question:
          "Should I move from Sweden to Dubai so I can save up for a house?",
      },
      {
        timestamp: "19:48",
        question: "You inspired me to visit Israel.",
      },
      {
        timestamp: "35:43",
        question: "Handle with care.",
      },
      {
        timestamp: "44:32",
        question: "Where do non-MBBS students go?",
      },
    ],
  },
  {
    episode: 62,
    youtube_link: "https://youtu.be/BtkbhCABaJ8",
    questions: [
      {
        timestamp: "02:55",
        question: "Condolence for Umer Sharif.",
      },
      {
        timestamp: "04:39",
        question: "Believing Syeds as Superior.",
      },
      {
        timestamp: "12:14",
        question: "Sexually abused by his own mother.",
      },
      {
        timestamp: "35:09",
        question: "Male superiority in siblings.",
      },
      {
        timestamp: "51:21",
        question: "Is population control necessary?",
      },
      {
        timestamp: "01:05:52",
        question: "Thank You from Indian Student.",
      },
    ],
  },
  {
    episode: 63,
    youtube_link: "https://youtu.be/3fNGEDiLHec",
    questions: [
      {
        timestamp: "00:55",
        question: "British Pakistani diagnosed with HIV.",
      },
      {
        timestamp: "09:45",
        question: "An Indian losing patriotism after living in Canada.",
      },
      {
        timestamp: "24:03",
        question: "Got a proposal but he got so many siblings.",
      },
      {
        timestamp: "29:07",
        question: "20 yo MBBS Student intends to leave Pakistan.",
      },
      {
        timestamp: "43:32",
        question: "Last hope of my father.",
      },
      {
        timestamp: "56:27",
        question: "Problem of teenagers working from Home.",
      },
    ],
  },
  {
    episode: 64,
    youtube_link: "https://youtu.be/fmLK94bEg4g",
    questions: [
      {
        timestamp: "01:23",
        question: "24 years old getting married soon looking for help/advice.",
      },
      {
        timestamp: "07:20",
        question: "Does difference of age in marriage has drawbacks?",
      },
      {
        timestamp: "16:23",
        question: "Guilty from India.",
      },
      {
        timestamp: "32:33",
        question:
          "Aap food vlogs mai lag gaye hain. Please mehangayi k baray mai baat karain.",
      },
      {
        timestamp: "45:11",
        question:
          "My brother having some extreme indecisiveness and impulsive behavior.",
      },
      {
        timestamp: "57:43",
        question: "Anger issues spoiling life and relationships.",
      },
    ],
  },
  {
    episode: 65,
    youtube_link: "https://www.youtube.com/watch?v=W1nmyrZbryA",
    questions: [
      {
        timestamp: "01:25",
        question: "Dealing with hair loss.",
      },
      {
        timestamp: "04:34",
        question: "Mental trauma after abusive marriage.",
      },
      {
        timestamp: "21:59",
        question:
          "Girl from Karachi started freelancing at the age of 16, earning 0.8 million a month facing problems that money can’t solve.",
      },
      {
        timestamp: "35:49",
        question: "Stuck in a precarious situation (Rishta problem).",
      },
      {
        timestamp: "45:44",
        question: "A teenager battling with problems.",
      },
    ],
  },
  {
    episode: 66,
    youtube_link: "https://youtu.be/P4XThXZ7Rhk",
    questions: [
      {
        timestamp: "01:35",
        question: "Loneliness/Over thinking is eating me.",
      },
      {
        timestamp: "09:40",
        question: "19-year-old boy who thinks he is not good at anything.",
      },
      {
        timestamp: "20:35",
        question:
          "After a long time in relationship my girl friend gave up on me by mentioning she is not the same person anymore. (Patron)",
      },
      {
        timestamp: "37:56",
        question: "Growing up without a father.",
      },
    ],
  },
  {
    episode: 67,
    youtube_link: "https://youtu.be/DRG3fWBmjAM",
    questions: [
      {
        timestamp: "01:51",
        question: "The Swag Family and Stories.",
      },
      {
        timestamp: "07:42",
        question: "Depressed/Intimacy before marriage.",
      },
      {
        timestamp: "15:56",
        question:
          "I am 28 year and I am left Pakistan when I was 18 year to do and Undergraduate.",
      },
      {
        timestamp: "31:21",
        question: "Having hard time in dealing with my old parents.",
      },
      {
        timestamp: "50:07",
        question: "Successful but depressed.",
      },
    ],
  },
  {
    episode: 68,
    youtube_link: "https://youtu.be/-qqRYQDe1Aw",
    questions: [
      {
        timestamp: "01:44",
        question: "Unresolved trauma and self-sabotaging action due to Abuse.",
      },
      {
        timestamp: "14:03",
        question: "31-year-old guy from India needs advice.",
      },
      {
        timestamp: "31:25",
        question: "The debit of being rich and the sad state of desi Men.",
      },
    ],
  },
  {
    episode: 69,
    youtube_link: "https://youtu.be/lCc9E2nh8ZI",
    questions: [
      {
        timestamp: "01:04",
        question: "Online dating, friends and mental health.",
      },
      {
        timestamp: "14:19",
        question: "Divorce mom looking for personal advice.",
      },
      {
        timestamp: "30:56",
        question: "Why are we proud to be racist?",
      },
      {
        timestamp: "41:15",
        question: "Working for a Pakistani lawyer in UK.",
      },
    ],
  },
  {
    episode: 70,
    youtube_link: "https://youtu.be/1rzbvF7N_jQ",
    questions: [
      {
        timestamp: "0:58",
        question: "How to change the mindset of my spouse.",
      },
      {
        timestamp: "12:43",
        question:
          "Hating men due to cheating, adultery and extramarital affairs.",
      },
      {
        timestamp: "25:35",
        question: "Trying to find myself.",
      },
      {
        timestamp: "49:23",
        question: "Traveling experience as a Pakistani Passport holder.",
      },
    ],
  },
  {
    episode: 71,
    youtube_link: "https://youtu.be/0KL085Tb9BI",
    questions: [
      {
        timestamp: "02:50",
        question: "Am I unhappy or am I ungrateful?",
      },
      {
        timestamp: "15:13",
        question:
          "Future Marriage: Should I follow parents advice or my own feelings?",
      },
      {
        timestamp: "18:58",
        question: "Should I buy a house or an apartment?",
      },
      {
        timestamp: "34:09",
        question: "How one can overcome shyness?",
      },
      {
        timestamp: "46:02",
        question: "How can I pursue a dream of adventure photography?",
      },
    ],
  },
  {
    episode: 72,
    youtube_link: "https://www.youtube.com/watch?v=1rzbvF7N_jQ",
    questions: [
      {
        timestamp: "03:40",
        question: "Feeling frustrated and stuck in life.",
      },
      {
        timestamp: "16:20",
        question: "Should I leave this marriage or stay?",
      },
      {
        timestamp: "34:30",
        question: "Should I choose jobs in UAE or Pakistan?",
      },
      {
        timestamp: "42:22",
        question: "Junaid Akram’s thoughts on Shark Tank.",
      },
      {
        timestamp: "53:26",
        question:
          "Saudia’s gaming industry vs unfortunate economic policies of our country.",
      },
      {
        timestamp: "01:06:54",
        question: "5 months ago I met a guy through my sister’s friend circle.",
      },
    ],
  },
  {
    episode: 73,
    youtube_link: "https://youtu.be/RPurRvH2L-8",
    questions: [
      {
        timestamp: "03:22",
        question: "A condition in marriage.",
      },
      {
        timestamp: "07:47",
        question: "We are forced to respect our family.",
      },
      {
        timestamp: "23:19",
        question: "Lack of confidence during a job interview.",
      },
      {
        timestamp: "29:15",
        question: "Abusive parents.",
      },
      {
        timestamp: "42:12",
        question: "Childhood trauma and low self-esteem while growing up.",
      },
      {
        timestamp: "01:11:26",
        question: "Can a filmmaker survive in Pakistan?",
      },
    ],
  },
  {
    episode: 74,
    youtube_link: "https://youtu.be/60z4d0lE0cU",
    questions: [
      {
        timestamp: "02:01",
        question: "Deteriorating relationships.",
      },
      {
        timestamp: "17:26",
        question: "Marry in US or Pakistan?",
      },
      {
        timestamp: "29:54",
        question: "Marrying a divorcee with an abusive past.",
      },
      {
        timestamp: "56:39",
        question: "Can we change a person from being worse?",
      },
    ],
  },
  {
    episode: 75,
    youtube_link: "https://youtu.be/-IohX-GUIK0",
    questions: [
      {
        timestamp: "01:26",
        question: "Mid-Career Crisis (Research Scientist).",
      },
      {
        timestamp: "11:17",
        question:
          "University graduate confused about future and wanting to move to Pakistan.",
      },
      {
        timestamp: "30:49",
        question: "Junaid’s opinion about the term 'Mard ban'.",
      },
      {
        timestamp: "45:08",
        question:
          "Gender disparity in mobility and public transportation (rant & quibble).",
      },
      {
        timestamp: "01:02:21",
        question: "Podcast with Imran khan and Karachi.",
      },
    ],
  },
  {
    episode: 76,
    youtube_link: "https://youtu.be/9-IwQl7RWlw",
    questions: [
      {
        timestamp: "03:42",
        question: "Afraid of being broke and suicidal thoughts.",
      },
      {
        timestamp: "15:17",
        question:
          "Life Experience VS Marriage and what next after marriage & kids?",
      },
      {
        timestamp: "38:12",
        question: "16 years age difference with a lady.",
      },
      {
        timestamp: "49:04",
        question: "Differences between Indian & Pakistani Muslim Society.",
      },
      {
        timestamp: "01:04:59",
        question: "Panic attacks because of work pressure.",
      },
    ],
  },
  {
    episode: 77,
    youtube_link: "https://youtu.be/_kVGc4mT7w8",
    questions: [
      {
        timestamp: "04:13",
        question:
          "O levels student from Rawalpindi feeling depressed and suicidal.",
      },
      {
        timestamp: "20:01",
        question: "Social anxiety, Overthinking and scared. Need Advice.",
      },
      {
        timestamp: "42:00",
        question: "Married men and their late-night friendships.",
      },
    ],
  },
  {
    episode: 78,
    youtube_link: "https://youtu.be/rF-ckHIauoY",
    questions: [
      {
        timestamp: "02:09",
        question: "The gender pay gap.",
      },
      {
        timestamp: "18:44",
        question: "Am I old enough to travel abroad?",
      },
      {
        timestamp: "30:31",
        question:
          "Turks dislike us as well now. One step closer to becoming the most hated nation.",
      },
    ],
  },
  {
    episode: 79,
    youtube_link: "https://youtu.be/4SQnFx3Os9g",
    questions: [
      {
        timestamp: "01:13",
        question: "Ivy league grad going through an existential crisis.",
      },
      {
        timestamp: "14:50",
        question: "Umrah return problems.",
      },
      {
        timestamp: "25:13",
        question: "Parents with extramarital affairs.",
      },
      {
        timestamp: "38:55",
        question: "Father involved in prostitution.",
      },
      {
        timestamp: "48:22",
        question: "Looking for closure.",
      },
    ],
  },
  {
    episode: 80,
    youtube_link: "https://youtu.be/v8aFYB45vGE",
    questions: [
      {
        timestamp: "00:46",
        question: "Moving abroad from Lahore to Bangkok requires consultation.",
      },
      {
        timestamp: "05:46",
        question: "What a Terrible Place it is to live.",
      },
      {
        timestamp: "20:27",
        question: "My mother doesn't socialize with anyone.",
      },
      {
        timestamp: "30:08",
        question: "A Teenager with Childhood Trauma.",
      },
    ],
  },
  {
    episode: 81,
    youtube_link: "https://youtu.be/pfesmavDb8Y",
    questions: [
      {
        timestamp: "05:01",
        question: "Fear of Not Having a Job After Graduation.",
      },
      {
        timestamp: "16:14",
        question: "How to Handle Losing Confidence.",
      },
      {
        timestamp: "26:22",
        question: "India-based Admirer and Seeker.",
      },
      {
        timestamp: "38:03",
        question: "Warning Alert Pakistan is becoming a Scam Hub.",
      },
    ],
  },
  {
    episode: 82,
    youtube_link: "https://youtu.be/XZpB5zslbkI",
    questions: [
      {
        timestamp: "02:18",
        question: "Concerns about my private life.",
      },
      {
        timestamp: "18:50",
        question: "Dual PhD stuck in domestic difficulties.",
      },
      {
        timestamp: "37:10",
        question: "Helping Pakistani students abroad.",
      },
      {
        timestamp: "54:14",
        question: "Financial boundaries with Desi Parents.",
      },
    ],
  },
  {
    episode: 83,
    youtube_link: "https://youtu.be/krjUfWNjruU",
    questions: [
      {
        timestamp: "00:41",
        question: "Unloving, Reclusive wife behavior.",
      },
      {
        timestamp: "17:03",
        question: "Red flags in the UAE job Market.",
      },
      {
        timestamp: "27:33",
        question: "Afghan-Turkish Admirer.",
      },
      {
        timestamp: "42:08",
        question: "Whose heart should I break and whose should I adopt?",
      },
    ],
  },
  {
    episode: 84,
    youtube_link: "https://youtu.be/1zfpsMT7b6I",
    questions: [
      {
        timestamp: "01:13",
        question:
          "No place for common single lady to hang out or chill in Pakistan.",
      },
      {
        timestamp: "12:24",
        question: "When do you finally say enough is enough?",
      },
      {
        timestamp: "37:18",
        question: "Jealousy.",
      },
      {
        timestamp: "47:28",
        question: "Should I stay unsatisfied or get a divorce?",
      },
      {
        timestamp: "58:50",
        question:
          "Distancing people in phases of life. Should I change my life?",
      },
      {
        timestamp: "01:06:10",
        question:
          "Men who never vote themselves nor allow their woman to vote.",
      },
    ],
  },
  {
    episode: 85,
    youtube_link: "https://youtu.be/FDOm7GLnNmw",
    questions: [
      {
        timestamp: "00:54",
        question: "Leaving the abuser will cost my son.",
      },
      {
        timestamp: "19:00",
        question: "Pakistani Youth is an Illusion.",
      },
      {
        timestamp: "40:53",
        question: "Homosexual Case.",
      },
      {
        timestamp: "54:44",
        question: "33 years old Syed Zadi stuck in Family traditions.",
      },
    ],
  },
  {
    episode: 86,
    youtube_link: "https://youtu.be/E7OVvmUCS9s",
    questions: [
      {
        timestamp: "07:27",
        question: "What is the future of visually impaired in this country.",
      },
      {
        timestamp: "22:19",
        question: "How do I stop my dad from sending money to Pakistan.",
      },
      {
        timestamp: "39:01",
        question: "My husband careless Attitude.",
      },
      {
        timestamp: "57:29",
        question: "Every night at her residence, my mother has sex with a man.",
      },
    ],
  },
  {
    episode: 87,
    youtube_link: "https://youtu.be/NSiLaeXFMmE",
    questions: [
      {
        timestamp: "04:38",
        question: "Red Flags of My Partner.",
      },
      {
        timestamp: "15:12",
        question: "Gay Husband.",
      },
      {
        timestamp: "28:03",
        question:
          "We both want to Marry but her Family wants a Separate House First.",
      },
      {
        timestamp: "35:43",
        question: "I wish my Father was Dead.",
      },
      {
        timestamp: "43:20",
        question: "Unsatisfied Married Life.",
      },
      {
        timestamp: "50:54",
        question: "Pakistani Dramas at Overseas Pakistani.",
      },
    ],
  },
  {
    episode: 88,
    youtube_link: "https://youtu.be/vgAJn-f-aDg",
    questions: [
      {
        timestamp: "02:29",
        question: "My Husband is Unhygienic Lifestyle.",
      },
      {
        timestamp: "16:17",
        question: "Living with the Jew.",
      },
      {
        timestamp: "28:19",
        question: "Advice Needed on the Choice of Degree or Career.",
      },
      {
        timestamp: "41:21",
        question:
          "Issues with Pakistanis Looking to come to the US for Work / Study.",
      },
      {
        timestamp: "58:24",
        question: "Polygamy Marriage.",
      },
    ],
  },
  {
    episode: 89,
    youtube_link: "https://youtu.be/JQo3-g1hImQ",
    questions: [
      {
        timestamp: "02:58",
        question: "Traditional expectations of a husband in a desi community.",
      },
    ],
  },
  {
    episode: 90,
    youtube_link: "https://youtu.be/DXYuCrT4YsA",
    questions: [
      {
        timestamp: "00:53",
        question: "Artist phokat ka maal hai.",
      },
    ],
  },
  {
    episode: 91,
    youtube_link: "https://youtu.be/mclKOoczZm0",
    questions: [
      {
        timestamp: "01:14",
        question: "Basic Ethics & Etiquette.",
      },
    ],
  },
  {
    episode: 92,
    youtube_link: "https://youtu.be/yWY6HtWZYQc",
    questions: [
      {
        timestamp: "01:45",
        question: "Husband wife Separation/Divorce after 15-20 years.",
      },
    ],
  },
  {
    episode: 93,
    youtube_link: "https://youtu.be/pXbTal_oFA4",
    questions: [
      {
        timestamp: "03:35",
        question: "Lend Money Lose A Friend.",
      },
    ],
  },
  {
    episode: 94,
    youtube_link: "https://youtu.be/3_zcPh07BGE",
    questions: [
      {
        timestamp: "02:03",
        question: "My dark fantasy.",
      },
    ],
  },
  {
    episode: 95,
    youtube_link: "https://youtu.be/K4FKdoQXSsM",
    questions: [
      {
        timestamp: "06:12",
        question: "Wife's Obsession With Work.",
      },
    ],
  },
  {
    episode: 96,
    youtube_link: "https://youtu.be/Dw-ZrwcPrH4",
    questions: [
      {
        timestamp: "02:30",
        question: "Ganjiswag Merchandise.",
      },
      {
        timestamp: "03:07",
        question: "Wife Called Police on her Husband.",
      },
      {
        timestamp: "06:17",
        question: "Need Your Support.",
      },
      {
        timestamp: "17:37",
        question: "Narcissist Eldest Sister Making my life Hell.",
      },
      {
        timestamp: "37:44",
        question: "Why parents force us to live in bad Marriages.",
      },
    ],
  },
  {
    episode: 97,
    youtube_link: "https://youtu.be/Ly4Tvwl8OQA",
    questions: [
      {
        timestamp: "03:36",
        question: "Contemplating about not having children.",
      },
      {
        timestamp: "24:02",
        question: "Power of Pakistani passport.",
      },
    ],
  },
  {
    episode: 98,
    youtube_link: "https://youtu.be/i07hSadi6RQ",
    questions: [
      {
        timestamp: "04:20",
        question: "Desis with Zero Life Skills.",
      },
      {
        timestamp: "20:51",
        question: "Compression & Insecurity as a College Student.",
      },
    ],
  },
  {
    episode: 99,
    youtube_link: "https://youtu.be/FFZxsVaoE7w",
    questions: [
      {
        timestamp: "04:32",
        question: "Is it Cheating or Heat of the Moment.",
      },
      {
        timestamp: "10:09",
        question: "Husband Share are Problems with his Brothers.",
      },
      {
        timestamp: "24:35",
        question: "Future of minorities in Pakistan.",
      },
      {
        timestamp: "46:01",
        question: "Karachi city of Crime.",
      },
    ],
  },
  {
    episode: 100,
    youtube_link: "https://youtu.be/l8Y5qwGyLy8",
    questions: [
      {
        timestamp: "01:55",
        question: "Long distance relationship.",
      },
      {
        timestamp: "17:06",
        question: "Satisfied with my freelance remote job.",
      },
      {
        timestamp: "33:28",
        question: "Wanted to move abroad for work.",
      },
      {
        timestamp: "54:36",
        question: "My husband hasn’t touched me since marriage.",
      },
      {
        timestamp: "01:15:01",
        question: "The Wah Wah culture.",
      },
    ],
  },
  {
    episode: 101,
    youtube_link: "https://youtu.be/PYw4py-ykso",
    questions: [
      {
        timestamp: "10:38",
        question: "The Cost of Ignoring Red Flags.",
      },
    ],
  },
  {
    episode: 102,
    youtube_link: "https://youtu.be/mzxGbe-Wqfw",
    questions: [
      {
        timestamp: "01:29",
        question: "Broken Marriage and Extra Marital Affairs.",
      },
      {
        timestamp: "22:41",
        question: "The Lack of Sex Education in Pakistan.",
      },
      {
        timestamp: "36:17",
        question: "Girl Going to the US for Getting Education.",
      },
      {
        timestamp: "43:37",
        question: "Never Satisfied with My Salary.",
      },
    ],
  },
  {
    episode: 103,
    youtube_link: "https://youtu.be/3vOMenk3Yp4",
    questions: [
      {
        timestamp: "04:24",
        question: "Toxic Relationship and Regret.",
      },
      {
        timestamp: "09:53",
        question: "The Career Triangle.",
      },
      {
        timestamp: "17:11",
        question: "Thank you Junaid Bhai.",
      },
    ],
  },
  {
    episode: 104,
    youtube_link: "https://youtu.be/oByiu1TVWWI",
    questions: [
      {
        timestamp: "01:12",
        question: "I Have a Crush on My Teacher.",
      },
      {
        timestamp: "15:04",
        question: "Lethal Cross of weird and Phuppo.",
      },
      {
        timestamp: "30:55",
        question: "Desperate For Advice.",
      },
      {
        timestamp: "48:15",
        question: "Rarity of Finding a Partner Yourself.",
      },
    ],
  },
  {
    episode: 105,
    youtube_link: "https://youtu.be/9NK5i6u1rxo",
    questions: [
      {
        timestamp: "00:44",
        question: "Why are we so filthy?",
      },
      {
        timestamp: "35:32",
        question: "Shark Tank vs Ertuğrul.",
      },
      {
        timestamp: "54:16",
        question: "Love From India/Choosing Happy Marriage Life.",
      },
    ],
  },
  {
    episode: 106,
    youtube_link: "https://youtu.be/XRL5ju2Cii8",
    questions: [
      {
        timestamp: "02:58",
        question: "Undernourished Overseas Pakistani.",
      },
      {
        timestamp: "19:59",
        question: "Refugees Scam in Germany by Pakistanis.",
      },
      {
        timestamp: "40:26",
        question: "Rishta denied cause the family is Punjabi.",
      },
      {
        timestamp: "01:02:17",
        question: "Update About Sports Wing Channel.",
      },
    ],
  },
  {
    episode: 107,
    youtube_link: "https://youtu.be/rZ1WYCnyRFw",
    questions: [
      {
        timestamp: "01:08",
        question: "Anti-Afghanistan Person.",
      },
      {
        timestamp: "16:18",
        question: "Letter of Appreciation and Request Not a Question.",
      },
      {
        timestamp: "22:59",
        question: "Corporate Issue.",
      },
      {
        timestamp: "33:43",
        question: "Trying to Make a Change.",
      },
      {
        timestamp: "42:49",
        question: "Corruption in Universities.",
      },
      {
        timestamp: "49:04",
        question: "Getting Out of a Tough Financial Situation.",
      },
      {
        timestamp: "58:36",
        question: "Failing Double Cousin Arranged Marriage.",
      },
    ],
  },
  {
    episode: 108,
    youtube_link: "https://youtu.be/LdwLh3qj2Qo",
    questions: [
      {
        timestamp: "01:52",
        question: "Husband does Shisha and Vape Help Me to stop.",
      },
      {
        timestamp: "17:15",
        question: "Ruminating about Marriage Abroad.",
      },
      {
        timestamp: "32:38",
        question: "Caught Between Eastern and Western Values.",
      },
    ],
  },
  {
    episode: 109,
    youtube_link: "https://youtu.be/VsD2QtLgrx8",
    questions: [
      {
        timestamp: "02:51",
        question: "Choosing a Partner with Kids.",
      },
      {
        timestamp: "18:53",
        question: "Traveling with a Pakistani Passport?",
      },
    ],
  },
  {
    episode: 110,
    youtube_link: "https://youtu.be/rRFA2OF9ZO4",
    questions: [
      {
        timestamp: "00:41",
        question: "Intrusive concern.",
      },
      {
        timestamp: "19:43",
        question: "Point of view Indo-Canadian on common Pakistani Problem.",
      },
      {
        timestamp: "46:10",
        question: "Pakistan's Opinion of India.",
      },
      {
        timestamp: "01:01:24",
        question: "Just a Thank You, From Across the Border.",
      },
    ],
  },
  {
    episode: 111,
    youtube_link: "https://youtu.be/d5Ce3xFX0NQ",
    questions: [
      {
        timestamp: "44:21",
        question: "About Your Thoughts.",
      },
      {
        timestamp: "53:14",
        question: "Microsoft or Dream Business.",
      },
      {
        timestamp: "01:07:15",
        question: "The Life of Daily Driving in Karachi.",
      },
    ],
  },
  {
    episode: 112,
    youtube_link: "https://youtu.be/bCdVdbo3-Kw",
    questions: [
      {
        timestamp: "00:58",
        question: "Effect of Childhood Relationships on Married Life.",
      },
      {
        timestamp: "10:51",
        question: "My Wife Hates Intimacy.",
      },
      {
        timestamp: "17:39",
        question: "Ideal Husband in Toxic In-laws.",
      },
      {
        timestamp: "24:20",
        question: "A Tale of Hardship And Dedication.",
      },
    ],
  },
  {
    episode: 113,
    youtube_link: "https://youtu.be/0P3WBPwbKbU",
    questions: [
      {
        timestamp: "02:23",
        question: "Stop My Mother in-law sleeping in the same Room as Me.",
      },
      {
        timestamp: "08:57",
        question: "How I Should talk to My Father Coz he is Gay.",
      },
      {
        timestamp: "20:29",
        question: "R&D jobs in the Agriculture Sector.",
      },
      {
        timestamp: "28:34",
        question: "Rational & Pragmatic Approach.",
      },
    ],
  },
  {
    episode: 114,
    youtube_link: "https://youtu.be/JLK43_mxzlQ",
    questions: [
      {
        timestamp: "00:54",
        question: "Stick or Twist.",
      },
      {
        timestamp: "12:29",
        question: "Marital Rap.",
      },
      {
        timestamp: "38:43",
        question: "Trouble Marriage.",
      },
    ],
  },
  {
    episode: 115,
    youtube_link: "https://youtu.be/jXO1-OWBWHo",
    questions: [
      {
        timestamp: "05:18",
        question: "Average Pakistani with Cosmic Dreams.",
      },
      {
        timestamp: "26:26",
        question: "A Middle Child from a Broken Family.",
      },
    ],
  },
  {
    episode: 116,
    youtube_link: "https://youtu.be/Bhc3kX2MCGw",
    questions: [
      {
        timestamp: "02:40",
        question: "Middle-Class Student Destroyed By His Mother.",
      },
      {
        timestamp: "17:21",
        question: "Weird Men/Adoption/Marriage.",
      },
      {
        timestamp: "42:52",
        question: "Wife under extreme Influence of her family.",
      },
      {
        timestamp: "01:05:18",
        question: "Dad's Other Marriages.",
      },
    ],
  },
  {
    episode: 117,
    youtube_link: "https://youtu.be/L8LndKrrsOE",
    questions: [
      {
        timestamp: "03:58",
        question: "Promiscuous Past but Bright Future.",
      },
      {
        timestamp: "28:07",
        question: "Public Spaces Entertainment for Women.",
      },
    ],
  },
  {
    episode: 118,
    youtube_link: "",
    questions: [
      {
        timestamp: "02:10",
        question: "Untold Story of A Leg Spinner.",
      },
      {
        timestamp: "12:28",
        question: "A Teenage Girl with Career Concerns.",
      },
      {
        timestamp: "18:11",
        question: "Gulf Countries.",
      },
      {
        timestamp: "30:55",
        question: "Marriage Proposal Due to Weight Issue.",
      },
    ],
  },
  {
    episode: 119,
    youtube_link: "https://youtu.be/fmGMbDSnLTU",
    questions: [
      {
        timestamp: "01:14",
        question: "You can't Have Everything in Life.",
      },
      {
        timestamp: "23:46",
        question: "Unmarried Elder Daughter as Breadwinner.",
      },
    ],
  },
  {
    episode: 120,
    youtube_link: "https://youtu.be/dtXZCi2RWZg",
    questions: [
      {
        timestamp: "00:56",
        question: "Naughty in Forty.",
      },
      {
        timestamp: "11:22",
        question: "Why We So Confused.",
      },
      {
        timestamp: "29:36",
        question: "Trauma of Married Life.",
      },
    ],
  },
  {
    episode: 121,
    youtube_link: "https://youtu.be/zZK3SRiCYrg",
    questions: [
      {
        timestamp: "01:13",
        question: "Why Moving Abroad But Not Improve The Living Standard.",
      },
      {
        timestamp: "19:01",
        question: "Rant of A Sexually Deprived Husband.",
      },
      {
        timestamp: "32:18",
        question: "Came so Far, Aiming For Goals that Aren't Even Mine.",
      },
    ],
  },
  {
    episode: 122,
    youtube_link: "https://youtu.be/cFnO38RaJxQ",
    questions: [
      {
        timestamp: "00:51",
        question: "The Struggle of Successful Women in Pakistan.",
      },
      {
        timestamp: "07:32",
        question: "I Don't Want My Child to Live in Pakistan.",
      },
      {
        timestamp: "13:58",
        question: "Ethics of Queue.",
      },
      {
        timestamp: "28:12",
        question: "Not Spending Time with Parents.",
      },
      {
        timestamp: "36:16",
        question: "No Job Vlog.",
      },
    ],
  },
  {
    episode: 124,
    youtube_link: "https://youtu.be/foGwoi69gKs",
    questions: [
      {
        timestamp: "13:43",
        question: "How to Improve English and Communication Skills.",
      },
      {
        timestamp: "27:58",
        question: "Migrating to USA Anxiety.",
      },
      {
        timestamp: "39:04",
        question: "Is Beauty A Curse or Privileged.",
      },
      {
        timestamp: "54:21",
        question: "UnEducated Partner.",
      },
      {
        timestamp: "01:15:59",
        question: "Husband Sleeps in Another Room After Birth.",
      },
    ],
  },
  {
    episode: 125,
    youtube_link: "https://youtu.be/gogKwMFi6rw",
    questions: [
      {
        timestamp: "00:41",
        question:
          "Guilt of Leaving My Single Parent & My Elder Brother Behind.",
      },
      {
        timestamp: "15:03",
        question: "Normalize Bald People.",
      },
      {
        timestamp: "27:04",
        question: "The Price of Integrity.",
      },
      {
        timestamp: "46:06",
        question: "UnPlanned Baby in 30s.",
      },
    ],
  },
  {
    episode: 126,
    youtube_link: "https://youtu.be/t5Xu05LtCgI",
    questions: [
      {
        timestamp: "00:41",
        question: "Unsafe Pakistan.",
      },
      {
        timestamp: "15:12",
        question: "Feeling racist towards your own race.",
      },
      {
        timestamp: "30:57",
        question: "Coward Husband.",
      },
      {
        timestamp: "44:51",
        question: "Two GirlFriends & Sexual Encounter.",
      },
    ],
  },
  {
    episode: 127,
    youtube_link: "https://youtu.be/r4JFvkKpeKY",
    questions: [
      {
        timestamp: "01:00",
        question: "An Indian Muslim Dilemma.",
      },
      {
        timestamp: "25:08",
        question: "Anxious About My Career.",
      },
      {
        timestamp: "34:04",
        question: "Why Cant Women choose The Course Of her Own Life.",
      },
      {
        timestamp: "53:31",
        question: "Appreciation Message of Respecting All cultures.",
      },
    ],
  },
  {
    episode: 128,
    youtube_link: "https://youtu.be/x181Z1ZJ1pw",
    questions: [
      {
        timestamp: "3:06",
        question: "Unwanted Invitations to Islam.",
      },
      {
        timestamp: "16:04",
        question: "Success Vs Love.",
      },
      {
        timestamp: "24:51",
        question: "Sab Ata hai Isliyai Kuch nahi kerta.",
      },
      {
        timestamp: "49:04",
        question: "Trying to win back My wife.",
      },
    ],
  },
  {
    episode: 129,
    youtube_link: "https://youtu.be/ZSCxTWXRw0w",
    questions: [
      {
        timestamp: "01:18",
        question: "Can I get Married to My Real Aunt?",
      },
      {
        timestamp: "15:01",
        question: "Badtameez Larki.",
      },
      {
        timestamp: "34:42",
        question: "18+ Struggles Of 18 Years Old.",
      },
      {
        timestamp: "56:01",
        question: "Ideal Husband But in Private.",
      },
    ],
  },
  {
    episode: 130,
    youtube_link: "https://youtu.be/bC5k9gxonNw",
    questions: [
      {
        timestamp: "06:09",
        question: "Writing My Thesis on Ask Ganjiswag Series.",
      },
      {
        timestamp: "10:12",
        question: "Raising A Boy in Today's World.",
      },
      {
        timestamp: "26:33",
        question: "Building Financial and Emotional boundaries with parents.",
      },
      {
        timestamp: "45:06",
        question:
          "Conflict of Interest with Partner (Regarding Moving Abroad).",
      },
      {
        timestamp: "01:00:26",
        question: "My mother In Law comes To my house Every day.",
      },
    ],
  },
  {
    episode: 131,
    youtube_link: "https://youtu.be/XT-VOe4Pp78",
    questions: [
      {
        timestamp: "8:35",
        question: "Comparison of Artist B/W India & Pakistan.",
      },
      {
        timestamp: "29:15",
        question: "Stuck in Family Prison In Australia.",
      },
      {
        timestamp: "37:46",
        question: "Kid Being bullied in UK Due to His Name 'Anas'.",
      },
    ],
  },
  {
    episode: 132,
    youtube_link: "https://youtu.be/pQU11OhIKEU",
    questions: [
      {
        timestamp: "01:45",
        question: "Sydney Banker Problem with Dad.",
      },
      {
        timestamp: "19:44",
        question: "Too Many Migrant Worker in the West.",
      },
      {
        timestamp: "45:31",
        question: "Political Debate Sessions On Youtube.",
      },
    ],
  },
  {
    episode: 133,
    youtube_link: "https://youtu.be/fOGM3RCD0J8",
    questions: [
      {
        timestamp: "05:31",
        question: "Feeling Complexed By Youtubers Theory.",
      },
      {
        timestamp: "29:58",
        question: "Apartment Sharing Misery So Far!",
      },
      {
        timestamp: "51:17",
        question: "Lost Opportunity Holding Me Back!",
      },
    ],
  },
  {
    episode: 134,
    youtube_link: "https://youtu.be/5IzBcOXQMes",
    questions: [
      {
        timestamp: "01:30",
        question: "Pakistan's Obsession with Turkey.",
      },
      {
        timestamp: "13:48",
        question: "Girlfriend with impulsive Buying Disorder.",
      },
      {
        timestamp: "19:12",
        question: "Need Healing ~ Missing back Home.",
      },
      {
        timestamp: "41:01",
        question: "The Case for Overseas Pakistani.",
      },
    ],
  },
  {
    episode: 135,
    youtube_link: "https://youtu.be/5rLCHDI8WRk",
    questions: [
      {
        timestamp: "1:10",
        question: "Hair Fall Due to Environment & Stress.",
      },
      {
        timestamp: "15:22",
        question: "Choose Yourself (CatFish).",
      },
      {
        timestamp: "32:30",
        question: "Hardship Of A Middle Class & Infertile Women.",
      },
    ],
  },
  {
    episode: 136,
    youtube_link: "https://youtu.be/e5INsvLDRKA",
    questions: [
      {
        timestamp: "3:34",
        question: "The Most Fragrant And Well-Dressed Pakistani In the UK.",
      },
      {
        timestamp: "23:58",
        question: "Not A BCCI Fan From India.",
      },
      {
        timestamp: "36:20",
        question: "Pakistani Women Stuck in Australia.",
      },
    ],
  },
  {
    episode: 138,
    youtube_link: "https://youtu.be/qtDm1A5u-d4",
    questions: [
      {
        timestamp: "6:17",
        question: "Gem Of A Person But Alcoholic (Personal Choice).",
      },
      {
        timestamp: "22:58",
        question: "Advice.",
      },
      {
        timestamp: "25:23",
        question: "Early Retirement Before 40.",
      },
      {
        timestamp: "40:36",
        question:
          "Exploring Success and Security And Future Plans In Pakistan.",
      },
    ],
  },
  {
    episode: 139,
    youtube_link: "https://youtu.be/HkaQgqtoOcA",
    questions: [
      {
        timestamp: "00:37",
        question: "Visa issues on Pakistani Passport.",
      },
      {
        timestamp: "04:21",
        question: "In Continuation to the price of integrity (Another Story).",
      },
      {
        timestamp: "12:26",
        question: "The real purpose of life After all the Desires done.",
      },
      {
        timestamp: "19:53",
        question: "Letter of Appreciation for Pakistani Youth.",
      },
      {
        timestamp: "35:37",
        question: "Inspiring Video That Helped me Achieve my dream.",
      },
      {
        timestamp: "42:39",
        question: "Brothers Marriage And Sisters Divorce Simultaneously.",
      },
    ],
  },
  {
    episode: 140,
    youtube_link: "https://youtu.be/RjbANPZxUEE",
    questions: [
      {
        timestamp: "01:26",
        question: "Buying Citizenship.",
      },
      {
        timestamp: "32:54",
        question:
          "Seeking Advice on Cultural Differences and Family Challenges.",
      },
    ],
  },
  {
    episode: 141,
    youtube_link: "https://youtu.be/kjl8ivZz8jw",
    questions: [
      {
        timestamp: "02:40",
        question:
          "Taking a Factual Approach to the world Made me Hate People Around Me.",
      },
      {
        timestamp: "18:28",
        question: "Gora Complex In Pakistan.",
      },
      {
        timestamp: "35:38",
        question: "Seeking Guidance, Life Challenging A Cry For Help.",
      },
      {
        timestamp: "01:00:59",
        question: "Property or Dadiyal (Grand Father Family) kai Masley.",
      },
    ],
  },
  {
    episode: 142,
    youtube_link: "https://youtu.be/696XxBDpm-c",
    questions: [
      {
        timestamp: "02:15",
        question: "Pakistan Travel Horrors.",
      },
      {
        timestamp: "26:46",
        question: "Choosing life Partner (Health Vs Beauty Vs Intelligence).",
      },
      {
        timestamp: "38:47",
        question: "Suffering from Doner Fatigue.",
      },
    ],
  },
  {
    episode: 143,
    youtube_link: "https://youtu.be/s-PrpCMffxk",
    questions: [
      {
        timestamp: "04:01",
        question: "Feeling Resentment After Divorce.",
      },
      {
        timestamp: "20:03",
        question: "Divorce Awareness After Marriage.",
      },
      {
        timestamp: "34:00",
        question: "Can Moving Abroad Go Wrong.",
      },
    ],
  },
  {
    episode: 144,
    youtube_link: "https://youtu.be/mzWSP_TokFI",
    questions: [
      {
        timestamp: "04:25",
        question: "Handling a roommate from Parasomnia.",
      },
      {
        timestamp: "12:29",
        question: "24 years Old seeking advice to make Marriage Better.",
      },
      {
        timestamp: "24:30",
        question: "Do Facial looks Matter?",
      },
      {
        timestamp: "35:10",
        question: "Paper Pencil and the Invoice.",
      },
      {
        timestamp: "46:35",
        question: "Thank you For being a Mentor.",
      },
    ],
  },
  {
    episode: 145,
    youtube_link: "https://youtu.be/i4yhtRKpzcg",
    questions: [
      {
        timestamp: "11:27",
        question:
          "Why does Pakistan not have Direct Flights from a Western country.",
      },
      {
        timestamp: "29:38",
        question: "Priorities Of Pakistan Social Audience.",
      },
      {
        timestamp: "43:49",
        question: "Life of Burmese.",
      },
    ],
  },
  {
    episode: 146,
    youtube_link: "https://youtu.be/EhpTRZNaIqM",
    questions: [
      {
        timestamp: "01:14",
        question: "Forced By Cousin to Get into a Physical Relationship.",
      },
      {
        timestamp: "16:50",
        question: "38-Year-Old Social Media Rat.",
      },
      {
        timestamp: "43:01",
        question: "My cook does not respect me.",
      },
      {
        timestamp: "55:30",
        question: "Atheist From India Questions About God.",
      },
    ],
  },
  {
    episode: 147,
    youtube_link: "https://youtu.be/M4cj_mEnrzk",
    questions: [
      {
        timestamp: "06:42",
        question: "Dirty South Asia.",
      },
      {
        timestamp: "18:29",
        question: "Daughter & Step Dad In US.",
      },
      {
        timestamp: "28:54",
        question: "Pakistanis and their Investment In Pakistan.",
      },
      {
        timestamp: "41:10",
        question: "Husband Nahi Puppet Chahiyai.",
      },
    ],
  },
  {
    episode: 148,
    youtube_link: "https://youtu.be/mSBj32P1sNw",
    questions: [
      {
        timestamp: "00:38",
        question: "Female Bloggers in Pakistan.",
      },
      {
        timestamp: "15:25",
        question: "High-Paying Skill vs. Degree.",
      },
      {
        timestamp: "34:02",
        question: "Regret Regarding Intercourse with Neighbors.",
      },
      {
        timestamp: "40:51",
        question: "Feeling Trapped Between Career Aspirations and Marriage.",
      },
    ],
  },
  {
    episode: 149,
    youtube_link: "https://youtu.be/Csp0_yvS6wM",
    questions: [
      {
        timestamp: "11:00",
        question: "Which Country Feels Like Home?",
      },
      {
        timestamp: "23:15",
        question: "Balancing Traditional Expectations (Seeking Advice).",
      },
      {
        timestamp: "41:50",
        question: "I want to Kill my father.",
      },
    ],
  },
  {
    episode: 150,
    youtube_link: "https://youtu.be/G_-91HrbapM",
    questions: [
      {
        timestamp: "06:54",
        question: "Confused between Mother and wife.",
      },
      {
        timestamp: "16:33",
        question: "Some One Tweeted About Me.",
      },
      {
        timestamp: "37:50",
        question: "Personal Development and Traditional Values.",
      },
      {
        timestamp: "51:30",
        question: "Pakistan To Stay Or Not To Stay.",
      },
    ],
  },
  {
    episode: 151,
    youtube_link: "https://youtu.be/27CGrAGSibg",
    questions: [
      {
        timestamp: "03:31",
        question: "Facing Backlash For working for An Israel Organisation.",
      },
      {
        timestamp: "17:06",
        question: "Father won't stop Having kids.",
      },
      {
        timestamp: "28:56",
        question: "Fathers Post Retirement Dilemma.",
      },
      {
        timestamp: "44:06",
        question: "Becoming A Parent in Pakistan in 2023.",
      },
    ],
  },
  {
    episode: 152,
    youtube_link: "https://youtu.be/D7kBGNTO7yA",
    questions: [
      {
        timestamp: "6:52",
        question: "Dating an instagram influencer.",
      },
      {
        timestamp: "30:43",
        question:
          "Escaping a forced marriage and making it to ivy league university as a pakistani women.",
      },
    ],
  },
  {
    episode: 153,
    youtube_link: "https://youtu.be/yLpLRXktr3k",
    questions: [
      {
        timestamp: "02:45",
        question: "Travelling to Taiwan with Research Samples.",
      },
      {
        timestamp: "16:28",
        question: "Experience in Work life, But Personal Life Is messed.",
      },
      {
        timestamp: "28:09",
        question: "Walking Tales in the UK.",
      },
      {
        timestamp: "44:01",
        question:
          "A Personal Journey The Unspoken Curriculum Of University Life.",
      },
      {
        timestamp: "51:47",
        question: "Seeking Insight On Potential Move.",
      },
    ],
  },
  {
    episode: 154,
    youtube_link: "https://youtu.be/fXg_FPC88fA",
    questions: [
      {
        timestamp: "03:58",
        question:
          "Is Peace with India the only way To increase Tourism In Pakistan.",
      },
      {
        timestamp: "25:59",
        question: "Savitha Bhabhi Of Pakistan.",
      },
      {
        timestamp: "37:15",
        question: "PIA Staff Skipping In Toronto.",
      },
      {
        timestamp: "59:10",
        question: "Didnt Wanted to Marry With My Cousin But...",
      },
    ],
  },
  {
    episode: 155,
    youtube_link: "https://youtu.be/ejFMuKxU1Pk",
    questions: [
      {
        timestamp: "8:05",
        question: "Astronomer Confused About His Future Career.",
      },
      {
        timestamp: "21:27",
        question: "Black Mirror In Real Life.",
      },
      {
        timestamp: "36:08",
        question: "Pakistanis That Hate their own country.",
      },
      {
        timestamp: "52:26",
        question: "Lack Of Engineering & IT Communities in Pakistan.",
      },
    ],
  },
  {
    episode: 156,
    youtube_link: "https://youtu.be/HQXgLKi9LSE",
    questions: [
      {
        timestamp: "02:08",
        question:
          "Facing Racism and Getting Bullied In Saudia Arabia & Pakistan.",
      },
      {
        timestamp: "16:42",
        question: "Life is More than Just A Success.",
      },
      {
        timestamp: "34:59",
        question: "Uber Or A Fake Taxi?",
      },
      {
        timestamp: "41:43",
        question: "LLB Lawyer In Pakistan.",
      },
    ],
  },
  {
    episode: 157,
    youtube_link: "https://youtu.be/iHsuN5tQkpA",
    questions: [
      {
        timestamp: "05:37",
        question:
          "Kiya Ghareeb ka Bacha Bhair Study kai Liyai nai Jaa Skh tha?",
      },
      {
        timestamp: "18:07",
        question: "Should I Confront My Boss.",
      },
      {
        timestamp: "29:09",
        question: "Vegetarian Food In Pakistan.",
      },
      {
        timestamp: "45:20",
        question: "Seeking Guidance on Online Income Opportunities.",
      },
    ],
  },
  {
    episode: 158,
    youtube_link: "https://youtu.be/dZU5Va-ABpM",
    questions: [
      {
        timestamp: "03:46",
        question: "Women's Safety in India.",
      },
      {
        timestamp: "23:27",
        question: "How to Convince My Father to Seek a Psychiatrist.",
      },
      {
        timestamp: "44:52",
        question: "A Boy with Very Poor Eyesight.",
      },
      {
        timestamp: "54:14",
        question:
          "Receiving Nudes Pictures from Past Relationships After Marriage.",
      },
    ],
  },
  {
    episode: 159,
    youtube_link: "https://youtu.be/m12JpbwdzCA",
    questions: [
      {
        timestamp: "04:14",
        question: "Canadian Husband Teasing Me.",
      },
      {
        timestamp: "15:22",
        question: "Why do We Hate One Another.",
      },
      {
        timestamp: "37:31",
        question: "Want to Escape The Matrix (Andrew Tate).",
      },
      {
        timestamp: "51:44",
        question: "Person with Kleptomania, Out of Control (The Stealers).",
      },
    ],
  },
  {
    episode: 160,
    youtube_link: "https://youtu.be/CBSBSmpT8uQ",
    questions: [
      {
        timestamp: "03:36",
        question: "Seeking Advice Relatives Flexing Dad Money & Loans.",
      },
      {
        timestamp: "24:02",
        question: "Plagiarism in University Abroad.",
      },
      {
        timestamp: "39:13",
        question: "An international Student Facing Depression.",
      },
      {
        timestamp: "57:14",
        question: "My Encounters with Girls.",
      },
    ],
  },
  {
    episode: 161,
    youtube_link: "https://youtu.be/h70uGeRWXak",
    questions: [
      {
        timestamp: "01:58",
        question: "Canada Ka Dhoka.",
      },
      {
        timestamp: "22:56",
        question: "Pakistan needs Hobbies.",
      },
      {
        timestamp: "41:53",
        question: "Can you Outrun A Snatcher.",
      },
      {
        timestamp: "01:01:28",
        question:
          "Empowered Woman: A Tale of Success and Financial Independence.",
      },
    ],
  },
  {
    episode: 162,
    youtube_link: "https://youtu.be/_SiBjPL1gLo",
    questions: [
      {
        timestamp: "08:03",
        question: "Corporate meetings In Haram Places.",
      },
      {
        timestamp: "23:39",
        question: "Pakistani Drama Ruined My Marriage.",
      },
      {
        timestamp: "49:31",
        question: "My Favorite Movies.",
      },
    ],
  },
  {
    episode: 163,
    youtube_link: "https://youtu.be/0BHdrvTGVs4",
    questions: [
      {
        timestamp: "04:59",
        question: "Nibba - Nibbi-BF/GF Relationships.",
      },
      {
        timestamp: "33:00",
        question: "An Albino Living in Pakistan.",
      },
      {
        timestamp: "53:13",
        question: "Marriage, Migration & Hardship of Parent.",
      },
      {
        timestamp: "01:15:55",
        question: "Difficulty in Engaging with People.",
      },
    ],
  },
  {
    episode: 164,
    youtube_link: "https://youtu.be/3dxt2tSL3EE",
    questions: [
      {
        timestamp: "11:52",
        question: "Pakistani Content Vs Dhruv Rathee.",
      },
      {
        timestamp: "40:55",
        question: "The Cost of Living Dilemma in Pakistan.",
      },
      {
        timestamp: "53:07",
        question: "The Frustrations of an Afghan.",
      },
      {
        timestamp: "01:06:31",
        question: '"I Am the Main Character": The Problem of Pakistan.',
      },
    ],
  },
  {
    episode: 165,
    youtube_link: "https://youtu.be/s9fqcmFXKc8",
    questions: [
      {
        timestamp: "04:01",
        question: "Father Embarrassing Us By Doing the Nagin Dance.",
      },
      {
        timestamp: "20:15",
        question:
          "Heeramandi: Land Claimed by Pakistan with a History Of India.",
      },
      {
        timestamp: "35:05",
        question: "Pakistan Cricket Board: The Biggest Joke?",
      },
      {
        timestamp: "59:55",
        question: "Thoughts on Classism in Our Society.",
      },
      {
        timestamp: "01:28:46",
        question: "Dad's Sister Getting Married into a Mysterious Family.",
      },
      {
        timestamp: "01:50:24",
        question: "Please Prove Me Wrong.",
      },
      {
        timestamp: "02:19:49",
        question: "A Unique Problem: Having No Problem.",
      },
    ],
  },

  {
    episode: 166,
    youtube_link: "https://youtu.be/Jxa3jA8p-Og",
    questions: [
      {
        timestamp: "06:25",
        question: "You're guilting me into not enjoying my life",
      },
      {
        timestamp: "22:28",
        question: "Journalism Di Behen***",
      },
      {
        timestamp: "35:20",
        question: "Cheering the critics of the enemy nation",
      },
      {
        timestamp: "49:15",
        question: "Preserving my ethnic culture",
      },
    ],
  },
  {
    episode: 167,
    youtube_link: "https://youtu.be/zLgHEKzzC8w",
    questions: [
      {
        timestamp: "09:33",
        question: "Ambani Wedding",
      },
      {
        timestamp: "29:44",
        question: "Facing Problems in WorkPlace",
      },
      {
        timestamp: "58:34",
        question: "Should I Buy A Gun!!",
      },
      {
        timestamp: "01:07:02",
        question: "How Do I Spend Money On My Self?",
      },
      {
        timestamp: "01:25:49",
        question: "How To Save My Marriage?",
      },
    ],
  },
  {
    episode: 168,
    youtube_link: "https://youtu.be/lWA1fjvXfB8",
    questions: [
      {
        timestamp: "00:57",
        question: "Mirzapur Walay Chacha",
      },
      {
        timestamp: "18:10",
        question: "Indian & Our Culture(PAKI)",
      },
      {
        timestamp: "36:00",
        question: "Why Being Different is not Tolerated",
      },
      {
        timestamp: "57:43",
        question: "Financial Abuse (Wife not Contributing)",
      },
      {
        timestamp: "01:13:15",
        question: "Letter of Appreciation",
      },
      {
        timestamp: "01:15:44",
        question: "This Country Future",
      },
    ],
  },
  {
    episode: 169,
    youtube_link: "https://youtu.be/xsPcNgmgJNE",
    questions: [
      {
        timestamp: "06:34",
        question: "Would Kamala Harris be Good for Pakistan",
      },
      {
        timestamp: "24:33",
        question: "Benefits of Losing Virginity At a Young Age",
      },
      {
        timestamp: "38:41",
        question: "My Friend is A Snake!!",
      },
      {
        timestamp: "47:26",
        question: "American Dream with Desi Mindset",
      },
      {
        timestamp: "01:02:14",
        question: "Parents are not giving me Respect",
      },
      {
        timestamp: "01:10:52",
        question: "My wife Wants me To do Second Marriage",
      },
    ],
  },
  {
    episode: 170,
    youtube_link: "https://youtu.be/S21SBLoNQJg",
    questions: [
      {
        timestamp: "05:52",
        question: "Melodi a disgusting meme",
      },
      {
        timestamp: "35:17",
        question: "I want to rekindle the relationship with my brother",
      },
      {
        timestamp: "52:28",
        question: "I am Interested in Marrying a non-muslim white man",
      },
      {
        timestamp: "01:01:11",
        question: "Professionalism vs Pakistani system",
      },
      {
        timestamp: "01:18:58",
        question: "Arranged Marriage is red flags",
      },
      {
        timestamp: "01:30:27",
        question: "what can you do when you are 16 years old",
      },
    ],
  },
  {
    episode: 171,
    youtube_link: "https://youtu.be/dslszYA1LP4",
    questions: [
      {
        timestamp: "09:14",
        question: "Handsome Cricketers",
      },
      {
        timestamp: "19:59",
        question: "Attracting Towards Cousins",
      },
      {
        timestamp: "26:57",
        question: "What Are Talented Pakistani Women Doing",
      },
      {
        timestamp: "45:41",
        question: "Help Me Solve This Mystery",
      },
      {
        timestamp: "54:22",
        question: "Indian Hindus Against Muslims",
      },
      {
        timestamp: "01:16:19",
        question: "Life in the UK Alone",
      },
      {
        timestamp: "01:31:35",
        question: "Listening to Ask Ganjiswag",
      },
      {
        timestamp: "01:46:08",
        question: "Can't Leave or Live in Karachi",
      },
      {
        timestamp: "01:52:37",
        question: "Why I Don't Travel East",
      },
    ],
  },
  {
    episode: 172,
    youtube_link: "https://youtu.be/_RTBFIW0VIU",
    questions: [
      {
        timestamp: "04:20",
        question: "My Boyfriend Is a Raja Beta",
      },
      {
        timestamp: "20:55",
        question: "How Can You Not Support Comedy?",
      },
      {
        timestamp: "29:33",
        question: "Thinking of Moving Back to Pakistan",
      },
      {
        timestamp: "50:06",
        question: "18-Year-Olds Working 24/7",
      },
      {
        timestamp: "57:16",
        question: "Addicted to Video Call Girl Services",
      },
    ],
  },
  {
    episode: 173,
    youtube_link: "https://youtu.be/-2MkPPjgq3c",
    questions: [
      {
        timestamp: "23:22",
        question: "Life With Hirsutism",
      },
      {
        timestamp: "35:27",
        question: "Pakistan Rupee Devaluation has Ruined my Life",
      },
      {
        timestamp: "50:36",
        question: "Testing Friendship",
      },
      {
        timestamp: "01:00:34",
        question: "Mid 40s Mai Weight Gain",
      },
    ],
  },
  {
    episode: 174,
    youtube_link: "https://youtu.be/q3QyrVfDub8",
    questions: [
      {
        timestamp: "03:28",
        question: "Extra Shaadi ke guests",
      },
      {
        timestamp: "16:00",
        question: "Karsaz Accident",
      },
      {
        timestamp: "31:15",
        question: "Pursuing Nursing abroad",
      },
      {
        timestamp: "47:09",
        question: "RIP Cricket",
      },
      {
        timestamp: "59:09",
        question: "Dominating Mom and Dumb Mother-in-Law",
      },
      {
        timestamp: "01:13:47",
        question: "Dating apps Scams",
      },
    ],
  },
  {
    episode: 175,
    youtube_link: "https://youtu.be/pwjOn624dGc",
    questions: [
      {
        timestamp: "08:18",
        question: "My Brother Is Behaving Like Elvish Yadav",
      },
      {
        timestamp: "19:32",
        question: "Lost All respect for My Family",
      },
      {
        timestamp: "29:33",
        question: "Paros (Neighbor) Wali Auntie Kai Masley",
      },
      {
        timestamp: "38:45",
        question: "Urgently Seeking Advice For My Grandmother",
      },
      {
        timestamp: "53:09",
        question: "Robbed By Our Islamic Brother",
      },
      {
        timestamp: "01:03:04",
        question: "My Husband is addicted to Video Call Girls",
      },
      {
        timestamp: "01:13:10",
        question: "Request for Advice",
      },
      {
        timestamp: "01:18:37",
        question: "Your Experience On Mathira Show",
      },
      {
        timestamp: "01:31:12",
        question: "Why People Like Ratan Tata Not Exist in Pakistan",
      },
    ],
  },
  {
    episode: 176,
    youtube_link: "https://youtu.be/fdwFSuo6kE4",
    questions: [
      {
        timestamp: "15:57",
        question: "Strip Club Mai Lut Gaya",
      },
      {
        timestamp: "24:54",
        question: "Our Love For Iran",
      },
      {
        timestamp: "33:24",
        question: "Drinking Problem Of My Partner",
      },
      {
        timestamp: "41:10",
        question: "Zakir Naik Visit to Pakistan",
      },
      {
        timestamp: "52:27",
        question: "Popcorn Brain Need Please Help",
      },
      {
        timestamp: "01:06:46",
        question: "My best friend Stole My Girl friend",
      },
      {
        timestamp: "01:14:32",
        question: "Why Do Pakistani Say Name Of Allah In every Sentence?",
      },
      {
        timestamp: "01:26:51",
        question: "Need Your Advice On Wedding tradition",
      },
      {
        timestamp: "01:34:53",
        question: "Painful Se*ual Activity",
      },
      {
        timestamp: "01:47:40",
        question: "My Father Left me With Huge Disadvantage",
      },
    ],
  },
  {
    episode: 177,
    youtube_link: "https://youtu.be/Exr9iJHkz2E",
    questions: [
      {
        timestamp: "07:44",
        question: "Ramiz Raja is a cancer to Pakistan cricket",
      },
      {
        timestamp: "20:04",
        question: "Glamorous life of Islamabad housewives",
      },
      {
        timestamp: "33:26",
        question: "Sick mentality of Pakistani men",
      },
      {
        timestamp: "47:10",
        question: "Dowry mindset in South Asia",
      },
      {
        timestamp: "59:22",
        question: "MAI GHAREEB HOUN",
      },
      {
        timestamp: "01:11:10",
        question: "Bhai Kiya Scene Hai?",
      },
      {
        timestamp: "01:24:45",
        question: "Minority rights in Pakistan",
      },
    ],
  },
  {
    episode: 178,
    youtube_link: "https://youtu.be/ynAIVYNpnKk",
    questions: [
      {
        timestamp: "15:07",
        question: "Hate Between Pakistan & Afghanistan",
      },
      {
        timestamp: "22:21",
        question: "School Friends Bullying Me Using My Parent's Name",
      },
      {
        timestamp: "30:23",
        question: "Blaming the Establishment ~ Geography of Pakistan",
      },
      {
        timestamp: "46:45",
        question: "Everyone’s True Colors Will Show",
      },
      {
        timestamp: "01:02:15",
        question: "31-Year-Old Failure",
      },
      {
        timestamp: "01:13:47",
        question: "YouTube Collaboration in Pakistan",
      },
      {
        timestamp: "01:23:06",
        question: "BBQ with Lamb Chops, Kebabs & Tabligh",
      },
    ],
  },
  {
    episode: 179,
    youtube_link: "https://youtu.be/njVGKxaF8xs",
    questions: [
      {
        timestamp: "17:32",
        question: "Got A Job On Only Fans",
      },
      {
        timestamp: "25:45",
        question: "Supporting My Dad's YouTube Dream",
      },
      {
        timestamp: "38:21",
        question: "Phupho and Kiss Destroyed My Life",
      },
      {
        timestamp: "51:20",
        question: "Layoff From It Company",
      },
      {
        timestamp: "01:04:34",
        question: "Unsaid Rivalry b/w Sisters",
      },
      {
        timestamp: "01:19:33",
        question: "Bought My Passport For 1300 Euro",
      },
      {
        timestamp: "01:36:26",
        question: "Kabhi Main Kabhi Tum FAN",
      },
      {
        timestamp: "01:53:42",
        question: "Difficult to get Visa On Pakistani Passport",
      },
      {
        timestamp: "02:05:11",
        question: "Rising Trends of Attacking Singers!",
      },
      {
        timestamp: "02:19:17",
        question: "Man Who Doesn't Understand Female Harassment!",
      },
      {
        timestamp: "02:37:38",
        question: "New Scam In UK By Pakistani",
      },
    ],
  },
  {
    episode: 180,
    youtube_link: "https://youtu.be/iTrfJxxRCho",
    questions: [
      {
        timestamp: "13:41",
        question: "Overcrowded Canada (Life in Toronto)",
      },
      {
        timestamp: "32:12",
        question: "Advice for ASK GANJISWAG",
      },
      {
        timestamp: "38:22",
        question: "Education shows In Pakistan??",
      },
      {
        timestamp: "59:22",
        question: "Cancer Runs In Our Family",
      },
      {
        timestamp: "01:09:37",
        question: "Gaali Galloch To Babar Azam?",
      },
      {
        timestamp: "01:21:53",
        question: "Why India Hates Us?",
      },
      {
        timestamp: "01:29:59",
        question: "Why Old People in Pakistan Don't Work?",
      },
      {
        timestamp: "01:42:51",
        question: "Nitish/Allahbadia Podcast",
      },
      {
        timestamp: "01:52:15",
        question: "My Story of Survival!",
      },
      {
        timestamp: "02:06:56",
        question: "My wife felt awkward when I took off my clothes",
      },
      {
        timestamp: "02:14:55",
        question: "Organized Scams!",
      },
      {
        timestamp: "02:28:15",
        question: "Alpha Women Stuck Marrying Beta Boys",
      },
    ],
  },
  {
    episode: 181,
    youtube_link: "https://youtu.be/0utMGJRRMTQ",
    questions: [
      {
        timestamp: "23:14",
        question: "Who Is Chapri?",
      },
      {
        timestamp: "38:42",
        question: "My Mind Is Confused! Education or Marriage?",
      },
      {
        timestamp: "50:24",
        question: "How to Give My Kids Financial Wings",
      },
      {
        timestamp: "01:04:15",
        question: "Pakistani Artists and the Indian Audience",
      },
      {
        timestamp: "01:14:58",
        question: "Pakistani Scammers in Canada",
      },
      {
        timestamp: "01:31:52",
        question: "Serious Talk About Islam & Nuclear Power",
      },
      {
        timestamp: "01:35:52",
        question: "No Hope Left for This Country",
      },
      {
        timestamp: "01:44:03",
        question: "Godi Media Destroyed Secularism",
      },
      {
        timestamp: "02:00:22",
        question: "I Am Going Crazy ~ Noise in My House",
      },
      {
        timestamp: "02:08:54",
        question: "The Curious Case of Royal Enfield in India",
      },
      {
        timestamp: "02:23:57",
        question: "7 Years to Get My Australian Visa ~ Totally Worth It",
      },
      {
        timestamp: "02:34:14",
        question: "Scam in Karachi Office",
      },
      {
        timestamp: "02:38:58",
        question: "Teach Me Your Memory Superpowers",
      },
    ],
  },
  {
    episode: 182,
    youtube_link: "https://youtu.be/p-N9kNxFvBg",
    questions: [
      {
        timestamp: "00:00",
        question: "Summary of My China Trip",
      },
      {
        timestamp: "14:48",
        question: "Reading Comments",
      },
      {
        timestamp: "25:25",
        question: "Triangular Situationship",
      },
      {
        timestamp: "31:01",
        question: "Frustrated Pakistani Doctor and Educationalist",
      },
      {
        timestamp: "44:55",
        question: "Why Do Men Stare?",
      },
      {
        timestamp: "58:38",
        question:
          "Why Doesn't Pakistan Produce Chefs Like Ranbir Brar or Iconic Dishes Like Butter Chicken?",
      },
      {
        timestamp: "01:18:20",
        question: "Stereotype of Unhygienic Indians Abroad",
      },
      {
        timestamp: "01:43:29",
        question: "Work Culture Problems in a Startup Company",
      },
      {
        timestamp: "02:04:02",
        question: "Brother-in-Law Problem",
      },
      {
        timestamp: "02:14:15",
        question: "Qawwali Night: A Spectacle of Money",
      },
      {
        timestamp: "02:24:59",
        question:
          "Announcement/Permission from Junaid Bhai to Start My Own Channel",
      },
    ],
  },
  {
    episode: 183,
    youtube_link: "https://youtu.be/pXSydSj8q_M",
    questions: [
      {
        timestamp: "27:20",
        question: "Time to turn the tables",
      },
      {
        timestamp: "42:07",
        question: "Husband doesn’t like it when I dress up for him",
      },
      {
        timestamp: "53:45",
        question: "How you got Access to the world with no so strong Passport",
      },
      {
        timestamp: "01:09:51",
        question: "Obsession with Kadhai and Biryani",
      },
      {
        timestamp: "01:20:42",
        question: "To trust Pakistani men or not?",
      },
      {
        timestamp: "01:33:45",
        question: "The Palestinian Guilt – To Migrate or Not to Migrate",
      },
      {
        timestamp: "01:47:18",
        question: "Thoughts on the 12th fail and the toxic UPSC narrative",
      },
      {
        timestamp: "02:04:51",
        question: "UPDATE: My wife wants me to do a second marriage...",
      },
      {
        timestamp: "02:14:40",
        question: "Tourism conundrum of Indian cities",
      },
      {
        timestamp: "02:30:43",
        question: "Suffering From Success!",
      },
    ],
  },
  {
    episode: 184,
    youtube_link: "https://youtu.be/YLT2igrJWeE",
    questions: [
      {
        timestamp: "22:27",
        question: "How Ask Ganjiswag Has Evolved",
      },
      {
        timestamp: "31:13",
        question: "Lost Intimacy in Marriage",
      },
      {
        timestamp: "38:45",
        question: "A Cautionary Tale: Avoiding a Costly Scam",
      },
      {
        timestamp: "50:53",
        question: "UAE Blanket Visa Ban on Pakistanis",
      },
      {
        timestamp: "01:01:30",
        question: "Gen Z ~ Frenzy",
      },
      {
        timestamp: "01:13:23",
        question: "Parents' Demands Are Sending Me into Depression!",
      },
      {
        timestamp: "01:21:53",
        question: "Open Relationship Lifestyle",
      },
      {
        timestamp: "01:36:45",
        question: "Topi Culture in Our Society",
      },
      {
        timestamp: "01:50:58",
        question: "Parents Installed CCTV in My Room",
      },
      {
        timestamp: "01:57:20",
        question: "Why Do Our Friends Do This?",
      },
    ],
  },
  {
    episode: 185,
    youtube_link: "https://youtu.be/kM7BKguzoS4",
    questions: [
      {
        timestamp: "13:19",
        question: "Junaid Akram Content",
      },
      {
        timestamp: "22:56",
        question: "Laut Ao Junaid Akram",
      },
      {
        timestamp: "30:07",
        question: "My Brother Inspired By Vloggers",
      },
      {
        timestamp: "43:05",
        question: "Moving Out From India To USA",
      },
      {
        timestamp: "55:58",
        question: "Public Filming in Food Court",
      },
      {
        timestamp: "01:03:23",
        question: "Side Effects Of AI",
      },
      {
        timestamp: "01:12:41",
        question: "My Father is Always in Banyaan & Underwear!",
      },
      {
        timestamp: "01:18:15",
        question: "Pakistani Food Truck",
      },
      {
        timestamp: "01:27:57",
        question: "Shutup Call To Desi Canadians",
      },
      {
        timestamp: "01:41:11",
        question: "People Are Jealous of My Scholarship!!",
      },
    ],
  },
  {
    episode: 186,
    youtube_link: "https://youtu.be/ZssqF-lsrBA",
    questions: [
      {
        timestamp: "27:18",
        question: "Diljit's Boyfriend Kylie Girl Friend",
      },
      {
        timestamp: "43:37",
        question: "Call Out Those Neglecting Our Country's Reputation",
      },
      {
        timestamp: "57:08",
        question: "Is China living in 2075?",
      },
      {
        timestamp: "01:02:27",
        question: "I Hate My Nursing Career",
      },
      {
        timestamp: "01:11:35",
        question: "Husband does Domestic Viol*nce",
      },
      {
        timestamp: "01:23:40",
        question: "Why Are People Obsessed With Airports?",
      },
      {
        timestamp: "01:34:32",
        question: "My Father Doesn't Want Me With Him in Australia",
      },
      {
        timestamp: "01:47:25",
        question: "Pakistan Grooming Gangs in The UK",
      },
      {
        timestamp: "02:06:57",
        question: "My Insecure Mother In Law",
      },
      {
        timestamp: "02:19:06",
        question: "Kya Mai Pagal Hoon?",
      },
    ],
  },
  {
    episode: 187,
    youtube_link: "https://youtu.be/8VpSLzBNPrE",
    questions: [
      {
        timestamp: "24:54",
        question: "My GF is an OnlyFans Model",
      },
      {
        timestamp: "38:24",
        question: "An Uber Ride with a Pakistani",
      },
      {
        timestamp: "53:00",
        question: "Bedroom Problems with 2 Wives",
      },
      {
        timestamp: "01:00:58",
        question: "Women's Biological Clock",
      },
      {
        timestamp: "01:16:19",
        question: "Arab is a Western World",
      },
      {
        timestamp: "01:37:02",
        question: "Saaree Chor Maasi",
      },
      {
        timestamp: "01:51:36",
        question: "Lack of Documentary Culture in Pakistan",
      },
      {
        timestamp: "02:17:58",
        question: "The Unspoken Burden of Uninvited Guests",
      },
      {
        timestamp: "02:32:39",
        question: "International student under the bus",
      },
    ],
  },
  {
    episode: 188,
    youtube_link: "https://youtu.be/BI2h3B1VSXo",
    questions: [
      {
        timestamp: "17:39",
        question: "My Latest Affair",
      },
      {
        timestamp: "26:07",
        question: "Racism against Chinese Vs Racism against South Asians",
      },
      {
        timestamp: "39:36",
        question: "Farigh DEVAR Wants to Marry",
      },
      {
        timestamp: "52:01",
        question:
          "Why is Pseudoscience like astrology so popular in our region?",
      },
      {
        timestamp: "01:08:30",
        question: "Divorced Wife But still Behaving like A Wife",
      },
      {
        timestamp: "01:22:47",
        question: "Is My Husband G*Y?",
      },
      {
        timestamp: "01:37:14",
        question: "A Tale of the Curious, ill-mannered Uncle",
      },
      {
        timestamp: "01:46:27",
        question: "GTA Pakistan Before GTA 6",
      },
      {
        timestamp: "02:22:29",
        question: "My Husband's Pokemon Addiction",
      },
      {
        timestamp: "02:32:54",
        question: "A Tale of Indo-Pak Love!",
      },
      {
        timestamp: "03:03:28",
        question: "Pak Celeb's Online Trolling",
      },
    ],
  },
  {
    episode: 189,
    youtube_link: "https://youtu.be/KTKVWnp0BW0",
    questions: [
      {
        timestamp: "27:08",
        question: "Indian Lobby in Tech Sector",
      },
      {
        timestamp: "45:07",
        question: "Why Every Door is Closed for Pakistanis?",
      },
      {
        timestamp: "59:26",
        question: "Husband asks me to be Frank with his friend",
      },
      {
        timestamp: "01:11:51",
        question: "Parents Dismiss My Boyfriend as a Loser",
      },
      {
        timestamp: "01:28:10",
        question: "Gheebat Karne wala Khandan",
      },
      {
        timestamp: "01:39:18",
        question: "Financial Indiscipline of My Family",
      },
      {
        timestamp: "01:56:19",
        question: "Unprofessionalism in Desi Community in Abroad",
      },
      {
        timestamp: "02:22:33",
        question: "You Are The Loneliest at The Top",
      },
      {
        timestamp: "02:51:21",
        question: "Surviving under Censorship",
      },
    ],
  },
  {
    episode: 190,
    youtube_link: "https://youtu.be/rzUk5RluK88",
    questions: [
      {
        timestamp: "17:05",
        question: "Losing My Mind After Marriage!",
      },
      {
        timestamp: "32:55",
        question: "Dhullay Kai Bhai Ka Masla",
      },
      {
        timestamp: "43:19",
        question: "Pakistan's New Role in SARC",
      },
      {
        timestamp: "55:03",
        question: "Positive Influence on My Life",
      },
      {
        timestamp: "01:20:38",
        question: "How Do I Keep My Son on the Right Path in the UK",
      },
      {
        timestamp: "01:33:04",
        question: "A Perspective on Workplace Discrimination",
      },
      {
        timestamp: "01:50:25",
        question: "25 Years of Bottled Up Pain!!",
      },
      {
        timestamp: "02:02:34",
        question: "Brotherhood Beyond Borders!!",
      },
      {
        timestamp: "02:10:33",
        question: "Shoaib Akhtar: Last Superstar of Pakistan Cricket",
      },
    ],
  },
  {
    episode: 191,
    youtube_link: "https://youtu.be/W1f_-DE8TOA",
    questions: [
      {
        timestamp: "18:57",
        question: "Mohammad Shami ka Roza During Cricket match india",
      },
      {
        timestamp: "27:28",
        question: "My Experience Working at a Pakistani Restaurant",
      },
      {
        timestamp: "36:10",
        question: "Nostalgia",
      },
      {
        timestamp: "39:39",
        question: "Nepotism In Cricket",
      },
      {
        timestamp: "44:01",
        question: "Mujhay Sudharein",
      },
      {
        timestamp: "49:31",
        question: "Using intimacy in marriage as a tool for compliance",
      },
      {
        timestamp: "01:00:11",
        question: "Unmatched Curiosity of Desis",
      },
      {
        timestamp: "01:15:35",
        question: "Dealing with a Racist neighbour in America",
      },
      {
        timestamp: "01:25:26",
        question: "How Do I Detach From My Father?",
      },
      {
        timestamp: "01:36:27",
        question: "A long overdue thanks for being you",
      },
      {
        timestamp: "01:59:11",
        question: "Beating children as a mean to discipline",
      },
      {
        timestamp: "02:13:33",
        question: "Cubicle Slavery or break free?",
      },
      {
        timestamp: "02:29:01",
        question: "Visa Chaos at the US Embassy",
      },
      {
        timestamp: "02:44:04",
        question: "Appreciation for your Work",
      },
      {
        timestamp: "02:47:53",
        question: "Constructive Feedback",
      },
      {
        timestamp: "02:56:55",
        question: "Tell me Why?",
      },
      {
        timestamp: "03:08:43",
        question: "Request for Fair and Neutral Perspective",
      },
    ],
  },
  {
    episode: 192,
    youtube_link: "https://youtu.be/_MHa2VugX5Q",
    questions: [
      {
        timestamp: "30:49",
        question: "Most Embarrassing Pakistani Restaurant Abroad",
      },
      {
        timestamp: "45:46",
        question: "Lesb*an Wife",
      },
      {
        timestamp: "56:55",
        question: "Double Meaning Reels on Instagram",
      },
      {
        timestamp: "01:04:50",
        question: "Cheating Husband Having an Affair With Cousin",
      },
      {
        timestamp: "01:12:25",
        question: "The Obsession of Pakistanis Defeating India",
      },
      {
        timestamp: "01:20:59",
        question: "Adoption Within Family",
      },
      {
        timestamp: "01:37:43",
        question: "Fake G*y Asylum in UK",
      },
      {
        timestamp: "01:54:37",
        question: "Checking Out Girls in Europe",
      },
      {
        timestamp: "02:14:07",
        question: "Random Movie Recommendation",
      },
      {
        timestamp: "02:17:26",
        question: "Family Wedding Expectations",
      },
      {
        timestamp: "02:34:56",
        question: "How to Deal With Negativity",
      },
      {
        timestamp: "02:46:08",
        question: "A Visit That Changed How I See My Dad Forever",
      },
    ],
  },
  {
    episode: 193,
    youtube_link: "https://youtu.be/FSA5SgBTAUo",
    questions: [
      {
        timestamp: "21:41",
        question: 'My Husband Is "ABRAR" character from Animal Movie',
      },
      {
        timestamp: "34:10",
        question: "UBER Incident in Dubai",
      },
      {
        timestamp: "54:57",
        question: "My Divorce Story",
      },
      {
        timestamp: "01:14:55",
        question: "Why Is Respect Only for the Successful?",
      },
      {
        timestamp: "01:22:44",
        question: "Norwegian University Ko Loot Liya",
      },
      {
        timestamp: "01:40:40",
        question: "Victim Card: Pakistan's Favorite Move",
      },
      {
        timestamp: "01:57:52",
        question: "How Far Can My Fighting Spirit Take Me?",
      },
      {
        timestamp: "02:12:26",
        question: "My Life Is Getting H*ll Day by Day!",
      },
      {
        timestamp: "02:20:50",
        question: "Suggestions to Improve Your Punjabi",
      },
      {
        timestamp: "02:25:00",
        question: "Forced Cousin Marriage",
      },
      {
        timestamp: "02:33:38",
        question: 'Wife Banned Me from Watching "Ask Ganjiswag"',
      },
    ],
  },
  {
    episode: 194,
    youtube_link: "https://youtu.be/Dt_Xbel8Afs",
    questions: [
      {
        timestamp: "17:05",
        question: "Fighter Jets in Pakistan",
      },
      {
        timestamp: "28:43",
        question: "Tharki Father In Law: Husband Not Understanding",
      },
      {
        timestamp: "41:19",
        question: "Another Pakistani Making Us Proud In Australia Scam",
      },
      {
        timestamp: "52:07",
        question: "Digital Subscriptions Holding Me Hostage",
      },
      {
        timestamp: "01:07:45",
        question: "Too Many Female Friends Hampring My Marriage",
      },
      {
        timestamp: "01:15:21",
        question:
          "Curves Are A Curse: Wearing Double Cloths to Hide Body in Summer",
      },
      {
        timestamp: "01:23:11",
        question: "Career In Slum & Life in Dubai",
      },
      {
        timestamp: "01:35:36",
        question: "The Rishta App Trend",
      },
      {
        timestamp: "01:49:03",
        question: "A Girl From KPK Making Her Way Abroad",
      },
    ],
  },
  {
    episode: 195,
    youtube_link: "https://youtu.be/WsLSegvZT9I",
    questions: [
      {
        timestamp: "19:16",
        question: "The Rat Race Of Studying & Settling Abroad",
      },
      {
        timestamp: "32:25",
        question: "I lied about my Past Before Marriage",
      },
      {
        timestamp: "43:59",
        question: "Caught My Son Watching P*rn",
      },
      {
        timestamp: "54:24",
        question: "Hindu Sikh Last Names Of Muslims In Pakistan",
      },
      {
        timestamp: "01:09:31",
        question: "Burning KFC And PEPSI",
      },
      {
        timestamp: "01:32:51",
        question: "Erectile Disfunction ~ Near To Suc*de",
      },
      {
        timestamp: "01:37:10",
        question: "Have We Missed The Bus?",
      },
      {
        timestamp: "01:51:52",
        question: "Career Advice: To Do a Job At a Night Club",
      },
      {
        timestamp: "01:55:34",
        question: "Flight Attendant Videos & Desi People",
      },
      {
        timestamp: "02:01:29",
        question: "Cheater Girlfrined",
      },
      {
        timestamp: "02:09:50",
        question: "Break",
      },
      {
        timestamp: "02:20:14",
        question: "Emotionally Attached to my Gadgets",
      },
      {
        timestamp: "02:29:54",
        question: "Success Dream",
      },
      {
        timestamp: "02:35:32",
        question: "Hate My Beautiful Selfless MOM!",
      },
    ],
  },
  {
    episode: 196,
    youtube_link: "https://youtu.be/OFzy5QdpAVc",
    questions: [
      {
        timestamp: "27:34",
        question: "Ch*du CID",
      },
      {
        timestamp: "35:40",
        question: "Fat Guy Who has Man B**ps",
      },
      {
        timestamp: "51:23",
        question: "Education is Free",
      },
      {
        timestamp: "54:22",
        question: "Gold Rush at an Indian home",
      },
      {
        timestamp: "01:13:17",
        question: "Studying in Russia",
      },
      {
        timestamp: "01:22:25",
        question: "Pakistan channels banned in India",
      },
      {
        timestamp: "01:25:22",
        question: "Lost My Self For Permanent Residency",
      },
      {
        timestamp: "01:37:19",
        question: "PSL Feels Thanda This Time",
      },
      {
        timestamp: "01:48:04",
        question: "Heartfelt Message From A Businessman",
      },
      {
        timestamp: "01:56:55",
        question: "A Thoughtful Note On Minorities in Pakistan",
      },
      {
        timestamp: "02:08:44",
        question: "Umrah, Reverence & Call for Reform",
      },
      {
        timestamp: "02:30:00",
        question: "Please Teach Us Some Etiquette",
      },
    ],
  },
  {
    episode: 198,
    youtube_link: "https://youtu.be/YTXKS45gBC0",
    questions: [
      {
        timestamp: "05:34",
        question: "Randians(Indians) Firing Pakistani By Being Racist",
      },
      {
        timestamp: "20:20",
        question: "Pakistan Vs UAE",
      },
      {
        timestamp: "40:09",
        question: "How can I help your Library Initiative",
      },
      {
        timestamp: "56:52",
        question: "I feel Sad that the War is over!!",
      },
      {
        timestamp: "01:05:32",
        question: "Your channel changed my perspective",
      },
      {
        timestamp: "01:30:50",
        question: "Scam & Fraud Stories",
      },
      {
        timestamp: "01:35:07",
        question: "Victim of Scam",
      },
      {
        timestamp: "01:46:23",
        question: "The Butterfly Effect",
      },
    ],
  },
  {
    episode: 199,
    youtube_link: "https://youtu.be/Xk5UBmemac0",
    questions: [
      {
        timestamp: "09:55",
        question: "Meem say Mohabbat and the Art of becoming Celebrity",
      },
      {
        timestamp: "26:09",
        question: "Did Islam Rule over Hindus?",
      },
      {
        timestamp: "42:14",
        question: "Husband is Always Playing Good",
      },
    ],
  },
  {
    episode: 200,
    youtube_link: "https://youtu.be/xVf8AfhfGjQ",
    questions: [
      {
        timestamp: "14:04",
        question: "Forcefully Married to Someone by My Parents' Choice",
      },
      {
        timestamp: "26:25",
        question: "Studying Abroad while Managing Schizophrenia",
      },
      {
        timestamp: "38:15",
        question: "Wrapped in Confusion ~ Cousin Triangle",
      },
      {
        timestamp: "01:03:43",
        question: "Seeking your Inside Gambling Addiction Among Students",
      },
      {
        timestamp: "01:24:46",
        question: "My Parents are Cheating",
      },
      {
        timestamp: "01:39:48",
        question: "Life or De*th Situation for Me",
      },
      {
        timestamp: "02:06:55",
        question: "The Cinema Illiteracy of Pakistan",
      },
    ],
  },
];

async function main() {
  for (const ep of rawEpisodes) {
    await db.episode.create({
      data: {
        number: ep.episode,
        videoUrl: ep.youtube_link,
        questions: {
          create: ep.questions.map((q) => ({
            timestamp: q.timestamp,
            text: q.question,
          })),
        },
      },
    });
  }
}

main()
  .then(() => console.log("Seeding done"))
  .catch(console.error)
  .finally(() => db.$disconnect());
