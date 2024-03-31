import Hero from "@components/Hero"
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
      Smyckes Butiken💍
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Trendigt & Billigt</span>
    </h1>
    <p className='desc text-center'>
    Stort urval av armband, ringar💍, halsband, örhängen och andra accessoarer👑 
    </p>
    <Hero />
    </section>
  )
}

export default Home