import Image from 'next/image';
import H4 from '../markdown/h4';

import type { TechStack as TechStackType } from '@/types/about';
import { abouts } from '@/config/about';

const subHeader = "$ ls -al Tech Stack";
const { programmingLanguage, devOps } = abouts;

const TechStack: React.FC = () => {
  const renderTechStackList = (techStack: TechStackType[]) => {
    return (
      <ul className="techstack-list has-scrollbar">
        {techStack.map((item: TechStackType) => (
          <li key={item.id} className="techstack-item">
            <Image
              id={item.id}
              src={item.src}
              alt={item.alt}
              width={65}
              height={65}
            />
          </li>
        ))}
      </ul>
    );
  };
  
  return (
    <section className="about-text">
      <H4 text={subHeader} />
      {renderTechStackList(programmingLanguage)}
      {renderTechStackList(devOps)}
    </section>
  );
}

export default TechStack;