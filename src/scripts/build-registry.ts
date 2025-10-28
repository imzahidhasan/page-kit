import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import chalk from "chalk";
import logSymbols from "log-symbols";
import { components } from "../constants/components";
import type { RegistryItemSchema, RegistryType } from "../types/types";

const REGISTRY_PATH = path.join(process.cwd(), "public/registry");
const DEFAULT_AUTHOR = "Md Zahid Hasan (fb: @imzahidhasan.io)";
const DEFAULT_TYPE: RegistryType = "registry:ui";

if (!existsSync(REGISTRY_PATH)) {
  mkdirSync(REGISTRY_PATH, { recursive: true });
}

console.log(
  chalk.green.bold(`${logSymbols.info} Building component registry...`)
);

for (const component of components) {
  console.log(
    chalk.blue(
      `${logSymbols.info} Processing component: ${chalk.green(component.name)}`
    )
  );

  let mainContent: string;
  const componentPath = path.join(process.cwd(), component.path);

  try {
    mainContent = readFileSync(componentPath, "utf-8");
  } catch (error) {
    console.error(
      chalk.red.bold(`${logSymbols.error} Error reading component file:`),
      chalk.yellow(componentPath),
      chalk.red(`for ${component.name}:`),
      error
    );
    continue;
  }

  const files: { path: string; content: string; type: RegistryType }[] = [
    {
      path: `${component.name}.tsx`,
      content: mainContent,
      type: DEFAULT_TYPE,
    },
  ];

  const componentSchema: RegistryItemSchema = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: component.name,
    title: component.title,
    description: component.description,
    author: (component as { author?: string }).author ?? DEFAULT_AUTHOR,
    type: (component as { type?: RegistryType }).type ?? DEFAULT_TYPE,
    dependencies: component.dependencies ?? [],
    devDependencies: [],
    registryDependencies: [],
    cssVars: { dark: {}, light: {} },
    files,
  };

  try {
    writeFileSync(
      path.join(REGISTRY_PATH, `${component.name}.json`),
      JSON.stringify(componentSchema, null, 2)
    );
    console.log(
      chalk.green(
        `  ${logSymbols.success} Written ${chalk.cyan(
          component.name + ".json"
        )} to registry`
      )
    );
  } catch (error) {
    console.error(
      chalk.red.bold(`${logSymbols.error} Error writing registry file:`),
      chalk.yellow(component.name),
      error
    );
  }
}

console.log(
  chalk.green.bold(
    `\n${logSymbols.success} Component registry built successfully!`
  )
);
