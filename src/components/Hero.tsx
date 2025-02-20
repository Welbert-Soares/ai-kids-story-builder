import { Button } from "@heroui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[70px] text-primary font-extrabold py-10">
            Crie Histórias Magicas para Crianças em Minutos
          </h2>
          <p className="text-2xl text-primary font-light">
            Criar histórias divertidas e personalizadas que dão vida às
            aventuras do seu filho e despertam sua paixão pela leitura. Leva
            apenas alguns segundos!
          </p>
          <Button size="lg" color="primary" className="mt-5">
            Criar História
          </Button>
        </div>
        <div>
          <Image src={"/hero.png"} alt="Hero" width={700} height={400} />
        </div>
      </div>
    </div>
  )
}

export { Hero }
