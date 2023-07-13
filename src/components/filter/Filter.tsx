import { ChangeEvent } from "react";
import css from "./Filter.module.css";

interface PropsType {
  status: string;
  setStatus: (s: string) => void;
}
const Filter: React.FC<PropsType> = ({ status, setStatus }) => {
  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.name);
  };
  return (
    <div className={css.wrapper}>
      <label>
        <input
          checked={status === "all"}
          name="all"
          type="checkbox"
          onChange={handle}
        />
        All
      </label>
      <label>
        <input
          checked={status === "compleate"}
          name="compleate"
          type="checkbox"
          onChange={handle}
        />
        Compleate
      </label>
      <label>
        <input
          checked={status === "progress"}
          name="progress"
          type="checkbox"
          onChange={handle}
        />
        Progress
      </label>
    </div>
  );
};

export default Filter;
