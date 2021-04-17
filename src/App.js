import React from 'react';
import * as BCOM from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Field, Formik, Form } from 'formik';

//components
import { TextInput, Li, Dropdown, Textarea, DataNull } from './components';
const App = () => {
    const [text, setText] = React.useState([
        { value: 0, label: '反應敏捷，舉一能反三，能很快的進入各種學習情境，唯有時糊塗須常常提省。' },
        { value: 1, label: '性情憨厚，功課已有進步，不過仍需努力，字體欠端正，要好好練' },
        { value: 2, label: '天賦不錯，努力不夠，數理方面表現較佳，語文較差，需要好好練習' },
    ]);

    const [editText, setEditText] = React.useState('');

    const initialValues = {
        addText: '',
    };

    const sortHandle = (data) => data.sort((a, b) => (a.value < b.value ? 1 : -1));

    console.log(editText);
    return (
        <BCOM.Container className="my-5">
            <BCOM.Row className="justify-content">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm, ...props }) => {
                        setText((prev) => [{ value: prev.length, label: values.addText }, ...prev]);
                        resetForm();
                    }}
                >
                    {() => {
                        return (
                            <Form>
                                <BCOM.InputGroup className="mb-3">
                                    <Field name="addText" component={TextInput} placeholder={'輸入新評語'} />
                                    <BCOM.InputGroup.Append>
                                        <BCOM.Button variant="outline-secondary" type="submit">
                                            加入評語庫
                                        </BCOM.Button>
                                    </BCOM.InputGroup.Append>
                                </BCOM.InputGroup>
                            </Form>
                        );
                    }}
                </Formik>
            </BCOM.Row>
            {text.length < 1 ? (
                <DataNull errorText={'評語庫沒有資料'} />
            ) : (
                <>
                    <BCOM.Row className="justify-content">
                        <BCOM.Card style={{ width: '50%', overflowY: 'scroll', maxHeight: '300px' }}>
                            <BCOM.Card.Body>
                                <h5>加入評語庫</h5>
                                <ul>
                                    {sortHandle(text).map((t, index) => {
                                        return <Li key={t.value} text={t.label} />;
                                    })}
                                </ul>
                            </BCOM.Card.Body>
                        </BCOM.Card>
                    </BCOM.Row>
                    <BCOM.Row className="justify-content">
                        <Dropdown
                            value={editText}
                            setValue={setEditText}
                            options={text}
                            className="w-50 my-3"
                            isSearchable={false}
                        />
                    </BCOM.Row>
                    <BCOM.Row>
                        <Textarea
                            className="w-50"
                            editValue={editText}
                            text={text}
                            setText={setText}
                            setEditValue={setEditText}
                            placeholder={'手寫評語庫'}
                        />
                    </BCOM.Row>
                </>
            )}
        </BCOM.Container>
    );
};

export default App;
