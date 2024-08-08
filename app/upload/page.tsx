"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
// https://next.cloudinary.dev/clduploadwidget/basic-usage

type CloudinaryResult = {
  //mosh used interface
  public_id: string;
};

const page = () => {
  const [publicId, setPublicId] = useState(""); // NB: array for multiple images

  return (
    // settings =>  upload => add upload preset => unsigned (easier or read docs)
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="uploaded-image"
        />
      )}
      <CldUploadWidget
        uploadPreset="mosh-nextjs"
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult; // NB: b/c not typed
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          // can limit image source to computer only, single file only etc.
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default page;
