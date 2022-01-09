import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { countryList } from '../../helpers/CountryList';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { IFormData } from '../RegisterForm';

interface IRegisterDropDownPickers {
  control: Control<IFormData>;
  errors: FieldErrors<IFormData>;
}

const RegisterDropDownPickers: React.FC<IRegisterDropDownPickers> = ({ control, errors }) => {
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <DropDownPicker
            onChangeValue={onChange}
            open={openDate}
            value={value}
            items={itemsDate}
            setOpen={setOpenDate}
            setValue={onChange}
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
        )}
        name="birthDate"
      />
      <Text style={styles.textError}>{errors.birthDate?.message}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <DropDownPicker
            onChangeValue={onChange}
            setValue={onChange}
            open={openGender}
            value={value}
            items={itemsGender}
            setOpen={setOpenGender}
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
        )}
        name="gender"
      />
      <Text style={styles.textError}>{errors.gender?.message}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <DropDownPicker
            onChangeValue={onChange}
            open={openCountry}
            value={value}
            items={itemsCountry}
            setOpen={setOpenCountry}
            setValue={onChange}
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
        )}
        name="country"
      />
      <Text style={styles.textError}>{errors.country?.message}</Text>
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
  textError: {
    color: 'red',
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 10,
  },
});

export default RegisterDropDownPickers;
