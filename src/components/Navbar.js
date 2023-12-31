import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ModalComp from "./Modal";


export default function Navbar({ modalIsOpen, setModalOpen }) {

  function openModal() {
    setModalOpen(true);
  }

  return (
    <div className='container rounded-lg' >
      <div className='flex justify-between items-center p-5 bg-slate-100 w-screen px-12 shadow-lg '>
        <h1 className='font-semibold text-2xl text-blue-400 hover:text-black transition-all uppercase cursor-wait hover:text-3xl'>Alp Efe Akpınar</h1>
        <nav className='md:flex items-center gap-x-10'>
          <a target='_blank' href='https://github.com/alpefe44' className='text-gray-500 text-5xl hover:text-blue-400 hover:opacity-60 transition-all'><AiFillGithub></AiFillGithub></a>
          <a target='_blank' href='https://www.linkedin.com/in/alpefe/' className='text-gray-500 text-5xl hover:text-blue-400 hover:opacity-60 transition-all'><AiFillLinkedin></AiFillLinkedin></a>
        </nav>
        <nav className="md:flex md:space-x-12 md:items-center hidden">
          <a href='#hakkimda' className={`font-semibold text-lg hover:text-blue-400 transition-all hover:border-b-2 hover hover:border-dashed hover:border-green-400`}>Hakkımda</a>
          <a href='#' className='font-semibold text-lg hover:text-blue-400 transition-all hover:border-b-2 hover hover:border-dashed hover:border-green-400' onClick={() => {
            openModal()
          }}>İletişim</a>
        </nav>
      </div>

      <ModalComp modal={modalIsOpen} setModalOpen={setModalOpen}></ModalComp>
    </div>
  )
}
