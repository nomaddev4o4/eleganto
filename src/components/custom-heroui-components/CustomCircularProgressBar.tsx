import React from "react";
import { CircularProgress } from "@heroui/progress";

export default function CustomCircularProgressBar() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <CircularProgress
      aria-label="Loading..."
      color="warning"
      showValueLabel={true}
      size="lg"
      value={value}
      strokeWidth={3}
      classNames={{
        svg: "w-20 h-20",
      }}
    />
  );
}
