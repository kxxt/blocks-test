import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import "./index.css";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";
  document.addEventListener("keypress",e => console.log(e))
  fetch("https://unpkg.com/react@16.7.0/umd/react.production.min.js").then(x=>console.log(x))
  console.warn(window.parent.document.cookie)
  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          File: {context.path} {language}
        </Box>
        <Box p={4}>
          <p>Metadata example: this button has been clicked:</p>
          <Button
            onClick={() =>
              onUpdateMetadata({ number: (metadata.number || 0) + 1 })
            }
          >
            {metadata.number || 0} times
          </Button>
          <pre className="mt-3 p-3">{content}</pre>
        </Box>
      </Box>
    </Box>
  );
}