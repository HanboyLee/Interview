import React from 'react';
import Selected from 'react-select';
const Dropdown = ({ value, setValue, ...props }) => {
    const onChange = (e) => {
        setValue(e);
    };
    return <Selected onChange={onChange} {...props} value={value} />;
};

export default Dropdown;
