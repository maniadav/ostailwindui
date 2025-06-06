// components/index.ts
import { ThemeToggle } from "@/components/application-ui/theme-toggle";
import ThemeToggleCode from "@/components/application-ui/theme-toggle?raw";

export const componentMap = {
  ThemeToggle: {
    title: "Sky Toggle",
    description: "Switch between light and dark themes in sky style",
    component: <ThemeToggle />,
    code: [
      { filename: "ThemeToggle.tsx", content: ThemeToggleCode },
      { filename: "useTheme.ts", content: `// another file if needed` },
    ],
  },
  ButtonOutline: {
    title: "Outline Button",
    description: "A button with an outline style",
    component: <ThemeToggle />,
    code: [{ filename: "ButtonOutline.tsx", content: `// code here` }],
  },
};

export const slugComponentMap: Record<string, (keyof typeof componentMap)[]> = {
  "toggle-buttons": ["ThemeToggle", "ButtonOutline"],
};
