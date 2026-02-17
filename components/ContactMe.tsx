import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <div className="section-card mb-8 flex flex-col gap-4 p-5">
      <h2 className="section-title">Contact Me</h2>
      <p className="muted-copy">
        Want to chat? Just shoot me a dm with a{" "}
        <Link
          href="https://x.com/yatharth170699"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          direct question on twitter
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:yatharthverma070@gmail.com"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          yatharthverma070@gmail.com
        </Link>
      </p>
    </div>
  );
}

export default ContactMe;
