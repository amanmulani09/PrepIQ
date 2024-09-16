import React from 'react';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const TabIcon = ({name, size, color}) => {
  const IconNameMap = {
    HOME: 'house',
    LANGUAGUES: 'language',
    BOOKMARKS: 'bookmark',
    PROFILE: 'user',
  };

  return (
    <FontAwesome6Icon name={IconNameMap[name]} size={size} color={color} />
  );
};

export default TabIcon;
