import React from 'react';

function Create(props){
    return <article>
    <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title,body);
    }}>
        <input type="text" name="title" placeholder='제목을 입력해주세요'/> <br/>
        <textarea name="body" placeholder='내용을 입력하세요'></textarea> <br/>
        <input type="submit" value="create"/> <br/>
        </form>
    </article>    
}

export default Create;
