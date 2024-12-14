import Dragger from "antd/es/upload/Dragger";
import { Controller } from "react-hook-form";
import { InboxOutlined } from "@ant-design/icons";
import { Form } from "antd";

const PHUploader = ({ name, label }: { name: string; label: string }) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value } }) => (
        <Form.Item label={label}>
          <Dragger
            onChange={(info) => {
              const { fileList } = info;
              onChange(fileList);
            }}
            fileList={value}
            multiple={true}
            beforeUpload={() => false}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>
        </Form.Item>
      )}
    />
  );
};

export default PHUploader;
