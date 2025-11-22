'use client'

import Link from 'next/link'

import {useState} from 'react'

import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';


export default function Footer(){
    return(
        <>
        <footer className="flex flex-col items-center">
            <div className="copyright mb-5">Copyright @Bibash Poudel</div>
            <div className="social_links list-none flex gap-x-7 mb-5">
                <li>
                    <Link href="https://www.facebook.com/bibash.poudel.92578/" target="_blank">
                    <FaFacebook className="h-5 w-5" />
                    
                    </Link>
                </li>
                <li>
                    <Link href="" target="_blank">
                    <FaInstagram className="h-5 w-5" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/bibash-poudel-23204338a/" target="_blank">
                    <FaLinkedin className="h-5 w-5" />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/bibash21-creator" target="_blank">
                    <FaGithub className="h-5 w-5" />
                    </Link>
                </li>
            </div>
            <div className="msg">
                Built with Next.js
            </div>
        </footer>
        </>
    )
}