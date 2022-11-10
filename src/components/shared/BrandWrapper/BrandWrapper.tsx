import { BrandWrapperParams } from "./interface";

export const BrandWrapper: React.FC<BrandWrapperParams> = ({
  className,
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#1449f540",
        padding: "40px",
        borderRadius: "var(--border-radius)",
        boxShadow: "0px 0px 0px 28px rgba(20, 73, 245, 0.1)",
      }}
      className={className}
    >
      <div
        style={{
          backgroundColor: "#1449f540",
          padding: "28px",
          borderRadius: "var(--border-radius)",
        }}
      >
        <div
          style={{
            backgroundColor: "#1449f580",
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: "var(--border-radius)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
