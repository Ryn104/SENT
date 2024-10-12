import photos from "../assets/image.js";

const Chat = () => {

    return (
        <div className="w-full">
            <div className="header w-full h-[10%] flex border-b border-gray-700">
                <div className="kontak flex py-3 px-9 justify-between w-full">
                    <div className="flex gap-3">
                        <div className="flex items-center"><img className="w-[3.3vw] rounded-full" src={photos.nurkalam} alt="" /></div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-semibold text-2xl">Nun</h1>
                            <p className="text-lg">Terakhir online 1000 tahun yang lalu.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div><img className="h-[1.4vw]" src={photos.search} alt="" /></div>
                        <div><img className="h-[1.6vw]" src={photos.call} alt="" /></div>
                        <div><img className="h-[1.6vw]" src={photos.videocall} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="value-chat px-5 pt-8 h-[83%]">
                <div className="flex justify-center mb-4">
                    <h1 className="text-lg"> -- Senin, 26 Agustus 2024 -- </h1>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble">Assalamu'alaikum</div>
                    <div className="chat-footer opacity-50">12:46</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble">Waalaikumsalam</div>
                    <div className="chat-footer opacity-50">12:58</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble">Perkenalkan saya Nurkalam Abdurohman</div>
                    <div className="chat-footer opacity-50">13:01</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble mb-1">Baik ada apa?</div>
                    <div className="chat-bubble w-[45%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis saepe cum doloribus ex quaerat nam neque commodi possimus consequatur, omnis molestias illo vel molestiae autem, ab reprehenderit fugit. Voluptatibus?</div>
                    <div className="chat-footer opacity-50">13:15</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble mb-1">Baik, tolong save nomor saya</div>
                    <div className="chat-bubble w-[45%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo culpa tempora natus quod eveniet consectetur enim at similique, iste dolor commodi exercitationem praesentium necessitatibus perspiciatis voluptates. Veniam dicta eius maxime?</div>
                    <div className="chat-footer opacity-50">13:17</div>
                </div>
                <div className="flex justify-center my-4">
                    <h1 className="text-lg"> -- Selasa, 27 Agustus 2024 -- </h1>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble">Saya dari divisi Programing mau mengadakan lomba.</div>
                    <div className="chat-footer opacity-50">08:30</div>
                </div>
            </div>
            <div className="input-chat px-5">
                <label className="input input-bordered flex items-center gap-2 w-full h-[45px]">
                    <input type="text" className="grow text-lg" placeholder="Masukan Pesan" />
                    <div className="icon flex gap-3">
                        <img className="w-[1vw]" src={photos.microphone} alt="" />
                        <img className="w-[1vw]" src={photos.stiker} alt="" />
                        <img className="w-[1vw]" src={photos.addimage} alt="" />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Chat;