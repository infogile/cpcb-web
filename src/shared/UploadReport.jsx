import React, { useEffect, useRef, useState } from "react";
import { FileInput } from "./Input";
import { CancelToken } from "axios";
import axios from "../axios";

export const UploadReport = ({
  onUploadComplete,
  onRemoveFile,
  hideRemove,
  file,
  name,
  label,
  ...otherProps
}) => {
  const [progress, setProgress] = useState(-1);
  const [fileLink, setFileLink] = useState("");
  const [source, setSource] = useState(CancelToken.source());
  const fileRef = useRef(null);
  useEffect(() => {
    if (file) setProgress(101);
    setFileLink(file);
  }, [file]);
  const onClick = () => {
    const file = fileRef.current.files[0];
    if (file) {
      const formData = new FormData();
      const filename = file.name.split(".");
      const fileExtention =
        filename.length > 1 ? filename[filename.length - 1] : "";
      formData.append(name, file, `${name}.${fileExtention}`);
      axios
        .post(`/inspection/${name}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
          cancelToken: source.token,
        })
        .then((res) => {
          onUploadComplete(name, res.data.fileLocation);
          setFileLink(res.data.fileLocation);
          setProgress(101);
        })
        .catch((e) => {
          setProgress(-1);
          console.log(e);
        });
    }
  };
  const onRemove = () => {
    setProgress(-1);
    onRemoveFile(name);
  };
  const onCancel = () => {
    source.cancel("cancel upload");
    setSource(CancelToken.source());
    setProgress(-1);
  };
  return (
    <FileInput
      onUpload={onClick}
      onCancel={onCancel}
      onRemove={onRemove}
      hideRemove={hideRemove}
      label={label}
      fileRef={fileRef}
      fileLink={fileLink}
      progress={progress}
      marginTop="30px"
      {...otherProps}
    />
  );
};
