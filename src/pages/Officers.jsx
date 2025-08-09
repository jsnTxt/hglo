import Officer from "../components/Officer";

export default function Officers() {

    // Expandable list of officers in case the number of them ever increases
    const officersInfo = [
        {
            name: "Brennen Le",
            major: "Computer Science & Mathematics",
            year: "Junior",
            quote: " Always ready to grab the karaoke mic and turn any night into a show.",
            imgSrc: "mountains-placeholder.jpg",
        },
        {
            name: "Liz Frisbie",
            major: "Biochemistry",
            year: "Junior",
            quote: "Might accidentally finish a whole TV series in one weekend.",
            imgSrc: "mountains-placeholder.jpg",
        },
    ];

    return (
        <div className="relative bg-white overflow-hidden" id="officers">
            {/* SVG background */}
            <img
                className="absolute w-60 md:w-80 
                    bottom-16 -right-16 md:right-32"
                src="officers-background/dot-array.svg"
            />
            <img
                className="absolute w-70 lg:w-80 
                    top-[calc(50%-60px)] -left-50"
                src="officers-background/gradient-circle.svg"
            />
            <img
                className="absolute w-50 md:w-60 
                    top-50 -right-30"
                src="officers-background/gradient-hoop.svg"
            />
            <img
                className="hidden md:block absolute w-40 
                    -top-0 left-[calc(65%)]"
                src="officers-background/gradient-ripple.svg"
            />
            <img
                className="hidden lg:block absolute w-50 
                    top-[calc(50%-200px)] left-50"
                src="officers-background/gradient-waves.svg"
            />


            {/* Captains content */}
            <div className="pb-48">
                <h2 className="mt-[10vw] mb-40 z-1
                    text-3xl text-center font-bold"
                >
                    Meet the Captains
                </h2>

                <div className="mx-auto w-fit grid lg:grid-cols-2 gap-32">
                    {officersInfo.map((info, index) => (
                        <Officer key={`officer-${info.name}-${index}`} {...info} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
