import Link from 'next/link';

import { FaGithub, FaInstagram,FaLinkedin } from 'react-icons/fa';

export default function SocialIcons({ w = 'w-6', h = 'h-6' }) {
  const styles = {
    icon: `${w} ${h} text-slate-200 transition duration-300 hover:text-primary opacity-70 hover:opacity-100`,
  };

  return (
    <div className='mt-2 flex items-center space-x-8'>
      <Link href='https://github.com/holdennguyen'>
        <a target='_blank' rel='noopener noreferrer'>
          <FaGithub className={styles.icon} />
        </a>
      </Link>
      <Link href='https://www.linkedin.com/in/minhung/'>
        <a target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className={styles.icon} />
        </a>
      </Link>
      <Link href='https://www.instagram.com/__minhung__/'>
        <a target='_blank' rel='noopener noreferrer'>
          <FaInstagram className={styles.icon} />
        </a>
      </Link>
    </div>
  );
}
