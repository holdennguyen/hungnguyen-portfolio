import Link from 'next/link';

import { FiDisc } from 'react-icons/fi';

export default function CurrentGoals() {
  return (
    <div className='my-6 w-full pb-8'>
      <ul>
          <li className='mb-4 flex items-center gap-4'>
            <div>
              <FiDisc className='h-6 w-6 text-green-500' />
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-200 md:text-base'>
              {' '}
              <Link href='https://www.credly.com/badges/db6f862c-7030-4951-8314-f1c698318c16/linked_in_profile'>
                <a target='_blank' className='text-primary hover:text-primary/70'>AWS Certified Solution Architect - Associate</a>
              </Link>
            </p>
          </li>
          <li className='mb-4 flex items-center gap-4'>
            <div>
              <FiDisc className='h-6 w-6 text-green-500' />
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-200 md:text-base'>
              FPT Academy DevOps Certification
            </p>
          </li>
      </ul>
    </div>
  );
}
