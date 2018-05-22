import React , {Component} from 'react';


const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color
    const submit = e => {
        e.preventDefault();
        onNewColor(_title.value, _color.value)
        _title.value = '';
        _color.value = '#000';
        _title.focus();
    }

    return (
        <form onSubmit={submit}>
            <input type="text"
                ref={input => _title = input}
                placeholder="색 이름.." required/>
            <input type="color"
                ref={input => _color = input}
                required/>
            <button>추가</button>
        </form>
    )
}