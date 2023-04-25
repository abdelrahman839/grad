import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { download } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom"

const DownloadCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const navigate = useNavigate();
  const isAuth = () => {
    if (localStorage.getItem("Fly_User_Token") == null) {
      navigate('/sign-in')
    } else {
      window.open(source_code_link, "_blank")
    }

  }
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => isAuth()}
      style={{ cursor: "pointer" }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div

          className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='Download_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Downloads = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Download options</p>
        <h2 className={`${styles.sectionHeadText}`}>Download.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          We have developed two versions of our app one for windows users and one for andorid users and in future we will launch new version for iOS platform.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {download.map((download, index) => (
          <DownloadCard key={`Download-${index}`} index={index} {...download} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Downloads, "downloads");
