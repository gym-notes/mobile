import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useNavigationState } from '@react-navigation/native';

interface Props {
  deleteExercise?: () => void;
  modalVisible?: boolean;
  setModalVisible?: (arg: boolean) => void;
  setIsAddExercise?: (arg: boolean) => void;
}

const OptionsMenu: React.FC<Props> = ({
  deleteExercise,
  modalVisible,
  setModalVisible,
  setIsAddExercise,
}) => {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const routes = useNavigationState((state) => state.routes);
  const currentRoute = routes[routes.length - 1].name;

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
        {currentRoute !== 'ProfileScreen' ? (
          <>
            <MenuItem
              onPress={() => {
                setIsAddExercise?.(true);
                setModalVisible?.(!modalVisible);
                hideMenu();
              }}>
              Add exercise
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onPress={() => {
                setIsAddExercise?.(false);
                setModalVisible?.(!modalVisible);
                hideMenu();
              }}>
              Replace Exercise
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onPress={() => {
                deleteExercise?.();
                hideMenu();
              }}>
              Delete exercise
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>Edit Profile</MenuItem>
          </>
        )}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOptionsStyle: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    marginTop: 15,
  },
});

export default OptionsMenu;
