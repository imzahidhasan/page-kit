/**
 * Utility functions for the component showcase
 */

/**
 * Formats code string by removing common indentation and trimming
 */
export function formatCode(code: string): string {
  // Split into lines and filter out empty lines at the beginning and end
  const lines = code.split("\n");

  // Remove empty lines from the beginning
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }

  // Remove empty lines from the end
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }

  if (lines.length === 0) return "";

  // Find the minimum indentation (excluding empty lines)
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  if (nonEmptyLines.length === 0) return "";

  const minIndentation = Math.min(
    ...nonEmptyLines.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    })
  );

  // Remove common indentation
  const formattedLines = lines.map((line) => {
    if (line.trim() === "") return "";
    return line.slice(minIndentation);
  });

  return formattedLines.join("\n");
}

/**
 * Creates a template string for React component code
 */
export function createComponentTemplate(
  componentName: string,
  imports: string[],
  jsx: string
): string {
  const importStatements = imports.map((imp) => `import ${imp};`).join("\n");

  return formatCode(`
    ${importStatements}

    export default function ${componentName}() {
      return (
        ${jsx}
      );
    }
  `);
}
