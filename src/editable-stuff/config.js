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

const leadership = {
  show: true,
  heading: "Portfolio",
  sections: [
    {
      heading: "Highlandia",
      message: "Highlandia is an Android educational app featuring 12 mini-games designed to teach adults conversational English in a fun and engaging way. The app includes games like Bubbles to learn the alphabet and numbers, Tracer to practice writing them, and Phonemes Run for pronunciation. Users can enjoy Shopping Spree to improve listening and reading skills while racing fellow shoppers, and Speak Up for dialogue practice. Highlandia offers a new curriculum, a first-time user experience in the native language, a pre-test, a topics menu, and overall gameplay and visual enhancements.",
      media: [
        {
          type: 'video',
          src: require("../editable-stuff/Highlands/demo.mp4"), 
          label: "", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Skylars Run",
      message: "Skylars Run: ",
      media: [
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
        }
      ]
    },
    {
      heading: "Beast Boxers",
      message: "A PVP boxer game!",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/Beast Boxers/image (11).png"), 
          label: "Home Screen", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Beast Boxers/image (12).png"), 
          label: "Waiting for Opponent", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Beast Boxers/image (13).png"), 
          label: "Online Opponent found!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Beast Boxers/image (14).png"), 
          label: "Fight!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Beast Boxers/image (15).png"), 
          label: "You win!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Beast Boxers/image (16).png"), 
          label: "Fight stats", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Scrabble Vision",
      message: "A scrabble scorekeeper app using which you can scan your scrabble board to automatically keep score! OpenCV with Unity was used to take multiple scans of the scrabble board and return scanned results.",
      media: [
        {
          type: 'video',
          src: require("../editable-stuff/Scrabble/ScrabbleDemo.mp4"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Scrabble/scrabble_gary_cropped.png"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Scrabble/image (10).png"), 
          label: "", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "IKIN",
      message: "IKIN: ",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/IKIN/image (17).png"), 
          label: "The RYZ Holographic Projector", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/IKIN/image (18).png"), 
          label: "Landing Page", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/IKIN/image (19).png"), 
          label: "Loading up a Custom Scene which is rendered on the Holographic Projector", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/IKIN/image (20).png"), 
          label: "You can edit the scene in runtime!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/IKIN/ryzdemo.jpg"), 
          label: "The RYZ Holographic Projector", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Mogaland",
      message: "Mogaland: ",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/Mogaland/image.png"), 
          label: "Connected Graph Data Structure - Quiz Progression Map", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Mogaland/image (1).png"), 
          label: "Tiled Islands", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Mogaland/image (1).png"), 
          label: "Gear System", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "ThoughtWorld",
      message: "ThoughtWorld: ",
      media: [
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
        }
      ]
    },
    {
      heading: "Wifi Direct Demo",
      message: "Wifi Direct Demo: ",
      media: [
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
        }
      ]
    },
    {
      heading: "VR Shooting Game",
      message: "VR Shooting Game",
      media: [
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
        }
      ]
    },
    {
      heading: "Classic Breakout + Level Editor",
      message: "Classic Breakout + Level Editor: ",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/breakout/image (21).png"), 
          label: "Breakout!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/breakout/image (24).png"), 
          label: "Breakout Level Editor", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Graverunner + Level Editor",
      message: "A C++ SDL platform runner game with a level editor",
      media: [
        {
          type: 'video',
          src: require("../editable-stuff/Platformer/GraveRunnerDemo.mp4"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Platformer/image (23).png"), 
          label: "Graverunner Level Editor", 
          paragraph: "" 
        },
        {
          type: 'video',
          src: require("../editable-stuff/Platformer/Oops.mp4"), 
          label: "Oops, I died!", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Tower Defense + Level Editor",
      message: "A C++ Tower Defense game made on a custom Game engine using SDL with a level editor",
      media: [
        {
          type: 'video',
          src: require("../editable-stuff/TowerDefense/TowerDefenseDemo.mp4"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/TowerDefense/image (22).png"), 
          label: "Multiple Custom Maps!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/TowerDefense/image (25).png"), 
          label: "Level Editor!", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Behavior Trees in Unity",
      message: "Behavior Trees in Unity: ",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/BehaviorTreesInUnity/EnemyBT.png"), 
          label: "Enemy Behavior Tree - Next slide with Code to create this Tree", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/BehaviorTreesInUnity/image (6).png"), 
          label: "Behavior Tree shown in Previous slide created here", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/BehaviorTreesInUnity/image (7).png"), 
          label: "Types of Enemies - Long Range", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/BehaviorTreesInUnity/image (8).png"), 
          label: "Types of Enemies - Short Range", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/BehaviorTreesInUnity/image (9).png"), 
          label: "Types of Enemies - Medium Range", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Clash Royale AI",
      message: "Clash Royale AI: ",
      media: [
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
        }
      ]
    },
    {
      heading: "Space Visualizer",
      message: "Space Visualizer: ",
      media: [
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
        }
      ]
    },
    {
      heading: "Match3 Engine",
      message: "You can create your own style of Match3 game by customizing your icons and audio too!",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/Match3Engine/Image 7-14-24 at 8.56 PM.jpg"), 
          label: "Match 3 game", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Match3Engine/Image 7-14-24 at 8.58 PM.jpg"), 
          label: "Customize Icons!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/Match3Engine/Image 7-14-24 at 9.00 PM.jpg"), 
          label: "Customize Music!", 
          paragraph: "" 
        }
      ]
    },
    {
      heading: "Vineyard Valley",
      message: "Fixed Bugs on the live version for Jam City",
      media: [
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
        }
      ]
    },
    {
      heading: "Cricket 3D Lite",
      message: "Super small Cricket game!",
      media: [
        {
          type: 'video',
          src: require("../editable-stuff/MSDCricket/demo.mp4"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/MSDCricket/image (3).png"), 
          label: "Multiple Game Modes!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/MSDCricket/image (4).png"), 
          label: "Tournament mode!", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/MSDCricket/image (5).png"), 
          label: "Points Table!", 
          paragraph: "" 
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
        }
      ]
    },
    {
      heading: "Furniture AR",
      message: "Furniture AR:",
      media: [
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
        }
      ]
    },
    {
      heading: "Virtual Dressing Room",
      message: "Virtual Dressing Room: ",
      media: [
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
        }
      ]
    }
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
