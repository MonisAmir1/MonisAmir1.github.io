import kaggleLogo from "@/assets/kaggle.png";

export function KaggleIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-current ${className ?? ""}`}
      style={{
        maskImage: `url(${kaggleLogo})`,
        WebkitMaskImage: `url(${kaggleLogo})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
