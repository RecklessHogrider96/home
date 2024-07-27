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
      message: "Integrated over 10 mini games into the Highlandia main application using C# and Unity's game development framework. Developed a robust Content Management Pipeline to seamlessly import curriculum content from Excel workbooks with over 15 sheets into Unity Scriptable Objects, ensuring efficient data handling and organization. Notably, built the \"Speak Up\" mini game, utilizing Whisper.io for real-time speech-to-text conversion through advanced natural language processing and streaming APIs.",
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
      message: "Developed an endless runner game in Unity, refactoring the menu systems to follow the Model-View-Controller (MVC) pattern using C#. This architectural change improved the performance and responsiveness of loading information-heavy screens such as Leaderboards and Achievements. Additionally, implemented a dynamic notification system utilizing Unity's UI framework, allowing developers to spawn dialogue bubbles, error popups, notifications, and tutorial blobs with a single line of code, both in the main menu and during gameplay.",
      media: [
        {
          type: 'video',
          src: require("../editable-stuff/Skylars run/demosr.mp4"), 
          label: "", 
          paragraph: "In-Game footage!" 
        }
      ]
    },
    {
      heading: "Beast Boxers",
      message: "Built a PVP boxing game in Unity using Photon Unity Networking (PUN) for real-time multiplayer functionality. Instead of traditional physics, the game employed a frame buffer system to synchronize animations and inputs between two players. Initially designed with a 30 FPS animation buffer, the system was later upgraded to 60 FPS for smoother gameplay. Inspired by classic Street Fighter mechanics, the system included rules such as blocking moves within the first 40 frames and handling move spamming by replacing the previous move if within the first 20 frames. These rules ensured a deterministic and responsive gameplay experience, optimizing for both offline and online play.",
      media: [
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
          paragraph: "Fight stats!" 
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
      heading: "IKIN RYZ",
      message: "We made a host application which could render scenes built in Unity onto the RYZ Hardware. This host application was also home to other games which could be played on the app on the RYZ hardware by implementing the RYZ SDK.",
      media: [
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
        }
      ]
    },
    {
      heading: "Mogaland",
      message: "This game focuses on gamifying the learning experience into the Finance world. Players conquer islands by completing various mini-games like Quizes. The rewards earned are gear parts that can be equipped to increase your overall gear score!",
      media: [
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
          src: require("../editable-stuff/Mogaland/image (2).png"), 
          label: "", 
          paragraph: "Gear System" 
        }
      ]
    },
    {
      heading: "Classic Breakout + Level Editor",
      message: "",
      media: [
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
          label: "", 
          paragraph: "Graverunner Level Editor" 
        },
        {
          type: 'video',
          src: require("../editable-stuff/Platformer/Oops.mp4"), 
          label: "", 
          paragraph: "Oops, I died!" 
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
          label: "", 
          paragraph: "Multiple Custom Maps!" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/TowerDefense/image (25).png"), 
          label: "", 
          paragraph: "Level Editor!" 
        }
      ]
    },
    {
      heading: "Behavior Trees in Unity",
      message: "",
      media: [
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
        }
      ]
    },
    {
      heading: "Wifi Direct Demo",
      message: "This application built in Unity was a Proof of Concept for data transfer using WIFI Direct protocol between 2 devices. The platforms which this worked for were, android to android, iOS to iOS and iOS <-> Android. A device could assume one of 2 roles, Server role or client role. Multiple clients could connect to one server and transfer data simultaneously.",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/WifiDirectDemo/image1.png"),
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/WifiDirectDemo/image2.png"),
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/WifiDirectDemo/image3.png"),
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
        }
      ]
    },
    {
      heading: "Furniture AR",
      message: "Made a POC on Unity which initially used Vuforias plane detection to render furniture models into the augmented space. You could scale, drag and rotate these inputs through multi-finger input. Couple of months in, made the decision to swap to ARCore after it’s 1.0 release. Made the same application for iOS using ARKit as its plane detection was far superior and supported devices above Apple 7 (great at that time!). Later, used 3.js to render the furniture models on web but without the augmentation into real space.",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/FurnitureAR/image1.png"),
          label: "", 
          paragraph: "Placing furniture - Swift + ARKit"
        },
        {
          type: 'image',
          src: require("../editable-stuff/FurnitureAR/image2.png"),
          label: "", 
          paragraph: "Placing furniture - Unity + Vuforia" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/FurnitureAR/image3.png"),
          label: "", 
          paragraph: "3D Web Viewer - 3.js" 
        }
      ]
    },
    {
      heading: "Virtual Dressing Room",
      message: "Used the XBox Kinect for Skeletal tracking and based off of that data structure, created invisible avatars (just did not render the character, so that the user saw themselves in the screen bringing the application as close as possible to a mirror!) upon which the clothes to be tried were swapped using hand swipe gestures! Super fancy, right? It was the POC that put me on track for video game development!",
      media: [
        {
          type: 'image',
          src: require("../editable-stuff/VirtualDressingRoom/image1.png"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/VirtualDressingRoom/image2.png"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/VirtualDressingRoom/image3.png"), 
          label: "", 
          paragraph: "" 
        },
        {
          type: 'image',
          src: require("../editable-stuff/VirtualDressingRoom/image4.png"), 
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
    { name: "Unity Game Engine", value: 95 },
    { name: "Unreal Engine", value: 85 },
    { name: "Godot Engine", value: 85 },
    { name: "Game Architecture", value: 95 },
    { name: "Game Design", value: 85 },
    { name: "Design Patterns", value: 90 },
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
      date: 'Sep 2022 – Present',
    },
    {
      role: 'Graduate Teaching Assistant - Computer Graphics',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: 'Jun 2022 – Aug 2022',
    },
    {
      role: 'Graduate Teaching Assistant - Game Artificial Intelligence',
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
      role: 'Graduate Research Assistant - Mixed Reality Development',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: 'Sept 2021 – Jan 2022',
    },
    {
      role: 'Game Programmer',
      companylogo: require('../assets/img/cnlogo.png'),
      imageSize: 300,
      date: 'Jun 2021 – Aug 2021',
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
      date: 'Nov 2018 – Sept 2020',
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
