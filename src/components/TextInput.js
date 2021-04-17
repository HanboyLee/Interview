import React from 'react';

const TextInput = ({ field, ...props }) => {
    return <input name={field.name} as="input" type="text" value={field.value} onChange={field.onChange} {...props} />;
};

export default TextInput;
