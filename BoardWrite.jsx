import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: '',
    createdBy: '',
    contents: '',
  });

  const { title, createdBy, contents } = board;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveBoard = async () => {
    try {
      await axios.post('http://localhost:8080/board', board);
      alert('게시글이 등록되었습니다.');
      navigate('/board'); // 등록 후 목록 페이지로 이동
    } catch (error) {
      console.error('게시글 등록 오류:', error);
      alert('게시글 등록에 실패하였습니다.');
    }
  };

  const handleCancel = () => {
    navigate('/board'); // 취소 후 목록 페이지로 이동
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={handleChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input type="text" name="createdBy" value={createdBy} onChange={handleChange} />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea name="contents" cols="30" rows="10" value={contents} onChange={handleChange}></textarea>
      </div>
      <br />
      <div>
        <button style={{ marginRight: '10px' }} onClick={saveBoard}>저장</button>
        <button onClick={handleCancel}>취소</button>
      </div>
    </div>
  );
};

export default BoardWrite;
