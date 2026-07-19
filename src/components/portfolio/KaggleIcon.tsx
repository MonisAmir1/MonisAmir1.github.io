import kaggleLogo from "@/assets/kaggle.png.asset.json";

export function KaggleIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-current ${className ?? ""}`}
      style={{
        maskImage: `url(${kaggleLogo.url})`,
        WebkitMaskImage: `url(${kaggleLogo.url})`,
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
