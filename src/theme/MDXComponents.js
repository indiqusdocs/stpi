import React, { useState } from 'react';
import OriginalMDXComponents from '@theme-original/MDXComponents';
import Modal from 'react-modal';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

Modal.setAppElement('#__docusaurus');

export default {
  ...OriginalMDXComponents,
  img: function ModalImage(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    return (
      <>
        {/* Page image */}
        <img
          {...props}
          onClick={handleClick}
          style={{
            cursor: 'zoom-in',
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '0.6rem auto',
            objectFit: 'contain',
          }}
        />

        {/* Modal with only the clicked image */}
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              position: 'relative',
              top: 'auto',
              left: 'auto',
              right: 'auto',
              bottom: 'auto',
              maxWidth: '80%',
              maxHeight: '80%',
              border: 'none',
              background: 'transparent',
              padding: 0,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'rgba(0,0,0,0.6)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '2rem',
              height: '2rem',
              cursor: 'pointer',
              fontSize: '1.2rem',
              zIndex: 1001,
            }}
          >
            ✕
          </button>

          {/* Zoomable image */}
          <Zoom overlayBgColorEnd="rgba(0,0,0,0.5)" zoomMargin={0}>
            <img
              src={props.src}
              alt={props.alt || ''}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            />
          </Zoom>
        </Modal>
      </>
    );
  },
};
