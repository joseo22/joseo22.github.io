import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [board, setBoard] = useState({
    idx: 0,
    title: '',
    createdBy: '',
    contents: '',
  });

  const { title, createdBy, contents } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const getBoard = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/board/${idx}`);
      setBoard(response.data); // response.data 안에서 필요한 데이터 추출
    } catch (error) {
      console.error('Error fetching board:', error);
    }
  };

  const updateBoard = async () => {
    try {
      await axios.patch(`http://localhost:8080/board/${idx}`, board);
      alert('수정되었습니다.');
      navigate(`/board/${idx}`);
    } catch (error) {
      console.error('Error updating board:', error);
    }
  };

  const backToDetail = () => {
    navigate(`/board/${idx}`);
  };

  useEffect(() => {
    getBoard();
  }, [idx]); // idx가 변경될 때마다 useEffect 재실행

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input type="text" name="createdBy" value={createdBy} readOnly />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="contents"
          cols="30"
          rows="10"
          value={contents}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={updateBoard}>수정</button>
        <button onClick={backToDetail}>취소</button>
      </div>
    </div>
  );
};

export default BoardUpdate;
