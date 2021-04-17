import React from 'react';
import { Form } from 'react-bootstrap';

const Textarea = ({ editValue, setEditValue, text, setText, ...props }) => {
    const [value, setValue] = React.useState('');
    const textRef = React.useRef();
    console.log(editValue);

    const onKeyPress = (e) => {
        if (e.charCode === 13) {
            setText(() => {
                const existText = [...text].filter((i) => i.value !== editValue.value);

                console.log(existText);
                return [{ value: editValue.value, label: value }, ...existText];
            });
            setValue('');
            setEditValue('');
        }
    };
    React.useEffect(() => {
        setValue(editValue.label);
    }, []);
    return (
        <>
            <Form.Control
                style={{ resize: 'none' }}
                disabled={!editValue}
                ref={textRef}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={onKeyPress}
                as="textarea"
                rows="4"
                value={value}
                {...props}
            />
        </>
    );
};

export default Textarea;
