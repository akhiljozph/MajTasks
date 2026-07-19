import { Box, Modal } from "@mui/material";

import "./doc-viewer-modal.modules.scss";
import { DocViewrModalProps } from "./doc-viewer-modal.types";

const DocViewerModal: React.FC<DocViewrModalProps> = (props: DocViewrModalProps) => {
    return (
        <Modal
            open={props?.open}
            onClose={props?.onClose}
        >
            <Box className="doc-viewer-modal-card">
                <p>Doc Viewer Modal</p>
            </Box>
        </Modal>
    )
}

export default DocViewerModal;