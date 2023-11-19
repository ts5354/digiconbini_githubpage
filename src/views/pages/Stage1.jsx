import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import Staff from "../components/Staff"
import Customer from '../components/customer';
import Girl from "./girl.jpeg";
import Roundgirl from '../components/roundgirl';
import Fukidashi from '../components/fukidashi';
import SelectPop1 from '../components/selectpop1';
const Stage1 = () => {
  const [value, setValue] = useState("客:これください");
  const [isGameOver, setIsGameOver] = useState(false);
  const [vis, setVis] = useState("hidden");
  const [isDisabled, setIsDisabled] = useState(false); // Fukidashiから移動
  const navigate = useNavigate();
  const makeVisible = () => {
    setVis("visible");
  };
  const handleClick = () => {
    setIsGameOver(true);
    navigate('/gameover');
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
  
     // useNavigateフックを使用してnavigate関数を取得
  
    const Stage1Round2 = () => {
      navigate('/stage1/round2'); // ボタンがクリックされたときに/stage1にナビゲート
    };
  
    
  return (
    <div>
        <Staff/>
        <Roundgirl />
        <Customer src={Girl} />
        <Fukidashi value={value} makeVisible={makeVisible} isDisabled={isDisabled} onButtonClick={disableFukidashi}/>
        <SelectPop1 
        pop1={"..."}
        pop2={"レジ袋は要りますか"}
        vis={vis}
        onPop1Click={handleClick} 
        trueAnswer={trueAnswer}
        returnAnswer={enableFukidashi}
        stage1Round={Stage1Round2}
        />
        
    </div>
  );
}

export default Stage1;