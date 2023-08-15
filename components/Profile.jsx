import { Link } from "react-router-dom";
import PromptCard from "./PromptCard";


const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='black_gradient'>{name}</span>
      </h1>
      <p className='white_gradient text-left'>{desc}</p>
      <Link type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Cancel Subsctiption
      </Link>
    </section>
  );
};

export default Profile;