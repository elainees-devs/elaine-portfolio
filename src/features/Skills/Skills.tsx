//src/features/Skills/Skills.tsx
import { skills } from "../../constants/skills";
import Badge from "../../shared/ui/Badge";

const Skills: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center px-4">
      {/* Use Badge for section title */}
      <Badge text="My Skills" />
      <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center">
        Here are some of my skills:
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8 w-full">
        {skills.map(({ name, icon: Icon, size }) => (
          <div className="w-full sm:w-1/2 md:w-1/4 rounded-lg p-4 flex flex-col items-center justify-center text-center bg-customBlueGray text-navy">
            <Icon className={`text-3xl sm:text-4xl md:${size} mb-2`} />
            <h3 className="text-sm sm:text-base md:text-lg font-semibold">
              {name}
            </h3>
          </div>
        ))}
      </div>
      {/* Horizontal rule */}
      <hr className="my-12 border-t border-muted w-3/4" />
    </div>
  );
};

export default Skills;
