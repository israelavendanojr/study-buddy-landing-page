export function emailHtml(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>You're on the GarlicMonkey waitlist</title>
</head>
<body style="margin:0;padding:0;background-color:#F0EDE5;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0EDE5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#F9F7F2;border:1px solid #E6E2D3;box-shadow:4px 4px 0 #E6E2D3;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
              <img src="https://garlicmonkey.app/monkey_theme.svg" alt="GarlicMonkey" width="64" height="72" style="display:block;margin:0 auto 14px;filter:invert(1);">
              <p style="margin:0;color:#ffffff;font-size:20px;font-style:italic;letter-spacing:-0.3px;">GarlicMonkey</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px 32px;">
              <h1 style="margin:0 0 6px;color:#B35C1E;font-size:26px;font-weight:700;line-height:1.2;">You're in, Founding Chef!</h1>
              <hr style="border:none;border-top:2px solid #E6E2D3;margin:20px 0 24px;">
              <p style="margin:0 0 16px;color:#1a1a1a;font-size:16px;line-height:1.65;">
                You've secured a spot on the GarlicMonkey waitlist. You're among the first in line when we open the kitchen.
              </p>
              <p style="margin:0 0 24px;color:#1a1a1a;font-size:16px;line-height:1.65;">
                Here's what's coming your way as a Founding Chef:
              </p>

              <!-- Benefits list -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:11px 0;border-bottom:1px solid #E6E2D3;">
                    <span style="color:#B35C1E;font-weight:700;margin-right:10px;">&#10022;</span>
                    <span style="color:#1a1a1a;font-size:15px;">Early access before public launch</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:11px 0;border-bottom:1px solid #E6E2D3;">
                    <span style="color:#B35C1E;font-weight:700;margin-right:10px;">&#10022;</span>
                    <span style="color:#1a1a1a;font-size:15px;">Behind-the-scenes updates as we build</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:11px 0;">
                    <span style="color:#B35C1E;font-weight:700;margin-right:10px;">&#10022;</span>
                    <span style="color:#1a1a1a;font-size:15px;">Founding Chef status</span>
                  </td>
                </tr>
              </table>

              <!-- Tagline blockquote -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-left:3px solid #B35C1E;padding:14px 20px;background-color:#FDF9F3;">
                    <p style="margin:0;color:#3a3a3a;font-size:16px;font-style:italic;line-height:1.55;">
                      &ldquo;Stop following recipes. Start understanding food.&rdquo;
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F0EDE5;padding:18px 48px;border-top:1px solid #E6E2D3;text-align:center;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:13px;">
                <a href="https://garlicmonkey.app" style="color:#888;text-decoration:none;">garlicmonkey.app</a>
              </p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaa;">
                You received this because you signed up at garlicmonkey.app
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
