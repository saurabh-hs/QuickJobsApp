package com.quickjobs.utility;

public class Data {
    public static String getMessageBody(String otp, String name) {
        return "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "  <meta charset=\"UTF-8\">\n" +
                "  <title>OTP Verification</title>\n" +
                "  <style>\n" +
                "    body {\n" +
                "      background-color: #f4f4f4;\n" +
                "      font-family: Arial, sans-serif;\n" +
                "      margin: 0;\n" +
                "      padding: 0;\n" +
                "    }\n" +
                "    .email-container {\n" +
                "      max-width: 600px;\n" +
                "      margin: 30px auto;\n" +
                "      background-color: #ffffff;\n" +
                "      padding: 30px;\n" +
                "      border-radius: 8px;\n" +
                "      box-shadow: 0 0 5px rgba(0,0,0,0.1);\n" +
                "    }\n" +
                "    .header {\n" +
                "      text-align: center;\n" +
                "      color: #333;\n" +
                "    }\n" +
                "    .otp-box {\n" +
                "      background-color: #f0f0f0;\n" +
                "      padding: 20px;\n" +
                "      text-align: center;\n" +
                "      font-size: 24px;\n" +
                "      font-weight: bold;\n" +
                "      letter-spacing: 3px;\n" +
                "      margin: 20px 0;\n" +
                "      border-radius: 6px;\n" +
                "    }\n" +
                "    .footer {\n" +
                "      text-align: center;\n" +
                "      font-size: 12px;\n" +
                "      color: #777;\n" +
                "      margin-top: 30px;\n" +
                "    }\n" +
                "  </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "  <div class=\"email-container\">\n" +
                "    <h2 class=\"header\">Verify Your Email</h2>\n" +
                "    <p>Dear "+name+",</p>\n" +
                "    <p>Your One-Time Password (OTP) for email verification is:</p>\n" +
                "\n" +
                "    <div class=\"otp-box\">%s</div>\n" + otp +
                "\n" +
                "    <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>\n" +
                "\n" +
                "    <p>Regards,<br><strong>Quick Jobs</strong></p>\n" +
                "\n" +
                "    <div class=\"footer\">\n" +
                "      If you did not request this, please ignore this email.<br>\n" +
                "      © 2025 QuickJobs Company. All rights reserved.\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</body>\n" +
                "</html>";
    }
}
