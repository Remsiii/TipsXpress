import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='black_gradient'>{name} Profile</span>
      </h1>
      <p className='white_gradient text-left'>{desc}</p>

    </section>
  );
};

export default Profile;