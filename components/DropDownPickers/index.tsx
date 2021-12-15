import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { countryList } from '../../helpers/CountryList';

interface Props {
  valueDate: number | null;
  setValueDate: (arg: null) => void;
  valueGender: string | null;
  setValueGender: (arg: null) => void;
  valueCountry: string | null;
  setValueCountry: (arg: null) => void;
}

const DropDownPickers: React.FC<Props> = ({
  valueDate,
  setValueDate,
  valueGender,
  setValueGender,
  valueCountry,
  setValueCountry,
}) => {
  const [openDate, setOpenDate] = useState(false);
  const [itemsDate, setItemsDate] = useState<Array<object>>([]);
  const [openGender, setOpenGender] = useState(false);
  const [itemsGender, setItemsGender] = useState<Array<object>>([
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ]);
  const [openCountry, setOpenCountry] = useState(false);
  const [itemsCountry, setItemsCountry] = useState<Array<object>>([]);

  const getYears = () => {
    const year = new Date().getFullYear();
    const years = Array.from(new Array(100), (val, index) => year - index);
    const newData: Array<object> = [];
    years.map((item) => newData.push({ label: item, value: item }));
    setItemsDate(newData);
  };

  const getCountries = () => {
    const newData: Array<object> = [];
    countryList.map((item) => newData.push({ label: item, value: item }));
    setItemsCountry(newData);
  };

  useEffect(() => {
    getYears();
    getCountries();
  }, []);

  return (
    <>
      <DropDownPicker
        open={openDate}
        value={valueDate}
        items={itemsDate}
        setOpen={setOpenDate}
        setValue={setValueDate}
        setItems={setItemsDate}
        dropDownDirection="BOTTOM"
        theme="DARK"
        labelStyle={styles.labelStyle}
        textStyle={styles.textStyle}
        containerStyle={styles.containerStyle}
        style={styles.DropDownPickerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        placeholder="Date of birth"
      />
      <DropDownPicker
        open={openGender}
        value={valueGender}
        items={itemsGender}
        setOpen={setOpenGender}
        setValue={setValueGender}
        setItems={setItemsGender}
        dropDownDirection="BOTTOM"
        theme="DARK"
        labelStyle={styles.labelStyle}
        textStyle={styles.textStyle}
        containerStyle={styles.containerStyle}
        style={styles.DropDownPickerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        placeholder="Gender"
      />
      <DropDownPicker
        open={openCountry}
        value={valueCountry}
        items={itemsCountry}
        setOpen={setOpenCountry}
        setValue={setValueCountry}
        setItems={setItemsCountry}
        dropDownDirection="BOTTOM"
        theme="DARK"
        labelStyle={styles.labelStyle}
        textStyle={styles.textStyle}
        containerStyle={styles.containerStyle}
        style={styles.DropDownPickerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        placeholder="Country"
      />
    </>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: 'bold',
    color: '#BCBCC0',
    fontSize: 16,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#BCBCC0',
  },
  containerStyle: {
    borderWidth: 0,
  },
  DropDownPickerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#BCBCC0',
    backgroundColor: 'transparent',
  },
  dropDownContainerStyle: {
    elevation: 1000,
    zIndex: 100000,
  },
});

export default DropDownPickers;
