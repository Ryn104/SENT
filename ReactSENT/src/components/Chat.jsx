import React from "react";
import photos from "../assets/image.js";

const Chat = ({ contactId, chatData }) => {
    const chats = chatData[contactId] || [];

    return (
        <div className="w-full">
            <div className="header w-full h-[10%] flex border-b border-gray-700">
                <div className="kontak flex py-3 px-9 justify-between w-full">
                    <div className="flex gap-3">
                        <div className="flex items-center">
                            <img className="w-[3.3vw] rounded-full" src={photos[contactId]} alt={contactId} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-semibold text-2xl">{contactId}</h1>
                            <p className="text-lg">Terakhir online beberapa waktu lalu.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="value-chat px-5 pt-8 h-[83%] overflow-y-auto">
                {chats.map((chat, index) => {
                    const nextChat = chats[index + 1];
                    const shouldShowTime = !nextChat || nextChat.time !== chat.time; // Menampilkan waktu hanya jika pesan berikutnya berbeda atau tidak ada

                    return (
                        <div key={index} className={`chat ${chat.sender === "Anda" ? "chat-end" : "chat-start"}`}>
                            <div className="chat-bubble max-w-[52%]">{chat.message}</div>
                            {shouldShowTime && <div className="chat-footer opacity-50">{chat.time}</div>}
                        </div>
                    );
                })}
            </div>
            <div className="input-chat px-5">
                <label className="input input-bordered flex items-center gap-2 w-full h-[45px]">
                    <input type="text" className="grow text-lg" placeholder="Masukan Pesan" />
                </label>
            </div>
        </div>
    );
};

export default Chat;
