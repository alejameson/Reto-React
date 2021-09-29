import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { getActorName } from "../../actions";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState("");

  const { Dragger } = Upload;

  const dispatch = useDispatch();

  const { push } = useHistory();

  const props = {
    name: "file",
    multiple: true,
    action: "https://whois.nomada.cloud/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        //Seteo la informacion de data y le guardo el nombre de la imagen
        setData(info.file);
        console.log(data,"DATITA TDATITITITITIT")
        //Envio el nombre de la imagen a la accion getActorName para poder buscar el nombre del actor
        dispatch(getActorName(data));

        //Redirecciono al usuario a la direccion con informacion del actor
        push("/actor")
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
      console.log(info.file);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  console.log(data);
  return (
    <div>
      <h1 align="center">Busqueda de Actor</h1>
      <Dragger {...props} maxCount={1} className="Upload">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">➕</p>
        <p className="ant-upload-text">Sube o arrastra una imagen</p>
        <p className="ant-upload-hint">
          Selecciona una imagen para buscar informacion del actor
        </p>
      </Dragger>
    </div>
  );
}
