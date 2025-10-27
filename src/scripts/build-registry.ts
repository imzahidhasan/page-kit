import fs from "fs";
import path from "path";
import { components } from "./components";
import { RegistryItemSchema, RegistryType } from "../types/types";

const registryPath = path.resolve(__dirname, "../../public/registry");

if (!fs.existsSync(registryPath)) {
  fs.mkdirSync(registryPath, { recursive: true });
}

console.log(`Building component registry...`);

for (const component of components) {
  console.log(`Processing component: ${component.name}`);

  let mainContent: string;
  try {
    mainContent = fs.readFileSync(component.path, "utf-8");
  } catch (error) {
    console.error(`Error reading component file ${component.path} for ${component.name}`, error);
    continue;
  }

  const files: { path: string; content: string; type: RegistryType }[] = [
    {
      path: `${component.name}.tsx`,
      content: mainContent,
      type: "registry:ui" as RegistryType,
    },
  ];

  if (component.files && component.files.length > 0) {
    for (const file of component.files) {
      try {
        const fileContent = fs.readFileSync(file.path, "utf-8");
        files.push({
          path: file.name,
          content: fileContent,
          type: (file.type ?? "registry:ui") as RegistryType,
        });
      } catch (error) {
        console.error(
          `Error reading dependency file ${file.path} for component ${component.name}`,
          error
        );
      }
    }
  }

  const componentSchema: RegistryItemSchema = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: component.name,
    title: component.title,
    description: component.description,
    author: component.author ?? "Md Zahid Hasan (fb: @imzahidhasan.io)",
    type: "registry:ui",
    dependencies: component.dependencies ?? [],
    devDependencies: component.devDependencies ?? [],
    registryDependencies: component.registryDependencies ?? [],
    cssVars: component.cssVars ?? { dark: {}, light: {} },
    files,
  };

  try {
    fs.writeFileSync(
      path.join(registryPath, `${component.name}.json`),
      JSON.stringify(componentSchema, null, 2)
    );
    console.log(`Written ${component.name}.json to registry`);
  } catch (error) {
    console.error(`Error writing registry file for ${component.name}`, error);
  }
}
