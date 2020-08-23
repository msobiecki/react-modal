import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('[MODAL]', () => {
  it('[1] Initial', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });
  it('[2] Custom duration', () => {
    const wrapper = shallow(
      <Modal
        options={{
          openingDuration: 5000,
          closingDuration: 3000,
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[3] Custom z index', () => {
    const wrapper = shallow(
      <Modal
        options={{
          zIndex: 10,
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[4] With overlay', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isOverlay: true,
          openingDuration: 800,
          closingDuration: 500,
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[5] With custom overlay', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isOverlay: true,
          overlayPadding: '20px 10px 30px 40px',
          overlayBackground: 'rgba(111, 222, 121, 0.8)',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[6] With prevent close overlay', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isOverlay: true,
          isOverlayClosing: false,
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[7] With custom panel', () => {
    const wrapper = shallow(
      <Modal
        options={{
          panelBorderRadius: '20px 30px 10px 40px',
          panelBorder: '5px solid #332321',
          panelBackground: 'rgba(155,155,155,1)',
          panelBoxShadow: '0 0 5px 0 rgba(0, 0, 0, .2)',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[8] With restricted children width', () => {
    const wrapper = shallow(
      <Modal>
        <div style={{ width: '100%', maxWidth: '640px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[9] With overlay with restricted children width', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isOverlay: true,
        }}
      >
        <div style={{ width: '100%', maxWidth: '640px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[10] With restricted children width with restricted panel size', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isPanelRestrictedSize: true,
        }}
      >
        <div style={{ width: '100%', maxWidth: '640px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[11] With overlay with restricted children width with restricted panel size', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isOverlay: true,
          isPanelRestrictedSize: true,
        }}
      >
        <div style={{ width: '100%', maxWidth: '640px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[12] With fullscreen panel width and height with restricted panel size', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isPanelRestrictedSize: true,
          panelWidth: '100%',
          panelHeight: '100%',
        }}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[13] With overlay with fullcreen panel width and height with restricted panel size', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isOverlay: true,
          isPanelRestrictedSize: true,
          panelWidth: '100%',
          panelHeight: '100%',
        }}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium orci eu semper blandit. Fusce bibendum odio eu dolor
          elementum, accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris
          lobortis semper. Phasellus ut libero quis quam ornare tincidunt quis
          id diam. Pellentesque luctus libero ut dignissim iaculis. Quisque nec
          orci ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus
          enim, eget maximus lorem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque varius
          eget enim at varius. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum pretium orci eu semper blandit. Fusce
          bibendum odio eu dolor elementum, accumsan rhoncus mauris luctus. Sed
          feugiat iaculis mauris lobortis semper. Phasellus ut libero quis quam
          ornare tincidunt quis id diam. Pellentesque luctus libero ut dignissim
          iaculis. Quisque nec orci ullamcorper, pretium quam eu, gravida ipsum.
          Morbi at faucibus enim, eget maximus lorem. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque varius eget enim at varius. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum pretium orci eu semper
          blandit. Fusce bibendum odio eu dolor elementum, accumsan rhoncus
          mauris luctus. Sed feugiat iaculis mauris lobortis semper. Phasellus
          ut libero quis quam ornare tincidunt quis id diam. Pellentesque luctus
          libero ut dignissim iaculis. Quisque nec orci ullamcorper, pretium
          quam eu, gravida ipsum. Morbi at faucibus enim, eget maximus lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Pellentesque varius eget enim at varius. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium
          orci eu semper blandit. Fusce bibendum odio eu dolor elementum,
          accumsan rhoncus mauris luctus. Sed feugiat iaculis mauris lobortis
          semper. Phasellus ut libero quis quam ornare tincidunt quis id diam.
          Pellentesque luctus libero ut dignissim iaculis. Quisque nec orci
          ullamcorper, pretium quam eu, gravida ipsum. Morbi at faucibus enim,
          eget maximus lorem. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Pellentesque varius eget
          enim at varius.
        </div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('[14] Without close button', () => {
    const wrapper = shallow(
      <Modal
        options={{
          isPanelCloseButton: false,
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
