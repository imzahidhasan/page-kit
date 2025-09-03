import { codeToHtml } from "shiki";
import type { BuiltinLanguage } from "shiki";

interface CodeRendererProps {
  code: string;
  lang: BuiltinLanguage;
}

export const CodeRenderer = async ({
  code,
  lang = "tsx",
}: CodeRendererProps) => {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "slack-ochin",
      dark: "aurora-x",
    },
    defaultColor: false,
  });

  return (
    <div className="font-normal text-sm">
      <div
        className="bg-white dark:bg-[#07090F]"
        style={{ padding: "20px"}}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
