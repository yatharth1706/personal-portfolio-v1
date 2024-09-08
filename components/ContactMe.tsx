import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-sm text-gray-500">
        Want to chat? Just shoot me a dm with a{" "}
        <Link
          href="https://x.com/yatharth170699"
          target="_blank"
          className="text-blue-500"
        >
          direct question on twitter
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:yatharthverma070@gmail.com"
          className="text-blue-500"
        >
          yatharthverma070@gmail.com
        </Link>
      </p>
    </div>
  );
}

export default ContactMe;
