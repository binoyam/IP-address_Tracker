//https://geo.ipify.org/api/v2/country,city?apiKey=at_tGGa4eww0Jo2bizhaFx8GeHo3B5z6&ipAddress=8.8.8.8
import arrow from './images/icon-arrow.svg'
import bgImage from './images/pattern-bg-desktop.png'


function App() {
  return (
    <>
      <section>
        <div className='absolute -z-10'>
          <img src={bgImage} className='w-full h-80 object-cover' />
        </div>
        <article className='p-8'>
          <h1 className='text-2xl lg:text-3xl text-center text-white font-bold mb-8'>IP Address Tracker</h1>

          <form className='flex justify-center max-w-xl mx-auto'>
            <input typeof="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP address or domain"
              required
              className='py-2 px-4 rounded-l-lg w-full'
            />
            <button type="submit" className='bg-black py-4 px-4 hover:opacity-60 rounded-r-lg'>
              <img src={arrow} />
            </button>
          </form>
        </article>
        <article className='max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 bg-white rounded shadow p-8 mx-8 lg:mx-auto '>
          <div className='lg:border-r lg:border-slate-400'>
            <h2 className='uppercase text-sm font-bold text-slate-500 tracking-wider mb-3'>IP Address</h2>
            <p className='font-bold text-slate-900 text-lg md:text-xl xl:text-3xl'>192.212.174.101</p>
          </div>
          <div>
            <h2 className='uppercase text-sm font-bold text-slate-500 tracking-wider mb-3'>Location</h2>
            <p className='font-bold text-slate-900 text-lg md:text-xl xl:text-3xl'>Brooklyn, NY 10001</p>
          </div>
          <div>
            <h2 className='uppercase text-sm font-bold text-slate-500 tracking-wider mb-3'>Timezone</h2>
            <p className='font-bold text-slate-900 text-lg md:text-xl xl:text-3xl'>UTC -05:00</p>
          </div>
          <div>
            <h2 className='uppercase text-sm font-bold text-slate-500 tracking-wider mb-3'>ISP</h2>
            <p className='font-bold text-slate-900 text-lg md:text-xl xl:text-3xl'>SPACEX STARLINK</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
