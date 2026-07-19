import { Box, Modal } from "@mui/material";
import DOMPurify from "dompurify";

import "./doc-viewer-modal.modules.scss";
import { DocViewerModalProps } from "./doc-viewer-modal.types";

const PrivacyPolicyContent = `<div
  class="privacy-policy"
  style="
    font-family: Arial, Helvetica, sans-serif;
    color: #1f2937;
    font-size: 15px;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
  "
>
  <h1 style="margin: 0 0 8px; font-size: 32px; font-weight: 600; color: #111827;">
    Privacy Policy
  </h1>

  <p style="margin: 0 0 16px;">
    <strong>Last Updated:</strong> July 19, 2026
  </p>

  <p style="margin: 0 0 16px;">
    This Privacy Policy explains how we collect, use, disclose, and safeguard
    your information when you use our application ("Service"). By using the
    Service, you agree to the collection and use of information in accordance
    with this Privacy Policy.
  </p>

  <h2
    style="
      margin: 32px 0 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #e5e7eb;
      font-size: 22px;
      font-weight: 600;
      color: #111827;
    "
  >
    1. Information We Collect
  </h2>

  <h3 style="margin: 24px 0 8px; font-size: 18px; font-weight: 600;">
    Personal Information
  </h3>

  <p style="margin: 0 0 16px;">
    We may collect personal information that you voluntarily provide, including:
  </p>

  <ul style="margin: 0 0 16px 24px; padding: 0;">
    <li style="margin-bottom: 8px;">Full name</li>
    <li style="margin-bottom: 8px;">Email address</li>
    <li style="margin-bottom: 8px;">Phone number (if provided)</li>
    <li style="margin-bottom: 8px;">Account credentials</li>
  </ul>

  <!-- Continue applying the same pattern... -->

  <hr style="margin: 32px 0; border: 0; border-top: 1px solid #e5e7eb;" />

  <p style="margin: 0;">
    By using this Service, you acknowledge that you have read and understood
    this Privacy Policy and agree to the collection and use of your information
    as described herein.
  </p>
</div>`

// const TermsAndConditions = `<div class="terms-and-conditions">
//   <h1>Terms and Conditions</h1>
//   <p><strong>Last Updated:</strong> July 19, 2026</p>

//   <p>
//     Welcome to our application ("Service"). These Terms and Conditions
//     ("Terms") govern your access to and use of the Service. By creating an
//     account or using the Service, you agree to be bound by these Terms. If you
//     do not agree with any part of these Terms, you must not use the Service.
//   </p>

//   <h2>1. Acceptance of Terms</h2>
//   <p>
//     By accessing or using the Service, you confirm that you are legally capable
//     of entering into a binding agreement and that you agree to comply with these
//     Terms and all applicable laws and regulations.
//   </p>

//   <h2>2. User Accounts</h2>
//   <p>
//     To access certain features, you may be required to create an account. You
//     agree to:
//   </p>
//   <ul>
//     <li>Provide accurate and complete registration information.</li>
//     <li>Maintain the confidentiality of your account credentials.</li>
//     <li>Be responsible for all activities conducted under your account.</li>
//     <li>Notify us immediately of any unauthorized use of your account.</li>
//   </ul>

//   <h2>3. Acceptable Use</h2>
//   <p>You agree not to:</p>
//   <ul>
//     <li>Use the Service for any unlawful or fraudulent purpose.</li>
//     <li>Attempt to gain unauthorized access to systems or data.</li>
//     <li>Upload or distribute malicious software or harmful code.</li>
//     <li>Interfere with the operation or security of the Service.</li>
//     <li>Use the Service in a way that infringes the rights of others.</li>
//   </ul>

//   <h2>4. Intellectual Property</h2>
//   <p>
//     All content, software, logos, trademarks, graphics, and other materials
//     available through the Service are owned by or licensed to us and are
//     protected by applicable intellectual property laws. You may not reproduce,
//     modify, distribute, or create derivative works without prior written
//     permission.
//   </p>

//   <h2>5. User Content</h2>
//   <p>
//     If you submit or upload content to the Service, you retain ownership of your
//     content but grant us a non-exclusive, worldwide, royalty-free license to
//     use, store, process, and display it solely for the purpose of providing and
//     improving the Service.
//   </p>

//   <h2>6. Availability of Service</h2>
//   <p>
//     We strive to provide uninterrupted access to the Service but do not
//     guarantee continuous availability. The Service may be modified, suspended,
//     or discontinued at any time without prior notice.
//   </p>

//   <h2>7. Disclaimer of Warranties</h2>
//   <p>
//     The Service is provided on an "as is" and "as available" basis without
//     warranties of any kind, whether express or implied, including but not
//     limited to warranties of merchantability, fitness for a particular purpose,
//     and non-infringement.
//   </p>

//   <h2>8. Limitation of Liability</h2>
//   <p>
//     To the maximum extent permitted by law, we shall not be liable for any
//     indirect, incidental, special, consequential, or punitive damages arising
//     out of or relating to your use of the Service, even if we have been advised
//     of the possibility of such damages.
//   </p>

//   <h2>9. Termination</h2>
//   <p>
//     We reserve the right to suspend or terminate your access to the Service at
//     our sole discretion if you violate these Terms or engage in conduct that may
//     harm the Service or other users.
//   </p>

//   <h2>10. Governing Law</h2>
//   <p>
//     These Terms shall be governed by and construed in accordance with the laws
//     applicable in your jurisdiction, without regard to conflict of law
//     principles.
//   </p>

//   <h2>11. Changes to These Terms</h2>
//   <p>
//     We may update these Terms from time to time. Any changes will become
//     effective when posted within the Service. Continued use of the Service after
//     such updates constitutes your acceptance of the revised Terms.
//   </p>

//   <h2>12. Contact Information</h2>
//   <p>
//     If you have any questions about these Terms and Conditions, please contact
//     us using the contact information provided within the application.
//   </p>

//   <hr />

//   <p>
//     By using this Service, you acknowledge that you have read, understood, and
//     agree to be bound by these Terms and Conditions.
//   </p>
// </div>`

const DocViewerModal: React.FC<DocViewerModalProps> = (props: DocViewerModalProps) => {

    const sanitizedHTMl = DOMPurify.sanitize(PrivacyPolicyContent)
    return (
        <Modal
            open={props?.open}
            onClose={props?.onClose}
        >
            <Box className="doc-viewer-modal-card">
                <div dangerouslySetInnerHTML={{ __html: sanitizedHTMl }} />
            </Box>
        </Modal>
    )
}

export default DocViewerModal;