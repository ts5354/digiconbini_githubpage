import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import Staff from "../components/Staff"
import Customer from '../components/customer';
import Girl from "./girl.jpeg";
import Roundgirl from '../components/roundgirl';
import Fukidashi from '../components/fukidashi';
import SelectPop2 from '../components/selectpop2';
const Stage1R2 = () => {
  const [value, setValue] = useState("客:袋ください");
  const [isGameOver, setIsGameOver] = useState(false);
  const [vis, setVis] = useState("hidden");
  const [isDisabled, setIsDisabled] = useState(false); // Fukidashiから移動
  const makeVisible = () => {
    setVis("visible");
  };
  const handleClick = () => {
    setIsGameOver(true);
    navigate('/gameover2');
  };
  const trueAnswer = () => {
    setVis("hidden");
  };
  const returnAnswer = () => {
    setIsDisabled(true) ;
  };
  const enableFukidashi = () => {
    setIsDisabled(false); // Fukidashiを有効にする関数
  };
  const disableFukidashi = () => {
    setIsDisabled(true); // Fukidashiのボタンを無効化
  };
  
    const navigate = useNavigate(); // useNavigateフックを使用してnavigate関数を取得
  
    const Stage1Round3 = () => {
      navigate('/stage1/round3'); // ボタンがクリックされたときに/stage1にナビゲート
    };
  
    
  return (
    <div>
        <Staff/>
        
        <Customer src={Girl} />
        <Fukidashi value={value} makeVisible={makeVisible} isDisabled={isDisabled} onButtonClick={disableFukidashi}/>
        <SelectPop2 
        pop11={"なんて言いました？"}
        pop22={"Sサイズでよろしかったでしょうか？"}
         vis={vis}
        onPop1Click={handleClick} 
        trueAnswer={trueAnswer}
        returnAnswer={enableFukidashi}
        stage1Round={Stage1Round3}
        />
        
    </div>
  );
}

export default Stage1R2;