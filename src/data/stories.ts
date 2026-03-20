import aidenPhoto from "@/assets/photos/aiden.jpg";
import rohanPhoto from "@/assets/photos/rohan.jpg";
import marcusPhoto from "@/assets/photos/marcus.jpg";
import eliPhoto from "@/assets/photos/eli.jpg";
import danielPhoto from "@/assets/photos/daniel.jpg";
import samPhoto from "@/assets/photos/sam.jpg";
import theoPhoto from "@/assets/photos/theo.jpg";
import leoPhoto from "@/assets/photos/leo.jpg";

export interface StoryColor {
  stripe: string;
  tagBg: string;
  tagText: string;
  hlBg: string;
  takeBg: string;
  border: string;
}

export interface Story {
  name: string;
  age: number;
  color: StoryColor;
  identity: string;
  photo: string;
  quote: string;
  story: string[];
  highlight: string;
  takeaway: string;
}

export const stories: Story[] = [
  {
    name: "Aiden", age: 22,
    color: { stripe: "#4361ee", tagBg: "#eaefff", tagText: "#4361ee", hlBg: "#f0f4ff", takeBg: "#f8faff", border: "#4361ee" },
    identity: "Gay",
    photo: aidenPhoto,
    quote: "I thought being gay meant something was wrong with me. It took years to understand it was the most right thing about me.",
    story: [
      "I grew up in a small town where the word gay was used as an insult. Every time I heard it I felt something cold move through me, because I knew, somewhere deep down, that it described me. I spent most of secondary school performing straightness with an exhausting kind of precision. I talked about girls I did not feel anything for. I laughed at jokes that were aimed at people like me.",
      "The shame was not loud. It was quiet and constant, like background noise you eventually stop hearing consciously but that still wears you down. I did not tell anyone until I was nineteen. Not because I was waiting for the right moment, but because every moment felt wrong.",
      "My first honest conversation was with my university roommate, James, at two in the morning after a party. I did not plan it. It just came out. He went very still, and then he said: yeah, I know. I have known for a while. He had been waiting for me to be ready. I cried so hard I could not speak.",
      "Coming out did not fix everything overnight. The shame had years of momentum. But slowly, with the help of therapy and a community I found online and then in person, I started to understand that being gay was not a flaw I had to manage. It was just part of who I was. As natural as the colour of my eyes.",
      "I am twenty-two now and I have a boyfriend and a group of friends who know all of me. I still live in a world that is not always safe. But I live in it as myself, and that makes everything different."
    ],
    highlight: "Being gay was not a flaw I had to manage. It was just part of who I was.",
    takeaway: "Shame is not a personality trait. It is something that gets put on us. With time, honesty, and the right people around you, it does not have to stay."
  },
  {
    name: "Rohan", age: 28,
    color: { stripe: "#9b5de5", tagBg: "#f3e8ff", tagText: "#9b5de5", hlBg: "#f8f0ff", takeBg: "#fcf8ff", border: "#9b5de5" },
    identity: "Gay",
    photo: rohanPhoto,
    quote: "My culture said gay men do not exist in our community. I had to prove to myself that we do.",
    story: [
      "I am South Asian. I grew up in a household where homosexuality was not discussed because, in my family's understanding, it simply did not exist in our culture. It was something Western. Something foreign. This belief was held with certainty by people who loved me very much, and it made my reality invisible in a way that was hard to name.",
      "I knew I was gay from around thirteen. I spent the next ten years in a silence so complete that it became its own kind of identity. I was the dutiful son, the overachieving student, the boy who would make everyone proud. I built that version of myself like armour.",
      "Coming out to my parents at twenty-six was the most terrifying thing I have ever done. My mother wept. My father left the room. For three months, we barely spoke. I had prepared for this. I had told myself that their reaction was not the same as their love. But knowing that and feeling it are very different things.",
      "What I did not prepare for was the slow change. My mother began calling again, cautiously at first. My father started asking about my life in small ways. When I introduced them to my partner last year, my mother made his favourite food without being asked. She had looked up what he liked. I had to excuse myself to cry in the bathroom.",
      "Gay South Asian men exist. We have always existed. My visibility matters not just for me but for the next boy in a household like mine who needs to know that a full life is possible."
    ],
    highlight: "Gay South Asian men exist. We have always existed.",
    takeaway: "Cultural invisibility is its own kind of harm. You are not betraying your heritage by being honest about who you are. You are adding your truth to it."
  },
  {
    name: "Marcus", age: 35,
    color: { stripe: "#00b4d8", tagBg: "#e0f7fb", tagText: "#0077a8", hlBg: "#e8fafd", takeBg: "#f4fcfe", border: "#00b4d8" },
    identity: "Gay",
    photo: marcusPhoto,
    quote: "I came out at thirty. People said I was late. I said I was exactly on time.",
    story: [
      "For most of my twenties I was married. Not unhappily, exactly, but with a persistent sense that something was missing. I had pushed down my attraction to men for so long that I had genuinely lost track of where the suppression ended and where I began. I told myself I was just wired differently. That everyone felt this way and just got on with it.",
      "The marriage ended for reasons that were not about my sexuality, but the space it created let me be honest with myself in a way I had not been before. I was thirty-one when I said the word gay out loud for the first time, alone in my car in a car park, to no one. I sat there for an hour.",
      "Coming out in your thirties is its own experience. There is a gay community that was built around younger experiences, and sometimes you feel like you missed the manual. You are learning things about yourself that others sorted out at twenty. You meet men your age who have been out for fifteen years and you feel both behind and strangely free.",
      "I am thirty-five now. I have been in a relationship for two years with a man who has been out since university and who finds my perspective on things genuinely interesting rather than a problem to fix. I have friends who came out late like me and friends who came out early. The thing that matters is not the timing. It is the honesty.",
      "If you are reading this and you are in your thirties or forties or later and you are still figuring this out, there is no expiry date on becoming yourself."
    ],
    highlight: "There is no expiry date on becoming yourself.",
    takeaway: "Coming out later does not mean you were lying before. It means you were surviving with the tools you had. The timing does not define the validity of the identity."
  },
  {
    name: "Eli", age: 18,
    color: { stripe: "#10b981", tagBg: "#d1fae5", tagText: "#059669", hlBg: "#f0fdf4", takeBg: "#f8fdfa", border: "#10b981" },
    identity: "Gay",
    photo: eliPhoto,
    quote: "I came out at sixteen and lost two friends. I gained something I cannot explain except to say I finally existed.",
    story: [
      "I was sixteen when I told three of my closest friends. I had rehearsed the conversation until it felt like a script. What I did not rehearse was two of them going quiet in a way that never fully lifted, and the third one hugging me so hard I could not breathe. Two people I had known since primary school suddenly felt like strangers. One person I had underestimated became my closest friend.",
      "Grief is not the word you expect to feel when you come out. But I grieved those friendships even as I understood that they were not deep enough to hold the truth of who I was. I was angry for a while. Then I was sad. Then I was something that took longer to name, which was grateful, because I had stopped pretending.",
      "Being out at eighteen means navigating a world that is sometimes welcoming and sometimes not. My school was mixed. Some teachers were brilliant. One boy in my class made my life difficult for a term. But I had found a group of people online and then in person who saw me, and that changed what I could tolerate.",
      "I am not naive about the world. I know things will not always be easy. But I know who I am, and I have known since I was fourteen, and the relief of not hiding that every day is something I would not trade for anything.",
      "If you are a gay teenager reading this, the people who leave because of who you are were not the people you needed. The people who stay, and the new ones who arrive, will be worth it."
    ],
    highlight: "The people who leave because of who you are were not the people you needed.",
    takeaway: "Losing people when you come out is real grief and you are allowed to feel it. But it also makes room for people who can hold all of who you are."
  },
  {
    name: "Daniel", age: 45,
    color: { stripe: "#f4824a", tagBg: "#fdeee6", tagText: "#f4824a", hlBg: "#fff4ef", takeBg: "#fff9f7", border: "#f4824a" },
    identity: "Gay",
    photo: danielPhoto,
    quote: "I have a husband, a dog, and a mortgage. I just got here differently than most people expected.",
    story: [
      "I came out at thirty-eight. By then I had built a full life as a straight man, or what looked like one from the outside. A career, friendships, a relationship that I ended after five years because I could not be honest in it. I had told myself so many stories about why I was not gay that I had almost convinced myself.",
      "The thing that cracked it was seeing a gay couple in a cafe being completely ordinary. Drinking coffee, reading, not performing anything. Just existing. I sat across the room and felt something shift so violently I had to leave. I walked around the city for two hours.",
      "My coming out at thirty-eight was not dramatic. It happened in stages, to different people, over about a year. My sister was first. She said she had wondered. My best friend from university was second. He said he had always thought so. I was apparently the last to know.",
      "What surprised me most was the community. I had assumed I was too old to fit anywhere. That the gay world was for younger men and I had missed it. What I found instead was a wide, varied, imperfect, generous community of men who had all got here differently and were all just getting on with living.",
      "I have been with my husband for four years. We argue about washing up and watch too much television and I have never been more at home in my life. The version of this life that I almost never got to have is the realest thing I know."
    ],
    highlight: "The life I almost never got to have is the realest thing I know.",
    takeaway: "A gay life looks like whatever you build it to be. There is no template, no age limit, and no version of arrival that comes too late."
  },
  {
    name: "Sam", age: 24,
    color: { stripe: "#6610f2", tagBg: "#ece5ff", tagText: "#6610f2", hlBg: "#f2ecff", takeBg: "#f9f7ff", border: "#6610f2" },
    identity: "Gay",
    photo: samPhoto,
    quote: "Mental health and sexuality were two conversations I kept separate for years. Putting them together changed everything.",
    story: [
      "I have anxiety and depression. I am also gay. For most of my early twenties these felt like two separate problems that I managed in two separate compartments. Therapy was for the anxiety. Being gay was something I dealt with privately, mostly by not dealing with it at all.",
      "What I did not understand until I was twenty-two was how much those two things were connected. The internalised shame around my sexuality was feeding the anxiety. The depression was being worsened by the isolation of staying in the closet. I was managing the symptoms of a problem I had not named.",
      "My therapist asked me once: is there anything you have not told me? I said no. She waited. I started crying. I had not planned to come out in a therapy session. But once I said it, something started untangling.",
      "I came out publicly about six months after that. Not in a big announcement, just gradually, person by person, starting with the people I trusted most. Each conversation made the next one slightly easier. By the time I told my parents I was almost calm.",
      "Gay men have higher rates of anxiety and depression. That is not because being gay is a problem. It is because hiding yourself is. The treatment is not just medication or therapy in isolation. It is also honesty, community, and being allowed to exist as yourself."
    ],
    highlight: "Hiding yourself is the problem. The treatment is honesty, community, and being allowed to exist.",
    takeaway: "If you are struggling with mental health and also carrying something unsaid about your identity, those things may be more connected than they appear. You deserve support for all of it."
  },
  {
    name: "Theo", age: 31,
    color: { stripe: "#38bdf8", tagBg: "#e0f2fe", tagText: "#0369a1", hlBg: "#f0f9ff", takeBg: "#f8fcff", border: "#38bdf8" },
    identity: "Gay",
    photo: theoPhoto,
    quote: "Sport was where I felt most myself and most hidden at the same time.",
    story: [
      "I played football from the age of seven. It was the place I felt most at home in my body, most connected to other people, most alive. It was also the place where being gay felt most impossible. The dressing room culture was not actively hostile, but it was a world built entirely around a certain kind of heterosexual masculinity that left no room for me.",
      "I came out to my club at twenty-seven. I had been out to friends for three years by then, but sport felt different. I told my captain first, in his car outside training. He was quiet for a long time. Then he said: you are still our best midfielder. That was it.",
      "The team response was mixed but mostly good. One player became distant. The rest adjusted faster than I expected. The hardest part was not the team. It was the matches, the crowds, the culture of football that still makes gay players feel like exceptions rather than a natural part of the sport.",
      "I have spoken publicly now about being a gay footballer. I have had messages from young players who say they needed to see it was possible. I did not plan to be anyone's symbol, but if the thing I was most scared of becomes something useful to someone else, I will take it.",
      "Gay men belong in sport. Not despite their identities but with them. The courage it takes to exist honestly in spaces that were not built for you is exactly the kind of courage that makes a good teammate."
    ],
    highlight: "Gay men belong in sport. Not despite their identities but with them.",
    takeaway: "Being gay in a traditionally masculine space is its own kind of courage. If you are navigating that, you are not the first and you will not be the last. There are others."
  },
  {
    name: "Leo", age: 20,
    color: { stripe: "#f72585", tagBg: "#ffe0f0", tagText: "#f72585", hlBg: "#fff0f8", takeBg: "#fff8fc", border: "#f72585" },
    identity: "Gay",
    photo: leoPhoto,
    quote: "I came out to myself before anyone else. In a diary entry I wrote at fourteen and hid under my bed.",
    story: [
      "I was fourteen when I wrote it down for the first time. I am gay. Three words. I closed the notebook and put it under my mattress and did not look at it again for almost a year. Saying it to myself on paper felt enormous. Saying it out loud to another person felt impossible.",
      "I was sixteen when I told my older brother. We were watching television. I turned the sound down and said it very fast, like if I said it quickly enough it would not count as much. He picked up the remote and turned the sound back up and said: I know. You have known for ages, yeah? We watched the rest of the programme together. It was the best conversation I have ever had.",
      "My parents took longer. My mum cried, which I expected. My dad went for a walk and came back an hour later and hugged me without saying anything. Over the next few months they both adjusted more than I thought they could. My mum now sends links to articles about gay rights. My dad bought a pride flag for the front of the house without telling anyone he was going to.",
      "I am twenty and I am not going to pretend everything is easy. The world still has homophobia in it. I still encounter it sometimes. But I know who I am in a way that feels like a foundation. Like something that cannot be taken away even when things are hard.",
      "To the fourteen-year-old writing in a notebook: it is okay. You are okay. The conversation you are scared of having is survivable, and on the other side of it is a version of your life that is actually yours."
    ],
    highlight: "On the other side of the conversation you are scared of is a version of your life that is actually yours.",
    takeaway: "Coming out to yourself first is the beginning of everything. Even if it stays private for a while, the moment of internal honesty is the most important one."
  }
];
