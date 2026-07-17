"use client";

import {
FaFacebookF,
FaLinkedinIn,
FaXTwitter,
} from "react-icons/fa6";

import { Link2 } from "lucide-react";

interface Props {
title: string;
}

export default function ShareBar({
title,
}: Props) {
const shareFacebook = () => {
const url = encodeURIComponent(
window.location.href
);


window.open(
  `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  "_blank"
);


};

const shareTwitter = () => {
const url = encodeURIComponent(
window.location.href
);


const text =
  encodeURIComponent(title);

window.open(
  `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
  "_blank"
);


};

const shareLinkedIn = () => {
const url = encodeURIComponent(
window.location.href
);


window.open(
  `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  "_blank"
);


};

const copyLink = async () => {
await navigator.clipboard.writeText(
window.location.href
);


alert("Link copied!");


};

const buttonClass = `
w-12
h-12
rounded-full


border
border-neutral-200

bg-white/80
backdrop-blur-md

shadow-sm

flex
items-center
justify-center

hover:bg-white
hover:border-neutral-900
hover:shadow-md

transition-all
duration-300


`;

return ( <aside
   className="
     hidden
     lg:block
     sticky
     top-32
     self-start
   "
 > <div
     className="
       flex
       flex-col
       gap-4
     "
   > <button
       onClick={shareFacebook}
       aria-label="Share on Facebook"
       className={buttonClass}
     > <FaFacebookF size={15} /> </button>


    <button
      onClick={shareTwitter}
      aria-label="Share on X"
      className={buttonClass}
    >
      <FaXTwitter size={15} />
    </button>

    <button
      onClick={shareLinkedIn}
      aria-label="Share on LinkedIn"
      className={buttonClass}
    >
      <FaLinkedinIn size={15} />
    </button>

    <button
      onClick={copyLink}
      aria-label="Copy Link"
      className={buttonClass}
    >
      <Link2 size={15} />
    </button>
  </div>
</aside>

);
}
