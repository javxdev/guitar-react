import background from "/img/header.jpg"

function Header() {
  return (
    <div className="h-32 md:h-52">
        <img className="h-32 md:h-52 absolute w-screen object-cover" src={background} alt="background"/>
        <div className="h-32 md:h-52 relative bg-black/75 flex items-center">
        
        <div className="px-4 md:px-0 w-full flex justify-between max-w-4xl mx-auto">
        <div className="relative">
            <img className="w-36 md:w-56" src="/img/logo.svg" alt="" />
        </div>

        <div className="relative flex items-center">
            <a href="">
                <img className="w-10 md:w-14" src="/img/carrito.png" alt="" />
            </a>
        </div>
        </div>
    </div>
</div>

  )
}

export default Header