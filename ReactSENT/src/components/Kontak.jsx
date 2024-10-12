import React, { useEffect, useState } from "react";
import photos from "../assets/image.js";
import './Kontak.css';

const Kontak = () => {
    const [messages] = useState([
        { id: 'nun', name: 'Nun', message: "Saya dari divisi Programing mau mengadakan lomba.", imgSrc: photos.nurkalam },
        { id: 'sevian', name: 'Sevian', message: 'By 1 moskop', imgSrc: photos.sevian },
        { id: 'wandi', name: 'Wandi', message: 'Mie gacoan 2', imgSrc: photos.wandi },
        { id: 'riyan', name: 'Riyan', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad laborum ea iusto quod blanditiis fuga nisi non assumenda veritatis ab modi sapiente, quaerat ratione porro nam a distinctio doloribus nostrum!', imgSrc: photos.riyan },
        { id: 'rafli', name: 'Rafli', message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad laborum ea iusto quod blanditiis fuga nisi non assumenda veritatis ab modi sapiente, quaerat ratione porro nam a distinctio doloribus nostrum!', imgSrc: photos.rafli },
        { id: 'fajar', name: 'Fajar', message: 'Anda: Oke', imgSrc: photos.fajar },
        // Data lainnya...
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const highlightText = (text, query) => {
        if (!query) return text; 
        const regex = new RegExp(`(${query})`, 'gi'); 
        const parts = text.split(regex); 

        return parts.map((part, index) => 
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} style={{ color: "white", fontWeight: "bold" }}>{part}</span>
            ) : (
                part
            )
        );
    };

    const filteredMessages = messages.filter(({ name, message }) => 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const textElements = document.querySelectorAll('.message-text');
        textElements.forEach(el => {
            if (el.scrollWidth > el.offsetWidth) {
                el.classList.add('pesan');
            } else {
                el.classList.remove('pesan');
            }
        });
    }, [filteredMessages]);

    const renderRow = ({ id, name, message, imgSrc }) => (
        <tr key={id} className="w-full hover">
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-full border border-gray-900 h-20 w-20">
                            <img src={imgSrc} alt={name} />
                        </div>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip={message}>
                        <div className="font-bold text-lg text-start">
                            {highlightText(name, searchQuery)}
                        </div>
                        <div className="message-text opacity-50 text-lg truncate w-[14.5vw] text-start">
                            {highlightText(message, searchQuery)}
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );

    return (
        <div className="w-[22vw] border-gray-700 border-r">
            <h1 className="text-3xl font-semibold py-8 mx-10">Private Chat</h1>
            <div className="flex justify-center px-5">
                <label className="input input-bordered flex items-center gap-2 w-full">
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Search"
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="overflow-x-hidden mt-8 h-[85vh]">
                <table className="table">
                    <tbody>
                        {filteredMessages.map(renderRow)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Kontak;
