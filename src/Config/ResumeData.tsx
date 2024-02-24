export interface ResumeProps {
  title: string;
  duration: string;
  description: JSX.Element[];
}

// const items = ['Item 1', 'Item 2', 'Item 3'];
// const symbol = '☁️';

export const courses: ResumeProps[] = [
  {
    title: "Linux and Edge Computing",
    duration: "Feb, 2024 - present",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ncu.edu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            National Central location</a> | 📍 Taoyuan, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          GitHub: <a
            href="https://github.com/NCU-GS4538-Linux"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            NCU-GS4538-Linux
          </a> | Course Website: <a
            href="https://ncuedu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            NCUEDU
          </a>
        </p>
      ),
      // (
      //   <p className="timeline-text">
      //     <ul>
      //       {items.map((item, index) => (
      //         <li key={index}>
      //           {symbol} {item}
      //         </li>
      //       ))}
      //     </ul>

      //   </p>
      // ),
    ],
  },
  {
    title: "GS4719 Python Programming",
    duration: "Sep, 2023 - Jan, 2024",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ncu.edu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            National Central location</a> | 📍 Taoyuan, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          GitHub: <a
            href="https://github.com/NCU-GS4719-Python/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            NCU-GS4719-Python
          </a> | Course Website: <a
            href="https://ncuedu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            NCUEDU
          </a>
        </p>
      ),
    ],
  },
  {
    title: "AP4063 Weather and Artificial Intelligence Ⅰ/Ⅱ",
    duration: "Sep, 2023 - present",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ncu.edu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            National Central location</a> | 📍 Taoyuan, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          GitHub: <a
            href="https://github.com/weather-and-ai" target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            Weather and Artificial Intelligence
          </a>
        </p>
      ),
    ],
  }
];

export const awardsAndLeaderships: ResumeProps[] = [
  {
    title: "2023 Weather Hackathon",
    duration: "May, 2023 - Aug, 2023",
    description: [
      (
        <p className="timeline-text">
          The second place winner, as well as the Executive Yuan Sustainability Special Award
        </p>
      ),
      (
        <p className="timeline-text">
          GitHub: <a
            href="https://github.com/Weather-Shakespeare/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            Weather Shakespeare
          </a> | Related Information: <a
            href="https://www.weatherrisk.com/post/%E7%AC%AC%E4%BA%8C%E5%B1%86-%E5%A4%A9%E6%B0%A3%E9%BB%91%E5%AE%A2%E6%9D%BE-%E5%9C%93%E6%BB%BF%E6%88%90%E5%8A%9F%EF%BC%8Cesg%E3%80%81%E6%B0%B8%E7%BA%8C%E8%AD%B0%E9%A1%8C%E5%8F%97%E8%A9%95%E5%AF%A9%E8%A6%AA%E7%9D%9E"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          > 第二屆《天氣黑客松》圓滿成功，ESG、永續議題受評審青睞</a> | Project Name:
          <a
            href="天氣Hackthon沙士比亞_蛤!你的怪獸怎麼一直變大"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          > 天氣Hackthon沙士比亞_蛤!你的怪獸怎麼一直變大</a>

        </p>
      ),
    ],
  },
];


export const schools: ResumeProps[] = [
  {
    title: "Bachelor's degree, Atmospheric Science",
    duration: "Sep. 2020 — Jun. 2024",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ncu.edu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            National Central University</a> | 📍 Taoyuan, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          <em><strong>💻 Minor Specialty:</strong> Computer Science & Information Engineering</em>
        </p>
      ),
      (
        <p className="timeline-text">
          <ul>
            <li>
              <em><strong>💻 Relevant Courses (Graduate): </strong></em>
              The Attack and Defense of Computers,
              Software Engineering,
              Object-Oriented Analysis and Design,
            </li>
            <li>
              <em><strong>💻 Relevant Courses (Undergraduate): </strong></em>
              Linux And Edge Computing,
              Principles of Programming Languages,
              Operating System,
              Computer Organization,
              Computer Network,
              Algorithmics,
              Data Structures,
              Assembly Language and System Programming,
              Digital Design,
              Weather and Artificial Intelligence,
              Numerical Analysis.
            </li>
          </ul>
        </p>
      ),
    ],
  },
];



export const careers: ResumeProps[] = [
  {
    title: "Cloud Developer Intern",
    duration: "Mar. 2024 - present.",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ecloudture.com/en/internship-program/"
            className="code-highlight-yellow"
            target="_blank"
            rel="noreferrer"
          >
            eCloudValley
          </a> | 📍 New Taipei, Taiwan
        </p>
      ),
    ],
  },
  {
    title: "Technical Support Cloud Ambassador",
    duration: "Aug. 2023 - Jan. 2024",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://aws.amazon.com/tw/education/awseducate/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >Amazon Web Services
          </a> | 📍 Taipei, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          <ul>
            <li>
              ☁️ Educated <strong>700+ cloud developers</strong> and
              achieved 96% of user satisfaction by publishing and
              lecturing <strong>2+ technical workshops, 1 UAD</strong> on
              AWS cloud computing services <strong>(Lex, Amazon S3, Lambda, API Gateway)</strong>.
            </li>
            <li>
              ☁️ <strong>Develop</strong> an open-source
              project called <strong>"AWS 101 LINE Bot"</strong> designed
              for integration with <strong>AWS 101</strong>. This initiative
              led to contacting <strong><a
                className="code-highlight-yellow"
                href="https://linecorp.com/en/"
                target="_blank"
                rel="noreferrer"
              >LINE Company</a></strong> and securing
              the opportunity to organize a visit to the company.
            </li>
            <li>
              ☁️ <strong>Technical Support</strong> within the
              <strong> Marketing Program</strong> enhances the technical
              understanding of marketing team members. This involves a
              detailed <strong>35+ page</strong> research study accompanied
              by a comprehensive presentation.
            </li>
          </ul>
        </p>
      ),
    ],
  },
  {
    title: "Software Engineer Intern",
    duration: "Jul. 2023 - Aug. 2023",
    description: [
      (
        <p className="timeline-text">
          <a href="https://www.pegatroncorp.com/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            Pegatron Corporation
          </a> | 📍 Taipei, Taiwan
        </p>
      ),
      (
        <p className="timeline-text">
          <ul>
            <li>
              <em><strong>Smart Robot, Smart World 🦾:</strong> Prompt-based Learning for manipulating with the Visual-World Robot</em>
            </li>
            <li>
              🦾 Implementing <strong>Prompt Engineering and <code>LangChain</code></strong> allows
              the <strong><a
                className="code-highlight-yellow"
                href="https://www.nvidia.com/en-us/omniverse/"
                target="_blank"
                rel="noreferrer"
              >NVIDIA Ominerve visual robot</a></strong> to function
              through <strong>speech or text</strong>, leading to an <strong>83%</strong> improvement
              in scenario test support across <strong>6 to 11</strong> scenarios.
            </li>
            <li>
              🦾 During the <strong>Proof of Concept (POC)</strong> phase,
              transform the trained model into a <strong>Web Application</strong> with
              a user interface using <strong><code>Gradio</code></strong>, the UI toolkit
              for the <strong><code>FastAPI</code></strong> framework.
            </li>
          </ul>
        </p>
      ),
    ],
  },
  {
    title: "Website Developer",
    duration: "Jul. 2022 - Jan. 202",
    description: [
      (
        <p className="timeline-text">
          <a
            href="https://www.ncu.edu.tw/"
            target="_blank"
            className="code-highlight-yellow"
            rel="noreferrer"
          >
            National Central University
          </a> | 📍 Taoyuan, Taiwan
        </p>
      ),
    ],
  },
];
