import {useState} from "react";

export default function useToggle(toggle = false) {
  const [isToggled, setIsToggled] = useState(toggle);
  const handleToggle = () => setIsToggled(!isToggled);
  return {isToggled, handleToggle};
}
