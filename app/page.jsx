import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Bet Real Football</span>
    </h1>
    <p className='desc text-center'>
      Bet Real Football is a Footballbetting site where you get an football tipp for the next 
      football game
    </p>

    <Feed />
  </section>
);

export default Home;