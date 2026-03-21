import { Panel, PanelHeader, PanelTitle, PanelContent } from "@/components/ui/panel";
import { TreePine } from "lucide-react";
import { 
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPytorch,
  SiLangchain,
  SiHuggingface,
  SiGooglegemini,
  SiOpencv,
  SiOpenai,
  SiGooglecloud,
  SiSupabase,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiWebstorm,
  SiPostman,
  SiVercel,
  SiStreamlit,
  SiShadcnui,
  SiRadixui,
  SiTensorflow,
  SiScikitlearn,
  SiJupyter
} from "react-icons/si";

import { FaJava, FaNetworkWired, FaDatabase, FaPython } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";

const stackIcons = [
  // Programming
  { icon: SiC, color: "#A8B9CC", name: "C" },
  { icon: SiCplusplus, color: "#00599C", name: "C++" },
  { icon: FaJava, color: "#E76F00", name: "Java" },
  { icon: FaPython, color: "#3776AB", name: "Python" },
  { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiHtml5, color: "#E34F26", name: "HTML" },
  { icon: SiCss, color: "#1572B6", name: "CSS" },
  { icon: SiMysql, color: "#4479A1", name: "SQL" },

  // Full Stack
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: undefined, name: "Next.js" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: SiGreensock, color: "#88CE02", name: "GSAP" },
  { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { icon: SiExpress, color: undefined, name: "Express.js" },
  { icon: SiFastapi, color: "#009688", name: "FastAPI" },
  { icon: FaDatabase, color: "#E42129", name: "SQLAlchemy" },
  { icon: FaNetworkWired, color: "#FF6C37", name: "REST APIs" },
  { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { icon: SiFirebase, color: "#FFCA28", name: "Firebase / Firestore" },
  { icon: SiShadcnui, color: undefined, name: "shadcn/ui" },
  { icon: FaWandMagicSparkles, color: "#E81CFF", name: "Aceternity UI" },
  { icon: SiRadixui, color: undefined, name: "Radix UI" },

  // AI & ML
  { icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" },
  { icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
  { icon: SiScikitlearn, color: "#F7931E", name: "Scikit-Learn" },
  { icon: SiJupyter, color: "#F37626", name: "Jupyter" },
  { icon: SiLangchain, color: undefined, name: "Langchain" },
  { icon: TreePine, color: undefined, name: "Pinecone DB" },
  { icon: SiHuggingface, color: "#FFD21E", name: "Hugging Face" },
  { icon: SiGooglegemini, color: "#8E75B2", name: "Gemini API" },
  { icon: SiOpencv, color: undefined, name: "OpenCV" },
  { icon: SiOpenai, color: "#10A37F", name: "ChatGPT API" },

  // Cloud & DevOps
  { icon: SiGooglecloud, color: "#4285F4", name: "Google Cloud" },
  { icon: FaDatabase, color: "#00E599", name: "Neon" },
  { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
  { icon: SiDocker, color: "#2496ED", name: "Docker" },

  // Tools & Platforms
  { icon: SiGit, color: "#F05032", name: "Git" },
  { icon: SiGithub, color: undefined, name: "GitHub" },
  { icon: SiLinux, color: "#FCC624", name: "Linux/Unix" },
  { icon: VscCode, color: "#007ACC", name: "VS Code" },
  { icon: SiWebstorm, color: undefined, name: "WebStorm" },
  { icon: SiPostman, color: "#FF6C37", name: "Postman" },
  { icon: SiVercel, color: undefined, name: "Vercel" },
  { icon: SiStreamlit, color: "#FF4B4B", name: "Streamlit" },
];

export function Stack() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>
      <PanelContent className="pb-8">
        <div className="flex flex-wrap gap-4 px-4 sm:px-8">
          {stackIcons.map((item, index) => {
            const Icon = item.icon;
            
            // Calculate proper bright color for light/dark mode depending on icon contrast
            const hasExplicitColor = item.color !== undefined;
            const styleObj = hasExplicitColor ? { color: item.color } : {};

            return (
              <div 
                key={index} 
                className="group relative flex items-center justify-center p-1"
              >
                <Icon 
                  className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md" 
                  style={styleObj}
                />
                
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-zinc-800 border border-zinc-800 dark:border-zinc-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
