import Feed from "@components/Feed";
import Scoreboard from '@components/Subs';


const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Win Big with Expert Tips
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> TipsExpress</span>
    </h1>
    <p className='mt-5 text-lg text-gray-300 sm:text-xl max-w-2xl text-center'>
    Get the best soccer betting tips and increase your chances of winning. Join TipsXpress now!
    </p>

    {/* <Feed /> */}

  </section>
);

export default Home;