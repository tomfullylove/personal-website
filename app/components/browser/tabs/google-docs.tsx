import { useState, useEffect } from "react";

function TypedText() {
    const phrases = ["full-stack apps.", "beautiful front-ends.", "resilient apis.", "silly things..."];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [direction, setDirection] = useState("forward");

    useEffect(() => {
      const current = phrases[index];

      if (direction === "forward" && subIndex < current.length) {
        const timeout = setTimeout(() => setSubIndex(subIndex + 1), 70);
        return () => clearTimeout(timeout);
      }

      if (direction === "forward" && subIndex === current.length) {
        const timeout = setTimeout(() => setDirection("backward"), 1200);
        return () => clearTimeout(timeout);
      }

      if (direction === "backward" && subIndex > 0) {
        const timeout = setTimeout(() => setSubIndex(subIndex - 1), 40);
        return () => clearTimeout(timeout);
      }

      if (direction === "backward" && subIndex === 0) {
        const timeout = setTimeout(() => {
          setIndex((index + 1) % phrases.length);
          setDirection("forward");
        }, 300);
        return () => clearTimeout(timeout);
      }
    }, [subIndex, index, direction]);

    return (
      <span className="relative inline-block">
        &nbsp;{phrases[index].substring(0, subIndex)}
        <span className="text-emerald-700 text-base sm:text-xl md:text-2xl inline-block -mt-[4px] absolute animate-[cursor-blink_1s_step-end_infinite]">
          l
        </span>
      </span>
    );
}

export function GoogleDocs() {
    return (
        <a href="/tom-fullylove-resume.pdf" target="_blank" className="flex flex-col text-black text-xs sm:text-sm md:text-base">
            <div className="flex flex-row justify-between items-center bg-white p-4 border border-b-gray-300 border-gray-200">
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-xs sm:text-lg md:text-xl font-bold">Resume v86.4 (FINAL)</p>
                    <p className="text-xs md:text-sm font-bold text-green-500 pr-2">Saving...</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="flex flex-row items-center">
                        <div className="h-6 w-6 pt-1 sm:pt-[2px] md:pt-0 rounded-full bg-gray-200 text-white text-center">A</div>
                        <div className="h-6 w-6 pt-1 sm:pt-[2px] md:pt-0 rounded-full bg-emerald-700 text-white text-center -ml-3">TF</div>
                    </div>
                    <p className="rounded-full bg-blue-500 text-white px-4 py-2 hover:underline hover:bg-blue-600 cursor-pointer">Download</p>
                </div>
            </div>
            <div className="flex flex-col items-center bg-gray-200">
                <div className="flex flex-col gap-2 mx-4 md:mx-8 max-w-190 bg-white border border-gray-300 my-12 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-xl sm:text-5xl md:text-6xl font-bold">Tom Fullylove</h2>
                        <div className="flex flex-col">
                            <span>✉️ tom@fullylove.co.uk</span>
                            <span>🔗 tomfullylove.com</span>
                        </div>
                    </div>
                    <p className="px-2">
                        Hey! 👋 I build <TypedText />&nbsp;&nbsp;  I'm always learning, enjoy solving tricky problems and have a
                        thing for great user-centric design and experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row">
                        <div className="flex flex-col p-1 gap-2 flex-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Experience</h3>
                            <div className="flex flex-col gap-2">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 underline">Veygo by Admiral</p>
                                <div className="flex flex-col sm:pl-4">
                                    <p className="text-base sm:text-lg md:text-xl  font-bold">Senior Full Stack Engineer</p>
                                    <p className="font-bold">July 2025 - Now</p>
                                    <div className="flex flex-col gap-4 pt-2">
                                        <p>
                                            I'm currently leading the rebuild of our quote-to-buy web journey,
                                            which has solved key business problems and revolutionised how we
                                            serve our customers. As part of this, I investigated new technologies
                                            and architectures, such as GraphQL, to increase flexibility and
                                            dramatically speed up experimentation through A/B testing. I also
                                            created a new component library, resulting in better customer
                                            experiences and greater alignment with the design team.
                                        </p>
                                        <p>
                                            During the rebuild, I led the end-to-end development of the first new
                                            customer journey, from discovery through to (successful) release.
                                            This has enabled customers to purchase via price-comparison
                                            websites for the first time, opening up an entirely new audience
                                            while validating our new architecture in production.
                                        </p>
                                        <p>
                                            Mentoring and coaching are also an important part of my role, both
                                            ad hoc within teams and more formally through regular catch-ups
                                            and sessions. And I've also worked on engineering-wide initiatives,
                                            helping set engineering principles and establishing conventions for
                                            all aspects of development at Veygo, from testing to pull requests.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:pl-4">
                                    <p className="text-base sm:text-lg md:text-xl font-bold">Full Stack Engineer</p>
                                    <p className="font-bold">July 2019 - June 2025</p>
                                    <div className="flex flex-col gap-4 pt-2">
                                        <p>
                                            I started my professional journey here, joining an amazing team of
                                            engineers. Gaining experience with React, Django and AWS as part
                                            of an Agile Scrum team. I worked on multiple cross-functional
                                            teams and projects, from delivering new insurance products to
                                            building scalable backend services and APIs in our move to a
                                            serverless architecture.
                                        </p>
                                        <p>
                                            Taken the lead on several projects, including redesigns of key
                                            customer journeys, which have led to improved conversion and UX.
                                            And delivering a brand-new telematics product, building the
                                            end-to-end web journeys and the backend systems that support
                                            customers on our new subscription-based offering.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4 sm:mt-0 flex-col flex-1 gap-2">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Tech Stack</h3>
                            <div className="flex flex-col pl-2">
                                <p className="text-base sm:text-lg md:text-xl font-bold">Languages</p>
                                <p className="pl-1">Typecript & Python</p>
                                <p className="font-bold pt-1">Frontend</p>
                                <p className="pl-1">
                                    React, Redux, CSS, Tailwind, RTL & Cypress
                                </p>
                                <p className="text-base sm:text-lg md:text-xl font-bold pt-1">Backend</p>
                                <p className="pl-1">
                                    Node.js, Django, Flask, GraphQL & Temporal
                                </p>
                                <p className="text-base sm:text-lg md:text-xl font-bold pt-1">Infra</p>
                                <p className="pl-1">
                                    AWS, Terraform, Serverless Framework & CI/CD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
