import { useEffect, useState } from "react";
import { Progress } from "@heroui/progress";

export default function CustomProgressBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      label="Downloading..."
      className="w-[300px]"
      color="success"
      showValueLabel={true}
      size="md"
      value={value}
    />
  );
}
