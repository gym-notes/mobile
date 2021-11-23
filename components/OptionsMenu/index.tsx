import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const OptionsMenu = () => {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <View style={{ alignItems: 'flex-end' }}>
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={showMenu} style={styles.buttonOptionsStyle}>
            <EntypoIcon name="dots-three-horizontal" color="#BCBCC0" size={30} />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}>
        <MenuItem onPress={hideMenu}>Add exercise</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Replace Exercise</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Delete exercise</MenuItem>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOptionsStyle: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
  },
});

export default OptionsMenu;
