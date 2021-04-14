import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import getConfig from 'next/config';
import { destroyCookie } from 'nookies';

const { publicRuntimeConfig } = getConfig();

const handleLogout = () => {
  const logout = destroyCookie(null, 'user', {
    path: '/',
  });
  if (logout) {
    Router.push('/');
  }
};

export default function Navbar({ user }) {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-100 ">
        <div className="flex justify-between items-center py-6 md:justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/easy-baby.svg"
              alt="Easy Baby"
              width={100}
              height={72}
            />
          </div>
          {user && (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="flex-shrink-0 mr-2">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`${publicRuntimeConfig.STRAPI_API_URL}${user.avatar.url}`}
                    alt={user.username}
                  />
                </div>
                <button
                  className="bg-primary-100 p-1 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  type="button"
                  onClick={() => handleLogout()}
                >
                  <svg
                    className="h-8 w-8 p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {!user && (
            <a
              href="/api/login"
              className="px-6 py-2 rounded-full text-sm font-medium text-white bg-primary-100"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
