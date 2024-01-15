import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Home({ array, setObj }) {
  let [count, setCount] = useState(0);

  let navigate = useNavigate();

  const compareCount = () => {
    setCount(count++);
    if (count > 5) {
      navigate("/about");
    }
  };

  return (
    <section>
      <button onClick={compareCount}>PLUS</button>
      <p>{count}</p>
      <h1>Home</h1>
      <ul className="list-of-users">
        {array.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                setObj(item);
              }}
            >
              <Link to={`/user/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Home;
