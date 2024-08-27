export const enable = false;

export const loadingStates = [
    {
        text: "Loading images"
    },
    {
        text: "Loading dimension core"
    },
    {
        text: "Quantic engine START"
    },
    {
        text: "Wait a moment please..."
    },
    {
        text: "Almost there..."
    },
]

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building Figma clone for demonstrative purposes.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [

    {
        id: 1,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://iphone15-apple-clone.netlify.app/",
        type: "webapp"
    },
    {
        id: 2,
        title: "Brainwave",
        des: "Professional and modern design AI Chat website Brainwave, using Tailwind, React and Vite",
        img: "/brain.svg",
        iconLists: ["/react.svg", "/tail.svg", "/js.svg", "/vite.svg"],
        link: "https://brainwave-look-a-like.netlify.app/",
        type: "webapp"
    },
    {
        id: 3,
        title: "The World",
        des: "An interactive 3D model builded in Three.js of the Earth",
        img: "/world-3d.svg",
        iconLists: ["/three.svg", "/js.svg"],
        link: "https://three-world-3d.netlify.app/",
        type: "webapp"
    },
    {
        id: 4,
        title: "Movie App",
        des: "A react native project of a fake streaming app",
        img: "/movie-app-smaller.svg",
        iconLists: ["/react-native.svg"],
        link: "https://github.com/Simulaemanuele/MoviesApp/tree/deploy",
        type: "mobile"
    }

];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Mobile Intern",
        desc: "As a part of a team, I was assisted in the development of a mobile home banking app using React Native performing a complete redesign, enhancing performance and implementing features.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Frontend Engineer Microfrontend",
        desc: "As part of a team, I developed many frontends that were wrapped in a backend wrapper, for a banking client.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
];

export const approach = [
    {
        id: 1,
        title: "Planning & Strategy",
        order: "Phase 1",
        des: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
        animationSpeed: 5.1,
        containerClassName: "bg-emerald-900",
    },
    {
        id: 2,
        title: "Development & Progress Update",
        order: "Phase 2",
        des: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
        animationSpeed: 3,
        containerClassName: "bg-pink-900",
        colors: [
            [255, 166, 158],
            [221, 255, 247],
        ],
        dotSize: 2
    },
    {
        id: 3,
        title: "Development & Launch",
        order: "Phase 3",
        des: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
        animationSpeed: 3,
        containerClassName: "bg-sky-600",
        colors: [[125, 211, 252]]
    },
]

export const socialMedia = [
    {
        id: 1,
        imgBlack: "/gitBlack.svg",
        imgWhite: "/gitWhite.svg",
        link: "https://github.com/Simulaemanuele"
    },
    {
        id: 2,
        imgBlack: "/linkBlack.svg",
        imgWhite: "/linkWhite.svg",
        link: "https://www.linkedin.com/in/emanuele-simula/"
    },
];