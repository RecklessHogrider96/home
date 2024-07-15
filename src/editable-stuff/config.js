// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Roshan",
  middleName: "",
  lastName: "Bellary",
  message: " Games will eventually mimic reality. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/recklesshogrider96",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/roshanbellary/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/roshan-bellary/",
    },
  ],
};

// ABOUT SECTION
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/portrait.png"),
  imageSize: 375,
  message1:
  "As a fervent game developer, I thrive on the challenge of transforming imaginative concepts into playable realities. "
  + "My journey through the realms of C#, C++, C, and Python has equipped me with a formidable arsenal of programming prowess. "
  + "I've wielded the power of industry-leading game engines like Unity, Unreal Engine, and Godot to craft experiences that captivate "
  + "and entertain. My toolbelt also includes Visual Studio and GitHub, and I navigate the intricacies of object-oriented programming "
  + "and agile development with ease.",
  message2:
  "My project repertoire is as eclectic as it is extensive. From concocting a custom game engine with SDL2 in C++, to architecting intricate "
  + "2D and 3D rendering systems in C, my work is a testament to both my technical skill and creative vision. I've plunged into the world "
  + "of virtual reality with a VR game for the Oculus Quest 2, sculpted in Unity, and devised a behavior tree system in C# that makes game AI "
  + "both intuitive and flexible. Even my hidden maze game in Java is a playground of portals, shooting mechanics, and customizable assets.",
  message3:
  "Academically, I’ve traversed the landscape of computer science, earning a Master’s degree in Artificial Intelligence from Northeastern University "
  + "and a Bachelor’s in Computer Science Engineering from ICFAI University. This rigorous education, combined with my hands-on exploits, has forged "
  + "a robust foundation in game design, architecture design, and AI. My mission: to create gaming experiences that are as innovative as they are enthralling.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "recklesshogrider96", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Portfolio",
  message1:
    "Highalandia: This is Highalandia, an app which has 12 mini games focused on Teaching adults conversational English!",
  images1: [
    { 
      type: 'video',
      src: require("../editable-stuff/Highlands/demo.mp4"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message2:
    "Skylars Run: ",
  images2: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message3:
    "Beast Boxers: A PVP boxer game!",
  images3: [
    { 
      type: 'image',
      src: require("../editable-stuff/Beast Boxers/image (11).png"), 
      label: "", 
      paragraph: "Home Screen" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Beast Boxers/image (12).png"), 
      label: "", 
      paragraph: "Waiting for Opponent" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Beast Boxers/image (13).png"), 
      label: "", 
      paragraph: "Online Opponent found!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Beast Boxers/image (14).png"), 
      label: "", 
      paragraph: "Fight!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Beast Boxers/image (15).png"), 
      label: "", 
      paragraph: "You win!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Beast Boxers/image (16).png"), 
      label: "", 
      paragraph: "Fight stats" 
    },
  ],
  message4:
    "Scrabble Vision: A scrabble scorekeeper app using which you can scan your scrabble board to automatically keep score! OpenCV with Unity was used to take multiple scans of the scrabble board and return scanned results.",
  images4: [
    { 
      type: 'video',
      src: require("../editable-stuff/Scrabble/ScrabbleDemo.mp4"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff//Scrabble/scrabble_gary_cropped.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Scrabble/image (10).png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message5:
    "IKIN: ",
  images5: [
    { 
      type: 'image',
      src: require("../editable-stuff/IKIN/image (17).png"), 
      label: "", 
      paragraph: "The RYZ Holographic Projector" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/IKIN/image (18).png"), 
      label: "", 
      paragraph: "Landing Page" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/IKIN/image (19).png"), 
      label: "", 
      paragraph: "Loading up a Custom Scene which is rendered on the Holographic Projector" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/IKIN/image (20).png"), 
      label: "", 
      paragraph: "You can edit the scene in runtime!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/IKIN/ryzdemo.jpg"), 
      label: "", 
      paragraph: "The RYZ Holographic Projector" 
    },
  ],
  message6:
    "Mogaland: ",
  images6: [
    { 
      type: 'image',
      src: require("../editable-stuff/Mogaland/image.png"), 
      label: "", 
      paragraph: "Connected Graph Data Structure - Quiz Progression Map" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Mogaland/image (1).png"), 
      label: "", 
      paragraph: "Tiled Islands" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Mogaland/image (1).png"), 
      label: "", 
      paragraph: "Gear System" 
    },
  ],
  message7:
    "ThoughtWorld: ",
  images7: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message8:
    "Wifi Direct Demo: ",
  images8: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message9:
    "VR Shooting Game",
  images9: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message10:
    "Classic Breakout game with a level editor: ",
  images10: [
    { 
      type: 'image',
      src: require("../editable-stuff/breakout/image (21).png"), 
      label: "", 
      paragraph: "Breakout!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/breakout/image (24).png"), 
      label: "", 
      paragraph: "Breakout Level Editor" 
    },
  ],
  message11:
    "Graverunner: A C++ SDL platform runner game with a level editor",
  images11: [
    { 
      type: 'video',
      src: require("../editable-stuff/Platformer/GraveRunnerDemo.mp4"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Platformer/image (23).png"), 
      label: "", 
      paragraph: "Graverunner Level Editor" 
    },
    { 
      type: 'video',
      src: require("../editable-stuff/Platformer/Oops.mp4"), 
      label: "", 
      paragraph: "Oops, I died!" 
    },
  ],
  message12:
    "Tower Defense: A C++ Tower Defense game made on a custom Game engine using SDL with a level editor",
  images12: [
    { 
      type: 'video',
      src: require("../editable-stuff/TowerDefense/TowerDefenseDemo.mp4"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/TowerDefense/image (22).png"), 
      label: "", 
      paragraph: "Multiple Custom Maps!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/TowerDefense/image (25).png"), 
      label: "", 
      paragraph: "Level Editor!" 
    },
  ],
  message13:
    "Behavior Trees in Unity: ",
  images13: [
    { 
      type: 'image',
      src: require("../editable-stuff/BehaviorTreesInUnity/EnemyBT.png"), 
      label: "", 
      paragraph: "Enemy Behavior Tree - Next slide with Code to create this Tree" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/BehaviorTreesInUnity/image (6).png"), 
      label: "", 
      paragraph: "Behavior Tree shown in Previous slide created here" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/BehaviorTreesInUnity/image (7).png"), 
      label: "", 
      paragraph: "Types of Enemies - Long Range" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/BehaviorTreesInUnity/image (8).png"), 
      label: "", 
      paragraph: "Types of Enemies - Short Range" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/BehaviorTreesInUnity/image (9).png"), 
      label: "", 
      paragraph: "Types of Enemies - Medium Range" 
    },
  ],
  message14:
    "Clash Royale AI in C++: ",
  images14: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message15:
    "Space Visualizer: ",
  images15: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message16:
    "Match3 Engine: You can create your own style of Match3 game by customizing your icons and audio too!",
  images16: [
    { 
      type: 'image',
      src: require("../editable-stuff/Match3Engine/Image 7-14-24 at 8.56 PM.jpg"), 
      label: "", 
      paragraph: "Match 3 game" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Match3Engine/Image 7-14-24 at 8.58 PM.jpg"), 
      label: "", 
      paragraph: "Customize Icons!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/Match3Engine/Image 7-14-24 at 9.00 PM.jpg"), 
      label: "", 
      paragraph: "Customize Music!" 
    },
  ],
  message17:
    "Vineyard Valley: Fixed Bugs on the live version for Jam City",
  images17: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message18:
    "Cricket 3D Lite: Super small Cricket game!",
  images18: [
    { 
      type: 'video',
      src: require("../editable-stuff/MSDCricket/demo.mp4"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/MSDCricket/image (3).png"), 
      label: "", 
      paragraph: "Multiple Game Modes!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/MSDCricket/image (4).png"), 
      label: "", 
      paragraph: "Tournament mode!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/MSDCricket/image (5).png"), 
      label: "", 
      paragraph: "Points Table!" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/MSDCricket/screen-2.jpg"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/MSDCricket/screen-3.jpg"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message19:
    "Furniture AR:",
  images19: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  message20:
    "Virtual Dressing Room: ",
  images20: [
    { 
      type: 'image',
      src: require("../editable-stuff/portrait2.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      type: 'image',
      src: require("../editable-stuff/portrait1.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"350"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 90 },
    { name: "C++", value: 90 },
    { name: "Python", value: 80 },
    { name: "Game Artificial Intelligence", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "Algorithms", value: 85 },
  ],
  softSkills: [
    { name: "Debugging and Troubleshooting", value: 95 },
    { name: "Maths and Physics", value: 90 },
    { name: "Version Control Systems", value: 95 },
    { name: "3D Modeling and Animations", value: 75 },
    { name: "Creativity", value: 90 },
    { name: "Project Management", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Hit me up!",
  message:
    "I'm currently looking for full-time Video Game Development opportunities! I recognize Game Engines and coding languages as tools of the trade and have always felt comfortable putting them all to use."
    + " If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "roshangovind96@gmail.com",
};

const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Senior Game Developer',
      companylogo: require('../assets/img/cnlogo.png'),
      imageSize: 300,
      date: 'June 2022 – Present',
    },
    {
      role: 'Graduate Teaching Assistant - Computer Graphics',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: 'May 2022 – Aug 2022',
    },
    {
      role: 'Graduate Teaching Assistant - Game Artificial Intelligence',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: 'Jan 2022 – May 2022',
    },
    {
      role: 'Research Assistant - Mixed Reality Development',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: 'Jan 2022 – May 2022',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/butlrlogo.png'),
      imageSize: 300,
      date: 'Sept 2021 – Jan 2022',
    },
    {
      role: 'Game Programmer',
      companylogo: require('../assets/img/cnlogo.png'),
      imageSize: 300,
      date: 'June 2021 – Aug 2021',
    },
    {
      role: 'Graduate Teaching Assistant - Game Programming',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: 'Jan 2021 – May 2021',
    },
    {
      role: 'Game Developer',
      companylogo: require('../assets/img/gameshastralogo.png'),
      imageSize: 300,
      date: 'Oct 2018 – Sept 2020',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/miloplelogo.png'),
      imageSize: 300,
      date: 'Jan 2018 – Oct 2018',
    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/niclogo.png'),
      imageSize: 300,
      date: 'Jun 2015 – Aug 2015',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'Northeastern University, Master of Science in Computer Science',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: '2020 – 2022',
    },
    {
      role: 'ICFAI University, Bachelor of Technology, Computer Science Engineering', // Here Add Company Name
      companylogo: require('../assets/img/ifhe-logo.png'),
      imageSize: 300,
      date: '2014 – 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experience, education };
