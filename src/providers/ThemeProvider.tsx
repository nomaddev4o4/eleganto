import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
