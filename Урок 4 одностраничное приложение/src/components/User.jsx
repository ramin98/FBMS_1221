import { useParams } from "react-router-dom";

function User({ obj, array }) {
  let { userId } = useParams();
  console.log(userId);
  return (
    <section>
      <ul>
        <li>{array[Number(userId) - 1].name}</li>
        <li>{array[Number(userId) - 1].email}</li>
        <li>{array[Number(userId) - 1].username}</li>
      </ul>
    </section>
  );
}

export default User;
