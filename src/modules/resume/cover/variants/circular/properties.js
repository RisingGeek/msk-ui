import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'Your Name',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Designation',
    required: false
  },
  imageUrl: {
    name: 'image',
    type: propertyTypes.URL,
    value: 'https://avatars3.githubusercontent.com/u/37294158',
    required: true
  }
};

export default properties;
