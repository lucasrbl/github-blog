import { Card, Header, Input } from "../components";
import coverImage from "../assets/cover.png";

export function Home() {
    return (
        <>
            <div style={{ backgroundImage: `url(${coverImage})` }} className="h-[300px] w-full bg-cover bg-center"></div>
            <div className="max-w-360 mx-75 -mt-24 mb-50 flex flex-col m-">
                <Header />

                <div className="mb-12 mt-[70px]">
                    <div className="mb-3 flex justify-between">
                        <h2 className="text-title-small text-base-subtitle">Publicações</h2>
                        <span className="text-base-span text-small">6 publicações</span>
                    </div>
                    <Input placeholder="Buscar conteúdo" className="w-full mb-8" />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        </div>
        </>
    )
}