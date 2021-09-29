import React, { useState } from "react";
import { Button } from "antd";
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

export default function Home(){

const [data, setData] = useState("");

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://whois.nomada.cloud/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      setData(info.file.name);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    console.log(info.file);
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
console.log(data);
return(
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
  
);
}