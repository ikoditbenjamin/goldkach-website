import React from "react";

interface ResetPasswordEmailProps {
  userFirstname?: string | null;
  resetPasswordLink: string;
}

export function ResetPasswordEmail({
  userFirstname,
  resetPasswordLink,
}: ResetPasswordEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#2D2B6B", padding: "24px", textAlign: "center" }}>
        <h1 style={{ color: "#ffffff", margin: 0, fontSize: "24px" }}>GoldKach</h1>
      </div>
      <div style={{ padding: "32px 24px", backgroundColor: "#ffffff" }}>
        <h2 style={{ color: "#2D2B6B", marginTop: 0 }}>Reset Your Password</h2>
        <p style={{ color: "#444", lineHeight: "1.6" }}>
          Hi {userFirstname ?? "there"},
        </p>
        <p style={{ color: "#444", lineHeight: "1.6" }}>
          We received a request to reset your GoldKach account password. Click the
          button below to choose a new password.
        </p>
        <div style={{ textAlign: "center", margin: "32px 0" }}>
          <a
            href={resetPasswordLink}
            style={{
              backgroundColor: "#1E9BF0",
              color: "#ffffff",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Reset Password
          </a>
        </div>
        <p style={{ color: "#888", fontSize: "12px", lineHeight: "1.6" }}>
          If you did not request a password reset, you can safely ignore this email.
          This link will expire in 24 hours.
        </p>
      </div>
      <div style={{ backgroundColor: "#F0F5FF", padding: "16px 24px", textAlign: "center" }}>
        <p style={{ color: "#888", fontSize: "11px", margin: 0 }}>
          © {new Date().getFullYear()} GoldKach Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}
