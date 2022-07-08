import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Navbar = ({
  setSearchDetails,
  currentPage,
  setCurrentPage,
  modal,
  setModal,
  bookmark,
  setBookmark,
  displayBookmark,
}) => {
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const bookmarkRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchDetails(inputText);
  };

  const openBookmark = () => {
    bookmarkRef.current.style.display = "flex";
  };
  const closeBookmark = () => {
    bookmarkRef.current.style.display = "none";
  };
  return (
    <div className="header">
      <Image src="/img/logo.png" alt="logo" width={150} height={50} />
      <form
        onSubmit={(e) => handleClick(e)}
        className="flex search justify-between gap-4 pl-10 "
      >
        <input
          type="text"
          placeholder="Search over 1,000,000 recipes..."
          className="h-[23px] text-[1.7rem] flex-1 focus:outline-none "
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="flex w-[173.52px] h-[53px] justify-evenly items-center  text-4xl bg-bgHeaderButton rounded-full text-white font-medium">
          <AiOutlineSearch />
          <span>Search</span>
        </button>
      </form>
      <nav className="flex relative h-[100px]">
        <ul className="flex w-[297.3px] justify-around">
          <li className="flex cursor-pointer  w-[145px] justify-center gap-4 items-center text-[1.4rem] text-[#615551] font-semibold ">
            <span className="text-[#f48982]">
              <FiEdit />
            </span>
            <span onClick={() => setModal(true)}>Add Recipe</span>
          </li>
          <li
            onMouseLeave={() => closeBookmark()}
            className="flex cursor-pointer w-[145px] justify-center gap-4 items-center text-[1.5rem] text-[#615551] font-semibold z-[10000] "
          >
            <span onMouseOver={() => openBookmark()} className="text-[#f48982]">
              <FaRegBookmark />
            </span>
            <span onMouseOver={() => openBookmark()}>Bookmarks</span>

            <ul className="bookmark" ref={bookmarkRef}>
              {!bookmark.length && (
                <p className="h-[200px] flex text-center justify-center items-center">
                  No bookmark yet. Find a nice recipe and bookmark it.
                </p>
              )}
              {bookmark.map((item) => (
                <li key={item?.id} onClick={() => displayBookmark(item.id)}>
                  <a className="flex  gap-8 py-[1.5rem] px-[3.25rem] items-center hover:bg-[#f2efee] cursor-pointer">
                    <Image
                      src={`${item?.image}`}
                      alt="item__image"
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-[#f38e82] max-w-[25rem] text-[1.45rem] overflow-hidden text-ellipsis whitespace-nowrap uppercase">
                        {item?.title}
                      </h3>
                      <h2 className="text-[#918581] text-[1.15rem] uppercase font-semibold">
                        {item?.publisher}
                      </h2>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
