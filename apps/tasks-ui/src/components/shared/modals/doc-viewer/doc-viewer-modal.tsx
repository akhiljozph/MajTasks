import { Box, Modal } from "@mui/material";
import DOMPurify from "dompurify";

import "./doc-viewer-modal.modules.scss";
import { DocViewrModalProps } from "./doc-viewer-modal.types";

const PrivacyPolicyContent = `<div class="privacy-policy">
  <h1>Privacy Policy</h1>
  <p><strong>Last Updated:</strong> July 19, 2026</p>

  <p>
    This Privacy Policy explains how we collect, use, disclose, and safeguard
    your information when you use our application ("Service"). By using the
    Service, you agree to the collection and use of information in accordance
    with this Privacy Policy.
  </p>

  <h2>1. Information We Collect</h2>

  <h3>Personal Information</h3>
  <p>We may collect personal information that you voluntarily provide, including:</p>
  <ul>
    <li>Full name</li>
    <li>Email address</li>
    <li>Phone number (if provided)</li>
    <li>Account credentials</li>
  </ul>

  <h3>Usage Information</h3>
  <p>We may automatically collect certain information, such as:</p>
  <ul>
    <li>Browser type and version</li>
    <li>Device information</li>
    <li>IP address</li>
    <li>Pages visited</li>
    <li>Date and time of access</li>
    <li>Diagnostic and error logs</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <p>Your information may be used to:</p>
  <ul>
    <li>Provide and maintain the Service.</li>
    <li>Authenticate your account.</li>
    <li>Respond to customer support requests.</li>
    <li>Improve the performance and usability of the Service.</li>
    <li>Send important account or security notifications.</li>
    <li>Comply with legal obligations.</li>
  </ul>

  <h2>3. Cookies and Similar Technologies</h2>
  <p>
    We may use cookies and similar technologies to remember your preferences,
    improve user experience, and analyze application usage. You may disable
    cookies through your browser settings; however, some features may not
    function properly.
  </p>

  <h2>4. Sharing of Information</h2>
  <p>We do not sell your personal information. We may share information:</p>
  <ul>
    <li>With trusted service providers who assist in operating the Service.</li>
    <li>When required by applicable law or legal process.</li>
    <li>To protect our rights, users, or property.</li>
    <li>As part of a business transfer such as a merger or acquisition.</li>
  </ul>

  <h2>5. Data Security</h2>
  <p>
    We implement reasonable technical and organizational measures to protect
    your information against unauthorized access, disclosure, alteration, or
    destruction. However, no method of electronic transmission or storage is
    completely secure.
  </p>

  <h2>6. Data Retention</h2>
  <p>
    We retain your personal information only for as long as necessary to
    provide the Service, comply with legal obligations, resolve disputes, and
    enforce our agreements.
  </p>

  <h2>7. Your Rights</h2>
  <p>Depending on your location, you may have the right to:</p>
  <ul>
    <li>Access your personal information.</li>
    <li>Correct inaccurate information.</li>
    <li>Request deletion of your data.</li>
    <li>Withdraw consent where applicable.</li>
    <li>Request a copy of your personal data.</li>
  </ul>

  <h2>8. Third-Party Services</h2>
  <p>
    Our Service may integrate with third-party providers. Their collection and
    use of information are governed by their respective privacy policies.
  </p>

  <h2>9. Children's Privacy</h2>
  <p>
    The Service is not intended for individuals under the age required by
    applicable law. We do not knowingly collect personal information from
    children.
  </p>

  <h2>10. Changes to This Privacy Policy</h2>
  <p>
    We may update this Privacy Policy from time to time. Any changes will be
    posted on this page with an updated "Last Updated" date.
  </p>

  <h2>11. Contact Us</h2>
  <p>
    If you have any questions regarding this Privacy Policy, please contact us
    through the contact information provided within the application.
  </p>

  <hr />

  <p>
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

const DocViewerModal: React.FC<DocViewrModalProps> = (props: DocViewrModalProps) => {

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