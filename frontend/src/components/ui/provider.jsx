import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

const system = createSystem(defaultConfig);

export function Provider({ children }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}