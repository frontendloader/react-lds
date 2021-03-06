import React from 'react';
import {
  Popover,
  MediaObject,
  Icon,
} from 'react-lds';

const icon = <Icon sprite="utility" icon="warning" size="x-small" background="text-warning" />;
const syntaxWarning = (
  <div>
    <h3 className="slds-m-bottom--xx-small">Syntax Warning</h3>
    <p className="slds-text-color--weak">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
    molestias reprehenderit consequuntur sapiente.</p>
  </div>
);
const fieldWarning = (
  <div>
    <h3 className="slds-m-bottom--xx-small">Field Warning</h3>
    <p className="slds-text-color--weak">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus
    molestias reprehenderit consequuntur sapiente. Modi veritatis totam
    accusantium numquam assumenda.</p>
  </div>
);
const body = (
  <div>
    <MediaObject figureLeft={icon} className="slds-border--top slds-p-around--small">
      {syntaxWarning}
    </MediaObject>
    <MediaObject figureLeft={icon} className="slds-border--top slds-p-around--small">
      {fieldWarning}
    </MediaObject>
  </div>
);
const onClose = () => {};

const Example = () => (
  <Popover
    open
    closeable
    onClose={onClose}
    header="Warnings"
    body={body}
    nubbin="bottom-right"
    panels
    customLayout="warning"
  />
);

export default Example;
