import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, Backdrop, Button } from 'react-lds';

const tagline = (
  <span>
    Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show
    that to you. It is allowed to <a href="#top">contain links or be a link</a>.
  </span>
);

const modalLabel = 'example-modal';

const ExampleNormal = () =>
  <div className="demo-modal">
    <Modal label={modalLabel} open>
      <ModalHeader title="Modal Header" tagline={tagline} />
      <ModalContent>
        <div>
          <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
          incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
          quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat
          consequat elit dolor adipisicing.</p> <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore esse
          esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button neutral title="Cancel" />
        <Button brand title="Save" />
      </ModalFooter>
    </Modal>
    <Backdrop open />
  </div>;

export default ExampleNormal;
