import { CountdownTimer } from "../../components/CoutdownTimer";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <CountdownTimer />
      <div className="logo-container">
        <img src="/logo.webp" alt="Noor Logo" className="logo-img" />
      </div>
    </header>
  );
};
