import { useEffect, useState } from "react";
import "./App.css";
import Tank from "./components/tank/tank";
import {BsGithub, BsLinkedin} from 'react-icons/bs' 
import { MdMail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";

function App() {
  const [waterLevel, setWaterLevel] = useState({
    tank1: 0,
    tank2: 0,
    tank3: 0,
    tank4: 0,
  });
  const [isBalancing, setIsBalancing] = useState(false);

  useEffect(() => {
    console.log("isBalancing", isBalancing);
    if (isBalancing) {
      const { tank1, tank2, tank3, tank4 } = waterLevel;
      const perTank = Math.floor(tank1 + tank2 + tank3 + tank4) / 4;
      console.log(perTank);
        setWaterLevel(() => ({
          tank1: perTank,
          tank2: perTank,
          tank3: perTank,
          tank4: perTank,
        }));
    }
  }, [isBalancing]);

  const emptyTank = (tank) => {
    switch (tank) {
      case 1:
        setWaterLevel((state) => ({ ...state, tank1: 0 }));
        break;
      case 2:
        setWaterLevel((state) => ({ ...state, tank2: 0 }));
        break;
      case 3:
        setWaterLevel((state) => ({ ...state, tank3: 0 }));
        break;
      case 4:
        setWaterLevel((state) => ({ ...state, tank4: 0 }));
        break;
      default:
        setWaterLevel({ tank1: 0, tank2: 0, tank3: 0, tank4: 0 });
        
    }
  };

  const addWater = (tank) => {
    switch (tank) {
      case 1:
        setWaterLevel((state) => ({
          ...state,
          tank1: state.tank1 + 200 <= 1000 ? state.tank1 + 200 : 1000,
        }));
        break;
      case 2:
        setWaterLevel((state) => ({
          ...state,
          tank2: state.tank2 + 200 <= 1000 ? state.tank2 + 200 : 1000,
        }));
        break;
      case 3:
        setWaterLevel((state) => ({
          ...state,
          tank3: state.tank3 + 200 <= 1000 ? state.tank3 + 200 : 1000,
        }));
        break;
      case 4:
        setWaterLevel((state) => ({
          ...state,
          tank4: state.tank4 + 200 <= 1000 ? state.tank4 + 200 : 1000,
        }));
        break;
      default:
        setWaterLevel({ tank1: 0, tank2: 0, tank3: 0, tank4: 0 });
        
    }
  };

  return (
    <div className="App">
      <header>
        <p id="title">Water Tank Challenge</p>
        <p id="subtitle">By Nishant Jain</p>
      </header>
      <div className="socials">
        <p>Connect with me on - </p>
        <div className="social-btn">
          <a href="https://nishantjain.netlify.app"><CiGlobe />Nishant Jain</a>
        </div>
        <div className="social-btn">
          <a href="https://www.linkedin.com/in/nishantdjain/"><BsLinkedin />LinkedIn</a>
        </div>
        <div className="social-btn">
          <a href="https://github.com/NishantJain25"><BsGithub />Github</a>
        </div>
        <div className="social-btn">
          <a href="mailto:nishantjain2503@gmail.com"><MdMail />nishantjain2503@gmail.com</a>
        </div>
        <div className="social-btn">
          <a href="https://drive.google.com/file/d/1ytoPymznl9FUwYM2hYP64UjrK3S150g0/view?usp=sharing" target="_blank"><TbFileCv />View CV</a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Tank
            waterLevel={waterLevel.tank1}
            addWater={() => addWater(1)}
            emptyTank={() => emptyTank(1)}
            setIsBalancing={setIsBalancing}
          />
          <Tank
            waterLevel={waterLevel.tank2}
            addWater={() => addWater(2)}
            emptyTank={() => emptyTank(2)}
            setIsBalancing={setIsBalancing}
          />
          <Tank
            waterLevel={waterLevel.tank3}
            addWater={() => addWater(3)}
            emptyTank={() => emptyTank(3)}
            setIsBalancing={setIsBalancing}
          />
          <Tank
            waterLevel={waterLevel.tank4}
            addWater={() => addWater(4)}
            emptyTank={() => emptyTank(4)}
            setIsBalancing={setIsBalancing}
          />
        </div>
        <button className="empty-btn" onClick={() => setWaterLevel({tank1: 0,
    tank2: 0,
    tank3: 0,
    tank4: 0,})}>Reset all tanks</button>
      </div>
    </div>
  );
}

export default App;
